
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <h2 className="text-2xl font-medium text-gray-700 mb-4">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">John Doe</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl">
            A passionate full-stack developer specializing in building exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="projects" smooth={true} duration={500} offset={-100}>
              <Button size="lg" className="px-8">View My Work</Button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-100}>
              <Button size="lg" variant="outline" className="px-8">Contact Me</Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
