
import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface HorizontalScrollProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const HorizontalScroll = ({ title, subtitle, children }: HorizontalScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const scrollDiv = scrollRef.current;
    if (scrollDiv) {
      scrollDiv.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => scrollDiv.removeEventListener("scroll", handleScroll);
    }
  }, []);
  
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth * 0.7;
    
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
            {subtitle && <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "bg-secondary hover:bg-primary hover:text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                canScrollRight
                  ? "bg-secondary hover:bg-primary hover:text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto py-4 horizontal-mask custom-scrollbar px-6 md:px-12"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          <div className="pl-[max(1rem,calc((100vw-80rem)/2))]" />
          {children}
          <div className="pr-[max(1rem,calc((100vw-80rem)/2))]" />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
