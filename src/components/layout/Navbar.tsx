
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "../ui/DarkModeToggle";
import Button from "../shared/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
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
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass-panel" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-bold tracking-tighter relative z-10"
        >
          <span className="text-primary transition-colors duration-300">Creative</span>
          <span className="text-foreground/80 transition-colors duration-300">One Place</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary relative ${
                    location.pathname === link.path
                      ? "text-primary after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <DarkModeToggle />
          <Button size="sm">Get in touch</Button>
        </nav>
        
        <div className="flex items-center gap-4 md:hidden">
          <DarkModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className={`w-6 h-6 transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <X className={`w-6 h-6 absolute transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`} />
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
                    className={`text-2xl font-medium block py-2 transition-colors hover:text-primary ${
                      location.pathname === link.path
                        ? "text-primary"
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
              <Button fullWidth>Get in touch</Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
