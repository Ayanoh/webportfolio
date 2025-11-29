"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { BoxReveal } from "../reveal-animations";
import { Shield, Server, Search, Bug, X, ZoomIn, Folder } from "lucide-react";
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
        className="relative rounded-lg overflow-hidden border-2 border-slate-200 dark:border-zinc-700 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 group"
        onClick={() => setIsZoomOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={400}
          height={280}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Modal de zoom */}
      <Dialog open={isZoomOpen} onOpenChange={setIsZoomOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] p-2">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50 bg-white dark:bg-zinc-900 p-2 rounded-full">
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

const projects = [
  {
    title: "Wazuh & n8n Detection Lab",
    category: "Security Operations",
    icon: Shield,
    coverImage: "/Projects/soc-lab.png",
    description: "Full-stack SOC environment with Security Onion, Wazuh, TheHive, Cortex and n8n automation.",
    detailedDescription: "Built a fully functional Security Operations Center from the ground up, replicating enterprise-grade security infrastructure used by organizations to detect, investigate, and respond to cyber threats in real-time.",
    challenge: "Security teams rely on multiple specialized tools working together seamlessly. Understanding how these components integrate—from initial threat detection to automated response—is critical for effective incident handling. This project bridges the gap between theoretical knowledge and operational readiness.",
    technologies: [
      "Security Onion - Full packet capture and network-based threat detection",
      "Wazuh - Log aggregation, correlation, and endpoint visibility",
      "TheHive - Case management and collaborative investigation workflows",
      "Cortex - Automated IOC enrichment (VirusTotal, AbuseIPDB, Shodan)",
      "n8n - Automated playbooks and response workflows",
    ],
    outcomes: [
      "End-to-end visibility from alert generation to incident closure",
      "Hands-on experience with tools used by enterprise SOC teams worldwide",
      "Automated workflows reducing manual triage effort",
    ],
    images: [],
  },
  {
    title: "SOAR & EDR Automation Pipeline",
    category: "Security Automation",
    icon: Server,
    coverImage: "/Projects/soar-pipeline.png",
    description: "Automated detection and response workflow with LimaCharlie EDR, Tines SOAR, Slack & Email alerting.",
    detailedDescription: "Designed and deployed a fully automated detection and response workflow to streamline SOC operations. The project integrates Endpoint Detection and Response (EDR) capabilities with a SOAR platform to drastically reduce Mean Time to Respond (MTTR) for security incidents.",
    technologies: [
      "LimaCharlie - EDR for endpoint telemetry and response",
      "Tines - SOAR platform for automation and orchestration",
      "Slack & Email - Multi-channel alerting system",
      "API Integration & Webhooks - Real-time data flow",
    ],
    accomplishments: [
      "Automated Threat Detection: Custom detection rules in LimaCharlie to identify malicious behaviors and forward telemetry via webhooks",
      "Smart Alerting System: Tines storyboard parsing raw logs and distributing enriched alerts with full context",
      "Human-in-the-Loop Response: Interactive workflow allowing analysts to isolate machines directly from alerts",
      "Orchestrated Containment: Automated host isolation via LimaCharlie API upon analyst approval",
    ],
    outcome: "Successfully demonstrated the ability to build a 'Detect-to-Contain' pipeline without manual console intervention, showcasing proficiency in security automation and API-based tool integration.",
    images: [
      "/Projects/soar1.jpeg",
      "/Projects/soar2.jpeg",
      "/Projects/soar3.jpeg",
      "/Projects/soar4.jpeg",
      "/Projects/soar5.jpeg",
      "/Projects/soar6.jpeg",
    ],
  },
  {
    title: "Purple Team Lab Environment",
    category: "Threat Detection",
    icon: Search,
    coverImage: "/Projects/ad-splunk.png",
    description: "Active Directory & Splunk SIEM lab for simulating attacks and analyzing defensive telemetry.",
    detailedDescription: "Architected and deployed a fully functional on-premise Active Directory environment integrated with a SIEM solution to simulate real-world cyberattacks and analyze defensive telemetry. The goal was to master the lifecycle of identity management, log ingestion, and threat detection.",
    infrastructure: [
      "Windows Server 2022 (Domain Controller)",
      "Windows 10 (Client Workstation)",
      "Kali Linux (Attacker Machine)",
      "Splunk Enterprise on Ubuntu Server",
      "Network Schema: 192.168.10.x/24",
    ],
    accomplishments: [
      "Infrastructure Design: Logical network diagram and virtualized domain environment with proper segmentation",
      "Telemetry Pipeline: Sysmon on endpoints + Splunk Universal Forwarders for centralized log ingestion",
      "Identity Management: AD users, groups, and GPOs simulating corporate IT administration",
      "Adversary Simulation: Controlled attacks using Kali Linux and Atomic Red Team with successful detection in Splunk",
    ],
    outcome: "Established a working 'Purple Team' environment, successfully validating the detection pipeline from initial attack execution to final log indexation in Splunk.",
    images: [
      "/Projects/splunk1.jpeg",
      "/Projects/splunk2.jpeg",
      "/Projects/splunk3.jpeg",
      "/Projects/splunk4.jpeg",
    ],
  },
  {
    title: "Vulnerability Assessment Lab",
    category: "Risk Management",
    icon: Bug,
    coverImage: "/Projects/vuln-assessment.png",
    description: "Enterprise vulnerability scanning with Tenable Nessus, CVSS analysis, and remediation reporting.",
    detailedDescription: "Deployed and configured Tenable Nessus to identify, analyze, and prioritize security weaknesses within a networked environment. The goal was to simulate a real-world audit lifecycle: from scanning to reporting and remediation strategy.",
    accomplishments: [
      "Infrastructure Setup: Virtualized lab with network connectivity and SHA256 hash verification of security tools",
      "Vulnerability Scanning: Basic Network Scans and Web Vulnerability Scans discovering open ports, outdated services, and misconfigurations",
      "Risk Analysis: CVSS-based severity interpretation (Critical, High, Medium) identifying specific issues like OpenSSH weaknesses",
      "Reporting & Strategy: Comprehensive HTML/CSV reports with contextual analysis prioritizing by asset exposure",
    ],
    outcome: "Successfully mapped the vulnerability landscape and produced an actionable remediation plan, demonstrating the ability to translate technical findings into business risk intelligence.",
    images: [
      "/Projects/vuln1.jpeg",
      "/Projects/vuln2.jpeg",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-24 lg:px-40 xl:px-48">
        <Link href={"#projects"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-6",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              PROJECTS
            </h2>
          </BoxReveal>
        </Link>

        <BoxReveal width="100%" delay={0.2}>
          <p className="text-center text-slate-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Hands-on security projects demonstrating practical skills in SOC operations, 
            threat detection, and security automation.
          </p>
        </BoxReveal>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(p => p && p.title).map((project, index) => {
            try {
              const Icon = project?.icon || Folder;
              const safeProject = {
                title: project?.title || "Untitled Project",
                category: project?.category || "Project",
                coverImage: project?.coverImage || "/Projects/placeholder.png",
                description: project?.description || "",
                detailedDescription: project?.detailedDescription || "",
                ...project
              };
              
              return (
                <BoxReveal key={`project-${safeProject.title}-${index}`} width="100%" delay={0.2 * (index + 1)}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="rounded-xl overflow-hidden border-2 border-slate-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/20 cursor-pointer group">
                        {/* Cover Image */}
                        <div className="relative h-48 overflow-hidden bg-slate-900">
                          <Image
                            src={safeProject.coverImage}
                            alt={safeProject.title}
                            width={600}
                            height={300}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                              {safeProject.category}
                            </span>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-5">
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-cyan-500/10 dark:bg-cyan-400/10">
                              {Icon && <Icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                                {safeProject.title}
                              </h3>
                              <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1 line-clamp-2">
                                {safeProject.description}
                              </p>
                              <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium mt-3">
                                Click for details →
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl flex items-center gap-2">
                        {Icon && <Icon className="w-6 h-6 text-cyan-500" />}
                        {safeProject.title}
                      </DialogTitle>
                      <DialogDescription className="text-base mt-2">
                        {safeProject.category}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6 mt-4">
                      {/* Overview */}
                      <div>
                        <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                          Overview
                        </h4>
                        <p className="text-slate-700 dark:text-zinc-300 leading-relaxed mb-4">
                          {safeProject.detailedDescription}
                        </p>
                        {/* Cover Image under Overview */}
                        <div className="max-w-md mx-auto">
                          <ZoomableImage 
                            src={safeProject.coverImage}
                            alt={`${safeProject.title} Overview`}
                          />
                        </div>
                      </div>

                      {/* Challenge */}
                      {safeProject.challenge && (
                        <div>
                          <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                            The Challenge
                          </h4>
                          <p className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                            {safeProject.challenge}
                          </p>
                        </div>
                      )}

                      {/* Infrastructure */}
                      {safeProject.infrastructure && (
                        <div>
                          <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                            Infrastructure
                          </h4>
                          <div className="space-y-2">
                            {safeProject.infrastructure.map((item, i) => (
                              <div key={i} className="flex items-start gap-2 text-slate-700 dark:text-zinc-300">
                                <span className="text-cyan-500 dark:text-cyan-400 mt-1">•</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technologies */}
                      {safeProject.technologies && (
                        <div>
                          <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                            Technologies Used
                          </h4>
                          <div className="space-y-2">
                            {safeProject.technologies.map((tech, i) => (
                              <div key={i} className="flex items-start gap-2 text-slate-700 dark:text-zinc-300">
                                <span className="text-cyan-500 dark:text-cyan-400 mt-1">✓</span>
                                <span>{tech}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Accomplishments */}
                      {safeProject.accomplishments && (
                        <div>
                          <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                            Key Accomplishments
                          </h4>
                          <div className="space-y-2">
                            {safeProject.accomplishments.map((item, i) => (
                              <div key={i} className="flex items-start gap-2 text-slate-700 dark:text-zinc-300">
                                <span className="text-cyan-500 dark:text-cyan-400 mt-1">✓</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Outcomes */}
                      {safeProject.outcomes && (
                        <div>
                          <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                            Key Outcomes
                          </h4>
                          <div className="space-y-2">
                            {safeProject.outcomes.map((item, i) => (
                              <div key={i} className="flex items-start gap-2 text-slate-700 dark:text-zinc-300">
                                <span className="text-cyan-500 dark:text-cyan-400 mt-1">✓</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Outcome */}
                      {safeProject.outcome && (
                        <div>
                          <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                            Outcome
                          </h4>
                          <p className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                            {safeProject.outcome}
                          </p>
                        </div>
                      )}
                      
                      {/* Screenshots */}
                      {safeProject.images && safeProject.images.length > 0 && (
                        <div>
                          <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
                            Screenshots
                            <span className="text-xs font-normal text-slate-500 dark:text-zinc-400">(Click to enlarge)</span>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {safeProject.images.map((img, i) => (
                              <ZoomableImage 
                                key={i}
                                src={img}
                                alt={`${safeProject.title} Screenshot ${i + 1}`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </BoxReveal>
            );
            } catch (error) {
              console.error('Error rendering project:', error);
              return null;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
