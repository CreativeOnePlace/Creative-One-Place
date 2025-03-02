
import { useEffect } from "react";
import { motion } from "framer-motion";
import { PenTool, Globe, MessageCircle, BarChart, CheckCircle, ArrowUpRight } from "lucide-react";
import Button from "@/components/shared/Button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  
  return (
    <div className="min-h-screen">
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
        
        {/* Services Section */}
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
        
        {/* Our Process Section */}
        <section className="py-20 bg-secondary/50">
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
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
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
            
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-[3.05rem] w-px bg-border hidden md:block" />
              
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="md:grid md:grid-cols-7 items-start gap-6"
                  >
                    <div className="flex items-center gap-4 md:gap-0 md:block md:col-span-2">
                      <div className="relative z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-medium md:mt-2">{step.title}</h3>
                    </div>
                    <div className="mt-4 md:mt-0 pl-14 md:pl-0 md:col-span-5">
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent" />
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/5 to-transparent" />
              </div>
              
              <div className="max-w-3xl mx-auto text-center">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
                >
                  Ready to start your project?
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg mb-8 text-primary-foreground/80"
                >
                  Let's discuss how our services can help you achieve your business goals.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Contact us
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white/10"
                  >
                    View our work
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
