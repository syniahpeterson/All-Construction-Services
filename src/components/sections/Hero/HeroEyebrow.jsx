export default function HeroEyebrow({ text }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-[var(--color-border)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)] backdrop-blur-sm">
      {text}
    </span>
  );
}
