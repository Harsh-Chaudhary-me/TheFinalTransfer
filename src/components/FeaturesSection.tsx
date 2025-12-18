import { FeatureCard } from "@/components/FeatureCard";
import { Shield, Heart, Users, Package, Zap, Clock } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Zero-Knowledge Vaults",
      description: "Your data is encrypted on your device before it leaves. We store only encrypted blobs—we never see your secrets, and never hold your keys.",
      accentColor: "primary",
    },
    {
      icon: Heart,
      title: "Heartbeat Protocol",
      description: "A gentle breathing pulse that monitors your activity. Check in periodically—no countdown clocks, just a living system ensuring continuity.",
      accentColor: "alive",
    },
    {
      icon: Users,
      title: "Lazarus Verification",
      description: "Multi-signature consensus from trusted verifiers prevents false triggers. Human confirmation required before any transfer begins.",
      accentColor: "accent",
    },
    {
      icon: Package,
      title: "Granular Packets",
      description: "Segment your digital life into private packets. Financial keys to your spouse, business credentials to your partner—privacy between beneficiaries.",
      accentColor: "warning",
    },
    {
      icon: Zap,
      title: "Emergency Rapid Release",
      description: "For urgent scenarios, bypass standard wait times with a Panic Code. Includes a 6-hour veto window to prevent unauthorized access.",
      accentColor: "emergency",
    },
    {
      icon: Clock,
      title: "Configurable Grace Periods",
      description: "Set your own timelines. Adjustable check-in intervals and grace periods ensure the system adapts to your lifestyle, not the other way around.",
      accentColor: "primary",
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-28 md:py-36 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span 
            className="inline-block text-xs sm:text-sm text-primary uppercase tracking-widest font-medium mb-3 sm:mb-4 opacity-0 animate-fade-in"
            style={{ animationFillMode: "forwards" }}
          >
            Core Features
          </span>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Built for Trust,<br />
            <span className="text-gradient-primary">Designed for Peace</span>
          </h2>
          <p 
            className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            Every feature is engineered to protect what matters most—your digital legacy 
            and your peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              {...feature}
              delay={200 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}