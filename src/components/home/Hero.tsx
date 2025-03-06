import { useEffect, useRef, useState } from "react";
import Button from "../shared/Button";
import { ChevronRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailElements: HTMLDivElement[] = [];
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "We create brands that people remember";
  
  useEffect(() => {
    // Set the animated text to visible after a short delay for entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    // Typewriter effect for the headline
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);
    
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
      const { clientX, clientY } = event;
      
      // Update normalized mouse position for parallax effects
      setMousePosition({
        x: (clientX / window.innerWidth) - 0.5,
        y: (clientY / window.innerHeight) - 0.5,
      });
      
      // Update custom cursor position
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
      
      // Update spotlight effect variables
      document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
      
      // Update mouse trail
      if (trailElements.length > 0) {
        const trail = trailElements.pop();
        if (trail) {
          trail.style.left = `${clientX}px`;
          trail.style.top = `${clientY}px`;
          trail.style.opacity = '0.8';
          
          setTimeout(() => {
            trail.style.opacity = '0';
            trailElements.unshift(trail);
          }, 100);
        }
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    // Create custom cursor elements
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    const cursorOutline = document.createElement('div');
    cursorOutline.className = 'cursor-outline';
    document.body.appendChild(cursorOutline);
    
    // Create mouse trail elements
    for (let i = 0; i < 10; i++) {
      const trail = document.createElement('div');
      trail.className = 'mouse-trail';
      trail.style.opacity = '0';
      document.body.appendChild(trail);
      trailElements.push(trail);
    }
    
    // Add custom cursor behavior
    const handleMouseMoveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;
      
      // Add delay to outline for smooth effect
      setTimeout(() => {
        cursorOutline.style.left = `${clientX}px`;
        cursorOutline.style.top = `${clientY}px`;
      }, 50);
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('.interactive-element')) {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.opacity = '0.5';
      } else {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.opacity = '1';
      }
    };
    
    document.addEventListener('mousemove', handleMouseMoveCursor);
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener('mousemove', handleMouseMoveCursor);
      clearTimeout(timer);
      clearInterval(typingInterval);
      
      // Clean up cursor and trail elements
      if (cursorDot) document.body.removeChild(cursorDot);
      if (cursorOutline) document.body.removeChild(cursorOutline);
      trailElements.forEach(trail => {
        if (trail) document.body.removeChild(trail);
      });
    };
  }, []);
  
  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden spotlight"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
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
        
        {/* Added floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#8B5CF6]/30 floating-animation"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i + 20}
              className="absolute w-3 h-3 rounded-full bg-[#0EA5E9]/20 floating-animation"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${6 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 appear-animate">
          <span className="inline-block py-1 px-3 bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-full text-sm font-medium animation-delay-200">
            Creative Design Agency
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight md:leading-tight animation-delay-400 text-glow">
            <span className="typewriter-text">{typedText}</span>
            <span className={`typewriter-cursor ${isTypingComplete ? 'typewriter-cursor-blink' : ''}`}>|</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animation-delay-600">
            Creative One Place is a full-service digital agency offering graphic design, web design, social media marketing, and brand strategy solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animation-delay-800">
            <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors gradient-border" icon={<ChevronRight />}>
              Explore our work
            </Button>
            <Button variant="outline" size="lg" className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10 transition-colors gradient-border">
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
      
      {/* Enhanced cursor effects display */}
      <div ref={cursorRef} className="fixed pointer-events-none z-50 font-medium text-white text-center text-xs">
        {cursorText}
      </div>
    </section>
  );
};

export default Hero;
