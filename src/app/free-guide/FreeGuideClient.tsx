"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Phone } from "lucide-react";

export default function FreeGuideClient() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "not-provided",
      plan: "Free Guide Download",
      notes: "Requested Website Conversion Cheat Sheet."
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

      router.push(`/thank-you?name=${encodeURIComponent(formData.name)}&guide=true`);
    } catch (err) {
      setFormError("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding" style={{ background: "var(--off-white)", borderTop: "1px solid var(--border)" }}>
      <div className="container" style={{ maxWidth: "540px" }}>
        <div className="audit-form-card" style={{ background: "var(--white)", padding: "40px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", border: "1px solid var(--border)" }}>
          <h3 style={{ color: "var(--navy)", fontWeight: "800", fontSize: "22px", marginBottom: "6px", textAlign: "center" }}>Where should we send it?</h3>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "32px", textAlign: "center" }}>
            We will email you the guide right away. Unsubscribe anytime.
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

            {/* Field: Email */}
            <div className="form-group">
              <label className="form-label" htmlFor="email" style={{ fontWeight: "700" }}>Email Address</label>
              <div className="form-input-wrapper">
                <Mail size={16} className="form-input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="rahul@sharma.co"
                  required
                  className="form-input"
                />
              </div>
            </div>

            {/* Field: Phone (Optional) */}
            <div className="form-group">
              <label className="form-label" htmlFor="phone" style={{ fontWeight: "700" }}>Mobile Number <span style={{ color: "var(--text-muted)", fontSize: "11px", fontWeight: "normal" }}>(Optional)</span></label>
              <div className="form-input-wrapper">
                <Phone size={16} className="form-input-icon" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="99999 99999"
                  className="form-input"
                />
              </div>
            </div>

            {formError && (
              <div role="alert" style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px", padding: "10px 12px", color: "#EF4444", fontSize: "13px" }}>
                {formError}
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: "100%", padding: "14px", marginTop: "10px", justifyContent: "center" }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending Guide..." : "Send Me the Free Guide →"}
            </button>

            <p style={{ textAlign: "center", fontSize: "11px", color: "var(--text-muted)", margin: "0" }}>
              We value your privacy. No spam, no repeated calls. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
