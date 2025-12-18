import { Button } from "@/components/ui/button";
import { HeartbeatRing } from "@/components/HeartbeatRing";
import { ArrowRight, Lock, Users, Zap, Shield, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden noise-overlay">
      {/* Multi-layer Background Effects */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      <div className="absolute inset-0 cyber-grid opacity-30 hidden sm:block" />
      
      {/* Floating Orbs - Hidden on small mobile */}
      <div className="floating-orb w-48 sm:w-96 h-48 sm:h-96 bg-primary/20 top-1/4 -left-24 sm:-left-48" style={{ animationDelay: "0s" }} />
      <div className="floating-orb w-40 sm:w-80 h-40 sm:h-80 bg-accent/15 bottom-1/4 -right-20 sm:-right-40" style={{ animationDelay: "5s" }} />
      <div className="floating-orb w-32 sm:w-64 h-32 sm:h-64 bg-status-alive/10 top-1/2 left-1/3 hidden sm:block" style={{ animationDelay: "10s" }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div 
              className="inline-flex items-center gap-2 sm:gap-3 glass-card px-3 sm:px-5 py-2 sm:py-2.5 rounded-full opacity-0 animate-fade-in"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="w-1.5 h-1.5 rounded-full bg-status-alive animate-pulse" />
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">Zero-Knowledge • Military-Grade</span>
            </div>

            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[1.1] opacity-0 animate-fade-in"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <span className="text-gradient block">Your Digital Legacy,</span>
              <span className="text-gradient-primary block mt-2">Secured Forever</span>
            </h1>

            <p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed opacity-0 animate-fade-in mx-auto lg:mx-0"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              Don't let your digital wealth become digital dust. The Final Transfer ensures your 
              cryptocurrency, passwords, and precious memories reach your loved ones.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in justify-center lg:justify-start"
              style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
            >
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                Create Your Vault
                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" className="w-full sm:w-auto">
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators - Stack on mobile */}
            <div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-3 glass-card px-4 py-3 rounded-xl justify-center sm:justify-start">
                <Lock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Encryption</p>
                  <p className="text-sm font-semibold text-foreground">AES-256</p>
                </div>
              </div>
              <div className="flex items-center gap-3 glass-card px-4 py-3 rounded-xl justify-center sm:justify-start">
                <Users className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Verification</p>
                  <p className="text-sm font-semibold text-foreground">Multi-Sig</p>
                </div>
              </div>
              <div className="flex items-center gap-3 glass-card px-4 py-3 rounded-xl justify-center sm:justify-start">
                <Zap className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Transfer</p>
                  <p className="text-sm font-semibold text-foreground">Automated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Heartbeat Visualization */}
          <div 
            className="flex justify-center lg:justify-end opacity-0 animate-scale-in mt-8 lg:mt-0"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            <div className="relative scale-75 sm:scale-90 lg:scale-100">
              {/* Decorative outer rings - Hidden on small screens */}
              <div className="absolute inset-0 scale-[1.8] hidden sm:block">
                <div className="absolute inset-0 rounded-full border border-primary/5 animate-pulse-slow" />
              </div>
              <div className="absolute inset-0 scale-150 hidden sm:block">
                <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse-slow" style={{ animationDelay: "1s" }} />
              </div>
              <div className="absolute inset-0 scale-125">
                <div className="absolute inset-0 rounded-full border border-primary/15 animate-pulse-slow" style={{ animationDelay: "2s" }} />
              </div>
              
              {/* Main Heartbeat Ring */}
              <HeartbeatRing percentage={82} size={240} strokeWidth={12} className="sm:hidden" />
              <HeartbeatRing percentage={82} size={300} strokeWidth={14} className="hidden sm:block" />
              
              {/* Status Card */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass-card-elevated px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl animate-float">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-status-alive/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-status-alive" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Next Check-In</p>
                    <p className="text-base sm:text-lg font-semibold text-foreground font-serif">24 days</p>
                  </div>
                </div>
              </div>

              {/* Additional floating element */}
              <div className="absolute -top-2 -left-4 sm:-top-4 sm:-left-8 glass-card px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl animate-float-delayed">
                <p className="text-[10px] sm:text-xs text-status-alive font-medium">● Vault Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}