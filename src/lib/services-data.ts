/**
 * TAHRAD Clinical Services Data Registry
 * Single source of truth for modality scope, turnaround commitments, and clinical protocols.
 * Follows TAHRAD Brand Guidelines 2026–2027 and reconciles the source conflict
 * between Mammography (Redesign PDF) and USG / Ultrasound (Current site & Review PDF).
 */

export interface TahradService {
  id: string;
  abbr: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  tags: string[];
  turnaroundEmergency: string;
  turnaroundRoutine: string;
  coverageHours: string;
  subspecialty: string;
  studiesCovered: string[];
  clinicalHighlights: string[];
  conflictNote?: string;
}

export const TAHRAD_SERVICES: TahradService[] = [
  {
    id: "ct",
    abbr: "CT",
    name: "CT Reporting",
    badge: "Emergency & Routine",
    headline: "High-accuracy CT reads with 15–30 min emergency TAT.",
    description:
      "Full-range computed tomography reporting covering acute trauma, ischemic stroke protocols, oncologic staging, routine body imaging, and multi-detector CT angiography.",
    tags: ["Emergency", "Angio", "Oncology", "Trauma"],
    turnaroundEmergency: "15–30 minutes (STAT)",
    turnaroundRoutine: "2–4 hours",
    coverageHours: "24/7/365 round-the-clock",
    subspecialty: "Fellowship-trained Neuro, Body & Vascular Radiologists",
    studiesCovered: [
      "Non-contrast Head CT (acute bleed, infarction, trauma)",
      "CT Angiography (Circle of Willis, neck, pulmonary, aorta)",
      "Polytrauma whole-body CT (head, spine, chest, abdomen, pelvis)",
      "High-Resolution Computed Tomography (HRCT Chest / ILD)",
      "Triple-phase Liver CT and abdominal oncology staging",
      "Enterography and CT urography",
    ],
    clinicalHighlights: [
      "Immediate verbal phone call to on-duty ER physician for critical intracranial hemorrhage or pulmonary embolism",
      "Standardized, concise reporting templates following international diagnostic criteria",
      "Direct line and WhatsApp access to the reporting radiologist straight from the PACS case",
    ],
  },
  {
    id: "mri",
    abbr: "MRI",
    name: "MRI Reporting",
    badge: "Subspecialty Matched",
    headline: "Subspecialty MRI reporting across Neuro, MSK, Spine and Body.",
    description:
      "Expert interpretation of high-field MRI studies. Cases are routed strictly to fellowship-trained radiologists in neuroradiology, musculoskeletal, spinal, and body imaging.",
    tags: ["Neuro", "MSK", "Spine", "Body"],
    turnaroundEmergency: "30–45 minutes (STAT stroke / cord compression)",
    turnaroundRoutine: "3–5 hours",
    coverageHours: "24/7/365 active shifts",
    subspecialty: "Subspecialty Neurologists, MSK & Body Radiologists",
    studiesCovered: [
      "Brain MRI with diffusion and perfusion for acute stroke",
      "Spine MRI (cervical, thoracic, lumbosacral with cord evaluation)",
      "Musculoskeletal MRI (knee, shoulder, hip, ankle, wrist, sports injuries)",
      "Multiparametric Prostate MRI (PI-RADS v2.1 compliant)",
      "MRCP and dynamic liver MRI with hepatobiliary contrast",
      "Pelvic MRI (gynecologic staging, endometriosis protocols)",
    ],
    clinicalHighlights: [
      "PI-RADS, LI-RADS, and standardized reporting frameworks applied consistently",
      "Detailed joint injury mapping for orthopedic surgeons with high surgical concordance",
      "Correlative assessment with prior scans and clinical history",
    ],
  },
  {
    id: "x-ray",
    abbr: "XR",
    name: "X-Ray & Digital Radiography",
    badge: "High Throughput",
    headline: "High-volume chest and skeletal reads with rapid turnaround.",
    description:
      "Scalable digital radiography and CR reporting for busy diagnostic centres, emergency rooms, and outpatient clinics with double-blind QA and fast turnarounds.",
    tags: ["Chest", "Skeletal", "Paediatric", "Pre-op"],
    turnaroundEmergency: "15–20 minutes",
    turnaroundRoutine: "1–2 hours",
    coverageHours: "24/7/365 continuous",
    subspecialty: "General and Thoracic Diagnostic Radiologists",
    studiesCovered: [
      "Chest X-Ray (inpatient, ICU, outpatient, pre-operative screening)",
      "Acute abdomen series (perforation, bowel obstruction)",
      "Orthopedic skeletal radiography and trauma series",
      "Spine and pelvic alignment radiography",
      "Paediatric bone age and skeletal surveys",
      "Specialized views and fluoroscopic study spot films",
    ],
    clinicalHighlights: [
      "Sub-20 minute turnaround on emergency department radiographs",
      "Systematic secondary quality audit on high-volume batches",
      "Clear, actionable reports designed for rapid clinical decisions",
    ],
  },
  {
    id: "pet-ct",
    abbr: "PET",
    name: "PET-CT Reporting",
    badge: "Oncology & Nuclear",
    headline: "Oncology staging and treatment response reads by nuclear medicine experts.",
    description:
      "Comprehensive 18F-FDG PET-CT and PSMA PET interpretation for cancer staging, restaging, treatment response evaluation, and radiation planning.",
    tags: ["Oncology", "Nuclear", "Staging", "Response"],
    turnaroundEmergency: "Same day (urgent clinical requirements)",
    turnaroundRoutine: "4–6 hours",
    coverageHours: "7 days a week reporting desk",
    subspecialty: "Nuclear Medicine Physicians & Oncology Radiologists",
    studiesCovered: [
      "Whole-body 18F-FDG PET-CT for lymphoma, lung, colorectal, and head & neck cancers",
      "68Ga-PSMA / 18F-PSMA PET-CT for prostate cancer staging and recurrence",
      "68Ga-DOTANOC / DOTATATE PET-CT for neuroendocrine tumors",
      "Response assessment using PERCIST / RECIST 1.1 criteria",
      "Follow-up and surveillance scans with metabolic comparison",
    ],
    clinicalHighlights: [
      "Quantitative SUVmax, MTV, and TLG metabolic parameter documentation",
      "Side-by-side comparison with baseline diagnostic CT/MRI datasets",
      "Tumor-board ready reports formatted for oncology multidisciplinary teams",
    ],
  },
  {
    id: "ultrasound",
    abbr: "USG",
    name: "USG & Doppler Reporting",
    badge: "Preserved Service",
    headline: "Ultrasound reads, vascular Doppler, and second looks.",
    description:
      "Expert remote review of static and cine ultrasound clips. Covers abdominal, pelvic, vascular Doppler, thyroid, breast, and obstetrical sonography second opinions.",
    tags: ["Abdomen", "Doppler", "Small Parts", "Second Look"],
    turnaroundEmergency: "20–30 minutes (STAT vascular / ectopic query)",
    turnaroundRoutine: "2–3 hours",
    coverageHours: "24/7/365 clinical coverage",
    subspecialty: "Diagnostic Sonologists & Subspecialty Radiologists",
    studiesCovered: [
      "Whole abdomen and pelvic ultrasound evaluations",
      "Arterial and venous Doppler of upper and lower extremities",
      "Carotid Doppler and transcranial sonography reviews",
      "Thyroid sonography with TI-RADS classification",
      "Scrotal and testicular emergency Doppler (torsion vs epididymitis)",
      "Obstetrical anomaly second opinion and growth parameter review",
    ],
    clinicalHighlights: [
      "Preserved as an essential service from the existing website and Review PDF specification",
      "Cine-loop review capability with slice-by-slice Doppler waveform validation",
      "Direct tele-consultation with sonographers during live scan acquisition if needed",
    ],
    conflictNote:
      "Service Note: Preserved from existing website and Review PDF p.5 ('USG reporting: Ultrasound reads and second looks').",
  },
  {
    id: "mammography",
    abbr: "MMG",
    name: "Mammography & Breast Imaging",
    badge: "Redesign Spec",
    headline: "Screening and diagnostic mammography by breast imaging specialists.",
    description:
      "Dedicated interpretation of digital mammography (2D FFDM and 3D digital breast tomosynthesis) with BI-RADS categorization and clinical correlation.",
    tags: ["Screening", "Diagnostic", "BI-RADS", "Tomosynthesis"],
    turnaroundEmergency: "Urgent turnaround for diagnostic recall",
    turnaroundRoutine: "3–6 hours",
    coverageHours: "Dedicated daytime & extended shifts",
    subspecialty: "Fellowship-trained Breast Imaging Radiologists",
    studiesCovered: [
      "Routine screening 2D Full-Field Digital Mammography (FFDM)",
      "3D Digital Breast Tomosynthesis (DBT) multi-slice review",
      "Diagnostic workup views (spot compression, magnification)",
      "BI-RADS assessment categorization with management recommendation",
      "Mammography-ultrasound multimodality correlation",
    ],
    clinicalHighlights: [
      "Included from TAHRAD Website Redesign PDF p.2 & p.5 service specifications",
      "Strict BI-RADS v5.0 compliant reporting standards with clear follow-up intervals",
      "Double-read workflow options for institutional screening programs",
    ],
    conflictNote:
      "Service Note: Included from Website Redesign PDF p.2 ('MMG Mammography: Screening and diagnostic mammography by breast imaging specialists').",
  },
  {
    id: "subspecialty",
    abbr: "SUB",
    name: "Subspecialty Reads",
    badge: "Case Matched",
    headline: "Neuro, MSK, cardiac, paediatric, and women's imaging matched by case.",
    description:
      "Guaranteed routing of specialized cases to fellowship-trained radiologists in the relevant organ system, ensuring subspecialist insight on challenging pathology.",
    tags: ["Neuro", "MSK", "Cardiac", "Paediatric", "Women's"],
    turnaroundEmergency: "20–30 minutes",
    turnaroundRoutine: "3–4 hours",
    coverageHours: "24/7/365 subspecialty panel",
    subspecialty: "Subspecialty Fellowship Radiologists Across India",
    studiesCovered: [
      "Advanced Neuroradiology (epilepsy protocols, skull base, white matter)",
      "Cardiac CT and Cardiac MRI (calcium scoring, viability, congenital heart)",
      "Paediatric radiology (specialized pediatric dosing and pathology)",
      "Head and Neck imaging (temporal bone, sinuses, neck spaces)",
      "Advanced Musculoskeletal imaging (arthrograms, cartilage mapping)",
    ],
    clinicalHighlights: [
      "Intelligent rule-based case allocation by clinical organ system and modality",
      "Zero generalist compromise on complex diagnostic questions",
      "Direct surgeon-to-radiologist telephone case discussions",
    ],
  },
  {
    id: "nighthawk",
    abbr: "24/7",
    name: "Nighthawk & STAT Emergency",
    badge: "Round the Clock",
    headline: "Overnight and weekend cover with STAT queue escalation.",
    description:
      "Dedicated 24/7/365 emergency department teleradiology service. Active night shifts ensure your midnight case is read with the freshness of daytime focus.",
    tags: ["Night", "Weekend", "STAT", "Emergency"],
    turnaroundEmergency: "15–30 minutes guaranteed SLA",
    turnaroundRoutine: "N/A (all emergency cases prioritised)",
    coverageHours: "24 hours a day, 365 days a year",
    subspecialty: "Dedicated Emergency & On-Duty Shift Leads",
    studiesCovered: [
      "Trauma head CT and cervical spine clearances",
      "Acute abdominal pain (appendicitis, diverticulitis, obstruction)",
      "Aortic dissection and ruptured aneurysm evaluation",
      "Acute stroke diffuse/perfusion protocols",
      "Critical pediatric emergencies and neonatal radiographs",
    ],
    clinicalHighlights: [
      "Guaranteed 15–30 minute emergency turnaround commitment",
      "Mandatory verbal phone-in directly to the treating emergency team",
      "Seamless PACS queue prioritization with real-time tracking desk",
    ],
  },
  {
    id: "second-opinion",
    abbr: "2nd",
    name: "Second Opinion & Consensus",
    badge: "Independent Review",
    headline: "Independent consensus review for complex or disputed cases.",
    description:
      "Objective, thorough second opinions provided by senior faculty and subspecialty leaders. Resolves diagnostic ambiguity, confirms findings, and guides surgical planning.",
    tags: ["Complex Cases", "Consensus", "Pre-surgical", "Audit"],
    turnaroundEmergency: "1–2 hours for urgent operative planning",
    turnaroundRoutine: "6–12 hours comprehensive consensus report",
    coverageHours: "Senior panel available 7 days a week",
    subspecialty: "Senior Faculty & Institutional Clinical Leaders",
    studiesCovered: [
      "Disputed or equivocal oncology staging studies",
      "Pre-operative anatomical variation confirmation",
      "Complex neurovascular and brain tumor differentiation",
      "Medico-legal case consensus reviews",
      "Unexplained clinical deterioration with inconclusive primary reads",
    ],
    clinicalHighlights: [
      "Complete re-read from DICOM raw data with blinded dual review where requested",
      "Comprehensive formal addendum report detailing differential diagnostic likelihoods",
      "Clinician-to-clinician tele-conference support for surgical planning",
    ],
  },
];

export function getServiceById(id: string): TahradService | undefined {
  return TAHRAD_SERVICES.find((s) => s.id === id);
}
