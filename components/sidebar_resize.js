"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Sidebar from "../components/sidebar";
import { MainContent } from "../components/mainContent";
export const ParentComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  // const [isMobile, setIsMobile] = useState(false);
  const { data: session} = useSession();
  useEffect(() => {
    const resize = () => {
      if (typeof setIsOpen === "function") {
        if (window.innerWidth <= 1024) {
          setIsOpen(false);
        } else {
          setIsOpen(true);
        }
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} session={session}/>
      <MainContent isSidebarOpen={isOpen} />
    </div>
  );
};
