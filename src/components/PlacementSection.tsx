"use client";

import React, { useState } from "react";
import {
  Calculator,
  UserCheck,
  AlertTriangle,
  FileText,
  DollarSign,
  Shield,
  HelpCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const PlacementSection: React.FC = () => {
  const [candidateSalary, setCandidateSalary] = useState<number>(80000);

  const calculatedFee = (candidateSalary * (SITE_CONFIG.placement.ratePercent / 100));

  return (
    <section id="placement" className="bg-[#14304F] text-[#EAF0FF] py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Header */}
        <div className="mb-4">
          <span className="text-xs font-bold tracking-widest text-[#EAF0FF] uppercase opacity-90">
            PRICING · RESOURCE AUGMENTATION AND PLACEMENT
          </span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Placement referral and resource augmentation
          </h2>
          <p className="text-lg text-[#EAF0FF]/90">
            {SITE_CONFIG.placement.summary}
          </p>
        </div>

        {/* Interactive Worked Example & Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Interactive Calculator */}
          <div className="lg:col-span-5 bg-white/[0.07] border border-white/20 rounded-2xl p-7 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EAF0FF] mb-4">
              <Calculator className="w-4 h-4 text-[#1D4ED8]" />
              Interactive Fee Calculator
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#EAF0FF]/80 mb-1">
                  Candidate Total Annual Pay (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-[#EAF0FF]/50 font-bold">
                    $
                  </span>
                  <input
                    type="number"
                    min={20000}
                    max={400000}
                    step={5000}
                    value={candidateSalary}
                    onChange={(e) => setCandidateSalary(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-2.5 rounded-lg bg-[#0D2137] border border-white/20 text-white font-semibold text-lg focus:outline-none"
                  />
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min={30000}
                max={250000}
                step={5000}
                value={candidateSalary}
                onChange={(e) => setCandidateSalary(Number(e.target.value))}
                className="w-full accent-[#1D4ED8] cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-[#EAF0FF]/60 font-mono">
                <span>$30,000</span>
                <span>$140,000</span>
                <span>$250,000</span>
              </div>

              {/* Output Display */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-[#EAF0FF]/70">
                    Placement Referral Rate:
                  </span>
                  <span className="text-sm font-bold text-white">5.0%</span>
                </div>

                <div className="bg-[#0D2137] rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#EAF0FF]/70">
                      Calculated Placement Fee:
                    </div>
                    <div className="text-3xl font-extrabold text-white mt-0.5">
                      ${calculatedFee.toLocaleString()}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Non-refundable
                  </span>
                </div>
              </div>

              <div className="text-xs text-[#EAF0FF]/75 leading-relaxed pt-2">
                <strong>Worked example from guidelines:</strong> For an $80,000 hire, the fee is exactly $4,000. If the candidate leaves for attrition within 3 months of start, we provide one free replacement referral.
              </div>
            </div>
          </div>

          {/* Terms Table from Page 6 */}
          <div className="lg:col-span-7 bg-white/[0.04] border border-white/15 rounded-2xl p-6 sm:p-7 overflow-hidden">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#1D4ED8]" />
              Placement Terms & Definitions
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-xs font-bold uppercase tracking-wider text-white">
                    <th className="py-2.5 px-3 w-1/3">Term</th>
                    <th className="py-2.5 px-3">What it means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                  {SITE_CONFIG.placement.terms.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.03]">
                      <td className="py-3 px-3 font-semibold text-white align-top">
                        {item.term}
                      </td>
                      <td className="py-3 px-3 text-[#EAF0FF]/85 leading-relaxed align-top">
                        {item.meaning}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Resource Augmentation Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/[0.05] border border-white/15 rounded-xl p-6">
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#1D4ED8]" />
              Resource Augmentation
            </h4>
            <p className="text-sm text-[#EAF0FF]/85 leading-relaxed">
              {SITE_CONFIG.placement.resourceAugmentation}
            </p>
          </div>

          <div className="bg-white/[0.05] border border-white/15 rounded-xl p-6">
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#1D4ED8]" />
              3-Month Attrition Protection
            </h4>
            <p className="text-sm text-[#EAF0FF]/85 leading-relaxed">
              We stand behind our referrals. If a placed candidate leaves due to attrition within 90 days of their official start date, VeriPro provides one free replacement referral, subject to employer candidate selection.
            </p>
          </div>
        </div>

        {/* Legal Counsel & Compliance Callout Box (Page 6) */}
        <div className="bg-amber-950/40 border-l-4 border-amber-500 rounded-r-xl p-5 sm:p-6 text-[#EAF0FF]">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Counsel Review Notice
              </div>
              <p className="text-xs sm:text-sm text-[#EAF0FF]/90 leading-relaxed">
                {SITE_CONFIG.placement.counselAdvisory}
              </p>
              <div className="pt-2 text-xs text-amber-300/80 font-medium">
                Terms are subject to a written agreement and legal review.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

