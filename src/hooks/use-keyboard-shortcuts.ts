"use client";
import { useEffect } from "react";
import { SkillNames } from "@/data/constants";

// QWERTY keyboard mapping to skills (based on skill ID order)
const KEYBOARD_MAPPING: Record<string, SkillNames> = {
  // Row 1: Q W E R T Y U I O P
  q: SkillNames.JS,         // 1
  w: SkillNames.TS,         // 2
  e: SkillNames.HTML,       // 3
  r: SkillNames.CSS,        // 4
  t: SkillNames.REACT,      // 5
  y: SkillNames.VUE,        // 6
  u: SkillNames.NEXTJS,     // 7
  i: SkillNames.TAILWIND,   // 8
  o: SkillNames.NODEJS,     // 9
  p: SkillNames.EXPRESS,    // 10

  // Row 2: A S D F G H J K L
  a: SkillNames.POSTGRES,   // 11
  s: SkillNames.MONGODB,    // 12
  d: SkillNames.SECURITYONION, // 13
  f: SkillNames.GITHUB,     // 14
  g: SkillNames.PRETTIER,   // 15
  h: SkillNames.NPM,        // 16
  j: SkillNames.FIREBASE,   // 17
  k: SkillNames.WORDPRESS,  // 18
  l: SkillNames.LINUX,      // 19

  // Row 3: Z X C V B
  z: SkillNames.DOCKER,     // 20
  x: SkillNames.NGINX,      // 21
  c: SkillNames.AWS,        // 22
  v: SkillNames.VIM,        // 23
  b: SkillNames.VERCEL,     // 24

  // Bonus keys
  n: SkillNames.SIGMA,      // 34
  m: SkillNames.THEHIVE,    // 31
};

export const useKeyboardShortcuts = (
  onSkillTrigger: (skillName: SkillNames) => void
) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const skillName = KEYBOARD_MAPPING[key];

      if (skillName) {
        onSkillTrigger(skillName);
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [onSkillTrigger]);
};
