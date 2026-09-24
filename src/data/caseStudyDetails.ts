export interface CaseStudyDetail {
  logo: string;
  title: string;
  industry: string;
  size: string;
  challenge: string;
  problem: string;
  approach: string;
  tactics: string[];
  beforeStats: string;
  afterStats: string;
  quote: string;
  author: string;
  /** Optional longer narrative sections for richer case studies */
  benefits?: string[];
}

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  "millet-bakes": {
    logo: "Millet Bakes",
    title: "Millet Bakes: WhatsApp-First Bakery Site That Turns Product Discovery Into Orders",
    industry: "Food & Bakery · Ancient Grain Craft",
    size: "Growing D2C bakery · Chennai",
    challenge: "Sell wholesome millet bakes without forcing a heavy e-commerce checkout on customers who already order over WhatsApp.",
    problem:
      "Millet Bakes did not need a complicated cart-and-payment portal. Their customers discover products, ask questions, and place orders through conversation. A conventional e-commerce build would have added friction: accounts, long checkouts, and a sales flow that did not match how the bakery actually sells. The gap was a clear digital journey — discover the bake, understand why it is special, and start an order chat quickly.",
    approach:
      "We designed milletbakes.in around one question on every section: “What is the easiest next step for the customer?” Product discovery, proof, and WhatsApp ordering sit in one continuous path. The site educates (ingredients, zero maida, zero refined sugar), showcases the range, and hands the order to WhatsApp — the channel the business already uses.",
    tactics: [
      "Quick cart connected to WhatsApp so browsing turns into a ready-to-send order message",
      "Detailed product pages that explain what makes each bake special",
      "Product gallery for visual discovery of cookies, granola jars, and hampers",
      "Corporate-order landing page for bulk and gifting enquiries",
      "Enquiry form for customers who prefer a structured request",
      "Instagram feed integration to keep social proof on the site",
    ],
    beforeStats: "Generic store mindset · Checkout friction · Orders lived only on chat",
    afterStats: "WhatsApp-ready journey · Clear product story · Faster order conversations",
    quote:
      "Sometimes a business does not need a complicated e-commerce system. It needs the right digital journey that matches how the business actually sells.",
    author: "Bizy Site team, on Millet Bakes",
    benefits: [
      "Customers understand the brand promise (100% ancient grain, zero refined sugar) before they message",
      "Order intent is captured where people already buy — WhatsApp — instead of fighting a full checkout",
      "Corporate and retail paths are separated so bulk buyers are not lost in a consumer shop flow",
    ],
  },
  "hitech-fluid-system": {
    logo: "Hitech Fluid System",
    title: "Hitech Fluid System: Industrial Water Treatment Expertise Made Powerful Online",
    industry: "Industrial Water & Wastewater Treatment",
    size: "Engineering firm · Serving India since 2009",
    challenge: "Turn deep engineering expertise, projects, and capabilities into an online experience as strong as the work on site.",
    problem:
      "Hitech Fluid System designs and delivers WTP, STP, ETP, RO, ZLD and recycling solutions for industry. Offline, their capability is clear. Online, a brochure-style site would undersell the engineering: visitors need proof, process clarity, and an easy way to discuss a water requirement — not a wall of jargon.",
    approach:
      "We engineered the digital experience the way they engineer plants: with purpose at every step. Water-inspired motion, interactive proof, process storytelling, and requirement-focused enquiries help visitors understand the business, see the work, interact with the brand, and take the next step.",
    tactics: [
      "Water-inspired hero animation that sets an industrial, high-trust tone",
      "Ripple interactions on key CTAs to reinforce brand and draw action",
      "Interactive Before & After comparison so visitors can see treatment outcomes",
      "Complete process storytelling from assessment through long-term support",
      "WhatsApp integration for fast technical conversations",
      "Requirement-focused enquiry form aligned to real project intake",
      "Filterable project gallery plus portfolio and capability showcase",
    ],
    beforeStats: "Expertise hard to see online · Weak project proof · Generic contact forms",
    afterStats: "Interactive proof · Clear process story · Enquiry paths built for engineers & buyers",
    quote:
      "Every feature has a purpose — help visitors understand the business, see the proof, interact with the brand and take the next step.",
    author: "Bizy Site team, on Hitech Fluid System",
    benefits: [
      "Plant buyers and consultants can evaluate capability before a site visit",
      "Before/after and project filters turn engineering work into visible proof",
      "WhatsApp and requirement forms match how industrial deals actually start",
    ],
  },
  "dss-corp": {
    logo: "DSS Dynamic Strategic Solutions",
    title: "DSS Dynamic Strategic Solutions: CA Firm Website That Builds Trust and Books Consultations",
    industry: "Chartered Accountancy · Chennai",
    size: "Senior CA practice · Founders & growing businesses",
    challenge: "Help a CA firm look as capable online as it is offline — and turn serious founders into booked consultations.",
    problem:
      "Founders who cannot afford tax or compliance mistakes need clarity fast. A CA firm’s credibility often lives in conversations and referrals. Without a strong web presence, DSS risked losing busy founders who research late at night, compare advisors, and expect tools — not just a phone number on a static page. They needed a site that signals authority, answers early questions, and makes booking advice effortless.",
    approach:
      "We built dsscorp.in as a practical advisory hub: clear messaging for founders, proof of senior CA leadership, and utilities that create value before the first call. Calculators, blogs, forms, and WhatsApp connection work together — educate, qualify, and convert — so the firm spends more time on advice and less time on low-intent back-and-forth.",
    tactics: [
      "Founder-focused homepage messaging: financial clarity for people who cannot afford mistakes",
      "Interactive calculators that help visitors estimate and self-qualify before they enquire",
      "Blog content that builds search visibility and answers tax, GST, FEMA, and compliance questions",
      "Consultation and enquiry forms structured for serious business leads",
      "WhatsApp connection for quick, high-trust conversations on mobile",
      "Clear service storytelling for tax planning, company setup, NRI/FEMA, and wealth advice",
      "Professional brand system (navy + lime accents) that reads as senior, modern, and reliable",
    ],
    beforeStats: "Referral-heavy discovery · Few self-serve tools · Harder to convert cold visitors",
    afterStats: "Calculators + blogs + forms + WhatsApp · Stronger trust · Clearer path to book a consultation",
    quote:
      "When a founder lands on the site, they should feel: these people understand my risk — and I can take the next step today.",
    author: "Bizy Site team, on DSS",
    benefits: [
      "Calculators give freemium value, capture intent, and position DSS as practical advisors — not just a brochure",
      "Blogs support organic discovery and answer founder questions before the meeting",
      "Forms organise lead details (entity type, need, urgency) so consultations start warmer",
      "WhatsApp meets how Indian business owners already prefer to reach advisors",
      "A polished, founder-first design reduces doubt and shortens the trust curve for a CA firm",
    ],
  },
  "dr-sajan-hegde": {
    logo: "Dr. Sajan Hegde",
    title: "Dr. Sajan Hegde: Spine Surgery Clinic Rebuilds Authority & Increases Bookings by 38%",
    industry: "Healthcare & Spine Care Services",
    size: "10-20 staff",
    challenge: "Low online authority and friction in patient booking channels.",
    problem:
      "The clinic's old site had slow mobile loading speeds and lacked structured medical information. Patients found it hard to book spine consultations online, leading to a high drop-off rate on search listings.",
    approach:
      "We built an authoritative, blazing fast clinic portal on drsajankhegde.com, optimized semantic schemas for local medical queries, and simplified patient booking paths.",
    tactics: [
      "Designed a clean, professional clinical dashboard layout built for patient trust.",
      "Integrated a simple, 2-step consultation appointment booking system.",
      "Implemented technical schemas identifying specialty spinal surgery domains.",
      "Optimized Google Business Profiles and local map search citations.",
    ],
    beforeStats: "1.2s page speed · 18 monthly appointments · Low visibility",
    afterStats: "0.8s page speed · 32 monthly appointments · 38% increase",
    quote:
      "Bizy Site rebuilt our clinical web portal to be incredibly fast and authoritative. Patients regularly mention how easy it is to find information and book consultations.",
    author: "Dr. Sajan Hegde, Chief Spine Surgeon",
  },
  "sound-v-pro": {
    logo: "Sound V Pro",
    title: "Sound V Pro: E-Commerce Audio Systems Platform Optimizes Checkout Funnel to Double Sales",
    industry: "Audio Production Rentals",
    size: "5-10 staff",
    challenge: "High cart abandonment rate on checkout and payment options.",
    problem:
      "Sound V Pro's old e-commerce system at soundvpro.com made renting sound systems complex. Customers had to complete 8 fields before checking out, and mobile payment gateways crashed frequently.",
    approach:
      "We redesigned the booking system to support instant checkout, integrated local Indian payment portals, and optimized layouts for performance meta campaigns.",
    tactics: [
      "Redesigned the e-commerce cart into a single-page checkout flow.",
      "Added trust symbols, safety assurances, and clean cost details.",
      "Restructured Meta paid campaigns to target warm cart abandoners.",
      "Optimized product grids for fast rendering on mobile connections.",
    ],
    beforeStats: "1.1% checkout rate · 22 monthly orders · High cart drops",
    afterStats: "2.3% checkout rate · 46 monthly orders · 2.1× higher conversion",
    quote:
      "Our sound system bookings doubled within 30 days of launch. The simplified single-page checkout removed the friction that was costing us sales.",
    author: "Kiran Dev, Founder",
  },
  "miracle-members": {
    logo: "Miracle Members",
    title: "Miracle Members: BNI Miracles Member Networking Directory Mobile Speed Redesign",
    industry: "Business Networking Services",
    size: "100+ members",
    challenge: "Slow directory load speeds preventing member search on mobile networks.",
    problem:
      "Miracle Members portal at miraclemembers.in was loaded with unoptimized photos. Pages took over 6 seconds to load on mobile connections, preventing business owners from referencing members during networking sessions.",
    approach:
      "We rebuilt the membership directory using static Next.js compilation, optimized photos, and deployed a lightweight search interface.",
    tactics: [
      "Converted all directory images into WebP formats with lazy loading.",
      "Built a custom client-side search indexing engine for instant filtering.",
      "Redesigned member cards to render cleanly on standard mobile screens.",
      "Structured SEO semantic tags for local business categories.",
    ],
    beforeStats: "6.2s page load speed · High bounce rate on mobile · Poor search",
    afterStats: "1.2s page load speed · 48% speed increase · Instant search indexing",
    quote:
      "Our members can now query the directory instantly during active networking meets. The speed improvements solved a major operational bottleneck.",
    author: "Sanjay Shah, Chapter Director",
  },
  "an-art-by": {
    logo: "An Art By",
    title: "An Art By: Art Portfolio & E-Commerce Gallery Visual Funnel Optimization",
    industry: "Art & Creative Studio",
    size: "Self-employed artist",
    challenge: "Low visual engagement and high checkout drop-offs for custom paintings.",
    problem:
      "The art gallery at anartby.com looked beautiful but lacked visual hierarchy. Art collectors could not easily locate pricing details, checkout flows, or commission request options.",
    approach:
      "We optimized their visual gallery interface, added high-fidelity product zoom views, and integrated a low-friction art commission form.",
    tactics: [
      "Redesigned the gallery layout to focus on custom painting details.",
      "Implemented a clean, multi-step artwork inquiry wizard.",
      "Optimized image delivery via CDN nodes for fast retina viewing.",
      "Created visual checkout prompts reducing checkout anxiety.",
    ],
    beforeStats: "0.8% CTR on art commissions · High cart abandon rate",
    afterStats: "2.1% CTR on art commissions · 62% increase in visual engagement",
    quote:
      "Bizy Site understood how to balance artistic beauty with commercial conversion. The new commission forms are bringing in highly qualified custom painting requests.",
    author: "Ananya Roy, Principal Artist",
  },
  "idea-heavens": {
    logo: "Idea Heavens",
    title: "Idea Heavens: Performance Marketing Agency Cuts Client Acquisiton Lead Costs by 3.4×",
    industry: "Marketing & Design Agency",
    size: "20-50 employees",
    challenge: "High cost-per-lead (CPL) on agency acquisition campaigns.",
    problem:
      "The agency was paying high CPC bids on Google Ads. However, their landing pages at ideaheavens.com converted traffic poorly, resulting in expensive, low-quality sales inquiries.",
    approach:
      "We designed a high-converting landing page, set up Google Ads match terms with negative keyword lists, and optimized their copy to capture zero-click AEO answers.",
    tactics: [
      "Re-authored landing pages targeting high-converting keyword intents.",
      "Configured FAQ and Organization schemas for snippet indexing.",
      "Added multi-step form capture and WhatsApp chat triggers.",
      "Tuned Google Search bids to focus on high-quality business queries.",
    ],
    beforeStats: "₹1,500 cost-per-lead (CPL) · Low quality calls · Poor tracking",
    afterStats: "₹440 cost-per-lead (CPL) · 3.4× cheaper lead acquisition · Clean attribution",
    quote:
      "We are running ads that actually generate high-quality sales leads at a third of the cost. The full funnel alignment has worked wonders.",
    author: "Rohit Verma, Director",
  },
};
