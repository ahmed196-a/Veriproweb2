"use client";

import React, { useState } from "react";
import {
  X,
  Shield,
  FileText,
  Lock,
  Scale,
  Award,
  DollarSign,
  AlertTriangle,
  History,
  CheckCircle2,
  Clock,
  ExternalLink,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface GovernanceAndLegalHubProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export const GovernanceAndLegalHub: React.FC<GovernanceAndLegalHubProps> = ({
  isOpen,
  onClose,
  initialTab = "privacy",
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl h-[780px] max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#14304F] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1D4ED8] flex items-center justify-center text-white">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">
                Governance, Legal & Compliance Hub
              </h3>
              <p className="text-xs text-[#EAF0FF]/80">
                Official documentation, privacy disclosures, tax frameworks, and open item registers
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

        {/* Tab Strip */}
        <div className="flex border-b border-slate-200 bg-[#F8FAFC] px-4 overflow-x-auto text-xs font-semibold gap-1 py-1">
          {[
            { id: "privacy", label: "Privacy Policy (p.12)", icon: Lock },
            { id: "terms", label: "Terms of Use (p.13)", icon: FileText },
            { id: "compliance", label: "Compliance & WCAG (p.22)", icon: Scale },
            { id: "tax", label: "Tax Guidance (p.23)", icon: DollarSign },
            { id: "disclaimers", label: "Disclaimers (p.24)", icon: AlertTriangle },
            { id: "security", label: "Security & Transport (p.19)", icon: Shield },
            { id: "copyright", label: "Copyright & IP (p.20)", icon: Award },
            { id: "trademark", label: "Trademark (p.21)", icon: Scale },
            { id: "governance", label: "Open Items & History (p.27)", icon: History },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-3 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#14304F] text-white shadow-xs"
                    : "text-[#475569] hover:bg-slate-200/60"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 min-h-0 p-6 sm:p-8 overflow-y-auto space-y-6 text-[#1F2937]">
          {/* 1. Privacy Policy (Page 12) */}
          {activeTab === "privacy" && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  LEGAL · PAGE 12
                </span>
                <h3 className="text-2xl font-bold text-[#14304F] mt-1 mb-2">
                  Privacy Policy
                </h3>
                <p className="text-xs text-[#475569] italic">
                  Updated November 2026. VeriPro Technologies Inc. (&quot;we&quot;) operates this website. Draft: counsel review required before publication.
                </p>
              </div>

              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <h4 className="font-bold text-[#14304F] mb-1">What we collect</h4>
                  <p className="text-[#475569]">
                    Information you send us by email or the contact form, such as your name, email address and message. We do not use advertising cookies on this site.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#14304F] mb-1">How we use it</h4>
                  <p className="text-[#475569]">
                    To reply to you, provide the services you ask about, and keep records of our correspondence. We do not sell personal data.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#14304F] mb-1">Sharing and retention</h4>
                  <p className="text-[#475569]">
                    We share information only with service providers who help us run our business, or where the law requires. We keep it only as long as needed for these purposes.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#14304F] mb-1">Your choices</h4>
                  <p className="text-[#475569]">
                    You can ask us to access, correct or delete your information by emailing{" "}
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#1D4ED8] underline font-medium">
                      {SITE_CONFIG.email}
                    </a>
                    . This policy may change, and the date above will show when.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs text-[#475569]">
                Privacy questions:{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#1D4ED8] font-bold">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          )}

          {/* 2. Terms of Use (Page 13) */}
          {activeTab === "terms" && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  LEGAL · PAGE 13
                </span>
                <h3 className="text-2xl font-bold text-[#14304F] mt-1 mb-2">
                  Terms of Use
                </h3>
                <p className="text-xs text-[#475569] italic">
                  Draft: counsel review required before publication.
                </p>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-[#475569]">
                <p>
                  This website is for general information about VeriPro Technologies Inc. and its products and services. Product descriptions, availability and pricing may change and do not form an offer.
                </p>
                <p>
                  Plans marked early access are provided under the written terms agreed at sign-up. All payments are non-refundable, including annual plans.
                </p>
                <p>
                  Content on this site is owned by us or our licensors and may not be copied without permission. The site is provided as is, and to the extent the law allows we are not liable for losses from its use.
                </p>
                <p>
                  Services we provide are governed by the written agreement between us and you.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs text-[#475569]">
                Questions:{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#1D4ED8] font-bold">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          )}

          {/* 3. Compliance Matrix & WCAG Statement (Page 22) */}
          {activeTab === "compliance" && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  COMPLIANCE · PAGE 22
                </span>
                <h3 className="text-2xl font-bold text-[#14304F] mt-1 mb-2">
                  Compliance: Privacy, Messaging, Accessibility & Payments
                </h3>
                <p className="text-xs text-[#475569]">
                  Requirements that apply to this website and the services behind it. Confirm each one with counsel before launch.
                </p>
              </div>

              {/* Published Accessibility Statement */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs space-y-1">
                <div className="font-bold text-[#14304F] uppercase tracking-wider">
                  Accessibility Statement (Publish)
                </div>
                <p className="text-[#1F2937] leading-relaxed">
                  {SITE_CONFIG.accessibilityStatement}
                </p>
              </div>

              {/* Compliance Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#F8FAFC] border-b border-slate-200 text-[#14304F] font-bold uppercase">
                    <tr>
                      <th className="py-2.5 px-3 w-1/4">Area</th>
                      <th className="py-2.5 px-3 w-1/3">What applies</th>
                      <th className="py-2.5 px-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {SITE_CONFIG.compliance.map((c, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="py-2.5 px-3 font-bold text-[#14304F] align-top">
                          {c.area}
                        </td>
                        <td className="py-2.5 px-3 text-[#475569] align-top">
                          {c.whatApplies}
                        </td>
                        <td className="py-2.5 px-3 text-[#1F2937] font-medium align-top">
                          {c.action}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 4. Tax Guidance (Page 23) */}
          {activeTab === "tax" && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  TAX · PAGE 23
                </span>
                <h3 className="text-2xl font-bold text-[#14304F] mt-1 mb-2">
                  Tax: US Federal, State and International
                </h3>
                <p className="text-xs text-[#475569]">
                  Software and services are taxed differently in each place. Set up registration before the first sale.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                {/* US Tax */}
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 space-y-3">
                  <h4 className="font-bold text-[#14304F] uppercase tracking-wider text-sm">
                    United States Requirements
                  </h4>
                  {SITE_CONFIG.taxGuidance.us.map((t, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="font-bold text-[#14304F]">{t.topic}</div>
                      <p className="text-[#475569] leading-relaxed">{t.detail}</p>
                    </div>
                  ))}
                </div>

                {/* International Tax */}
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 space-y-3">
                  <h4 className="font-bold text-[#14304F] uppercase tracking-wider text-sm">
                    Outside the United States
                  </h4>
                  {SITE_CONFIG.taxGuidance.international.map((t, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="font-bold text-[#14304F]">{t.topic}</div>
                      <p className="text-[#475569] leading-relaxed">{t.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical steps */}
              <div className="p-4 bg-slate-100 rounded-xl text-xs space-y-2">
                <div className="font-bold text-[#14304F]">Practical steps:</div>
                <ul className="list-disc pl-5 space-y-1 text-[#475569]">
                  {SITE_CONFIG.taxGuidance.practicalSteps.map((st, idx) => (
                    <li key={idx}>{st}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 5. Legal Disclaimers (Page 24) */}
          {activeTab === "disclaimers" && (
            <div className="space-y-6 max-w-3xl text-xs sm:text-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  LEGAL DISCLAIMERS · PAGE 24
                </span>
                <h3 className="text-2xl font-bold text-[#14304F] mt-1 mb-2">
                  Legal Disclaimers and Website Guidelines
                </h3>
                <p className="text-xs text-[#475569] italic">
                  Standard wording to place on the website, in emails and in the product. Counsel must approve the final text.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <h4 className="font-bold text-[#14304F] mb-1">General website disclaimer</h4>
                  <p className="text-[#475569]">{SITE_CONFIG.legalDisclaimers.general}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <h4 className="font-bold text-[#14304F] mb-1">AI assistant disclaimer</h4>
                  <p className="text-[#475569]">{SITE_CONFIG.legalDisclaimers.aiAssistant}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <h4 className="font-bold text-[#14304F] mb-1">Pricing and early-access disclaimer</h4>
                  <p className="text-[#475569]">{SITE_CONFIG.legalDisclaimers.pricing}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <h4 className="font-bold text-[#14304F] mb-1">Case studies, results and testimonials</h4>
                  <p className="text-[#475569]">{SITE_CONFIG.legalDisclaimers.caseStudies}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <h4 className="font-bold text-[#14304F] mb-1">Third-party links and tools</h4>
                  <p className="text-[#475569]">{SITE_CONFIG.legalDisclaimers.thirdParty}</p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 space-y-1">
                  <h4 className="font-bold text-[#14304F] mb-1">Guidelines for everything we publish</h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-[#475569]">
                    {SITE_CONFIG.legalDisclaimers.publishingRules.map((rule, idx) => (
                      <li key={idx}>{rule}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 6. Security & Transport (Page 19) */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  SECURITY · PAGE 19
                </span>
                <h3 className="text-2xl font-bold text-[#14304F] mt-1 mb-2">
                  Security
                </h3>
                <p className="text-xs text-[#475569]">
                  Protect customer data, keep the site online, and be able to prove what happened.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-2">
                  <div className="font-bold text-[#14304F] uppercase tracking-wider">
                    Website and transport
                  </div>
                  <ul className="list-disc pl-4 space-y-1.5 text-[#475569]">
                    {SITE_CONFIG.security.websiteAndTransport.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-2">
                  <div className="font-bold text-[#14304F] uppercase tracking-wider">
                    Accounts and access
                  </div>
                  <ul className="list-disc pl-4 space-y-1.5 text-[#475569]">
                    {SITE_CONFIG.security.accountsAndAccess.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-2">
                  <div className="font-bold text-[#14304F] uppercase tracking-wider">
                    Data and vendors
                  </div>
                  <ul className="list-disc pl-4 space-y-1.5 text-[#475569]">
                    {SITE_CONFIG.security.dataAndVendors.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-2">
                  <div className="font-bold text-[#14304F] uppercase tracking-wider">
                    Monitoring and incidents
                  </div>
                  <ul className="list-disc pl-4 space-y-1.5 text-[#475569]">
                    {SITE_CONFIG.security.monitoringAndIncidents.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 7. Copyright & IP (Page 20) */}
          {activeTab === "copyright" && (
            <div className="space-y-6 max-w-3xl text-xs sm:text-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  INTELLECTUAL PROPERTY · PAGE 20
                </span>
                <h3 className="text-2xl font-bold text-[#14304F] mt-1 mb-2">
                  Copyright and Content Ownership
                </h3>
                <p className="text-xs text-[#475569]">
                  Know who owns every word, image, font and line of code on the site, and keep a record.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <div className="font-bold text-[#14304F] mb-1">What we own and must protect:</div>
                  <p className="text-[#475569]">
                    Website text, layout, the Vera example conversation, product descriptions and documentation. The VeriPro wordmark and the VP monogram. Keep a signed assignment from any designer who made them.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <div className="font-bold text-[#14304F] mb-1">What we must license or credit:</div>
                  <p className="text-[#475569]">
                    <strong>Fonts:</strong> Inter is used under the SIL Open Font License. Keep the licence notice with any copy you host.<br />
                    <strong>Icons:</strong> Use only licensed or open-source icons (Lucide / MIT).<br />
                    <strong>Open-source code:</strong> Keep MIT/Apache 2.0 notices.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <div className="font-bold text-[#14304F] mb-1">Protecting our content:</div>
                  <p className="text-[#475569]">
                    Add copyright notice in the footer: <code>© 2026 VeriPro Technologies Inc. All rights reserved.</code> Register important works with US Copyright Office.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 8. Trademark (Page 21) */}
          {activeTab === "trademark" && (
            <div className="space-y-6 max-w-3xl text-xs sm:text-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  TRADEMARKS · PAGE 21
                </span>
                <h3 className="text-2xl font-bold text-[#14304F] mt-1 mb-2">
                  Name, Brand and Trademark Clearance
                </h3>
                <p className="text-xs text-[#475569]">
                  Confirm that VeriPro, VeriBook, VeriBill, VeriHR and Vera can be used and protected before wider marketing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-2 text-xs">
                <div className="font-bold text-[#14304F]">Clearance Steps (1 to 5):</div>
                <p>1. Search the USPTO database (classes 9, 35, and 42).</p>
                <p>2. Search state and common-law records.</p>
                <p>3. Check domains and handles: veriprotech.com and variants.</p>
                <p>4. Commission formal clearance opinion from trademark attorney.</p>
                <p>5. File federal applications early to secure priority.</p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                <strong>Brand Housekeeping:</strong> Use the ™ symbol for unregistered marks and ® only after official registration. Never use ® early.
              </div>
            </div>
          )}

          {/* 9. Document Control & Open Items (Page 27) */}
          {activeTab === "governance" && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  DOCUMENT CONTROL · PAGE 27
                </span>
                <h3 className="text-2xl font-bold text-[#14304F] mt-1 mb-2">
                  Open Items Before Publication & Version History
                </h3>
                <p className="text-xs text-[#475569]">
                  Comprehensive 18-point pre-publication governance register and revision history.
                </p>
              </div>

              {/* Open items table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#F8FAFC] border-b border-slate-200 text-[#14304F] font-bold uppercase">
                    <tr>
                      <th className="py-2.5 px-3">Item</th>
                      <th className="py-2.5 px-3 w-1/4">Owner</th>
                      <th className="py-2.5 px-3 w-1/4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {SITE_CONFIG.openItems.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="py-2 px-3 font-medium text-[#1F2937]">
                          {item.item}
                        </td>
                        <td className="py-2 px-3 text-[#475569]">
                          {item.owner}
                        </td>
                        <td className="py-2 px-3">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                              item.status.includes("Confirm")
                                ? "bg-amber-100 text-amber-800"
                                : "bg-blue-100 text-[#1D4ED8]"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Version History Table */}
              <div>
                <h4 className="font-bold text-sm text-[#14304F] uppercase tracking-wider mb-2">
                  Document History (v1.0 to v1.4)
                </h4>
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-[#F8FAFC] border-b border-slate-200 text-[#14304F] font-bold uppercase">
                      <tr>
                        <th className="py-2 px-3 w-20">Version</th>
                        <th className="py-2 px-3 w-28">Date</th>
                        <th className="py-2 px-3">Change Summary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-[#475569]">
                      {SITE_CONFIG.docHistory.map((h, idx) => (
                        <tr key={idx}>
                          <td className="py-2 px-3 font-bold text-[#14304F]">{h.version}</td>
                          <td className="py-2 px-3">{h.date}</td>
                          <td className="py-2 px-3">{h.change}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

