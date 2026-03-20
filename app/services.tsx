"use client"

import { useGSAP  } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP)
export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
  const mm = gsap.matchMedia()
  mm.add("(min-width: 768px)", function(){
    const tl = gsap.timeline()
    tl.to(".card-wrapper", { borderRadius: "10%"}, 0)
    tl.to(".card-wrapper", { scale: 0.8, }, 0)
    tl.to(".outer", { rotateY: "180deg"})
    ScrollTrigger.create({
      trigger: containerRef.current,
      animation: tl,
      start: "top top",
      end: "+=2000px",
      scrub: 1,
      pin: true,
    })
    })
    mm.add("(max-width: 767px)", function(){
    const tl = gsap.timeline()
    const cardWrappers: HTMLElement[] = gsap.utils.toArray(".card-wrapper")
    cardWrappers.forEach((val, i)=>{
      const anim = gsap.timeline()
      anim.fromTo(val, {
        y: "100vh",
      },{
        y: 0,
      }, 0)
      anim.to(val, {
        borderRadius: "10%"
      })
      const outer = gsap.utils.selector(val)(".outer")
      anim.to(outer, { rotateY: "180deg"}, 1)
      anim.to(val, {rotateZ: ()=> i % 2 == 1? "5deg" : "-5deg"}, 2)
      tl.add(anim, i * 3)
    })
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      animation: tl,
      start: "top top",
      end: "+=4000px",
      scrub: 1,
      pin: true,
    })
    })
  }, {scope: containerRef})
  return (
    <div ref={containerRef} className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-[300px] md:w-[90dvw] aspect-7/10 md:aspect-21/10 max-w-[1050px]  gap-y-7 gap-x-0">
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
    <div className="card-wrapper absolute md:relative w-[300px]  aspect-7/10 md:w-[33.333333%] transform-3d overflow-hidden">
      <div className="card outer  perspective-near transform-3d relative w-full aspect-7/10  ">
        <div className="front">
          <Image
            fill={true}
            alt={"card"}
            src={src}
            className="image h-full relative backface-hidden "
          />
        </div>
        <div className="inner flex justify-center items-center absolute inset-0 origin-center bg-[#333] rotate-y-180 transform-3d backface-hidden">
          <p className="max-w-[20ch] text-2xl! translate-z-10"> {text}</p>
        </div>
      </div>
    </div>
  );
}

