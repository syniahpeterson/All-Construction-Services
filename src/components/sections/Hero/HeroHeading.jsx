export default function HeroHeading({ title }) {
  return (
    <h1 className="max-w-3xl text-4xl font-black leading-[0.95] text-[var(--color-text)] sm:text-5xl lg:max-w-4xl lg:text-6xl xl:text-[4.25rem]">
      {title}
    </h1>
  );
}
