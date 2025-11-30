"use client";
import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import { Hand } from "lucide-react";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-6",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>

        <BoxReveal width="100%" delay={0.3}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <Hand className="w-6 h-6 text-cyan-500 dark:text-cyan-400 animate-bounce" />
            <p className="text-center text-lg font-semibold text-slate-700 dark:text-zinc-300 animate-pulse">
              Click on the keyboard keys to explore my skills!
            </p>
            <Hand className="w-6 h-6 text-cyan-500 dark:text-cyan-400 animate-bounce" />
          </div>
        </BoxReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
