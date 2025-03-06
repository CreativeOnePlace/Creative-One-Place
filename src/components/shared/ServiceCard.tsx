
import { ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#D946EF]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      
      <div className="relative z-10 p-6 border border-[#8B5CF6]/20 rounded-2xl bg-card/80 backdrop-blur-sm hover:shadow-xl hover:shadow-[#8B5CF6]/5 transition-all duration-300 h-full flex flex-col">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
        
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
        
        <motion.div 
          className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#8B5CF6]/30 text-[#8B5CF6] backdrop-blur-md bg-white/10 group-hover:bg-[#8B5CF6] group-hover:text-white transition-all duration-300 mb-5 relative overflow-hidden"
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6] to-[#D946EF] opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="relative z-10">
            {icon}
          </div>
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-[#8B5CF6] transition-colors duration-300">{title}</h3>
        
        <p className="text-muted-foreground group-hover:text-foreground text-sm mb-6 flex-grow transition-colors duration-300">{description}</p>
        
        <motion.a 
          href={link} 
          onClick={handleClick}
          className="flex items-center text-sm font-medium mt-auto group/link"
          whileHover={{ x: 3 }}
        >
          <span className="relative inline-block overflow-hidden">
            <span className="text-foreground group-hover:text-[#8B5CF6] transition-colors duration-300">Learn more</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8B5CF6] transform scale-x-0 origin-left transition-transform duration-300 group-hover/link:scale-x-100"></span>
          </span>
          <ArrowUpRight className="ml-1 w-4 h-4 text-[#8B5CF6] transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
