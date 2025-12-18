import { cn } from "@/lib/utils";
import { Activity } from "lucide-react";

interface HeartbeatRingProps {
  percentage?: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function HeartbeatRing({ 
  percentage = 75, 
  size = 200, 
  strokeWidth = 10,
  className 
}: HeartbeatRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  // Determine status based on percentage
  const getStatus = () => {
    if (percentage > 75) return { 
      color: "stroke-status-alive", 
      glow: "drop-shadow-[0_0_20px_hsl(160,84%,39%,0.7)]", 
      label: "Protected", 
      animation: "animate-ring-pulse",
      bgGlow: "hsl(160 84% 39% / 0.15)",
      textColor: "text-status-alive"
    };
    if (percentage > 25) return { 
      color: "stroke-status-warning", 
      glow: "drop-shadow-[0_0_20px_hsl(38,92%,50%,0.7)]", 
      label: "Check-In Soon", 
      animation: "animate-ring-pulse-warning",
      bgGlow: "hsl(38 92% 50% / 0.15)",
      textColor: "text-status-warning"
    };
    return { 
      color: "stroke-status-critical", 
      glow: "drop-shadow-[0_0_25px_hsl(0,84%,60%,0.8)]", 
      label: "Grace Period", 
      animation: "animate-ring-pulse-critical",
      bgGlow: "hsl(0 84% 60% / 0.2)",
      textColor: "text-status-critical"
    };
  };

  const status = getStatus();

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {/* Outer glow effect - layered */}
      <div 
        className="absolute inset-0 rounded-full blur-3xl animate-breathe"
        style={{
          background: `radial-gradient(circle, ${status.bgGlow} 0%, transparent 70%)`
        }}
      />
      <div 
        className="absolute inset-4 rounded-full blur-xl animate-breathe"
        style={{
          background: `radial-gradient(circle, ${status.bgGlow} 0%, transparent 60%)`,
          animationDelay: "1s"
        }}
      />
      
      {/* Orbiting particles */}
      <div className="absolute inset-0 animate-orbit opacity-30">
        <div 
          className="absolute top-0 left-1/2 w-2 h-2 rounded-full -translate-x-1/2"
          style={{ background: status.bgGlow.replace(" / 0.15", " / 0.8") }}
        />
      </div>
      <div className="absolute inset-0 animate-orbit-reverse opacity-20">
        <div 
          className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full -translate-x-1/2"
          style={{ background: status.bgGlow.replace(" / 0.15", " / 0.6") }}
        />
      </div>
      
      <svg
        width={size}
        height={size}
        className={cn("transform -rotate-90", status.animation)}
      >
        {/* Background ring with gradient */}
        <defs>
          <linearGradient id="ringBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217, 33%, 17%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(217, 33%, 12%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#ringBg)"
          strokeWidth={strokeWidth}
        />
        
        {/* Progress ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cn(status.color, status.glow, "transition-all duration-1000")}
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Activity className={cn("w-6 h-6 mb-2 animate-pulse", status.textColor)} />
        <span className={cn(
          "text-4xl font-bold font-serif tracking-tight",
          status.textColor
        )}>
          {percentage}%
        </span>
        <span className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-medium">
          {status.label}
        </span>
      </div>
    </div>
  );
}