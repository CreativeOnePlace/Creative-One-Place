
import { ChevronDown } from "lucide-react";

interface HeroScrollIndicatorProps {
  scrollToContent: () => void;
}

const HeroScrollIndicator = ({ scrollToContent }: HeroScrollIndicatorProps) => {
  return (
    <div className="absolute left-1/2 bottom-10 -translate-x-1/2 animate-bounce">
      <button 
        onClick={scrollToContent}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-background border border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/5 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5 text-[#8B5CF6]" />
      </button>
    </div>
  );
};

export default HeroScrollIndicator;
