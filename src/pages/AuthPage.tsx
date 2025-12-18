import { IdentityTerminal } from "@/components/IdentityTerminal";
import { ShieldCheck, Lock, Fingerprint } from "lucide-react";

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-[#050814] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Soft background glows using your theme colors */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full" />

      <div className="z-10 w-full max-w-[440px]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-white tracking-tight mb-2">
            Secure Access
          </h1>
          <p className="text-slate-400 text-sm">
            Enter your credentials to access your secure vault.
          </p>
        </div>

        {/* The Card Container */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          <IdentityTerminal />
          
          <div className="mt-8 pt-6 border-t border-white/5 flex justify-center gap-6 opacity-50">
            <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3" /> End-to-End
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase tracking-widest">
              <Lock className="w-3 h-3" /> Encrypted
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-slate-500 text-xs">
          By continuing, you agree to the Legacy Protection Protocols.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;