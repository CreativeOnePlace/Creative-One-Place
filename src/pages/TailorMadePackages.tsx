
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PackageSelector from "@/components/packages/PackageSelector";
import PackageDisplay from "@/components/packages/PackageDisplay";
import { PackageCategory } from "@/types/packages";

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory>("web");
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for background
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          </div>
          
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center appear-animate">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animation-delay-200"
              >
                Our Packages
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animation-delay-400"
              >
                Find the perfect package<br className="hidden md:block" />for your needs
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground animation-delay-600"
              >
                Choose from our carefully crafted packages designed to meet your specific requirements, or let us create a custom solution just for you.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Package Selection Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <PackageSelector 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
            
            <PackageDisplay category={selectedCategory} />
            
            <motion.div 
              className="mt-20 max-w-3xl mx-auto text-center p-8 border border-primary/20 rounded-xl bg-card/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">Need Something Custom?</h3>
              <p className="text-muted-foreground mb-8">
                Don't see exactly what you need? We specialize in creating custom solutions 
                tailored to your unique requirements and business goals.
              </p>
              <a href="/project-idea" className="inline-block">
                <button className="bg-primary text-white px-8 py-4 rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2 group">
                  Request Custom Package
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Packages;
