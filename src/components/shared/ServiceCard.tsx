
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="group relative p-6 border border-border rounded-xl bg-card/50 hover:bg-card transition-colors"
    >
      <div className="absolute -inset-px bg-gradient-to-r from-primary/20 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
          {icon}
        </div>
        
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 flex-grow">{description}</p>
        
        <div className="flex items-center text-sm font-medium mt-auto">
          <span>Learn more</span>
          <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y--1" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
