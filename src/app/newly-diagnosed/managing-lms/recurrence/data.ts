export const recurrenceData = {
  recurrenceTypes: [
    {
      location: "Local",
      treatment: "Testing; Treatment based on stage (extent of disease), More treatment as listed above",
      description: "Local recurrence occurs when the cancer returns at or near the same place it was originally found. This may happen if some cancer cells remained after treatment."
    },
    {
      location: "Isolated",
      treatment: "Regional disease or lymph nodes, Regional node dissection with or without radiation therapy, with or without chemotherapy SBRT Isolated limb infusion/per-fusion plus surgery",
      description: "Isolated recurrence refers to cancer that has returned in a limited area, such as regional lymph nodes, but has not spread widely throughout the body."
    },
    {
      location: "Widespread",
      treatment: "Palliative chemotherapy, Palliative radiation therapy SBRT, ablation, embolization. Observation if no symptoms",
      description: "Widespread recurrence means the cancer has returned in multiple areas of the body, often distant from the original site. This is also called metastatic recurrence."
    }
  ],
  monitoringStrategies: [
    {
      title: "Regular Imaging",
      description: "CT scans, MRIs, or PET scans to detect any signs of recurrence before symptoms appear",
      frequency: "Every 3-6 months for the first 2-3 years after treatment, then every 6 months for 2 years, then annually"
    },
    {
      title: "Physical Examinations",
      description: "Regular check-ups with your healthcare provider to monitor for any physical signs of recurrence",
      frequency: "Every 3-4 months for the first 2-3 years, then every 6 months for 2-3 years, then annually"
    },
    {
      title: "Blood Tests",
      description: "Regular blood work to monitor overall health and detect potential signs of recurrence",
      frequency: "Usually performed during scheduled follow-up appointments"
    }
  ],
  copingStrategies: [
    {
      title: "Emotional Support",
      description: "Connecting with support groups, therapists, or counselors who specialize in cancer survivorship",
      resources: ["NLMSF Support Groups", "American Cancer Society", "CancerCare"]
    },
    {
      title: "Healthy Lifestyle",
      description: "Maintaining a balanced diet, regular exercise, and adequate sleep to support overall health and recovery",
      benefits: ["Improved energy levels", "Better immune function", "Reduced stress and anxiety"]
    },
    {
      title: "Open Communication",
      description: "Maintaining honest communication with your healthcare team about any concerns or symptoms",
      importance: "Early detection of recurrence can lead to more effective treatment options"
    }
  ],
  resources: [
    {
      title: "Understanding Sarcoma Recurrence",
      type: "article",
      link: "https://www.cancer.org/cancer/types/soft-tissue-sarcoma/after-treatment/follow-up.html"
    },
    {
      title: "Coping with Fear of Recurrence",
      type: "video",
      link: "https://www.cancer.net/survivorship/dealing-cancer-recurrence"
    },
    {
      title: "NCCN Guidelines for Sarcoma Surveillance",
      type: "pdf",
      link: "https://www.nccn.org/patients/guidelines/content/PDF/sarcoma-patient.pdf"
    }
  ]
};
