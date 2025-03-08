
import { useNavigate } from "react-router-dom";
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
      className="group relative overflow-hidden rounded-2xl border border-[#8B5CF6]/20 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#D946EF]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
      
      {/* Card content */}
      <div className="relative z-10 p-6 flex flex-col h-full">
        <motion.div 
          className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#D946EF]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] mb-5 relative overflow-hidden group-hover:border-[#8B5CF6]/50 transition-colors duration-300"
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6] to-[#D946EF] opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="relative z-10 group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-[#8B5CF6] transition-colors duration-300">{title}</h3>
        
        <p className="text-muted-foreground group-hover:text-foreground text-sm flex-grow transition-colors duration-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
