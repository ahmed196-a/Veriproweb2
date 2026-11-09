"use client";

import React from "react";
import {
  Search,
  Compass,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ShieldAlert,
  ClipboardList,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface EngagementModelSectionProps {
  onOpenBooking: () => void;
}

export const EngagementModelSection: React.FC<EngagementModelSectionProps> = ({
  onOpenBooking,
}) => {
  const stepIcons = [Search, Compass, Zap, TrendingUp];

  return (
    <section id="model" className="bg-[#14304F] text-[#EAF0FF] py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Header */}
        <div className="mb-4">
          <span className="text-xs font-bold tracking-widest text-[#EAF0FF] uppercase opacity-90">
            OUR ENGAGEMENT MODEL
          </span>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Assess. Advise. Transform. Manage.
          </h2>
          <p className="text-lg text-[#EAF0FF]/90">
            The same four steps whether you hire us or subscribe to our software.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SITE_CONFIG.engagementModel.map((item, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={item.step}
                className="bg-white/[0.06] border border-white/15 rounded-2xl p-7 hover:border-white/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-[#1D4ED8]">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#EAF0FF]/85 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* What the Client Can Expect Card (Page 8) */}
        <div className="bg-white/[0.04] border border-white/15 rounded-2xl p-8 lg:p-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EAF0FF] mb-6">
            <ClipboardList className="w-5 h-5 text-[#1D4ED8]" />
            What the client can expect
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SITE_CONFIG.clientExpectations.map((exp, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white/[0.03] p-4 rounded-xl border border-white/10"
              >
                <div className="w-6 h-6 rounded-full bg-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 text-white">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base text-white font-medium">
                  {exp}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#EAF0FF]/70">
              Clear accountability. Visible progress reports and a named owner on every deliverable.
            </p>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1D4ED8] text-white text-xs font-semibold hover:bg-[#1e40af] transition-colors"
            >
              Start step 01 (Discovery Call)
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

