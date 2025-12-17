export interface ResourceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface HomeData {
  welcome: {
    title: string;
    description: string;
  };
  cards: ResourceCard[];
  videoId: string;
}

export const homeData: HomeData = {
  welcome: {
    title: "WELCOME TO NLMSF",
    description: "Established in 2001, the National Leiomyosarcoma Foundation meets the needs of patients, caregivers, and families through education, resources, and research funding."
  },
  cards: [
    {
      id: "what-is-lms",
      title: "What Is LMS?",
      description: "Definition/Diagnosis",
      image: "/images/doctor-patient-consultation.jpg",
      link: "/newly-diagnosed/what-is-lms"
    },
    {
      id: "new-diagnosis",
      title: "New Diagnosis/Treatment",
      description: "Next Steps",
      image: "/images/doctor-reviewing-scan.jpg",
      link: "/newly-diagnosed/next-steps"
    },
    {
      id: "nlmsf-spaen",
      title: "NLMSF-SPAEN Publication On Evidence",
      description: "Unmet needs in LMS research and treatment",
      image: "/images/cancers-journal.jpg",
      link: "/research/publications"
    },
    {
      id: "sarcoma-center",
      title: "Finding A Sarcoma Center Of Excellence",
      description: "Specialized treatment centers",
      image: "/images/hospital-building.jpg",
      link: "/newly-diagnosed/find-specialist"
    },
    {
      id: "tumor-assessment",
      title: "LMS Tumor Assessment",
      description: "Treating LMS by stage/Follow Up care by Stage - according to NCCN Guidelines for Sarcoma Treatment",
      image: "/images/tumor-scan.jpg",
      link: "/newly-diagnosed/tumor-assessment"
    },
    {
      id: "molecular-testing",
      title: "Molecular Tumor Testing",
      description: "Understanding genetic testing options",
      image: "/images/dna-molecular.jpg",
      link: "/newly-diagnosed/molecular-tumor-testing"
    }
  ],
  videoId: "NLMSF-intro-video" // YouTube video ID for the foundation intro
};
