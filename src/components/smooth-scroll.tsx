"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      lenis?.stop();
      lenis?.start();
    });
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        prevent: (node) => {
          if (isInsideModal) return true;
          // Désactiver Lenis quand on est dans un Dialog (modal)
          return node.closest('[role="dialog"]') !== null ||
                 node.closest('[data-radix-dialog-content]') !== null;
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
