import { ArrowRight } from "lucide-react";
import React, {forwardRef} from "react";

export const SectionFrame = forwardRef(({ children, theme = "olive", id, dataTestId },ref) => {
  const isCream = theme === "cream";
  return (
    <section
      id={id}
      ref = {ref}
      data-testid={dataTestId}
      className={`relative grain w-full min-h-screen overflow-x-hidden overflow-y-auto flex flex-col justify-center ${
        isCream ? "bg-[var(--cream)] text-[var(--olive-dark)]" : "bg-[var(--olive)] text-[var(--cream)]"
      }`}
    >
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20 lg:py-24 w-full">
        <TopBar theme={theme} />
        <div className="mt-8 sm:mt-12">{children}</div>
      </div>
    </section>
  );
});

export const TopBar = ({ theme = "olive" }) => {
  const isCream = theme === "cream";
  const fg = isCream ? "text-[var(--olive-dark)]" : "text-[var(--cream)]";
  const muted = isCream ? "text-[var(--olive-dark)]/70" : "text-[var(--cream)]/70";
  const ring = isCream ? "border-[var(--olive-dark)]" : "border-[var(--cream)]";

  return (
    <div className={`flex items-center justify-between ${fg}`}>
      <div className="flex items-baseline gap-2">
        <span data-testid="brand-name" className="font-bold text-sm sm:text-base tracking-tight">
          Manish Negi.
        </span>
        <span className={`text-xs sm:text-sm ${muted}`}>Backend Java Developer.</span>
      </div>
      <button
        data-testid="topbar-arrow-btn"
        aria-label="next-section"
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" })}
        className={`arrow-pill inline-flex items-center justify-center h-7 sm:h-8 w-[100px] rounded-full border ${ring} ${fg}`}
      >
        <ArrowRight className="h-4 w-6 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
};

export const JDLogo = ({ theme = "olive", size = 200 }) => {
  const isCream = theme === "cream";
  const stroke = isCream ? "var(--olive-dark)" : "var(--cream)";
  const fill = isCream ? "var(--olive-dark)" : "var(--cream)";
  return (
    <svg
      width={size}
      height={size * 1}
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="jd-logo"
    >
      <ellipse cx="80" cy="100" rx="90" ry="89" stroke={stroke} strokeWidth="12" />
      <text
        x="50%"
        y="65%"
        textAnchor="middle"
        fontFamily="Bebas Neue, sans-serif"
        fontSize="96"
        fill={fill}
        letterSpacing="-2"
      >
        MN
      </text>
    </svg>
  );
};
