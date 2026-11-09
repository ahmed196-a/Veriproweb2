"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { PricingSection } from "@/components/PricingSection";
import { PlacementSection } from "@/components/PlacementSection";
import { ServicesSection } from "@/components/ServicesSection";
import { EngagementModelSection } from "@/components/EngagementModelSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { ConnectionGuidesSection } from "@/components/ConnectionGuidesSection";
import { Footer } from "@/components/Footer";
import { InteractiveVeraSimulator } from "@/components/InteractiveVeraSimulator";
import { BrandGuideModal } from "@/components/BrandGuideModal";
import { GovernanceAndLegalHub } from "@/components/GovernanceAndLegalHub";
import { LaunchChecklistModal } from "@/components/LaunchChecklistModal";
import { BookingModal } from "@/components/BookingModal";
import { SITE_CONFIG } from "@/config/site";

export default function HomePage() {
  const [bookingUrl, setBookingUrl] = useState<string>(SITE_CONFIG.bookingUrl);
  const [isVeraOpen, setIsVeraOpen] = useState(false);
  const [isBrandGuideOpen, setIsBrandGuideOpen] = useState(false);
  const [isLegalHubOpen, setIsLegalHubOpen] = useState(false);
  const [legalInitialTab, setLegalInitialTab] = useState<string>("privacy");
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenLegalHub = (tab: string = "privacy") => {
    setLegalInitialTab(tab);
    setIsLegalHubOpen(true);
  };

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleOpenGuide = (guideKey: string) => {
    const el = document.getElementById("guides");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F2937]">
      {/* Navigation Bar */}
      <Navbar
        onOpenVeraDemo={() => setIsVeraOpen(true)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenBrandGuide={() => setIsBrandGuideOpen(true)}
        onOpenLegalHub={handleOpenLegalHub}
        bookingUrl={bookingUrl}
      />

      <main className="flex-1">
        {/* Section 1: Hero & About (White / Light Background) */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onOpenVeraDemo={() => setIsVeraOpen(true)}
        />

        {/* Section 2: Products & Behavior (Deep Navy Background #14304F) */}
        <ProductsSection
          onOpenVeraDemo={() => setIsVeraOpen(true)}
          onOpenGuide={handleOpenGuide}
        />

        {/* Section 3: Pricing (Standard & Bespoke) (White / Light Background) */}
        <PricingSection
          onOpenBooking={handleOpenBooking}
          onOpenGuide={handleOpenGuide}
        />

        {/* Section 4: Placement Referral & Resource Augmentation (Deep Navy Background #14304F) */}
        <PlacementSection />

        {/* Section 5: Services (Our Key Offerings) (White / Light Background) */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Section 6: Engagement Model (Assess, Advise, Transform, Manage) (Deep Navy Background #14304F) */}
        <EngagementModelSection onOpenBooking={handleOpenBooking} />

        {/* Section 7: Solutions by Business Type (White / Light Background) */}
        <SolutionsSection onOpenBooking={handleOpenBooking} />

        {/* Section 8: FAQ (Deep Navy Background #14304F) */}
        <FaqSection />

        {/* Section 9: Contact and Booking (White / Light Background) */}
        <ContactSection
          onOpenBooking={handleOpenBooking}
          bookingUrl={bookingUrl}
        />

        {/* Section 10: Step-by-Step Connection Guides & Launch Checklist (Deep Navy Background #14304F) */}
        <ConnectionGuidesSection
          onOpenVeraDemo={() => setIsVeraOpen(true)}
          bookingUrl={bookingUrl}
          onUpdateBookingUrl={setBookingUrl}
        />
      </main>

      {/* Footer (Deep Navy Background #14304F) */}
      <Footer
        onOpenLegalHub={handleOpenLegalHub}
        onOpenBrandGuide={() => setIsBrandGuideOpen(true)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenVeraDemo={() => setIsVeraOpen(true)}
      />

      {/* Interactive Modals & Sandboxes */}
      <InteractiveVeraSimulator
        isOpen={isVeraOpen}
        onClose={() => setIsVeraOpen(false)}
      />

      <BrandGuideModal
        isOpen={isBrandGuideOpen}
        onClose={() => setIsBrandGuideOpen(false)}
      />

      <GovernanceAndLegalHub
        isOpen={isLegalHubOpen}
        onClose={() => setIsLegalHubOpen(false)}
        initialTab={legalInitialTab}
      />

      <LaunchChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        bookingUrl={bookingUrl}
      />
    </div>
  );
}
