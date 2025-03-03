
import { ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  link?: string;
}

const ServiceCard = ({ title, description, icon, delay = 0, link = "#" }: ServiceCardProps) => {
  const navigate = useNavigate();

  // Handle click to navigate to specific sections
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Check if the link includes a hash for section navigation
    if (link.includes('#')) {
      const [path, hash] = link.split('#');
      
      // Navigate to the page
      navigate(path);
      
      // After navigation, scroll to the element
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Regular navigation without hash
      navigate(link);
    }
  };

  return (
    <div
      className="group relative p-6 border border-border rounded-xl bg-card/50 hover:bg-card transition-colors"
      style={{ 
        opacity: 1, 
        transform: 'none',
        transition: `opacity 0.6s ease, transform 0.6s ease${delay ? `, transition-delay: ${delay * 0.1}s` : ''}` 
      }}
    >
      <div className="absolute -inset-px bg-gradient-to-r from-primary/20 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
          {icon}
        </div>
        
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 flex-grow">{description}</p>
        
        <a 
          href={link} 
          onClick={handleClick}
          className="flex items-center text-sm font-medium mt-auto group/link cursor-pointer"
        >
          <span>Learn more</span>
          <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
