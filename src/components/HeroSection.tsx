"use client";

import React, { useState } from "react";
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Bot,
  User,
  RotateCcw,
  Play,
  Building,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenVeraDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onOpenVeraDemo,
}) => {
  const [step, setStep] = useState<number>(3); // default full conversation shown

  const conversationSteps = [
    {
      sender: "customer",
      name: "Customer",
      time: "2:14 PM",
      message: "Hi, do you have any appointments available this Thursday afternoon?",
    },
    {
      sender: "vera",
      name: "Vera (AI Assistant)",
      time: "2:14 PM",
      message:
        "Hi! Yes, Jordan has an opening this Thursday at 2:30 PM for $65 with no deposit. Would you like me to book this for you?",
      note: "Explicit confirmation requested before any change or booking",
    },
    {
      sender: "customer",
      name: "Customer",
      time: "2:15 PM",
      message: "YES",
    },
    {
      sender: "vera",
      name: "Vera (AI Assistant)",
      time: "2:15 PM",
      message:
        "Confirmed! You're booked with Jordan this Thursday at 2:30 PM. A calendar invite and reminder have been sent to your phone. Reply RESCHEDULE if you need to make changes.",
      confirmedBadge: true,
    },
  ];

  return (
    <section id="about" className="bg-white py-8 sm:py-12 lg:py-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="mb-3 sm:mb-4">
          <span className="text-xs font-bold tracking-widest text-[#1D4ED8] uppercase">
            WEBSITE AND CONNECTION GUIDE · HOME PAGE
          </span>
        </div>

        {/* Hero Grid: Main Pitch + Vera Example */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-start">
          {/* Left Column: Heading, Subtitle, Description, CTA */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-[#14304F] tracking-tight leading-[1.18]">
              {SITE_CONFIG.tagline}
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-[#14304F]/90">
              {SITE_CONFIG.subtitle}
            </p>

            <p className="text-base sm:text-lg text-[#1F2937] leading-relaxed max-w-2xl">
              {SITE_CONFIG.partnerStatement}
            </p>

            {/* CTAs from Page 3 */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold rounded-lg bg-[#1D4ED8] text-white hover:bg-[#1e40af] shadow-xs transition-all cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Book a free discovery call
              </button>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold rounded-lg border-2 border-[#14304F] text-[#14304F] hover:bg-slate-50 transition-all whitespace-nowrap"
              >
                See pricing
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* About VeriPro Tech Card */}
            <div className="mt-4 sm:mt-6 p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-1.5">
                <Building className="w-4 h-4" />
                About VeriPro Tech
              </div>
              <p className="text-xs sm:text-sm text-[#1F2937] leading-relaxed">
                {SITE_CONFIG.aboutText}
              </p>
            </div>
          </div>

          {/* Right Column: Vera example on the home page (Page 3) */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-5 relative">
              {/* Top Label & Controls */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#14304F]">
                    Vera Live Interaction
                  </span>
                  <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold rounded-full bg-blue-100 text-[#1D4ED8] border border-blue-200">
                    Example
                  </span>
                </div>

                <button
                  onClick={() => setStep(step === 3 ? 0 : 3)}
                  className="text-xs text-[#475569] hover:text-[#14304F] flex items-center gap-1 font-medium"
                  title="Replay step-by-step"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{step === 3 ? "Replay" : "Show All"}</span>
                </button>
              </div>

              {/* Chat Thread */}
              <div className="space-y-2.5 min-h-[250px] sm:min-h-[270px]">
                {conversationSteps.slice(0, step + 1).map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${
                      msg.sender === "customer" ? "items-end" : "items-start"
                    }`}
                  >
                    <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#475569] mb-0.5">
                      {msg.sender === "customer" ? (
                        <>
                          <span>{msg.name}</span>
                          <User className="w-3 h-3" />
                        </>
                      ) : (
                        <>
                          <Bot className="w-3 h-3 text-[#1D4ED8]" />
                          <span className="font-semibold text-[#14304F]">
                            {msg.name}
                          </span>
                        </>
                      )}
                      <span>· {msg.time}</span>
                    </div>

                    <div
                      className={`max-w-[88%] rounded-xl px-3 sm:px-3.5 py-2 text-xs sm:text-sm leading-relaxed ${
                        msg.sender === "customer"
                          ? "bg-[#14304F] text-white rounded-tr-none"
                          : "bg-white text-[#1F2937] border border-slate-200 shadow-xs rounded-tl-none"
                      }`}
                    >
                      <p>{msg.message}</p>
                      {msg.note && (
                        <div className="mt-1 pt-1 border-t border-slate-100 text-[10px] sm:text-[11px] text-[#1D4ED8] font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          {msg.note}
                        </div>
                      )}
                      {msg.confirmedBadge && (
                        <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          Booking Confirmed
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress step controls */}
              {step < 3 && (
                <div className="mt-3 pt-2.5 border-t border-slate-200 flex justify-end">
                  <button
                    onClick={() => setStep((s) => Math.min(s + 1, 3))}
                    className="text-xs font-semibold px-3 py-1.5 rounded-md bg-[#1D4ED8] text-white flex items-center gap-1 hover:bg-[#1e40af]"
                  >
                    Next Message <Play className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Vera Simulator Button */}
              <div className="mt-3.5 pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 bg-white p-2.5 rounded-xl border border-slate-200">
                <div className="text-[11px] text-[#475569] leading-tight">
                  Want to test cancellations or medical/legal boundaries?
                </div>
                <button
                  onClick={onOpenVeraDemo}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#EAF0FF] text-[#14304F] hover:bg-blue-100 transition-colors whitespace-nowrap cursor-pointer shrink-0"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  Launch Vera Simulator
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Grid (Page 3) */}
        <div className="mt-12 sm:mt-16">
          <div className="mb-5 sm:mb-6">
            <span className="text-xs font-bold tracking-widest text-[#1D4ED8] uppercase">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14304F] mt-0.5">
              Our core values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {SITE_CONFIG.values.map((val) => {
              const IconComp =
                val.title === "Trusted"
                  ? ShieldCheck
                  : val.title === "Professional"
                  ? Award
                  : val.title === "Innovative"
                  ? Sparkles
                  : TrendingUp;

              return (
                <div
                  key={val.title}
                  className="p-5 sm:p-6 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#1D4ED8]/30 transition-all shadow-xs"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-[#1D4ED8] mb-3 sm:mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#14304F] mb-1.5">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
