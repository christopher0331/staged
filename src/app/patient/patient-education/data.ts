export interface Video {
  presenter?: string;
  title?: string;
  topic: string;
  date?: string;
  description?: string;
  url?: string;
}

export interface VideoSection {
  id: string;
  title: string;
  videos: Video[];
}

export const videoSections: VideoSection[] = [
  {
    id: "abc-new-diagnosis",
    title: "ABC's of a New Diagnosis",
    videos: [
      {
        topic: "The ABC's of a New Diagnosis",
        date: "May 22, 2023",
        description: "Presented by the NLMSF",
        url: "https://youtu.be/9pnKTkzqOw0"
      },
      {
        topic: "Introduction to the ABC's of a New Diagnosis",
        date: "January 16, 2022",
        description: "Presented by the NLMSF",
        url: "https://youtu.be/BJBK8bJOOaw"
      }
    ]
  },
  {
    id: "basic-research",
    title: "Basic Research",
    videos: [
      {
        presenter: "Dr. Priya Chudasama",
        title: "Heidelberg University, Germany",
        topic: "The Importance of Telemeres in Leiomyosarcoma",
        date: "July 19, 2022",
        url: "https://www.youtube.com/watch?v=s5xJqpD0oMA"
      },
      {
        presenter: "Dr. Jonathan Trent",
        title: "Sylvester Comprehensive Cancer Center, Miami University",
        topic: "LMS Connect Live",
        date: "March 18, 2022",
        description: "Program featuring Dr. Matthew Hemming and Dr. Nicolas Llosa discussing laboratory models and immune microenvironment of LMS",
        url: "https://youtu.be/lgXPwxdB8pM"
      }
    ]
  },
  {
    id: "caregiving",
    title: "Caregiving",
    videos: [
      {
        presenter: "Dr. Marya Shegog",
        title: "Lararex Foundation",
        topic: "Caregiving Counts",
        date: "August 20, 2022",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/EhYR2LHtSdU"
      }
    ]
  },
  {
    id: "chemotherapy-targeted-agents",
    title: "Chemotherapy and Targeted Agents",
    videos: [
      {
        presenter: "Dr. Neeta Somaiah",
        title: "MD Anderson Cancer Center, Houston, TX",
        topic: "Current Treatment Options for Leiomyosarcoma",
        date: "June 20, 2024",
        description: "Hosted by the NLMSF"
      },
      {
        presenter: "Dr. Elise Nassif",
        title: "MD Anderson Cancer Center, Houston, TX",
        topic: "How patient co-morbidities can impact chemotherapy treatment",
        date: "April 14, 2023",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/qcwqPNfPkpA"
      },
      {
        presenter: "Dr. Jonathan Trent",
        title: "Sylvester Comprehensive Cancer Center, Miami, FL",
        topic: "The Use of Trabectedin in the Treatment of LMS",
        date: "January 29, 2023",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/efuZXkaRncQ"
      },
      {
        presenter: "Dr. Neeta Somaiah",
        title: "MD Anderson Cancer Center, Houston, TX",
        topic: "The Use of Votrient in the Treatment of Sarcomas (Leiomyosarcoma)",
        date: "January 20, 2023",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/zk6CNU11VE0"
      }
    ]
  },
  {
    id: "circulating-tumor-dna",
    title: "Circulating Tumor DNA and Liquid Biopsies",
    videos: [
      {
        topic: "Circulating Tumor DNA Status and Future Directions for Sarcoma",
        description: "Panel included Dr. Nam Quoc Bui, Dr. Brian Compton, Dr. Elizabeth Davis, Dr. Erlinda Maria Gordon, Dr. Matthew Hemming, Dr. Elise Nasif, Dr. Joanna Pryzbyl, Dr. David Schulman and Dr. Jonathan Trent",
        url: "https://www.youtube.com/watch?v=fhsyH8bJn-l"
      },
      {
        presenter: "Dr. Kristin Ganjoo & Katie Baker, PhD",
        title: "Stanford University, Stanford, CA & Natera/Signatera",
        topic: "The Role of Circulating Tumor DNA (ctDNA) in Leiomyosarcoma",
        date: "March 27, 2022",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/4DdhdoP8BOQ"
      },
      {
        presenter: "Dr. Joanna Przybyl",
        title: "The Research Institute of Montreal at McGill University, Montreal, Canada",
        topic: "Circulating DNA in Uterine Leiomyosarcoma and Benign Uterine Leiomyosarcomas",
        date: "February 24, 2022",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/Lhh_uvjK8uU"
      },
      {
        presenter: "Dr. Kenneth Cardona",
        title: "Emory University Winship Cancer Institute, Atlanta, GA",
        topic: "The Role of Nomograms in the Treatment of LMS and the Potential Future Impact of Circulating Tumor DNA",
        date: "February 17, 2022",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/Gy2u7QRLuqU"
      },
      {
        presenter: "Dr. Dale Shepherd",
        title: "Cleveland Clinic, Cleveland, OH",
        topic: "Current LMS/Sarcoma research projects and perspectives on ctDNA",
        date: "February 2, 2022",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/fqo32_wgRpU"
      },
      {
        presenter: "Dr. Brian Crompton",
        title: "Dana-Farber Cancer Institute, Boston, MA",
        topic: "ct-DNA Proof of Concept Research for Sarcoma",
        date: "November 30, 2021",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/a98XOq_BE6k"
      }
    ]
  },
  {
    id: "clinical-trials",
    title: "Clinical Trials",
    videos: [
      {
        presenter: "Dr. Candace Haddox",
        title: "Dana-Farber Cancer Institute and Harvard Medical School, Boston, MA",
        topic: "Phase 1 Clinical Trial using Peposertib (M3814) and low dose Liposomal Doxorubicin",
        date: "February 26, 2025",
        description: "General discussion about clinical trials and presentation of novel Phase 1 Clinical Trial",
        url: "https://youtu.be/jVMw7irewYI"
      },
      {
        presenter: "Dr. Seth Pollack",
        title: "Lurie Cancer Center, Northwestern University, Chicago, IL",
        topic: "Phase II Clinical Trial for Leiomyosarcoma using Zanzalintinib (XL092)",
        date: "January 31, 2025",
        description: "Discussion of the Phase II Clinical Trial for metastatic or surgically unresectable tumors",
        url: "https://youtu.be/h4mi-aJT1tk"
      },
      {
        presenter: "Dr. John Mullinax",
        title: "Moffit Cancer Center, Tampa, FL",
        topic: "STRASS 2/3 Clinical Trial for Retroperitoneal Leiomyosarcoma and Liposarcoma",
        date: "January 2025",
        description: "Discussion of the clinical trial for initial treatment",
        url: "https://youtu.be/EPeR4Wui3Bs"
      },
      {
        presenter: "Dr. Vishu Avutu",
        title: "Memorial Sloan Kettering Cancer Center, New York, NY",
        topic: "Phase 1a/2 Clinical Trial of GI-102 for Patients with Advanced Sarcoma",
        date: "August 2024",
        description: "GI-102 works by boosting the immune system to find and kill cancer cells",
        url: "https://youtu.be/kfOK0sNa4JQ"
      },
      {
        topic: "Clinical Trials Perspectives: Panel Discussion by Sarcoma Medical Oncologists",
        date: "February 2024",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/ioL0850rt7A"
      },
      {
        presenter: "Dr. Gregory Cote",
        title: "Massachusetts General Hospital, Boston, MA",
        topic: "Overview of Clinical Trials and Lurbinectedin with Doxorubicin Trial",
        date: "August 8, 2023",
        description: "Overview of how clinical trials are done to bring new drugs to patients",
        url: "https://youtu.be/AU46FmcSc3Y"
      },
      {
        presenter: "Dr. Brian Van Tine",
        title: "The Siteman Cancer Center, Washington University, St. Louis, MO",
        topic: "New Clinical Trials for Leiomyosarcoma",
        date: "July 20, 2023",
        description: "Updates on multiple clinical trials for leiomyosarcoma patients",
        url: "https://www.youtube.com/watch?v=ZHpMtNTwSRw"
      },
      {
        presenter: "Dr. Brian Van Tine",
        title: "The Siteman Cancer Center, Washington University, St. Louis, MO",
        topic: "Updates on Three Promising Active LMS Clinical Trials",
        date: "April 14, 2023",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/V80SxCwx_cE"
      },
      {
        presenter: "Dr. Elise Nassif",
        title: "MD Anderson Cancer Center, Houston, TX",
        topic: "Clinical Trials in Soft Tissue Sarcoma: The Efficacy of Early-Phase Clinical Trials",
        date: "September 21, 2022",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/vArSCfUnAbM"
      },
      {
        presenter: "Dr. Brian Van Tine",
        title: "The Siteman Cancer Center, Washington University, St. Louis, MO",
        topic: "Unesbulin, New Treatment for Leiomyosarcoma (Upcoming Clinical trial)",
        date: "June 28, 2022",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/HbwUvXcl7wg"
      },
      {
        presenter: "Dr. Matthew Ingham",
        title: "Columbia University Medical Center, New York, NY",
        topic: "New Treatment Approaches for LMS in Preclinical or Clinical Trials",
        date: "June 8, 2022",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/mY2q7q5VOlA"
      }
    ]
  },
  {
    id: "general-information",
    title: "General Information on Sarcoma Care - Multidisciplinary Approach",
    videos: [
      {
        presenter: "Dr. Elizabeth Davis",
        title: "Vanderbilt Sarcoma Center",
        topic: "Patient learning hour about sarcoma and its treatment",
        date: "July 14, 2022",
        description: "Co-hosted by the NLMSF",
        url: "https://youtu.be/2FuOuLewaJl"
      },
      {
        presenter: "Dr. Elizabeth Davis",
        title: "Vanderbilt Cancer Center, Nashville, KY",
        topic: "Brief background on LMS and Treatment of LMS",
        date: "August 20, 2020",
        description: "Hosted by the NLMSF",
        url: "https://youtu.be/U-JW4GYi3tA"
      }
    ]
  }
];
