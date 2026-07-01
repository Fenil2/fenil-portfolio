import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <AboutSection/>
      <SkillsSection/>
      <Projects/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
