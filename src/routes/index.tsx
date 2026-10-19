import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { tahMarkup } from "@/lib/tah-markup";
import { BRAND_FONTS_HREF } from "@/lib/brand";
import {
  ORGANIZATION_SCHEMA,
  getBreadcrumbSchema,
  getWebPageSchema,
  SITE_URL,
} from "@/lib/seo-schemas";
import { updateStatsInDOM, STATS_UPDATED_EVENT } from "@/lib/stats-store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TAHRAD | 24/7/365 Subspecialty Teleradiology" },
      {
        name: "description",
        content:
          "Every scan read. Every report on the clock. Subspecialty radiologists for CT, MRI, X-ray & PET with a live reporting desk across India. 15–30 min emergency turnaround.",
      },
      {
        name: "keywords",
        content:
          "TAHRAD, teleradiology India, 24x7 teleradiology reporting, CT scan reporting, MRI reporting, X-Ray reporting, emergency radiologist, PACS teleradiology, subspecialty radiology, remote radiology desk",
      },
      {
        property: "og:title",
        content: "TAHRAD | 24/7/365 Subspecialty Teleradiology",
      },
      {
        property: "og:description",
        content:
          "Subspecialty radiologists with a live reporting desk that shows where every study is, who is reading it, and when it will land in your PACS.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "TAHRAD" },
      { property: "og:image", content: `${SITE_URL}/tahrad-logo.png` },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "TAHRAD | 24/7/365 Subspecialty Teleradiology",
      },
      {
        name: "twitter:description",
        content:
          "Subspecialty radiologists with a live reporting desk for CT, MRI, X-ray & PET across India.",
      },
      { name: "twitter:image", content: `${SITE_URL}/tahrad-logo.png` },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
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
            name: "TAHRAD | 24/7/365 Subspecialty Teleradiology",
            description:
              "Every scan read. Every report on the clock. Subspecialty radiologists for CT, MRI, X-ray & PET with a live reporting desk across India. 15–30 min emergency turnaround.",
            path: "/",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(getBreadcrumbSchema([{ name: "Home", item: "/" }])),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // 1. Sync stats from localStorage to DOM on mount and live updates
    updateStatsInDOM();
    const handleStatsUpdated = () => {
      updateStatsInDOM();
    };
    window.addEventListener(STATS_UPDATED_EVENT, handleStatsUpdated);
    window.addEventListener("storage", handleStatsUpdated);
    cleanups.push(() => {
      window.removeEventListener(STATS_UPDATED_EVENT, handleStatsUpdated);
      window.removeEventListener("storage", handleStatsUpdated);
    });

    // 2. Mobile drawer navigation toggle
    const burger = document.getElementById("burger-btn");
    const drawer = document.getElementById("mobile-drawer");
    if (burger && drawer) {
      const toggle = () => {
        burger.classList.toggle("active");
        drawer.classList.toggle("open");
      };
      burger.addEventListener("click", toggle);
      cleanups.push(() => burger.removeEventListener("click", toggle));
      drawer.querySelectorAll("a").forEach((a) => {
        const close = () => {
          burger.classList.remove("active");
          drawer.classList.remove("open");
        };
        a.addEventListener("click", close);
        cleanups.push(() => a.removeEventListener("click", close));
      });
    }

    // 2b. Hero Live Ops Deck: Ticking clock & interactive modality tabs
    let clockEl = document.getElementById("hero-clock-display");
    let seconds = 12 * 60 + 34;
    const updateClock = () => {
      if (clockEl) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        clockEl.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
      }
    };

    if (clockEl) {
      const timerInterval = setInterval(() => {
        seconds--;
        if (seconds < 120) seconds = 15 * 60;
        updateClock();
      }, 1000);
      cleanups.push(() => clearInterval(timerInterval));
    }

    const modalityData: Record<string, Array<{ name: string; stat?: boolean; sub: string; status: string; pillClass: string; val: string; isTimer?: boolean }>> = {
      ct: [
        { name: "CT Brain", stat: true, sub: "Acute Stroke · Dr. R. Menon (Neuro)", status: "Reading", pillClass: "pill-reading-minimal", val: "12:34", isTimer: true },
        { name: "MRI Lumbar Spine", stat: false, sub: "Spine Protocol · Dr. S. Iyer (MSK)", status: "Assigned", pillClass: "pill-assigned-minimal", val: "24:18", isTimer: true },
        { name: "CT Angio Neck", stat: false, sub: "Carotid Protocol · Dr. P. Nair (Body)", status: "Delivered", pillClass: "pill-delivered-minimal", val: "19m TAT", isTimer: false },
      ],
      mri: [
        { name: "MRI Knee 3T", stat: true, sub: "ACL / Meniscal Protocol · Dr. S. Iyer (MSK)", status: "Reading", pillClass: "pill-reading-minimal", val: "09:12", isTimer: true },
        { name: "MRI Brain Stroke", stat: false, sub: "Diffusion / Perfusion · Dr. R. Menon (Neuro)", status: "Assigned", pillClass: "pill-assigned-minimal", val: "18:45", isTimer: true },
        { name: "MRI Cervical Spine", stat: false, sub: "Cord Compression · Dr. K. Sharma (MSK)", status: "Delivered", pillClass: "pill-delivered-minimal", val: "27m TAT", isTimer: false },
      ],
      xr: [
        { name: "Chest PA View", stat: true, sub: "Tension Pneumothorax · Dr. A. Verma (Chest)", status: "Reading", pillClass: "pill-reading-minimal", val: "04:18", isTimer: true },
        { name: "Abdomen Erect", stat: false, sub: "Acute Abdomen · Dr. P. Nair (Body)", status: "Assigned", pillClass: "pill-assigned-minimal", val: "08:50", isTimer: true },
        { name: "Pelvis / Hip Trauma", stat: false, sub: "Orthopedic Protocol · Dr. S. Iyer (MSK)", status: "Delivered", pillClass: "pill-delivered-minimal", val: "11m TAT", isTimer: false },
      ],
      pet: [
        { name: "Whole Body 18F-FDG", stat: true, sub: "Lymphoma Restaging · Dr. M. Kulkarni (Nuclear)", status: "Reading", pillClass: "pill-reading-minimal", val: "15:20", isTimer: true },
        { name: "PSMA PET-CT", stat: false, sub: "Prostate Evaluation · Dr. V. Rao (Onco)", status: "Assigned", pillClass: "pill-assigned-minimal", val: "29:40", isTimer: true },
        { name: "DOTA-TOC PET", stat: false, sub: "Neuroendocrine Protocol · Dr. M. Kulkarni (Nuclear)", status: "Delivered", pillClass: "pill-delivered-minimal", val: "38m TAT", isTimer: false },
      ],
    };

    const modTabs = document.querySelectorAll<HTMLButtonElement>(".hero-mod-tab");
    const studyListContainer = document.getElementById("hero-live-study-list");

    const renderModality = (modKey: string) => {
      const items = modalityData[modKey] || modalityData.ct;
      if (!studyListContainer) return;

      studyListContainer.innerHTML = items
        .map(
          (item, idx) => `
        <div class="hero-live-row card-row-turning ${idx === 0 ? "hero-live-row--active" : ""}" style="animation-delay: ${idx * 0.06}s;">
          <div class="hero-live-row-info">
            <div class="hero-live-name">
              ${item.name} ${item.stat ? '<span class="badge-stat">STAT</span>' : ""}
            </div>
            <div class="hero-live-sub">${item.sub}</div>
          </div>
          <div class="hero-live-status-pill">
            <span class="pill-badge ${item.pillClass}">${item.status}</span>
            ${
              item.isTimer
                ? idx === 0
                  ? `<span class="live-mono-timer" id="hero-clock-display">12:34</span>`
                  : `<span class="live-mono-timer">${item.val}</span>`
                : `<span class="live-tat-badge">${item.val}</span>`
            }
          </div>
        </div>
      `,
        )
        .join("");

      clockEl = document.getElementById("hero-clock-display");
      updateClock();
    };

    modTabs.forEach((tab) => {
      const clickHandler = () => {
        modTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const targetMod = tab.getAttribute("data-mod") ?? "ct";
        renderModality(targetMod);
      };
      tab.addEventListener("click", clickHandler);
      cleanups.push(() => tab.removeEventListener("click", clickHandler));
    });

    // 3. Dynamic Home button in nav: appears after scrolling past hero
    const heroSection = document.getElementById("hero");
    const navHomeBtn = document.getElementById("nav-home-btn");
    const mobileHomeBtn = document.getElementById("mobile-home-btn");

    const checkHeroScroll = () => {
      if (!heroSection || !navHomeBtn) return;
      const heroRect = heroSection.getBoundingClientRect();
      const scrolledPastHero = heroRect.bottom <= 80;
      if (scrolledPastHero) {
        navHomeBtn.classList.add("visible");
        if (mobileHomeBtn) mobileHomeBtn.classList.add("visible");
      } else {
        navHomeBtn.classList.remove("visible");
        if (mobileHomeBtn) mobileHomeBtn.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", checkHeroScroll, { passive: true });
    checkHeroScroll();
    cleanups.push(() => window.removeEventListener("scroll", checkHeroScroll));

    const scrollToHeroTop = (e: Event) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (navHomeBtn) {
      navHomeBtn.addEventListener("click", scrollToHeroTop);
      cleanups.push(() => navHomeBtn.removeEventListener("click", scrollToHeroTop));
    }
    if (mobileHomeBtn) {
      mobileHomeBtn.addEventListener("click", scrollToHeroTop);
      cleanups.push(() => mobileHomeBtn.removeEventListener("click", scrollToHeroTop));
    }

    // 4. Reporting Desk: Live Running Clocks on Active Studies
    const clockElements = document.querySelectorAll<HTMLElement>(".live-tick-time");
    const clockTimer = setInterval(() => {
      clockElements.forEach((el) => {
        const currentSeconds = parseInt(el.dataset.seconds ?? "0", 10);
        const newSeconds = currentSeconds + 1;
        el.dataset.seconds = String(newSeconds);

        const mins = Math.floor(newSeconds / 60);
        const secs = newSeconds % 60;
        const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
        el.textContent = formatted;

        // If this study is currently selected in the drawer, sync the drawer elapsed timer
        const activeRow = el.closest(".desk-row.active-selected");
        if (activeRow) {
          const drawerElapsed = document.getElementById("drawer-elapsed");
          if (drawerElapsed) drawerElapsed.textContent = formatted;
        }
      });
    }, 1000);
    cleanups.push(() => clearInterval(clockTimer));

    // 5. Reporting Desk: Filter Tabs Logic (All, Stat, Reading, QC review, Delivered)
    const filterTabs = document.querySelectorAll<HTMLButtonElement>(".desk-filter-tab");
    const deskRows = document.querySelectorAll<HTMLElement>(".desk-row");

    filterTabs.forEach((tab) => {
      const onTabClick = () => {
        filterTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const filter = tab.dataset.filter ?? "all";

        deskRows.forEach((row) => {
          const rowStatus = row.dataset.status ?? "";
          if (filter === "all") {
            row.style.display = "grid";
          } else if (rowStatus.includes(filter)) {
            row.style.display = "grid";
          } else {
            row.style.display = "none";
          }
        });
      };
      tab.addEventListener("click", onTabClick);
      cleanups.push(() => tab.removeEventListener("click", onTabClick));
    });

    // 6. Reporting Desk: Row Selection & Case Drawer Updates
    deskRows.forEach((row) => {
      const onRowClick = () => {
        deskRows.forEach((r) => r.classList.remove("active-selected"));
        row.classList.add("active-selected");

        const id = row.dataset.id ?? "PT-20418";
        const mod = row.dataset.mod ?? "CT";
        const title = row.dataset.title ?? "CT Head — Trauma";
        const doc = row.dataset.doc ?? "Dr. R. Menon";
        const sub = row.dataset.sub ?? "Neuroradiology";
        const time = row.querySelector(".live-tick-time")?.textContent ?? "06:12";
        const stage = row.dataset.stage ?? "Reading";

        const drawerCode = document.getElementById("drawer-case-code");
        const drawerTitle = document.getElementById("drawer-case-title");
        const drawerElapsed = document.getElementById("drawer-elapsed");
        const drawerDocName = document.getElementById("drawer-doc-name");
        const drawerDocInitials = document.getElementById("drawer-doc-initials");
        const drawerDocSub = document.getElementById("drawer-doc-sub");

        if (drawerCode) drawerCode.textContent = `${id} · ${mod}`;
        if (drawerTitle) drawerTitle.textContent = title.replace(" STAT", "");
        if (drawerElapsed) drawerElapsed.textContent = time;
        if (drawerDocName) drawerDocName.textContent = doc;
        if (drawerDocSub) drawerDocSub.textContent = `${sub} · ${stage}`;

        if (drawerDocInitials) {
          const parts = doc.replace("Dr. ", "").split(" ");
          const initials = parts.map((p) => p[0]).join("");
          drawerDocInitials.textContent = initials || "DR";
        }

        // Update 5-stage stepper inside drawer
        const stepReading = document.getElementById("drawer-step-reading");
        const stepQc = document.getElementById("drawer-step-qc");
        const stepPacs = document.getElementById("drawer-step-pacs");
        const readingLabel = document.getElementById("drawer-reading-label");

        if (stage === "Delivered") {
          stepReading?.classList.add("completed");
          stepReading?.classList.remove("active");
          stepQc?.classList.add("completed");
          stepQc?.classList.remove("active");
          stepPacs?.classList.add("completed");
          stepPacs?.classList.add("active");
          if (readingLabel) readingLabel.textContent = "Radiologist read completed";
        } else if (stage === "QC review") {
          stepReading?.classList.add("completed");
          stepReading?.classList.remove("active");
          stepQc?.classList.add("active");
          stepPacs?.classList.remove("completed");
          stepPacs?.classList.remove("active");
          if (readingLabel) readingLabel.textContent = "Radiologist read completed";
        } else {
          stepReading?.classList.remove("completed");
          stepReading?.classList.add("active");
          stepQc?.classList.remove("completed");
          stepQc?.classList.remove("active");
          stepPacs?.classList.remove("completed");
          stepPacs?.classList.remove("active");
          if (readingLabel) readingLabel.textContent = "Radiologist reading now";
        }
      };

      row.addEventListener("click", onRowClick);
      cleanups.push(() => row.removeEventListener("click", onRowClick));
    });

    // 7. Modality multi-select chips on Pilot Form
    const modChips = document.querySelectorAll<HTMLButtonElement>(".mod-chip-btn");
    modChips.forEach((chip) => {
      const onChipClick = (e: Event) => {
        e.preventDefault();
        chip.classList.toggle("active");
      };
      chip.addEventListener("click", onChipClick);
      cleanups.push(() => chip.removeEventListener("click", onChipClick));
    });

    // 8. Service Modality Cards "Request a pilot for [Modality]" click triggers
    const modalityPilotLinks = document.querySelectorAll<HTMLAnchorElement>(".modality-pilot-link");
    modalityPilotLinks.forEach((link) => {
      const onModLinkClick = () => {
        const modTarget = link.dataset.modality;
        if (!modTarget) return;

        // Activate the matching chip in the pilot form
        modChips.forEach((chip) => {
          if (chip.dataset.mod === modTarget) {
            chip.classList.add("active");
          }
        });

        // Focus the name field
        const nameInput = document.getElementById("pilot-name");
        nameInput?.focus();
      };
      link.addEventListener("click", onModLinkClick);
      cleanups.push(() => link.removeEventListener("click", onModLinkClick));
    });

    // 9. City Coverage Modal
    const cityModal = document.getElementById("city-modal");
    const checkCityBtn = document.getElementById("check-city-coverage-btn");
    const cityCloseBtn = document.getElementById("modal-city-close");
    const citySearchBtn = document.getElementById("city-search-go");
    const cityInput = document.getElementById("city-input-search") as HTMLInputElement | null;
    const cityResultBox = document.getElementById("city-result-box");
    const cityResultText = document.getElementById("city-result-text");

    if (cityModal && checkCityBtn) {
      const openModal = () => {
        cityModal.style.display = "flex";
        cityInput?.focus();
      };
      const closeModal = () => {
        cityModal.style.display = "none";
      };

      checkCityBtn.addEventListener("click", openModal);
      cleanups.push(() => checkCityBtn.removeEventListener("click", openModal));

      cityCloseBtn?.addEventListener("click", closeModal);
      cleanups.push(() => cityCloseBtn?.removeEventListener("click", closeModal));

      cityModal.addEventListener("click", (e) => {
        if (e.target === cityModal) closeModal();
      });

      const handleSearch = () => {
        const query = cityInput?.value.trim() || "Your city";
        if (cityResultBox && cityResultText) {
          cityResultBox.style.display = "block";
          cityResultText.textContent = `Active 24/7 coverage verified for "${query}". Subspecialty CT, MRI, and X-Ray emergency reads available with 15–30 min TAT.`;
        }
      };

      citySearchBtn?.addEventListener("click", handleSearch);
      cityInput?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSearch();
        }
      });

      // Quick CTA from city modal
      const bookPilotBtn = document.getElementById("city-book-pilot");
      bookPilotBtn?.addEventListener("click", () => {
        closeModal();
      });
    }

    // 10. Pilot Form Submission Handler
    const pilotForm = document.getElementById("pilot-request-form") as HTMLFormElement | null;
    if (pilotForm) {
      const onPilotSubmit = (e: Event) => {
        e.preventDefault();
        const nameInput = document.getElementById("pilot-name") as HTMLInputElement | null;
        const centreInput = document.getElementById("pilot-centre") as HTMLInputElement | null;
        const emailInput = document.getElementById("pilot-email") as HTMLInputElement | null;
        const phoneInput = document.getElementById("pilot-phone") as HTMLInputElement | null;
        const volumeSelect = document.getElementById("pilot-volume") as HTMLSelectElement | null;
        const submitBtn = document.getElementById("pilot-submit-btn") as HTMLButtonElement | null;
        const feedback = document.getElementById("pilot-form-feedback");

        if (!nameInput?.value.trim()) {
          nameInput?.focus();
          return;
        }
        if (!centreInput?.value.trim()) {
          centreInput?.focus();
          return;
        }
        if (!emailInput?.value.trim() || !emailInput.value.includes("@")) {
          emailInput?.focus();
          return;
        }
        if (!phoneInput?.value.trim() || phoneInput.value.trim().length < 8) {
          phoneInput?.focus();
          return;
        }

        const selectedMods: string[] = [];
        document.querySelectorAll<HTMLButtonElement>(".mod-chip-btn.active").forEach((b) => {
          if (b.dataset.mod) selectedMods.push(b.dataset.mod);
        });

        const leadData = {
          name: nameInput.value.trim(),
          centre: centreInput.value.trim(),
          email: emailInput.value.trim(),
          phone: phoneInput.value.trim(),
          volume: volumeSelect?.value || "100-500",
          modalities: selectedMods,
          submittedAt: new Date().toISOString(),
        };

        if (submitBtn) {
          submitBtn.textContent = "Connecting to desk…";
          submitBtn.disabled = true;
        }

        setTimeout(() => {
          try {
            const raw = localStorage.getItem("tahrad_pilot_leads");
            const leads = raw ? JSON.parse(raw) : [];
            leads.push(leadData);
            localStorage.setItem("tahrad_pilot_leads", JSON.stringify(leads));
          } catch {
            // ignore storage errors
          }

          if (feedback) {
            feedback.style.display = "block";
            feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
          if (submitBtn) {
            submitBtn.textContent = "Callback requested ✓";
          }
        }, 500);
      };
      pilotForm.addEventListener("submit", onPilotSubmit);
      cleanups.push(() => pilotForm.removeEventListener("submit", onPilotSubmit));
    }

    // 11. ScrollExpand: Interactive scroll kinetics for Who We Are Image Card
    const whoCard = document.getElementById("who-image-card");
    const whoFrame = document.getElementById("who-image-frame");
    const whoMedia = document.getElementById("who-image-media");
    const whoScrim = document.getElementById("who-image-scrim");
    const whoOverlay = document.getElementById("who-image-overlay");

    if (whoCard && whoFrame && whoMedia) {
      const clampVal = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
      const smoothStepVal = (edge0: number, edge1: number, x: number) => {
        const t = clampVal((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
        return t * t * (3 - 2 * t);
      };

      const onWhoScroll = () => {
        const rect = whoCard.getBoundingClientRect();
        const winH = window.innerHeight;
        const progress = clampVal((winH - rect.top) / (winH + rect.height * 0.5), 0, 1);
        const e = smoothStepVal(0.12, 0.85, progress);

        // Keep frame clean without artificial inset clipping into the photo
        whoFrame.style.clipPath = "none";

        const scale = 1.08 - 0.08 * e;
        whoMedia.style.transform = `scale(${scale})`;

        if (whoScrim) whoScrim.style.opacity = `${0.25 + 0.15 * e}`;
        if (whoOverlay) whoOverlay.style.opacity = "1";
      };

      window.addEventListener("scroll", onWhoScroll, { passive: true });
      onWhoScroll();
      cleanups.push(() => window.removeEventListener("scroll", onWhoScroll));
    }

    // 11b. Interactive Flip Cards (Turnover Transition on Hover/Click)
    const flipCards = document.querySelectorAll<HTMLElement>(".step-flip-card");
    flipCards.forEach((card) => {
      const onCardClick = () => {
        card.classList.toggle("is-flipped");
      };
      card.addEventListener("click", onCardClick);
      cleanups.push(() => card.removeEventListener("click", onCardClick));
    });

    // 12. Floating Back-to-Top Button
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
      const onWindowScroll = () => {
        if (window.scrollY > 400) {
          backToTopBtn.classList.add("show");
        } else {
          backToTopBtn.classList.remove("show");
        }
      };
      window.addEventListener("scroll", onWindowScroll, { passive: true });
      onWindowScroll();
      const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
      backToTopBtn.addEventListener("click", scrollToTop);
      cleanups.push(() => {
        window.removeEventListener("scroll", onWindowScroll);
        backToTopBtn.removeEventListener("click", scrollToTop);
      });
    }

    // 13. Intersection Observer for Reveal Staggers and Animated Numbers
    const revealEls = document.querySelectorAll(".reveal, .reveal-stagger");
    const counters = document.querySelectorAll<HTMLElement>(".counter");

    const runCounter = (el: HTMLElement) => {
      const target = parseInt(el.dataset.target ?? "0", 10);
      if (!target || isNaN(target)) return;
      el.textContent = "0";
      const duration = 1600;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const currentVal = Math.round(eased * target);
        el.textContent = currentVal.toLocaleString("en-US");
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -20px 0px" },
      );
      revealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("in-view");
        } else {
          revealObserver.observe(el);
        }
      });

      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runCounter(entry.target as HTMLElement);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.35 },
      );
      counters.forEach((el) => counterObserver.observe(el));

      cleanups.push(() => {
        revealObserver.disconnect();
        counterObserver.disconnect();
      });
    } else {
      revealEls.forEach((el) => el.classList.add("in-view"));
      counters.forEach((el) => runCounter(el));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: tahMarkup }} />;
}
