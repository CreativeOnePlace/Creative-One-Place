
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
      {/* Enhanced Background with more vibrant colors */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/0 z-10" />
        
        {/* Vibrant gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-[#8B5CF6]/10 to-transparent -z-10" />
        
        {/* First blob with enhanced colors and stronger effect */}
        <div 
          className="absolute -top-[10vh] -left-[10vw] w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-[#8B5CF6]/30 to-[#D946EF]/20 blur-3xl transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)` 
          }}
        />
        
        {/* Second blob with different color and stronger effect */}
        <div 
          className="absolute -top-[5vh] -right-[10vw] w-[50vw] h-[50vw] rounded-full bg-gradient-to-l from-[#F97316]/30 to-[#0EA5E9]/20 blur-3xl transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * -50}px, ${mousePosition.y * -40}px)` 
          }}
        />
        
        {/* Additional smaller interactive elements */}
        <div 
          className="absolute bottom-[10vh] left-[10vw] w-[30vw] h-[30vw] rounded-full bg-[#0EA5E9]/10 blur-3xl transition-transform duration-700 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * -30}px)` 
          }}
        />
        
        <div 
          className="absolute bottom-[15vh] right-[15vw] w-[25vw] h-[25vw] rounded-full bg-[#F97316]/10 blur-3xl transition-transform duration-700 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * 25}px)` 
          }}
        />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 appear-animate">
          <span className="inline-block py-1 px-3 bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-full text-sm font-medium animation-delay-200">
            Creative Design Agency
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight md:leading-tight animation-delay-400">
            We create <span className="text-[#8B5CF6]">brands</span> that people remember
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animation-delay-600">
            Creative One Place is a full-service digital agency offering graphic design, web design, social media marketing, and brand strategy solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animation-delay-800">
            <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors" icon={<ChevronRight />}>
              Explore our work
            </Button>
            <Button variant="outline" size="lg" className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10 transition-colors">
              Our services
            </Button>
          </div>
        </div>
        
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToContent}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-background border border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/5 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-5 h-5 text-[#8B5CF6]" />
          </button>
        </div>
      </div>
      
      <div ref={scrollRef} />
    </section>
  );
};

export default Hero;
