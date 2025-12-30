"use client"

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  useGSAP((context, contextSafe) => {
    
  })
  return (
    <div className="h-dvh w-dvw flex items-center justify-center">
      <div className="flex md:flex-row w-[300px] md:w-[90dvw] max-w-[1050px]  gap-y-7 gap-x-0  border border-b-amber-900">
        <Cards
          text={
            "Clean, responsive interfaces built for great user experience."
          }
          src="/images/card1.png"
        />
        <Cards
          text={
            "Scalable, secure APIs and server-side logic."
          }
          src="/images/card2.png"
        />
        <Cards
          text={
            "End-to-end web applications, form database to UI."
          }
          src="/images/card3.png"
        />
      </div>
    </div>
  );
}


function Cards({ text, src }: { text: string, src: string }) {
  return (
    <div className="card-wrapper w-[300px]  aspect-7/10  border-yellow-500 md:w-[33.33%]">
      <div className="card outer  perspective-near  transform-3d relative w-full aspect-7/10">
        <Image
          fill={true}
          alt={"card"}
          src={src}
          className="image h-full relative backface-hidden"
        />
        <div className="inner h-full absolute top-[50%] left-[50%] origin-center -translate-x-[50%] rotate-y-180 text-2xl   -translate-z-10">
          <p> {text}</p>
        </div>
      </div>
    </div>
  );
}

