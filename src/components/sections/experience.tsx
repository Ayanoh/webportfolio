"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { BoxReveal } from "../reveal-animations";
import { Briefcase, MapPin, Calendar, ZoomIn, X, Eye, ArrowUpRight, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import Image from "next/image";

// Composant pour afficher une image avec zoom
const ZoomableImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <>
      <div 
        className="relative rounded-lg overflow-hidden border-2 border-slate-200 dark:border-zinc-700 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 group h-48"
        onClick={() => setIsZoomOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={(e) => {
            console.error(`Failed to load image: ${src}`);
          }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Modal de zoom */}
      <Dialog open={isZoomOpen} onOpenChange={setIsZoomOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] p-2">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const experiences = [
  {
    title: "AI Security Engineer",
    company: "Sekera",
    contractType: "Freelance",
    dialogTitle: "AI Security Engineer at",
    dialogCompany: "Sekera (Freelance)",
    logo: "/companies/sekera.png",
    location: "Casablanca, Morocco (Remote)",
    period: "August 2026 - Present",
    githubUrl: "https://github.com/Ayanoh/Vinci-ADR",
    githubLabel: "View Vinci ADR on GitHub",
    description: [
      "Built Vinci ADR — an open-source Agent Detection & Response framework that acts as a security layer between AI agents and the systems they operate on.",
      "Intercepts, analyzes, and blocks malicious agent behavior in real-time — before it reaches the host.",
      "Protects the full execution lifecycle: prompt input, tool calls, and generated output.",
      "Validated at 100% recall on DEF CON 31 AI Village and 98.86% block rate on NVIDIA Garak.",
    ],
    detailedDescription: "Built Vinci ADR — an open-source, real-time Agent Detection & Response (ADR) framework that protects AI agents and LLMs across their full execution lifecycle: input validation, runtime tool execution interception, and output sanitization. Operating as a freelance AI Security Engineer with Sekera, I designed and built this defense layer to secure agentic workflows against prompt injections, unauthorized tool invocations, privilege escalations, and credential leakage.",
    technologies: [
      "Agent Detection & Response (ADR)",
      "Python",
      "Model Context Protocol (MCP)",
      "JSON-RPC 2.0",
      "LangChain / LangGraph",
      "DeBERTa-v3",
      "ModernBERT",
      "Meta Prompt-Guard",
      "MITRE ATT&CK (SigmaHQ/Sage)",
      "DLP & Shannon Entropy",
      "NVIDIA Garak",
      "DEF CON 31 AI Village",
      "CWE Top 25",
      "Linux Daemons",
      "Docker",
    ],
    achievements: [
      {
        title: "Dual-Tier Architecture & Cognitive Dual-Agent System",
        description: "Engineered a dual-tier detection engine combining 1,803 MITRE ATT&CK detection rules (SigmaHQ/Sage), 210 DLP secret patterns (Gitleaks + Shannon Entropy), and neural classifiers (DeBERTa-v3, ModernBERT, Meta Prompt-Guard) with an autonomous dual-agent investigation system for ambiguous threats — all executing under 20ms latency on CPU."
      },
      {
        title: "Framework-Agnostic Tool Interception Daemon",
        description: "Developed a low-latency interception daemon with native Model Context Protocol (MCP / JSON-RPC 2.0) and LangChain middleware, inspecting parameters and blocking destructive actions before execution regardless of the underlying LLM provider."
      },
      {
        title: "Output Security Layer & Static Code Analysis",
        description: "Implemented an automated egress security layer with real-time secret redaction (DLP) and CWE Top 25 static security analysis on AI-generated code snippets to prevent vulnerability propagation."
      },
      {
        title: "Benchmark Validation & Security Evals",
        description: "Achieved 100% attack recall on the DEF CON 31 AI Village benchmark, a 98.86% block rate against NVIDIA garak adversarial probes, and a 100% pass rate across 238 automated tests."
      }
    ],
  },
  {
    title: "Incident Response Intern",
    company: "AXA Global Business Services (AXA GBS)",
    contractType: "Internship",
    dialogTitle: "Incident Responder at",
    dialogCompany: "AXA GBS",
    logo: "/companies/axa.jpeg",
    location: "Rabat, Morocco",
    period: "February 2026 - August 2026",
    description: [
      "Worked as a SOC Analyst Intern, performing incident response and security monitoring in a large enterprise environment:",
      "Triaged and investigated security alerts using Microsoft Sentinel and Azure Data Explorer (ADX) with KQL queries.",
      "Analyzed endpoint threats with Cybereason EDR.",
      "Managed incident workflows and automated response tasks via Google SecOps (SOAR).",
      "Tracked and documented incidents through AXA's in-house incident management platform.",
    ],
    detailedDescription: "Worked as a SOC Analyst Intern, performing incident response and security monitoring in a large enterprise environment.",
    technologies: [
      "Microsoft Sentinel",
      "Azure Data Explorer (ADX)",
      "KQL",
      "Cybereason EDR",
      "Google SecOps (SOAR)",
      "Incident Management",
    ],
    achievements: [
      {
        title: "Security Monitoring",
        description: "Triaged and investigated security alerts using Microsoft Sentinel and Azure Data Explorer (ADX) with KQL queries."
      },
      {
        title: "Endpoint Threat Analysis",
        description: "Analyzed endpoint threats with Cybereason EDR."
      },
      {
        title: "Incident Automation",
        description: "Managed incident workflows and automated response tasks via Google SecOps (SOAR)."
      },
      {
        title: "Incident Documentation",
        description: "Tracked and documented incidents through AXA's in-house incident management platform."
      },
    ],
  },
  {
    title: "AI & SOC Automation Engineer",
    company: "Sekera",
    contractType: "CDD",
    logo: "/companies/sekera.png",
    location: "Casablanca, Morocco",
    period: "April 2024 - September 2024",
    githubUrl: "https://github.com/Ayanoh/vinci-logic-soc-agent",
    githubLabel: "View Vinici Logic Documentation",
    description: [
      "Contributed to the development of 'Vinici Logic', a Detection & Response as Code platform",
      "Built specialized AI agents for automated investigation and threat analysis",
      "Reduced MTTR by 70% through intelligent automation and orchestration",
    ],
    detailedDescription: "Vinici Logic represents a paradigm shift from traditional alert-centric SOC models to a modern 'Detection & Response as Code' approach. Unlike legacy SOAR platforms that merely orchestrate predefined workflows, Vinici Logic embeds automated verification, enrichment, and response logic directly within detection rules - eliminating Level 1 analyst dependency and the alert fatigue epidemic. Built on the SOCless philosophy pioneered by Netflix, the platform decentralizes triage to system experts through automation-first principles. On a fixed-term contract (CDD), I architected and developed specialized AI agent modules that form the core investigation and analysis capabilities of the Vinici Logic platform.",
    technologies: [
      "Python",
      "LangChain/LangGraph",
      "LLMs (Llama 3.3, Claude, GPT-4)",
      "TheHive",
      "OpenSearch SIEM",
      "ClickHouse",
      "Microsoft 365 Graph API",
      "VirusTotal",
      "Hybrid Analysis",
      "AbuseIPDB",
      "PhishTank",
      "Computer Vision (OCR)",
      "MITRE ATT&CK v18",
      "Docker",
      "MCP Server",
    ],
    achievements: [
      {
        title: "TheHive Case Management Agent",
        description: "Developed intelligent case orchestration with automated incident creation, historical pattern analysis, and case correlation for deduplication"
      },
      {
        title: "SIEM Investigation Agent (OpenSearch)",
        description: "Architected Windows forensics toolkit with Event ID correlation for lateral movement detection (4624, 4648, 4672), process tree reconstruction, and automated timeline generation"
      },
      {
        title: "O365 Compromise Detection Agent",
        description: "Built cloud security module analyzing Microsoft 365 audit logs, implementing 'impossible travel' detection, brute force pattern recognition, and anomalous account behavior detection"
      },
      {
        title: "Email Analysis & Phishing Intelligence Agent",
        description: "Engineered multi-layered phishing detection with sandbox analysis, computer vision (OCR, QR codes, tracking pixels, brand spoofing), and multi-source threat enrichment"
      },
      {
        title: "Data Privacy & Anonymization Agent",
        description: "Designed PII anonymization system using local LLM with bidirectional mapping for reversible anonymization and secure cross-team collaboration"
      },
      {
        title: "Main Investigation Orchestrator",
        description: "Architected LangChain/LangGraph-based central AI agent coordinating all specialized tools with MITRE ATT&CK-aligned reporting and autonomous investigation workflows"
      },
      {
        title: "Measurable Impact",
        description: "70% MTTR reduction (30+ min → <9 min), 85% automation of L1 tasks, zero false positive escalations, comprehensive MITRE ATT&CK coverage"
      },
    ],
    images: {
      overview: [
        { src: "/uploads/vinci1.png", alt: "Vinici Logic Detection Rules Interface" },
        { src: "/uploads/vinci_2.png", alt: "Vinici Logic SOC KPI Dashboard" }
      ],
      achievements: [
        { src: "/uploads/email_analysis_diagrame__drawio.png", alt: "Email Analysis Workflow Diagram" },
        { src: "/uploads/sekkera_projet.png", alt: "SOC Agent Architecture" }
      ]
    }
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-24 lg:px-40 xl:px-48">
        <Link href={"#experience"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-12",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              EXPERIENCE
            </h2>
          </BoxReveal>
        </Link>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <BoxReveal key={index} width="100%" delay={0.2 * (index + 1)}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative pl-8 border-l-2 border-cyan-500 dark:border-cyan-400 cursor-pointer hover:bg-slate-100/50 dark:hover:bg-zinc-900/30 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.01] p-4 rounded-r-lg transition-all duration-300 group hover:border-cyan-400 dark:hover:border-cyan-300 hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/20">
                    <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-cyan-500 dark:bg-cyan-400 group-hover:scale-125 transition-transform duration-300" />

                    {/* Icône expand animée en haut à droite */}
                    <div className="absolute -top-1 -right-1 bg-cyan-500 dark:bg-cyan-400 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-lg">
                      <ArrowUpRight className="w-4 h-4 animate-pulse" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        <Briefcase className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                        {exp.title}
                      </h3>

                      <div className="flex items-center gap-3">
                        {exp.logo && (
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white dark:bg-zinc-800 p-1 border border-slate-200 dark:border-zinc-700">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <p className="text-xl text-cyan-600 dark:text-cyan-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-zinc-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        {(exp as any).contractType && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                            {(exp as any).contractType}
                          </span>
                        )}
                      </div>

                      <ul className="mt-4 space-y-2 text-slate-700 dark:text-zinc-300">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            {i === 0 ? null : <span className="text-cyan-500 dark:text-cyan-400 mt-1">▸</span>}
                            <span className={i === 0 ? "font-medium" : ""}>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Card actions */}
                      <div className="flex items-center justify-between mt-6">
                        {(exp as any).githubUrl ? (
                          <Link
                            href={(exp as any).githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors z-10"
                          >
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        ) : (
                          <div />
                        )}

                        <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500 dark:bg-cyan-400 text-white rounded-lg font-semibold group-hover:bg-cyan-600 dark:group-hover:bg-cyan-500 group-hover:scale-105 transition-all duration-300 shadow-md group-hover:shadow-lg">
                          <Eye className="w-4 h-4" />
                          <span>View Details</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                
                <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-cyan-500" />
                      <span>{(exp as any).dialogTitle ?? `${exp.title} at`}</span>
                      {exp.logo && (
                        <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white dark:bg-zinc-800 p-1 border border-slate-200 dark:border-zinc-700">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span className="text-cyan-600 dark:text-cyan-400">{(exp as any).dialogCompany ?? exp.company}</span>
                    </DialogTitle>
                    <DialogDescription className="flex flex-wrap gap-4 text-sm mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      {(exp as any).contractType && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                          {(exp as any).contractType}
                        </span>
                      )}
                    </DialogDescription>

                    {/* GitHub Documentation Button */}
                    {(exp as any).githubUrl && (
                      <div className="mt-4">
                        <Link
                          href={(exp as any).githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-black text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                        >
                          <Github className="w-5 h-5" />
                          <span>{(exp as any).githubLabel ?? "View Project Documentation"}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </DialogHeader>
                  
                  <div className="space-y-6 mt-4">
                    {/* Overview Section */}
                    <div>
                      <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                        Overview
                      </h4>
                      <p className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                        {exp.detailedDescription}
                      </p>
                    </div>
                    
                    {/* Platform Screenshots - GRID 2x2 avec hauteur fixe */}
                    {exp.images?.overview && (
                      <div className="space-y-3">
                        <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                          Platform Screenshots
                          <span className="text-xs font-normal text-slate-500 dark:text-zinc-400">(Click to enlarge)</span>
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {exp.images.overview.map((img, i) => (
                            <ZoomableImage 
                              key={i}
                              src={img.src}
                              alt={img.alt}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Technologies Section */}
                    <div>
                      <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Key Achievements Section */}
                    <div>
                      <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-cyan-500 dark:text-cyan-400 mt-1 text-lg">✓</span>
                            <div>
                              <span className="font-semibold text-purple-600 dark:text-purple-400">
                                {achievement.title}:
                              </span>{" "}
                              <span className="text-slate-700 dark:text-zinc-300">
                                {achievement.description}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Architecture Diagrams - GRID 2x2 avec hauteur fixe */}
                    {exp.images?.achievements && (
                      <div className="space-y-3">
                        <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                          Architecture & Workflows
                          <span className="text-xs font-normal text-slate-500 dark:text-zinc-400">(Click to enlarge)</span>
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {exp.images.achievements.map((img, i) => (
                            <ZoomableImage 
                              key={i}
                              src={img.src}
                              alt={img.alt}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </BoxReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
