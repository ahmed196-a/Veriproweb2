"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Bot,
  User,
  Send,
  Sparkles,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  HelpCircle,
} from "lucide-react";

interface InteractiveVeraSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: "vera" | "user";
  text: string;
  time: string;
  badge?: string;
  badgeType?: "success" | "warning" | "info" | "danger";
}

export const InteractiveVeraSimulator: React.FC<InteractiveVeraSimulatorProps> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "vera",
      text: "Hello! I am Vera, the AI assistant for VeriPro Tech. I can help you check appointment openings, book a consultation, or answer questions about our services. How can I help you today?",
      time: "Just now",
      badge: "AI Disclosure Active (Rule #3)",
      badgeType: "info",
    },
  ]);
  const [input, setInput] = useState("");
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false);
  const [optedOut, setOptedOut] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const userText = (textToSend || input).trim();
    if (!userText) return;

    const userMsg: Message = {
      sender: "user",
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");

    // Simulate Vera's strict built-in rules (Page 16 of Guidelines)
    setTimeout(() => {
      const lower = userText.toLowerCase();

      // Rule: STOP ends messages on that channel immediately
      if (lower === "stop" || lower.includes("unsubscribe") || lower.includes("opt out")) {
        setOptedOut(true);
        setMessages((prev) => [
          ...prev,
          {
            sender: "vera",
            text: "STOP received. You have been unsubscribed and automated messages have ended immediately on this channel. To resume at any time, reply START.",
            time: "Just now",
            badge: "STOP Command Enforced (Rule #3)",
            badgeType: "danger",
          },
        ]);
        return;
      }

      if (optedOut) {
        if (lower === "start") {
          setOptedOut(false);
          setMessages((prev) => [
            ...prev,
            {
              sender: "vera",
              text: "Welcome back! Messaging has been resumed. How can I assist you?",
              time: "Just now",
            },
          ]);
          return;
        } else {
          return; // Halted
        }
      }

      // Rule: Vera refuses medical decisions & passes to staff
      if (
        lower.includes("medical") ||
        lower.includes("doctor") ||
        lower.includes("pain") ||
        lower.includes("cough") ||
        lower.includes("fever") ||
        lower.includes("medication") ||
        lower.includes("symptom") ||
        lower.includes("prescription")
      ) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "vera",
            text: "I am an AI assistant and I cannot provide medical advice or evaluate clinical symptoms. For medical inquiries, I have transferred this request directly to our clinical care staff. If you are experiencing an emergency, please call 911 immediately.",
            time: "Just now",
            badge: "Medical Decision Refused (Rule #2 - HIPAA Safe)",
            badgeType: "warning",
          },
        ]);
        return;
      }

      // Rule: Vera refuses legal decisions & passes to staff
      if (
        lower.includes("legal") ||
        lower.includes("lawyer") ||
        lower.includes("contract") ||
        lower.includes("sue") ||
        lower.includes("lawsuit") ||
        lower.includes("liability")
      ) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "vera",
            text: "I cannot provide legal advice or interpret legal terms. I can schedule an intake consultation with one of our licensed attorneys, or hand this conversation directly to our legal team. Would you like me to book an intake consultation?",
            time: "Just now",
            badge: "Legal Decision Refused (Rule #2 - Ethics Safe)",
            badgeType: "warning",
          },
        ]);
        return;
      }

      // Rule: Vera refuses direct refund decisions & passes to staff
      if (lower.includes("refund") || lower.includes("money back")) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "vera",
            text: "As per our published policy, plans are non-refundable. I am not authorized to issue refunds directly, but I have flagged this conversation for a management review by our team at info@veriprotech.com.",
            time: "Just now",
            badge: "Refund Decision Escalated (Rule #2)",
            badgeType: "warning",
          },
        ]);
        return;
      }

      // Explicit confirmation workflow
      if (awaitingConfirmation && (lower === "yes" || lower === "confirm" || lower.includes("yes please"))) {
        setAwaitingConfirmation(false);
        setMessages((prev) => [
          ...prev,
          {
            sender: "vera",
            text: "Confirmed! Your 30-minute Discovery Call with Jordan is booked for Thursday at 2:30 PM ($65, no deposit). A calendar invite and reminder have been sent to your email. Reply RESCHEDULE if you ever need to adjust.",
            time: "Just now",
            badge: "Explicit Confirmation Received (Rule #1)",
            badgeType: "success",
          },
        ]);
        return;
      }

      if (
        lower.includes("book") ||
        lower.includes("appointment") ||
        lower.includes("thursday") ||
        lower.includes("schedule") ||
        lower.includes("discovery call")
      ) {
        setAwaitingConfirmation(true);
        setMessages((prev) => [
          ...prev,
          {
            sender: "vera",
            text: "I checked our scheduling system: Jordan has an opening this Thursday at 2:30 PM for a 30-minute Discovery Call ($65, no deposit required). Would you like me to book this for you? Please reply YES to confirm.",
            time: "Just now",
            badge: "Awaiting Explicit Confirmation (Rule #1)",
            badgeType: "info",
          },
        ]);
        return;
      }

      // Default safe response
      setMessages((prev) => [
        ...prev,
        {
          sender: "vera",
          text: `Thank you for reaching out regarding "${userText}". I only read facts directly loaded from our verified scheduling and CRM systems. Would you like to schedule a 30-minute discovery call with our team?`,
          time: "Just now",
          badge: "Facts-Only Verification",
          badgeType: "info",
        },
      ]);
    }, 400);
  };

  const resetChat = () => {
    setOptedOut(false);
    setAwaitingConfirmation(false);
    setMessages([
      {
        sender: "vera",
        text: "Hello! I am Vera, the AI assistant for VeriPro Tech. I can help you check appointment openings, book a consultation, or answer questions about our services. How can I help you today?",
        time: "Just now",
        badge: "AI Disclosure Active (Rule #3)",
        badgeType: "info",
      },
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl h-[650px] max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#14304F] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1D4ED8] flex items-center justify-center text-white">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base">Vera AI Assistant</h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold px-2 py-0.5 rounded uppercase">
                  Live Test Sandbox
                </span>
              </div>
              <p className="text-xs text-[#EAF0FF]/80">
                Connection Guide 3 of 5 · Strict boundary enforcement
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={resetChat}
              className="p-1.5 rounded-lg text-[#EAF0FF]/80 hover:text-white hover:bg-white/10 transition-colors"
              title="Reset Conversation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#EAF0FF]/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Scenario Triggers */}
        <div className="bg-[#F8FAFC] border-b border-slate-200 p-2.5 flex items-center gap-1.5 overflow-x-auto text-xs whitespace-nowrap">
          <span className="text-[#475569] font-bold text-[11px] px-1">
            Test Scenarios:
          </span>
          <button
            onClick={() => handleSend("Do you have appointments this Thursday?")}
            className="px-2.5 py-1 rounded-md bg-white border border-slate-300 text-[#14304F] hover:bg-slate-50 font-medium"
          >
            📅 Booking Workflow
          </button>
          <button
            onClick={() => handleSend("YES")}
            className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 font-bold"
          >
            ✓ Reply "YES"
          </button>
          <button
            onClick={() => handleSend("What medication should I take for back pain?")}
            className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-300 text-amber-800 hover:bg-amber-100 font-medium"
          >
            ⚕️ Medical Refusal
          </button>
          <button
            onClick={() => handleSend("Can you review this legal liability contract?")}
            className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-300 text-amber-800 hover:bg-amber-100 font-medium"
          >
            ⚖️ Legal Refusal
          </button>
          <button
            onClick={() => handleSend("I want a full refund")}
            className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-300 text-amber-800 hover:bg-amber-100 font-medium"
          >
            💰 Refund Refusal
          </button>
          <button
            onClick={() => handleSend("STOP")}
            className="px-2.5 py-1 rounded-md bg-red-50 border border-red-300 text-red-800 hover:bg-red-100 font-bold"
          >
            🛑 "STOP" Command
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 min-h-0 p-4 overflow-y-auto space-y-3.5 bg-slate-50/50">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                m.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div className="flex items-center gap-1.5 text-[11px] text-[#475569] mb-1">
                {m.sender === "user" ? (
                  <>
                    <span>You</span>
                    <User className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    <Bot className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    <span className="font-semibold text-[#14304F]">Vera AI</span>
                  </>
                )}
                <span>· {m.time}</span>
              </div>

              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  m.sender === "user"
                    ? "bg-[#14304F] text-white rounded-tr-none shadow-xs"
                    : "bg-white text-[#1F2937] border border-slate-200 rounded-tl-none shadow-xs"
                }`}
              >
                <p>{m.text}</p>

                {m.badge && (
                  <div
                    className={`mt-2 pt-1.5 border-t border-slate-100 text-[11px] font-bold flex items-center gap-1 ${
                      m.badgeType === "success"
                        ? "text-emerald-700"
                        : m.badgeType === "warning"
                        ? "text-amber-700"
                        : m.badgeType === "danger"
                        ? "text-red-700"
                        : "text-[#1D4ED8]"
                    }`}
                  >
                    <ShieldAlert className="w-3.5 h-3.5" />
                    {m.badge}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200">
          {optedOut ? (
            <div className="p-3 bg-red-50 text-red-800 text-xs rounded-xl flex items-center justify-between">
              <span>Messaging stopped (STOP received). Type START to resume.</span>
              <button
                onClick={() => handleSend("START")}
                className="px-3 py-1 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
              >
                START
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask Vera about appointments, pricing, or test a command..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-[#1D4ED8] text-white disabled:opacity-50 hover:bg-[#1e40af] transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="flex justify-between items-center text-[11px] text-[#475569] mt-2 px-1">
            <span>Every action is logged for the business owner.</span>
            <span className="font-medium text-[#14304F]">
              Human takeover available 24/7
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

