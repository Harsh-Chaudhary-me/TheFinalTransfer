import React, { useState } from 'react';
import { Fingerprint, Loader2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export const BiometricPath = ({ onComplete }: { onComplete: (credentialId: string) => void }) => {
  const [isScanning, setIsScanning] = useState(false);

  const startBiometricScan = async () => {
    setIsScanning(true);
    try {
      // 1. Generate a random 'challenge' (In production, this comes from Supabase)
      const challenge = new Uint8Array(32);
      window.crypto.getRandomValues(challenge);

      // 2. Trigger the Native Device Popup
      const credential = await navigator.credentials.create({
        publicKey: {
          challenge,
          rp: { name: "The Final Transfer", id: window.location.hostname },
          user: {
            id: new Uint8Array(16), // Simplified for this step
            name: "user@legacy.com",
            displayName: "Legacy Guard User",
          },
          pubKeyCredParams: [{ alg: -7, type: "public-key" }], // ES256 algorithm
          authenticatorSelection: {
            authenticatorAttachment: "platform", // Forces built-in scanners (TouchID/FaceID)
            userVerification: "required",
          },
          timeout: 60000,
        },
      }) as PublicKeyCredential;

      if (credential) {
        toast.success("Biometric Key Bound Successfully");
        onComplete(credential.id); // Send the ID back to save in DB
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err.name === 'NotAllowedError' ? "Scan Cancelled" : "Biometric Protocol Failed");
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500 text-center">
      <div className="relative mx-auto w-24 h-24">
        {/* Glow effect behind the icon */}
        <div className={`absolute inset-0 rounded-full blur-3xl transition-colors duration-500 ${isScanning ? 'bg-emerald-500/30' : 'bg-purple-500/20'}`} />
        <Fingerprint className={`w-full h-full relative z-10 transition-colors duration-500 ${isScanning ? 'text-emerald-400 animate-pulse' : 'text-purple-500'}`} />
      </div>

      <div className="space-y-2">
        <h3 className="text-white font-bold uppercase tracking-tight">System Biometric Scan</h3>
        <p className="text-slate-500 text-[10px] uppercase tracking-widest leading-relaxed">
          The scanner will verify your physical presence <br /> to bind this device to your legacy vault.
        </p>
      </div>

      <button
        onClick={startBiometricScan}
        disabled={isScanning}
        className="w-full relative overflow-hidden bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-[0.98]"
      >
        <span className="relative z-10 flex items-center justify-center gap-2 text-xs uppercase tracking-widest">
          {isScanning ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Awaiting System...</>
          ) : (
            "Authorize Scanner"
          )}
        </span>
        <div className="absolute inset-0 z-0 bg-white/10 blur-md animate-shimmer-sweep" />
      </button>

      <div className="flex items-center justify-center gap-2 text-[8px] text-slate-600 uppercase tracking-[0.2em]">
        <ShieldCheck className="w-3 h-3" /> FIDO2 / WebAuthn Certified Protocol
      </div>
    </div>
  );
};