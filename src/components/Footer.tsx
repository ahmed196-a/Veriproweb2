"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Globe,
  Shield,
  FileText,
  Palette,
  CheckSquare,
  ArrowUp,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface FooterProps {
  onOpenLegalHub: (tab?: string) => void;
  onOpenBrandGuide: () => void;
  onOpenChecklist: () => void;
  onOpenVeraDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegalHub,
  onOpenBrandGuide,
  onOpenChecklist,
  onOpenVeraDemo,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#14304F] text-[#EAF0FF] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand, Tagline, Legal Entity */}
          <div className="lg:col-span-2 space-y-4">
            {/* Dark logo on navy background as required by Page 26 */}
            <div className="relative w-48 sm:w-56 h-12">
              <Image
                src="/images/veripro-logo-dark-bg.png"
                alt="VeriPro Technologies"
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-contain object-left"
              />
            </div>

            <p className="text-sm font-semibold text-white">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-xs text-[#EAF0FF]/80 leading-relaxed max-w-sm">
              {SITE_CONFIG.subtitle}
            </p>

            <p className="text-xs text-[#EAF0FF]/70 leading-relaxed max-w-sm pt-2">
              {SITE_CONFIG.name} is a US-registered technology company serving clients globally. We deliver measurable impact through advisory, AI automation, digital operations, and proprietary software.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#EAF0FF]/80">
              <Mail className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="hover:text-white hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
              <span>·</span>
              <Globe className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span>{SITE_CONFIG.domain}</span>
            </div>
          </div>

          {/* Col 3: Software & Offerings */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Software & Offerings
            </h4>
            <ul className="space-y-2 text-xs text-[#EAF0FF]/80">
              <li>
                <a href="#software" className="hover:text-white hover:underline">
                  VeriBook (Early Access)
                </a>
              </li>
              <li>
                <a href="#software" className="hover:text-white hover:underline">
                  VeriBill (Planned)
                </a>
              </li>
              <li>
                <a href="#software" className="hover:text-white hover:underline">
                  VeriHR (Planned)
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenVeraDemo}
                  className="hover:text-white hover:underline text-left inline-flex items-center gap-1 text-[#EAF0FF]"
                >
                  <Sparkles className="w-3 h-3 text-[#1D4ED8]" />
                  Vera AI Assistant Demo
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:underline">
                  AI & Business Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:underline">
                  Digital Operations & CRM
                </a>
              </li>
              <li>
                <a href="#placement" className="hover:text-white hover:underline">
                  5% Placement Referral
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Technical & Launch Playbooks */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Connection Guides
            </h4>
            <ul className="space-y-2 text-xs text-[#EAF0FF]/80">
              <li>
                <a href="#guides" className="hover:text-white hover:underline">
                  1. Booking & BOOKING_URL
                </a>
              </li>
              <li>
                <a href="#guides" className="hover:text-white hover:underline">
                  2. Payments & Refunds (Stripe/Square)
                </a>
              </li>
              <li>
                <a href="#guides" className="hover:text-white hover:underline">
                  3. Vera AI 4 Non-Switchable Rules
                </a>
              </li>
              <li>
                <a href="#guides" className="hover:text-white hover:underline">
                  4. Email, SPF/DKIM & Analytics
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenChecklist}
                  className="hover:text-white hover:underline text-left inline-flex items-center gap-1"
                >
                  <CheckSquare className="w-3 h-3 text-[#1D4ED8]" />
                  5. Pre-Launch 10-Item Checklist
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBrandGuide}
                  className="hover:text-white hover:underline text-left inline-flex items-center gap-1"
                >
                  <Palette className="w-3 h-3 text-[#1D4ED8]" />
                  Colour & Contrast Checker
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Governance & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Governance & Legal
            </h4>
            <ul className="space-y-2 text-xs text-[#EAF0FF]/80">
              <li>
                <button
                  onClick={() => onOpenLegalHub("privacy")}
                  className="hover:text-white hover:underline text-left"
                >
                  Privacy Policy (p.12)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalHub("terms")}
                  className="hover:text-white hover:underline text-left"
                >
                  Terms of Use (p.13)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalHub("compliance")}
                  className="hover:text-white hover:underline text-left"
                >
                  Compliance & WCAG 2.2 AA (p.22)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalHub("tax")}
                  className="hover:text-white hover:underline text-left"
                >
                  Tax: US & International (p.23)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalHub("disclaimers")}
                  className="hover:text-white hover:underline text-left"
                >
                  Legal Disclaimers (p.24)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalHub("security")}
                  className="hover:text-white hover:underline text-left"
                >
                  Security Architecture (p.19)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalHub("governance")}
                  className="hover:text-white hover:underline text-left font-bold text-[#EAF0FF]"
                >
                  Open Items Register (p.27)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Accessibility statement, and back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAF0FF]/70">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 VeriPro Technologies Inc. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span>Version 1.4 · November 2026</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-[#EAF0FF]/90 font-medium">
              WCAG 2.2 Level AA Compliant
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

