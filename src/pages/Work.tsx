
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PreFooter from "@/components/layout/PreFooter";

// Sample projects data
const projectsData = [
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

const categories = [
  "All",
  "Social Media",
  "Web Design",
  "Graphic Design"
];

type Project = typeof projectsData[0];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (activeCategory === "All") {
        setFilteredProjects(projectsData);
      } else {
        setFilteredProjects(projectsData.filter(project => project.category === activeCategory));
      }
      setIsLoading(false);
    }, 300);
  }, [activeCategory]);

  const handleProjectClick = (projectId: string) => {
    navigate(`/work/${projectId}`);
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          </div>
          
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
              >
                Our Work
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              >
                Our creative portfolio
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                Explore our selected projects and see how we've helped brands transform their digital presence.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Filter Categories */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                  transition={{ duration: 0.4, delay: isLoading ? 0 : index * 0.1 }}
                  layoutId={project.id}
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-sm text-white/80">{project.category}</span>
                        <h3 className="text-xl font-medium text-white">{project.title}</h3>
                      </div>
                    </div>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs py-1 px-2 bg-secondary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && !isLoading && (
              <div className="text-center py-20">
                <h3 className="text-xl font-medium mb-2">No projects found</h3>
                <p className="text-muted-foreground">
                  Try selecting a different category
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section - Replaced with PreFooter */}
        <PreFooter 
          title="Have a project in mind?" 
          description="Turn your vision into reality with our expert team of designers and strategists ready to bring your ideas to life."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Work;
