"use client";

import React, { useState } from "react";
import {
  Check,
  Calendar,
  Mail,
  ArrowRight,
  Info,
  HelpCircle,
  FileCheck,
  Building,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface PricingSectionProps {
  onOpenBooking: () => void;
  onOpenGuide: (guideKey: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenBooking,
  onOpenGuide,
}) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing" className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Header */}
        <div className="mb-4">
          <span className="text-xs font-bold tracking-widest text-[#1D4ED8] uppercase">
            PRICING
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14304F] tracking-tight mb-3">
              Simple pricing. No surprises.
            </h2>
            <p className="text-lg text-[#1F2937]">
              US dollars. Standard is the same for everyone. Larger requirements are priced to fit.
            </p>
          </div>

          {/* Billing Switcher */}
          <div className="inline-flex items-center p-1.5 bg-[#F8FAFC] border border-slate-200 rounded-xl">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-[#14304F] text-white shadow-xs"
                  : "text-[#475569] hover:text-[#14304F]"
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                billingCycle === "annual"
                  ? "bg-[#14304F] text-white shadow-xs"
                  : "text-[#475569] hover:text-[#14304F]"
              }`}
            >
              <span>Annual billing</span>
              <span className="text-[11px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">
                Save $20
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Standard Plan */}
          <div className="bg-[#F8FAFC] rounded-2xl border-2 border-[#1D4ED8] p-8 flex flex-col justify-between shadow-xs relative">
            <div className="absolute -top-3 right-8 bg-[#1D4ED8] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Popular For Small Teams
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  STANDARD
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#14304F] mb-4">
                Standard plan
              </h3>

              <div className="flex items-baseline gap-2 mb-2">
                {billingCycle === "annual" ? (
                  <>
                    <span className="text-5xl font-extrabold text-[#14304F]">
                      $100
                    </span>
                    <span className="text-[#475569] font-medium">/ year</span>
                  </>
                ) : (
                  <>
                    <span className="text-5xl font-extrabold text-[#14304F]">
                      $10
                    </span>
                    <span className="text-[#475569] font-medium">/ month</span>
                  </>
                )}
              </div>

              <p className="text-xs text-[#475569] mb-6">
                {billingCycle === "annual"
                  ? "Annual saves $20 (about $8.33 a month)"
                  : "Flexible monthly billing. Or switch to annual to save $20."}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                {SITE_CONFIG.pricing.standardFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1F2937]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-200">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Standard%20Plan%20Inquiry`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1D4ED8] text-white font-semibold hover:bg-[#1e40af] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get started by email
              </a>
              <p className="text-center text-xs text-[#475569] mt-2.5">
                No automatic checkout yet; direct personal onboarding.
              </p>
            </div>
          </div>

          {/* Bespoke / Larger Requirements Plan */}
          <div className="bg-[#F8FAFC] rounded-2xl border border-slate-300 p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                  BESPOKE
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#14304F] mb-4">
                Larger requirements
              </h3>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-extrabold text-[#14304F]">
                  Custom pricing
                </span>
              </div>

              <p className="text-xs text-[#475569] mb-6">
                Priced to your exact requirements and organizational structure.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                {SITE_CONFIG.pricing.bespokeFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#14304F] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1F2937]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-200">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Custom%20Quote%20Request`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-[#14304F] text-[#14304F] font-semibold hover:bg-slate-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Request a quote by email
              </a>
              <p className="text-center text-xs text-[#475569] mt-2.5">
                Written scope & quote before any commitment.
              </p>
            </div>
          </div>
        </div>

        {/* Advisory and Delivery Table (Page 5) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1D4ED8] mb-4">
            <Building className="w-4 h-4" />
            Advisory and delivery
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#14304F] text-xs font-bold uppercase tracking-wider text-[#14304F]">
                  <th className="py-3 px-4">Engagement</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {SITE_CONFIG.pricing.advisoryOfferings.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#14304F]">
                      {item.engagement}
                    </td>
                    <td className="py-4 px-4 text-[#1F2937]">
                      {item.price}
                    </td>
                    <td className="py-4 px-4 text-right">
                      {item.actionType === "book" ? (
                        <button
                          onClick={onOpenBooking}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#1D4ED8] text-white text-xs font-semibold hover:bg-[#1e40af] transition-colors"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          {item.action}
                        </button>
                      ) : (
                        <a
                          href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
                            item.engagement
                          )}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D4ED8] hover:underline"
                        >
                          {item.action}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Policy & Early Access Callouts (Page 5) */}
        <div className="bg-[#EAF0FF]/50 border-l-4 border-[#1D4ED8] p-5 rounded-r-xl space-y-2">
          <div className="flex items-start gap-2.5 text-sm text-[#14304F] leading-relaxed">
            <Info className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">{SITE_CONFIG.pricing.policyNote}</p>
              <button
                onClick={() => onOpenGuide("payments")}
                className="text-xs text-[#1D4ED8] font-bold hover:underline inline-flex items-center gap-1 mt-1"
              >
                Read the payments and refunds guide <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
          <p className="text-xs text-[#475569] pl-7">
            {SITE_CONFIG.pricing.earlyAccessNote}
          </p>
        </div>
      </div>
    </section>
  );
};

