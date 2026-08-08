"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

// Custom SVG Facebook Icon for reliability
function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// Custom SVG X/Twitter Icon for accuracy
function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

// Custom SVG Instagram Icon for reliability
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// Custom SVG LinkedIn Icon for reliability
function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        
        {/* Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Logo & Tagline */}
          <div className="footer-about">
            <Link href="/" className="footer-logo">
              <img src="/Bizy_Site_Logo.png" alt="Bizy Site Logo" className="footer-logo-img" style={{ background: "#ffffff", padding: "4px", borderRadius: "8px" }} />
              <span>Bizy Site</span>
            </Link>
            <p className="footer-desc">
              India's first performance-driven AEO + GEO and Web Growth Agency. We build high-converting websites and optimize them for the future of AI search.
            </p>
            <div className="footer-whatsapp-box" style={{ marginTop: "20px" }}>
              <a 
                href="https://wa.me/919500728442?text=Hi%20Bizy%20Site,%20I'd%20like%20to%20request%20a%20free%20website%20audit." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary whatsapp-btn"
                style={{ background: "#25D366", boxShadow: "0 4px 15px rgba(37,211,102,.35)", display: "inline-flex", gap: "8px" }}
              >
                <MessageCircle size={18} fill="currentColor" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Links Grid (3 Columns) */}
          <div className="footer-links-grid">
            {/* Column 2: Services */}
            <div className="footer-col">
              <span className="footer-col-title">Services</span>
              <ul className="footer-list">
                <li><Link href="/services/web-design">Website Development</Link></li>
                <li><Link href="/services/cro">Conversion Optimization</Link></li>
                <li><Link href="/services/seo">Search Optimization (SEO & AEO)</Link></li>
                <li><Link href="/services/ads">Google & Meta Ads</Link></li>
                <li><Link href="/services/social-media-management">Social Media Management</Link></li>
                <li><Link href="/services">All Services Index</Link></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="footer-col">
              <span className="footer-col-title">Company</span>
              <ul className="footer-list">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/work">Case Studies / Work</Link></li>
                <li><Link href="/blog">Blog & Resources</Link></li>
                <li><Link href="/contact">Contact / Free Audit</Link></li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div className="footer-col">
              <span className="footer-col-title">Legal</span>
              <ul className="footer-list">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/cookie-policy">Cookie Policy</Link></li>
                <li><Link href="/ai-policy">AI Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/refund">Refund & Cancellation</Link></li>
                <li><Link href="/sitemap">Site Map</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "24px" }}>
          <div style={{ display: "flex", gap: "6px", alignItems: "center", fontSize: "12px", color: "rgba(255, 255, 255, 0.45)" }}>
            <span suppressHydrationWarning>© {currentYear} Bizy Site. All rights reserved.</span>
            <span>·</span>
            <Link href="/ai-policy" style={{ color: "rgba(255, 255, 255, 0.55)", textDecoration: "none" }}>AI Policy</Link>
            <span>·</span>
            <Link href="/service-index" style={{ color: "rgba(255, 255, 255, 0.55)", textDecoration: "none" }}>Service Index</Link>
            <span>·</span>
            <a href="/llms.txt" style={{ color: "rgba(255, 255, 255, 0.55)", textDecoration: "none" }}>llms.txt</a>
          </div>

          <div style={{ fontSize: "13px", fontWeight: "700", color: "rgba(255, 255, 255, 0.7)", display: "flex", alignItems: "center", gap: "4px" }}>
            Made in India 🇮🇳 with Love ❤️
          </div>

          <div className="social-links" style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <a href="https://facebook.com/bizysite" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: "rgba(255,255,255,0.45)", transition: "color 0.2s" }}>
              <FacebookIcon size={18} />
            </a>
            <a href="https://x.com/bizysite" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: "rgba(255,255,255,0.45)", transition: "color 0.2s" }}>
              <XIcon size={18} />
            </a>
            <a href="https://instagram.com/bizysite" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: "rgba(255,255,255,0.45)", transition: "color 0.2s" }}>
              <InstagramIcon size={18} />
            </a>
            <a href="https://linkedin.com/company/bizysite" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: "rgba(255,255,255,0.45)", transition: "color 0.2s" }}>
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
