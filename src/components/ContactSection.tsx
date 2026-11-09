"use client";

import React, { useState } from "react";
import {
  Mail,
  Calendar,
  Globe,
  Clock,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface ContactSectionProps {
  onOpenBooking: () => void;
  bookingUrl: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenBooking,
  bookingUrl,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("VeriBook");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Enquiry: ${service} - from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nWork Email: ${email}\nInterested in: ${service}\n\nContext & Details:\n${message}\n\n---\nSent from veriprotech.com website form`
    );

    // Page 11: "The form opens your email app with the message ready to send."
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopyFormatted = () => {
    const text = `To: ${SITE_CONFIG.email}\nSubject: Enquiry: ${service} - from ${name}\n\nName: ${name}\nEmail: ${email}\nTopic: ${service}\nMessage:\n${message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Header */}
        <div className="mb-4">
          <span className="text-xs font-bold tracking-widest text-[#1D4ED8] uppercase">
            BOOK A CALL
          </span>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14304F] tracking-tight mb-4">
            Tell us where work is slowing down
          </h2>
          <p className="text-lg text-[#1F2937]">
            Book a free 30-minute discovery call. No pitch deck. We name the clearest next step, and say so if that step is not us.
          </p>
        </div>

        {/* Contact Info & Enquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Details & Ways to reach us */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Details Card */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-7 shadow-xs">
              <h3 className="text-lg font-bold text-[#14304F] mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#1D4ED8]" />
                Contact details
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-[#475569] font-medium">Email</div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-bold text-[#14304F] hover:text-[#1D4ED8] hover:underline"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-[#475569] font-medium">Website</div>
                    <span className="font-bold text-[#14304F]">
                      {SITE_CONFIG.domain}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-[#475569] font-medium">Response SLA</div>
                    <span className="font-semibold text-[#14304F]">
                      {SITE_CONFIG.responseTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ways to reach us (Page 11) */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-7 shadow-xs">
              <h3 className="text-lg font-bold text-[#14304F] mb-4">
                Ways to reach us
              </h3>

              <div className="space-y-3 text-sm text-[#1F2937]">
                <div
                  onClick={onOpenBooking}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-[#1D4ED8] transition-colors"
                >
                  <div className="w-5 h-5 rounded-md border-2 border-[#1D4ED8] bg-blue-50 flex items-center justify-center text-[#1D4ED8]">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-[#14304F]">
                    Book a discovery call (30 min)
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
                  <div className="w-5 h-5 rounded-md border-2 border-[#1D4ED8] bg-blue-50 flex items-center justify-center text-[#1D4ED8]">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-[#14304F]">
                    Send the enquiry form (opens your email app)
                  </span>
                </div>

                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Discovery%20call%20request`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-[#1D4ED8] transition-colors"
                >
                  <div className="w-5 h-5 rounded-md border-2 border-[#1D4ED8] bg-blue-50 flex items-center justify-center text-[#1D4ED8]">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-[#14304F]">
                    Email directly with the subject line that matches your need
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form (Page 11 Table) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#14304F] mb-1">
                Enquiry form
              </h3>
              <p className="text-xs text-[#475569]">
                Fills and opens your email application with the message ready to send.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#14304F] uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-[#1F2937] text-sm focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#14304F] uppercase tracking-wider mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-[#1F2937] text-sm focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#14304F] uppercase tracking-wider mb-1.5">
                  What can we help with? *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-[#1F2937] text-sm focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
                >
                  <option value="VeriBook">VeriBook (Booking & Vera AI)</option>
                  <option value="AI assistant">AI Assistant & Chatbot</option>
                  <option value="Automation">Workflow & Process Automation</option>
                  <option value="Custom software">Custom Software & Digital Ops</option>
                  <option value="Advisory">Business Advisory & Transformation</option>
                  <option value="Placement referral">Placement Referral & Resource Augmentation</option>
                  <option value="Other">Other Requirement</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#14304F] uppercase tracking-wider mb-1.5">
                  Tell us a little more (Context for first conversation) *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Briefly describe your team, current bottlenecks, or desired outcomes..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-[#1F2937] text-sm focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none resize-y"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1D4ED8] text-white font-semibold text-sm hover:bg-[#1e40af] shadow transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Open in Email Client
                </button>

                <button
                  type="button"
                  onClick={handleCopyFormatted}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-300 bg-white text-xs font-semibold text-[#14304F] hover:bg-slate-50 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copied ? "Copied to Clipboard!" : "Copy Formatted Text"}
                </button>
              </div>

              {submitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>
                    Your email client should have opened. If not, click "Copy Formatted Text" and email directly to <strong>{SITE_CONFIG.email}</strong>.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

