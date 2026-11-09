"use client";

import React, { useState } from "react";
import {
  Calendar,
  CreditCard,
  Bot,
  MailCheck,
  Rocket,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckSquare,
  Square,
  Terminal,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface ConnectionGuidesSectionProps {
  onOpenVeraDemo: () => void;
  bookingUrl: string;
  onUpdateBookingUrl: (newUrl: string) => void;
}

export const ConnectionGuidesSection: React.FC<ConnectionGuidesSectionProps> = ({
  onOpenVeraDemo,
  bookingUrl,
  onUpdateBookingUrl,
}) => {
  const [activeGuide, setActiveGuide] = useState<number>(0);
  const [checklistState, setChecklistState] = useState<Record<string, boolean>>({
    "chk-1": true,
    "chk-7": true,
    "chk-8": true,
    "chk-9": true,
    "chk-10": true,
  });

  const toggleChecklist = (id: string) => {
    setChecklistState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checklistState).filter(Boolean).length;
  const totalChecklist = SITE_CONFIG.connectionGuides.hosting.checklist.length;
  const checklistPercent = Math.round((completedCount / totalChecklist) * 100);

  const guides = [
    {
      id: "booking",
      num: "1 OF 5",
      title: "Booking",
      icon: Calendar,
    },
    {
      id: "payments",
      num: "2 OF 5",
      title: "Payments & Refunds",
      icon: CreditCard,
    },
    {
      id: "vera",
      num: "3 OF 5",
      title: "Vera AI Assistant",
      icon: Bot,
    },
    {
      id: "email",
      num: "4 OF 5",
      title: "Email & CRM",
      icon: MailCheck,
    },
    {
      id: "hosting",
      num: "5 OF 5",
      title: "Launch Checklist",
      icon: Rocket,
    },
  ];

  return (
    <section id="guides" className="bg-[#14304F] text-[#EAF0FF] py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Header */}
        <div className="mb-4">
          <span className="text-xs font-bold tracking-widest text-[#EAF0FF] uppercase opacity-90">
            CONNECTION GUIDES & TECHNICAL SPECS
          </span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Step-by-step connection playbooks
          </h2>
          <p className="text-lg text-[#EAF0FF]/90">
            Standard operating procedures for booking, payments, Vera AI integration, DNS/hosting, and launch verification.
          </p>
        </div>

        {/* Guide Tabs Navigation */}
        <div className="flex flex-wrap gap-2 pb-4 mb-8 border-b border-white/15">
          {guides.map((g, idx) => {
            const Icon = g.icon;
            const isActive = activeGuide === idx;
            return (
              <button
                key={g.id}
                onClick={() => setActiveGuide(idx)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#1D4ED8] text-white shadow-md"
                    : "bg-white/[0.05] text-[#EAF0FF]/80 hover:bg-white/[0.1] hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>Guide {g.num}: {g.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Booking Guide (Page 14) */}
        {activeGuide === 0 && (
          <div className="bg-white/[0.05] border border-white/15 rounded-2xl p-7 lg:p-9 space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-[#EAF0FF] px-2 py-0.5 rounded">
                CONNECTION GUIDE 1 OF 5
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-1">
                {SITE_CONFIG.connectionGuides.booking.title}
              </h3>
              <p className="text-sm text-[#EAF0FF]/90">
                {SITE_CONFIG.connectionGuides.booking.subtitle}
              </p>
            </div>

            {/* Interactive BOOKING_URL Tester */}
            <div className="bg-[#0D2137] border border-white/20 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-[#1D4ED8]" />
                BOOKING_URL Configuration Controller
              </div>
              <p className="text-xs text-[#EAF0FF]/80 leading-relaxed">
                As specified on page 14: All buttons look for <code>BOOKING_URL</code>. If empty, buttons open an email to <code>{SITE_CONFIG.email}</code> with subject "Discovery call request".
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="url"
                  placeholder="Paste Calendly or Cal.com URL here (or leave empty for email fallback)"
                  value={bookingUrl}
                  onChange={(e) => onUpdateBookingUrl(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-black/40 border border-white/20 text-white text-sm focus:outline-none"
                />
                <button
                  onClick={() => {
                    if (bookingUrl) {
                      window.open(bookingUrl, "_blank", "noopener,noreferrer");
                    } else {
                      window.location.href = `mailto:${SITE_CONFIG.email}?subject=Discovery%20call%20request`;
                    }
                  }}
                  className="px-5 py-2.5 rounded-lg bg-[#1D4ED8] text-white text-xs font-semibold hover:bg-[#1e40af] transition-colors whitespace-nowrap"
                >
                  {bookingUrl ? "Test Booking Link" : "Test Email Fallback"}
                </button>
              </div>

              <div className="text-[11px] text-[#EAF0FF]/60 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Current status: {bookingUrl ? "Custom Link Active" : "Default Email Fallback Active"}
              </div>
            </div>

            {/* Steps */}
            <div>
              <h4 className="text-base font-bold text-white mb-4">
                Step-by-step implementation
              </h4>
              <div className="space-y-4">
                {SITE_CONFIG.connectionGuides.booking.steps.map((st, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-white">
                      {sIdx + 1}
                    </div>
                    <p className="text-sm text-[#EAF0FF]/90 leading-relaxed">
                      {st}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advisory */}
            <div className="bg-white/[0.04] p-4 rounded-xl border border-white/10 text-xs text-[#EAF0FF]/80">
              <strong>Advisory:</strong> {SITE_CONFIG.connectionGuides.booking.advisory}
            </div>
          </div>
        )}

        {/* Tab 2: Payments Guide (Page 15) */}
        {activeGuide === 1 && (
          <div className="bg-white/[0.05] border border-white/15 rounded-2xl p-7 lg:p-9 space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-[#EAF0FF] px-2 py-0.5 rounded">
                CONNECTION GUIDE 2 OF 5
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-1">
                {SITE_CONFIG.connectionGuides.payments.title}
              </h3>
              <p className="text-sm text-[#EAF0FF]/90">
                {SITE_CONFIG.connectionGuides.payments.subtitle}
              </p>
            </div>

            {/* Policy Shown on Website */}
            <div className="bg-white/[0.06] rounded-xl p-6 border border-white/15">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                Policy shown on the website
              </h4>
              <ul className="space-y-2 text-sm text-[#EAF0FF]/90">
                {SITE_CONFIG.connectionGuides.payments.policy.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Steps */}
            <div>
              <h4 className="text-base font-bold text-white mb-4">
                Setting up payments (Stripe / Square)
              </h4>
              <div className="space-y-4">
                {SITE_CONFIG.connectionGuides.payments.steps.map((st, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-white">
                      {sIdx + 1}
                    </div>
                    <p className="text-sm text-[#EAF0FF]/90 leading-relaxed">
                      {st}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Counsel Warning */}
            <div className="bg-amber-950/40 border-l-4 border-amber-500 rounded-r-xl p-4 text-xs text-[#EAF0FF]/90">
              <div className="font-bold text-amber-300 mb-1">
                Legal & Consumer Rules Notice
              </div>
              {SITE_CONFIG.connectionGuides.payments.advisory}
            </div>
          </div>
        )}

        {/* Tab 3: Vera AI Assistant Guide (Page 16) */}
        {activeGuide === 2 && (
          <div className="bg-white/[0.05] border border-white/15 rounded-2xl p-7 lg:p-9 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-[#EAF0FF] px-2 py-0.5 rounded">
                  CONNECTION GUIDE 3 OF 5
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-1">
                  {SITE_CONFIG.connectionGuides.vera.title}
                </h3>
                <p className="text-sm text-[#EAF0FF]/90">
                  {SITE_CONFIG.connectionGuides.vera.subtitle}
                </p>
              </div>

              <button
                onClick={onOpenVeraDemo}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D4ED8] text-white font-semibold text-xs hover:bg-[#1e40af] transition-colors whitespace-nowrap self-start"
              >
                <Bot className="w-4 h-4" />
                Open Live Vera Simulator
              </button>
            </div>

            {/* Rules that cannot be switched off (Page 16) */}
            <div className="bg-[#0D2137] border-2 border-[#1D4ED8]/60 rounded-xl p-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1D4ED8]" />
                Rules that cannot be switched off
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SITE_CONFIG.connectionGuides.vera.rulesCannotBeSwitchedOff.map(
                  (rule, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 bg-white/[0.03] p-3 rounded-lg border border-white/10"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold text-white">
                        ✓
                      </div>
                      <span className="text-xs sm:text-sm text-[#EAF0FF]/90">
                        {rule}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Steps */}
            <div>
              <h4 className="text-base font-bold text-white mb-4">
                Connecting Vera to a business
              </h4>
              <div className="space-y-4">
                {SITE_CONFIG.connectionGuides.vera.steps.map((st, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-white">
                      {sIdx + 1}
                    </div>
                    <p className="text-sm text-[#EAF0FF]/90 leading-relaxed">
                      {st}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Connection to External Tools */}
            <div className="bg-white/[0.04] p-4 rounded-xl border border-white/10 text-xs text-[#EAF0FF]/85 space-y-1">
              <div className="font-bold text-white">
                Connection to external tools:
              </div>
              <p>{SITE_CONFIG.connectionGuides.vera.connections}</p>
            </div>
          </div>
        )}

        {/* Tab 4: Email, CRM, Analytics (Page 17) */}
        {activeGuide === 3 && (
          <div className="bg-white/[0.05] border border-white/15 rounded-2xl p-7 lg:p-9 space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-[#EAF0FF] px-2 py-0.5 rounded">
                CONNECTION GUIDE 4 OF 5
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-1">
                {SITE_CONFIG.connectionGuides.emailCrm.title}
              </h3>
              <p className="text-sm text-[#EAF0FF]/90">
                Recommended approaches for forms, corporate mailboxes, analytics, and CRM records.
              </p>
            </div>

            {/* Table from Page 17 */}
            <div className="overflow-x-auto bg-white/[0.03] border border-white/15 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-xs font-bold uppercase tracking-wider text-white">
                    <th className="py-3 px-4 w-1/4">Need</th>
                    <th className="py-3 px-4 w-1/3">Recommended approach</th>
                    <th className="py-3 px-4">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                  {SITE_CONFIG.connectionGuides.emailCrm.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-bold text-white align-top">
                        {row.need}
                      </td>
                      <td className="py-3 px-4 text-[#EAF0FF]/90 align-top">
                        {row.recommended}
                      </td>
                      <td className="py-3 px-4 text-[#EAF0FF]/70 align-top">
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tracking rules */}
            <div className="bg-white/[0.04] p-5 rounded-xl border border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                Before adding any tracking
              </h4>
              <ul className="space-y-1.5 text-xs text-[#EAF0FF]/85">
                {SITE_CONFIG.connectionGuides.emailCrm.advisoryRules.map(
                  (r, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
                      <span>{r}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        )}

        {/* Tab 5: Launch Checklist & Hosting (Page 18) */}
        {activeGuide === 4 && (
          <div className="bg-white/[0.05] border border-white/15 rounded-2xl p-7 lg:p-9 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-[#EAF0FF] px-2 py-0.5 rounded">
                  CONNECTION GUIDE 5 OF 5
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-1">
                  {SITE_CONFIG.connectionGuides.hosting.title}
                </h3>
                <p className="text-sm text-[#EAF0FF]/90">
                  {SITE_CONFIG.connectionGuides.hosting.domainText}
                </p>
              </div>

              {/* Progress counter */}
              <div className="bg-[#0D2137] px-4 py-2.5 rounded-xl border border-white/15 flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs text-[#EAF0FF]/70">Launch Readiness</div>
                  <div className="text-lg font-bold text-white">
                    {completedCount} of {totalChecklist} Passed
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-[#1D4ED8] flex items-center justify-center font-bold text-xs text-white">
                  {checklistPercent}%
                </div>
              </div>
            </div>

            {/* Hosting specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                  Hosting Target
                </div>
                <p className="text-xs text-[#EAF0FF]/85 leading-relaxed">
                  {SITE_CONFIG.connectionGuides.hosting.hostingText}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                  Domain & SSL Routing
                </div>
                <p className="text-xs text-[#EAF0FF]/85 leading-relaxed">
                  {SITE_CONFIG.connectionGuides.hosting.domainText}
                </p>
              </div>
            </div>

            {/* Interactive 10-Item Launch Checklist from Page 18 */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white mb-3">
                Pre-Publication Launch Checklist
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SITE_CONFIG.connectionGuides.hosting.checklist.map((item) => {
                  const isChecked = !!checklistState[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleChecklist(item.id)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? "bg-emerald-950/20 border-emerald-500/40 text-white"
                          : "bg-white/[0.03] border-white/10 text-[#EAF0FF]/70 hover:bg-white/[0.06]"
                      }`}
                    >
                      <button className="mt-0.5 shrink-0 focus:outline-none">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-400" />
                        )}
                      </button>
                      <div>
                        <div
                          className={`text-sm font-medium ${
                            isChecked ? "text-white" : "text-[#EAF0FF]/85"
                          }`}
                        >
                          {item.text}
                        </div>
                        <div className="text-[10px] text-[#EAF0FF]/50 uppercase tracking-wider mt-0.5">
                          Category: {item.category}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-xs text-[#EAF0FF]/70 italic pt-2">
              {SITE_CONFIG.connectionGuides.hosting.footerNote}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

