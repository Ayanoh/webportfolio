"use client";
import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

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
          <p className="text-center text-slate-600 dark:text-zinc-400 mb-12">
            Press the keys on the keyboard 
          </p>
        </BoxReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
