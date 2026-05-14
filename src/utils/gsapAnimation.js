import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export const heroScrollAnimation = (
  developerElement,
  portfolioElement,
  triggerElement
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top top",
      end: "+=200%",
      scrub: 1,
      pin:false,
      anticipatePin: 1,
      invalidOnRefresh:true,
    },
  });

  tl.to(
    developerElement,
    {
      x: -700,
      opacity: 0,
      ease: "power2.out",
    },
    0
  );

  tl.to(
    portfolioElement,
    {
      x: 700,
      opacity: 0,
      ease: "power2.out",
    },
    0
  );
};

/*
|--------------------------------------------------------------------------
| Zoom In Animation (for titles)
|--------------------------------------------------------------------------
*/

export const zoomInAnimation = (element, trigger, options = {}) => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      element,
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: options.duration || 1.2,
        ease: options.ease || "power3.out",
        scrollTrigger: {
          trigger: trigger || element,
          start: options.start || "top 70%",
          end: options.end || "top 30%",
          scrub: options.scrub || 1.2,
          markers: options.markers || false,
          invalidateOnRefresh: true,
        },
        onComplete: () => {
          ScrollTrigger.refresh();
        }
      }
    );
  });
  
  return () => ctx.revert();
};

/*
|--------------------------------------------------------------------------
| Split Text Animation (left & right)
|--------------------------------------------------------------------------
*/

export const splitTextAnimation = (leftElement, rightElement, trigger, options = {}) => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || leftElement,
        start: options.start || "top 70%",
        end: options.end || "top 30%",
        scrub: options.scrub || 1.2,
        markers: options.markers || false,
        pinSpacing: false,
        invalidateOnRefresh: true,
      },
    });

    tl.fromTo(
      leftElement,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: options.duration || 1,
        ease: options.ease || "power3.out",
      },
      0
    );

    tl.fromTo(
      rightElement,
      {
        x: 700,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: options.duration || 1,
        ease: options.ease || "power3.out",
      },
      0
    );
  });

  return () => ctx.revert();
};

/*
|--------------------------------------------------------------------------
| Smooth Horizontal Cards Animation
|--------------------------------------------------------------------------
*/

export const smoothHorizontalCardsAnimation = (containerElement, cardsElement, options = {}) => {
  const ctx = gsap.context(() => {
    const totalScroll = cardsElement.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerElement,
        start: options.start || "top top",
        end: () => `+=${totalScroll}`,
        pin: true,
        scrub: options.scrub || 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        preventOverlaps: true,
      },
    });

    tl.to(
      cardsElement,
      {
        x: -totalScroll,
        ease: options.ease || "sine.inOut",
        force3D: true,
        overwrite: "auto",
      },
      0
    );
  });

  return () => ctx.revert();
};

/*
|--------------------------------------------------------------------------
| Showcase Scale Animation (scroll triggered)
|--------------------------------------------------------------------------
*/
export const showcaseScrollAnimation = (showcaseElement, trigger, options = {}) => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      showcaseElement,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: trigger || showcaseElement,
          start: options.start || "top 80%",
          end: options.end || "top 20%",
          scrub: options.scrub || 1.5,
          markers: options.markers || false,
          invalidateOnRefresh: true,
        },
        ease: options.ease || "power2.out",
        duration: 0.5,
      }
    );
  });

  return () => ctx.revert();
};