import { useState, useEffect } from "react";

export interface StatsData {
  centres: number;
  studies: number;
  radiologists: number;
  states: number;
  centresSuffix: string;
  studiesSuffix: string;
  radiologistsSuffix: string;
  statesSuffix: string;
}

export const DEFAULT_STATS: StatsData = {
  centres: 350,
  studies: 1000,
  radiologists: 140,
  states: 15,
  centresSuffix: "+",
  studiesSuffix: "+",
  radiologistsSuffix: "+",
  statesSuffix: "+",
};

const STATS_STORAGE_KEY = "tah_stats_data";
export const STATS_UPDATED_EVENT = "tah_stats_updated";

export function getStats(): StatsData {
  if (typeof window === "undefined") return DEFAULT_STATS;
  try {
    const stored = localStorage.getItem(STATS_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...DEFAULT_STATS,
        ...parsed,
        centres: Number(parsed.centres ?? DEFAULT_STATS.centres),
        studies: Number(parsed.studies ?? DEFAULT_STATS.studies),
        radiologists: Number(parsed.radiologists ?? DEFAULT_STATS.radiologists),
        states: Number(parsed.states ?? DEFAULT_STATS.states),
        centresSuffix: String(parsed.centresSuffix ?? DEFAULT_STATS.centresSuffix),
        studiesSuffix: String(parsed.studiesSuffix ?? DEFAULT_STATS.studiesSuffix),
        radiologistsSuffix: String(parsed.radiologistsSuffix ?? DEFAULT_STATS.radiologistsSuffix),
        statesSuffix: String(parsed.statesSuffix ?? DEFAULT_STATS.statesSuffix),
      };
    }
  } catch (e) {
    console.error("Failed to read stats from localStorage:", e);
  }
  return DEFAULT_STATS;
}

export function saveStats(newStats: StatsData): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(newStats));
    window.dispatchEvent(new CustomEvent(STATS_UPDATED_EVENT, { detail: newStats }));
  } catch (e) {
    console.error("Failed to save stats to localStorage:", e);
  }
}

export function resetStats(): StatsData {
  saveStats(DEFAULT_STATS);
  return DEFAULT_STATS;
}

export function useStats(): StatsData {
  const [stats, setStats] = useState<StatsData>(DEFAULT_STATS);

  useEffect(() => {
    setStats(getStats());

    const handleUpdate = () => {
      setStats(getStats());
    };

    window.addEventListener(STATS_UPDATED_EVENT, handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener(STATS_UPDATED_EVENT, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return stats;
}

export function updateStatsInDOM(currentStats?: StatsData): void {
  if (typeof window === "undefined") return;
  const stats = currentStats || getStats();

  // Update counters data-target
  document.querySelectorAll<HTMLElement>('[data-stat-counter="centres"]').forEach((el) => {
    el.dataset.target = String(stats.centres);
  });
  document.querySelectorAll<HTMLElement>('[data-stat-counter="studies"]').forEach((el) => {
    el.dataset.target = String(stats.studies);
  });
  document.querySelectorAll<HTMLElement>('[data-stat-counter="radiologists"]').forEach((el) => {
    el.dataset.target = String(stats.radiologists);
  });
  document.querySelectorAll<HTMLElement>('[data-stat-counter="states"]').forEach((el) => {
    el.dataset.target = String(stats.states);
  });

  // Update suffixes
  document.querySelectorAll<HTMLElement>('[data-stat-suffix="centres"]').forEach((el) => {
    el.textContent = stats.centresSuffix;
  });
  document.querySelectorAll<HTMLElement>('[data-stat-suffix="studies"]').forEach((el) => {
    el.textContent = stats.studiesSuffix;
  });
  document.querySelectorAll<HTMLElement>('[data-stat-suffix="radiologists"]').forEach((el) => {
    el.textContent = stats.radiologistsSuffix;
  });
  document.querySelectorAll<HTMLElement>('[data-stat-suffix="states"]').forEach((el) => {
    el.textContent = stats.statesSuffix;
  });

  // Update inline value elements
  document.querySelectorAll<HTMLElement>('[data-stat-val="centres"]').forEach((el) => {
    el.textContent = `${stats.centres}${stats.centresSuffix}`;
  });
  document.querySelectorAll<HTMLElement>('[data-stat-val="studies"]').forEach((el) => {
    el.textContent = `${stats.studies}${stats.studiesSuffix}`;
  });
  document.querySelectorAll<HTMLElement>('[data-stat-val="radiologists"]').forEach((el) => {
    el.textContent = `${stats.radiologists}${stats.radiologistsSuffix}`;
  });
  document.querySelectorAll<HTMLElement>('[data-stat-val="states"]').forEach((el) => {
    el.textContent = `${stats.states}${stats.statesSuffix}`;
  });

  // Update raw number elements
  document.querySelectorAll<HTMLElement>('[data-stat-num="centres"]').forEach((el) => {
    el.textContent = String(stats.centres);
  });
  document.querySelectorAll<HTMLElement>('[data-stat-num="studies"]').forEach((el) => {
    el.textContent = String(stats.studies);
  });
  document.querySelectorAll<HTMLElement>('[data-stat-num="radiologists"]').forEach((el) => {
    el.textContent = String(stats.radiologists);
  });
  document.querySelectorAll<HTMLElement>('[data-stat-num="states"]').forEach((el) => {
    el.textContent = String(stats.states);
  });

  // Update footer summary text elements
  document.querySelectorAll<HTMLElement>("[data-stat-summary]").forEach((el) => {
    el.textContent = `TAHRAD | 24×7 subspecialty teleradiology services serving ${stats.centres}${stats.centresSuffix} centres, ${stats.studies}${stats.studiesSuffix} new studies uploaded daily to PACS, ${stats.radiologists}${stats.radiologistsSuffix} radiologists across specialisations, ${stats.states}${stats.statesSuffix} states covered in India.`;
  });
}
