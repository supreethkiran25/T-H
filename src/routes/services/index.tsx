import { createFileRoute, Link } from "@tanstack/react-router";
import { brandLogos, BRAND_FONTS_HREF } from "@/lib/brand";
import { TAHRAD_SERVICES } from "@/lib/services-data";
import {
  ORGANIZATION_SCHEMA,
  getBreadcrumbSchema,
  getWebPageSchema,
  SITE_URL,
} from "@/lib/seo-schemas";

const logoPrimaryBlue = "/brand/tahrad-logo-primary-blue.png";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Clinical Services & Modalities | TAHRAD Teleradiology" },
      {
        name: "description",
        content:
          "Full-spectrum teleradiology reporting across CT, MRI, X-Ray, PET-CT, Ultrasound, Mammography, Subspecialty reads, and 24/7 Nighthawk emergency cover with 15–30 min TAT.",
      },
      {
        name: "keywords",
        content:
          "teleradiology services India, CT scan reporting, MRI reporting, emergency nighthawk radiology, PET-CT reporting, mammography reads, ultrasound reporting, TAHRAD modalities",
      },
      {
        property: "og:title",
        content: "Clinical Services & Modalities | TAHRAD Teleradiology",
      },
      {
        property: "og:description",
        content:
          "Subspecialty teleradiology for hospitals and diagnostic centres across India. 15–30 min emergency TAT, 24/7/365 coverage.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/services` },
      { property: "og:image", content: `${SITE_URL}/tahrad-logo.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/services` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: BRAND_FONTS_HREF,
      },
      { rel: "stylesheet", href: "/tah.css?v=20261019_v13" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORGANIZATION_SCHEMA),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          getWebPageSchema({
            name: "Clinical Services & Modalities | TAHRAD Teleradiology",
            description:
              "Full-spectrum teleradiology reporting across CT, MRI, X-Ray, PET-CT, Ultrasound, Mammography, Subspecialty reads, and 24/7 Nighthawk emergency cover with 15–30 min TAT.",
            path: "/services",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          getBreadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
          ]),
        ),
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="services-page-wrap">
      {/* HEADER */}
      <header className="nav" id="top-nav">
        <div className="container">
          <div className="nav-wrap">
            <Link to="/" className="brand" aria-label="TAHRAD">
              <img className="brand-logo brand-logo--primary" src={logoPrimaryBlue} alt="TAHRAD" />
            </Link>
            <nav className="links">
              <Link to="/">Home</Link>
              <Link to="/services" style={{ color: "var(--brand-blue)" }}>
                Services
              </Link>
              <a href="/#how-it-works">How it works</a>
              <a href="/#reporting-desk">Reporting desk</a>
              <a href="/#coverage">Coverage</a>
              <a href="/#for-radiologists">For radiologists</a>
              <Link to="/our-team">Our Team</Link>
            </nav>
            <div className="nav-actions">
              <a
                href="https://pacs.trustandhoperad.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-login-link"
              >
                Hospital login
              </a>
              <a href="/#pilot" className="btn-tah-primary btn-nav-pilot">
                Request a pilot →
              </a>
            </div>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: "110px", paddingBottom: "80px", background: "#fbfcff" }}>
        <div className="container">
          {/* Hero Section of Services */}
          <div className="mb-5 pb-3">
            <span className="eyebrow">TAHRAD CLINICAL MODALITIES · 24/7/365</span>
            <h1
              className="section-h2"
              style={{ fontSize: "clamp(34px, 4.4vw, 54px)", marginTop: "12px" }}
            >
              Full-spectrum reporting. <mark className="tah-highlight-yellow">One partner.</mark>
            </h1>
            <p className="section-lead-max">
              Every modality is read by verified subspecialists with a running clinical clock,
              guaranteed turnaround SLAs, and direct in-case telephone and WhatsApp access.
            </p>
            <div className="d-flex flex-wrap gap-2 mt-3">
              <span className="tag-pill">Emergency: 15–30 min TAT</span>
              <span className="tag-pill">PACS to PACS Encrypted DICOM</span>
              <span className="tag-pill">Dual-tier QA Audits</span>
              <span className="tag-pill">Direct Radiologist Line</span>
            </div>
          </div>

          {/* Conflict reconciliation callout banner */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0, 40, 250, 0.12)",
              borderRadius: "12px",
              padding: "16px 20px",
              marginBottom: "36px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <span style={{ fontSize: "20px" }}>ℹ️</span>
            <div style={{ fontSize: "13.5px", color: "var(--brand-gray)", lineHeight: 1.5 }}>
              <strong style={{ color: "var(--brand-blue)" }}>
                Comprehensive Modality Directory:
              </strong>{" "}
              This catalogue includes both verified <strong>USG / Ultrasound reporting</strong>{" "}
              (preserved from the active service panel and client review) and{" "}
              <strong>Mammography (MMG)</strong> (from the 2026–2027 website redesign
              specification). Click any category below to view detailed clinical study protocols and
              turnaround commitments.
            </div>
          </div>

          {/* Modalities Grid: All 9 Services */}
          <div className="row g-4">
            {TAHRAD_SERVICES.map((svc) => (
              <div key={svc.id} className="col-12 col-md-6 col-lg-4">
                <div className="modality-card" style={{ height: "100%" }}>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="modality-abbr-box">{svc.abbr}</div>
                    <span className="tag-pill">{svc.badge}</span>
                  </div>

                  <h2 className="modality-title" style={{ fontSize: "20px" }}>
                    {svc.name}
                  </h2>
                  <p className="modality-desc" style={{ marginBottom: "16px" }}>
                    {svc.description}
                  </p>

                  <div
                    style={{
                      fontSize: "12.5px",
                      color: "var(--brand-blue)",
                      marginBottom: "16px",
                      fontWeight: 600,
                    }}
                  >
                    <div>⚡ Emergency TAT: {svc.turnaroundEmergency}</div>
                    <div>🕒 Routine TAT: {svc.turnaroundRoutine}</div>
                  </div>

                  <div className="modality-tags mb-3">{svc.tags.join(" · ")}</div>

                  <div className="mt-auto d-flex flex-column gap-2 pt-2 border-top">
                    <Link
                      to="/services/$serviceId"
                      params={{ serviceId: svc.id }}
                      className="modality-pilot-link"
                      style={{ fontSize: "13.5px" }}
                    >
                      View clinical protocols & details →
                    </Link>
                    <a href={`/#pilot`} className="btn-tah-secondary btn-sm text-center mt-1">
                      Request a pilot for {svc.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer-redesign">
        <div className="container">
          <div className="row g-4 pb-4 border-bottom-blue">
            <div className="col-12 col-lg-6">
              <Link to="/" className="brand footer-brand mb-2 d-inline-block">
                <img className="brand-logo footer-logo" src={logoPrimaryBlue} alt="TAHRAD" />
              </Link>
              <p className="footer-tagline">
                Subspecialty teleradiology for hospitals and diagnostic centres across India.
                24/7/365.
              </p>
            </div>
            <div className="col-12 col-lg-6 text-lg-end">
              <div className="footer-copy">
                © 2026 Trust & Hope Rad Pvt. Ltd. All rights reserved.
              </div>
              <div className="footer-legal-links mt-1">
                <Link to="/">Privacy</Link> · <Link to="/">Terms</Link> ·{" "}
                <Link to="/">Data security</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
