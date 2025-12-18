import React, { useState, useRef, useEffect } from 'react';
import { Camera, Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export const VideoPath = ({ onComplete }: { onComplete: (blob: Blob) => void }) => {
  const [recording, setRecording] = useState(false);
  const [countdown, setCountdown] = useState(5); // Changed from 6 to 5
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startRecording = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480, facingMode: "user" }, 
        audio: false 
      });
      
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      
      const options = { mimeType: 'video/webm;codecs=vp8,opus' };
      const recorder = new MediaRecorder(stream, options);
      const chunks: BlobPart[] = [];
      
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = () => {
        const finalBlob = new Blob(chunks, { type: "video/webm" });
        if (finalBlob.size > 0) {
          onComplete(finalBlob); // This triggers finalizeAccount in IdentityTerminal
        }
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
      setRecording(true);

      // Strict 5-second interval
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            if (recorder.state !== "inactive") recorder.stop(); // Stops exactly at 0
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

    } catch (err: any) {
      setError("Hardware Error: Check Permissions");
      toast.error("Camera Access Failed");
    }
  };

  return (
    <div className="space-y-6 text-center animate-in fade-in">
      <div className="relative aspect-video bg-black rounded-3xl overflow-hidden border border-emerald-500/20 shadow-2xl">
        <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
        
        {recording && (
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-red-500/50">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
            <span className="text-[10px] text-white font-mono font-bold tracking-tighter">
              LIVENESS_CHECK: {countdown}S
            </span>
          </div>
        )}
      </div>

      <button 
        onClick={startRecording} 
        disabled={recording} 
        className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-900/50 text-white font-bold py-4 rounded-2xl transition-all shadow-lg"
      >
        {recording ? "Recording..." : "Start 5s Proof"}
      </button>
    </div>
  );
};