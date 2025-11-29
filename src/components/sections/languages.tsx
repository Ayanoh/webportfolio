import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { Globe, Star } from "lucide-react";

const languages = [
  {
    name: "Arabic",
    level: "Native",
    percentage: 100,
    color: "border-green-500 hover:border-green-400",
    badgeColor: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30"
  },
  {
    name: "French",
    level: "Fluent",
    percentage: 95,
    color: "border-blue-500 hover:border-blue-400",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30"
  },
  {
    name: "English",
    level: "Professional",
    percentage: 90,
    color: "border-purple-500 hover:border-purple-400",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30"
  },
];

// Helper function to render 5 full stars
const renderStars = () => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={`star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
};

const LanguagesSection = () => {
  return (
    <section id="languages" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-24 lg:px-40 xl:px-48">
        <Link href={"#languages"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-12",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              LANGUAGES
            </h2>
          </BoxReveal>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {languages.filter(l => l && l.name).map((lang, index) => {
            try {
              const safeLang = {
                name: lang?.name || "Language",
                level: lang?.level || "",
                percentage: lang?.percentage || 0,
                color: lang?.color || "border-gray-500",
                badgeColor: lang?.badgeColor || "bg-gray-500/10 text-gray-600",
              };

              return (
                <BoxReveal key={`language-${safeLang.name}-${index}`} width="100%" delay={0.2 * (index + 1)}>
                  <div
                    className={cn(
                      "relative p-6 rounded-xl border-2 transition-all duration-300 group",
                      "bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm",
                      "hover:shadow-xl hover:-translate-y-1",
                      safeLang.color
                    )}
                  >
                    {/* Globe icon */}
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-slate-100 dark:bg-zinc-800 group-hover:scale-110 transition-transform">
                        <Globe className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                      </div>
                    </div>

                    {/* Language name */}
                    <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-3">
                      {safeLang.name}
                    </h3>

                    {/* Level badge */}
                    <div className="flex justify-center mb-4">
                      <span
                        className={cn(
                          "px-4 py-1.5 rounded-full text-sm font-semibold border",
                          safeLang.badgeColor
                        )}
                      >
                        {safeLang.level}
                      </span>
                    </div>

                    {/* Star rating */}
                    <div className="flex justify-center">
                      {renderStars()}
                    </div>
                  </div>
                </BoxReveal>
              );
            } catch (error) {
              console.error('Error rendering language:', error);
              return null;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
