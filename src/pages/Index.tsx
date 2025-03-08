
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart, PenTool, Globe, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import Hero from "@/components/home/Hero";
import HorizontalScroll from "@/components/home/HorizontalScroll";
import AutoSlider from "@/components/home/AutoSlider";
import ProjectCard from "@/components/shared/ProjectCard";
import ServiceCard from "@/components/shared/ServiceCard";
import Button from "@/components/shared/Button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PreFooter from "@/components/layout/PreFooter";

// Sample projects data
const projects = [
  {
    id: "brand-identity-1",
    title: "Elegant Rebrand",
    category: "Brand Identity",
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "web-design-1",
    title: "Corporate Website",
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1523800378286-dae1f0dae656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "social-media-1",
    title: "Campaign Strategy",
    category: "Social Media",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "graphic-design-1",
    title: "Product Packaging",
    category: "Graphic Design",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "brand-identity-2",
    title: "Modern Identity",
    category: "Brand Identity",
    imageUrl: "https://images.unsplash.com/photo-1603145733146-ae562a55031e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "web-design-2",
    title: "E-commerce Platform",
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

// Sample logos for client slider
const clientLogos = Array(10).fill(0).map((_, i) => ({ 
  id: `logo-${i}`, 
  imageUrl: `https://placehold.co/200x80/e2e8f0/64748b?text=Client+${i+1}`,
  name: `Client ${i+1}`
}));

// Sample services data
const services = [
  {
    title: "Graphic Design",
    description: "Create stunning visuals with our expert graphic design services, from branding to marketing materials.",
    icon: <PenTool className="w-6 h-6" />,
    link: "/services#graphic-design"
  },
  {
    title: "Web Design",
    description: "Build responsive, user-friendly websites that drive engagement and conversions.",
    icon: <Globe className="w-6 h-6" />,
    link: "/services#web-design"
  },
  {
    title: "Social Media",
    description: "Develop a powerful social media presence with strategic content creation and management.",
    icon: <MessageCircle className="w-6 h-6" />,
    link: "/services#social-media"
  },
  {
    title: "Marketing",
    description: "Drive business growth with comprehensive marketing strategies tailored to your goals.",
    icon: <BarChart className="w-6 h-6" />,
    link: "/services#marketing"
  }
];

// Sample stats
const stats = [
  { count: "100+", label: "Happy Clients" },
  { count: "250+", label: "Projects Completed" },
  { count: "10+", label: "Years Experience" },
  { count: "15", label: "Industry Awards" }
];

// Sample benefits
const benefits = [
  "Strategic approach to design",
  "Focus on user experience",
  "Data-driven decisions",
  "Industry best practices",
  "Dedicated support team",
  "Regular performance reviews"
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Clients Logo Slider */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-6 mb-10">
            <p className="text-center text-muted-foreground mb-10">Trusted by industry-leading companies</p>
          </div>
          
          <AutoSlider speed={15} className="py-4">
            {clientLogos.map((logo) => (
              <div key={logo.id} className="mx-10 flex-shrink-0 h-14 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <img src={logo.imageUrl} alt={logo.name} className="h-full" />
              </div>
            ))}
          </AutoSlider>
        </section>
        
        {/* Services Section */}
        <section className="py-20 bg-gradient-to-r from-[#8B5CF6]/10 via-[#D946EF]/5 to-[#8B5CF6]/10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
              >
                Our Services
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4 background-animate bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316]"
              >
                Comprehensive creative solutions for your brand
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground"
              >
                We offer end-to-end creative services to help your brand stand out in today's competitive market.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard 
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  delay={index}
                  link={service.link}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/services">
                <Button variant="outline" icon={<ArrowRight />}>View all services</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Projects Showcase */}
        <HorizontalScroll
          title="Our Work"
          subtitle="Explore our latest projects and see how we've helped brands transform their digital presence."
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
            />
          ))}
        </HorizontalScroll>
        
        {/* Stats Section - With Added Animations */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.p 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      delay: index * 0.2,
                      duration: 0.8 
                    }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2"
                  >
                    {stat.count}
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                    className="text-muted-foreground"
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          </div>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
                >
                  Why Choose Us
                </motion.span>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
                >
                  Making your vision come to life through design
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-muted-foreground mb-8"
                >
                  At Creative One Place, we believe in the power of design to transform businesses. Our team combines creativity with strategy to deliver results that exceed expectations.
                </motion.p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.div 
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Link to="/contact">
                    <Button size="lg">Get in touch</Button>
                  </Link>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative aspect-square rounded-2xl overflow-hidden lg:translate-x-12"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Creative team at work" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section - Replaced with PreFooter */}
        <PreFooter 
          title="Ready to transform your brand?" 
          description="Let's collaborate to create stunning designs and effective marketing strategies that drive results."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
