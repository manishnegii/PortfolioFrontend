import { ArrowRight } from "lucide-react";

const MARQUEE_ITEMS = [
  "SKILLS",
  "COrE JaVa",
  "SPRING BOOT",
  "MICROSERVICES",
  "KAFKA",
  "MYSQL",
  "DOCKER",
  "ElAsTiCsEArcH",
  "AWS",
  "ReDiS",
  "HIBERNATE",
];

const Marquee = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      data-testid="skills-marquee"
      className="w-full bg-[var(--olive-deep)] border-y border-[var(--cream)]/15 overflow-hidden py-5"
    >
      <div className="flex marquee-track whitespace-nowrap">
        {items.map((label, i) => (
          <div key={i} className="flex items-center gap-8 px-8 shrink-0">
            <span className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-[var(--cream)]">
              {label}
            </span>
            <ArrowRight className="h-5 w-5 text-[var(--cream)]/60" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
