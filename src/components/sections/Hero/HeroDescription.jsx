export default function HeroDescription({ description }) {
  return (
    <p className="max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg sm:leading-8">
      {description}
    </p>
  );
}
