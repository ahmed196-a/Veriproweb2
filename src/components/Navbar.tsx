"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Calendar,
  Sparkles,
  CheckSquare,
  Palette,
  FileText,
  Shield,
  ChevronDown,
  Layers,
  ArrowRight,
  HelpCircle,
  Briefcase,
  Sliders,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface NavbarProps {
  onOpenVeraDemo: () => void;
  onOpenChecklist: () => void;
  onOpenBrandGuide: () => void;
  onOpenLegalHub: (tab?: string) => void;
  bookingUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenVeraDemo,
  onOpenChecklist,
  onOpenBrandGuide,
  onOpenLegalHub,
  bookingUrl,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleBookingClick = () => {
    if (bookingUrl && bookingUrl.trim().length > 0) {
      window.open(bookingUrl, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${SITE_CONFIG.email}?subject=Discovery%20call%20request`;
    }
  };

  // Primary links visible on standard PC screens
  const primaryLinks = [
    { name: "About", href: "#about", hideOnLg: true },
    { name: "Software", href: "#software", hideOnLg: false },
    { name: "Pricing", href: "#pricing", hideOnLg: false },
    { name: "Services", href: "#services", hideOnLg: false },
    { name: "Solutions", href: "#solutions", hideOnLg: false },
    { name: "FAQ", href: "#faq", hideOnLg: false },
    { name: "Guides", href: "#guides", hideOnLg: true },
  ];

  // Secondary items placed under clean "More ▾" dropdown on PC to prevent overflowing
  const secondaryLinks = [
    {
      name: "About VeriPro Tech",
      href: "#about",
      desc: "US-registered technology company & our 4 core values",
      showOnLgOnly: true,
    },
    {
      name: "Connection Guides (1 to 5)",
      href: "#guides",
      desc: "Step-by-step technical playbooks & launch checklist",
      showOnLgOnly: true,
    },
    {
      name: "Placement Referral (5%)",
      href: "#placement",
      desc: "5% annual pay placement & augmentation terms",
      showOnLgOnly: false,
    },
    {
      name: "Engagement Model",
      href: "#model",
      desc: "Assess, Advise, Transform, Manage framework",
      showOnLgOnly: false,
    },
    {
      name: "Contact & Enquiry",
      href: "#contact",
      desc: "Free 30-minute discovery call & mailbox",
      showOnLgOnly: false,
    },
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#14304F] text-[#EAF0FF] text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 select-none">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#1D4ED8] text-white shrink-0">
              {SITE_CONFIG.version}
            </span>
            <span className="text-white/80 text-[11px] sm:text-xs truncate">
              {SITE_CONFIG.docStatus} · US-registered technology company
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs">
            <button
              onClick={() => onOpenLegalHub("governance")}
              className="text-[#EAF0FF] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3 h-3 text-[#1D4ED8]" />
              <span className="hidden sm:inline">Open Items</span>
              <span className="sm:hidden">Items</span> (18)
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={onOpenBrandGuide}
              className="text-[#EAF0FF] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Palette className="w-3 h-3 text-[#1D4ED8]" />
              <span className="hidden sm:inline">Brand & Contrast</span>
              <span className="sm:hidden">Theme</span>
            </button>
            <span className="text-white/30 hidden md:inline">|</span>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-[#EAF0FF] hover:underline hidden md:inline"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Responsive Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2 lg:gap-4">
          {/* Logo with strict brand sizing (min 160px on screen) */}
          <Link
            href="#"
            className="flex items-center shrink-0 focus:outline-none"
            aria-label="VeriPro Technologies - Home"
          >
            <div className="relative w-40 sm:w-48 lg:w-48 h-11 sm:h-12 flex items-center">
              <Image
                src="/images/veripro-logo-light-bg.png"
                alt="VeriPro Technologies Logo"
                fill
                sizes="(max-width: 640px) 160px, 192px"
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links - Sized and grouped perfectly for PC screens */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
            {primaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[13px] xl:text-[14px] font-medium text-[#475569] hover:text-[#14304F] px-2 xl:px-2.5 py-1.5 rounded-md hover:bg-slate-100 transition-colors whitespace-nowrap ${
                  link.hideOnLg ? "hidden xl:inline-block" : "inline-block"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* "More ▾" Dropdown for secondary pages */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`text-[13px] xl:text-[14px] font-medium px-2 xl:px-2.5 py-1.5 rounded-md flex items-center gap-1 transition-colors ${
                  moreDropdownOpen
                    ? "bg-slate-100 text-[#14304F]"
                    : "text-[#475569] hover:text-[#14304F] hover:bg-slate-100"
                }`}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    moreDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] border-b border-slate-100">
                    Additional Sections
                  </div>
                  {secondaryLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMoreDropdownOpen(false)}
                      className={`block px-3.5 py-2 text-xs text-[#1F2937] hover:bg-slate-50 transition-colors ${
                        item.showOnLgOnly ? "xl:hidden" : ""
                      }`}
                    >
                      <div className="font-semibold text-[#14304F]">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-[#475569] mt-0.5">
                        {item.desc}
                      </div>
                    </a>
                  ))}

                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <button
                      onClick={() => {
                        setMoreDropdownOpen(false);
                        onOpenLegalHub("privacy");
                      }}
                      className="w-full text-left px-3.5 py-2 text-xs font-semibold text-[#14304F] hover:bg-slate-50 flex items-center justify-between"
                    >
                      <span>Legal, Privacy & Compliance</span>
                      <Shield className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions / CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-2.5 shrink-0">
            <button
              onClick={onOpenVeraDemo}
              className="inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-2 text-xs font-semibold rounded-lg bg-[#EAF0FF] text-[#14304F] hover:bg-blue-100 transition-colors whitespace-nowrap"
              title="Test Vera AI Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span className="hidden xl:inline">Test</span> Vera AI
            </button>

            <button
              onClick={onOpenChecklist}
              className="inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-2 text-xs font-semibold rounded-lg border border-slate-300 text-[#14304F] hover:bg-slate-100 transition-colors whitespace-nowrap"
              title="Pre-Publication Launch Checklist"
            >
              <CheckSquare className="w-3.5 h-3.5 text-[#1D4ED8]" />
              Checklist
            </button>

            <button
              onClick={handleBookingClick}
              className="inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 text-xs xl:text-sm font-semibold rounded-lg bg-[#1D4ED8] text-white hover:bg-[#1e40af] shadow-xs transition-all whitespace-nowrap cursor-pointer shrink-0"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Book a Call</span>
            </button>
          </div>

          {/* Tablet/Mobile Action & Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenVeraDemo}
              className="px-2.5 py-1.5 text-xs font-semibold rounded bg-[#EAF0FF] text-[#14304F] flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-[#1D4ED8]" />
              Vera
            </button>

            <button
              onClick={handleBookingClick}
              className="px-3 py-1.5 text-xs font-semibold rounded bg-[#1D4ED8] text-white whitespace-nowrap"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-slate-100 text-xs">
              {[...primaryLinks, ...secondaryLinks].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 font-medium text-[#1F2937] hover:bg-slate-100 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVeraDemo();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#EAF0FF] text-[#14304F] font-semibold text-sm"
              >
                <Sparkles className="w-4 h-4 text-[#1D4ED8]" />
                Test Vera AI Assistant Simulator
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChecklist();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-300 text-[#14304F] font-semibold text-sm"
              >
                <CheckSquare className="w-4 h-4 text-[#1D4ED8]" />
                10-Point Launch Checklist
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrandGuide();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-200 text-[#1F2937] font-medium text-sm"
              >
                <Palette className="w-4 h-4 text-[#1D4ED8]" />
                Theme & Contrast Guidelines (p.25)
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLegalHub("privacy");
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-200 text-[#1F2937] font-medium text-sm"
              >
                <Shield className="w-4 h-4 text-[#1D4ED8]" />
                Compliance & Legal Hub (p.12-24)
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleBookingClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#1D4ED8] text-white font-semibold text-sm shadow"
              >
                <Calendar className="w-4 h-4" />
                Book Discovery Call (30 min)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
