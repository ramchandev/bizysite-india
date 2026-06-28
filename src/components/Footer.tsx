"use client";

import Link from "next/link";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

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
              <span>Bizy Site</span>
            </Link>
            <p className="footer-desc">
              India's first performance-driven AEO + GEO and Web Growth Agency. We build high-converting websites and optimize them for the future of AI search.
            </p>
            <div className="footer-whatsapp-box" style={{ marginTop: "20px" }}>
              <a 
                href="https://wa.me/91950072844222?text=Hi%20Bizy%20Site,%20I'd%20like%20to%20request%20a%20free%20website%20audit." 
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

          {/* Right Links Grid */}
          <div className="footer-links-grid">
            {/* Column 2: Services */}
            <div className="footer-col">
              <span className="footer-col-title">Services</span>
              <ul className="footer-list">
                <li><Link href="/services/web-design">Website Design & Dev</Link></li>
                <li><Link href="/services/cro">Conversion Rate Optimization</Link></li>
                <li><Link href="/services/seo">Search Engine Optimization</Link></li>
                <li><Link href="/services/aeo">Answer Engine Optimization</Link></li>
                <li><Link href="/services/aio">AI Optimization (AIO)</Link></li>
                <li><Link href="/services/geo">Generative Engine Optimization</Link></li>
                <li><Link href="/services/ads">Google & Meta Ads</Link></li>
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

            {/* Column 4: Contact info */}
            <div className="footer-col">
              <span className="footer-col-title">Contact</span>
              <ul className="footer-list contact-list">
                <li>
                  <a href="mailto:info@bizysite.com">
                    <Mail size={14} />
                    <span>info@bizysite.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+91950072844222">
                    <Phone size={14} />
                    <span>+91 950072844222</span>
                  </a>
                </li>
                <li>
                  <div className="contact-item">
                    <MapPin size={14} style={{ flexShrink: 0 }} />
                    <span>404 Jasmine A wing, Eden Park Phase 2, OMR, Siruseri, Chennai 603103</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span suppressHydrationWarning>
            © {currentYear} Bizy Site India. All rights reserved.
          </span>
          <div className="footer-legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
