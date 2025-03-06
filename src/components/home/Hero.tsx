
import { useEffect, useRef, useState } from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroScrollIndicator from "./HeroScrollIndicator";
import HeroCursorEffects from "./HeroCursorEffects";

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedText, setAnimatedText] = useState<string[]>([]);
  const fullText = "We create brands that people remember";
  
  useEffect(() => {
    // Set the animated text to visible after a short delay for entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    // Matching text effect - all characters appear with staggered timing
    const textArray = fullText.split('');
    let animationArray: string[] = [];
    
    const animationInterval = setInterval(() => {
      if (animationArray.length < textArray.length) {
        animationArray = [...textArray.slice(0, animationArray.length + 1)];
        setAnimatedText(animationArray);
      } else {
        clearInterval(animationInterval);
      }
    }, 80);
    
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
      
      // Update spotlight effect variables
      document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
      clearInterval(animationInterval);
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
      <HeroBackground mousePosition={mousePosition} />
      <HeroContent animatedText={animatedText} fullText={fullText} />
      <HeroScrollIndicator scrollToContent={scrollToContent} />
      <HeroCursorEffects />
      <div ref={scrollRef} />
    </section>
  );
};

export default Hero;
