import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Lock, Unlock, Eye, EyeOff, Shield, Database } from "lucide-react";

interface EncryptionVisualizerProps {
  className?: string;
}

export function EncryptionVisualizer({ className }: EncryptionVisualizerProps) {
  const [step, setStep] = useState(0);
  const [encrypted, setEncrypted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= 3) {
          setEncrypted(true);
          setTimeout(() => {
            setEncrypted(false);
            setStep(0);
          }, 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [encrypted]);

  const sampleData = "MySecr3tP@ssword";
  const encryptedData = "a7f3e9b2c8d1...";

  return (
    <div className={cn("relative", className)}>
      {/* Client Side - User's Browser */}
      <div className="relative z-10">
        <div className="glass-card-elevated p-6 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-status-alive/20 flex items-center justify-center">
              <Eye className="w-5 h-5 text-status-alive" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Your Browser</p>
              <p className="text-xs text-muted-foreground">Client-side encryption</p>
            </div>
          </div>

          {/* Data Display */}
          <div className="space-y-3">
            <div className={cn(
              "p-4 rounded-xl border transition-all duration-500",
              step >= 1 ? "bg-primary/10 border-primary/30" : "bg-secondary/30 border-border/30"
            )}>
              <p className="text-xs text-muted-foreground mb-1">Your Data</p>
              <p className={cn(
                "font-mono text-sm transition-all duration-500",
                step >= 2 ? "text-primary blur-sm" : "text-foreground"
              )}>
                {step >= 2 ? encryptedData : sampleData}
              </p>
            </div>

            {/* Encryption Animation */}
            <div className="flex items-center justify-center gap-2 py-2">
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                step >= 1 ? "bg-primary/20" : "bg-secondary/30"
              )}>
                {step >= 2 ? (
                  <Lock className="w-4 h-4 text-primary animate-scale-in" />
                ) : (
                  <Unlock className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 h-0.5 rounded bg-border relative overflow-hidden">
                <div 
                  className={cn(
                    "absolute inset-y-0 left-0 bg-primary rounded transition-all duration-1000",
                    step >= 2 ? "w-full" : step >= 1 ? "w-1/2" : "w-0"
                  )}
                />
              </div>
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                step >= 2 ? "bg-status-alive/20" : "bg-secondary/30"
              )}>
                <Shield className={cn(
                  "w-4 h-4 transition-colors",
                  step >= 2 ? "text-status-alive" : "text-muted-foreground"
                )} />
              </div>
            </div>
          </div>
        </div>

        {/* Connection Line */}
        <div className="flex justify-center -my-2 relative z-0">
          <div className={cn(
            "w-0.5 h-8 rounded transition-all duration-500",
            step >= 3 ? "bg-primary" : "bg-border"
          )}>
            {step >= 3 && (
              <div className="absolute -left-1 top-1/2 w-2.5 h-2.5 bg-primary rounded-full animate-ping" />
            )}
          </div>
        </div>

        {/* Server Side */}
        <div className="glass-card p-6 rounded-2xl opacity-60">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center">
              <Database className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Our Servers</p>
              <p className="text-xs text-muted-foreground">Zero-knowledge storage</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-secondary/20 border border-border/20">
            <div className="flex items-center gap-2 mb-1">
              <EyeOff className="w-3 h-3 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">Encrypted Blob</p>
            </div>
            <p className="font-mono text-sm text-muted-foreground/70 blur-[2px]">
              {step >= 3 ? encryptedData : "•••••••••••"}
            </p>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className={cn(
        "absolute inset-0 rounded-3xl transition-opacity duration-500 -z-10",
        step >= 2 ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute inset-0 bg-primary/5 blur-2xl" />
      </div>
    </div>
  );
}