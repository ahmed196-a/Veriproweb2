"use client";

import React, { useState } from "react";
import { ChevronDown, Search, Mail, HelpCircle } from "lucide-react";
import { SITE_CONFIG, FaqItem } from "@/config/site";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "General",
    "Software & Vera",
    "Pricing & Placement",
    "Legal & Compliance",
  ];

  const filteredFaqs = SITE_CONFIG.faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="faq" className="bg-[#14304F] text-[#EAF0FF] py-20 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Header */}
        <div className="text-center mb-4">
          <span className="text-xs font-bold tracking-widest text-[#EAF0FF] uppercase opacity-90">
            FAQ
          </span>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Questions we hear most
          </h2>
          <p className="text-base sm:text-lg text-[#EAF0FF]/90">
            Clear answers about early access, data privacy, placement terms, and Vera AI boundaries.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-3.5 text-[#EAF0FF]/50" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/[0.07] border border-white/20 text-white placeholder-[#EAF0FF]/40 text-sm focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#1D4ED8] text-white"
                    : "bg-white/[0.05] text-[#EAF0FF]/80 hover:bg-white/[0.1]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white/[0.05] border border-white/15 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#EAF0FF]/70 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#EAF0FF]/90 leading-relaxed border-t border-white/10">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-[11px] font-semibold text-[#1D4ED8] bg-[#EAF0FF] px-2 py-0.5 rounded inline-block">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-[#EAF0FF]/60 text-sm">
              No questions found matching your search. Try another query or reach out directly.
            </div>
          )}
        </div>

        {/* Footer Note (Page 10) */}
        <div className="mt-12 text-center text-sm text-[#EAF0FF]/80">
          Questions not answered here?{" "}
          <a
            href={`mailto:${SITE_CONFIG.email}?subject=Question%20about%20VeriPro`}
            className="text-white font-bold underline hover:text-white/80 inline-flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5 text-[#1D4ED8]" />
            {SITE_CONFIG.email}
          </a>
        </div>
      </div>
    </section>
  );
};

