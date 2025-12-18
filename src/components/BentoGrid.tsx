import { cn } from "@/lib/utils";
import { Wallet, Globe, Mail, ShieldAlert, Key, FileText, ImageIcon, CreditCard } from "lucide-react";

interface PacketProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  count: number;
  color: string;
  accentColor: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  delay?: number;
}

function Packet({ icon, title, description, count, color, accentColor, size = "md", className, delay = 0 }: PacketProps) {
  const sizeClasses = {
    sm: "col-span-1 row-span-1",
    md: "col-span-1 row-span-1",
    lg: "col-span-2 row-span-1",
  };

  return (
    <div 
      className={cn(
        "glass-card-elevated p-3 sm:p-5 group cursor-pointer transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden opacity-0 animate-fade-in",
        sizeClasses[size],
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {/* Hover glow effect */}
      <div 
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl hidden sm:block",
          color
        )}
        style={{ transform: "scale(0.5)", filter: "blur(40px)" }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div className={cn(
            "w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110",
            color
          )}>
            {icon}
          </div>
          <span className={cn(
            "text-[10px] sm:text-xs font-mono px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg",
            accentColor
          )}>
            {count}
          </span>
        </div>
        <div className="mt-2 sm:mt-4">
          <h4 className="font-serif font-semibold text-foreground text-sm sm:text-lg leading-tight">{title}</h4>
          <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 leading-relaxed line-clamp-2">{description}</p>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden sm:block",
        color.replace("/20", "").replace("bg-", "bg-gradient-to-r from-transparent via-")
      )} />
    </div>
  );
}

export function BentoGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 auto-rows-[110px] sm:auto-rows-[130px] md:auto-rows-[150px]">
      <Packet 
        icon={<Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />}
        title="Financial Assets"
        description="Bank accounts & investments"
        count={12}
        color="bg-primary"
        accentColor="bg-primary/20 text-primary"
        size="lg"
        delay={100}
      />
      <Packet 
        icon={<Key className="w-5 h-5 sm:w-6 sm:h-6 text-status-alive" />}
        title="Crypto Wallets"
        description="Private keys & recovery"
        count={4}
        color="bg-status-alive/20"
        accentColor="bg-status-alive/10 text-status-alive"
        size="sm"
        delay={200}
      />
      <Packet 
        icon={<Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />}
        title="Social Media"
        description="Account access"
        count={8}
        color="bg-primary/20"
        accentColor="bg-primary/10 text-primary"
        size="sm"
        delay={300}
      />
      <Packet 
        icon={<Mail className="w-5 h-5 sm:w-6 sm:h-6 text-status-warning" />}
        title="Personal Letters"
        description="Final messages"
        count={3}
        color="bg-status-warning/20"
        accentColor="bg-status-warning/10 text-status-warning"
        size="sm"
        delay={400}
      />
      <Packet 
        icon={<FileText className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />}
        title="Legal Docs"
        description="Wills & contracts"
        count={7}
        color="bg-accent/20"
        accentColor="bg-accent/10 text-accent"
        size="sm"
        delay={500}
      />
      <Packet 
        icon={<ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-status-emergency" />}
        title="Emergency"
        description="Rapid release packet"
        count={2}
        color="bg-status-emergency/20"
        accentColor="bg-status-emergency/10 text-status-emergency"
        size="sm"
        className="border-status-emergency/30"
        delay={600}
      />
    </div>
  );
}