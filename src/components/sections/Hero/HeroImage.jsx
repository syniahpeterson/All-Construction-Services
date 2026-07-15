import { BadgeCheck, ShieldCheck } from "lucide-react";

import HeroBadge from "./HeroBadge";

import heroImage from "../../../assets/images/hero/hero-worker.webp";

import logoIcon from "../../../assets/logo/icon-logo.webp";

export default function HeroImage() {
  return (
    <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center lg:max-w-4xl xl:mx-0 xl:max-w-none">
      <div className="absolute inset-0 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(94,124,114,.18),transparent_55%)]" />
      <div className="absolute h-[26rem] w-[26rem] rounded-full bg-[var(--color-primary)]/20 blur-[140px] sm:h-[32rem] sm:w-[32rem] lg:h-[36rem] lg:w-[36rem] xl:h-[40rem] xl:w-[40rem]" />
      <div className="absolute bottom-4 right-4 h-32 w-32 rounded-full bg-[var(--color-accent)]/12 blur-[90px] sm:h-40 sm:w-40 lg:h-44 lg:w-44" />

      <img
        src={logoIcon}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 m-auto w-[24rem] opacity-[0.04] sm:w-[28rem] lg:w-[32rem] xl:w-[36rem]"
      />

      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:max-w-4xl lg:rounded-[40px] xl:max-w-none">
        <img
          src={heroImage}
          alt="Licensed asbestos removal technician wearing protective equipment."
          className="w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <HeroBadge
        icon={ShieldCheck}
        title="Licensed & Insured"
        subtitle="Residential & Commercial"
        className="absolute top-8 z-20 hidden left-0 lg:block lg:top-12 xl:top-16"
      />

      <HeroBadge
        icon={BadgeCheck}
        title="EPA Compliant"
        subtitle="Safety First"
        className="absolute bottom-8 z-20 hidden right-0 lg:block lg:bottom-12 xl:bottom-16"
      />
    </div>
  );
}
