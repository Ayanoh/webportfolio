"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { BoxReveal } from "../reveal-animations";
import { Award, Shield, X, ZoomIn } from "lucide-react";
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
        className="relative rounded-lg overflow-hidden border-2 border-slate-200 dark:border-zinc-700 cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 group max-w-md mx-auto"
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

const certifications = [
  {
    name: "CompTIA Security+",
    code: "SY0-701",
    issuer: "CompTIA",
    year: "2024",
    icon: Shield,
    description: "Industry-standard certification validating foundational cybersecurity knowledge and skills.",
    detailedDescription: "CompTIA Security+ is a global certification that validates the baseline skills necessary to perform core security functions and pursue an IT security career. This certification covers essential principles for network security and risk management.",
    skills: [
      "Threats, Attacks, and Vulnerabilities",
      "Architecture and Design",
      "Implementation",
      "Operations and Incident Response",
      "Governance, Risk, and Compliance",
    ],
    certificateImage: "/uploads/comptia.png",
  },
  {
    name: "AWS Cloud Practitioner",
    code: "Essentials",
    issuer: "Amazon Web Services",
    year: "2024",
    icon: Award,
    description: "Foundational AWS certification demonstrating cloud computing knowledge.",
    detailedDescription: "AWS Certified Cloud Practitioner validates foundational, high-level understanding of AWS Cloud, services, and terminology. This is an important step in building cloud skills and advancing a career in cloud computing.",
    skills: [
      "AWS Cloud Concepts",
      "AWS Core Services",
      "Security and Compliance",
      "Billing and Pricing",
      "Cloud Architecture Basics",
    ],
    certificateImage: "/uploads/aws_cert.jpeg",
  },
  {
    name: "SOC Analyst Path",
    code: "Complete",
    issuer: "LetsDefend",
    year: "2024",
    icon: Shield,
    description: "Comprehensive hands-on training in Security Operations Center practices.",
    detailedDescription: "LetsDefend SOC Analyst Path provides practical, hands-on training in real-world SOC scenarios. The program covers alert investigation, incident response, threat hunting, and security monitoring using industry-standard tools and techniques.",
    skills: [
      "SIEM Analysis and Alert Triage",
      "Incident Response Procedures",
      "Malware Analysis Fundamentals",
      "Log Analysis and Correlation",
      "Threat Intelligence Integration",
      "Security Monitoring and Detection",
    ],
    certificateImage: "/uploads/Letsdefend.png",
  },
  {
    name: "CCNA: Introduction to Networks",
    code: "CCNA",
    issuer: "Cisco",
    year: "2024",
    icon: Award,
    description: "Cisco networking fundamentals certification.",
    detailedDescription: "Cisco CCNA Introduction to Networks certification covers networking fundamentals, including network access, IP connectivity, IP services, security fundamentals, and automation and programmability.",
    skills: [
      "Network Fundamentals",
      "Network Access",
      "IP Connectivity",
      "IP Services",
      "Security Fundamentals",
      "Automation and Programmability",
    ],
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="w-full min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-24 lg:px-40 xl:px-48">
        <Link href={"#certifications"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-12",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              CERTIFICATIONS
            </h2>
          </BoxReveal>
        </Link>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            
            return (
              <BoxReveal key={index} width="100%" delay={0.2 * (index + 1)}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="p-6 rounded-lg border-2 border-slate-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/20 cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-cyan-500/10 dark:bg-cyan-400/10">
                          <Icon className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                            {cert.name}
                          </h3>
                          <p className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold">
                            {cert.code}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-zinc-400 mt-2">
                            {cert.issuer} • {cert.year}
                          </p>
                          <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium mt-3">
                            Click for details →
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl flex items-center gap-2">
                        <Icon className="w-6 h-6 text-cyan-500" />
                        {cert.name}
                      </DialogTitle>
                      <DialogDescription className="text-base mt-2">
                        {cert.code} • {cert.issuer} • {cert.year}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6 mt-4">
                      <div>
                        <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                          About This Certification
                        </h4>
                        <p className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                          {cert.detailedDescription}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                          Skills Covered
                        </h4>
                        <div className="space-y-2">
                          {cert.skills.map((skill, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-slate-700 dark:text-zinc-300"
                            >
                              <span className="text-cyan-500 dark:text-cyan-400 mt-1">✓</span>
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {cert.certificateImage && (
                        <div>
                          <h4 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-3 flex items-center gap-2">
                            Certificate
                            <span className="text-xs font-normal text-slate-500 dark:text-zinc-400">(Click to enlarge)</span>
                          </h4>
                          <ZoomableImage 
                            src={cert.certificateImage}
                            alt={`${cert.name} Certificate`}
                          />
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </BoxReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
