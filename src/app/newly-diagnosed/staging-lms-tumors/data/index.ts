export const stagingData = {
  stages: [
    {
      stage: "Stage 1 (1A/1B grade)",
      primaryTreatment: "Low-Grade tumor Surgery. Recommendations for more treatment is based on size of margin is 1 cm or less and if the fascia was cut. Clean margins around the tumor site (always the goal)",
      followUpCare: "Will begin when treatment is completed. Rehabilitation if needed Imaging – CT Scan, CT/PET scan Note: CT scan for lung surveillance is best Genetic test of the tumor Regular imaging of primary tumor site Follow up appointments with blood work done"
    },
    {
      stage: "Stage 2 (2-3 Grade)",
      primaryTreatment: "Treatment options are based on whether surgery is possible. Location, size of tumor and overall health are always taken into consideration in treatment options to be considered. Primary Treatment Options: Surgery, Surgery following radiation therapy, Radiation followed by surgery",
      followUpCare: "Rehabilitation if needed Regular Imaging – CT scans, CTG/PET Scans to check for tumor metastasis: usually 3 – 6 months for 2 – 3 years; then every 6 months for 2 years; then repeat every year."
    },
    {
      stage: "Stage 3",
      primaryTreatment: "Primary Treatment Options (Stage lllA or lllB grade 2 – 3) Surgery followed by radiation therapy /Adjuvant chemotherapy. Chemotherapy or radiation therapy followed by surgery; then radiation therapy boost with or without adjuvant chemo. Chemotherapy followed by surgery, then Radiation therapy with or without adjuvant chemotherapy.",
      followUpCare: "Same as Stage 2 indicated above"
    },
    {
      stage: "Stage 4 (confined)",
      primaryTreatment: "Primary Treatment Options: Treatment as indicated for stages 2 or 3 apply. Surgery to remove metastases with or without chemotherapy before or after surgery; with or without radiation therapy – such as Ablation, SBRT, embolization, other modalities; observation",
      followUpCare: "Rehabilitation if needed Imaging tests for surveillance same cycles as indicated for Stages 2 and 3. Consider baseline and regular imaging of primary tumor site"
    },
    {
      stage: "Stage 4 (widespread)",
      primaryTreatment: "Primary Treatment Options: Chemotherapy, radiation therapy /SBRT surgery. Observation if no symptoms",
      followUpCare: "Same as indicated for stage 4 above"
    }
  ],
  recurrence: [
    {
      location: "Local",
      treatment: "Testing; Treatment based on stage (extent of disease), More treatment as listed above"
    },
    {
      location: "Isolated",
      treatment: "Regional disease or lymph nodes, Regional node dissection with or without radiation therapy, with or without chemotherapy SBRT Isolated limb infusion/per-fusion plus surgery"
    },
    {
      location: "Widespread",
      treatment: "Palliative chemotherapy, Palliative radiation therapy SBRT, ablation, embolization. Observation if no symptoms"
    }
  ],
  tnmFactors: [
    {
      letter: "T",
      description: "Size of the tumor"
    },
    {
      letter: "N",
      description: "Spread to lymph nodes (small bean-shaped collections of immune system cells found throughout the body that help fight infections and cancers)"
    },
    {
      letter: "M",
      description: "Metastasis (spread to distant organs)"
    }
  ],
  gradeFactors: [
    {
      factor: "Differentiation",
      description: "Cancer cells are given a score of 1 to 3, with 1 being assigned when they look similar to normal cells and 3 being used when the cancer cells look very abnormal"
    },
    {
      factor: "Mitotic count",
      description: "How many cancer cells are seen dividing under the microscope; given a score from 1 to 3 (a lower score means fewer cells were seen dividing)"
    },
    {
      factor: "Tumor necrosis",
      description: "How much of the tumor is made up of dying tissue; given a score from 0 to 2 (a lower score means there was less dying tissue present)"
    }
  ],
  resources: [
    {
      title: "The Role of Genetic Test in Soft Tissue Sarcoma",
      type: "video",
      link: "https://www.youtube.com/watch?v=Dmb8fyzKUgQ"
    },
    {
      title: "Historical information on genomic testing for sarcomas",
      type: "article",
      link: "https://pubmed.ncbi.nlm.nih.gov/16359533/"
    },
    {
      title: "NCCN Guidelines for Patients",
      type: "pdf",
      link: "https://www.nccn.org/patients/guidelines/content/PDF/sarcoma-patient.pdf"
    }
  ]
};
