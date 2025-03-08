
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PreFooter from "@/components/layout/PreFooter";

// Sample projects data (same as in Work.tsx)
const projectsData = [
  {
    id: "brand-identity-1",
    title: "Elegant Rebrand",
    category: "Brand Identity",
    tags: ["logo", "identity", "branding"],
    description: "A complete rebranding project for a luxury brand, focusing on elegant design elements and timeless aesthetics.",
    challenge: "The client needed to refresh their aging brand identity while preserving their heritage and recognition in the luxury market.",
    solution: "We developed a refined visual identity that honors their heritage while positioning them for the future market.",
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531390895628-d64fd6e17e22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    type: "image"
  },
  {
    id: "web-design-1",
    title: "Corporate Website",
    category: "Web Design",
    tags: ["web", "ui", "responsive"],
    description: "A modern, responsive website designed for a corporate client with a focus on user experience and conversion optimization.",
    challenge: "The client needed a website that would effectively communicate their value proposition and generate leads.",
    solution: "We designed a responsive website with clear call-to-actions and an intuitive user experience that guides visitors toward conversion.",
    imageUrl: "https://images.unsplash.com/photo-1523800378286-dae1f0dae656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    websiteUrl: "https://example.com",
    type: "website"
  },
  {
    id: "social-media-1",
    title: "Campaign Strategy",
    category: "Social Media",
    tags: ["strategy", "social", "campaign"],
    description: "A comprehensive social media campaign designed to increase brand awareness and engagement across multiple platforms.",
    challenge: "The client was struggling to establish a consistent presence across social media channels and wanted to increase engagement.",
    solution: "We developed a cohesive social media strategy with tailored content for each platform to maximize reach and engagement.",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1612832021455-245704c6755a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    type: "image"
  },
  {
    id: "graphic-design-1",
    title: "Product Packaging",
    category: "Graphic Design",
    tags: ["packaging", "print", "design"],
    description: "A series of packaging designs created for a premium product line, focusing on visual appeal and brand consistency.",
    challenge: "The client needed packaging that would stand out on shelves and convey the premium nature of their products.",
    solution: "We designed eye-catching packaging with a cohesive visual language that communicates quality and premium positioning.",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598532213005-76403c368816?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576566265844-270a0101e8a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    type: "image"
  },
  {
    id: "brand-identity-2",
    title: "Modern Identity",
    category: "Brand Identity",
    tags: ["logo", "identity", "branding"],
    description: "A contemporary brand identity designed for a tech startup, featuring modern design elements and a forward-thinking aesthetic.",
    challenge: "The client needed a brand identity that would position them as innovative and trustworthy in a competitive tech market.",
    solution: "We created a modern, versatile identity system that communicates innovation while building trust with potential customers.",
    imageUrl: "https://images.unsplash.com/photo-1603145733146-ae562a55031e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1603145733146-ae562a55031e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    type: "image"
  },
  {
    id: "web-design-2",
    title: "E-commerce Platform",
    category: "Web Design",
    tags: ["web", "ui", "ecommerce"],
    description: "A full-featured e-commerce platform designed to provide an exceptional shopping experience and maximize conversions.",
    challenge: "The client needed an e-commerce solution that would offer a seamless shopping experience and drive sales.",
    solution: "We designed and developed a user-friendly e-commerce platform with intuitive navigation and streamlined checkout process.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    websiteUrl: "https://www.shopify.com",
    type: "website"
  },
  {
    id: "marketing-1",
    title: "Digital Marketing Campaign",
    category: "Marketing",
    tags: ["digital", "campaign", "marketing"],
    description: "A strategic digital marketing campaign designed to increase brand awareness and generate qualified leads.",
    challenge: "The client needed to increase their online visibility and generate more leads through digital channels.",
    solution: "We developed and implemented a comprehensive digital marketing strategy across multiple channels to reach the target audience.",
    imageUrl: "https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    type: "image"
  },
  {
    id: "social-media-2",
    title: "Influencer Partnership",
    category: "Social Media",
    tags: ["influencer", "social", "collaboration"],
    description: "A collaborative campaign with influencers designed to expand reach and build credibility with target audiences.",
    challenge: "The client wanted to leverage influencer marketing to reach new audiences and build credibility in their industry.",
    solution: "We identified and partnered with relevant influencers to create authentic content that resonated with the target audience.",
    imageUrl: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e7a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    type: "image"
  },
  {
    id: "graphic-design-2",
    title: "Annual Report Design",
    category: "Graphic Design",
    tags: ["print", "design", "editorial"],
    description: "A visually compelling annual report designed to effectively communicate company achievements and financial information.",
    challenge: "The client needed to present complex financial information in an engaging and accessible format.",
    solution: "We designed a visually engaging annual report that presents complex information in a clear and compelling way.",
    imageUrl: "https://images.unsplash.com/photo-1596638787647-904d822d751e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1596638787647-904d822d751e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1569017388730-020b5f80a004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    ],
    type: "image"
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  interface Project {
    id: string;
    title: string;
    category: string;
    tags: string[];
    description: string;
    challenge: string;
    solution: string;
    imageUrl: string;
    images?: string[];
    websiteUrl?: string;
    type: string;
  }

  const [project, setProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundProject = projectsData.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate("/work", { replace: true });
    }
  }, [id, navigate]);
  
  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => navigate("/work")}
            className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Projects
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
              >
                {project.category}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              >
                {project.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground mb-6"
              >
                {project.description}
              </motion.p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">The Challenge</h3>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Our Solution</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-xs py-1 px-2 bg-secondary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              {project.type === "website" ? (
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-border shadow-lg">
                  <iframe
                    src={project.websiteUrl}
                    title={project.title}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="aspect-video overflow-hidden rounded-xl">
                    <img 
                      src={project.images[activeImageIndex]} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {project.images.map((img: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`relative flex-shrink-0 w-24 h-24 rounded-md overflow-hidden transition-all
                          ${activeImageIndex === index 
                            ? "ring-2 ring-primary" 
                            : "opacity-70 hover:opacity-100"
                          }`}
                      >
                        <img 
                          src={img} 
                          alt={`${project.title} thumbnail ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="border-t border-border pt-10">
            <h2 className="text-2xl font-bold mb-6">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData
                .filter(p => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject) => (
                  <motion.div
                    key={relatedProject.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group cursor-pointer"
                    onClick={() => navigate(`/work/${relatedProject.id}`)}
                  >
                    <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-sm text-white/80">{relatedProject.category}</span>
                          <h3 className="text-xl font-medium text-white">{relatedProject.title}</h3>
                        </div>
                      </div>
                      <img 
                        src={relatedProject.imageUrl} 
                        alt={relatedProject.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
        
        <PreFooter 
          title="Ready to start your project?" 
          description="Let's discuss how we can help bring your ideas to life with our creative expertise."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
