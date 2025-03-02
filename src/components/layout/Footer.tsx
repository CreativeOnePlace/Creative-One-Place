
import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567"  
    },
    { 
      icon: <MapPin className="w-4 h-4" />, 
      text: "123 Design Street, Creative City",
      href: "https://maps.google.com"
    }
  ];
  
  const social = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com" },
  ];
  
  return (
    <footer className="relative pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold tracking-tighter inline-block">
              <span className="text-primary">Creative</span>
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
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base font-medium">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group"
                  >
                    {service.name}
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base font-medium">Information</h3>
            <ul className="space-y-3">
              {info.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group"
                  >
                    {item.name}
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base font-medium">Contact</h3>
            <ul className="space-y-3">
              {contact.map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                  >
                    {item.icon}
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
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
