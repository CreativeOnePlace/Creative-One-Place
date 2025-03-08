
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PackageSelector from "@/components/packages/PackageSelector";
import PackageDisplay from "@/components/packages/PackageDisplay";
import { PackageCategory } from "@/types/packages";

const TailorMadePackages = () => {
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory>("web");
  
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32">
        <section className="container mx-auto px-6 py-12">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tailor Made <span className="text-primary">Packages</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully crafted packages designed to meet your specific needs,
              or let us create a custom solution just for you.
            </p>
          </motion.div>
          
          <PackageSelector 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
          
          <PackageDisplay category={selectedCategory} />
          
          <motion.div 
            className="mt-16 max-w-2xl mx-auto text-center p-6 border border-primary/20 rounded-xl bg-card/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Need Something Custom?</h3>
            <p className="text-muted-foreground mb-6">
              Don't see exactly what you need? We specialize in creating custom solutions 
              tailored to your unique requirements and business goals.
            </p>
            <a href="/project-idea" className="inline-block">
              <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                Request Custom Package
              </button>
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TailorMadePackages;
