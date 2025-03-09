
import { motion } from "framer-motion";
import { PackageCategory } from "@/types/packages";
import { Globe, PenTool, MessageCircle } from "lucide-react";

interface PackageSelectorProps {
  selectedCategory: PackageCategory;
  setSelectedCategory: (category: PackageCategory) => void;
}

const PackageSelector = ({ selectedCategory, setSelectedCategory }: PackageSelectorProps) => {
  const categories = [
    { id: "web" as PackageCategory, label: "Web Design", icon: <Globe className="w-5 h-5" /> },
    { id: "graphic" as PackageCategory, label: "Graphic Design", icon: <PenTool className="w-5 h-5" /> },
    { id: "social" as PackageCategory, label: "Social Media", icon: <MessageCircle className="w-5 h-5" /> }
  ];

  return (
    <div className="mb-16">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`relative px-6 py-4 rounded-xl text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-3 ${
              selectedCategory === category.id
                ? "text-primary-foreground shadow-lg"
                : "text-foreground/80 hover:text-foreground hover:bg-card/40"
            }`}
          >
            {selectedCategory === category.id && (
              <motion.span
                layoutId="activePackageTab"
                className="absolute inset-0 bg-primary rounded-xl"
                initial={false}
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{category.icon}</span>
            <span className="relative z-10">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PackageSelector;
