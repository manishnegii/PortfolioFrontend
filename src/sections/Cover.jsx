import {useEffect,useRef} from "react";
import { SectionFrame, JDLogo } from "./Shared";
import {heroScrollAnimation} from "../utils/gsapAnimation";

// ScrollTrigger.clearScrollMemory();

const Cover = () => {

  const sectionRef = useRef(null);
  const developerRef = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(()=> {
    heroScrollAnimation(developerRef.current,portfolioRef.current,sectionRef.current);

  },[]);

  const copyToClipboard = async(text) => {
    try{
      await navigator.clipboard.writeText(text);
    }catch(err){
      console.log(err);
    }
  }


  return (
    <SectionFrame ref = {sectionRef} theme="olive" id="cover" dataTestId="section-cover">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start overflow-hidden">
        <div>
          <h1
            ref = {developerRef}
            data-testid="cover-title"
            className="inline-block font-display text-[18vw] sm:text-[15vw] lg:text-[12.5rem] xl:text-[13rem] leading-[0.82] uppercase text-[var(--cream)]  transition-all duration 300 ease-out hover:scale-105 origin-left"
          >
            Developer
          </h1>
          <h1
            ref = {portfolioRef}
            data-testid="cover-title"
            className="inline-block font-display text-[18vw] sm:text-[15vw] lg:text-[12.5rem] xl:text-[13rem] leading-[0.82] uppercase text-[var(--cream)] transition-all duration 300  ease-out hover:scale-105 origin-left"
          >
            Portfolio
          </h1>
        </div>
        <div className="hidden lg:flex flex-col items-end justify-between h-full pt-6">
          <JDLogo theme="olive" size={170} />
          <div className="text-right mt-10">
            <p className="font-semibold tracking-[0.15em] text-sm leading-relaxed">
              CRAFTING ROBUST
              <br />
              SOLUTIONS WITH
              <br />
              JAVA
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
        <ContactItem label="Email" value="imanishnegi8000@gmail.com" href="mailto:imanishnegi8000@gmail.com" testId="cover-mail" onCopy={copyToClipboard} />
        <ContactItem label="LinkedIn" value="linkedin.com/in/manish-negi" href="https://www.linkedin.com/in/manish-negi-627401255/" testId="cover-linkedin" onCopy={copyToClipboard}/>
        <ContactItem label="Github" value="github.com/manishnegi" href="https://github.com/manishnegii/" testId="cover-github" onCopy={copyToClipboard}/>
      </div>

      <div className="lg:hidden mt-12 flex justify-center">
        <JDLogo theme="olive" size={120} />
      </div>
    </SectionFrame>
  );
};

const ContactItem = ({ label, value, href, testId }) => (
  <div data-testid={testId}>
    <p className="font-semibold text-base">{label}:</p>
    {/* <p className="text-[var(--cream)]/85 text-sm sm:text-base mt-1 break-all">{value}</p> */}
    <a className="text-var(--cream)/85 text-sm sm sm:text-base break-all hover:text-white" href = {href} targets = "_blank" rel="noopener norefrerrer">{value}</a>
  </div>
);

export default Cover;
