"""Make only the black plate transparent. Keep original RGB colors untouched."""
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

root = Path(r"d:\Work\Consulting\public")
src = root / "logo-original.png"
if not src.exists():
    raise SystemExit("logo-original.png missing")

im = Image.open(src).convert("RGBA")
arr = np.array(im)
rgb = arr[:, :, :3].astype(np.float32)
orig_a = arr[:, :, 3].astype(np.float32)
h, w = rgb.shape[:2]

# Channel max: background plate is ~0; logo blues are clearly higher.
max_ch = rgb.max(axis=2)

# Soft key against black only. RGB is never rewritten.
# <= 3  -> fully transparent plate
# 3..22 -> feathered AA fringe (original RGB kept)
# > 22  -> fully opaque original mark
alpha = np.clip((max_ch - 3.0) / 19.0, 0.0, 1.0) * orig_a

out = np.empty_like(arr)
out[:, :, 0:3] = arr[:, :, 0:3]  # keep original colors exactly
out[:, :, 3] = np.round(alpha).astype(np.uint8)

# Mild alpha-only blur for smoother silhouette — RGB untouched
alpha_img = Image.fromarray(out[:, :, 3], mode="L").filter(ImageFilter.GaussianBlur(radius=0.6))
a2 = np.array(alpha_img).astype(np.float32)
# Re-assert: strong logo pixels stay fully opaque
a2 = np.where(max_ch > 28, orig_a, a2)
a2 = np.where(max_ch <= 2, 0, a2)
out[:, :, 3] = np.clip(a2, 0, 255).astype(np.uint8)

mask = out[:, :, 3] > 4
ys, xs = np.where(mask)
pad = 64
y0, y1 = max(0, int(ys.min()) - pad), min(h, int(ys.max()) + pad + 1)
x0, x1 = max(0, int(xs.min()) - pad), min(w, int(xs.max()) + pad + 1)
cropped = out[y0:y1, x0:x1]
result = Image.fromarray(cropped, "RGBA")

result.save(root / "logo-transparent.png", "PNG", optimize=True)

for name, size in [("logo.png", 960), ("logo-2x.png", 1920)]:
    cw, ch = result.size
    scale = size / max(cw, ch)
    nw, nh = max(1, int(round(cw * scale))), max(1, int(round(ch * scale)))
    resized = result.resize((nw, nh), Image.Resampling.LANCZOS)
    resized.save(root / name, "PNG", optimize=True)
    aa = np.array(resized.getchannel("A"))
    print(name, resized.size, "transparent%", round(float((aa == 0).mean()) * 100, 1))

cy, cx = cropped.shape[0] // 2, cropped.shape[1] // 2
print("center RGBA", cropped[cy, cx].tolist())
print("corner alpha", int(cropped[0, 0, 3]))
print("done")
