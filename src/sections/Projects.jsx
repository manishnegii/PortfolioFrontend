import { SectionFrame } from "./Shared";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import subjectImg1 from "../assets/store.jpg";
import subjectImg2 from "../assets/ank.jpg";
import subjectImg3 from "../assets/user.jpg";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.clearScrollMemory();

const PROJECTS = [
  {
    n: "01",
    title: "E-Commerce Store Backend",
    stack: "Spring Boot · MySQL · JWT · Hibernate",
    desc: "Scalable e-commerce backend with secure JWT authentication, product management, order processing, cart functionality and RESTful APIs optimized for performance.",
    img: subjectImg1,
    github: "https://github.com/manishnegii/Store-SpringBoot-Backend",
    demo: "https://demo.vercel.app",
  },

  {
    n: "02",
    title: "Banking System",
    stack: "Spring Boot · Micro Services · Kafka · MySQL · Docker",
    desc: "Distributed banking platform built using microservices architecture with transaction management, inter-service communication, secure APIs, and event-driven processing.",
    img: subjectImg2,
    github: "https://github.com/manishnegii/project_name",
    demo: "https://demo.vercel.app",
  },

  {
    n: "03",
    title: "Enterprise User Service",
    stack: "Spring Boot · RDBC · JWT · RBAC · MySQL",
    desc: "Enterprise-grade identity service handling authentication, JWT lifecycle management, role-based authorization, and secure encrypted document access control.",
    img: subjectImg3,
    github: "https://github.com/manishnegii/project_name",
    demo: "https://demo.vercel.app",
  },

  {
    n: "04",
    title: "Upcoming Project",
    stack: "Distributed Systems · Cloud · Kafka",
    desc: "Currently building a scalable enterprise backend platform focused on event-driven architecture, observability, and high-performance APIs.",
    img: subjectImg1,
    upcoming: true,
  },
];

const Projects = () => {

  const sectionRef = useRef(null);
  const showcaseRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const cardsTrackRef = useRef(null);


  
  useEffect(() => {
    
    // if (
      //   !sectionRef.current ||
      //   !showcaseRef.current ||
      //   !cardsWrapperRef.current ||
      //   !cardsTrackRef.current
      // ) return;

      const isDesktop = window.innerWidth >= 1024;
      let wrapper = null;
      let handleMouseMove = null;


      if(isDesktop){

      const wrapper = cardsWrapperRef.current;
      let currentX = 0;
      const moveCards = () => {
        gsap.to(cardsTrackRef.current, {
          x: currentX,
          duration: 0.6,
          ease: "power3.out",
        });
      };
      
      const handleMouseMove = (e) => {
        const rect = wrapper.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const width = rect.width;
        const edgeSize = 200;
      
        if (mouseX < edgeSize) {
          currentX += 100;
          if (currentX > 0) {
            currentX = 0;
          }
          moveCards();
        }
      
        else if (mouseX > width - edgeSize) {
          const maxScroll =
            -(cardsTrackRef.current.scrollWidth - width);
          currentX -= 100;
          if (currentX < maxScroll) {
            currentX = maxScroll;
          }
          moveCards();
        }
      };
      wrapper.addEventListener("mousemove", handleMouseMove);
    }

    const ctx = gsap.context(() => {

      const totalScroll =
        cardsTrackRef.current.scrollWidth -
        window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          end: () => "+=1400",
          pin: false,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        showcaseRef.current,
        {
          scale: 6,
          opacity: 0.08,
          transformOrigin: "center center",
          ease: "none",
        },
        0
      );

    }, sectionRef);

    return () => {
      if(wrapper && handleMouseMove){
      wrapper.removeEventListener("mousemove",handleMouseMove);}
      
      ctx.revert();
    };

  }, []);

  return (

    <SectionFrame
      ref={sectionRef}
      theme="olive"
      id="projects"
      dataTestId="section-projects"
    >
      <div className="grid grid-cols-1 gap-12 lg:gap-16 items-start">

        <div>

          <h2
            data-testid="projects-title"
            className="
              font-display
              text-[18vw]
              sm:text-[14vw]
              lg:text-[9rem]
              xl:text-[11rem]
              leading-[0.85]
              uppercase
              text-[var(--cream)]
            "
          >

            <span
              ref={showcaseRef}
              className="
              inline-block
              will-change-transform
              "
            >
              Project
            </span>
              <br />
              Showcases
  

          </h2>

          <p
            data-testid="projects-description"
            className="
              mt-10
              lg:mt-16
              max-w-xl
              text-[var(--cream)]/85
              text-base
              sm:text-lg
              leading-relaxed
            "
          >
            A curated selection of backend systems I've architected and shipped
            — each one demonstrating careful API design, performance
            engineering, and a commitment to clean, well-tested Java.
          </p>

        </div>

      </div>
      <div
        ref={cardsWrapperRef}
        className="
          relative
          w-full
          overflow-hidden
          cursor-grab
          active:cursor-grabbing
        "
      >

        <div
          ref={cardsTrackRef}
          data-testid="projects-grid"
          className="
            flex
            flex-wrap
            lg:flex-nowrap
            gap-6
            pb-8
            will-change-transform
          "
        >

          {PROJECTS.map((p) => (
            <ProjectCard
              key={p.n}
              project={p}
            />
          ))}

        </div>

      </div>

    </SectionFrame>
  );
};

const ProjectCard = ({ project }) => (

  <div
    data-testid={`project-card-${project.n}`}
    className="
      project-card

      w-full
      sm:w-[calc(50%-1rem)]
      lg:w-[400px]
      flex-shrink-0
      group
      rounded-2xl
      overflow-hidden
      bg-[var(--olive-dark)]
      border
      border-[var(--cream)]/10
      hover:border-[var(--cream)]/30
      transition-all
      duration-300
    "
  >

    {/* IMAGE */}

    <div
      className="
        aspect-video
        overflow-hidden
        bg-[var(--olive-dark)]
      "
    >

      <img
        src={project.img}
        alt={project.title}

        className="
          w-full
          h-full
          object-cover

          group-hover:scale-105

          transition-transform
          duration-500
        "

        loading="lazy"
      />

    </div>

    {/* CONTENT */}

    <div className="p-6">

      <span
        className="
          text-[3.25rem]
          font-bold
          leading-[0.75]
          text-[var(--cream)]/60
        "
      >
        {project.n}
      </span>

      <h3
        className="
          mt-3
          font-bold
          text-lg
          sm:text-xl
          text-[var(--cream)]
        "
      >
        {project.title}
      </h3>

      {project.upcoming && (
        <div className="mt-2">

          <span
            className="
              px-3
              py-1
              rounded-full
              text-xs

              border
              border-[var(--cream)]/20

              text-[var(--cream)]/70
              bg-[var(--cream)]/5
            "
          >
            Upcoming
          </span>

        </div>
      )}

      <p
        className="
          mt-2
          text-xs
          sm:text-sm
          text-[var(--cream)]/70
          font-medium
        "
      >
        {project.stack}
      </p>

      <p
        className="
          mt-4
          text-[var(--cream)]/85
          text-sm
          leading-relaxed
        "
      >
        {project.desc}
      </p>

      {/* BUTTONS */}

      <div className="mt-6 flex items-center gap-3">

        {project.upcoming ? (

          <button
            disabled
            className="
              px-4
              py-2
              rounded-lg

              border
              border-[var(--cream)]/10

              text-sm
              text-[var(--cream)]/40

              cursor-not-allowed
            "
          >
            In Progress
          </button>

        ) : (
          <>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"

              className="
                px-4
                py-2
                rounded-lg

                border
                border-[var(--cream)]/20

                text-sm
                text-[var(--cream)]

                hover:bg-[var(--cream)]
                hover:text-[var(--olive-dark)]

                transition-all
                duration-300
              "
            >
              GitHub
            </a>

          </>
        )}

      </div>

    </div>

  </div>
);

export default Projects;
