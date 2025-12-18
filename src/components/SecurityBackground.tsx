import React, { useEffect, useState } from 'react';

const securityLogs = [
  "DECRYPTING_AES_256...",
  "HANDSHAKE_SSL_ESTABLISHED",
  "PROTOCOL_LEGACY_GUARD_v2",
  "SCANNING_EMAIL_INTEGRITY...",
  "VAULT_PERMISSION_GRANTED",
  "ENCRYPTING_METADATA",
  "BYPASSING_EXTERNAL_THREATS",
  "SECURE_BUFFER_READY",
  "PROTOCOL_LEGACY_GUARD_v2",
  "SCANNING_EMAIL_INTEGRITY...",
  "VAULT_PERMISSION_GRANTED",
  "ENCRYPTING_METADATA",
  "BYPASSING_EXTERNAL_THREATS",
  "SECURE_BUFFER_READY",
  "SCANNING_EMAIL_INTEGRITY...",
  "VAULT_PERMISSION_GRANTED",
  "ENCRYPTING_METADATA",
  "BYPASSING_EXTERNAL_THREATS",
  "SECURE_BUFFER_READY",
  "PROTOCOL_LEGACY_GUARD_v2",
  "SCANNING_EMAIL_INTEGRITY...",
  "VAULT_PERMISSION_GRANTED",
  "ENCRYPTING_METADATA",
  "BYPASSING_EXTERNAL_THREATS",
  "SECURE_BUFFER_READY"
];

export const SecurityBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 font-mono text-[10px]">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 p-4">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i} 
            className="text-emerald-500/40 animate-matrix-fade"
            style={{ animationDelay: `${Math.random() * 5}s` }}
          >
            {securityLogs[Math.floor(Math.random() * securityLogs.length)]}
          </div>
        ))}
      </div>
    </div>
  );
};