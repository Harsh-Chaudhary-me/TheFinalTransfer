import React, { useState } from 'react';
import { Loader2 } from "lucide-react";

export const IdentityTerminal = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [input, setInput] = useState('');

  const handleInitiate = () => {
    if (!input) return;
    setIsScanning(true);
    // Logic for Step 1 OTP will go here
    setTimeout(() => setIsScanning(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-medium text-slate-300 ml-1 uppercase tracking-wider">
          Digital ID (Email or Phone)
        </label>
        <input
          type="text"
          placeholder="e.g. name@vault.com"
          className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <button
        onClick={handleInitiate}
        disabled={isScanning}
        className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-4 rounded-2xl transition-all shadow-lg shadow-purple-500/20 active:scale-[0.98]"
      >
        <div className="flex items-center justify-center gap-2">
          {isScanning ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Verifying Identity...</span>
            </>
          ) : (
            <span>Initiate Protocol</span>
          )}
        </div>
        
        {/* Animated shimmer effect on hover */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      </button>
    </div>
  );
};