
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Check, 
  Mail, 
  Phone, 
  MessageCircle, 
  AlertCircle,
  FileText,
  Send
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const services = [
  { id: "graphic-design", label: "Graphic Design" },
  { id: "web-design", label: "Web Design" },
  { id: "social-media", label: "Social Media" },
  { id: "marketing", label: "Marketing" },
  { id: "branding", label: "Branding & Identity" },
  { id: "packaging", label: "Packaging Design" },
  { id: "motion", label: "Motion Graphics" },
  { id: "print", label: "Print Design" },
];

const contactMethods = [
  { id: "email", label: "Email", icon: <Mail className="w-4 h-4" /> },
  { id: "phone", label: "Phone Call", icon: <Phone className="w-4 h-4" /> },
  { id: "whatsapp", label: "WhatsApp", icon: <MessageCircle className="w-4 h-4" /> }
];

type ContactInfo = {
  email: string;
  phone: string;
  whatsapp: string;
};

const ProjectIdea = () => {
  const { toast } = useToast();
  const [companyName, setCompanyName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedContactMethods, setSelectedContactMethods] = useState<string[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: "",
    phone: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleContactMethodToggle = (methodId: string) => {
    setSelectedContactMethods(prev => 
      prev.includes(methodId)
        ? prev.filter(id => id !== methodId)
        : [...prev, methodId]
    );
  };

  const updateContactInfo = (key: keyof ContactInfo, value: string) => {
    setContactInfo(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!companyName) {
      toast({
        title: "Company name is required",
        description: "Please enter your company name to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (selectedServices.length === 0) {
      toast({
        title: "Select at least one service",
        description: "Please select the services you need for your project.",
        variant: "destructive",
      });
      return;
    }
    
    if (selectedContactMethods.length === 0) {
      toast({
        title: "Select at least one contact method",
        description: "Please select how you would like us to contact you.",
        variant: "destructive",
      });
      return;
    }
    
    // Validate that contact info is provided for selected methods
    const missingContactInfo = selectedContactMethods.filter(method => {
      return !contactInfo[method as keyof ContactInfo];
    });
    
    if (missingContactInfo.length > 0) {
      toast({
        title: "Contact information missing",
        description: `Please provide all contact information for your selected methods.`,
        variant: "destructive",
      });
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Project idea submitted!",
        description: "We'll get back to you shortly to discuss your project.",
      });
      
      // Reset form
      setCompanyName("");
      setProjectName("");
      setProjectDescription("");
      setSelectedServices([]);
      setSelectedContactMethods([]);
      setContactInfo({
        email: "",
        phone: "",
        whatsapp: "",
      });
    }, 1500);
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
                New Project
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              >
                Tell us about your project
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                Let us know what you're looking for and we'll help bring your vision to life.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Form Section */}
        <section className="py-12 pb-20">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Company Information */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 border-b pb-2">
                    <Briefcase className="text-primary w-5 h-5" />
                    <h2 className="text-xl font-semibold">Company Information</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1">
                        <Label htmlFor="companyName">Company Name</Label>
                        <span className="text-destructive">*</span>
                      </div>
                      <Input
                        id="companyName"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Enter your company name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="projectName">Project Name (optional)</Label>
                      <Input
                        id="projectName"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="Give your project a name"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Services Needed */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 border-b pb-2">
                    <Check className="text-primary w-5 h-5" />
                    <h2 className="text-xl font-semibold">Services Needed</h2>
                    <span className="text-destructive ml-1">*</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-start space-x-2">
                        <Checkbox
                          id={service.id}
                          checked={selectedServices.includes(service.id)}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                        />
                        <Label
                          htmlFor={service.id}
                          className="leading-tight cursor-pointer"
                        >
                          {service.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Project Description */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 border-b pb-2">
                    <FileText className="text-primary w-5 h-5" />
                    <h2 className="text-xl font-semibold">Project Description (optional)</h2>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="projectDescription">Describe your project briefly</Label>
                    <Textarea
                      id="projectDescription"
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      placeholder="Tell us more about what you're looking for..."
                      className="h-28"
                    />
                  </div>
                </div>
                
                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 border-b pb-2">
                    <AlertCircle className="text-primary w-5 h-5" />
                    <h2 className="text-xl font-semibold">Contact Preferences</h2>
                    <span className="text-destructive ml-1">*</span>
                  </div>
                  
                  <div className="space-y-4">
                    <Label className="block mb-2">How should we contact you?</Label>
                    <div className="flex flex-wrap gap-4">
                      {contactMethods.map((method) => (
                        <div 
                          key={method.id}
                          className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-colors cursor-pointer ${
                            selectedContactMethods.includes(method.id)
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => handleContactMethodToggle(method.id)}
                        >
                          {method.icon}
                          <span>{method.label}</span>
                          {selectedContactMethods.includes(method.id) && (
                            <Check className="w-4 h-4 text-primary ml-1" />
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {/* Conditional contact fields based on selection */}
                    <div className="space-y-4 mt-4">
                      {selectedContactMethods.includes("email") && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            <Label htmlFor="email">Email Address</Label>
                            <span className="text-destructive">*</span>
                          </div>
                          <Input
                            id="email"
                            type="email"
                            value={contactInfo.email}
                            onChange={(e) => updateContactInfo("email", e.target.value)}
                            placeholder="your@email.com"
                            required={selectedContactMethods.includes("email")}
                          />
                        </div>
                      )}
                      
                      {selectedContactMethods.includes("phone") && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            <Label htmlFor="phone">Phone Number</Label>
                            <span className="text-destructive">*</span>
                          </div>
                          <Input
                            id="phone"
                            type="tel"
                            value={contactInfo.phone}
                            onChange={(e) => updateContactInfo("phone", e.target.value)}
                            placeholder="+94 78 836 2998"
                            required={selectedContactMethods.includes("phone")}
                          />
                        </div>
                      )}
                      
                      {selectedContactMethods.includes("whatsapp") && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            <Label htmlFor="whatsapp">WhatsApp Number</Label>
                            <span className="text-destructive">*</span>
                          </div>
                          <Input
                            id="whatsapp"
                            type="tel"
                            value={contactInfo.whatsapp}
                            onChange={(e) => updateContactInfo("whatsapp", e.target.value)}
                            placeholder="+94 78 836 2998"
                            required={selectedContactMethods.includes("whatsapp")}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="pt-4 flex justify-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="relative group"
                    disabled={isSubmitting}
                  >
                    <span className="flex items-center gap-2">
                      {isSubmitting ? "Submitting..." : "Submit Project Idea"}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectIdea;
