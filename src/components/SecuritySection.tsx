import { Shield, Eye, Server, Fingerprint, Heart, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { HeartbeatRing } from "@/components/HeartbeatRing";

const securityFeatures = [
  {
    icon: Eye,
    title: "Zero-Knowledge Architecture",
    description: "Data is encrypted client-side before transmission.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Heartbeat Protocol",
    description: "Regular check-ins keep your vault active.",
    color: "alive",
  },
  {
    icon: Server,
    title: "Distributed Storage",
    description: "Encrypted vaults across secure data centers.",
    color: "accent",
  },
  {
    icon: Fingerprint,
    title: "Biometric Auth",
    description: "Optional biometric verification layer.",
    color: "warning",
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="py-16 sm:py-28 md:py-36 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] hidden sm:block">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-status-alive/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="mb-8 sm:mb-12 text-center lg:text-left">
              <span 
                className="inline-block text-xs sm:text-sm text-primary uppercase tracking-widest font-medium mb-3 sm:mb-4 opacity-0 animate-fade-in"
                style={{ animationFillMode: "forwards" }}
              >
                Pillar 05 — The Heartbeat Protocol
              </span>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-6 opacity-0 animate-fade-in"
                style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
              >
                Security That<br />
                <span className="text-gradient-alive">Breathes With You</span>
              </h2>
              <p 
                className="text-muted-foreground text-base sm:text-lg leading-relaxed opacity-0 animate-fade-in"
                style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
              >
                Unlike countdown clocks that create anxiety, our Heartbeat Protocol visualizes 
                system health through a living, breathing pulse.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                const colorClasses: Record<string, string> = {
                  primary: "bg-primary/10 text-primary group-hover:bg-primary/20",
                  alive: "bg-status-alive/10 text-status-alive group-hover:bg-status-alive/20",
                  accent: "bg-accent/10 text-accent group-hover:bg-accent/20",
                  warning: "bg-status-warning/10 text-status-warning group-hover:bg-status-warning/20",
                };
                
                return (
                  <div 
                    key={feature.title}
                    className={cn(
                      "glass-card p-3 sm:p-5 group hover:border-primary/20 transition-all duration-500",
                      "opacity-0 animate-fade-in-up"
                    )}
                    style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: "forwards" }}
                  >
                    <div className={cn(
                      "w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-300",
                      colorClasses[feature.color]
                    )}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold font-serif text-foreground mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Heartbeat Visualization */}
          <div 
            className="flex justify-center opacity-0 animate-scale-in"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            <div className="relative">
              {/* Interactive demo with different states */}
              <div className="grid grid-cols-1 gap-6 sm:gap-8">
                <div className="flex flex-col items-center">
                  <HeartbeatRing percentage={85} size={180} strokeWidth={10} className="sm:hidden" />
                  <HeartbeatRing percentage={85} size={220} strokeWidth={12} className="hidden sm:block" />
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground text-center">
                    Active & Protected
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex flex-col items-center">
                    <HeartbeatRing percentage={45} size={100} strokeWidth={6} className="sm:hidden" />
                    <HeartbeatRing percentage={45} size={120} strokeWidth={8} className="hidden sm:block" />
                    <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-muted-foreground text-center">
                      Check-In Soon
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <HeartbeatRing percentage={15} size={100} strokeWidth={6} className="sm:hidden" />
                    <HeartbeatRing percentage={15} size={120} strokeWidth={8} className="hidden sm:block" />
                    <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-muted-foreground text-center">
                      Grace Period
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div 
          className="mt-12 sm:mt-20 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 glass-card-elevated px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-status-alive" />
              <div className="text-left">
                <p className="text-sm sm:text-base font-semibold text-foreground">SOC 2 Type II</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Enterprise security</p>
              </div>
            </div>
            <div className="h-px w-full sm:h-12 sm:w-px bg-border/30" />
            <div className="flex items-center gap-3">
              <Activity className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              <div className="text-left">
                <p className="text-sm sm:text-base font-semibold text-foreground">99.99% Uptime</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Always-on monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}