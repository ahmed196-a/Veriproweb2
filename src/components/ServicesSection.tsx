"use client";

import React from "react";
import {
  Compass,
  Cpu,
  Layers,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
}) => {
  const serviceIcons = [Compass, Cpu, Layers, Users];

  return (
    <section id="services" className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Header */}
        <div className="mb-4">
          <span className="text-xs font-bold tracking-widest text-[#1D4ED8] uppercase">
            OUR KEY OFFERINGS
          </span>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14304F] tracking-tight mb-4">
            Focused. Practical. Impactful.
          </h2>
          <p className="text-lg text-[#1F2937]">
            Four service lines for businesses that want to grow and modernize without enterprise overhead.
          </p>
        </div>

        {/* 4 Key Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {SITE_CONFIG.services.map((svc, idx) => {
            const Icon = serviceIcons[idx];
            return (
              <div
                key={svc.id}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover:shadow-md transition-all hover:border-[#1D4ED8]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest text-[#1D4ED8] uppercase">
                      {svc.number} · {svc.tagline}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#14304F] mb-3">
                    {svc.title}
                  </h3>

                  <p className="text-sm font-medium text-[#475569] mb-6">
                    {svc.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {svc.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#1F2937]">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-200 bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#14304F] mb-1">
                    Delivered Outcome
                  </div>
                  <div className="text-sm text-[#1D4ED8] font-semibold">
                    {svc.outcome}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#14304F] text-[#EAF0FF] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#EAF0FF]/80 mb-1">
              Holistic Transformation
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              Most engagements combine two or three of these.
            </h3>
            <p className="text-sm text-[#EAF0FF]/80">
              We design modular, high-impact roadmaps tailored to your immediate bottleneck.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1D4ED8] text-white font-semibold text-sm hover:bg-[#1e40af] transition-colors"
          >
            Discuss Your Stack
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

