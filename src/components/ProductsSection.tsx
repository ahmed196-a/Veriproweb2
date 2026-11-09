"use client";

import React from "react";
import {
  CalendarCheck,
  Receipt,
  Users2,
  Bot,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ArrowRight,
  UserCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface ProductsSectionProps {
  onOpenVeraDemo: () => void;
  onOpenGuide: (guideKey: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onOpenVeraDemo,
  onOpenGuide,
}) => {
  return (
    <section id="software" className="bg-[#14304F] text-[#EAF0FF] py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Header */}
        <div className="mb-4">
          <span className="text-xs font-bold tracking-widest text-[#EAF0FF] uppercase opacity-90">
            VERIPRO SOFTWARE
          </span>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Software built for small teams
          </h2>
          <p className="text-lg text-[#EAF0FF]/90">
            Each product works on its own. Add the next one when you are ready.
          </p>
        </div>

        {/* 4 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SITE_CONFIG.products.map((product) => {
            const isEarlyAccess = product.status === "EARLY ACCESS";
            const isPlanned = product.status === "PLANNED";
            const isInVeribook = product.status === "IN VERIBOOK";

            const ProductIcon =
              product.id === "veribook"
                ? CalendarCheck
                : product.id === "veribill"
                ? Receipt
                : product.id === "verihr"
                ? Users2
                : Bot;

            return (
              <div
                key={product.id}
                className="bg-white/[0.06] backdrop-blur-xs border border-white/15 rounded-2xl p-7 flex flex-col justify-between hover:border-white/30 transition-all hover:bg-white/[0.08]"
              >
                <div>
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                        isEarlyAccess
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : isPlanned
                          ? "bg-slate-500/20 text-slate-300 border border-slate-500/30"
                          : "bg-[#1D4ED8]/30 text-blue-200 border border-[#1D4ED8]/40"
                      }`}
                    >
                      {product.status}
                    </span>

                    <ProductIcon className="w-6 h-6 text-[#EAF0FF]/70" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {product.name}
                  </h3>

                  <p className="text-[#EAF0FF]/85 text-base leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs text-[#EAF0FF]/70 mb-3">
                    {product.plansOrAction}
                  </div>

                  {product.id === "vera" ? (
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={onOpenVeraDemo}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1D4ED8] text-white text-xs font-semibold hover:bg-[#1e40af] transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        Launch Vera Simulator
                      </button>
                      <button
                        onClick={() => onOpenGuide("vera")}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/20 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                      >
                        Read Vera Guide
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : product.id === "veribook" ? (
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={product.actionHref}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1D4ED8] text-white text-xs font-semibold hover:bg-[#1e40af] transition-colors"
                      >
                        {product.actionText}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="#pricing"
                        className="text-xs text-[#EAF0FF] hover:underline flex items-center gap-1"
                      >
                        View Plans
                      </a>
                    </div>
                  ) : (
                    <a
                      href={product.actionHref}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                    >
                      {product.actionText}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* How VeriPro Software Behaves Callout Box (Page 4) */}
        <div className="bg-white/[0.04] border border-white/15 rounded-2xl p-7 lg:p-9">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EAF0FF] mb-4">
            <ShieldCheck className="w-5 h-5 text-[#1D4ED8]" />
            How VeriPro software behaves
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SITE_CONFIG.softwareBehaviorRules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1D4ED8]/30 border border-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-white">
                  {idx + 1}
                </div>
                <p className="text-sm text-[#EAF0FF]/90 leading-relaxed">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-[#EAF0FF]/70">
            <span>
              Status labels are honest:{" "}
              <strong className="text-white">EARLY ACCESS</strong>,{" "}
              <strong className="text-white">PLANNED</strong>, or{" "}
              <strong className="text-white">IN VERIBOOK</strong>.
            </span>
            <span className="italic mt-1 sm:mt-0">
              Designed for compliance, owner control, and complete auditability.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

