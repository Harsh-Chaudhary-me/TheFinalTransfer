import { IdentityTerminal } from "@/components/IdentityTerminal";
import { ShieldCheck, Lock } from "lucide-react";

const AuthPage = () => {
  // Constant characters for the rain effect
  const charStream = "アカサタナハマヤラワガザダバパイキシチニヒミリギジヂビピウクスツヌフムユルグズヅブプ";

  return (
    <div className="min-h-screen bg-[#050814] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* INSTANT MATRIX RAIN */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-2 opacity-40 z-10">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            className="flex flex-col text-[14px] font-mono text-emerald-400/40 leading-none animate-matrix-rain"
            style={{ 
              // Very small, varied speeds to create density without delay
              animationDuration: `${3 + Math.random() * 4}s`,
              // This ensures some start mid-screen so it's instant upon click
              animationDelay: `-${Math.random() * 5}s` 
            }}
          >
            {Array.from({ length: 60 }).map((_, j) => (
              <span key={j} className="py-[2px] drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">
                {charStream[Math.floor(Math.random() * charStream.length)]}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full z-0" />

      {/* LOGIN CARD CONTAINER */}
      <div className="z-20 w-full max-w-[440px]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-white tracking-tight mb-2">
            Secure Access
          </h1>
          <p className="text-slate-400 text-sm">
            Access your secure digital legacy vault.
          </p>
        </div>

        <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          <IdentityTerminal />
          
          <div className="mt-8 pt-6 border-t border-white/5 flex justify-center gap-6 opacity-50">
            <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3 text-emerald-500" /> End-to-End
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase tracking-widest">
              <Lock className="w-3 h-3 text-purple-500" /> Encrypted
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;