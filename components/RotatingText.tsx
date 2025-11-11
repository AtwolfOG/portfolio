"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function RotatingText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => (index + 1) % texts.length),
      2000
    );
    return () => clearInterval(intervalId);
  }, [texts]);
  return (
    <motion.span
      layout
      transition={{ layout: { duration: 0.2, ease: "easeInOut" } }}
      className="inline-flex overflow-hidden border"
    >
      <AnimatePresence mode="wait">
        <motion.span
          layout="size"
          initial={{ y: "100%", opacity: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          key={index}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
