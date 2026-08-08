"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [isCondensed, setIsCondensed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

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

  const servicesData = [
    {
      category: "Get Chosen",
      items: [
        { name: "Website Design & Dev", href: "/services/web-design", desc: "Blazing fast, custom websites" },
        { name: "Conversion Rate Optimization (CRO)", href: "/services/cro", desc: "Turn more traffic into leads" },
        { name: "Social Media Management", href: "/services/social-media-management", desc: "Keep your pages active" }
      ]
    },
    {
      category: "Get Found",
      items: [
        { name: "SEO", href: "/services/seo", desc: "Rank high on Google search" },
        { name: "Google Business Profile", href: "/services/google-business-profile", desc: "Win local map searches" },
        { name: "Answer Engine Optimization (AEO)", href: "/services/aeo", desc: "Voice & snippet answers" }
      ]
    },
    {
      category: "AI & Paid Traffic",
      items: [
        { name: "AI Optimization (AIO)", href: "/services/aio", desc: "Be visible in AI search" },
        { name: "Generative Engine Optimization (GEO)", href: "/services/geo", desc: "ChatGPT recommendations" },
        { name: "Google & Meta Ads", href: "/services/ads", desc: "Get customers today" }
      ]
    }
  ];

  const industriesData = [
    {
      category: "Commercial & Retail",
      items: [
        { name: "Real Estate & Builders", href: "/industries/real-estate", desc: "Showcase properties cleanly" },
        { name: "Manufacturing & B2B", href: "/industries/manufacturing", desc: "Win B2B quote requests" },
        { name: "Retail & D2C / E-commerce", href: "/industries/retail", desc: "Turn browsers into buyers" },
        { name: "Hospitality & Restaurants", href: "/industries/hospitality", desc: "Drive footfall and bookings" }
      ]
    },
    {
      category: "Services & Care",
      items: [
        { name: "Healthcare & Clinics", href: "/industries/healthcare", desc: "Fill appointment slots" },
        { name: "Education & Coaching", href: "/industries/education", desc: "Fill batches & demo classes" },
        { name: "Professional Services", href: "/industries/professional-services", desc: "Signal trust & win clients" }
      ]
    }
  ];

  return (
    <>
      <header className={`nav-header ${isCondensed ? "condensed" : ""}`}>
        <div className="container nav-container">
          {/* Left: Logo */}
          <Link href="/" className="nav-logo">
            <img src="/Bizy_Site_Logo.png" alt="Bizy Site Logo" className="nav-logo-img" />
            <span>Bizy Site</span>
          </Link>

          {/* Centre Nav links */}
          <ul className="nav-links">
            <li 
              className="nav-link-item dropdown-trigger"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link href="/services" className="nav-link-anchor">
                Services <ChevronDown size={14} className={`dropdown-icon ${isServicesOpen ? "open" : ""}`} />
              </Link>
              
              {/* Services Mega Dropdown Menu */}
              <div className={`services-dropdown ${isServicesOpen ? "active" : ""}`}>
                <div className="mega-grid-3">
                  {servicesData.map((col) => (
                    <div key={col.category} className="mega-col">
                      <span className="mega-col-title">{col.category}</span>
                      <div className="mega-list">
                        {col.items.map((item) => (
                          <Link key={item.href} href={item.href} className="mega-item">
                            <span className="mega-item-title">{item.name}</span>
                            <span className="mega-item-desc">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mega-divider"></div>
                <Link href="/contact" className="mega-help-link">
                  <span>Not sure? Get a Free Audit</span>
                  <ArrowRight size={14} />
                </Link>
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
            <img src="/Bizy_Site_Logo.png" alt="Bizy Site Logo" className="nav-logo-img" />
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
              {servicesData.flatMap(c => c.items).map((svc) => (
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
          
          <div className="mobile-nav-section" style={{ marginTop: "24px" }}>
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
