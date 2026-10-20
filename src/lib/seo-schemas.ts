export const SITE_URL = "https://trustandhoperad.com";
export const LOGO_URL = `${SITE_URL}/tahrad-logo.png`;
export const ICON_URL = `${SITE_URL}/tahrad-icon.png`;

/** Organization + Website graph used site-wide (factual business identity). */
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "Organization", "DiagnosticLab", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "TAHRAD",
      legalName: "Trust and Hope Rad Pvt. Ltd.",
      alternateName: ["TAHRAD Teleradiology", "Trust and Hope Rad Pvt. Ltd."],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
        caption: "TAHRAD",
      },
      image: LOGO_URL,
      description:
        "TAHRAD (Trust and Hope Rad Pvt. Ltd.) is a 24x7 teleradiology reporting provider serving hospitals and diagnostic centres across India with CT, MRI, X-Ray, PET, ultrasound, and subspecialty reads.",
      email: "admin@trustandhoperad.com",
      telephone: "+918123388860",
      sameAs: [
        "https://in.linkedin.com/company/trust-and-hope-rad?trk=public_post_feed-actor-name",
        "https://wa.me/918123388860",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "#1035, 4th 'M' Block, Dr. Rajkumar Road, Rajajinagar",
        addressLocality: "Bangalore",
        postalCode: "560010",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      medicalSpecialty: ["Radiology", "DiagnosticImaging"],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      knowsAbout: [
        "Teleradiology",
        "CT Scan Reporting",
        "MRI Reporting",
        "X-Ray Reporting",
        "Emergency Nighthawk Reads",
        "Subspecialty Radiology",
        "PACS Integration",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Teleradiology Reporting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "24x7 Full-Spectrum Teleradiology Reporting",
              description:
                "Round-the-clock diagnostic reporting for CT, MRI, X-Ray, Ultrasound, and PET studies.",
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: "IN",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Emergency Stat & Nighthawk Reads",
              description:
                "Rapid turnaround reporting (15-30 minutes) for emergency trauma, stroke, and critical care cases.",
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: "IN",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Subspecialty Radiology Reporting",
              description:
                "Expert reads in neuroradiology, musculoskeletal, oncology, cardiothoracic, and obstetric imaging.",
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: "IN",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "PACS Integration & Cloud Workflow",
              description:
                "Cloud PACS connectivity for DICOM study upload and digital report delivery.",
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: "IN",
            },
          },
        ],
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+918123388860",
          contactType: "customer service",
          email: "admin@trustandhoperad.com",
          availableLanguage: ["English", "Hindi"],
          areaServed: "IN",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "TAHRAD | 24x7 Teleradiology Services",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export function getWebPageSchema({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  const url = path.startsWith("http") ? path : `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((element, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: element.name,
      item: element.item.startsWith("http") ? element.item : `${SITE_URL}${element.item}`,
    })),
  };
}
