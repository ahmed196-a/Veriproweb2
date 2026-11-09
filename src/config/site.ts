export interface NavItem {
  name: string;
  href: string;
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ProductItem {
  id: string;
  name: string;
  status: "EARLY ACCESS" | "PLANNED" | "IN VERIBOOK";
  description: string;
  plansOrAction: string;
  actionText: string;
  actionHref?: string;
}

export interface ServiceLine {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  outcome: string;
}

export interface SolutionItem {
  title: string;
  subtitle: string;
  startWith: string;
  complianceNote?: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Software & Vera" | "Pricing & Placement" | "Legal & Compliance";
}

export interface LaunchChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  category: string;
}

export const SITE_CONFIG = {
  name: "VeriPro Technologies Inc.",
  shortName: "VeriPro Tech",
  tagline: "Trusted professional transformation.",
  subtitle: "Enabling businesses to transform, grow and lead.",
  partnerStatement:
    "VeriPro Tech partners with small and mid-sized businesses to simplify operations, leverage technology and build strong foundations for sustainable growth.",
  aboutText:
    "VeriPro Technologies Inc. is a US-registered technology company serving clients globally. We help you build a stronger business, use technology well and deliver the results that matter, through advisory, automation, digital operations and software we build and run ourselves.",
  email: "info@veriprotech.com",
  domain: "veriprotech.com",
  location: "Global reach (US-registered)",
  responseTime: "We aim to reply within one business day.",
  version: "Version 1.4 · November 2026",
  docStatus: "For review before publication",
  
  // Single source of truth for booking link (Page 14 Connection Guide 1)
  // If empty, buttons open an email to info@veriprotech.com with the subject line set for that button.
  bookingUrl: "", // Default empty as per guide

  // WCAG Theme Palette (Page 25)
  colors: {
    deepNavy: "#14304F",
    actionBlue: "#1D4ED8",
    softOffWhite: "#F8FAFC",
    darkSlate: "#1F2937",
    coolGrey: "#475569",
    lightBlueTint: "#EAF0FF",
  },

  values: [
    {
      title: "Trusted",
      description: "We build trust through transparency and reliability.",
      iconName: "ShieldCheck",
    },
    {
      title: "Professional",
      description: "We bring expertise, discipline and integrity.",
      iconName: "Award",
    },
    {
      title: "Innovative",
      description: "We leverage technology and insight to drive transformation.",
      iconName: "Sparkles",
    },
    {
      title: "Results driven",
      description: "We deliver measurable impact and sustainable value.",
      iconName: "TrendingUp",
    },
  ],

  products: [
    {
      id: "veribook",
      name: "VeriBook",
      status: "EARLY ACCESS",
      description:
        "Online booking, deposits and reminders, with Vera answering missed calls and texts and booking them.",
      plansOrAction: "Plans: Standard · Larger requirements (quote)",
      actionText: "Request Early Access",
      actionHref: "mailto:info@veriprotech.com?subject=VeriBook%20Early%20Access%20Request",
    },
    {
      id: "veribill",
      name: "VeriBill",
      status: "PLANNED",
      description:
        "Client records, quotes, invoices and payment history in one place.",
      plansOrAction: "Action: join the list by emailing info@veriprotech.com.",
      actionText: "Join Waitlist",
      actionHref: "mailto:info@veriprotech.com?subject=Join%20Waitlist%20for%20VeriBill",
    },
    {
      id: "verihr",
      name: "VeriHR",
      status: "PLANNED",
      description:
        "Staff records, rosters, time off, certifications and onboarding checklists.",
      plansOrAction: "Action: join the list by emailing info@veriprotech.com.",
      actionText: "Join Waitlist",
      actionHref: "mailto:info@veriprotech.com?subject=Join%20Waitlist%20for%20VeriHR",
    },
    {
      id: "vera",
      name: "Vera",
      status: "IN VERIBOOK",
      description:
        "Our AI assistant. She books, answers and follows up, and never changes anything without a confirmed yes.",
      plansOrAction: "Read: Vera guide · Interactive Simulator Available",
      actionText: "Explore Vera Guide & Demo",
      actionHref: "#vera-demo",
    },
  ] as ProductItem[],

  softwareBehaviorRules: [
    "Every change Vera makes, such as a booking, reschedule or cancellation, needs the customer's explicit confirmation first.",
    "Every action is recorded, so the business owner can review it.",
    "A human can take over any conversation at any time.",
  ],

  pricing: {
    standardMonthly: 10,
    standardAnnual: 100,
    standardAnnualSavings: 20,
    standardAnnualMonthlyEquivalent: "8.33",
    standardFeatures: [
      "Access to VeriPro AI SaaS products",
      "Standard AI usage allowance (to be confirmed)",
      "Email support (to be confirmed)",
    ],
    bespokeFeatures: [
      "More staff, locations or AI usage",
      "Integrations and custom setup",
      "Dedicated onboarding and support",
      "Written quote before you commit",
    ],
    advisoryOfferings: [
      {
        engagement: "Discovery call (30 minutes)",
        price: "Free",
        action: "Book a call",
        actionType: "book",
      },
      {
        engagement: "Launch & Automate",
        price: "Custom quote",
        action: "Request a proposal",
        actionType: "email_proposal",
      },
      {
        engagement: "Build & Scale",
        price: "Project or retainer",
        action: "Talk to an expert",
        actionType: "email_expert",
      },
    ],
    policyNote:
      "All payments are non-refundable, including annual plans. Online checkout is not open yet; we set up each account with you directly. See the payments guide.",
    earlyAccessNote:
      "Prices shown are for early access and must be confirmed before publication.",
  },

  placement: {
    ratePercent: 5,
    summary:
      "Placement referral is 5% of total annual pay, payable by the employer when a referred candidate is hired. It is non-refundable.",
    terms: [
      {
        term: "Placement fee",
        meaning:
          "5% of the candidate's total annual pay, payable by the employer when the candidate is hired.",
      },
      {
        term: "Total annual pay",
        meaning:
          "Annual base salary plus guaranteed cash pay. Excludes equity and discretionary bonuses. (Counsel to confirm the definition.)",
      },
      {
        term: "Refunds",
        meaning: "Non-refundable.",
      },
      {
        term: "Free replacement",
        meaning:
          "If the placed candidate leaves due to attrition within 3 months of start, we provide one free replacement referral.",
      },
      {
        term: "Selection",
        meaning:
          "The replacement and the original referral are subject to the employer selecting the candidate.",
      },
      {
        term: "Referred candidates not selected",
        meaning:
          "The employer may not hire a referred candidate directly within 12 months of referral, unless it pays the prescribed charge.",
      },
      {
        term: "Prescribed charge",
        meaning: "[To be set in the agreement. Not yet defined.]",
      },
    ],
    workedExample: {
      salary: 80000,
      fee: 4000,
      text:
        "A candidate with a total annual pay of $80,000 is hired. The placement fee is 5% × $80,000 = $4,000, payable by the employer and non-refundable. If the candidate leaves for attrition reasons within 3 months, we provide one free replacement referral, subject to the employer's selection.",
    },
    resourceAugmentation:
      "Contract staff (developers, automation specialists, operations staff) are quoted per engagement. Scope, team size, duration, rates and replacement terms are agreed in writing before work starts.",
    counselAdvisory:
      "Before this is offered, counsel should review: the written agreement; the 'prescribed charge'; the 12-month restriction on hiring referred candidates, because no-hire clauses between employers can raise antitrust risk and their enforceability varies by state; state employment-agency licensing and fee rules, since some states regulate placement fees; and any worker-classification issues for contract staff.",
  },

  services: [
    {
      id: "advisory",
      number: "01",
      title: "Business Advisory & Transformation",
      tagline: "Strategy. Structure. Growth.",
      description:
        "Build a stronger business with the right strategy, structure and operating model.",
      features: [
        "Business strategy and planning",
        "Operating model and process improvement",
        "Corporate structuring and governance",
        "Market entry and expansion support",
        "KPI frameworks and performance management",
      ],
      outcome: "Clear direction, efficient operations and scalable growth.",
    },
    {
      id: "automation",
      number: "02",
      title: "AI & Business Automation",
      tagline: "Automate. Intelligent. Efficient.",
      description:
        "Leverage AI and automation to save time, reduce cost and improve accuracy.",
      features: [
        "AI readiness assessment",
        "Workflow and process automation",
        "AI assistants and chatbots",
        "Document and data automation",
        "RPA and intelligent integrations",
        "AI adoption roadmap",
      ],
      outcome: "Smarter workflows, lower cost and higher productivity.",
    },
    {
      id: "operations",
      number: "03",
      title: "Digital Operations & CRM",
      tagline: "Connect. Optimize. Scale.",
      description:
        "Implement and optimize the right digital tools to run your business seamlessly.",
      features: [
        "CRM setup and optimization",
        "Sales pipeline and automation",
        "Dashboards and business reporting",
        "Microsoft 365 / Google Workspace workflows",
        "Tool integrations and data visibility",
        "Ongoing support and optimization",
      ],
      outcome:
        "Better visibility, stronger customer relationships and recurring growth.",
    },
    {
      id: "people",
      number: "04",
      title: "People & Organization Solutions",
      tagline: "People. Process. Performance.",
      description:
        "Build a high-performing organization with the right people, processes and culture.",
      features: [
        "HR policies and process design",
        "Organization structure and roles",
        "Recruitment and onboarding support",
        "Performance management systems",
        "HR technology and transformation",
        "Training and capability development",
      ],
      outcome:
        "Engaged people, stronger culture and sustainable performance.",
    },
  ] as ServiceLine[],

  engagementModel: [
    {
      step: "01",
      title: "Assess",
      description: "Understand your business, challenges and opportunities.",
      icon: "Search",
    },
    {
      step: "02",
      title: "Advise",
      description: "Provide strategic recommendations and a clear roadmap.",
      icon: "Compass",
    },
    {
      step: "03",
      title: "Transform",
      description: "Implement solutions with speed, quality and precision.",
      icon: "Zap",
    },
    {
      step: "04",
      title: "Manage",
      description: "Optimize continuously and deliver ongoing value.",
      icon: "ShieldAlert",
    },
  ],

  clientExpectations: [
    "A discovery call before any proposal.",
    "A written scope, outcome and price before work starts.",
    "Visible progress reports and a named owner.",
    "Results reported in the client's own numbers, monthly.",
  ],

  solutions: [
    {
      title: "Salon, spa and barber owners",
      subtitle: "Fill more chairs and stop losing calls while you work.",
      startWith:
        "VeriBook online booking, deposits and reminders, with Vera answering calls and texts.",
      iconName: "Scissors",
    },
    {
      title: "Doctors, dentists and clinics",
      subtitle: "Calmer front-desk scheduling and reminders.",
      startWith: "Appointment scheduling and reminders through VeriBook.",
      complianceNote:
        "Vera gives no medical advice. Patient data is used only after a healthcare compliance review (HIPAA).",
      iconName: "Stethoscope",
    },
    {
      title: "Lawyers and law firms",
      subtitle: "Consultation booking and client intake.",
      startWith: "Consultation booking and intake forms.",
      complianceNote:
        "Vera gives no legal advice. Confidentiality and ethics review before live use.",
      iconName: "Scale",
    },
    {
      title: "Shop owners and retailers",
      subtitle: "Customers, sales and reporting in one place.",
      startWith: "CRM setup, sales pipeline and dashboards.",
      iconName: "ShoppingBag",
    },
    {
      title: "Small businesses",
      subtitle: "Take repetitive work off the team.",
      startWith: "Business automation, advisory and VeriBook for bookings.",
      iconName: "Building2",
    },
    {
      title: "Freelancers and consultants",
      subtitle: "Look professional and book clients online.",
      startWith: "VeriBook Standard plan for bookings, reminders and deposits.",
      iconName: "Briefcase",
    },
    {
      title: "Home-based businesses",
      subtitle: "Run bookings from your phone.",
      startWith:
        "VeriBook Standard plan, with reminders and Vera answering messages when you are busy.",
      iconName: "Home",
    },
  ] as SolutionItem[],

  whyPartnerPoints: [
    "Executive-level expertise with real business experience.",
    "Practical solutions tailored to your goals and budget.",
    "AI and technology-driven transformation with measurable results.",
    "Agile, transparent and client-focused approach.",
    "Long-term partnership for sustainable success.",
  ],

  faqs: [
    {
      category: "General",
      question: "Can I buy online today?",
      answer:
        "Not yet. Online checkout is not open. Book a call or email info@veriprotech.com and we will set up early access with you directly.",
    },
    {
      category: "Software & Vera",
      question: "What is VeriBook?",
      answer:
        "An appointment platform for small service businesses: online booking, deposits, reminders and an AI assistant, Vera, who answers missed calls and texts and books them.",
    },
    {
      category: "Software & Vera",
      question: "Does the AI act without approval?",
      answer:
        "No. Vera confirms with the customer before booking or changing anything. You can read every conversation and take over at any time.",
    },
    {
      category: "General",
      question: "Do you resell other companies' software?",
      answer:
        "Our own products are sold by us. We can recommend and set up third-party tools. Unless we agree otherwise in writing, those are billed by their providers.",
    },
    {
      category: "Legal & Compliance",
      question: "How is my data handled?",
      answer:
        "We use your information only to respond to you and deliver what you ask for. We do not sell personal data. See the Privacy Policy.",
    },
    {
      category: "Pricing & Placement",
      question: "Can I cancel a plan?",
      answer:
        "Email info@veriprotech.com to cancel. Your access continues until the end of the period you have already paid for. All payments are non-refundable, including annual plans.",
    },
    {
      category: "Pricing & Placement",
      question: "What if I need more than Standard?",
      answer:
        "Larger teams, higher usage and custom work are priced to your requirements. Email info@veriprotech.com for a written quote.",
    },
    {
      category: "Legal & Compliance",
      question: "Do you work with doctors, lawyers or regulated professionals?",
      answer:
        "Yes, for scheduling, reminders and intake. We do not give medical or legal advice, and client or patient data is used only after a compliance review with you.",
    },
    {
      category: "Pricing & Placement",
      question: "How does placement pricing work?",
      answer:
        "Placement referral is 5% of the candidate's total annual pay, payable by the employer when hired, and non-refundable. Replacement and referral rules are in the written agreement.",
    },
    {
      category: "General",
      question: "Do you work outside the US?",
      answer: "Yes. We are US-registered and work with clients globally.",
    },
  ] as FaqItem[],

  connectionGuides: {
    booking: {
      guideNumber: "1 OF 5",
      title: "Booking",
      subtitle:
        'Every "Book" button on the website uses one link. Set it once and all buttons update.',
      steps: [
        "Create a booking page with a scheduling tool. Options include Calendly and Cal.com. Compare cost and features before you choose.",
        "Set the discovery call to 30 minutes, with your availability and a confirmation email.",
        "Copy the public booking link.",
        "Open the website file. Find BOOKING_URL near the bottom of the page script and paste the link between the quotation marks.",
        'Test: click each "Book" button and confirm it opens the booking page in a new tab.',
      ],
      emptyBehavior:
        'Buttons open an email to info@veriprotech.com with the subject line set for that button, such as "Discovery call request."',
      advisory:
        "Before you use a booking tool, confirm its data-handling terms, reminder emails and time zone settings for the US.",
      footerNote:
        "Keep the booking link consistent across website, email and social profiles.",
    },
    payments: {
      guideNumber: "2 OF 5",
      title: "Payments and refunds",
      subtitle:
        "Online checkout is not active. Do not add payment buttons until a processor is connected and tested.",
      policy: [
        "All payments are non-refundable, including annual plans.",
        "Cancellation stops future billing. Access continues to the end of the paid period.",
        "Payment processing, SMS and voice usage beyond plan allowances may be charged separately.",
        "Taxes may apply.",
      ],
      steps: [
        "Choose a payment processor, such as Stripe or Square. Compare US fees, payout schedule, dispute handling and developer support.",
        "Complete business verification and tax setup. Have a finance person confirm the account.",
        "Use the processor's hosted checkout or payment links. Card details must never be stored on the website or in Vera.",
        "Test with the processor's test mode: successful payment, declined card, cancellation and refund records.",
        'Only then add "Pay" or "Subscribe" buttons, and update the pricing page wording.',
      ],
      advisory:
        "Counsel must confirm the non-refund wording, because some jurisdictions and consumer rules limit non-refundable terms. Decide now how disputed charges will be handled.",
      footerNote: "Record every payment and refund with a reference number.",
    },
    vera: {
      guideNumber: "3 OF 5",
      title: "Vera AI assistant",
      subtitle:
        "Vera handles conversations and asks the business systems for facts. She never states prices, times or policies that a system did not return.",
      steps: [
        "Load the business's services, staff, hours, prices and policies into the scheduling system. Vera reads only from that system.",
        "Connect a messaging channel for text and web chat. Connect a phone number for voice if the plan includes it.",
        "Turn on the AI disclosure message, which tells customers they are talking to an AI assistant.",
        "Set the owner's escalation contact, so requests for a person reach staff.",
        "Run a test booking end to end, then a cancellation and a handoff.",
      ],
      rulesCannotBeSwitchedOff: [
        "Vera asks for explicit confirmation before creating, moving, cancelling or charging anything.",
        "Vera refuses medical, legal and refund decisions, and passes them to staff.",
        "STOP ends messages on that channel immediately.",
        "Each business's data is kept separate from every other business's.",
      ],
      connections:
        "Vera connects to a booking system, a payment link service and the staff inbox. Each connection is set up with the business's own account. Ask before connecting any new tool.",
      footerNote: "Give the business owner read access to all conversations.",
    },
    emailCrm: {
      guideNumber: "4 OF 5",
      title: "Email, forms, CRM and analytics",
      rows: [
        {
          need: "Enquiry form",
          recommended: "Today: opens the visitor's email app. Later: a hosted form service.",
          notes: "Hosted forms need consent text and spam protection.",
        },
        {
          need: "Business email",
          recommended: "info@veriprotech.com on your domain's mail service.",
          notes: "Set SPF, DKIM and DMARC so messages are delivered.",
        },
        {
          need: "Customer records",
          recommended: "VeriBill when released; until then, your current CRM.",
          notes: "Avoid two sources of truth for the same client.",
        },
        {
          need: "Analytics",
          recommended: "Privacy-friendly analytics, such as Plausible or Google Analytics 4.",
          notes: "Update the Privacy Policy if you add any tracking.",
        },
        {
          need: "Marketing email",
          recommended: "Consent-based list tool with an unsubscribe link.",
          notes: "US email rules require accurate sender details and opt-out.",
        },
      ],
      advisoryRules: [
        "Update the Privacy Policy and the cookie statement.",
        "Do not add advertising pixels without a decision and counsel review.",
      ],
      footerNote: "Record which tool holds which data.",
    },
    hosting: {
      guideNumber: "5 OF 5",
      title: "Hosting, domain and launch checklist",
      hostingText:
        "The site is one HTML file plus a logo. Any static host works, such as Netlify, Vercel, Cloudflare Pages or your own web server. Upload the review package folder as it is.",
      domainText:
        "Point veriprotech.com to the host, enable HTTPS, and set redirects so www and non-www both work.",
      checklist: [
        { id: "chk-1", text: "Booking link pasted and tested", completed: false, category: "Operations" },
        { id: "chk-2", text: "Standard plan features confirmed", completed: false, category: "Product" },
        { id: "chk-3", text: "Prices confirmed for Standard and larger requirements", completed: false, category: "Leadership" },
        { id: "chk-4", text: "Privacy Policy and Terms reviewed by counsel", completed: false, category: "Legal" },
        { id: "chk-5", text: "Refund wording approved by counsel", completed: false, category: "Legal" },
        { id: "chk-6", text: "Payment processor connected and tested (only if checkout is added)", completed: false, category: "Payments" },
        { id: "chk-7", text: "Contact form and info@veriprotech.com mailbox tested", completed: false, category: "Technical" },
        { id: "chk-8", text: "Every page checked on phone and desktop", completed: false, category: "QA" },
        { id: "chk-9", text: "Links checked: every internal anchor and external link", completed: false, category: "QA" },
        { id: "chk-10", text: "Business information accurate: name, US registration, contact details", completed: false, category: "Operations" },
      ],
      footerNote: "Re-check the checklist before every price or policy change.",
    },
  },

  security: {
    title: "Security",
    subtitle: "Protect customer data, keep the site online, and be able to prove what happened.",
    websiteAndTransport: [
      "Serve every page over HTTPS only. Redirect HTTP to HTTPS and enable HSTS once HTTPS is confirmed working.",
      "Set security headers: Content-Security-Policy, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin, and frame protection (frame-ancestors 'none').",
      "Keep the site static where possible. A static file has far fewer attack points than a database-backed site.",
      "Do not put secrets, API keys or internal URLs in the HTML. Anything in a public file is public.",
    ],
    accountsAndAccess: [
      "Enable multi-factor authentication on the domain registrar, hosting, email, code repository, payment processor and scheduling tool.",
      "Use a password manager and unique passwords. Give each person the least access they need, and remove access when they leave.",
      "Keep one recorded owner for each account. Store recovery codes in a secure vault.",
    ],
    dataAndVendors: [
      "Record every vendor that receives personal data, with its purpose and location. Check each vendor's security and data-processing terms.",
      "Collect only what each form needs. Enquiry form data should be deleted or archived on a set schedule.",
      "Back up the website files and the contact records. Test a restore at least once before launch.",
    ],
    monitoringAndIncidents: [
      "Monitor uptime and certificate expiry. Subscribe to security advisories for the hosting platform and every script library.",
      "Write a short incident plan: who decides, who contacts customers, who contacts regulators, and how evidence is kept.",
      "US states each set their own breach-notification rules, and some other countries do too. Have counsel confirm the deadlines and content before launch.",
    ],
    beforeLaunch: [
      "Run an external vulnerability scan and fix high-risk findings. Repeat after major changes.",
      "Check that the page loads with scripts blocked except the ones you intend, and that no data is sent to unknown domains.",
    ],
  },

  compliance: [
    {
      area: "Privacy (US)",
      whatApplies: "State privacy laws such as California (CCPA/CPRA) and others apply by state and by thresholds.",
      action: "Publish a privacy notice; honour access, deletion and opt-out requests.",
    },
    {
      area: "Privacy (abroad)",
      whatApplies: "GDPR (EU/UK) and similar laws (e.g. Canada, Australia, Brazil) may apply to visitors or clients abroad.",
      action: "Identify a lawful basis, offer a rights contact, and consider a DPA with vendors.",
    },
    {
      area: "Email marketing",
      whatApplies: "CAN-SPAM: accurate sender, subject and a valid postal address, with working opt-out.",
      action: "Add a physical postal address to marketing emails.",
    },
    {
      area: "SMS and calls",
      whatApplies: "TCPA and state rules require documented consent. Quiet hours and opt-out (STOP) apply.",
      action: "Separate transactional and marketing consent. Obtain counsel review.",
    },
    {
      area: "AI assistant",
      whatApplies: "Disclose that the customer is talking to AI. Some states and countries require it for chat and voice.",
      action: "Keep the disclosure on by default; log consent to recording where used.",
    },
    {
      area: "Accessibility",
      whatApplies: "ADA lawsuits target websites. WCAG 2.2 AA is the usual benchmark.",
      action: "Test keyboard use, screen readers, contrast and zoom; publish an accessibility statement.",
    },
    {
      area: "Payments",
      whatApplies: "PCI DSS applies to any card handling. Keep card data with the processor.",
      action: "Use hosted checkout; complete the processor's PCI questionnaire (SAQ A where eligible).",
    },
    {
      area: "Cookies and tracking",
      whatApplies: "Consent banners are needed for non-essential cookies in some regions, notably the EU and UK.",
      action: "Use a consent tool if analytics or marketing pixels are added.",
    },
    {
      area: "Business licensing",
      whatApplies: "Some cities and states require a business licence or registration.",
      action: "Check the state of operation and any industry licences.",
    },
  ],

  accessibilityStatement:
    "VeriPro Technologies aims to meet WCAG 2.2 Level AA. Report accessibility problems to info@veriprotech.com. We aim to respond within five business days.",

  taxGuidance: {
    us: [
      {
        topic: "Income tax",
        detail: "Register the entity type (corporation, LLC or other) with the IRS and each state of operation. Keep books in a recognised accounting system.",
      },
      {
        topic: "Sales tax on SaaS",
        detail: "Many states tax software-as-a-service differently, and some do not tax it at all. Rules depend on the buyer's location and the product's description. Check each state where customers are located.",
      },
      {
        topic: "Economic nexus",
        detail: "A state can require registration once sales pass its threshold, even with no office there. Track revenue and transactions by state monthly.",
      },
      {
        topic: "Payroll and contractors",
        detail: "Issue Forms W-2 or 1099 as required. Confirm worker classification with a specialist.",
      },
      {
        topic: "Records",
        detail: "Keep tax records for at least the period required by the IRS and each state.",
      },
    ],
    international: [
      {
        topic: "VAT (EU, UK) and GST (Canada, Australia, others)",
        detail: "Digital services sold to consumers abroad often require local registration once thresholds apply. Rules differ by country.",
      },
      {
        topic: "Place of supply",
        detail: "The buyer's location usually decides which tax applies. Collect and keep evidence of the customer's location.",
      },
      {
        topic: "Withholding tax",
        detail: "Payments from some countries can be subject to withholding. Check any tax treaty with the United States.",
      },
      {
        topic: "Foreign contractors",
        detail: "Collect Form W-8BEN (or W-8BEN-E) from non-US contractors before payment.",
      },
    ],
    practicalSteps: [
      "Use a tax-calculation service that updates rates and rules automatically, and show tax as a separate line on invoices.",
      "Have a tax adviser review the setup before the first paying customer, and again each year.",
    ],
  },

  legalDisclaimers: {
    general:
      "Information on this website is for general guidance only. It does not constitute legal, tax, financial or professional advice. Product descriptions, availability and pricing may change without notice.",
    aiAssistant:
      "Vera is an AI assistant. Responses are generated automatically and may contain errors. Vera does not provide medical, legal, financial or tax advice. Bookings, changes and payments are confirmed with you before they are made. For a decision, speak to a person.",
    pricing:
      "Prices are in US dollars and shown before any applicable taxes. Plans marked early access are subject to the written terms agreed at sign-up. Usage above plan allowances may be charged separately.",
    caseStudies:
      "Results depend on the client, the starting point and the work done. Figures shown are examples unless marked as verified. Testimonials are used with permission.",
    thirdParty:
      "Links to third-party sites and tools are provided for convenience. We do not control their content or privacy practices. Check each provider's terms before use.",
    publishingRules: [
      "Do not claim to be an accredited, certified or regulated provider unless it is true and documented.",
      "Do not make guarantees of revenue, savings or outcomes in marketing.",
      "Mark sponsored or affiliate content clearly.",
      "Describe early-access and planned products using the status labels in this guide.",
      "Keep a dated copy of every version of the website text and disclaimers.",
    ],
  },

  openItems: [
    { item: "Standard plan features (usage allowance, support)", owner: "Product", status: "Open" },
    { item: "Standard price $10 / month, $100 / year", owner: "Leadership", status: "Open: confirm" },
    { item: "Non-refund policy wording", owner: "Counsel", status: "Open" },
    { item: "Privacy Policy and Terms", owner: "Counsel", status: "Open" },
    { item: "Booking link (BOOKING_URL)", owner: "Operations", status: "Open" },
    { item: "Logo: light and dark versions from the business card; brochure VP mark not used", owner: "Brand", status: "Confirm" },
    { item: "Business card colours and tagline (TRUST | TRANSFORM | THRIVE) versus site palette and tagline", owner: "Brand", status: "Open" },
    { item: "Obtain vector logo files (SVG, AI or EPS) for print", owner: "Brand", status: "Open" },
    { item: "VeriBill and VeriHR launch dates", owner: "Leadership", status: "Open" },
    { item: "Trademark clearance and filings (VeriPro, VeriBook, VeriBill, VeriHR, Vera)", owner: "Counsel", status: "Open" },
    { item: "Legal entity name, state registration and EIN match on all documents", owner: "Finance", status: "Open" },
    { item: "Sales-tax and international VAT/GST registration plan", owner: "Tax adviser", status: "Open" },
    { item: "Security scan and HTTPS, headers and MFA checked", owner: "Technical lead", status: "Open" },
    { item: "Accessibility test (WCAG 2.2 AA) and statement published", owner: "Technical lead", status: "Open" },
    { item: "Cookie consent, if analytics or marketing tags are added", owner: "Technical lead", status: "Open" },
    { item: "Open-source licence register and font licence notice", owner: "Technical lead", status: "Open" },
    { item: "Placement terms: definition of total annual pay, prescribed charge, 12-month restriction, state agency licensing", owner: "Counsel", status: "Open" },
    { item: "Resource augmentation contract terms and worker classification", owner: "Counsel", status: "Open" },
    { item: "Healthcare and legal client scope: HIPAA and ethics review before any live use", owner: "Counsel", status: "Open" },
  ],

  docHistory: [
    {
      version: "1.0",
      date: "November 2026",
      change: "First complete edition: website pages and connection guides.",
    },
    {
      version: "1.1",
      date: "November 2026",
      change:
        "Added security, copyright, brand clearance, compliance, tax, legal disclaimers and colour and theme guidelines.",
    },
    {
      version: "1.2",
      date: "November 2026",
      change: "Light and dark logo versions from the business card applied to all pages.",
    },
    {
      version: "1.3",
      date: "November 2026",
      change:
        "White cover. Added placement referral and resource augmentation terms, solutions by business type, and related FAQs.",
    },
    {
      version: "1.4",
      date: "November 2026",
      change:
        "Current active release with full connection guide specifications, launch checklist, and verification guidelines.",
    },
  ],
};

