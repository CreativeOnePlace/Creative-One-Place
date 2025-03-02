
import { useEffect, useRef, useState } from "react";
import Button from "../shared/Button";
import { ChevronRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".appear-animate > *");
    elements.forEach((el) => observer.observe(el));
    
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) - 0.5,
        y: (event.clientY / window.innerHeight) - 0.5,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/0 z-10" />
        <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div 
          className="absolute -top-[10vh] -left-[10vw] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-3xl transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` 
          }}
        />
        <div 
          className="absolute -top-[5vh] -right-[10vw] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-3xl transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -20}px)` 
          }}
        />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 appear-animate">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium animation-delay-200">
            Creative Design Agency
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight md:leading-tight animation-delay-400">
            We create <span className="text-primary">brands</span> that people remember
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animation-delay-600">
            Creative One Place is a full-service digital agency offering graphic design, web design, social media marketing, and brand strategy solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animation-delay-800">
            <Button size="lg" icon={<ChevronRight />}>
              Explore our work
            </Button>
            <Button variant="outline" size="lg">
              Our services
            </Button>
          </div>
        </div>
        
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToContent}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-background border border-border hover:bg-secondary transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div ref={scrollRef} />
    </section>
  );
};

export default Hero;
