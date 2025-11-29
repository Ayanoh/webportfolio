import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";

const AboutSection = () => {
  return (
    <section id="about" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-24 lg:px-40 xl:px-48">
        <Link href={"#about"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-12",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              WHO AM I
            </h2>
          </BoxReveal>
        </Link>
        
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-700 dark:text-zinc-300">
          <BoxReveal width="100%" delay={0.3}>
            <p className="leading-relaxed">
              I&apos;m a final-year <span className="text-cyan-500 dark:text-cyan-400 font-semibold">Cybersecurity Engineering student</span> at the <span className="text-cyan-500 dark:text-cyan-400 font-semibold">Mohammadia School of Engineers</span>, passionate about how AI and automation reshape modern SOCs.
            </p>
          </BoxReveal>

          <BoxReveal width="100%" delay={0.5}>
            <p className="leading-relaxed">
              Certified in <span className="text-cyan-500 dark:text-cyan-400 font-semibold">CompTIA Security+</span>, I specialize in building intelligent systems that enhance detection, response, and decision-making in security operations. My key interests include <span className="text-cyan-500 dark:text-cyan-400 font-semibold">incident response</span>, <span className="text-cyan-500 dark:text-cyan-400 font-semibold">digital forensics</span>, and <span className="text-cyan-500 dark:text-cyan-400 font-semibold">AI-driven threat analysis</span>.
            </p>
          </BoxReveal>

          <BoxReveal width="100%" delay={0.7}>
            <p className="leading-relaxed">
              I value innovation, continuous learning, and bridging the gap between human expertise and machine intelligence. Let&apos;s build the next generation of <span className="text-cyan-500 dark:text-cyan-400 font-semibold">smarter, faster, and autonomous security operations</span>.
            </p>
          </BoxReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
