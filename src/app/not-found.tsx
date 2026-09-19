import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Home,
  Layers,
  MessageSquare,
  SearchX,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | Bizy Site",
  description:
    "The page you're looking for doesn't exist or may have moved. Head back to Bizy Site to explore our services, work, or get in touch.",
  robots: {
    index: false,
    follow: true,
  },
};

const helpfulLinks = [
  {
    href: "/",
    title: "Home",
    description: "Back to the Bizy Site homepage",
    icon: Home,
  },
  {
    href: "/services",
    title: "Services",
    description: "Web design, SEO, CRO, ads & more",
    icon: Layers,
  },
  {
    href: "/work",
    title: "Our Work",
    description: "Case studies and client results",
    icon: Briefcase,
  },
  {
    href: "/blog",
    title: "Blog",
    description: "Guides on growth, SEO and websites",
    icon: BookOpen,
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Request a free website audit",
    icon: MessageSquare,
  },
];

export default function NotFound() {
  return (
    <>
      <Header currentPage="not-found" />

      <main className="not-found-page">
        <section className="not-found-hero">
          <div className="container not-found-hero-inner">
            <div className="not-found-badge">
              <SearchX size={16} />
              <span>Error 404</span>
            </div>

            <p className="not-found-code" aria-hidden="true">
              404
            </p>

            <h1 className="not-found-title">Page not found</h1>
            <p className="not-found-subtitle">
              The page you&apos;re looking for doesn&apos;t exist, was moved, or the link may be
              outdated. Let&apos;s get you back on track.
            </p>

            <div className="not-found-actions">
              <Link href="/" className="btn btn-primary">
                Go to homepage
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-outline not-found-outline-btn">
                Contact us
              </Link>
            </div>
          </div>
        </section>

        <section className="not-found-links-section section-padding">
          <div className="container">
            <div className="text-center" style={{ marginBottom: "36px" }}>
              <span className="section-tag">Helpful links</span>
              <h2 className="section-title">Try one of these instead</h2>
              <p className="section-sub" style={{ marginBottom: 0 }}>
                Popular places people head when they land here by mistake.
              </p>
            </div>

            <div className="not-found-links-grid">
              {helpfulLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link key={link.href} href={link.href} className="not-found-link-card">
                    <span className="not-found-link-icon">
                      <Icon size={20} />
                    </span>
                    <span className="not-found-link-copy">
                      <span className="not-found-link-title">{link.title}</span>
                      <span className="not-found-link-desc">{link.description}</span>
                    </span>
                    <ArrowRight size={16} className="not-found-link-arrow" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
