
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
      <main className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-primary/10 to-background/95 relative overflow-hidden"
          style={{ backgroundSize: 'cover' }}
        >
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-4 flex justify-center"
              >
                <Package className="text-primary h-12 w-12 mb-4" />
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Find the perfect <span className="text-primary">package</span> for your needs
              </motion.h1>
              
              <motion.p 
                className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Choose from our carefully crafted packages designed to meet your specific requirements,
                or let us create a custom solution just for you.
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
