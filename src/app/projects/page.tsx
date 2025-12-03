"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "SOAR Automation Pipeline",
    description: `Designed and implemented a Security Orchestration, Automation, and Response (SOAR)
            pipeline to streamline incident response workflows. This project integrates threat intelligence,
            automated triage, and response actions to enhance SOC efficiency and reduce incident response time.`,
    link: "#",
    images: [
      "/Projects/soar-pipeline.png",
      "/Projects/soar1.jpeg",
      "/Projects/soar2.jpeg",
      "/Projects/soar3.jpeg",
      "/Projects/soar4.jpeg",
      "/Projects/soar5.jpeg",
      "/Projects/soar6.jpeg",
    ],
  },
  {
    id: 2,
    name: "Active Directory + Splunk Integration",
    description: `Built a comprehensive Active Directory monitoring solution integrated with Splunk for
            advanced threat detection and security analytics. This project enables real-time monitoring
            of AD events, user behavior analytics, and automated alerting for suspicious activities.`,
    link: "#",
    images: [
      "/Projects/ad-splunk.png",
      "/Projects/splunk1.jpeg",
      "/Projects/splunk2.jpeg",
      "/Projects/splunk3.jpeg",
      "/Projects/splunk4.jpeg",
    ],
  },
  {
    id: 3,
    name: "SOC Lab Environment",
    description: `Developed a complete SOC lab environment featuring Wazuh for endpoint detection and
            response, integrated with various security tools for comprehensive threat monitoring and analysis.
            This hands-on lab simulates real-world SOC operations and incident response scenarios.`,
    link: "#",
    images: [
      "/Projects/soc-lab.png",
      "/Projects/labwazuh.png",
    ],
  },
  {
    id: 4,
    name: "Vulnerability Assessment Platform",
    description: `Created a vulnerability assessment platform to identify, classify, and prioritize
            security vulnerabilities across network infrastructure. The platform automates scanning,
            reporting, and remediation tracking to maintain a strong security posture.`,
    link: "#",
    images: [
      "/Projects/vuln-assessment.png",
      "/Projects/vuln1.jpeg",
      "/Projects/vuln2.jpeg",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
