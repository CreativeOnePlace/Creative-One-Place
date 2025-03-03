
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/shared/Button";

type PreFooterProps = {
  title: string;
  description: string;
};

const PreFooter = ({ title, description }: PreFooterProps) => {
  return (
    <section className="py-20 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] p-10 md:p-14 text-primary-foreground relative overflow-hidden">
            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div 
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-white/20"
                  initial={{ 
                    x: Math.random() * 100 - 50, 
                    y: Math.random() * 100 - 50,
                    opacity: 0.2 + Math.random() * 0.5
                  }}
                  animate={{ 
                    x: [
                      Math.random() * 100 - 50,
                      Math.random() * 100 - 50,
                      Math.random() * 100 - 50
                    ],
                    y: [
                      Math.random() * 100 - 50,
                      Math.random() * 100 - 50,
                      Math.random() * 100 - 50
                    ]
                  }}
                  transition={{
                    duration: 10 + Math.random() * 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
            
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              >
                {title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg mb-8 text-primary-foreground/80"
              >
                {description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <Link to="/project-idea">
                  <Button 
                    size="lg" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 relative overflow-hidden group"
                    icon={<ArrowRight className="group-hover:translate-x-1 transition-transform" />}
                  >
                    Start a project
                  </Button>
                </Link>
                
                {/* Button hover effect */}
                <div className="absolute -inset-2 rounded-xl pointer-events-none opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-xl bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316]" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PreFooter;
