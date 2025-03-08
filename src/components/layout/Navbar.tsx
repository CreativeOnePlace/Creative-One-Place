
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "../ui/DarkModeToggle";
import Button from "../shared/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [hoverLink, setHoverLink] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  // Add spotlight effect to navbar
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!navRef.current) return;
      
      const rect = navRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      navRef.current.style.setProperty('--mouse-x', `${x}%`);
      navRef.current.style.setProperty('--mouse-y', `${y}%`);
    };
    
    const navElement = navRef.current;
    if (navElement) {
      navElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (navElement) {
        navElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  return (
    <header 
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 spotlight ${
        scrolled ? "py-3 glass-panel" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-bold tracking-tighter relative z-10 interactive-element"
        >
          <span className="text-[#8B5CF6] transition-colors duration-300">Creative</span>
          <span className="text-foreground/80 transition-colors duration-300">One Place</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative interactive-link ${
                    location.pathname === link.path
                      ? "text-[#8B5CF6] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#8B5CF6]"
                      : "text-foreground/80 hover:text-[#8B5CF6]"
                  }`}
                  onMouseEnter={() => setHoverLink(link.path)}
                  onMouseLeave={() => setHoverLink(null)}
                >
                  {link.name}
                  {hoverLink === link.path && location.pathname !== link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#8B5CF6] origin-left scale-x-0 animate-[scale-in_0.3s_ease-out_forwards]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <DarkModeToggle />
          <Button size="sm" className="gradient-border">Get in touch</Button>
        </nav>
        
        <div className="flex items-center gap-4 md:hidden">
          <DarkModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-[#8B5CF6] transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container h-full flex flex-col pt-24 pb-8 px-6">
          <nav className="flex flex-col h-full">
            <ul className="flex flex-col gap-4 items-start">
              {navLinks.map((link, i) => (
                <li 
                  key={link.path} 
                  style={{ 
                    animationDelay: `${i * 50}ms`, 
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.3s ease-out'
                  }}
                  className="w-full"
                >
                  <Link
                    to={link.path}
                    className={`text-2xl font-medium block py-2 transition-colors hover:text-[#8B5CF6] ${
                      location.pathname === link.path
                        ? "text-[#8B5CF6]"
                        : "text-foreground/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto" style={{ 
              opacity: isOpen ? 1 : 0, 
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.3s ease-out',
              transitionDelay: '250ms' 
            }}>
              <Button fullWidth className="bg-[#8B5CF6] text-white">Get in touch</Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
