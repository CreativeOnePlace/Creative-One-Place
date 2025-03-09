
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
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
              className="mt-20 max-w-3xl mx-auto text-center p-10 border-2 border-primary/30 rounded-2xl bg-gradient-to-b from-card/40 to-card/20 backdrop-blur-md shadow-lg hover:shadow-primary/20 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Need Something Custom?
                </h3>
                <p className="text-lg text-muted-foreground/90 mb-8 max-w-xl mx-auto">
                  Don't see exactly what you need? We specialize in creating custom solutions
                  tailored to your unique requirements and business goals.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="/project-idea" className="inline-block">
                    <button className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-medium shadow-lg hover:shadow-primary/25 hover:bg-primary/90 transition-all duration-300 flex items-center gap-3 group">
                      Request Custom Package
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-300" />
                    </button>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Packages;
