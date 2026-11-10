import { PillLink } from "@/components/Buttons";

export default function NotFound() {
  return (
    <main className="paddings mx-auto flex min-h-dvh max-w-[820px] flex-col justify-center">
      <h1 className="font-display text-[48px] font-light">Page not found.</h1>
      <p className="mt-4 text-px-white-48">The URL does not match a Condax page.</p>
      <PillLink href="/" variant="solid" className="mt-8">
        Back home
      </PillLink>
    </main>
  );
}
