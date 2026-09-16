import React from "react";
import { QrCode, Coffee, UtensilsCrossed, ArrowRight } from "lucide-react";

interface ProjectThumbnailProps {
  projectId: string;
  title: string;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ projectId, title }) => {
  if (projectId === "qr-cafe-management") {
    return (
      <div className="relative w-full aspect-[16/10] rounded-2xl bg-gradient-to-br from-[#120D08] via-[#0E0A06] to-[#1A1208] border border-amber-500/25 overflow-hidden flex flex-col justify-between p-5 group-hover:border-amber-500/50 transition-all duration-300 select-none shadow-2xl">
        {/* Amber Glow */}
        <div className="absolute top-0 right-0 w-56 h-56 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between z-10 pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-amber-500 flex items-center justify-center text-[10px] font-bold text-black shadow-sm shadow-amber-500/50">
              QR
            </span>
            <span className="font-display font-bold text-xs text-white">
              Smart Cafe Suite
            </span>
          </div>
          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 font-medium flex items-center gap-1">
            <Coffee className="w-3 h-3" /> Live Dine-In POS
          </span>
        </div>

        {/* Center UI Preview */}
        <div className="my-auto z-10 space-y-2 py-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-300">
            <QrCode className="w-3 h-3 text-amber-400" /> Dynamic Table QR & Instant Menu
          </div>

          <h4 className="font-display font-black text-lg sm:text-xl text-white leading-tight">
            Contactless Ordering & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-white">
              Kitchen Display System
            </span>
          </h4>

          {/* Mini Kitchen Ticket Card Mock */}
          <div className="mt-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <UtensilsCrossed className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-white">Table #04 • 3 Items Placed</p>
                <p className="text-[10px] font-mono text-neutral-400">WebSockets KOT Sync • Sub-second</p>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-black bg-amber-400 px-2 py-0.5 rounded shadow-sm">
              Live KOT
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between pt-2.5 border-t border-white/10 text-[11px] font-mono text-neutral-400 z-10">
          <span>QR Dining Architecture</span>
          <span className="text-amber-400 flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform">
            View Details <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    );
  }

  // Fallback / Other
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl bg-neutral-900 border border-white/10 overflow-hidden flex items-center justify-center p-5">
      <span className="font-mono text-xs text-neutral-400">{title}</span>
    </div>
  );
};
