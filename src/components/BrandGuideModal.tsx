"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Palette,
  CheckCircle2,
  XCircle,
  Eye,
  Type,
  Maximize2,
  Layers,
  Sparkles,
} from "lucide-react";

interface BrandGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandGuideModal: React.FC<BrandGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"colors" | "typography" | "logo" | "components">("colors");

  if (!isOpen) return null;

  const colorPalette = [
    {
      name: "Deep navy",
      hex: "#14304F",
      use: "Headings, dark sections, footer",
      textColor: "text-white",
      sampleBg: "bg-[#14304F]",
    },
    {
      name: "Action blue",
      hex: "#1D4ED8",
      use: "Buttons, links, active states",
      textColor: "text-white",
      sampleBg: "bg-[#1D4ED8]",
    },
    {
      name: "Soft off-white",
      hex: "#F8FAFC",
      use: "Cards and light panels",
      textColor: "text-[#1F2937]",
      sampleBg: "bg-[#F8FAFC]",
      border: true,
    },
    {
      name: "Dark slate",
      hex: "#1F2937",
      use: "Main body text",
      textColor: "text-white",
      sampleBg: "bg-[#1F2937]",
    },
    {
      name: "Cool grey",
      hex: "#475569",
      use: "Supporting text on white",
      textColor: "text-white",
      sampleBg: "bg-[#475569]",
    },
    {
      name: "Light blue tint",
      hex: "#EAF0FF",
      use: "Highlighted panels, text on navy",
      textColor: "text-[#14304F]",
      sampleBg: "bg-[#EAF0FF]",
      border: true,
    },
  ];

  const contrastPairings = [
    {
      pairing: "Navy text on white",
      ratio: "13.4 : 1",
      result: "Passes AA and AAA",
      status: "pass",
    },
    {
      pairing: "Dark slate body on white",
      ratio: "14.7 : 1",
      result: "Passes AA and AAA",
      status: "pass",
    },
    {
      pairing: "Cool grey on white or off-white",
      ratio: "7.6 : 1 / 7.2 : 1",
      result: "Passes AA",
      status: "pass",
    },
    {
      pairing: "White on action blue",
      ratio: "6.7 : 1",
      result: "Passes AA",
      status: "pass",
    },
    {
      pairing: "Light tint on navy",
      ratio: "11.8 : 1",
      result: "Passes AA and AAA",
      status: "pass",
    },
    {
      pairing: "Cool grey on navy",
      ratio: "1.8 : 1",
      result: "Fails. Do not use.",
      status: "fail",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl h-[700px] max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-[#14304F] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1D4ED8] flex items-center justify-center text-white">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">
                Brand & Theme Guidelines (Pages 25 & 26)
              </h3>
              <p className="text-xs text-[#EAF0FF]/80">
                Official specifications for colour balance, accessible contrast, typography, and logo clearance
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#EAF0FF]/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-[#F8FAFC] px-6 gap-2 text-sm font-semibold">
          <button
            onClick={() => setActiveTab("colors")}
            className={`py-3 px-3 border-b-2 flex items-center gap-2 transition-all ${
              activeTab === "colors"
                ? "border-[#1D4ED8] text-[#1D4ED8]"
                : "border-transparent text-[#475569] hover:text-[#14304F]"
            }`}
          >
            <Palette className="w-4 h-4" />
            Colour & Theme (p.25)
          </button>

          <button
            onClick={() => setActiveTab("typography")}
            className={`py-3 px-3 border-b-2 flex items-center gap-2 transition-all ${
              activeTab === "typography"
                ? "border-[#1D4ED8] text-[#1D4ED8]"
                : "border-transparent text-[#475569] hover:text-[#14304F]"
            }`}
          >
            <Type className="w-4 h-4" />
            Typography & Rhythm (p.26)
          </button>

          <button
            onClick={() => setActiveTab("logo")}
            className={`py-3 px-3 border-b-2 flex items-center gap-2 transition-all ${
              activeTab === "logo"
                ? "border-[#1D4ED8] text-[#1D4ED8]"
                : "border-transparent text-[#475569] hover:text-[#14304F]"
            }`}
          >
            <Maximize2 className="w-4 h-4" />
            Logo Usage & Clear Space (p.26)
          </button>

          <button
            onClick={() => setActiveTab("components")}
            className={`py-3 px-3 border-b-2 flex items-center gap-2 transition-all ${
              activeTab === "components"
                ? "border-[#1D4ED8] text-[#1D4ED8]"
                : "border-transparent text-[#475569] hover:text-[#14304F]"
            }`}
          >
            <Layers className="w-4 h-4" />
            Components & Focus (p.26)
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 min-h-0 p-6 overflow-y-auto space-y-6">
          {activeTab === "colors" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-[#14304F] mb-1">
                  The VeriPro Palette & Balance of Colour
                </h4>
                <p className="text-xs text-[#475569]">
                  About 60% light backgrounds, 30% navy and text, 10% action blue. Blue marks what to click; use it sparingly.
                </p>
              </div>

              {/* Swatches Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {colorPalette.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-xl border border-slate-200 overflow-hidden shadow-xs"
                  >
                    <div
                      className={`h-16 ${c.sampleBg} ${c.textColor} flex items-end p-2.5 font-mono text-xs font-bold ${
                        c.border ? "border-b border-slate-200" : ""
                      }`}
                    >
                      {c.hex}
                    </div>
                    <div className="p-3 bg-white">
                      <div className="font-bold text-[#14304F] text-xs">
                        {c.name}
                      </div>
                      <div className="text-[11px] text-[#475569] mt-0.5">
                        {c.use}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Accessible Pairings Table */}
              <div>
                <h4 className="text-sm font-bold text-[#14304F] uppercase tracking-wider mb-3">
                  Accessible Pairings (WCAG Contrast, Measured)
                </h4>

                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-[#F8FAFC] border-b border-slate-200 text-[#14304F] font-bold uppercase">
                      <tr>
                        <th className="py-2.5 px-3">Pairing</th>
                        <th className="py-2.5 px-3">Ratio</th>
                        <th className="py-2.5 px-3">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {contrastPairings.map((p, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-2.5 px-3 font-medium text-[#1F2937]">
                            {p.pairing}
                          </td>
                          <td className="py-2.5 px-3 font-mono font-bold text-[#14304F]">
                            {p.ratio}
                          </td>
                          <td className="py-2.5 px-3">
                            {p.status === "pass" ? (
                              <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                {p.result}
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded">
                                <XCircle className="w-3.5 h-3.5" />
                                {p.result}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Rules Callout */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 text-xs space-y-1.5 text-[#1F2937]">
                <div className="font-bold text-[#14304F]">Palette Rules:</div>
                <p>• Use the light tint (<code>#EAF0FF</code>), not cool grey, for supporting text on navy.</p>
                <p>• Never place text on a colour not listed here without checking its contrast.</p>
                <p>• Status colours (green for confirmed, amber for warnings) are functional only. Do not use them as brand colours.</p>
                <p>• Do not use the teal, purple or green from older brochure artwork on the website.</p>
              </div>
            </div>
          )}

          {activeTab === "typography" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-[#14304F] mb-1">
                  Typography & Section Rhythm (Page 26)
                </h4>
                <p className="text-xs text-[#475569]">
                  Type choices, hierarchy, and section rhythm that keeps the website consistent.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC] space-y-2">
                  <div className="font-bold text-[#14304F] uppercase tracking-wider text-[11px]">
                    Font Families & Weights
                  </div>
                  <p><strong>Primary Typeface:</strong> Inter (open-source, SIL Open Font License).</p>
                  <p><strong>Fallbacks:</strong> system-ui, Segoe UI, Roboto, Arial.</p>
                  <p><strong>Weights:</strong> 400 for body, 600 for labels, 700 to 800 for headings.</p>
                  <p><strong>Sizes:</strong> Body 16px on the web; line height at 1.5 or more for comfortable readability.</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC] space-y-2">
                  <div className="font-bold text-[#14304F] uppercase tracking-wider text-[11px]">
                    Section Rhythm Pattern
                  </div>
                  <p className="leading-relaxed">
                    Sections alternate between <strong>White</strong> and <strong>Navy (#14304F)</strong>. Keep this pattern when adding pages, so the site reads as one design.
                  </p>
                  <div className="flex gap-2 pt-2">
                    <span className="px-2 py-1 bg-white border border-slate-300 rounded font-semibold text-[10px]">
                      Light Section
                    </span>
                    <span className="px-2 py-1 bg-[#14304F] text-white rounded font-semibold text-[10px]">
                      Navy Section
                    </span>
                    <span className="px-2 py-1 bg-white border border-slate-300 rounded font-semibold text-[10px]">
                      Light Section
                    </span>
                  </div>
                </div>
              </div>

              {/* Eyebrow Label Demonstration */}
              <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-4">
                <div className="text-xs font-bold text-[#14304F]">
                  Eyebrow Label Rules:
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg">
                  <span className="text-xs font-bold tracking-widest text-[#1D4ED8] uppercase">
                    SAMPLE EYEBROW LABEL ON WHITE BACKGROUND
                  </span>
                  <div className="text-lg font-bold text-[#14304F] mt-1">
                    Heading on White with Blue Eyebrow
                  </div>
                </div>
                <div className="p-4 bg-[#14304F] rounded-lg">
                  <span className="text-xs font-bold tracking-widest text-[#EAF0FF] uppercase">
                    SAMPLE EYEBROW LABEL ON NAVY BACKGROUND
                  </span>
                  <div className="text-lg font-bold text-white mt-1">
                    Heading on Navy with Light Tint Eyebrow
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "logo" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-[#14304F] mb-1">
                  Logo Usage & Clear Space (Page 26)
                </h4>
                <p className="text-xs text-[#475569]">
                  Exact rules for deploying the VeriPro Technologies logo on light and dark surfaces.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Light background logo */}
                <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#14304F]">
                    Light Surface Version (Navy text + Blue tick)
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center min-h-[100px]">
                    <div className="relative w-48 h-12">
                      <Image
                        src="/images/veripro-logo-light-bg.png"
                        alt="VeriPro Light Logo"
                        fill
                        sizes="192px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-[#475569]">
                    Used on White and Soft Off-White (#F8FAFC) backgrounds.
                  </p>
                </div>

                {/* Dark background logo */}
                <div className="p-6 rounded-xl border border-slate-700 bg-[#14304F] space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#EAF0FF]">
                    Dark Surface Version (White text + Blue tick)
                  </div>
                  <div className="p-4 bg-[#0D2137] border border-white/10 rounded-lg flex items-center justify-center min-h-[100px]">
                    <div className="relative w-48 h-12">
                      <Image
                        src="/images/veripro-logo-dark-bg.png"
                        alt="VeriPro Dark Logo"
                        fill
                        sizes="192px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-[#EAF0FF]/80">
                    Used on Deep Navy (#14304F) and dark sections. Never use the light logo on navy!
                  </p>
                </div>
              </div>

              {/* Logo Rules List */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 text-xs text-[#1F2937] space-y-2">
                <div className="font-bold text-[#14304F]">Rules from Page 26:</div>
                <p>• <strong>Use supplied logo files only:</strong> Do not redraw, recolour, stretch, or add effects.</p>
                <p>• <strong>Clear space:</strong> Keep clear space around the logo equal to the height of the "v".</p>
                <p>• <strong>Screen scale:</strong> Minimum width on screen is <strong>160px</strong>. In print: 40mm.</p>
                <p>• <strong>Legal text:</strong> The logo reads TECHNOLOGIES; the full legal name <em>VeriPro Technologies Inc.</em> appears in the footer and legal text.</p>
              </div>
            </div>
          )}

          {activeTab === "components" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-[#14304F] mb-1">
                  Components & Accessibility Focus (Page 26)
                </h4>
                <p className="text-xs text-[#475569]">
                  Button styling, card specifications, and mandatory WCAG 2.2 AA interactive outlines.
                </p>
              </div>

              {/* Buttons and focus demo */}
              <div className="p-5 border border-slate-200 rounded-xl bg-white space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#14304F]">
                  Button Hierarchy
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="px-5 py-2.5 rounded-lg bg-[#1D4ED8] text-white text-xs font-semibold hover:bg-[#1e40af]">
                    Primary Button (Blue bg, White text)
                  </button>

                  <button className="px-5 py-2.5 rounded-lg border-2 border-[#14304F] text-[#14304F] text-xs font-semibold hover:bg-slate-50">
                    Secondary on Light (Navy outline)
                  </button>

                  <div className="p-2 bg-[#14304F] rounded-lg">
                    <button className="px-5 py-2 rounded-lg border border-white text-white text-xs font-semibold hover:bg-white/10">
                      Secondary on Navy (White outline)
                    </button>
                  </div>
                </div>
              </div>

              {/* Status Tags */}
              <div className="p-5 border border-slate-200 rounded-xl bg-[#F8FAFC] space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#14304F]">
                  Mandatory Status Tags (Page 26)
                </div>
                <p className="text-xs text-[#475569]">
                  Use exactly these three labels across all marketing and product specifications:
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded text-xs font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                    EARLY ACCESS
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-bold uppercase bg-slate-200 text-slate-800 border border-slate-300">
                    PLANNED
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-bold uppercase bg-blue-100 text-blue-800 border border-blue-300">
                    IN VERIBOOK
                  </span>
                </div>
              </div>

              {/* Focus Outline Requirement */}
              <div className="p-5 border-2 border-[#1D4ED8] rounded-xl bg-blue-50/50 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  WCAG 2.2 AA Focus Requirement
                </div>
                <p className="text-xs text-[#1F2937] leading-relaxed">
                  <strong>Focus Rule:</strong> A visible 3px blue outline (<code>outline: 3px solid #1D4ED8; outline-offset: 2px;</code>) is applied to every interactive element (buttons, links, inputs, checkboxes) on keyboard tab navigation.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

