import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: string;
  className?: string;
  delay?: number;
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  accentColor = "primary",
  className, 
  delay = 0 
}: FeatureCardProps) {
  const colorClasses: Record<string, { bg: string; text: string; glow: string }> = {
    primary: { 
      bg: "bg-primary/10 group-hover:bg-primary/20", 
      text: "text-primary",
      glow: "group-hover:shadow-[0_0_30px_hsl(239,84%,67%,0.2)]"
    },
    alive: { 
      bg: "bg-status-alive/10 group-hover:bg-status-alive/20", 
      text: "text-status-alive",
      glow: "group-hover:shadow-[0_0_30px_hsl(160,84%,39%,0.2)]"
    },
    warning: { 
      bg: "bg-status-warning/10 group-hover:bg-status-warning/20", 
      text: "text-status-warning",
      glow: "group-hover:shadow-[0_0_30px_hsl(38,92%,50%,0.2)]"
    },
    accent: { 
      bg: "bg-accent/10 group-hover:bg-accent/20", 
      text: "text-accent",
      glow: "group-hover:shadow-[0_0_30px_hsl(280,70%,60%,0.2)]"
    },
    emergency: { 
      bg: "bg-status-emergency/10 group-hover:bg-status-emergency/20", 
      text: "text-status-emergency",
      glow: "group-hover:shadow-[0_0_30px_hsl(340,82%,52%,0.2)]"
    },
  };

  const colors = colorClasses[accentColor] || colorClasses.primary;

  return (
    <div 
      className={cn(
        "glass-card-elevated p-4 sm:p-6 group hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-1.5 relative overflow-hidden",
        "opacity-0 animate-fade-in-up",
        colors.glow,
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {/* Background gradient on hover */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block",
        "bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
      )} />

      <div className="relative z-10">
        <div className={cn(
          "w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-5 transition-all duration-300 group-hover:scale-110",
          colors.bg
        )}>
          <Icon className={cn("w-5 h-5 sm:w-7 sm:h-7 transition-colors", colors.text)} />
        </div>
        <h3 className="text-base sm:text-xl font-semibold font-serif mb-2 sm:mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{description}</p>
      </div>

      {/* Corner accent */}
      <div className={cn(
        "absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block",
        "bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"
      )} />
    </div>
  );
}