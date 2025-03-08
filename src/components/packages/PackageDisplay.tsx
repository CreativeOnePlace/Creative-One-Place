
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { packages } from "@/data/packages";
import { PackageCategory } from "@/types/packages";
import { cn } from "@/lib/utils";

interface PackageDisplayProps {
  category: PackageCategory;
}

const PackageDisplay = ({ category }: PackageDisplayProps) => {
  const filteredPackages = packages.filter(pkg => pkg.category === category);
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={category}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
      >
        {filteredPackages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "relative p-6 rounded-xl border backdrop-blur-sm group hover:shadow-lg transition-all duration-300",
              pkg.popular
                ? "border-primary/40 bg-primary/5"
                : "border-border bg-card/40"
            )}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
                Most Popular
              </div>
            )}
            
            <div className="aspect-video w-full mb-6 overflow-hidden rounded-lg">
              <img 
                src={pkg.image || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"} 
                alt={pkg.title} 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
            <p className="text-muted-foreground mb-4 text-sm">{pkg.description}</p>
            
            <div className="text-2xl font-bold mb-6 flex items-baseline">
              {pkg.price}
              <span className="text-sm text-muted-foreground ml-1">/project</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  {feature.included ? (
                    <Check className="text-green-500 shrink-0 mt-0.5" size={16} />
                  ) : (
                    <X className="text-muted-foreground shrink-0 mt-0.5" size={16} />
                  )}
                  <span className={feature.included ? "" : "text-muted-foreground"}>
                    {feature.title}
                  </span>
                </li>
              ))}
            </ul>
            
            <a href="/contact" className="block w-full mt-auto">
              <button className={cn(
                "w-full py-3 rounded-md transition-all duration-300 transform group-hover:translate-y-[-2px]",
                pkg.popular
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}>
                Get Started
              </button>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default PackageDisplay;
