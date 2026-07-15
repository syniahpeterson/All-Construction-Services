import { Section } from "../../ui";

import { trustBar } from "../../../data/pages/home/tustBar";

import TrustItem from "./TrustItem";

export default function TrustBar() {
  return (
    <Section className="py-8 sm:py-10 lg:py-12">
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-full rounded-[28px] border border-[var(--color-border)] bg-[rgba(255,255,255,0.04)] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:max-w-2xl sm:p-5 md:max-w-4xl lg:max-w-6xl lg:p-6">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
            {trustBar.map((item) => (
              <TrustItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
