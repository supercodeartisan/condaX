"""Key out the light cool plate behind the CondaX mark. Keep logo RGB intact."""
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
h, w = rgb.shape[:2]

# Background is a near-white cool plate (~#F8FAFE), not black.
border = np.concatenate(
    [
        rgb[:8].reshape(-1, 3),
        rgb[-8:].reshape(-1, 3),
        rgb[:, :8].reshape(-1, 3),
        rgb[:, -8:].reshape(-1, 3),
    ]
)
bg = np.median(border, axis=0)
diff = np.linalg.norm(rgb - bg, axis=2)

# Soft key against the plate only.
# <= 8  -> fully transparent plate
# 8..28 -> feathered AA fringe
# > 28  -> fully opaque mark
alpha = np.clip((diff - 8.0) / 20.0, 0.0, 1.0)

# Decontaminate fringe so plate color does not tint the silhouette.
a = alpha[..., None]
eps = 1e-6
clean = (rgb - bg * (1.0 - a)) / np.maximum(a, eps)
clean = np.clip(clean, 0, 255)

out = np.empty((h, w, 4), dtype=np.uint8)
out[:, :, 0:3] = np.round(np.where(a > 0.02, clean, rgb)).astype(np.uint8)
out[:, :, 3] = np.round(alpha * 255).astype(np.uint8)

# Mild alpha-only blur for smoother silhouette
alpha_img = Image.fromarray(out[:, :, 3], mode="L").filter(ImageFilter.GaussianBlur(radius=0.5))
a2 = np.array(alpha_img).astype(np.float32)
a2 = np.where(diff > 40, 255, a2)
a2 = np.where(diff <= 6, 0, a2)
out[:, :, 3] = np.clip(a2, 0, 255).astype(np.uint8)

mask = out[:, :, 3] > 8
ys, xs = np.where(mask)
pad = 48
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
print("bg plate", bg.round(1).tolist())
print("done")
