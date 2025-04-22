
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight, Mail, MapPin, Phone, XIcon } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const services = [
    { name: "Graphic Design", path: "/services#graphic-design" },
    { name: "Web Design", path: "/services#web-design" },
    { name: "Social Media", path: "/services#social-media" },
    { name: "Marketing", path: "/services#marketing" },
  ];
  
  const info = [
    { name: "About Us", path: "/about" },
    { name: "Our Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];
  
  const contact = [
    { 
      icon: <Mail className="w-4 h-4" />, 
      text: "hello@creativeoneplace.com",
      href: "mailto:hello@creativeoneplace.com"
    },
    { 
      icon: <Phone className="w-4 h-4" />, 
      text: "+94 78 836 2998",
      href: "tel:+94788362998"  
    },
    { 
      icon: <MapPin className="w-4 h-4" />, 
      text: "Creative One Place, Galle Road, Colombo",
      href: "https://maps.google.com"
    }
  ];
  
  const social = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/creative_one_place/" },
    { icon: <XIcon className="w-5 h-5" />, href: "https://x.com/CreativeOPlace" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/creative.one.place.official" },
  ];
  
  // Track mouse position for the footer spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!footerRef.current) return;
      
      const rect = footerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePosition({ x, y });
      
      if (footerRef.current) {
        footerRef.current.style.setProperty('--mouse-x', `${x}%`);
        footerRef.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <footer 
      ref={footerRef}
      className="relative pt-20 pb-10 border-t border-border spotlight"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)`
      }}
    >
      {/* Floating particles in footer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#8B5CF6]/10 floating-animation"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold tracking-tighter inline-block">
              <span className="text-[#8B5CF6]">Creative</span>
              <span className="text-foreground/80">One Place</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We create captivating designs and provide comprehensive digital solutions for brands that want to stand out.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {social.map((item, i) => (
                <a 
                  key={i}
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-[#8B5CF6] hover:text-white transition-colors magnetic-button"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base font-medium text-[#8B5CF6]">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path}
                    className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors inline-flex items-center group interactive-link"
                  >
                    {service.name}
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base font-medium text-[#8B5CF6]">Information</h3>
            <ul className="space-y-3">
              {info.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors inline-flex items-center group interactive-link"
                  >
                    {item.name}
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base font-medium text-[#8B5CF6]">Contact</h3>
            <ul className="space-y-3">
              {contact.map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="text-[#8B5CF6]/70 group-hover:text-[#8B5CF6] transition-colors">{item.icon}</span>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Creative One Place. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors interactive-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors interactive-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
