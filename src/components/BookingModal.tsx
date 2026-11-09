"use client";

import React, { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  User,
  Mail,
  CheckCircle,
  ExternalLink,
  Shield,
  HelpCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingUrl: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  bookingUrl,
}) => {
  const [selectedDay, setSelectedDay] = useState("Thursday");
  const [selectedTime, setSelectedTime] = useState("2:30 PM");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    if (bookingUrl && bookingUrl.trim().length > 0) {
      window.open(bookingUrl, "_blank", "noopener,noreferrer");
      onClose();
      return;
    }

    // Default email flow as per Page 14:
    const subject = encodeURIComponent(`Discovery call request - ${name}`);
    const body = encodeURIComponent(
      `Hello VeriPro Tech Team,\n\nI would like to request a 30-minute discovery call.\n\nPreferred Slot: ${selectedDay} at ${selectedTime}\nName: ${name}\nEmail: ${email}\n\nThank you!`
    );
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#14304F] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1D4ED8] flex items-center justify-center text-white">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base">Book a Free Discovery Call</h3>
              <p className="text-xs text-[#EAF0FF]/80">
                30 minutes · No pitch deck · Concrete next steps
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#EAF0FF]/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {booked ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-[#14304F]">
                Request Generated!
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed max-w-sm mx-auto">
                Your email client was opened with your booking request for{" "}
                <strong>
                  {selectedDay} at {selectedTime}
                </strong>
                . We will confirm your calendar invite within one business day.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-lg bg-[#14304F] text-white text-xs font-semibold hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleConfirm} className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-[#14304F] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                <span>
                  30-minute discovery call to evaluate automation and operating bottleneck.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#14304F] uppercase tracking-wider mb-1.5">
                  Choose Preferred Day
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {["Wednesday", "Thursday", "Friday"].map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setSelectedDay(d)}
                      className={`py-2 px-3 rounded-lg border font-semibold transition-all ${
                        selectedDay === d
                          ? "bg-[#14304F] text-white border-[#14304F]"
                          : "bg-white text-[#475569] border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#14304F] uppercase tracking-wider mb-1.5">
                  Available Slots (Jordan & Team)
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {["10:00 AM", "2:30 PM", "4:00 PM"].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`py-2 px-3 rounded-lg border font-semibold transition-all ${
                        selectedTime === t
                          ? "bg-[#1D4ED8] text-white border-[#1D4ED8]"
                          : "bg-white text-[#475569] border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#14304F] uppercase tracking-wider mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:border-[#1D4ED8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#14304F] uppercase tracking-wider mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:border-[#1D4ED8] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#1D4ED8] text-white font-semibold text-sm hover:bg-[#1e40af] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Calendar className="w-4 h-4" />
                  {bookingUrl ? "Continue to Scheduling Page" : "Send Booking Request via Email"}
                </button>
                <p className="text-[11px] text-center text-[#475569] mt-2">
                  Follows Connection Guide 1: Opens configured BOOKING_URL or pre-filled email.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

