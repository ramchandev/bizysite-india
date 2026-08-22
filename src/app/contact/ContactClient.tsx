"use client";
 
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, MessageCircle, Mail, MapPin, CheckCircle2, User, Briefcase, FileText, Globe } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
 
export default function ContactClient() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
 
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    need: "Website Design & Development",
    message: ""
  });
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
 
    let gRecaptchaToken: string | undefined = undefined;
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const isProd = process.env.NODE_ENV === "production";
    
    if (isProd && siteKey) {
      gRecaptchaToken = (window as any).grecaptcha?.getResponse();
      if (!gRecaptchaToken) {
        setFormError("Please complete the reCAPTCHA verification.");
        setIsSubmitting(false);
        return;
      }
    }
 
    const payload = {
      name: formData.name,
      email: formData.email || "not-provided@bizysite.com",
      phone: formData.phone,
      plan: `Contact Form - Need: ${formData.need}`,
      website: formData.website || undefined,
      notes: formData.message ? `Message: ${formData.message}` : "No message provided.",
      gRecaptchaToken
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
 
      router.push(`/thank-you?name=${encodeURIComponent(formData.name)}`);
    } catch (err) {
      setFormError("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
 
  return (
    <>
      {/* SECTION 3 — The Contact Form */}
      <section id="contact-form-section" className="section-padding" style={{ background: "var(--off-white)" }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <div className="audit-form-card" style={{ background: "var(--white)", padding: "40px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", border: "1px solid var(--border)" }}>
            <h3 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "24px", marginBottom: "6px", textAlign: "center" }}>Tell us about your business</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "32px", textAlign: "center" }}>
              No spam, no repeated calls. Your details stay private.
            </p>
 
            <form onSubmit={handleSubmit} className="lead-form" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Field: Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="name" style={{ fontWeight: "700" }}>Name</label>
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
 
              {/* Field: Mobile Number */}
              <div className="form-group">
                <label className="form-label" htmlFor="phone" style={{ fontWeight: "700" }}>Mobile Number</label>
                <div className="form-input-wrapper">
                  <Phone size={16} className="form-input-icon" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="98765 43210"
                    required
                    className="form-input"
                  />
                </div>
              </div>
 
              {/* Field: Email */}
              <div className="form-group">
                <label className="form-label" htmlFor="email" style={{ fontWeight: "700" }}>Email Address <span style={{ color: "var(--text-muted)", fontSize: "11px", fontWeight: "normal" }}>(Optional)</span></label>
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

              {/* Field: Website URL */}
              <div className="form-group">
                <label className="form-label" htmlFor="website" style={{ fontWeight: "700" }}>Website URL <span style={{ color: "var(--text-muted)", fontSize: "11px", fontWeight: "normal" }}>(Optional)</span></label>
                <div className="form-input-wrapper">
                  <Globe size={16} className="form-input-icon" />
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://mybusiness.com"
                    className="form-input"
                  />
                </div>
              </div>
 
              {/* Field: What do you need? */}
              <div className="form-group">
                <label className="form-label" htmlFor="need" style={{ fontWeight: "700" }}>What do you need?</label>
                <div className="form-input-wrapper">
                  <Briefcase size={16} className="form-input-icon" />
                  <select
                    id="need"
                    name="need"
                    value={formData.need}
                    onChange={handleInputChange}
                    required
                    className="form-select"
                  >
                    <option value="Website Design & Development">Website Design & Development</option>
                    <option value="Conversion Rate Optimization (CRO)">Conversion Rate Optimization (CRO)</option>
                    <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                    <option value="Google Business Profile Optimization">Google Business Profile Optimization</option>
                    <option value="Answer Engine Optimization (AEO)">Answer Engine Optimization (AEO)</option>
                    <option value="AI Optimization (AIO)">AI Optimization (AIO)</option>
                    <option value="Generative Engine Optimization (GEO)">Generative Engine Optimization (GEO)</option>
                    <option value="Google & Meta Ads Management">Google & Meta Ads Management</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>
 
              {/* Field: Your message */}
              <div className="form-group">
                <label className="form-label" htmlFor="message" style={{ fontWeight: "700" }}>Your message <span style={{ color: "var(--text-muted)", fontSize: "11px", fontWeight: "normal" }}>(Optional)</span></label>
                <div className="form-input-wrapper">
                  <FileText size={16} className="form-input-icon" style={{ top: "16px" }} />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us a bit about your project or goals..."
                    rows={4}
                    className="form-input"
                    style={{ paddingLeft: "42px", minHeight: "100px", paddingTop: "12px" }}
                  />
                </div>
              </div>
 
              {formError && (
                <div role="alert" style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px", padding: "10px 12px", color: "#EF4444", fontSize: "13px" }}>
                  {formError}
                </div>
              )}
 
              {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                  <div 
                    className="g-recaptcha" 
                    data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  />
                </div>
              )}
 
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: "100%", padding: "14px", marginTop: "10px", justifyContent: "center" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Request..." : "Send My Request →"}
              </button>
 
              <p style={{ textAlign: "center", fontSize: "11px", color: "var(--text-muted)", margin: "0" }}>
                We reply the same day. No spam, no repeated calls. Your details stay private.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Other Ways to Reach Us */}
      <section className="section-padding" style={{ background: "var(--white)", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <span className="section-tag">Direct Contact</span>
            <h2 className="section-title">Prefer to talk directly? Here is how.</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "40px" }}>
            <div style={{ background: "var(--off-white)", padding: "24px", borderRadius: "var(--radius-md)", border: "1px solid var(--border)" }}>
              <h4 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "16px", marginBottom: "12px" }}>Message on WhatsApp</h4>
              <p style={{ fontSize: "13px", color: "var(--text-mid)", marginBottom: "16px", lineHeight: "1.5" }}>
                Often the fastest way to reach us.
              </p>
              <a 
                href="https://wa.me/919500728442?text=Hi%20Bizy%20Site,%20I'd%20like%20to%20request%20a%20free%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ background: "#25D366", borderColor: "#25D366", width: "100%", justifyContent: "center", gap: "8px" }}
              >
                <MessageCircle size={16} fill="currentColor" />
                <span>Message Us</span>
              </a>
            </div>

            <div style={{ background: "var(--off-white)", padding: "24px", borderRadius: "var(--radius-md)", border: "1px solid var(--border)" }}>
              <h4 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "16px", marginBottom: "12px" }}>Call Us</h4>
              <p style={{ fontSize: "13px", color: "var(--text-mid)", marginBottom: "16px", lineHeight: "1.5" }}>
                Talk to a real person, not a call centre.
              </p>
              <a 
                href="tel:+919500728442"
                className="btn btn-navy"
                style={{ width: "100%", justifyContent: "center", gap: "8px" }}
              >
                <Phone size={16} />
                <span>+91 95007 28442</span>
              </a>
            </div>
          </div>

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "32px", display: "flex", flexDirection: "column", gap: "16px", fontSize: "14px", color: "var(--text)" }}>
            <div>
              <strong>Email:</strong> <a href="mailto:info@bizysite.in" style={{ color: "var(--teal)", fontWeight: "700" }}>info@bizysite.in</a>
            </div>
            <div>
              <strong>Office:</strong> 404 Jasmine A wing, Eden Park Phase 2, OMR, Siruseri, Chennai 603103
            </div>
            <div>
              <strong>GST:</strong> 33AAPCM5658N1ZP
            </div>
            <div style={{ marginTop: "10px", fontSize: "13px", color: "var(--text-muted)", fontStyle: "italic" }}>
              Response promise: We reply to every genuine enquiry the same working day.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Small Reassurance Block */}
      <section className="section-padding" style={{ background: "var(--navy-dark)", color: "var(--white)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-tag light">Our Process</span>
          <h2 className="section-title text-white">What happens after you reach out.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px", marginTop: "32px", textAlign: "left" }}>
            <div>
              <div style={{ fontSize: "28px", fontWeight: "900", color: "var(--teal)", marginBottom: "12px" }}>1</div>
              <h4 style={{ fontWeight: "700", marginBottom: "8px", color: "var(--white)" }}>We read your message</h4>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.6" }}>
                We review your details and understand what your business needs.
              </p>
            </div>
            <div>
              <div style={{ fontSize: "28px", fontWeight: "900", color: "var(--teal)", marginBottom: "12px" }}>2</div>
              <h4 style={{ fontWeight: "700", marginBottom: "8px", color: "var(--white)" }}>We reply the same day</h4>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.6" }}>
                With clear next steps, or a few quick questions to align.
              </p>
            </div>
            <div>
              <div style={{ fontSize: "28px", fontWeight: "900", color: "var(--teal)", marginBottom: "12px" }}>3</div>
              <h4 style={{ fontWeight: "700", marginBottom: "8px", color: "var(--white)" }}>We give you honest advice</h4>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.6" }}>
                Whether or not you choose to work with us. No pushy sales.
              </p>
            </div>
          </div>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "40px", fontStyle: "italic" }}>
            No pushy sales. No pressure. Just clear help from people who have built 500+ websites.
          </p>
        </div>
      </section>
      {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
        <Script 
          src={`https://www.google.com/recaptcha/api.js`} 
          strategy="lazyOnload" 
        />
      )}
    </>
  );
}
