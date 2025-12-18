import React, { useState } from 'react';
import { Fingerprint, Camera, Loader2, ShieldCheck, ArrowLeft, Video } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { BiometricPath } from "./auth/BiometricPath";
import { VideoPath } from "./auth/VideoPath"; // We will create this next

export const IdentityTerminal = () => {
  const [step, setStep] = useState<'identify' | 'verify' | 'choose_method' | 'biometric_path' | 'video_path'>('identify');
  const [isProcessing, setIsProcessing] = useState(false);
  const [input, setInput] = useState('');
  const [otp, setOtp] = useState('');

  // --- DATABASE PROTOCOL ---
  // Only called after Step 2 is successful
 const finalizeAccount = async (method: 'biometric' | 'video', extraData?: any) => {
  setIsProcessing(true);
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Session Lost");

    // 1. PRE-CHECK: See if an identity is ALREADY bound
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('verification_method, status')
      .eq('id', user.id)
      .single();

    // If method is already set, don't allow a second save
    if (existingProfile?.verification_method) {
      setStep('success');
      toast.info("Identity Protocol is already locked.");
      setIsProcessing(false);
      return;
    }

    // 2. SAVE ONLY ONCE
    let videoUrl = "";
    if (method === 'video' && extraData instanceof Blob) {
      const { data: uploadData, error: uploadErr } = await supabase.storage
        .from('kyc-videos')
        .upload(`${user.id}/proof.webm`, extraData);
      
      if (uploadErr) throw uploadErr;
      videoUrl = uploadData.path;
    }

    const { error: dbError } = await supabase.from('profiles').upsert({
      id: user.id,
      email: user.email,
      verification_method: method, // Locked after this save
      video_proof_url: videoUrl,
      status: 'VERIFIED',
      updated_at: new Date().toISOString()
    });

    if (dbError) throw dbError;

    setStep('success'); 
    toast.success("Identity Permanently Bound");

  } catch (err: any) {
    toast.error("Protocol Error: " + err.message);
  } finally {
    setIsProcessing(false);
  }
};

  const handleInitiate = async () => {
    if (!input) return toast.error("Identity Required");
    setIsProcessing(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: input,
      options: { shouldCreateUser: true }
    });
    if (error) toast.error(error.message);
    else {
      setStep('verify');
      toast.success("Security Code Dispatched");
    }
    setIsProcessing(false);
  };

  const handleVerify = async () => {
    if (otp.length < 8) return toast.error("Security Sequence Incomplete (8 chars required)");
    setIsProcessing(true);
    const { error } = await supabase.auth.verifyOtp({
      email: input,
      token: otp,
      type: 'email',
    });
    if (error) toast.error("Invalid Protocol Sequence");
    else {
      toast.success("Identity Confirmed");
      setStep('choose_method'); 
    }
    setIsProcessing(false);
  };

  return (
    <div className="w-full transition-all duration-500 ease-in-out">
      {/* IDENTITY STEP */}
      {step === 'identify' && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 ml-1 uppercase tracking-[0.2em]">Digital Identity</label>
            <input
              type="text"
              placeholder="EMAIL_OR_MOBILE"
              className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-emerald-400 placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all font-mono"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button onClick={handleInitiate} disabled={isProcessing} className="w-full relative overflow-hidden bg-purple-600 text-white font-bold py-4 rounded-2xl shadow-lg">
            <div className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
              {isProcessing ? <><Loader2 className="w-4 h-4 animate-spin" /> Dispatching...</> : "Initiate Protocol"}
            </div>
            <div className="absolute inset-0 z-0 bg-white/20 blur-md animate-shimmer-sweep" />
          </button>
        </div>
      )}

      {/* VERIFY STEP */}
      {step === 'verify' && (
        <div className="space-y-6 animate-in zoom-in-95 duration-300">
          <button onClick={() => setStep('identify')} className="text-[10px] text-slate-500 hover:text-emerald-400 flex items-center gap-1 uppercase tracking-widest"><ArrowLeft className="w-3 h-3" /> Re-enter Identity</button>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-emerald-500/80 ml-1 uppercase tracking-[0.2em]">Security Code Required</label>
            <input
              type="text" maxLength={8} placeholder="0 0 0 0 0 0 0 0"
              className="w-full bg-black/60 border border-emerald-500/20 rounded-2xl px-5 py-4 text-center text-xl text-emerald-400 tracking-[0.3em] font-mono"
              value={otp} onChange={(e) => setOtp(e.target.value.toUpperCase())}
            />
          </div>
          <button onClick={handleVerify} disabled={isProcessing} className="w-full relative overflow-hidden bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-lg">
            <div className="relative z-10 uppercase tracking-widest text-xs">{isProcessing ? "Authenticating..." : "Validate Access"}</div>
            <div className="absolute inset-0 z-0 bg-white/10 blur-md animate-shimmer-sweep" />
          </button>
        </div>
      )}

      {/* CHOICE STEP */}
      {step === 'choose_method' && (
        <div className="space-y-6 animate-in fade-in zoom-in-95">
          <div className="text-center mb-6">
            <h3 className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest">Level 2: Identity Binding</h3>
            <p className="text-slate-400 text-xs mt-1">Select your preferred verification protocol.</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <button onClick={() => setStep('biometric_path')} className="group flex items-center gap-4 p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-purple-500/50 transition-all">
              <Fingerprint className="w-6 h-6 text-purple-500" />
              <div className="text-left"><p className="text-sm font-bold text-white uppercase">System Biometrics</p></div>
            </button>
            <button onClick={() => setStep('video_path')} className="group flex items-center gap-4 p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-emerald-500/50 transition-all">
              <Camera className="w-6 h-6 text-emerald-500" />
              <div className="text-left"><p className="text-sm font-bold text-white uppercase">Video Proof of Life</p></div>
            </button>
          </div>
        </div>
      )}

      {/* FINAL PATHS */}
      {step === 'biometric_path' && (
        <BiometricPath onComplete={(credId) => finalizeAccount('biometric', credId)} />
      )}
      
      {step === 'video_path' && (
        <VideoPath onComplete={(blob) => finalizeAccount('video', blob)} />
      )}
      

  {step === 'success' && (
  <div className="text-center py-10 animate-in fade-in zoom-in-95 duration-700">
    <div className="relative mx-auto w-24 h-24 mb-8">
      {/* Soft emerald glow effect */}
      <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="relative z-10 w-full h-full bg-[#050814] border border-emerald-500/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(52,211,153,0.1)]">
        <ShieldCheck className="w-12 h-12 text-emerald-400" />
      </div>
    </div>
    
    <div className="space-y-3 mb-10">
      <h2 className="text-3xl font-serif font-bold text-white tracking-tight">Vault Activated</h2>
      <p className="text-slate-400 text-xs uppercase tracking-[0.25em] leading-relaxed">
        Identity Bound • Encryption Active <br /> 
        <span className="text-emerald-500/60">Protocol: Lazarus Verification</span>
      </p>
    </div>

    <button 
      onClick={() => window.location.href = '/dashboard'}
      className="w-full relative overflow-hidden bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-5 rounded-2xl shadow-lg transition-all active:scale-[0.98]"
    >
      <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
        Enter Private Vault
      </span>
      {/* Shimmer effect for the final success button */}
      <div className="absolute inset-0 z-0 bg-white/10 blur-md animate-shimmer-sweep" />
    </button>
  </div>
)}
    </div>
  );
};