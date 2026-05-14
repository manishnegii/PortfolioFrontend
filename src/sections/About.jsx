import { SectionFrame } from "./Shared";
import subjectImg from "../assets/subject.png";
import { useEffect, useRef } from "react";
import { splitTextAnimation } from "../utils/gsapAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.clearScrollMemory();

const About = () => {
  const sectionRef = useRef(null);
  const aboutRef = useRef(null);
  const developerRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current && developerRef.current && sectionRef.current) {
      splitTextAnimation(aboutRef.current, developerRef.current, sectionRef.current, {
        start: "top 60%",
        scrub: 1.2,
      });

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:sectionRef.current,
          start: "top top",
          end: "+=1400",
          scrub:1,
          pin:false,
          anticipatePin:1,
          invalidateOnRefresh:true,
        },
      });

      tl.to(developerRef.current,{
        scale:3.5,
        opacity:0.08,
        ease:"none",
      },
    0);

    },sectionRef);
      
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, []);

  return (
    <SectionFrame theme="olive" id="about" dataTestId="section-about" ref={sectionRef}>
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(250px,400px)_1fr] gap-10 lg:gap-16 items-center">
        <div className="rounded-[36px] overflow-hidden aspect-[4/5] bg-[var(--olive-dark)]">
          <img
            data-testid="about-image"
            src={subjectImg}
            alt="Manish negi portrait"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div
          data-testid="about-title" className="font-display uppercase leading-[0.85] text-[var(--cream)]"
        >
          <div className="flex-items-end gap-20 lg:gap-32">
        <span
          ref={aboutRef}
          className="mr-20 lg:mr-30 text-[10vw] sm:text-[14vw] lg:text-[10rem] xl:text-[12rem]"
        >
          About
        </span>
        <span
          className="text-[10vw] sm:text-[14vw] lg:text-[10rem] xl:text-[12rem]"
        >
          The
        </span>
        </div>
        <span
          ref={developerRef}
          className="block text-[18vw] sm:text-[14vw] lg:text-[10rem] xl:text-[12rem]"
        >
          Developer
        </span>

        </div>
        
      </div>
      

      <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
        <div data-testid="about-me-block">
          <h3 className="font-bold text-xl sm:text-2xl text-[var(--cream)]">About Me.</h3>
          <p className="mt-4 text-[var(--cream)]/85 text-base sm:text-lg leading-relaxed">
            I'm Manish Negi, a Backend Java Developer passionate about building robust and scalable backend systems. I specialize in Spring Boot, microservices, distributed
            systems, and JVM performance tuning — turning complex requirements into
            reliable, maintainable services.
          </p>
        </div>

        <div data-testid="about-philosophy-block">
          <h3 className="font-bold text-xl sm:text-2xl text-[var(--cream)]">Coding Philosophy.</h3>
          <p className="mt-4 text-[var(--cream)]/85 text-base sm:text-lg leading-relaxed">
            Great software is where clarity meets craftsmanship. It's not just about making
            things work — it's about writing code others can read, test, and extend with
            confidence years from now.
          </p>
        </div>
      </div>

      <div className="mt-12 lg:mt-16 flex flex-wrap gap-3" data-testid="skill-pills">
        {[
          "Core Java",
          "Spring Boot",
          "Hibernate / JPA",
          "Microservices",
          "Kafka",
          "MYSQL",
          "Docker",
          "Redis",
          "ElasticSearch",
        ].map((s) => (
          <span
            key={s}
            className="px-4 py-2 rounded-full border border-[var(--cream)]/40 text-[var(--cream)] text-sm font-medium hover:bg-[var(--cream)] hover:text-[var(--olive-deep)] transition-colors cursor-default"
          >
            {s}
          </span>
        ))}
      </div>
    </SectionFrame>
  );
};

export default About;
