"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Mail, Phone, MapPin, Award, User, Briefcase, Globe, Target, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    websiteUrl: "",
    primaryGoal: "Not Sure",
    phone: "",
    email: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    // Format payload for the backend
    const payload = {
      name: formData.name,
      email: formData.email || "not-provided@bizysite.com",
      phone: formData.phone,
      plan: `Free Audit - Goal: ${formData.primaryGoal}`,
      notes: `Business: ${formData.businessName}. Website: ${formData.websiteUrl}.`
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || data?.ok === false) {
        setFormError(data?.error || "Submission failed. Please check details and try again.");
        return;
      }

      // Redirect to thank you page on success
      router.push("/thank-you");
    } catch (err) {
      setFormError("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <section className="section-padding" style={{ background: "var(--off-white)", paddingTop: "110px" }}>
        <div className="container">
          
          <div className="contact-section-split">
            {/* Left Column: Trust Panel */}
            <div className="contact-info-panel">
              <span className="section-tag" style={{ color: "var(--teal)" }}>Free Analysis</span>
              <h2 style={{ fontSize: "32px", fontWeight: "800", lineHeight: "1.2", marginBottom: "16px" }}>
                Get Your Free Website Audit
              </h2>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: "1.6", marginBottom: "32px" }}>
                Tell us about your website. We'll analyze your organic search footprint, loading speeds, mobile-first interface, and AI search visibility, then send you an actionable recommendations report in 48 hours, entirely free.
              </p>

              <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "16px" }}>What You'll Get:</h3>
              <ul className="outcome-list" style={{ gap: "14px", color: "rgba(255,255,255,0.9)" }}>
                <li className="outcome-item" style={{ color: "var(--white)" }}>
                  <Check size={16} style={{ color: "var(--teal)" }} />
                  <span>Conversion gap layout analysis</span>
                </li>
                <li className="outcome-item" style={{ color: "var(--white)" }}>
                  <Check size={16} style={{ color: "var(--teal)" }} />
                  <span>Technical SEO speed and indexation check</span>
                </li>
                <li className="outcome-item" style={{ color: "var(--white)" }}>
                  <Check size={16} style={{ color: "var(--teal)" }} />
                  <span>AI citation score (ChatGPT/Gemini visibility)</span>
                </li>
                <li className="outcome-item" style={{ color: "var(--white)" }}>
                  <Check size={16} style={{ color: "var(--teal)" }} />
                  <span>3 prioritized, high-impact growth recommendations</span>
                </li>
              </ul>

              <div style={{ marginTop: "40px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "32px" }}>
                <p style={{ fontSize: "13px", fontStyle: "italic", color: "var(--white)", opacity: 0.9, lineHeight: "1.5", marginBottom: "12px" }}>
                  "We got our audit report in 36 hours. The recommendations on page performance and ads structure were clear and actionable, helping us scale up lead generation."
                </p>
                <span style={{ fontSize: "11px", fontWeight: "bold", color: "var(--teal)" }}>Praveen, Founder (Idea Heavens)</span>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="audit-form-card">
              <h3 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "20px", marginBottom: "6px" }}>Request Free Audit</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "12px", marginBottom: "24px" }}>
                Join 50+ businesses who got clarity in 48 hours.
              </p>

              <form onSubmit={handleSubmit} className="lead-form" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                
                {/* Field: Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <div className="form-input-wrapper">
                    <User size={16} className="form-input-icon" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Rahul Sharma"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Field: Business Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="businessName">Business Name</label>
                  <div className="form-input-wrapper">
                    <Briefcase size={16} className="form-input-icon" />
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Sharma & Co."
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Field: Website URL */}
                <div className="form-group">
                  <label className="form-label" htmlFor="websiteUrl">Website URL</label>
                  <div className="form-input-wrapper">
                    <Globe size={16} className="form-input-icon" />
                    <input
                      type="url"
                      id="websiteUrl"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleInputChange}
                      placeholder="https://mybusiness.in"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Field: Primary Goal */}
                <div className="form-group">
                  <label className="form-label" htmlFor="primaryGoal">Primary Goal</label>
                  <div className="form-input-wrapper">
                    <Target size={16} className="form-input-icon" />
                    <select
                      id="primaryGoal"
                      name="primaryGoal"
                      value={formData.primaryGoal}
                      onChange={handleInputChange}
                      required
                      className="form-select"
                    >
                      <option value="More Leads">More Leads / Customer Inquiries</option>
                      <option value="Better SEO">Better SEO Organic Rankings</option>
                      <option value="AI Visibility">AI search presence (AEO/GEO)</option>
                      <option value="Website Redesign">Website Redesign / Dev</option>
                      <option value="Google or Meta Ads">Google or Meta Ads Optimization</option>
                      <option value="Not Sure">Not Sure / General Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Field: Phone / WhatsApp */}
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">WhatsApp / Phone Number</label>
                  <div className="form-input-wrapper">
                    <Phone size={16} className="form-input-icon" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 99999 99999"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Field: Email */}
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address <span style={{ color: "var(--text-muted)", fontSize: "11px", fontWeight: "normal" }}>(Optional)</span></label>
                  <div className="form-input-wrapper">
                    <Mail size={16} className="form-input-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="rahul@sharma.co"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Form Error Message */}
                {formError && (
                  <div role="alert" style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px", padding: "10px 12px", color: "#EF4444", fontSize: "13px" }}>
                    {formError}
                  </div>
                )}

                {/* Submit button */}
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: "100%", padding: "14px", marginTop: "10px" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending Request..." : "Send My Audit Request →"}
                </button>

                <p style={{ textAlign: "center", fontSize: "11px", color: "var(--text-muted)", margin: "0" }}>
                  We respond within 24 hours · No sales calls unless you ask · 100% free
                </p>

              </form>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
