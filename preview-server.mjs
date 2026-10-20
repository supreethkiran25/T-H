import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { tahMarkup } from "./src/lib/tah-markup.ts";
import { TAHRAD_SERVICES } from "./src/lib/services-data.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const PUBLIC_DIR = path.join(__dirname, "public");
const SRC_DIR = path.join(__dirname, "src");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function getClientScript() {
  return `
    document.addEventListener("DOMContentLoaded", () => {
      // 1. Mobile Drawer Toggle
      const burger = document.getElementById("burger-btn");
      const drawer = document.getElementById("mobile-drawer");
      if (burger && drawer) {
        burger.addEventListener("click", () => {
          burger.classList.toggle("active");
          drawer.classList.toggle("open");
        });
        drawer.querySelectorAll("a").forEach(link => {
          link.addEventListener("click", () => {
            burger.classList.remove("active");
            drawer.classList.remove("open");
          });
        });
      }

      // 2. Study Moves Row Click
      const studyRows = document.querySelectorAll(".study-move-row");
      studyRows.forEach(row => {
        row.addEventListener("click", () => {
          studyRows.forEach(r => r.classList.remove("active"));
          row.classList.add("active");
        });
      });

      // 3. Modality Chips in Pilot Callback Form
      const modChips = document.querySelectorAll("#modality-chips .mod-chip-btn");
      modChips.forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          btn.classList.toggle("active");
        });
      });

      // 4. Pilot Request Form Submission
      const pilotForm = document.getElementById("pilot-request-form");
      const feedbackBanner = document.getElementById("pilot-form-feedback");
      if (pilotForm && feedbackBanner) {
        pilotForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const submitBtn = document.getElementById("pilot-submit-btn");
          if (submitBtn) {
            submitBtn.textContent = "Connecting to desk...";
            submitBtn.disabled = true;
          }
          setTimeout(() => {
            feedbackBanner.style.display = "block";
            feedbackBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
            if (submitBtn) {
              submitBtn.textContent = "Callback Requested ✓";
              submitBtn.style.background = "#5CD94A";
              submitBtn.style.color = "#001270";
            }
          }, 600);
        });
      }

      // 5. City Coverage Check Modal
      const cityBtn = document.getElementById("check-city-coverage-btn");
      const cityModal = document.getElementById("city-modal");
      const cityClose = document.getElementById("modal-city-close");
      const citySearchGo = document.getElementById("city-search-go");
      const cityInput = document.getElementById("city-input-search");
      const cityResultBox = document.getElementById("city-result-box");
      const cityResultText = document.getElementById("city-result-text");

      if (cityBtn && cityModal) {
        cityBtn.addEventListener("click", () => {
          cityModal.style.display = "flex";
          if (cityInput) cityInput.focus();
        });
      }
      if (cityClose && cityModal) {
        cityClose.addEventListener("click", () => {
          cityModal.style.display = "none";
        });
      }
      if (cityModal) {
        cityModal.addEventListener("click", (e) => {
          if (e.target === cityModal) cityModal.style.display = "none";
        });
      }
      if (citySearchGo && cityInput && cityResultBox && cityResultText) {
        citySearchGo.addEventListener("click", () => {
          const val = cityInput.value.trim();
          if (!val) return;
          cityResultText.textContent = val + " is fully covered with 15–30 min emergency turnaround and subspecialty reads available 24/7/365.";
          cityResultBox.style.display = "block";
        });
      }

      // 6. Interactive Reporting Desk Table Rows
      const deskRows = document.querySelectorAll(".desk-row");
      deskRows.forEach(row => {
        row.addEventListener("click", () => {
          deskRows.forEach(r => r.classList.remove("active-selected"));
          row.classList.add("active-selected");
        });
      });

      // 7. Live seconds counter tick
      const timeCells = document.querySelectorAll(".live-tick-time");
      setInterval(() => {
        timeCells.forEach(cell => {
          let s = parseInt(cell.getAttribute("data-seconds") || "0", 10);
          s += 1;
          cell.setAttribute("data-seconds", s.toString());
          const mins = Math.floor(s / 60).toString().padStart(2, '0');
          const secs = (s % 60).toString().padStart(2, '0');
          cell.textContent = mins + ":" + secs;
        });
      }, 1000);

      // 8. Back to Top Button
      const btt = document.getElementById("back-to-top");
      if (btt) {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
            btt.style.display = "block";
          } else {
            btt.style.display = "none";
          }
        });
        btt.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    });
  `;
}

function renderHtmlPage({ title, description, content }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@700;800&display=swap">
  <link rel="stylesheet" href="/tah.css?v=20261019_v15">
  <link rel="stylesheet" href="/styles.css">
  <link rel="icon" href="/favicon.png" type="image/png">
  <style>
    /* Smooth Anchor Scrolling & Modal Utilities */
    html { scroll-behavior: smooth; }
    .city-modal-overlay {
      position: fixed; inset: 0; background: rgba(0, 18, 112, 0.65);
      backdrop-filter: blur(4px); display: none; align-items: center; justify-content: center;
      z-index: 99999; padding: 20px;
    }
    .city-modal-card {
      background: #ffffff; border-radius: 16px; width: 100%; max-width: 480px; padding: 28px;
      box-shadow: 0 20px 50px rgba(0, 40, 250, 0.25);
    }
    .modal-close-btn {
      background: none; border: none; font-size: 20px; font-weight: bold; cursor: pointer; color: #64748B;
    }
  </style>
</head>
<body>
  ${content}
  <script>${getClientScript()}</script>
</body>
</html>`;
}

function renderServicesIndex() {
  const cardsHtml = TAHRAD_SERVICES.map(service => `
    <div class="col-12 col-md-6 col-lg-3">
      <a href="/services/${service.id}" class="text-decoration-none">
        <div class="modality-card h-100 p-4" style="border: 1px solid #E2E8F0; border-radius: 16px; background: #ffffff; transition: transform 0.2s, box-shadow 0.2s;">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="modality-abbr fw-bold fs-4 text-primary">${service.abbr}</span>
            <span class="badge bg-light text-primary border">${service.badge}</span>
          </div>
          <h3 class="fs-5 fw-bold text-dark mb-2">${service.name}</h3>
          <p class="small text-muted mb-3">${service.description}</p>
          <div class="d-flex justify-content-between text-xs text-secondary border-top pt-2" style="font-size: 13px;">
            <span>⚡ TAT: <strong>${service.turnaroundEmergency}</strong></span>
            <span class="text-primary fw-bold">View details →</span>
          </div>
        </div>
      </a>
    </div>
  `).join("");

  return `
    <header class="nav" id="top-nav">
      <div class="container">
        <div class="nav-wrap py-3 d-flex justify-content-between align-items-center">
          <a href="/" class="brand">
            <img src="/brand/tahrad-logo-primary-blue.png" alt="TAHRAD" style="height: 28px; width: auto;">
          </a>
          <nav class="d-flex gap-3 align-items-center">
            <a href="/" class="text-decoration-none text-dark fw-medium">Home</a>
            <a href="/services" class="text-decoration-none text-primary fw-bold">Services</a>
            <a href="/our-team" class="text-decoration-none text-dark fw-medium">Our Team</a>
            <a href="/#pilot" class="btn-tah-primary btn-sm">Request a pilot</a>
          </nav>
        </div>
      </div>
    </header>

    <main class="py-5 bg-light" style="min-height: 80vh;">
      <div class="container">
        <div class="text-center max-w-3xl mx-auto mb-5">
          <span class="eyebrow">TAHRAD CLINICAL CAPABILITIES</span>
          <h1 class="display-5 fw-bold text-dark mt-2 mb-3">Every Modality, Subspecialty-Matched</h1>
          <p class="lead text-muted">All 8 diagnostic imaging modalities with guaranteed turnaround times, subspecialty reads, and direct radiologist communication.</p>
        </div>
        <div class="row g-4">
          ${cardsHtml}
        </div>
        <div class="text-center mt-5">
          <a href="/#pilot" class="btn-tah-primary">Book a 14-day trial for your centre →</a>
        </div>
      </div>
    </main>

    <footer class="footer-redesign py-4 text-center text-white" style="background: var(--brand-blue);">
      <div class="container small">
        © 2026 Trust and Hope Rad Pvt. Ltd. All rights reserved. · <a href="/" class="text-white">Return to Home</a>
      </div>
    </footer>
  `;
}

function renderServiceDetail(serviceId) {
  const service = TAHRAD_SERVICES.find(s => s.id === serviceId) || TAHRAD_SERVICES[0];
  return `
    <header class="nav" id="top-nav">
      <div class="container">
        <div class="nav-wrap py-3 d-flex justify-content-between align-items-center">
          <a href="/" class="brand">
            <img src="/brand/tahrad-logo-primary-blue.png" alt="TAHRAD" style="height: 28px; width: auto;">
          </a>
          <nav class="d-flex gap-3 align-items-center">
            <a href="/" class="text-decoration-none text-dark fw-medium">Home</a>
            <a href="/services" class="text-decoration-none text-primary fw-medium">All Modalities</a>
            <a href="/#pilot" class="btn-tah-primary btn-sm">Request a pilot</a>
          </nav>
        </div>
      </div>
    </header>

    <main class="py-5" style="min-height: 80vh;">
      <div class="container">
        <div class="row g-5 align-items-center mb-5">
          <div class="col-12 col-lg-7">
            <div class="d-inline-flex align-items-center gap-2 px-3 py-1 bg-light rounded-pill mb-3">
              <span class="fw-bold text-primary">${service.abbr}</span>
              <span class="text-muted">·</span>
              <span class="small text-muted">${service.badge}</span>
            </div>
            <h1 class="display-4 fw-bold text-dark mb-3">${service.name}</h1>
            <p class="fs-5 text-primary fw-medium mb-3">${service.headline}</p>
            <p class="lead text-muted mb-4">${service.description}</p>
            <div class="d-flex flex-wrap gap-4 mb-4 p-4 bg-light rounded-4">
              <div>
                <span class="small text-muted d-block">Emergency SLA</span>
                <strong class="fs-4 text-danger">${service.turnaroundEmergency}</strong>
              </div>
              <div>
                <span class="small text-muted d-block">Routine TAT</span>
                <strong class="fs-4 text-dark">${service.turnaroundRoutine}</strong>
              </div>
              <div>
                <span class="small text-muted d-block">Coverage</span>
                <strong class="fs-4 text-primary">${service.coverageHours}</strong>
              </div>
            </div>
            <a href="/#pilot" class="btn-tah-primary me-2">Request ${service.abbr} pilot →</a>
            <a href="/services" class="btn-tah-secondary">← Back to all modalities</a>
          </div>

          <div class="col-12 col-lg-5">
            <div class="p-4 rounded-4 shadow-sm" style="background: var(--brand-blue); color: #ffffff;">
              <h3 class="fs-5 fw-bold mb-3 text-white">Clinical Scope & Covered Studies</h3>
              <ul class="list-unstyled mb-4" style="line-height: 1.8;">
                ${service.studiesCovered.map(item => `<li>✓ ${item}</li>`).join("")}
              </ul>
              <h4 class="fs-6 fw-bold text-white-50 text-uppercase mb-2">Quality & Protocols</h4>
              <ul class="list-unstyled small text-white-50 mb-0" style="line-height: 1.6;">
                ${service.clinicalHighlights.map(h => `<li>• ${h}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer-redesign py-4 text-center text-white" style="background: var(--brand-blue);">
      <div class="container small">
        © 2026 Trust and Hope Rad Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  `;
}

function renderTeamPage() {
  return `
    <header class="nav" id="top-nav">
      <div class="container">
        <div class="nav-wrap py-3 d-flex justify-content-between align-items-center">
          <a href="/" class="brand">
            <img src="/brand/tahrad-logo-primary-blue.png" alt="TAHRAD" style="height: 28px; width: auto;">
          </a>
          <nav class="d-flex gap-3 align-items-center">
            <a href="/" class="text-decoration-none text-dark fw-medium">Home</a>
            <a href="/services" class="text-decoration-none text-dark fw-medium">Services</a>
            <a href="/our-team" class="text-decoration-none text-primary fw-bold">Our Team</a>
            <a href="/#pilot" class="btn-tah-primary btn-sm">Request a pilot</a>
          </nav>
        </div>
      </div>
    </header>

    <main class="py-5" style="min-height: 80vh;">
      <div class="container">
        <div class="text-center max-w-3xl mx-auto mb-5">
          <span class="eyebrow">CLINICAL LEADERSHIP</span>
          <h1 class="display-5 fw-bold text-dark mt-2 mb-3">140+ Fellowship-Trained Radiologists</h1>
          <p class="lead text-muted">A dedicated clinical operations desk backed by subspecialists in Neuroradiology, MSK, Oncology, Cardiothoracic, and Emergency Imaging.</p>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-12 col-md-4">
            <div class="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
              <div class="fs-1 mb-2">🧠</div>
              <h3 class="fs-5 fw-bold">Neuroradiology & Stroke</h3>
              <p class="small text-muted">STAT brain CT/MRI, perfusion studies, hyperacute ischemic stroke workflows.</p>
              <span class="badge bg-primary-subtle text-primary mt-auto">15–30 min Emergency SLA</span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
              <div class="fs-1 mb-2">🦴</div>
              <h3 class="fs-5 fw-bold">MSK & Spine</h3>
              <p class="small text-muted">Sports medicine, trauma joints, degenerative spine, complex tumour staging.</p>
              <span class="badge bg-primary-subtle text-primary mt-auto">Fellowship Subspecialists</span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
              <div class="fs-1 mb-2">🫀</div>
              <h3 class="fs-5 fw-bold">Thoracic & Cardiac</h3>
              <p class="small text-muted">Coronary CT angiography, HRCT chest, interstitial lung disease protocols.</p>
              <span class="badge bg-primary-subtle text-primary mt-auto">24/7/365 Desk Access</span>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <a href="/#pilot" class="btn-tah-primary">Connect with our Lead Radiologist →</a>
        </div>
      </div>
    </main>

    <footer class="footer-redesign py-4 text-center text-white" style="background: var(--brand-blue);">
      <div class="container small">
        © 2026 Trust and Hope Rad Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  `;
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, "http://" + (req.headers.host || "localhost"));
  const pathname = decodeURIComponent(parsedUrl.pathname);

  // 1. Static Files from public or src
  if (pathname === "/styles.css") {
    const cssPath = path.join(SRC_DIR, "styles.css");
    if (fs.existsSync(cssPath)) {
      res.writeHead(200, { "Content-Type": "text/css; charset=utf-8" });
      return fs.createReadStream(cssPath).pipe(res);
    }
  }

  const publicFilePath = path.join(PUBLIC_DIR, pathname.startsWith("/") ? pathname.slice(1) : pathname);
  if (fs.existsSync(publicFilePath) && fs.statSync(publicFilePath).isFile()) {
    const ext = path.extname(publicFilePath).toLowerCase();
    const mime = MIME_TYPES[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": mime });
    return fs.createReadStream(publicFilePath).pipe(res);
  }

  // 2. HTML Routes
  if (pathname === "/" || pathname === "/index.html") {
    const html = renderHtmlPage({
      title: "TAHRAD | 24/7/365 Subspecialty Teleradiology",
      description: "Every scan read. Every report on the clock. Subspecialty radiologists for CT, MRI, X-ray & PET with a live reporting desk across India.",
      content: tahMarkup,
    });
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html);
  }

  if (pathname === "/services" || pathname === "/services/") {
    const html = renderHtmlPage({
      title: "Clinical Services & Modalities | TAHRAD",
      description: "Full-spectrum teleradiology reporting across CT, MRI, X-Ray, PET, Ultrasound, and Subspecialty reads.",
      content: renderServicesIndex(),
    });
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html);
  }

  if (pathname.startsWith("/services/")) {
    const serviceId = pathname.replace("/services/", "").replace(/\/$/, "");
    const html = renderHtmlPage({
      title: serviceId.toUpperCase() + " Reporting | TAHRAD",
      description: "Subspecialty " + serviceId.toUpperCase() + " reporting with 15–30 min emergency turnaround.",
      content: renderServiceDetail(serviceId),
    });
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html);
  }

  if (pathname === "/our-team" || pathname === "/our-team/") {
    const html = renderHtmlPage({
      title: "Our Radiologists & Leadership | TAHRAD",
      description: "Clinical leadership and fellowship-trained radiologists across subspecialties.",
      content: renderTeamPage(),
    });
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(html);
  }

  // 404 Fallback
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<h1>404 Page Not Found</h1><p><a href="/">Return to Home</a></p>`);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`\n======================================================`);
  console.log(`  🚀 TAHRAD Website Running on Localhost!`);
  console.log(`  🔗 Local:   http://localhost:${PORT}`);
  console.log(`  🔗 Network: http://127.0.0.1:${PORT}`);
  console.log(`======================================================\n`);
});
