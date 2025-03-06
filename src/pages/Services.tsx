import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PenTool, Globe, MessageCircle, BarChart, CheckCircle, ArrowUpRight, MousePointer, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/shared/Button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PreFooter from "@/components/layout/PreFooter";
import ServiceCard from "@/components/shared/ServiceCard";

const servicesData = [
  {
    id: "graphic-design",
    icon: <PenTool className="w-6 h-6" />,
    title: "Graphic Design",
    description: "We create visually stunning designs that communicate your brand's message effectively.",
    offerings: [
      "Brand Identity & Logo Design",
      "Marketing Materials",
      "Packaging Design",
      "Illustration & Infographics",
      "Print Design & Publications",
      "Environmental Graphics"
    ],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "web-design",
    icon: <Globe className="w-6 h-6" />,
    title: "Web Design",
    description: "We build responsive websites that provide exceptional user experiences and drive conversions.",
    offerings: [
      "UI/UX Design",
      "Responsive Website Design",
      "E-commerce Websites",
      "Landing Pages",
      "Website Maintenance",
      "Performance Optimization"
    ],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "social-media",
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Social Media",
    description: "We manage your social presence and create engaging content that resonates with your audience.",
    offerings: [
      "Social Media Strategy",
      "Content Creation",
      "Community Management",
      "Paid Social Campaigns",
      "Influencer Marketing",
      "Social Media Audits"
    ],
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "marketing",
    icon: <BarChart className="w-6 h-6" />,
    title: "Marketing",
    description: "We develop comprehensive marketing strategies that boost your brand visibility and drive growth.",
    offerings: [
      "Marketing Strategy",
      "Digital Advertising",
      "Content Marketing",
      "Email Marketing",
      "SEO & SEM",
      "Analytics & Reporting"
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, target audience, and competitive landscape."
  },
  {
    number: "02",
    title: "Strategy",
    description: "We develop a tailored strategy that aligns with your objectives and leverages industry best practices."
  },
  {
    number: "03",
    title: "Creation",
    description: "Our creative team designs and develops solutions that bring your vision to life."
  },
  {
    number: "04",
    title: "Implementation",
    description: "We implement the final deliverables, ensuring a smooth launch and transition."
  },
  {
    number: "05",
    title: "Analysis",
    description: "We measure performance, gather feedback, and make ongoing improvements to maximize results."
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const mouseCircleRef = useRef<HTMLDivElement>(null);
  const processContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseCircleRef.current || !processContainerRef.current) return;
      
      const rect = processContainerRef.current.getBoundingClientRect();
      
      if (
        e.clientX >= rect.left && 
        e.clientX <= rect.right && 
        e.clientY >= rect.top && 
        e.clientY <= rect.bottom
      ) {
        const relativeX = e.clientX - rect.left;
        const relativeY = e.clientY - rect.top;
        
        mouseCircleRef.current.style.opacity = "0.15";
        mouseCircleRef.current.style.transform = `translate(${relativeX}px, ${relativeY}px)`;
      } else {
        mouseCircleRef.current.style.opacity = "0";
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: processContainerRef,
    offset: ["start end", "end end"]
  });
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
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
                Our Services
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animation-delay-400"
              >
                Creative solutions <br className="hidden md:block" />for modern brands
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground animation-delay-600"
              >
                We offer comprehensive creative services to help your brand stand out 
                in today's competitive digital landscape.
              </motion.p>
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="space-y-32">
              {servicesData.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-6">
                      {service.icon}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                      {service.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.offerings.map((offering) => (
                        <div key={offering} className="flex items-start gap-2">
                          <CheckCircle className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                          <span>{offering}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" icon={<ArrowUpRight />}>
                      Learn more
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative rounded-2xl overflow-hidden aspect-video ${
                      index % 2 === 1 ? "lg:order-first" : ""
                    }`}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section ref={processContainerRef} className="py-20 bg-gradient-to-r from-[#8B5CF6]/10 via-[#D946EF]/5 to-[#8B5CF6]/10 relative overflow-hidden">
          <div 
            ref={mouseCircleRef}
            className="absolute w-[300px] h-[300px] rounded-full bg-[#D946EF] opacity-0 blur-[80px] pointer-events-none transition-opacity duration-300 ease-out"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
          
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
              >
                Our Process
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4 background-animate bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316]"
              >
                How we bring your vision to life
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground"
              >
                Our structured approach ensures we deliver exceptional results that meet your business objectives.
              </motion.p>
            </div>
            
            <div className="relative py-10">
              <motion.div 
                className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#8B5CF6] via-[#D946EF] to-[#0EA5E9] rounded-full hidden md:block"
                style={{
                  scaleY: scrollYProgress,
                  transformOrigin: "top"
                }}
              />
              
              <div className="space-y-24 relative">
                {processSteps.map((step, index) => (
                  <div key={step.number} className="relative">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ 
                          delay: index * 0.1 + 0.3,
                          type: "spring",
                          stiffness: 200,
                          damping: 10
                        }}
                        className="absolute left-1/2 md:translate-x-[-50%] w-6 h-6 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] z-10 hidden md:block"
                      >
                        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping-slow"></span>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                        className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} mb-4 md:mb-0`}
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] font-bold text-xl md:hidden mb-4">
                          {step.number}
                        </div>
                        <div className="hidden md:block">
                          <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#8B5CF6] to-[#D946EF]">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-2xl font-semibold mt-2 text-foreground">{step.title}</h3>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}
                      >
                        <motion.div 
                          whileHover={{ scale: 1.02 }}
                          className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl"
                        >
                          <p className="text-muted-foreground">{step.description}</p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <PreFooter 
          title="Need our creative expertise?" 
          description="Discover how our tailored services can elevate your brand and help you achieve your business goals."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
