import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Cover from "./sections/Cover";
import Introduction from "./sections/Introduction";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Marquee from "./sections/Marquee";
import {useEffect} from "react";

const Home = () => {

  useEffect(()=> {

    if("scrollResotaion" in window.history) {
    window.history.scrollRestoration = "manual";
    }
    
    window.scrollTo({
      top:0,
      left:0,
      behavior:"instant",
    });

  },[]);



  return (
    <main data-testid="portfolio-root" className="w-full h-auto flex flex-col overflow-x-hidden">
      <Cover />
      <Introduction />
      <About />
      <Marquee />
      <Projects />
      <Contact />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
