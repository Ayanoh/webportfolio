import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

const educations = [
  {
    school: "École Mohammadia des Ingénieurs (EMI)",
    degree: "Network & Telecommunications Engineering",
    location: "Rabat, Morocco",
    period: "September 2023 - June 2026",
    specialization: "Cybersecurity & Network",
    details: "Currently in final year "
  },
  {
    school: "Preparatory Classes Mohammed 5",
    degree: "MPSI (Math, Physics, Engineering Science)",
    location: "Casablanca, Morocco",
    period: "2022 - 2023",
    specialization: "Mathematics, Physics, and Engineering Science",
    details: "Intensive preparatory program focused on advanced mathematics, physics, and engineering fundamentals"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-24 lg:px-40 xl:px-48">
        <Link href={"#education"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-12",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              EDUCATION
            </h2>
          </BoxReveal>
        </Link>

        <div className="max-w-4xl mx-auto space-y-8">
          {educations.map((edu, index) => (
            <BoxReveal key={index} width="100%" delay={0.3 + (index * 0.2)}>
              <div className="relative pl-8 border-l-2 border-cyan-500 dark:border-cyan-400">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
                    {edu.school}
                  </h3>
                  
                  <p className="text-xl text-cyan-600 dark:text-cyan-400 font-semibold">
                    {edu.degree}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <p className="flex items-start gap-2 text-slate-700 dark:text-zinc-300">
                      <BookOpen className="w-5 h-5 text-cyan-500 dark:text-cyan-400 mt-1 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Specialization:</span> {edu.specialization}
                      </span>
                    </p>
                    
                    <p className="pl-7 text-slate-600 dark:text-zinc-400 text-sm">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            </BoxReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
