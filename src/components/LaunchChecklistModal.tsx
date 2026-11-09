"use client";

import React, { useState } from "react";
import {
  X,
  CheckSquare,
  Square,
  Rocket,
  ShieldCheck,
  AlertTriangle,
  RotateCcw,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface LaunchChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LaunchChecklistModal: React.FC<LaunchChecklistModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    "chk-1": true,
    "chk-7": true,
    "chk-8": true,
    "chk-9": true,
    "chk-10": true,
  });

  if (!isOpen) return null;

  const toggleItem = (id: string) => {
    setChecklist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const totalCount = SITE_CONFIG.connectionGuides.hosting.checklist.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#14304F] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1D4ED8] flex items-center justify-center text-white">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">
                Pre-Publication Launch Checklist (Page 18)
              </h3>
              <p className="text-xs text-[#EAF0FF]/80">
                Connection Guide 5 of 5 · Quality, regulatory, and technical verification
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#EAF0FF]/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar & Status */}
        <div className="p-5 bg-[#F8FAFC] border-b border-slate-200 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-[#14304F]">
            <span>Launch Readiness Score</span>
            <span>{completedCount} / {totalCount} Items Completed ({percentage}%)</span>
          </div>

          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                percentage === 100
                  ? "bg-emerald-500"
                  : percentage >= 50
                  ? "bg-[#1D4ED8]"
                  : "bg-amber-500"
              }`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Checklist Items */}
        <div className="flex-1 min-h-0 p-5 overflow-y-auto space-y-2.5">
          {SITE_CONFIG.connectionGuides.hosting.checklist.map((item) => {
            const isChecked = !!checklist[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                  isChecked
                    ? "bg-emerald-50/60 border-emerald-300 text-[#14304F]"
                    : "bg-white border-slate-200 hover:bg-slate-50 text-[#475569]"
                }`}
              >
                <button className="mt-0.5 shrink-0 focus:outline-none">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                <div className="flex-1">
                  <div
                    className={`text-sm font-semibold ${
                      isChecked ? "text-[#14304F]" : "text-[#1F2937]"
                    }`}
                  >
                    {item.text}
                  </div>
                  <div className="text-[11px] text-[#475569] mt-0.5 uppercase tracking-wider">
                    Category: {item.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-[#475569]">
          <span>Re-check the checklist before every price or policy change.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#14304F] text-white font-semibold hover:bg-slate-800"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

