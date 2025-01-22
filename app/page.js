'use client'
import { useRef, useEffect, useState } from "react";
import Header from "@/components/Header";
import ComponentContainer from "@/components/ComponentContainer";

export default function Home() {
  const aboutRef = useRef(null);
  const homer = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false); 

    
  const scrollToHomer = () =>{
    if(homer.current){
      homer.current.scrollIntoView({behavior:"smooth"});
    }
  };
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <ComponentContainer pagename={""}/>
    </div>
  );
}
