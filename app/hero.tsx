import RotatingText from "@/components/RotatingText";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 grid-rows-[60%,40%] h-dvh items-end justify-items-center">
      <div className="flex flex-wrap justify-center items-center gap-10   ">
        <div className="text-right">
          <header>
            <h1 className="hero-title">JUST A RANDOM</h1>
            <h1 className="hero-title">DEVELOPER</h1>
          </header>
        </div>
        <div className="size-[250px] relative rounded-full overflow-hidden">
          <Image src={"/images/pic.jpeg"} alt="Ayokunle" fill />
        </div>
      </div>
      <motion.h2 className="inline hero-subtext my-5" layout="size">
        <span>I am Ayokunle Adedapo and i build </span>{" "}
        <RotatingText
          texts={["scalable", "dynamic", "responsive", "creative"]}
        />
        <span> website </span>
      </motion.h2>
    </div>
  );
}
