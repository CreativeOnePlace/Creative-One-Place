import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart, PenTool, Globe, MessageCircle, ArrowRight, CheckCircle, Package } from "lucide-react";
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
    title: "Pahan Lanka",
    category: "Social Media",
    tags: ["logo", "identity", "branding"],
    imageUrl: "../public/images/our-works/pahan-lanka/image-2.png"
  },
  {
    id: "web-design-1",
    title: "Bride Zone",
    category: "Web Design",
    tags: ["web", "ui", "responsive"],
    imageUrl: "../public/images/our-works/bride-zone/bride-zone.png"
  },
  {
    id: "social-media-1",
    title: "Yugathra Movie",
    category: "Social Media",
    tags: ["strategy", "social", "campaign"],
    imageUrl: "../public/images/our-works/yugathra/image-2.png"
  },
  {
    id: "graphic-design-1",
    title: "Samagi",
    category: "Social Media",
    tags: ["packaging", "print", "design"],
    imageUrl: "../public/images/our-works/samagi/image.png"
  },
  {
    id: "web-design-2",
    title: "Best Driver in Sri Lanka",
    category: "Web Design",
    tags: ["logo", "identity", "branding", "web design"],
    imageUrl: "../public/images/our-works/best-driver-in-sri-lanka/best-driver-in-sri-lanka.png"
  },
  {
    id: "web-design-3",
    title: "Samagi Website",
    category: "Web Design",
    tags: ["web", "ui", "ecommerce"],
    imageUrl: "../public/images/our-works/samagi-web/samagi-web.png"
  },
  {
    id: "marketing-1",
    title: "Bambara Wasanthe - Movie",
    category: "Social Media",
    tags: ["digital", "campaign", "marketing"],
    imageUrl: "../public/images/our-works/bambarawasanthe/image.png"
  },
  {
    id: "social-media-2",
    title: "Channa Perera Acting Academy",
    category: "Social Media",
    tags: ["influencer", "social", "collaboration"],
    imageUrl: "../public/images/our-works/channa-perera-academy/image.png"
  },
  {
    id: "graphic-design-2",
    title: "Prime Stock",
    category: "Graphic Design",
    tags: ["print", "design", "editorial"],
    imageUrl: "../public/images/our-works/prime-stock/image.png"
  }
];

// Sample logos for client slider
// Tool/Service logos configuration
const toolsAndServices = [
  { id: 'adobe-stock', name: 'Adobe Stock' },
  { id: 'adobe', name: 'Adobe' },
  { id: 'freepick', name: 'Freepick' },
  { id: 'wordpress', name: 'WordPress' },
  { id: 'google', name: 'Google' },
  { id: 'hostinger', name: 'Hostinger' },
  { id: 'namecheap', name: 'Namecheap' },
  { id: 'unplash', name: 'Unsplash' }
];

// Generate client logos array dynamically
// const clientLogos = toolsAndServices.map((tool, index) => ({
const clientLogos = toolsAndServices.map((tool, index) => ({
  id: `logo-${index + 1}`,
  lightImageUrl: `./../public/images/tools-services-logo/light/${tool.id}.webp`,
  darkImageUrl: `./../public/images/tools-services-logo/dark/${tool.id}.webp`,
  name: tool.name
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
  { count: "5+", label: "Years Experience" },
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

        {/* Tools Logo Slider */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-6 mb-10">
            <p className="text-center text-muted-foreground mb-10">
              Trusted Tools & Services
            </p>
          </div>

          <AutoSlider speed={30} className="py-4">
            {clientLogos.map((logo) => (
              <div
                key={logo.id}
                className="mx-10 flex-shrink-0 h-14 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={logo.lightImageUrl}
                  alt={logo.name}
                  className="h-full object-contain block dark:hidden"
                />
                <img
                  src={logo.darkImageUrl}
                  alt={logo.name}
                  className="h-full object-contain hidden dark:block"
                />
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

            <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services">
                <Button variant="outline" icon={<ArrowRight />}>View all services</Button>
              </Link>
              <Link to="/packages">
                <Button variant="primary" icon={<Package className="w-4 h-4" />}>Explore our packages</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <HorizontalScroll
          title="Our Works"
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
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
