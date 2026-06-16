import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { File, Download } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

// Resume versions. To enable the English CV later: drop the PDF at the `path`
// below and flip `available` to true — the toggle handles the rest.
const RESUMES = {
  fr: {
    path: "/assets/ELMaskaoui_Oussama_CV.pdf",
    file: "ELMaskaoui_Oussama_CV.pdf",
    available: true,
  },
  en: {
    path: "/assets/ELMaskaoui_Oussama_CV_EN.pdf",
    file: "ELMaskaoui_Oussama_CV_EN.pdf",
    available: false,
  },
} as const;

type ResumeLang = keyof typeof RESUMES;

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const [resumeLang, setResumeLang] = useState<ResumeLang>("fr");
  const currentResume = RESUMES[resumeLang];

  return (
    <section id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
          )}
        >
          {!isLoading && (
            <>
              <div className="">
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>
                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "font-thin text-6xl text-transparent text-slate-800 ml-1 text-left",
                          "cursor-default text-edge-outline font-display sm:text-7xl md:text-9xl "
                        )}
                      >
                        Oussama
                        <br />
                        <span className="md:inline block">EL </span>
                        <br className="md:hidden" />
                        <span className="md:inline block">Maskaoui</span>
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      Cybersecurity Engineering Student
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Cyber Security Student
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 md:ml-2 flex flex-col gap-3">
                <Dialog>
                  <DialogTrigger asChild className="flex-1">
                    <div>
                      <BoxReveal delay={2} width="100%">
                        <Button className="flex items-center gap-2 w-full cursor-pointer">
                          <File size={24} />
                          <p>Resume</p>
                        </Button>
                      </BoxReveal>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl h-[95vh] p-0 overflow-hidden flex flex-col">
                    <DialogHeader className="px-6 pt-4 pb-3 shrink-0">
                      <div className="flex flex-wrap items-center justify-between gap-3 pr-14">
                        <DialogTitle className="text-2xl">My Resume</DialogTitle>
                        <div className="flex items-center gap-3">
                          <div className="flex rounded-md border border-slate-300 dark:border-zinc-700 overflow-hidden text-sm font-medium">
                            {(["fr", "en"] as ResumeLang[]).map((lang) => (
                              <button
                                key={lang}
                                type="button"
                                onClick={() => setResumeLang(lang)}
                                className={cn(
                                  "px-3 py-1.5 transition-colors",
                                  resumeLang === lang
                                    ? "bg-cyan-600 text-white dark:bg-cyan-500"
                                    : "bg-transparent text-slate-600 hover:bg-slate-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                )}
                                aria-pressed={resumeLang === lang}
                              >
                                {lang === "fr" ? "🇫🇷 FR" : "🇬🇧 EN"}
                              </button>
                            ))}
                          </div>
                          {currentResume.available ? (
                            <a
                              href={currentResume.path}
                              download={currentResume.file}
                              className="flex items-center gap-2"
                            >
                              <Button className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600">
                                <Download size={18} />
                                Download
                              </Button>
                            </a>
                          ) : (
                            <Button
                              disabled
                              className="flex items-center gap-2 opacity-50 cursor-not-allowed"
                            >
                              <Download size={18} />
                              Download
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogHeader>
                    <div className="flex-1 px-6 pb-6 min-h-0">
                      {currentResume.available ? (
                        <iframe
                          src={currentResume.path}
                          className="w-full h-full border-0 rounded-lg"
                          title="Resume PDF"
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-slate-300 dark:border-zinc-700 text-center text-slate-500 dark:text-zinc-400">
                          <File size={48} />
                          <p className="text-lg font-semibold">
                            English version coming soon
                          </p>
                          <p className="max-w-sm text-sm">
                            The English résumé isn&apos;t ready yet. Switch to{" "}
                            <span className="font-medium">🇫🇷 FR</span> to view the
                            current version.
                          </p>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Let&apos;s work together! 🚀</p>
                    </TooltipContent>
                  </Tooltip>
                  <Link
                    href={config.social.github}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <SiGithub size={24} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <SiLinkedin size={24} />
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
