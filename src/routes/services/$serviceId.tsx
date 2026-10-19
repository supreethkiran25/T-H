import { createFileRoute, Link } from "@tanstack/react-router";
import { brandLogos, BRAND_FONTS_HREF } from "@/lib/brand";
import { getServiceById, TAHRAD_SERVICES } from "@/lib/services-data";
import {
  ORGANIZATION_SCHEMA,
  getBreadcrumbSchema,
  getWebPageSchema,
  SITE_URL,
} from "@/lib/seo-schemas";

const logoPrimaryBlue = "/brand/tahrad-logo-primary-blue.png";

export const Route = createFileRoute("/services/$serviceId")({
  head: ({ params }) => {
    const service = getServiceById(params.serviceId);
    const serviceName = service ? service.name : "Clinical Service";
    return {
      meta: [
        { title: `${serviceName} | TAHRAD Subspecialty Teleradiology` },
        {
          name: "description",
          content: service
            ? `${service.name} by fellowship-trained subspecialists at TAHRAD. ${service.turnaroundEmergency} emergency turnaround, 24/7/365 coverage.`
            : "TAHRAD Subspecialty Teleradiology reporting services across India.",
        },
        {
          property: "og:title",
          content: `${serviceName} | TAHRAD Subspecialty Teleradiology`,
        },
        {
          property: "og:description",
          content: service
            ? `${service.headline} Emergency TAT: ${service.turnaroundEmergency}.`
            : "TAHRAD Subspecialty Teleradiology reporting services across India.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${SITE_URL}/services/${params.serviceId}` },
        { property: "og:image", content: `${SITE_URL}/tahrad-logo.png` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "robots", content: "index, follow" },
      ],
      links: [
        { rel: "canonical", href: `${SITE_URL}/services/${params.serviceId}` },
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
              name: `${serviceName} | TAHRAD Subspecialty Teleradiology`,
              description: service?.description ?? "TAHRAD Teleradiology clinical service.",
              path: `/services/${params.serviceId}`,
            }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", item: "/" },
              { name: "Services", item: "/services" },
              { name: serviceName, item: `/services/${params.serviceId}` },
            ]),
          ),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { serviceId } = Route.useParams();
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: "60vh", marginTop: "100px" }}>
        <h1 className="section-h2">Service Not Found</h1>
        <p className="text-muted">
          The clinical modality requested does not exist or has been relocated.
        </p>
        <Link to="/services" className="btn-tah-primary mt-3">
          View All Services →
        </Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
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

      <main style={{ paddingTop: "110px", paddingBottom: "90px", background: "#fbfcff" }}>
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb mb-0" style={{ fontSize: "13.5px" }}>
              <li className="breadcrumb-item">
                <Link to="/" style={{ color: "var(--brand-gray)", textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/services" style={{ color: "var(--brand-gray)", textDecoration: "none" }}>
                  Services
                </Link>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
                style={{ color: "var(--brand-blue)", fontWeight: 600 }}
              >
                {service.name}
              </li>
            </ol>
          </nav>

          <div className="row g-5">
            {/* Left Content Column */}
            <div className="col-12 col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div
                  className="modality-abbr-box"
                  style={{ width: "36px", height: "36px", fontSize: "13px", margin: 0 }}
                >
                  {service.abbr}
                </div>
                <span className="eyebrow" style={{ margin: 0 }}>
                  TAHRAD SUBSPECIALTY MODALITY
                </span>
              </div>

              <h1
                className="section-h2"
                style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: "14px 0" }}
              >
                {service.name}
              </h1>

              <p
                className="lead"
                style={{
                  color: "var(--brand-blue)",
                  fontWeight: 600,
                  fontSize: "19px",
                  lineHeight: 1.5,
                }}
              >
                {service.headline}
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "var(--brand-gray)",
                  marginBottom: "32px",
                }}
              >
                {service.description}
              </p>

              {/* Source Conflict Reconciliation Note */}
              {service.conflictNote && (
                <div
                  style={{
                    background: "#f0f4ff",
                    border: "1px solid rgba(0, 40, 250, 0.15)",
                    borderRadius: "10px",
                    padding: "14px 18px",
                    marginBottom: "32px",
                    fontSize: "13px",
                    color: "var(--brand-blue)",
                  }}
                >
                  <strong>Clinical Portfolio Alignment:</strong> {service.conflictNote}
                </div>
              )}

              {/* Covered Study Types List */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0, 40, 250, 0.12)",
                  borderRadius: "16px",
                  padding: "32px 28px",
                  marginBottom: "36px",
                  boxShadow: "0 6px 20px rgba(0, 40, 250, 0.04)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "20px",
                    color: "var(--brand-blue)",
                    marginBottom: "18px",
                  }}
                >
                  Studies & Examination Protocols Covered
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {service.studiesCovered.map((study, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "14.5px",
                        color: "var(--brand-gray)",
                      }}
                    >
                      <span style={{ color: "var(--brand-blue)", fontWeight: 700 }}>✓</span>
                      <span>{study}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinical Quality & Governance Highlights */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0, 40, 250, 0.12)",
                  borderRadius: "16px",
                  padding: "32px 28px",
                  marginBottom: "36px",
                  boxShadow: "0 6px 20px rgba(0, 40, 250, 0.04)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "20px",
                    color: "var(--brand-blue)",
                    marginBottom: "18px",
                  }}
                >
                  Clinical Governance & Quality Standards
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {service.clinicalHighlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "14.5px",
                        color: "var(--brand-gray)",
                      }}
                    >
                      <span style={{ color: "var(--brand-green)", fontWeight: 700 }}>•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Box */}
              <div
                style={{
                  background: "var(--brand-blue)",
                  color: "#ffffff",
                  borderRadius: "16px",
                  padding: "36px 32px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "24px",
                    color: "#ffffff",
                    marginBottom: "10px",
                  }}
                >
                  Ready to test our turnaround on {service.name}?
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "15px",
                    marginBottom: "22px",
                  }}
                >
                  Send us your next batch of studies. Test our subspecialist precision and
                  running-clock visibility with no long-term commitment.
                </p>
                <a href="/#pilot" className="btn-tah-white">
                  Request a pilot for {service.name} →
                </a>
              </div>
            </div>

            {/* Right Sidebar Column */}
            <div className="col-12 col-lg-4">
              <div
                style={{
                  position: "sticky",
                  top: "100px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {/* SLA Summary Card */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(0, 40, 250, 0.14)",
                    borderRadius: "16px",
                    padding: "26px",
                    boxShadow: "0 10px 30px rgba(0, 40, 250, 0.06)",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "15px",
                      color: "var(--brand-blue)",
                      marginBottom: "18px",
                    }}
                  >
                    SERVICE SLA COMMITMENT
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div>
                      <div
                        style={{
                          fontSize: "11.5px",
                          fontWeight: 700,
                          color: "var(--brand-gray)",
                          textTransform: "uppercase",
                        }}
                      >
                        Emergency STAT Turnaround
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "var(--brand-blue)",
                        }}
                      >
                        {service.turnaroundEmergency}
                      </div>
                    </div>

                    <div style={{ height: "1px", background: "rgba(0, 40, 250, 0.08)" }} />

                    <div>
                      <div
                        style={{
                          fontSize: "11.5px",
                          fontWeight: 700,
                          color: "var(--brand-gray)",
                          textTransform: "uppercase",
                        }}
                      >
                        Routine & Day Shift TAT
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "var(--brand-blue)",
                        }}
                      >
                        {service.turnaroundRoutine}
                      </div>
                    </div>

                    <div style={{ height: "1px", background: "rgba(0, 40, 250, 0.08)" }} />

                    <div>
                      <div
                        style={{
                          fontSize: "11.5px",
                          fontWeight: 700,
                          color: "var(--brand-gray)",
                          textTransform: "uppercase",
                        }}
                      >
                        Coverage Availability
                      </div>
                      <div
                        style={{ fontSize: "14px", fontWeight: 600, color: "var(--brand-blue)" }}
                      >
                        {service.coverageHours}
                      </div>
                    </div>

                    <div style={{ height: "1px", background: "rgba(0, 40, 250, 0.08)" }} />

                    <div>
                      <div
                        style={{
                          fontSize: "11.5px",
                          fontWeight: 700,
                          color: "var(--brand-gray)",
                          textTransform: "uppercase",
                        }}
                      >
                        Subspecialist Match
                      </div>
                      <div
                        style={{ fontSize: "13.5px", color: "var(--brand-gray)", marginTop: "2px" }}
                      >
                        {service.subspecialty}
                      </div>
                    </div>
                  </div>

                  <a href="/#pilot" className="btn-tah-primary w-100 text-center mt-4">
                    Request a pilot →
                  </a>
                </div>

                {/* Other Modalities Quick Links */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(0, 40, 250, 0.1)",
                    borderRadius: "14px",
                    padding: "20px",
                  }}
                >
                  <h5
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "13px",
                      color: "var(--brand-blue)",
                      marginBottom: "14px",
                    }}
                  >
                    OTHER CLINICAL MODALITIES
                  </h5>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {TAHRAD_SERVICES.filter((s) => s.id !== service.id).map((s) => (
                      <Link
                        key={s.id}
                        to="/services/$serviceId"
                        params={{ serviceId: s.id }}
                        style={{
                          fontSize: "13.5px",
                          color: "var(--brand-gray)",
                          textDecoration: "none",
                          padding: "6px 8px",
                          borderRadius: "6px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          background: "#fcfdff",
                        }}
                      >
                        <span>{s.name}</span>
                        <span
                          style={{ fontSize: "11px", fontWeight: 700, color: "var(--brand-blue)" }}
                        >
                          {s.abbr}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
