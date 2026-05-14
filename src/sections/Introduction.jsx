import { SectionFrame, JDLogo } from "./Shared";
import subjectImg from "../assets/subject.png";
import { useEffect, useRef } from "react";
import { zoomInAnimation } from "../utils/gsapAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.clearScrollMemory();

const Introduction = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
  if (!titleRef.current || !sectionRef.current) return;

  const ctx = gsap.context(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "+=1400",
        scrub: 1,
        pin: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
    tl.to(
      titleRef.current,
      {
        scale: 3.5,
        opacity: 0.08,
        ease:"none",
      },
      0
    );
  }, sectionRef);

  return () => ctx.revert();

}, []);

  return (
    <SectionFrame theme="dark" id="introduction" dataTestId="section-introduction" ref={sectionRef}>
      <h2
        ref={titleRef}
        data-testid="introduction-title"
        className="font-display text-[22vw] sm:text-[18vw] lg:text-[12rem] xl:text-[14rem] leading-[0.82] uppercase text-[var(--cream)]"
      >
        Introduction
      </h2>

      <div className="mt-1 lg:mt-1 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start" ref = {contentRef}>
        <div className="relative">
          <div className="rounded-[28px] overflow-hidden border border-[var(--cream)]/20 shadow-sm aspect-[5/5] bg-[var(--cream)]/10">
            <img
              data-testid="intro-image"
              src={subjectImg}
              alt="Java developer at work"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:pt-10">
          <div className="flex justify-end">
            <JDLogo theme="cream" size={90} />
          </div>

          <div data-testid="intro-greeting" className="font-display uppercase text-[var(--cream)] leading-[0.9]">
            <span className="block text-5xl sm:text-6xl lg:text-7xl">Hello!</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-3">
              I'm Manish Negi,
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-1 text-[var(--cream)]">
              a Backend Java Developer
            </span>
          </div>

          <p data-testid="intro-paragraph" className="text-[var(--olive-dark)]/90 text-base sm:text-lg leading-relaxed max-w-xl">
            I build resilient, scalable backend systems with Java and the Spring ecosystem.
            From clean REST APIs to distributed microservices, my work blends pragmatic
            engineering with thoughtful architecture — code that's maintainable, well-tested,
            and built to last.
          </p>

          <p data-testid="intro-tagline" className="text-[var(--olive)] text-base sm:text-lg font-semibold">
            Let's build something dependable together.
          </p>
        </div>
      </div>
    </SectionFrame>
  );
};

export default Introduction;
