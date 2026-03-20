"use client"
import Bg from "./bg";
import HeroAboutCon from "./heroAbout";
import Services from "./services";
import Projects from "./projects";
import Footer from "./footer";
import { useEffect, useState } from "react";
import Loader from "./loader";


export default function Home() {
   const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if the window is already loaded (e.g., if the user navigated back)
    if (document.readyState === 'complete') {
      setIsLoaded(true);
      return;
    }

    const handleLoad = () => {
      setIsLoaded(true);
    };

    // Add the load event listener to the window
    window.addEventListener('load', handleLoad);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return (
    isLoaded?
    <>
      <Bg />
      <HeroAboutCon />
      <Services/> 
      <Projects/>
      <Footer/>
    </> :
    <Loader/>
  );
}
