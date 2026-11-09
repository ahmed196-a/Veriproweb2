import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, ShieldCheck, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | VeriPro Technologies",
  description:
    "VeriPro Technologies Inc. Privacy Policy. Information collection, data retention, customer choices, and non-sale of personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[#1F2937] flex flex-col">
      {/* Top Bar */}
      <header className="border-b border-slate-200 py-4 px-6 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="relative w-40 h-10 block">
            <Image
              src="/images/veripro-logo-light-bg.png"
              alt="VeriPro Technologies"
              fill
              className="object-contain object-left"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14304F] hover:text-[#1D4ED8]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12">
        <div className="mb-8 border-b border-slate-200 pb-6">
          <span className="text-xs font-bold tracking-widest text-[#1D4ED8] uppercase">
            LEGAL · PAGE 12
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#14304F] mt-2 mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#475569] italic">
            Updated November 2026. VeriPro Technologies Inc. (&quot;we&quot;) operates this website. Draft: counsel review required before publication.
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[#1F2937]">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#14304F] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#1D4ED8]" />
              What we collect
            </h2>
            <p className="text-[#475569]">
              Information you send us by email or the contact form, such as your name, email address and message. We do not use advertising cookies on this site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#14304F]">How we use it</h2>
            <p className="text-[#475569]">
              To reply to you, provide the services you ask about, and keep records of our correspondence. We do not sell personal data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#14304F]">Sharing and retention</h2>
            <p className="text-[#475569]">
              We share information only with service providers who help us run our business, or where the law requires. We keep it only as long as needed for these purposes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#14304F]">Your choices</h2>
            <p className="text-[#475569]">
              You can ask us to access, correct or delete your information by emailing{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-[#1D4ED8] underline font-semibold"
              >
                {SITE_CONFIG.email}
              </a>
              . This policy may change, and the date above will show when.
            </p>
          </section>

          <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 text-xs sm:text-sm text-[#475569] mt-8">
            <strong>Privacy questions or data requests:</strong> Reach out directly to{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-[#1D4ED8] font-bold underline"
            >
              {SITE_CONFIG.email}
            </a>
            . We aim to reply within one business day.
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 px-6 text-center text-xs text-[#475569] bg-[#F8FAFC]">
        © 2026 VeriPro Technologies Inc. All rights reserved. · Version 1.4 · November 2026
      </footer>
    </div>
  );
}
