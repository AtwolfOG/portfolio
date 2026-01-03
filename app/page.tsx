import Image from "next/image";
import Hero from "./hero";
import Bg from "./bg";
import HeroAboutCon from "./heroAbout";
import Services from "./services";

export default function Home() {
  return (
    <>
      <Bg />
      <HeroAboutCon />
      <Services/> 
    </>
  );
}
