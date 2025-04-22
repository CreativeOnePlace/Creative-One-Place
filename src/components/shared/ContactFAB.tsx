
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, X } from "lucide-react";

const ContactFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for closing FAB when clicked outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/+94788362998" 
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -65, scale: 0.8 }}
              animate={{ opacity: 1, y: -120, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-0 right-0 flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg"
            >
              <MessageSquare size={20} />
            </motion.a>
            
            {/* Call Button */}
            <motion.a
              href="tel:+94788362998" // Replace with your phone number
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: -65, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-0 right-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg"
            >
              <Phone size={20} />
            </motion.a>
          </>
        )}
      </AnimatePresence>
      
      {/* Main FAB Button */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg ${
          isOpen 
          ? "bg-red-500 rotate-45" 
          : "bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]"
        } text-white transition-colors duration-300`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default ContactFAB;
