import {useState,useEffect} from 'react'
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import Education from "../components/Education";
import Certificate from "../components/ui/Certificate";
import { Course } from '../components/Course';

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
    localStorage.setItem("theme", "dark");
    
  
    useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
      }
    }, []);
  
    const toggleTheme = () => {
      if (isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
      }
    };


  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar isDarkMode={isDarkMode}/>
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <Education/>
        <SkillsSection />
        <ProjectsSection />
        <Certificate/>
        <Course/>
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
