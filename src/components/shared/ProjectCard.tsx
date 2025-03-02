
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  className?: string;
}

const ProjectCard = ({ id, title, category, imageUrl, className = "" }: ProjectCardProps) => {
  return (
    <Link 
      to={`/work/${id}`} 
      className={`group block w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] flex-shrink-0 relative ${className}`}
    >
      <div className="aspect-[4/5] overflow-hidden rounded-xl relative">
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white font-medium flex items-center gap-1">
            View project <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <span className="text-sm text-muted-foreground">{category}</span>
        <h3 className="text-lg font-medium mt-1">{title}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
