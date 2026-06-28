"use client";

import Link from "next/link";
import { MessageCircle, FileText } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="floating-mobile-cta">
      <a 
        href="https://wa.me/91950072844222?text=Hi%20Bizy%20Site,%20I'd%20like%20to%20request%20a%20free%20website%20audit." 
        target="_blank" 
        rel="noopener noreferrer"
        className="mobile-cta-btn whatsapp-cta"
      >
        <MessageCircle size={18} fill="currentColor" />
        <span>WhatsApp</span>
      </a>
      <Link href="/contact" className="mobile-cta-btn audit-cta">
        <FileText size={16} />
        <span>Get Free Audit</span>
      </Link>
    </div>
  );
}
