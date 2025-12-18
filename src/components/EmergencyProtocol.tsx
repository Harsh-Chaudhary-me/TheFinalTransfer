import { cn } from "@/lib/utils";
import { AlertTriangle, Clock, Shield, Zap, UserCheck, XCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface EmergencyProtocolProps {
  className?: string;
}

export function EmergencyProtocol({ className }: EmergencyProtocolProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { icon: Zap, label: "Panic Code Activated", status: "triggered" },
    { icon: UserCheck, label: "Verifier Notified", status: "pending" },
    { icon: Clock, label: "6-Hour Veto Window", status: "countdown" },
    { icon: Shield, label: "User Veto Check", status: "checking" },
    { icon: AlertTriangle, label: "Emergency Release", status: "complete" },
  ];

  return (
    <div className={cn("relative", className)}>
      {/* Emergency Card */}
      <div className="glass-card-elevated p-6 rounded-2xl gradient-emergency relative overflow-hidden">
        {/* Scan Line Effect */}
        {step > 0 && step < 4 && (
          <div className="scan-line" />
        )}

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500",
            step >= 1 ? "bg-status-emergency/30 animate-emergency-pulse" : "bg-status-emergency/20"
          )}>
            <AlertTriangle className="w-6 h-6 text-status-emergency" />
          </div>
          <div>
            <h4 className="font-serif font-semibold text-foreground">Rapid Release Protocol</h4>
            <p className="text-sm text-muted-foreground">Emergency Access System</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {steps.map((s, index) => {
            const Icon = s.icon;
            const isActive = index === step;
            const isComplete = index < step;

            return (
              <div 
                key={s.label}
                className={cn(
                  "flex items-center gap-4 p-3 rounded-xl transition-all duration-500",
                  isActive && "bg-status-emergency/10 border border-status-emergency/30",
                  isComplete && "opacity-50"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0",
                  isActive && "bg-status-emergency/20 scale-110",
                  isComplete && "bg-status-alive/20",
                  !isActive && !isComplete && "bg-secondary/30"
                )}>
                  <Icon className={cn(
                    "w-5 h-5 transition-colors",
                    isActive && "text-status-emergency",
                    isComplete && "text-status-alive",
                    !isActive && !isComplete && "text-muted-foreground"
                  )} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={cn(
                    "text-sm font-medium transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}>
                    {s.label}
                  </p>
                  {isActive && s.status === "countdown" && (
                    <p className="text-xs text-status-warning font-mono mt-1">
                      05:42:17 remaining
                    </p>
                  )}
                </div>
                {isComplete && (
                  <div className="w-5 h-5 rounded-full bg-status-alive/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-status-alive" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Veto Option */}
        <div className="mt-6 p-4 rounded-xl bg-card/50 border border-border/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <XCircle className="w-5 h-5 text-status-warning" />
              <div>
                <p className="text-sm font-medium text-foreground">Owner Veto Available</p>
                <p className="text-xs text-muted-foreground">Cancel emergency release if you're safe</p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-lg bg-status-warning/20 text-status-warning text-sm font-medium hover:bg-status-warning/30 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}