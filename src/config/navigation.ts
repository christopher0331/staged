import { MainNavItem } from "@/lib/types/navigation"

export const navigationConfig: MainNavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Patients",
    items: [
      {
        title: "PATIENT RESOURCES",
        isCategory: true,
        items: [
          {
            title: "Patient Overview",
            href: "/patient/overview",
            description: "Essential information and resources for LMS patients and caregivers."
          },
          {
            title: "Patient Education",
            href: "/patient/patient-education",
            description: "Educational programs, workshops, and video resources for the LMS community."
          }
        ]
      },
      {
        title: "NEWLY DIAGNOSED",
        isCategory: true,
        items: [
          {
            title: "What is LMS?",
            href: "/newly-diagnosed/what-is-lms",
            description: "Learn about Leiomyosarcoma, its symptoms, diagnosis, and treatment options."
          },
          {
            title: "Next Steps After Diagnosis",
            href: "/newly-diagnosed/next-steps",
            description: "Understanding your path forward and accessing important resources."
          },
          {
            title: "Find a Specialist",
            href: "/newly-diagnosed/find-specialist",
            description: "Locate sarcoma specialists and centers of excellence near you."
          },
          {
            title: "LMS Tumor Staging",
            href: "/newly-diagnosed/staging-lms-tumors",
            description: "Understanding tumor stages, grading, and treatment options for each stage."
          },
          {
            title: "Molecular Tumor Testing",
            href: "/newly-diagnosed/molecular-tumor-testing",
            description: "Learn about biomarker testing and genomic analysis for personalized treatment."
          },
          {
            title: "Your Care Team",
            href: "/newly-diagnosed/care-team",
            description: "Understanding the roles of each member of your Sarcoma Clinical Care Team."
          },
          {
            title: "ABC's of Newly Diagnosed",
            href: "/newly-diagnosed/abcs",
            description: "Essential guidance for navigating your LMS diagnosis and treatment journey."
          },
          {
            title: "Second Opinions",
            href: "/newly-diagnosed/second-opinions",
            description: "Understanding when and how to seek a second opinion for your LMS diagnosis or treatment plan."
          },
          {
            title: "Staging vs Grading",
            href: "/newly-diagnosed/staging-grading",
            description: "Understanding the difference between cancer staging and grading and their importance in treatment planning."
          },
          {
            title: "What Are Clinical Trials?",
            href: "/newly-diagnosed/clinical-trials",
            description: "Learn about clinical trials, their benefits and risks, and how to find trials for Leiomyosarcoma."
          },
          {
            title: "Patient-Driven Research",
            href: "/newly-diagnosed/research-participation",
            description: "Discover how you can actively participate in research initiatives to advance LMS treatments and improve outcomes."
          }
        ]
      }
    ]
  },
  {
    title: "Caregiving",
    href: "/caregiving",
    description: "Resources and support for caregivers of LMS patients at all stages of the journey."
  },
  {
    title: "Resources",
    items: [
      {
        title: "Patient Support",
        href: "/resources/patient-support",
        description: "Access support groups, counseling services, and community resources."
      },
      {
        title: "Transportation & Lodging",
        href: "/resources/transportation-lodging",
        description: "Find resources for transportation assistance and lodging during cancer treatment."
      },
      {
        title: "Insurance Coverage",
        href: "/resources/insurance-coverage",
        description: "Learn about your insurance rights and coverage options as a cancer patient."
      },
      {
        title: "Research & Clinical Trials",
        href: "/resources/research",
        description: "Stay informed about the latest LMS research and clinical trial opportunities."
      }
    ]
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  }
];
