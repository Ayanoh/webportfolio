"use client";
import React, { useEffect, useState } from "react";
import { 
  FaAws,
  FaCertificate,
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaPython,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiWireshark,
  SiSplunk,
  SiKalilinux,
  SiVisualstudio,
} from "react-icons/si";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "oussama.elmaskaoui@gmail.com",
    href: "mailto:oussama.elmaskaoui@gmail.com",
    icon: <FaEnvelope size={24} />,
  },
  {
    name: "Phone",
    content: "+212 614 974 221",
    href: "tel:+212614974221",
    icon: <FaPhone size={24} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/oussama-el-maskaoui/",
    content: "/oussama-el-maskaoui",
    icon: <FaLinkedin size={24} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/oussama-el-maskaoui",
    content: "/oussama-el-maskaoui",
    icon: <FaGithub size={24} />,
  },
];

const TOOLS = [
  {
    name: "Python",
    icon: <FaPython size={50} color="#3776ab" />,
    color: "#3776ab",
  },
  {
    name: "Wireshark",
    icon: <SiWireshark size={50} color="#1679A7" />,
    color: "#1679A7",
  },
  {
    name: "Splunk",
    icon: <SiSplunk size={50} color="#000000" />,
    color: "#000000",
  },
  {
    name: "Kali Linux",
    icon: <SiKalilinux size={50} color="#557C94" />,
    color: "#557C94",
  },
  {
    name: "Docker",
    icon: <FaDocker size={50} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "AWS",
    icon: <FaAws size={50} color="#FF9900" />,
    color: "#FF9900",
  },
  {
    name: "VS Code",
    icon: <SiVisualstudio size={50} color="#007acc" />,
    color: "#007acc",
  },
];

const CERTIFICATIONS = [
  {
    name: "CompTIA Security+",
    code: "SY0-701",
    issuer: "CompTIA",
    year: "2024",
  },
  {
    name: "AWS Cloud Practitioner",
    code: "Essentials",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    name: "SOC Analyst Path",
    code: "Complete",
    issuer: "LetsDefend",
    year: "2024",
  },
  {
    name: "CCNA: Introduction to Networks",
    code: "CCNA",
    issuer: "Cisco",
    year: "2024",
  },
];

const EXPERIENCES = [
  {
    title: "SOC Analyst",
    company: "Sekera",
    location: "Casablanca, Morocco",
    period: "April 2025 - Present",
    description: [
      "Developing an AI-powered SOC assistant to automatically analyze security alerts",
      "Integrating TheHive, VirusTotal, and SentinelOne through function calling",
      "Using advanced prompts to drive incident response without fixed workflows",
    ],
  },
  {
    title: "Technical Account Manager",
    company: "Orange",
    location: "Casablanca, Morocco",
    period: "July 2024 - August 2024",
    description: [
      "Contributed to telecommunications network audits (FH PTP)",
      "Improved B2B infrastructure quality for 70+ clients",
      "Collaborated with multiple teams for network optimization",
    ],
  },
];

const LANGUAGES = [
  { name: "Arabic", level: "Native", percentage: 100 },
  { name: "French", level: "Fluent", percentage: 95 },
  { name: "English", level: "Professional", percentage: 90 },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* SIDEBAR */}
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600 sticky top-24"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square bg-zinc-800"
                  alt="Oussama EL Maskaoui"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl font-bold">Oussama EL Maskaoui</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Cybersecurity Engineer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md transition-all"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="basis-3/4 w-full space-y-8">
          {/* ABOUT ME SECTION */}
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-6 font-bold text-cyan-400">About Me</h1>
            <div className="space-y-4 text-zinc-300">
              <p className="leading-relaxed">
                I&apos;m a final-year <span className="text-cyan-400 font-semibold">Cybersecurity Engineering student</span> at the <span className="text-cyan-400 font-semibold">Mohammadia School of Engineers (EMI)</span>, passionate about how AI and automation reshape modern Security Operations Centers.
              </p>
              <p className="leading-relaxed">
                Certified in <span className="text-cyan-400 font-semibold">CompTIA Security+</span>, I specialize in building intelligent systems that enhance detection, response, and decision-making in security operations.
              </p>
              <p className="leading-relaxed">
                My key interests include <span className="text-cyan-400 font-semibold">Incident Response</span>, <span className="text-cyan-400 font-semibold">Digital Forensics</span>, and <span className="text-cyan-400 font-semibold">AI-driven Threat Analysis</span>.
              </p>
              <p className="leading-relaxed">
                I value innovation, continuous learning, and bridging the gap between human expertise and machine intelligence. Let&apos;s build the next generation of smarter, faster, and autonomous security operations.
              </p>
            </div>
          </div>

          {/* EXPERIENCE SECTION */}
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-6 font-bold text-cyan-400">Professional Experience</h1>
            <div className="space-y-6">
              {EXPERIENCES.map((exp, index) => (
                <div key={index} className="border-l-2 border-cyan-400 pl-6">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium">{exp.company}</p>
                  <p className="text-sm text-zinc-400 mb-2">
                    {exp.period} • {exp.location}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-zinc-300">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-6 font-bold text-cyan-400">Education</h1>
            <div className="border-l-2 border-cyan-400 pl-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <FaGraduationCap className="text-cyan-400" />
                École Mohammadia des Ingénieurs (EMI)
              </h3>
              <p className="text-cyan-400 font-medium">Network & Telecommunications Engineering</p>
              <p className="text-sm text-zinc-400 mb-2">
                September 2023 - June 2026 • Rabat, Morocco
              </p>
              <p className="text-zinc-300">
                Specialization in Cybersecurity, Incident Response, and Digital Forensics
              </p>
              <p className="text-zinc-400 text-sm mt-1">
                Currently in 2nd year
              </p>
            </div>
          </div>

          {/* CERTIFICATIONS SECTION */}
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-6 font-bold text-cyan-400">Certifications</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-cyan-400 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <FaCertificate className="text-cyan-400 text-2xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">{cert.name}</h3>
                      <p className="text-sm text-zinc-400">{cert.code}</p>
                      <p className="text-xs text-zinc-500 mt-1">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS SECTION */}
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-6 font-bold text-cyan-400">Technical Skills</h1>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Security Analysis & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Wireshark", "Tenable Nessus", "Active Directory", "Splunk", "Sysmon", "SOAR", "EDR", "VirusTotal", "AbuseIPDB", "Shodan", "MITRE ATT&CK", "Anyrun"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-sm hover:border-cyan-400 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Programming & Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "C", "SQL", "JavaScript", "React", "Node.js"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-sm hover:border-cyan-400 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">AI & Automation</h3>
                <div className="flex flex-wrap gap-2">
                  {["LangChain", "AI APIs", "LLM Agents", "SOC Automation", "Threat Intelligence"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-sm hover:border-cyan-400 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Tools I Use Daily</h3>
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                    breakpoints: {
                      640: { perPage: 3 },
                      1024: { perPage: 5 },
                    },
                  }}
                  aria-label="Tools"
                >
                  {TOOLS.map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md hover:border-cyan-400 transition-all">
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>

          {/* LANGUAGES SECTION */}
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-6 font-bold text-cyan-400">Languages</h1>
            <div className="space-y-4">
              {LANGUAGES.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{lang.name}</span>
                    <span className="text-zinc-400 text-sm">{lang.level}</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT SECTION */}
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-6 font-bold text-cyan-400">Contact Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="mailto:oussama.elmaskaoui@gmail.com"
                className="flex items-center gap-3 p-4 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-cyan-400 transition-all"
              >
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <p className="text-white font-medium">oussama.elmaskaoui@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+212614974221"
                className="flex items-center gap-3 p-4 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-cyan-400 transition-all"
              >
                <FaPhone className="text-cyan-400 text-2xl" />
                <div>
                  <p className="text-sm text-zinc-400">Phone</p>
                  <p className="text-white font-medium">+212 614 974 221</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/oussama-el-maskaoui/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-cyan-400 transition-all"
              >
                <FaLinkedin className="text-cyan-400 text-2xl" />
                <div>
                  <p className="text-sm text-zinc-400">LinkedIn</p>
                  <p className="text-white font-medium">/oussama-el-maskaoui</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 bg-zinc-800 border border-zinc-700 rounded-lg">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <div>
                  <p className="text-sm text-zinc-400">Location</p>
                  <p className="text-white font-medium">Casablanca, Morocco</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
