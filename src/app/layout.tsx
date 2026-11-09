import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veriprotech.com"),
  title: "VeriPro Technologies | Trusted professional transformation.",
  description:
    "VeriPro Tech partners with small and mid-sized businesses to simplify operations, leverage technology and build strong foundations for sustainable growth. Business Advisory, AI Automation, Digital Operations & Software.",
  keywords: [
    "VeriPro",
    "VeriPro Technologies",
    "VeriBook",
    "VeriBill",
    "VeriHR",
    "Vera AI",
    "Business Automation",
    "Professional Transformation",
    "Small Business Advisory",
  ],
  authors: [{ name: "VeriPro Technologies Inc." }],
  openGraph: {
    title: "VeriPro Technologies | Trusted professional transformation.",
    description: "Enabling businesses to transform, grow and lead.",
    url: "https://veriprotech.com",
    siteName: "VeriPro Technologies",
    images: [
      {
        url: "/images/veripro-logo-large.png",
        width: 1570,
        height: 537,
        alt: "VeriPro Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#14304F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#1F2937]">
        {children}
      </body>
    </html>
  );
}
