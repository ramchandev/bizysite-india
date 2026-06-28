"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/91950072844222?text=Hi%20Bizy%20Site,%20I'd%20like%20to%20request%20a%20free%20website%20audit." 
      target="_blank" 
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-pulse-ring"></div>
      <div className="whatsapp-icon-box">
        <MessageCircle size={28} fill="currentColor" />
      </div>
    </a>
  );
}
