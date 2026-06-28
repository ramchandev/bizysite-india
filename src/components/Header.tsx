"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MessageCircle, ArrowRight } from "lucide-react";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [isCondensed, setIsCondensed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsCondensed(true);
      } else {
        setIsCondensed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    { name: "Website Design & Dev", href: "/services/web-design" },
    { name: "Conversion Rate Optimization (CRO)", href: "/services/cro" },
    { name: "SEO", href: "/services/seo" },
    { name: "Answer Engine Optimization (AEO)", href: "/services/aeo" },
    { name: "AI Optimization (AIO)", href: "/services/aio" },
    { name: "Generative Engine Optimization (GEO)", href: "/services/geo" },
    { name: "Google & Meta Ads", href: "/services/ads" },
  ];

  return (
    <>
      <header className={`nav-header ${isCondensed ? "condensed" : ""}`}>
        <div className="container nav-container">
          {/* Left: Logo */}
          <Link href="/" className="nav-logo">
            <span>Bizy Site</span>
          </Link>

          {/* Centre Nav links */}
          <ul className="nav-links">
            <li 
              className="nav-link-item dropdown-trigger"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link href="/services" className="nav-link-anchor">
                Services <ChevronDown size={14} className={`dropdown-icon ${isDropdownOpen ? "open" : ""}`} />
              </Link>
              
              {/* Dropdown Menu */}
              <div className={`services-dropdown ${isDropdownOpen ? "active" : ""}`}>
                <div className="dropdown-grid">
                  {services.map((svc) => (
                    <Link key={svc.href} href={svc.href} className="dropdown-item">
                      {svc.name}
                    </Link>
                  ))}
                  <div className="dropdown-divider"></div>
                  <Link href="/contact" className="dropdown-item help-link">
                    <span>Not sure? Get a Free Audit</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-link-item">
              <Link href="/work">Work</Link>
            </li>
            <li className="nav-link-item">
              <Link href="/about">About</Link>
            </li>
            <li className="nav-link-item">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>

          {/* Right Action */}
          <div className="nav-actions">
            <Link href="/contact" className={`btn ${isCondensed ? "btn-primary" : "btn-navy"} nav-cta-btn`}>
              Get Free Audit →
            </Link>

            {/* Hamburger button for mobile */}
            <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-header">
          <Link href="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
            <span>Bizy Site</span>
          </Link>
          <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        
        <div className="mobile-nav-body">
          <div className="mobile-nav-section">
            <span className="mobile-section-title">Services</span>
            <div className="mobile-services-grid">
              {services.map((svc) => (
                <Link 
                  key={svc.href} 
                  href={svc.href} 
                  className="mobile-nav-link sub-link" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {svc.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="mobile-nav-link sub-link highlight" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Not sure? Get a Free Audit →
              </Link>
            </div>
          </div>
          
          <div className="mobile-nav-section">
            <Link href="/work" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Work / Case Studies
            </Link>
            <Link href="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/blog" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Blog & Resources
            </Link>
          </div>
        </div>
        
        <div className="mobile-nav-cta">
          <Link href="/contact" className="btn btn-primary" style={{ width: "100%" }} onClick={() => setIsMobileMenuOpen(false)}>
            Get My Free Audit →
          </Link>
          <p className="cta-microcopy light">No obligation · Delivered in 48 hours</p>
        </div>
      </div>
    </>
  );
}
