"use client";
import About from "./about";
import Hero from "./hero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, Observer, ScrollTrigger);

export default function HeroAboutCon() {
  const container = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(-1);
  const allowScroll = useRef(false);
  const isAnimating = useRef(false);

  useGSAP(
    (context, contextSafe) => {
      if (!contextSafe) return;
      const sections: HTMLElement[] = gsap.utils.toArray("section");
      const scrollTimeout = gsap
        .delayedCall(1, () => (allowScroll.current = true))
        .pause();
      const outerWrapper: HTMLElement[] = gsap.utils.toArray(".outer");
      const innerWrapper: HTMLElement[] = gsap.utils.toArray(".inner");
      //  set inner and outer wrappers position in the dom
      gsap.set(innerWrapper, { yPercent: 0 });
      gsap.set(outerWrapper, { yPercent: 100, autoAlpha: 1 });
      let restoreScroll: () => void;
      const intentObserver = Observer.create({
        type: "wheel,touch,pointer",
        tolerance: 10,
        wheelSpeed: -1,
        onUp: () =>
          allowScroll.current &&
          !isAnimating.current &&
          gotoSection(currentIndex.current + 1, 1),
        onDown: () =>
          allowScroll.current &&
          !isAnimating.current &&
          gotoSection(currentIndex.current - 1, -1),
        onEnable(self) {
          allowScroll.current = false;
          scrollTimeout.restart(true);
          const savedScroll = self.scrollY();
          restoreScroll = () => self.scrollY(savedScroll);
          document.addEventListener("scroll", restoreScroll, { passive: true });
        },
        onDisable() {
          if (restoreScroll)
            document.removeEventListener("scroll", restoreScroll);
        },
      });
      intentObserver.disable();
      // animate to the new  section
      const gotoSection = contextSafe((index: number, direction: number) => {
        console.log("go to section called, direction:", direction);
        if (index >= sections.length && direction == 1) {
          intentObserver.disable();
          return;
        }
        if (index < 0 && direction == -1) return;
        isAnimating.current = true;
        const tl = gsap.timeline({
          defaults: { duration: 2 },
          onComplete: () => {
            isAnimating.current = false;
          },
        });
        if (currentIndex.current >= 0) {
          gsap.set(sections[currentIndex.current], { zIndex: 0 });
          tl.fromTo(
            outerWrapper[currentIndex.current],
            { yPercent: 0 },
            { yPercent: -100 * direction },
            0
          );
          tl.fromTo(
            innerWrapper[currentIndex.current],
            { yPercent: 0 },
            { yPercent: 85 * direction },
            0
          );
        }
        gsap.set(sections[index], { zIndex: 1 });
        tl.fromTo(
          outerWrapper[index],
          { yPercent: 100 * direction },
          { yPercent: 0 },
          0
        );
        tl.fromTo(
          innerWrapper[index],
          { yPercent: -85 * direction },
          { yPercent: 0 },
          0
        );
        currentIndex.current = index;
      });
      gotoSection(0, 1);
      gsap.to(".about-content", {
        backgroundSize: "100% 100%",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=2000px",
          pin: true,
          scrub: 1,
          onEnter(self) {
            intentObserver.enable();
            self.scroll(self.start);
          },
          onUpdate(self) {
            const pixelCount = Math.floor(
              self.progress * (self.end - self.start)
            );
            if (pixelCount == 0) {
              intentObserver.enable();
              self.scroll(self.start);
            }
          },
        },
      });
      // ScrollTrigger.create();
    },
    { scope: container }
  );
  return (
    <div ref={container} className="h-dvh overflow-hidden">
      <section className="fixed top-0 ">
        <div className="outer h-dvh w-dvw overflow-hidden  invisible">
          <div className="inner h-dvh ">
            <Hero />
          </div>
        </div>
      </section>
      <section className="fixed top-0">
        <div className="outer h-dvh  overflow-hidden  invisible">
          <div className="inner h-dvh ">
            <About />
          </div>
        </div>
      </section>
    </div>
  );
}
