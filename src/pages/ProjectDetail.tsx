
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PreFooter from "@/components/layout/PreFooter";
import Button from "@/components/shared/Button";

// Sample projects data (same as in Work.tsx)
const projectsData = [
  {
    id: "brand-identity-1",
    title: "Pahan Lanka",
    category: "Brand Identity",
    tags: ["logo", "identity", "branding", "graphic design", "social media management"],
    description: "A complete rebranding project for a luxury brand, focusing on elegant design elements and timeless aesthetics.",
    challenge: "The client needed more than a visual refresh — they wanted to reposition their brand in the digital landscape, attract modern travelers, and boost direct bookings through social media.",
    solution: "Along with developing a timeless brand identity, I designed and managed a comprehensive social media strategy for Pahan Lanka. This involved creating visually compelling posts that highlighted the hotel’s elegance and lush surroundings, and setting up and managing Instagram and Facebook accounts with consistent, branded visuals. I also ran targeted paid ad campaigns aimed at honeymooners, families, and local tourists to drive reach and conversions. To boost engagement, I utilized interactive stories, engaging reels, and seasonal promotional content. As a result, the campaign achieved a 200%+ increase in page followers within three months, improved post engagement by five times, and significantly boosted direct inquiries through DMs and profile links.",
    imageUrl: "../public/images/our-works/pahan-lanka/image.png",
    images: [
      "../public/images/our-works/pahan-lanka/image.png",
      "../public/images/our-works/pahan-lanka/image-2.png",
      "../public/images/our-works/pahan-lanka/image-3.png",
      "../public/images/our-works/pahan-lanka/image-4.png",
      "../public/images/our-works/pahan-lanka/image-5.png",
      "../public/images/our-works/pahan-lanka/image-6.png"
    ],
    type: "image"
  },
  {
    id: "web-design-1",
    title: "Bride Zone Website",
    category: "Web Design",
    tags: ["web", "ui", "responsive", "SEO", "lead generation", "bridal service", "website development"],
    description: "A modern, responsive website designed and optimized for a bridal service brand, focusing on user experience, lead generation, and SEO.",
    challenge: "The client needed a professionally designed website that not only reflected the elegance of their bridal services but also ranked well in search engines to attract organic traffic and generate quality leads.",
    solution: "We handled the complete website development and SEO strategy for Bride Zone. The site was built with a mobile-first approach, featuring an intuitive layout, elegant UI, and persuasive call-to-actions. In parallel, we implemented on-page SEO best practices including optimized headings, meta tags, image alt attributes, and structured data to improve visibility on search engines. The result is a sleek, high-performing website that engages visitors and supports long-term discoverability.",
    imageUrl: "../public/images/our-works/bride-zone/bride-zone.png",
    websiteUrl: "https://bridezone.lk/",
    type: "website"
  },
  {
    id: "social-media-1",
    title: "Yugathra",
    category: "Social Media",
    tags: ["strategy", "social", "campaign"],
    description: "A full creative campaign for the movie “Yugathra,” including social media marketing, graphic design, and website development.",
    challenge: "The project required a cohesive digital presence to promote the movie “Yugathra,” spanning social media, visual branding, and a dedicated website to reach a broader audience.",
    solution: "We executed a comprehensive digital strategy for the film Yugathra, handling everything from designing eye-catching promotional graphics to developing a dedicated website. Our social media campaign for Yugathra focused on building hype and engagement across Facebook, featuring countdown posts, behind-the-scenes content, teasers, and cast highlights. Each design element—from posters to thumbnails—followed a unified visual identity to reinforce the film’s brand. Additionally, we developed a responsive website to serve as the movie’s central hub, showcasing trailers, cast details, and upcoming release information.",
    imageUrl: "../public/images/our-works/yugathra/image-2.png",
    images: [
      "../public/images/our-works/yugathra/image-1.png",
      "../public/images/our-works/yugathra/image-2.png",
      "../public/images/our-works/yugathra/image-3.png",
      "../public/images/our-works/yugathra/image-4.png",
      "../public/images/our-works/yugathra/image-5.png",
      "../public/images/our-works/yugathra/image-6.png",
      "../public/images/our-works/yugathra/image-7.png"
    ],
    type: "image"
  },
  {
    id: "graphic-design-1",
    title: "Samagi Publication",
    category: "Graphic Design and Social Media",
    tags: ["design", "branding", "social media", "graphic design"],
    description: "A dynamic digital branding and marketing project for a leading educational publisher in Sri Lanka.",
    challenge: "Samagi Publication, a trusted name in educational books for students from age 3 to Ordinary Level, wanted to modernize their brand presence and drive online sales in an increasingly competitive market.",
    solution: "We provided end-to-end creative support for Samagi Publication, including impactful graphic design and strategic social media marketing. Our content highlighted the value and variety of their educational materials through engaging visuals and informative posts. Through consistent branding, promotional campaigns, and targeted ads, we brought the brand to the forefront of the online education space. The results were remarkable — a significant boost in visibility, strong customer engagement, and online sales that exceeded expectations.",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    images: [
      "../public/images/our-works/samagi/image-3.png",
      "../public/images/our-works/samagi/image-2.png",
      "../public/images/our-works/samagi/image-4.png",
      "../public/images/our-works/samagi/image-5.png",
      "../public/images/our-works/samagi/image-1.png",
    ],
    type: "image"
  },
  {
    id: "web-design-2",
    title: "Best Driver in Sri Lanka",
    category: "Web Design, Branding",
    tags: ["logo", "identity", "branding"],
    description: "A contemporary brand identity designed for a tech startup, featuring modern design elements and a forward-thinking aesthetic.",
    challenge: "The client needed a brand identity that would position them as innovative and trustworthy in a competitive tech market.",
    solution: "We created a modern, versatile identity system that communicates innovation while building trust with potential customers.",
    imageUrl: "../public/images/our-works/samagi-web/samagi-web.png",
    websiteUrl: "https://bestdriverinsrilanka.com/",
    type: "website"
  },
  {
    id: "web-design-3",
    title: "Samagi Publication Website",
    category: "Web Design",
    tags: ["web", "ui", "ecommerce", "SEO", "website development", "online store", "bookstore"],
    description: "A fully functional e-commerce website developed for one of Sri Lanka’s leading educational publishers.",
    challenge: "Samagi Publication needed a modern, user-friendly website to showcase their vast collection of educational books and enable smooth online purchasing for parents, teachers, and students across Sri Lanka.",
    solution: "We developed a responsive, SEO-optimized e-commerce website for Samagi Publication, tailored to their target audience of school-aged learners and their families. The site features a clean UI, categorized book listings, secure checkout, and a mobile-friendly design. We also integrated essential tools for order management, customer support, and promotional banners to support ongoing campaigns. The result is a fast, intuitive platform that has become a key driver of their booming online sales.",
    imageUrl: "../public/images/our-works/samagi-web/samagi-web.png",
    websiteUrl: "https://www.samagibooks.com/",
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
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/5 pointer-events-none z-10 rounded-t-xl"></div>
                  <div className="relative bg-zinc-800 rounded-xl overflow-hidden shadow-2xl border border-zinc-700/50">
                    {/* Browser-like header */}
                    <div className="bg-zinc-900 p-3 flex items-center gap-2 border-b border-zinc-700/50">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 ml-2">
                        <div className="bg-zinc-700/50 rounded-md py-1 px-3 text-xs text-zinc-300 max-w-[250px] truncate">
                          {project.websiteUrl}
                        </div>
                      </div>
                    </div>

                    {/* Website content */}
                    <div className="aspect-[16/10] w-full">
                      <iframe
                        src={project.websiteUrl}
                        title={project.title}
                        loading="lazy"
                        className="absolute top-0 left-0
                        w-[1440px] h-[900px]
                        transform scale-[0.5]  
                        origin-top-left          
                        border-0"
                      />
                    </div>
                  </div>

                  {/* Visit website button */}
                  <div className="flex justify-center mt-4">
                    <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors gradient-border"
                        icon={<ChevronRight />}>
                        Visit Website
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="1:1 overflow-hidden rounded-xl">
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
