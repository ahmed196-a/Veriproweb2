"use client";

import React from "react";
import {
  Scissors,
  Stethoscope,
  Scale,
  ShoppingBag,
  Building2,
  Briefcase,
  Home,
  Check,
  AlertCircle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface SolutionsSectionProps {
  onOpenBooking: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onOpenBooking,
}) => {
  const getIcon = (title: string) => {
    if (title.includes("Salon")) return Scissors;
    if (title.includes("Doctors")) return Stethoscope;
    if (title.includes("Lawyers")) return Scale;
    if (title.includes("Shop")) return ShoppingBag;
    if (title.includes("Small")) return Building2;
    if (title.includes("Freelancers")) return Briefcase;
    return Home;
  };

  return (
    <section id="solutions" className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Header */}
        <div className="mb-4">
          <span className="text-xs font-bold tracking-widest text-[#1D4ED8] uppercase">
            SOLUTIONS BY BUSINESS TYPE
          </span>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14304F] tracking-tight mb-4">
            Built for the way you work
          </h2>
          <p className="text-lg text-[#1F2937]">
            Whether you run a salon, a clinic, a practice, a shop or a one-person business, start with the solution that fits your day.
          </p>
        </div>

        {/* 7 Business Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SITE_CONFIG.solutions.map((item, idx) => {
            const Icon = getIcon(item.title);
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#1D4ED8]/30 transition-all shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-[#1D4ED8] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-[#14304F] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-[#475569] mb-4">
                    {item.subtitle}
                  </p>

                  <div className="bg-white rounded-xl p-3.5 border border-slate-200 text-xs text-[#1F2937] mb-4">
                    <span className="font-bold text-[#14304F] block mb-1">
                      Start with:
                    </span>
                    {item.startWith}
                  </div>
                </div>

                {item.complianceNote && (
                  <div className="pt-3 border-t border-slate-200 flex items-start gap-2 text-xs text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200/70">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                    <span>{item.complianceNote}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Why Partner with VeriPro Tech (Page 9) */}
        <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 lg:p-10 mb-8">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] mb-1 block">
              PARTNERSHIP ADVANTAGE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14304F]">
              Why partner with VeriPro Tech
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SITE_CONFIG.whyPartnerPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs"
              >
                <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <span className="text-sm font-semibold text-[#14304F]">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Regulated Professions Disclaimer Banner (Page 9) */}
        <div className="p-4 bg-slate-100 rounded-xl text-xs text-[#475569] flex items-center justify-between flex-wrap gap-2">
          <span>
            <strong>Regulated professions note:</strong> Scheduling and intake only, until a compliance review is complete.
          </span>
          <button
            onClick={onOpenBooking}
            className="text-xs font-bold text-[#1D4ED8] hover:underline flex items-center gap-1"
          >
            Schedule Compliance Review <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

