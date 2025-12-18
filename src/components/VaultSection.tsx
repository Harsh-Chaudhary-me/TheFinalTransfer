import { BentoGrid } from "@/components/BentoGrid";
import { KeyholeConsensus } from "@/components/KeyholeConsensus";
import { EmergencyProtocol } from "@/components/EmergencyProtocol";
import { EncryptionVisualizer } from "@/components/EncryptionVisualizer";
import { ArrowRight, Lock, Package, Users, Zap } from "lucide-react";

export function VaultSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-28 md:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20 hidden sm:block" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-24">
          <span 
            className="inline-block text-xs sm:text-sm text-primary uppercase tracking-widest font-medium mb-3 sm:mb-4 opacity-0 animate-fade-in"
            style={{ animationFillMode: "forwards" }}
          >
            How It Works
          </span>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Five Pillars of<br />
            <span className="text-gradient-primary">Digital Legacy Security</span>
          </h2>
        </div>

        {/* Pillar 1: Zero-Knowledge Encryption */}
        <div className="mb-16 sm:mb-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center">
                  <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <span 
                  className="text-xs sm:text-sm text-primary uppercase tracking-wider font-medium opacity-0 animate-fade-in"
                  style={{ animationFillMode: "forwards" }}
                >
                  Pillar 01 — Zero-Knowledge Vaults
                </span>
              </div>
              <h3 
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground opacity-0 animate-fade-in"
                style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
              >
                Client-Side Encryption
              </h3>
              <p 
                className="text-muted-foreground text-base sm:text-lg leading-relaxed opacity-0 animate-fade-in"
                style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
              >
                Your data never leaves your device unencrypted. Using AES-256 encryption, 
                we transform your sensitive information into an unreadable blob before it 
                touches our servers. <strong className="text-foreground">We never see your data.</strong>
              </p>
              <ul 
                className="space-y-2 sm:space-y-3 text-muted-foreground opacity-0 animate-fade-in text-left"
                style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
              >
                <li className="flex items-center gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm sm:text-base">Military-grade AES-256 encryption</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm sm:text-base">Encryption in your browser</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm sm:text-base">Attackers see only encrypted noise</span>
                </li>
              </ul>
            </div>
            
            <div 
              className="opacity-0 animate-slide-in-right"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <EncryptionVisualizer />
            </div>
          </div>
        </div>

        {/* Pillar 2: Packet Distribution */}
        <div className="mb-16 sm:mb-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div 
              className="order-2 lg:order-1 opacity-0 animate-slide-in-left"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <BentoGrid />
            </div>
            
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-status-warning/20 flex items-center justify-center">
                  <Package className="w-5 h-5 sm:w-6 sm:h-6 text-status-warning" />
                </div>
                <span 
                  className="text-xs sm:text-sm text-status-warning uppercase tracking-wider font-medium opacity-0 animate-fade-in"
                  style={{ animationFillMode: "forwards" }}
                >
                  Pillar 02 — Granular Packets
                </span>
              </div>
              <h3 
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground opacity-0 animate-fade-in"
                style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
              >
                Organize Your Digital Life
              </h3>
              <p 
                className="text-muted-foreground text-base sm:text-lg leading-relaxed opacity-0 animate-fade-in"
                style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
              >
                Not everyone needs access to everything. Create distinct packets for different 
                beneficiaries. <strong className="text-foreground">Privacy, even among loved ones.</strong>
              </p>
              <ul 
                className="space-y-2 sm:space-y-3 text-muted-foreground opacity-0 animate-fade-in text-left"
                style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
              >
                <li className="flex items-center gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 text-status-warning shrink-0" />
                  <span className="text-sm sm:text-base">Drag-and-drop organization</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 text-status-warning shrink-0" />
                  <span className="text-sm sm:text-base">Per-packet encryption</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 text-status-warning shrink-0" />
                  <span className="text-sm sm:text-base">Beneficiary-specific access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pillar 3: Lazarus Verification */}
        <div className="mb-16 sm:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 justify-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/20 flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <span 
                className="text-xs sm:text-sm text-accent uppercase tracking-wider font-medium opacity-0 animate-fade-in"
                style={{ animationFillMode: "forwards" }}
              >
                Pillar 03 — Lazarus Verification
              </span>
            </div>
            <h3 
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-3 sm:mb-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              Human Verification
            </h3>
            <p 
              className="text-muted-foreground text-base sm:text-lg opacity-0 animate-fade-in"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              No false positives. Your trusted verifiers must confirm your status through 
              <strong className="text-foreground"> multi-signature consensus</strong>.
            </p>
          </div>
          
          <div 
            className="glass-card-elevated p-4 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl opacity-0 animate-scale-in max-w-5xl mx-auto"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            <KeyholeConsensus />
          </div>
        </div>

        {/* Pillar 4: Emergency Protocol */}
        <div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-status-emergency/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-status-emergency" />
                </div>
                <span 
                  className="text-xs sm:text-sm text-status-emergency uppercase tracking-wider font-medium opacity-0 animate-fade-in"
                  style={{ animationFillMode: "forwards" }}
                >
                  Pillar 04 — Emergency Release
                </span>
              </div>
              <h3 
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground opacity-0 animate-fade-in"
                style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
              >
                When Every Second Counts
              </h3>
              <p 
                className="text-muted-foreground text-base sm:text-lg leading-relaxed opacity-0 animate-fade-in"
                style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
              >
                For urgent scenarios, the Emergency Packet bypasses standard wait times with a unique 
                <strong className="text-foreground"> Panic Code</strong>, subject to a 6-hour veto window.
              </p>
              <ul 
                className="space-y-2 sm:space-y-3 text-muted-foreground opacity-0 animate-fade-in text-left"
                style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
              >
                <li className="flex items-center gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 text-status-emergency shrink-0" />
                  <span className="text-sm sm:text-base">Bypass 30-day waiting period</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 text-status-emergency shrink-0" />
                  <span className="text-sm sm:text-base">Unique panic code activation</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <ArrowRight className="w-4 h-4 text-status-emergency shrink-0" />
                  <span className="text-sm sm:text-base">6-hour veto window for safety</span>
                </li>
              </ul>
            </div>
            
            <div 
              className="opacity-0 animate-slide-in-right"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <EmergencyProtocol />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}