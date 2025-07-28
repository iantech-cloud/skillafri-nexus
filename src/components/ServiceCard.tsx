import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  accent?: boolean;
}

const ServiceCard = ({ icon: Icon, title, description, features, accent = false }: ServiceCardProps) => {
  return (
    <div className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 ${
      accent 
        ? 'bg-gradient-card border-accent/20 shadow-glow hover:shadow-elegant' 
        : 'bg-card border-border shadow-card hover:shadow-elegant'
    }`}>
      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
        accent 
          ? 'bg-gradient-accent' 
          : 'bg-gradient-primary'
      }`}>
        <Icon className="h-8 w-8 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
              accent ? 'bg-accent' : 'bg-primary'
            }`}></div>
            <span className="text-foreground text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button 
        variant={accent ? "accent" : "default"} 
        className="w-full group-hover:scale-105 transition-transform duration-300"
      >
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;