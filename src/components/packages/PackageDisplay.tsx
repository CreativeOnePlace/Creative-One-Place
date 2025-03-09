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
              "relative group",
              pkg.popular ? "scale-105 z-10" : ""
            )}
          >
            <div className={cn(
              "relative h-full rounded-xl transition-all duration-300",
              pkg.popular
                ? "bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] p-[1px]"
                : "border border-border bg-card/40 hover:shadow-lg"
            )}>
              <div className={cn(
                "h-full rounded-xl p-6 backdrop-blur-sm",
                pkg.popular ? "bg-black/90" : "bg-background/80"
              )}>
                {pkg.popular && (
                  <>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full shadow-md">
                      Most Popular
                    </div>
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div 
                          key={i}
                          className="absolute w-1 h-1 rounded-full bg-white/20"
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
                  </>
                )}

                <div className="aspect-video w-full mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={pkg.image || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className={cn(
                  "text-xl font-semibold mb-2",
                  pkg.popular ? "text-white" : ""
                )}>{pkg.title}</h3>

                <p className={cn(
                  "mb-4 text-sm",
                  pkg.popular ? "text-white/70" : "text-muted-foreground"
                )}>{pkg.description}</p>

                <div className={cn(
                  "text-2xl font-bold mb-6 flex items-baseline",
                  pkg.popular ? "text-white" : ""
                )}>
                  {pkg.price}
                  <span className={cn(
                    "text-sm ml-1",
                    pkg.popular ? "text-white/70" : "text-muted-foreground"
                  )}>/project</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      {feature.included ? (
                        <Check className={cn(
                          "shrink-0 mt-0.5",
                          pkg.popular ? "text-white" : "text-green-500"
                        )} size={16} />
                      ) : (
                        <X className={cn(
                          "shrink-0 mt-0.5",
                          pkg.popular ? "text-white/50" : "text-muted-foreground"
                        )} size={16} />
                      )}
                      <span className={cn(
                        feature.included 
                          ? pkg.popular ? "text-white" : ""
                          : pkg.popular ? "text-white/50" : "text-muted-foreground"
                      )}>
                        {feature.title}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="/contact" className="block w-full mt-auto">
                  <button className={cn(
                    "w-full py-3 rounded-md transition-all duration-300 transform group-hover:translate-y-[-2px] relative overflow-hidden",
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-white/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}>
                    <span className="relative z-10">Get Started</span>
                    {pkg.popular && (
                      <div className="absolute -inset-2 rounded-xl pointer-events-none opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gradient-to-r from-[#814bff] via-[#dd00ff] to-[#ff6a00]" />
                    )}
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default PackageDisplay;