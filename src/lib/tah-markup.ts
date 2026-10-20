
const logoPrimaryBlue = "/brand/tahrad-logo-primary-blue.png";
const logoPrimaryWhite = "/brand/tahrad-logo-primary-white.png";
const logoIconBlue = "/brand/tahrad-icon-blue.png";

export const tahMarkup = `
<!-- HEADER / NAVIGATION (Clean White Ground, Primary Blue Links & Pill Button) -->
<header class="nav" id="top-nav">
  <div class="container">
    <div class="nav-wrap">
      <a href="#hero" class="brand" aria-label="TAHRAD">
        <img class="brand-logo brand-logo--primary" src="${logoPrimaryBlue}" alt="TAHRAD" style="height: 28px; width: auto; max-width: 120px; object-fit: contain;">
      </a>
      <nav class="links">
        <a href="#services">Services</a>
        <a href="#how-it-works">How it works</a>
        <a href="#coverage">Coverage</a>
        <a href="#for-radiologists">For radiologists</a>
      </nav>
      <div class="nav-actions">
        <a href="#pilot" class="btn-tah-primary btn-nav-pilot">Request a pilot</a>
        <button class="burger d-inline-flex d-lg-none" id="burger-btn" aria-label="Toggle navigation menu" style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 38px; height: 38px; padding: 6px; background: transparent; border: none; cursor: pointer;">
          <span style="display: block; width: 20px; height: 2.2px; background: #0028FA; margin: 2.5px 0; border-radius: 2px;"></span>
          <span style="display: block; width: 20px; height: 2.2px; background: #0028FA; margin: 2.5px 0; border-radius: 2px;"></span>
          <span style="display: block; width: 20px; height: 2.2px; background: #0028FA; margin: 2.5px 0; border-radius: 2px;"></span>
        </button>
      </div>
    </div>
  </div>
</header>

<!-- MOBILE DRAWER -->
<div class="mobile-drawer" id="mobile-drawer">
  <div class="mobile-drawer-inner">
    <a href="#services">Services</a>
    <a href="#how-it-works">How it works</a>
    <a href="#coverage">Coverage</a>
    <a href="#for-radiologists">For radiologists</a>
    <a href="/our-team">Our Team</a>
    <div class="mobile-drawer-cta mt-3 pt-2">
      <a href="#pilot" class="btn-tah-primary w-100 text-center">Request a pilot →</a>
    </div>
  </div>
</div>

<main>
  <!-- 01 HERO SECTION: Creative, Minimal & High-Impact Clinical Ops Deck -->
  <section class="hero-redesign" id="hero">
    <div class="container">
      <div class="row align-items-center g-4 g-xl-5">
        
        <!-- HERO LEFT: Strong Punchy Content & Value Proof -->
        <div class="col-12 col-lg-6">
          <div class="hero-eyebrow-badge mb-2 mb-md-3">
            <span class="live-pulse-dot" style="background: var(--brand-green);"></span>
            <span class="hero-eyebrow-text">LIVE CLINICAL DESK · 24/7/365 · ALL MODALITIES</span>
          </div>
          
          <h1 class="hero-redesign-title">
            Every scan read. Every report <mark class="tah-highlight-yellow">on the clock.</mark>
          </h1>
          
          <p class="hero-redesign-lead">
            Subspecialty radiologists for CT, MRI, X-ray and PET. Emergency reads in 15–30 minutes, 24/7/365 — with a live reporting desk that tracks every study.
          </p>

          <!-- Minimal High-Impact Value Strip -->
          <div class="hero-proof-pills mb-3 mb-md-4">
            <div class="hero-proof-pill">
              <span class="proof-icon">⚡</span>
              <span class="proof-text"><strong>15–30 min</strong> Emergency SLA</span>
            </div>
            <div class="hero-proof-pill">
              <span class="proof-icon">👨‍⚕️</span>
              <span class="proof-text"><strong>140+</strong> Fellowship Specialists</span>
            </div>
            <div class="hero-proof-pill">
              <span class="proof-icon">📞</span>
              <span class="proof-text"><strong>Direct Line</strong> to Radiologist</span>
            </div>
          </div>

          <div class="hero-cta-group">
            <a href="#pilot" class="btn-tah-primary btn-hero-primary">Request a pilot →</a>
            <a href="#how-it-works" class="btn-tah-secondary btn-hero-secondary">How it works</a>
          </div>

          <div class="hero-trial-note">
            <span>✓ 14-day clinical trial · Zero IT friction · Direct PACS DICOM integration</span>
          </div>
        </div>

        <!-- HERO RIGHT: "How your study moves" Card (TAHRAD Review 01 Spec) -->
        <div class="col-12 col-lg-6">
          <div class="study-moves-card">
            <div class="study-moves-header">
              <span class="live-pulse-dot" style="background: var(--brand-green);"></span>
              <span class="study-moves-title">How your study moves</span>
            </div>
            
            <div class="study-moves-list" id="hero-study-moves-list">
              <!-- Row 1: CT Brain · STAT -->
              <div class="study-move-row" data-case="ct">
                <div class="d-flex align-items-center gap-2">
                  <span class="live-pulse-dot" style="background: var(--brand-yellow); width: 8px; height: 8px;"></span>
                  <span class="study-move-name">CT Brain · STAT</span>
                </div>
                <span class="study-badge-reading">Reading</span>
              </div>

              <!-- Row 2: MRI Lumbar Spine -->
              <div class="study-move-row" data-case="mri">
                <div class="d-flex align-items-center gap-2">
                  <span class="live-pulse-dot" style="background: rgba(255,255,255,0.6); width: 8px; height: 8px;"></span>
                  <span class="study-move-name">MRI Lumbar Spine</span>
                </div>
                <span class="study-badge-assigned">Assigned</span>
              </div>

              <!-- Row 3: CT Angio Neck -->
              <div class="study-move-row" data-case="angio">
                <div class="d-flex align-items-center gap-2">
                  <span class="live-pulse-dot" style="background: var(--brand-green); width: 8px; height: 8px;"></span>
                  <span class="study-move-name">CT Angio Neck</span>
                </div>
                <span class="study-badge-delivered">Delivered</span>
              </div>
            </div>

            <div class="study-moves-footer mt-4 pt-3 d-flex justify-content-between align-items-center" style="border-top: 1px solid rgba(255, 255, 255, 0.18);">
              <span class="study-moves-subtext">⚡ 15–30 min emergency SLA · 24/7/365</span>
              <a href="#reporting-desk" class="text-white text-xs fw-bold text-decoration-none" style="font-size: 13px;">Inspect live desk →</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- STATS COUNTER STRIP (White Ground with Thin Blue Dividers - Redesign Page 1) -->
  <section class="stats-strip" id="stats">
    <div class="container">
      <div class="row g-4 text-center">
        <div class="col-6 col-md-3 stat-item">
          <div class="stat-num">
            <span class="counter" data-stat-counter="centres" data-target="350">350</span><span class="suffix" data-stat-suffix="centres">+</span>
          </div>
          <div class="stat-label">Hospitals & diagnostic centres served</div>
        </div>
        <div class="col-6 col-md-3 stat-item">
          <div class="stat-num">
            <span class="counter" data-stat-counter="studies" data-target="1000">1,000</span><span class="suffix" data-stat-suffix="studies">+</span>
          </div>
          <div class="stat-label">New studies reported every day</div>
        </div>
        <div class="col-6 col-md-3 stat-item">
          <div class="stat-num">
            <span class="counter" data-stat-counter="radiologists" data-target="140">140</span><span class="suffix" data-stat-suffix="radiologists">+</span>
          </div>
          <div class="stat-label">Radiologists across subspecialties</div>
        </div>
        <div class="col-6 col-md-3 stat-item">
          <div class="stat-num">
            <span class="counter" data-stat-counter="states" data-target="15">15</span><span class="suffix" data-stat-suffix="states">+</span>
          </div>
          <div class="stat-label">States covered across India</div>
        </div>
      </div>
    </div>
  </section>

  <!-- BUILT AROUND HOW YOU WORK (2-Column Header, 3 Cards with Green Tiles - Redesign Page 1) -->
  <section class="plug-in-section" id="plug-in">
    <div class="container">
      <div class="row align-items-end mb-4 pb-2 reveal">
        <div class="col-12 col-lg-7">
          <span class="eyebrow">BUILT AROUND HOW YOU WORK</span>
          <h2 class="section-h2 mb-0">One partner. Three ways to plug us in.</h2>
        </div>
        <div class="col-12 col-lg-5 text-lg-start mt-3 mt-lg-0">
          <p class="section-lead-subcopy mb-0">
            Pick the setup that matches your centre. The radiologists, quality checks and reporting desk stay the same.
          </p>
        </div>
      </div>

      <div class="row g-4 reveal-stagger">
        <!-- Card 1: Hospitals & trauma centres -->
        <div class="col-12 col-md-4">
          <div class="plug-card">
            <div class="plug-icon-tile">⚡</div>
            <h3 class="plug-card-title">Hospitals & trauma centres</h3>
            <p class="plug-card-body">
              Night and weekend cover, stat reads for stroke and trauma, and a radiologist who picks up when your ER calls.
            </p>
            <div class="plug-card-action">
              <a href="#pilot" class="plug-card-link">Emergency & night cover →</a>
            </div>
          </div>
        </div>

        <!-- Card 2: Diagnostic centres -->
        <div class="col-12 col-md-4">
          <div class="plug-card">
            <div class="plug-icon-tile">⛶</div>
            <h3 class="plug-card-title">Diagnostic centres</h3>
            <p class="plug-card-body">
              Add CT and MRI without hiring. Routine and subspecialty reads with predictable turnaround and one monthly invoice.
            </p>
            <div class="plug-card-action">
              <a href="#pilot" class="plug-card-link">Full-service reporting →</a>
            </div>
          </div>
        </div>

        <!-- Card 3: Imaging chains & groups -->
        <div class="col-12 col-md-4">
          <div class="plug-card">
            <div class="plug-icon-tile">≡</div>
            <h3 class="plug-card-title">Imaging chains & groups</h3>
            <p class="plug-card-body">
              One reporting desk across every branch. Centre-wise turnaround, volume and quality reports for your leadership.
            </p>
            <div class="plug-card-action">
              <a href="#pilot" class="plug-card-link">Multi-centre setup →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 02 WHO WE ARE (Direct Radiologist Access Promise - TAHRAD Review 02 Spec) -->
  <section class="who-we-are-redesign" id="who-we-are">
    <div class="container">
      <div class="row g-4 g-lg-5 align-items-center">
        <!-- Left Column: Content & Direct Promise -->
        <div class="col-12 col-lg-6 reveal">
          <span class="eyebrow">WHO WE ARE</span>
          <h2 class="section-h2 mb-3">
            A radiologist who <mark class="tah-highlight-yellow">picks</mark><br>
            <mark class="tah-highlight-yellow">up.</mark>
          </h2>
          <p class="who-lead-text mb-4">
            Every study has a patient waiting on it. So every TAHRAD client gets a named radiologist, a direct line, and turnaround times we're accountable to.
          </p>

          <div>
            <a href="/our-team" class="btn-tah-primary">Meet the radiologists →</a>
          </div>
        </div>

        <!-- Right Column: 3 Clean Proof Cards (Page 3 Spec) -->
        <div class="col-12 col-lg-6 reveal">
          <div class="who-cards-stack">
            <!-- Card 1 -->
            <div class="who-proof-card">
              <div class="who-proof-icon-tile">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <div>
                <h4 class="who-proof-card-title">A named lead radiologist</h4>
                <p class="who-proof-card-desc">Not a ticket queue or a shared inbox.</p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="who-proof-card">
              <div class="who-proof-icon-tile">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h4 class="who-proof-card-title">Direct line and WhatsApp</h4>
                <p class="who-proof-card-desc">Questions before, during and after the report.</p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="who-proof-card">
              <div class="who-proof-icon-tile">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <div>
                <h4 class="who-proof-card-title">Critical findings phoned in</h4>
                <p class="who-proof-card-desc">A clear escalation path, written down.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 03 HOW IT WORKS (From Scan to Signed Report - Turnover Transition Flow) -->
  <section class="how-reporting-works" id="how-it-works" style="padding: 60px 0 68px 0; background: var(--paper); border-bottom: 1px solid var(--line);">
    <div class="container">
      <div class="row justify-content-center text-center mb-4 reveal">
        <div class="col-12 col-lg-9">
          <span class="eyebrow mb-1">FROM SCAN TO SIGNED REPORT</span>
          <h2 style="font-size: clamp(26px, 3.5vw, 40px); margin-top: 6px; margin-bottom: 10px; font-family: var(--font-heading); color: var(--brand-blue);">How Teleradiology Works</h2>
          <p style="color: var(--brand-gray); font-size: 16px; max-width: 750px; margin: 0 auto;">Each of these steps is designed to facilitate the process of getting reports done, and is fully integrated with PACS.</p>
        </div>
      </div>

      <!-- DETAILED PROCESS FLOW GRID (SINGLE LINE LAYOUT WITH 3D TURNOVER TRANSITION) -->
      <div class="steps-flow-container reveal-stagger">
        <div class="steps-flow-row">
          <!-- STEP 1 -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front">
                  <div class="flip-badge-row">
                    <span class="step-num-badge" title="Image acquisition">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 2 14.9"></path><rect x="9" y="13" width="6" height="5" rx="1"></rect><path d="M10 13v-1.5a2 2 0 0 1 4 0V13"></path></svg>
                    </span>
                    <span class="step-mini-num">01</span>
                  </div>
                  <div class="flip-title">Image acquisition</div>
                  <div class="flip-hint">Flip for details ↻</div>
                </div>
                <div class="step-flip-back step-detail-card">
                  <span class="step-num-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 2 14.9"></path><rect x="9" y="13" width="6" height="5" rx="1"></rect><path d="M10 13v-1.5a2 2 0 0 1 4 0V13"></path></svg>
                  </span>
                  <h3>Image acquisition</h3>
                  <p class="step-text">A technologist at the hospital or diagnostic centre acquires the scan using standard imaging equipment (X-ray, CT, MRI, or PET).</p>
                  <div class="step-highlight">Images stored in DICOM format, the universal standard for medical imaging.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ARROW 1 -> 2 -->
          <div class="step-arrow-inline" title="Next Step">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <!-- STEP 2 -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front">
                  <div class="flip-badge-row">
                    <span class="step-num-badge" title="Secure transmission">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </span>
                    <span class="step-mini-num">02</span>
                  </div>
                  <div class="flip-title">Secure transmission</div>
                  <div class="flip-hint">Flip for details ↻</div>
                </div>
                <div class="step-flip-back step-detail-card">
                  <span class="step-num-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </span>
                  <h3>Secure transmission</h3>
                  <p class="step-text">The DICOM images are transmitted securely from your facility's PACS to ours through encrypted channels.</p>
                  <div class="step-highlight">Transmission uses encrypted channels compliant with healthcare data standards.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ARROW 2 -> 3 -->
          <div class="step-arrow-inline" title="Next Step">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <!-- STEP 3 -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front">
                  <div class="flip-badge-row">
                    <span class="step-num-badge" title="Radiologist interpretation">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"></circle><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path></svg>
                    </span>
                    <span class="step-mini-num">03</span>
                  </div>
                  <div class="flip-title">Radiologist interpretation</div>
                  <div class="flip-hint">Flip for details ↻</div>
                </div>
                <div class="step-flip-back step-detail-card">
                  <span class="step-num-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"></circle><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path></svg>
                  </span>
                  <h3>Radiologist interpretation</h3>
                  <p class="step-text">A board-certified radiologist reviews the images, identifies pathologies, and generates the draft report.</p>
                  <div class="step-highlight">Work is performed exclusively by certified specialists to ensure diagnostic precision.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ARROW 3 -> 4 -->
          <div class="step-arrow-inline" title="Next Step">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <!-- STEP 4 -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front">
                  <div class="flip-badge-row">
                    <span class="step-num-badge" title="Quality Check">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    </span>
                    <span class="step-mini-num">04</span>
                  </div>
                  <div class="flip-title">Quality Check</div>
                  <div class="flip-hint">Flip for details ↻</div>
                </div>
                <div class="step-flip-back step-detail-card">
                  <span class="step-num-badge">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  </span>
                  <h3>Quality Check</h3>
                  <p class="step-text">They validate correct findings, correct any errors, add clinical context, and finalise the report.</p>
                  <div class="step-highlight">The final report is double-checked for critical findings before communication.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ARROW 4 -> 5 -->
          <div class="step-arrow-inline" title="Next Step">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <!-- STEP 5: REPORT DELIVERY (Solid Brand Blue as in user screenshot) -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front" style="background: var(--brand-blue); color: #FFFFFF; border-color: var(--brand-blue);">
                  <div class="flip-badge-row">
                    <span class="step-num-badge" style="background: rgba(255,255,255,0.18); color: #FFFFFF;" title="Report Delivery">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M16 19h6"/><path d="M19 16v6"/></svg>
                    </span>
                    <span class="step-mini-num" style="color: rgba(255,255,255,0.8);">05</span>
                  </div>
                  <div class="flip-title" style="color: #FFFFFF;">Report Delivery</div>
                  <div class="flip-hint" style="background: rgba(255,255,255,0.18); color: #FFFFFF;">Flip for details ↻</div>
                </div>
                <div class="step-flip-back step-detail-card" style="background: var(--brand-blue); color: #FFFFFF; border-color: var(--brand-blue);">
                  <span class="step-num-badge" style="background: rgba(255,255,255,0.18); color: #FFFFFF;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M16 19h6"/><path d="M19 16v6"/></svg>
                  </span>
                  <h3 style="color: #FFFFFF;">Report Delivery</h3>
                  <p class="step-text" style="color: #E2E8F0;">The finalised report is delivered directly to referring clinicians via integrated PACS or secure portal.</p>
                  <div class="step-highlight" style="background: rgba(255,255,255,0.12); border-left-color: var(--brand-green); color: #FFFFFF;">Zero technical friction with IT support.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 04 SERVICES (Full-Spectrum Reporting, All 8 Modalities Visible at Once - TAHRAD Review 03 Spec) -->
  <section class="services-redesign" id="services">
    <div class="container">
      <div class="d-flex flex-wrap justify-content-between align-items-end mb-4 reveal">
        <div>
          <span class="eyebrow">FULL-SPECTRUM REPORTING</span>
          <h2 class="section-h2 mb-1">Every modality, all visible at once.</h2>
        </div>
        <div class="mt-2 mt-md-0">
          <a href="/services" class="link-styled-action">Each card opens its own page →</a>
        </div>
      </div>

      <div class="row g-4 reveal-stagger">
        <!-- CT -->
        <div class="col-12 col-sm-6 col-lg-3">
          <a href="/services/ct" class="modality-card-link">
            <div class="modality-card">
              <div class="modality-card-top">
                <span class="modality-abbr">CT</span>
                <span class="modality-arrow">↗</span>
              </div>
              <h3 class="modality-title">CT reporting</h3>
              <p class="modality-desc">Trauma, stroke, angio and routine CT.</p>
            </div>
          </a>
        </div>

        <!-- MRI -->
        <div class="col-12 col-sm-6 col-lg-3">
          <a href="/services/mri" class="modality-card-link">
            <div class="modality-card">
              <div class="modality-card-top">
                <span class="modality-abbr">MRI</span>
                <span class="modality-arrow">↗</span>
              </div>
              <h3 class="modality-title">MRI reporting</h3>
              <p class="modality-desc">Neuro, MSK, spine and body MRI.</p>
            </div>
          </a>
        </div>

        <!-- XR -->
        <div class="col-12 col-sm-6 col-lg-3">
          <a href="/services/x-ray" class="modality-card-link">
            <div class="modality-card">
              <div class="modality-card-top">
                <span class="modality-abbr">XR</span>
                <span class="modality-arrow">↗</span>
              </div>
              <h3 class="modality-title">X-Ray reporting</h3>
              <p class="modality-desc">High-volume chest and skeletal reads.</p>
            </div>
          </a>
        </div>

        <!-- PET -->
        <div class="col-12 col-sm-6 col-lg-3">
          <a href="/services/pet-ct" class="modality-card-link">
            <div class="modality-card">
              <div class="modality-card-top">
                <span class="modality-abbr">PET</span>
                <span class="modality-arrow">↗</span>
              </div>
              <h3 class="modality-title">PET reporting</h3>
              <p class="modality-desc">Oncology staging and response.</p>
            </div>
          </a>
        </div>

        <!-- USG -->
        <div class="col-12 col-sm-6 col-lg-3">
          <a href="/services/ultrasound" class="modality-card-link">
            <div class="modality-card">
              <div class="modality-card-top">
                <span class="modality-abbr">USG</span>
                <span class="modality-arrow">↗</span>
              </div>
              <h3 class="modality-title">USG reporting</h3>
              <p class="modality-desc">Ultrasound reads and second looks.</p>
            </div>
          </a>
        </div>

        <!-- SUB -->
        <div class="col-12 col-sm-6 col-lg-3">
          <a href="/services/subspecialty" class="modality-card-link">
            <div class="modality-card">
              <div class="modality-card-top">
                <span class="modality-abbr">SUB</span>
                <span class="modality-arrow">↗</span>
              </div>
              <h3 class="modality-title">Subspecialty reads</h3>
              <p class="modality-desc">Neuro, MSK, cardiac, paediatric.</p>
            </div>
          </a>
        </div>

        <!-- 24/7 -->
        <div class="col-12 col-sm-6 col-lg-3">
          <a href="/services/nighthawk" class="modality-card-link">
            <div class="modality-card">
              <div class="modality-card-top">
                <span class="modality-abbr">24/7</span>
                <span class="modality-arrow">↗</span>
              </div>
              <h3 class="modality-title">Nighthawk & stat</h3>
              <p class="modality-desc">Night, weekend and emergency cover.</p>
            </div>
          </a>
        </div>

        <!-- 2nd -->
        <div class="col-12 col-sm-6 col-lg-3">
          <a href="/services/second-opinion" class="modality-card-link">
            <div class="modality-card">
              <div class="modality-card-top">
                <span class="modality-abbr">2nd</span>
                <span class="modality-arrow">↗</span>
              </div>
              <h3 class="modality-title">Second opinions</h3>
              <p class="modality-desc">Independent review of complex cases.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- 05 REPORTING DESK (Interactive Control Room - Redesign Page 2 & 3) -->
  <section class="reporting-desk-section" id="reporting-desk">
    <div class="container">
      <div class="row g-5 align-items-center mb-5">
        <div class="col-12 col-lg-6 reveal">
          <span class="eyebrow">THE TAHRAD REPORTING DESK</span>
          <h2 class="section-h2 mb-3">
            Not an inbox. <mark class="tah-highlight-yellow">A control room</mark><br>
            for your reports.
          </h2>
          <p class="section-lead-subcopy mb-4">
            Most teleradiology ends at "upload and wait". With TAHRAD your team logs into one desk to track, prioritise and talk about every study.
          </p>

          <div class="desk-features-stack">
            <!-- Feat 1 -->
            <div class="desk-feature-row">
              <div class="desk-feat-icon-tile">⏱️</div>
              <div>
                <h4 class="desk-feat-heading">Live status on every study</h4>
                <p class="desk-feat-desc">Uploaded, assigned, reading, QC, delivered — with a running clock.</p>
              </div>
            </div>

            <!-- Feat 2 -->
            <div class="desk-feature-row">
              <div class="desk-feat-icon-tile">💬</div>
              <div>
                <h4 class="desk-feat-heading">Talk to the reading radiologist</h4>
                <p class="desk-feat-desc">Message or call from the case itself. No switchboard, no waiting.</p>
              </div>
            </div>

            <!-- Feat 3 -->
            <div class="desk-feature-row">
              <div class="desk-feat-icon-tile">⚡</div>
              <div>
                <h4 class="desk-feat-heading">One tap to mark stat</h4>
                <p class="desk-feat-desc">Escalate a case and watch it jump the queue in real time.</p>
              </div>
            </div>

            <!-- Feat 4 -->
            <div class="desk-feature-row">
              <div class="desk-feat-icon-tile">📈</div>
              <div>
                <h4 class="desk-feat-heading">Reports your leadership can read</h4>
                <p class="desk-feat-desc">Turnaround, volume and quality by centre, modality and shift.</p>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <a href="#pilot" class="btn-tah-primary">Take the desk tour →</a>
          </div>
        </div>

        <!-- Right: Desk Preview Table & Drawer Mockup -->
        <div class="col-12 col-lg-6 reveal">
          <div class="desk-workspace-card">
            <!-- Top Bar -->
            <div class="desk-topbar">
              <div class="d-flex align-items-center gap-2">
                <img src="${logoPrimaryBlue}" alt="TAHRAD" style="height: 24px; width: auto;">
              </div>
              <div class="desk-center-name">[Your Centre] · Bengaluru</div>
            </div>

            <!-- KPI Strip -->
            <div class="desk-kpi-bar">
              <div class="desk-kpi-item">
                <span class="desk-kpi-label">Studies today</span>
                <span class="desk-kpi-val">48</span>
              </div>
              <div class="desk-kpi-item">
                <span class="desk-kpi-label">In reading</span>
                <span class="desk-kpi-val">7</span>
              </div>
              <div class="desk-kpi-item stat-open-highlight">
                <span class="desk-kpi-label">Stat open</span>
                <span class="desk-kpi-val stat-chip-yellow">2</span>
              </div>
              <div class="desk-kpi-item">
                <span class="desk-kpi-label">Delivered</span>
                <span class="desk-kpi-val">39</span>
              </div>
            </div>

            <!-- Desk Table -->
            <div class="desk-table-container">
              <!-- Case 1 -->
              <div class="desk-row active-selected" data-status="stat reading" data-id="PT-20418" data-mod="CT" data-title="CT Head — Trauma STAT" data-doc="Dr. R. Menon" data-sub="Neuroradiology" data-time="06:12" data-stage="Reading" data-upload="CT-1 · Uploaded from your PACS">
                <div class="desk-cell-study">
                  <div class="study-title">CT Head — Trauma <span class="badge-stat">STAT</span></div>
                </div>
                <div class="desk-cell-doc">Dr. R. Menon</div>
                <div class="desk-cell-stage"><span class="badge-stage-reading">Reading</span></div>
                <div class="desk-cell-time live-tick-time" data-seconds="372">06:12</div>
              </div>

              <!-- Case 2 -->
              <div class="desk-row" data-status="assigned" data-id="PT-20402" data-mod="MRI" data-title="MRI Knee — Right" data-doc="Dr. S. Iyer" data-sub="MSK Radiology" data-time="14:40" data-stage="Assigned" data-upload="MRI-1 · Uploaded from your PACS">
                <div class="desk-cell-study">
                  <div class="study-title">MRI Knee — Right</div>
                </div>
                <div class="desk-cell-doc">Dr. S. Iyer</div>
                <div class="desk-cell-stage"><span class="badge-stage-assigned">Assigned</span></div>
                <div class="desk-cell-time live-tick-time" data-seconds="880">14:40</div>
              </div>

              <!-- Case 3 -->
              <div class="desk-row" data-status="qc" data-id="PT-20399" data-mod="X-Ray" data-title="X-Ray Chest PA" data-doc="Dr. A. Khan" data-sub="Chest & Skeletal" data-time="03:05" data-stage="QC review" data-upload="XR-1 · Uploaded from your PACS">
                <div class="desk-cell-study">
                  <div class="study-title">X-Ray Chest PA</div>
                </div>
                <div class="desk-cell-doc">Dr. A. Khan</div>
                <div class="desk-cell-stage"><span class="badge-stage-qc">QC review</span></div>
                <div class="desk-cell-time live-tick-time" data-seconds="185">03:05</div>
              </div>

              <!-- Case 4 -->
              <div class="desk-row" data-status="delivered" data-id="PT-20388" data-mod="CT" data-title="CT Abdomen — Contrast" data-doc="Dr. P. Nair" data-sub="Body Imaging" data-time="Delivered" data-stage="Delivered" data-upload="CT-1 · Signed & in PACS">
                <div class="desk-cell-study">
                  <div class="study-title">CT Abdomen — Contrast</div>
                </div>
                <div class="desk-cell-doc">Dr. P. Nair</div>
                <div class="desk-cell-stage"><span class="badge-stage-delivered">Delivered ✓</span></div>
                <div class="desk-cell-time">✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 06 WHY CENTRES SWITCH TO TAHRAD (Redesign Page 3 & Review Page 6) -->
  <section class="why-us-redesign" id="why-us">
    <div class="container">
      <div class="d-flex flex-wrap justify-content-between align-items-end mb-4 reveal">
        <div>
          <span class="eyebrow">WHY CENTRES SWITCH TO TAHRAD</span>
          <h2 class="section-h2 mb-1">Hospitals that work with us always get a call back.</h2>
        </div>
        <div class="mt-2 mt-md-0">
          <a href="#pilot" class="btn-tah-primary btn-sm">Request a pilot →</a>
        </div>
      </div>

      <div class="row g-4 reveal-stagger">
        <!-- Comparison 01 -->
        <div class="col-12 col-md-4">
          <div class="compare-card">
            <div class="compare-before">
              <span class="compare-tag-before">BEFORE</span>
              <p class="compare-text-before"><del class="compare-del">Upload and hope.</del></p>
            </div>
            <div class="compare-divider"></div>
            <div class="compare-after">
              <h4 class="compare-title-after">Turnaround stated up front</h4>
              <p class="compare-text-after">You know when each report will land, per modality.</p>
            </div>
          </div>
        </div>

        <!-- Comparison 02 -->
        <div class="col-12 col-md-4">
          <div class="compare-card">
            <div class="compare-before">
              <span class="compare-tag-before">BEFORE</span>
              <p class="compare-text-before"><del class="compare-del">Whoever is free reads your case.</del></p>
            </div>
            <div class="compare-divider"></div>
            <div class="compare-after">
              <h4 class="compare-title-after">Subspecialists, matched by case</h4>
              <p class="compare-text-after">Routed by modality and body region every time.</p>
            </div>
          </div>
        </div>

        <!-- Comparison 03 -->
        <div class="col-12 col-md-4">
          <div class="compare-card">
            <div class="compare-before">
              <span class="compare-tag-before">BEFORE</span>
              <p class="compare-text-before"><del class="compare-del">Calls that go to voicemail.</del></p>
            </div>
            <div class="compare-divider"></div>
            <div class="compare-after">
              <h4 class="compare-title-after">A radiologist who picks up</h4>
              <p class="compare-text-after">Direct line and WhatsApp, with escalation built in.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Dedicated Full-Width Solid Brand Blue Quote Banner (Redesign Page 3) -->
  <section class="clinical-ops-banner">
    <div class="container">
      <div class="clinical-ops-inner reveal text-center">
        <div class="clinical-ops-quote-mark">“</div>
        <blockquote class="clinical-ops-quote-text">
          Radio silence is the enemy of good patient care. We built our entire operation around the belief that a radiologist should be reachable, always.
        </blockquote>
        <div class="clinical-ops-author">TAHRAD CLINICAL OPERATIONS</div>
      </div>
    </div>
  </section>

  <!-- 05 PAN-INDIA COVERAGE & PILOT (TAHRAD Review 05 Spec) -->
  <section class="coverage-pilot-unified" id="coverage" style="padding: 80px 0; background: #ffffff;">
    <div class="container">
      <div class="row g-4 g-xl-5 align-items-start">
        
        <!-- Left Column: Pan-India Coverage -->
        <div class="col-12 col-lg-5 reveal">
          <span class="eyebrow">PAN-INDIA COVERAGE</span>
          
          <div class="coverage-stat-huge my-3">
            <mark class="tah-highlight-yellow">15–30 min</mark>
            <span class="coverage-stat-label">emergency turnaround, 24/7/365</span>
          </div>

          <p class="section-lead-text mb-4" style="color: var(--brand-gray); font-size: 15px; line-height: 1.6;">
            Subspecialty radiologists across India, reading in shifts so your night is someone's morning.
          </p>

          <!-- Static State Chips (Pill Chips) -->
          <div class="state-chips-cloud mb-4">
            <span class="state-chip">Karnataka</span>
            <span class="state-chip">Tamil Nadu</span>
            <span class="state-chip">Kerala</span>
            <span class="state-chip">Gujarat</span>
            <span class="state-chip">Rajasthan</span>
            <span class="state-chip">West Bengal</span>
            <span class="state-chip">Telangana</span>
            <span class="state-chip highlight-chip">+ 8 more</span>
          </div>

          <div>
            <button type="button" class="btn-tah-secondary" id="check-city-coverage-btn">Check coverage for your city →</button>
          </div>
        </div>

        <!-- Right Column: What Happens After You Submit & Pilot Callback Form -->
        <div class="col-12 col-lg-7 reveal" id="pilot">
          <div class="pilot-blue-panel" style="border-radius: 20px; box-shadow: 0 16px 40px rgba(0, 40, 250, 0.16); padding: 36px 32px; background: var(--brand-blue); color: #ffffff;">
            <span class="eyebrow" style="color: rgba(255, 255, 255, 0.85);">WHAT HAPPENS AFTER YOU SUBMIT</span>
            
            <!-- 3 Clear Steps -->
            <div class="pilot-steps-list my-3">
              <div class="pilot-step-item">
                <span class="pilot-step-num" style="color: var(--brand-yellow);">01</span>
                <span class="pilot-step-text">We call you back within 15 minutes.</span>
              </div>
              <div class="pilot-step-item">
                <span class="pilot-step-num" style="color: var(--brand-yellow);">02</span>
                <span class="pilot-step-text">We connect to your PACS and set up your desk.</span>
              </div>
              <div class="pilot-step-item">
                <span class="pilot-step-num" style="color: var(--brand-yellow);">03</span>
                <span class="pilot-step-text">You go live with a named lead radiologist.</span>
              </div>
            </div>

            <!-- Embedded Callback Form -->
            <form id="pilot-request-form" class="mt-4 pt-3 border-top" style="border-color: rgba(255,255,255,0.2) !important;">
              <div class="row g-3">
                <div class="col-12 col-md-6">
                  <label class="form-label text-white text-xs fw-bold mb-1" for="pilot-name">Your name</label>
                  <input type="text" id="pilot-name" class="form-control-custom bg-white text-dark" placeholder="Dr. Priya Sharma" required>
                </div>
                <div class="col-12 col-md-6">
                  <label class="form-label text-white text-xs fw-bold mb-1" for="pilot-centre">Hospital / centre</label>
                  <input type="text" id="pilot-centre" class="form-control-custom bg-white text-dark" placeholder="Centre name and city" required>
                </div>
                <div class="col-12 col-md-6">
                  <label class="form-label text-white text-xs fw-bold mb-1" for="pilot-email">Work email</label>
                  <input type="email" id="pilot-email" class="form-control-custom bg-white text-dark" placeholder="doctor@hospital.in" required>
                </div>
                <div class="col-12 col-md-6">
                  <label class="form-label text-white text-xs fw-bold mb-1" for="pilot-phone">Phone / WhatsApp</label>
                  <input type="tel" id="pilot-phone" class="form-control-custom bg-white text-dark" placeholder="+91" required>
                </div>
                <div class="col-12">
                  <label class="form-label text-white text-xs fw-bold mb-1" for="pilot-volume">Studies per month</label>
                  <select id="pilot-volume" class="form-control-custom bg-white text-dark">
                    <option value="under-300">Under 300 studies</option>
                    <option value="300-1000" selected>300 – 1,000 studies</option>
                    <option value="1000-plus">1,000+ studies</option>
                  </select>
                </div>

                <!-- Modalities Needed -->
                <div class="col-12">
                  <label class="form-label text-white text-xs fw-bold mb-1">Modalities you need</label>
                  <div class="modality-select-chips" id="modality-chips">
                    <button type="button" class="mod-chip-btn active" data-mod="CT">CT</button>
                    <button type="button" class="mod-chip-btn active" data-mod="MRI">MRI</button>
                    <button type="button" class="mod-chip-btn" data-mod="X-Ray">X-Ray</button>
                    <button type="button" class="mod-chip-btn" data-mod="PET-CT">PET-CT</button>
                    <button type="button" class="mod-chip-btn" data-mod="USG">USG</button>
                    <button type="button" class="mod-chip-btn" data-mod="Night cover">Night cover</button>
                  </div>
                </div>

                <!-- High-contrast White Pill Submit Button (PDF Review 05 Spec) -->
                <div class="col-12 mt-3">
                  <button type="submit" class="w-100 py-3 fw-bold rounded-pill text-uppercase border-0 shadow-sm" style="background: #ffffff; color: var(--brand-blue); font-family: var(--font-heading); font-size: 14.5px; letter-spacing: 0.04em; cursor: pointer; transition: transform 0.2s ease;" id="pilot-submit-btn">
                    Request my pilot callback →
                  </button>
                  <div class="mt-2 text-center text-white-50 text-xs">
                    🔒 No lock-in. Encrypted DICOM TLS 1.3 transfer.
                  </div>
                </div>
              </div>

              <!-- Feedback Banner -->
              <div id="pilot-form-feedback" class="pilot-feedback-banner mt-3 p-3 bg-white text-dark rounded-3" style="display: none;">
                <div class="d-flex align-items-center gap-2">
                  <span class="text-success fw-bold fs-5">✓</span>
                  <div>
                    <strong class="text-primary">Pilot callback requested!</strong>
                    <div class="small text-muted">A TAHRAD clinical coordinator will call you back within 15 minutes.</div>
                  </div>
                </div>
              </div>
            </form>

            <!-- Contact info shown once next to form -->
            <div class="mt-4 pt-3 border-top d-flex flex-wrap justify-content-between align-items-center gap-2 text-white-50 text-xs" style="border-color: rgba(255,255,255,0.18) !important;">
              <div>Direct ER line / WhatsApp: <a href="tel:+918123388860" class="text-white fw-bold text-decoration-none">+91 81233 88860</a></div>
              <div><a href="mailto:contact@trustandhoperad.com" class="text-white text-decoration-none">contact@trustandhoperad.com</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Radiologist Recruitment Full-Width White Strip (Redesign Page 4) -->
  <section class="rad-recruit-strip" id="for-radiologists">
    <div class="container">
      <div class="rad-recruit-wrap reveal">
        <div class="rad-recruit-left">
          <img src="${logoIconBlue}" alt="TAHRAD" class="rad-recruit-icon">
          <div>
            <h3 class="rad-recruit-title">Radiologist? Read with TAHRAD.</h3>
            <p class="rad-recruit-sub">Flexible shifts, subspecialty-matched studies, and a team that has your back on every call.</p>
          </div>
        </div>
        <div class="rad-recruit-right">
          <a href="/our-team" class="btn-tah-secondary btn-join-panel">Join the panel</a>
        </div>
      </div>
    </div>
  </section>
</main>

<!-- FOOTER (Solid Brand Blue Feature Ground - Redesign Page 4) -->
<footer class="footer-redesign">
  <div class="container">
    <div class="row g-4 pb-5 border-bottom-blue">
      <div class="col-12 col-lg-4">
        <a href="#hero" class="brand footer-brand mb-3 d-inline-block" aria-label="TAHRAD">
          <img class="brand-logo footer-logo" src="${logoPrimaryWhite}" alt="TAHRAD">
        </a>
        <p class="footer-tagline">
          Subspecialty teleradiology for hospitals and diagnostic centres across India. 24/7/365.
        </p>
      </div>

      <div class="col-6 col-md-3 col-lg-2 offset-lg-2">
        <h4 class="footer-col-title">SERVICES</h4>
        <ul class="footer-nav-list">
          <li><a href="/services/ct">CT reporting</a></li>
          <li><a href="/services/mri">MRI reporting</a></li>
          <li><a href="/services/x-ray">X-Ray & DR</a></li>
          <li><a href="/services/nighthawk">Nighthawk & stat</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-3 col-lg-2">
        <h4 class="footer-col-title">COMPANY</h4>
        <ul class="footer-nav-list">
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#coverage">Coverage</a></li>
          <li><a href="/our-team">Join as radiologist</a></li>
          <li><a href="#pilot">Contact</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-3 col-lg-2">
        <h4 class="footer-col-title">CLIENTS</h4>
        <ul class="footer-nav-list">
          <li><a href="https://pacs.trustandhoperad.com/login" target="_blank" rel="noopener noreferrer">Hospital login</a></li>
          <li><a href="#pilot">Request a pilot</a></li>
          <li><a href="#reporting-desk">Reporting desk</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom-bar pt-4 d-flex flex-wrap justify-content-between align-items-center">
      <div class="footer-copy">
        © 2026 Trust and Hope Rad Pvt. Ltd. All rights reserved.
      </div>
      <div class="footer-legal-links">
        <a href="#hero">Privacy</a> · 
        <a href="#hero">Terms</a> · 
        <a href="#hero">Data security</a>
      </div>
    </div>
  </div>
</footer>

<!-- FLOATING ACTION BUTTONS -->
<a href="https://wa.me/918123388860" target="_blank" rel="noopener noreferrer" class="floating-whatsapp" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.987l-1.414 5.163 5.286-1.386a9.96 9.96 0 004.787 1.22h.005c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.039-5.176-2.924-7.062A9.923 9.923 0 0012.012 2zm5.82 14.161c-.247.692-1.22 1.326-1.996 1.492-.533.113-1.229.206-3.567-.763-2.989-1.237-4.908-4.275-5.059-4.474-.148-.198-1.218-1.621-1.218-3.092 0-1.47.767-2.196 1.041-2.495.274-.298.599-.373.799-.373.199 0 .399.002.573.01.185.008.435-.07.68.518.248.598.847 2.068.921 2.217.075.149.124.323.025.522-.099.198-.149.322-.298.497-.149.174-.313.389-.447.523-.148.149-.303.311-.13.609.174.298.774 1.277 1.662 2.067 1.14 1.015 2.102 1.33 2.399 1.478.298.149.472.124.646-.075.174-.199.746-.87.945-1.168.199-.298.398-.248.671-.149.274.099 1.742.82 2.04 1.043.298.224.497.348.572.473.075.124.075.72-.172 1.412z"/></svg>
  <span>Chat on WhatsApp</span>
</a>

<button id="back-to-top" class="tah-back-to-top" aria-label="Back to Top">↑</button>

<!-- CITY COVERAGE CHECK MODAL -->
<div class="city-modal-overlay" id="city-modal" style="display: none;">
  <div class="city-modal-card">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h4 class="modal-city-title m-0">Check coverage for your city</h4>
      <button class="modal-close-btn" id="modal-city-close" aria-label="Close modal">✕</button>
    </div>
    <p class="modal-city-sub">Enter your city, town, or PIN code to verify subspecialist radiologist and 24/7 stat coverage.</p>
    <div class="d-flex gap-2 my-3">
      <input type="text" id="city-input-search" class="form-control-custom" placeholder="e.g. Pune, Coimbatore, Jaipur, Hubballi...">
      <button class="btn-tah-primary" id="city-search-go">Check</button>
    </div>
    <div id="city-result-box" class="city-result-display" style="display: none;">
      <div class="d-flex align-items-center gap-2 text-success fw-bold mb-1">
        <span>✓ 24/7 Pan-India Active Coverage</span>
      </div>
      <div id="city-result-text" class="small text-muted"></div>
      <div class="mt-3">
        <a href="#pilot" class="btn-tah-primary btn-sm w-100 text-center" id="city-book-pilot">Request a pilot in this city →</a>
      </div>
    </div>
  </div>
</div>
`;
