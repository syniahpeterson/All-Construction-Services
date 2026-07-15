export default function HeroBackground() {
  return (
    <>
      {/* Main Background Gradient */}
      <div
        className="
          absolute
          inset-0
          -z-30
          bg-[var(--color-background)]
        "
      />

      {/* Primary Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          -z-20
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[var(--color-primary)]
          opacity-10
          blur-[180px]
        "
      />

      {/* Accent Glow */}
      <div
        className="
          absolute
          bottom-0
          right-0
          -z-20
          h-96
          w-96
          rounded-full
          bg-[var(--color-accent)]
          opacity-10
          blur-[120px]
        "
      />

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-[0.04]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}
