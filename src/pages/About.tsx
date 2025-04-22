
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/shared/Button";

const About = () => {
  const contentContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };
  
  const contentItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32">
        {/* Hero section */}
        <section className="container mx-auto px-6 py-12 md:py-20">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We're a team of <span className="text-primary">creative</span> problem solvers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              At Creative One Place, we combine design thinking with technical expertise to create meaningful digital experiences that connect brands with their audiences.
            </p>
          </motion.div>
        </section>

        {/* Mission section */}
        <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              We believe in the power of design to transform businesses and create meaningful connections. Our mission is to help our clients stand out in a crowded digital landscape through innovative design solutions that effectively communicate their unique value.
            </p>
            <p className="text-muted-foreground mb-6">
              We're committed to a collaborative approach, working closely with our clients to understand their goals and deliver solutions that exceed expectations.
            </p>
            <Link to="/contact">
              <Button className="mt-4" icon={<ArrowUpRight className="w-5 h-5" />}>
                Work with us
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Creative team meeting" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </section>

        {/* About Us section - Replacing Team section */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A passionate team of designers, developers, and marketers dedicated to bringing brands to life.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              variants={contentContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div 
                className="p-6 border border-border rounded-xl bg-card/50"
                variants={contentItem}
              >
                <h3 className="text-xl font-medium mb-3">Our Story</h3>
                <p className="text-muted-foreground">
                  Founded in 2020, Creative One Place began with a simple idea: to create a design studio where creativity, strategy, and technology converge to deliver exceptional brand experiences. What started as a small team of passionate designers has grown into a full-service creative agency with a global client base.
                </p>
              </motion.div>
              
              <motion.div 
                className="p-6 border border-border rounded-xl bg-card/50"
                variants={contentItem}
              >
                <h3 className="text-xl font-medium mb-3">Our Approach</h3>
                <p className="text-muted-foreground">
                  We believe in a collaborative process that begins with understanding your business goals and audience needs. Our design thinking approach ensures that every solution we create is not only visually stunning but also strategically sound and built to drive results.
                </p>
              </motion.div>
              
              <motion.div 
                className="p-6 border border-border rounded-xl bg-card/50"
                variants={contentItem}
              >
                <h3 className="text-xl font-medium mb-3">Our Expertise</h3>
                <p className="text-muted-foreground">
                  With expertise spanning brand identity, web design, digital marketing, and content creation, our team brings diverse skills and perspectives to every project. We're constantly evolving, staying ahead of industry trends to deliver innovative solutions.
                </p>
              </motion.div>
              
              <motion.div 
                className="p-6 border border-border rounded-xl bg-card/50"
                variants={contentItem}
              >
                <h3 className="text-xl font-medium mb-3">Our Promise</h3>
                <p className="text-muted-foreground">
                  We're committed to delivering exceptional work that exceeds expectations. Our success is measured by your success, and we're proud to have helped hundreds of clients achieve their goals through strategic design and marketing solutions.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values section */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide our work and relationships with clients and each other.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={contentContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div 
              className="p-6 border border-border rounded-xl bg-card/50"
              variants={contentItem}
            >
              <h3 className="text-xl font-medium mb-3">Quality & Excellence</h3>
              <p className="text-muted-foreground">
                We believe in delivering exceptional work that exceeds expectations and makes a lasting impact.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 border border-border rounded-xl bg-card/50"
              variants={contentItem}
            >
              <h3 className="text-xl font-medium mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We work closely with our clients, valuing their input and considering them essential partners in the creative process.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 border border-border rounded-xl bg-card/50"
              variants={contentItem}
            >
              <h3 className="text-xl font-medium mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new ideas and technologies, constantly evolving our approach to stay ahead of industry trends.
              </p>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
