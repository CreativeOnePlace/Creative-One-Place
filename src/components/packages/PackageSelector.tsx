
import { motion } from "framer-motion";
import { PackageCategory } from "@/types/packages";

interface PackageSelectorProps {
  selectedCategory: PackageCategory;
  setSelectedCategory: (category: PackageCategory) => void;
}

const PackageSelector = ({ selectedCategory, setSelectedCategory }: PackageSelectorProps) => {
  const categories = [
    { id: "web" as PackageCategory, label: "Web Design" },
    { id: "graphic" as PackageCategory, label: "Graphic Design" },
    { id: "social" as PackageCategory, label: "Social Media" }
  ];

  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-3 md:gap-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`relative px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all ${
              selectedCategory === category.id
                ? "text-white"
                : "text-foreground/80 hover:text-foreground"
            }`}
          >
            {selectedCategory === category.id && (
              <motion.span
                layoutId="activeTab"
                className="absolute inset-0 bg-primary rounded-full"
                initial={false}
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PackageSelector;
