interface Card {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const homeData = {
  cards: [
    {
      id: "newly-diagnosed",
      title: "Newly Diagnosed",
      description: "Essential resources and information for patients who have recently been diagnosed with LMS.",
      image: "/images/resources/newly-diagnosed.jpg",
      link: "/newly-diagnosed"
    },
    {
      id: "treatment-options",
      title: "Treatment Options",
      description: "Learn about treatment approaches for LMS, including surgery, radiation, and systemic therapies.",
      image: "/images/resources/treatment.jpg",
      link: "/treatment-options"
    },
    {
      id: "support-programs",
      title: "Support Programs",
      description: "Connect with our patient community and access support resources for your LMS journey.",
      image: "/images/resources/support.jpg",
      link: "/support"
    }
  ],
  stats: [
    {
      value: "15+",
      label: "Years of Service",
      description: "Supporting the LMS community since 2008"
    },
    {
      value: "1000+",
      label: "Patients Supported",
      description: "Providing resources and guidance to those affected by LMS"
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance for patients and families"
    },
    {
      value: "100%",
      label: "Dedication",
      description: "Committed to finding a cure for Leiomyosarcoma"
    }
  ],
  features: [
    {
      title: "Patient Support",
      description: "Access resources, support groups, and connect with others in the LMS community",
      href: "/support"
    },
    {
      title: "Educational Resources",
      description: "Learn about LMS, treatment options, and the latest research developments",
      href: "/newly-diagnosed/what-is-lms"
    },
    {
      title: "Find a Specialist",
      description: "Connect with LMS specialists and treatment centers near you",
      href: "/newly-diagnosed/find-specialist"
    },
    {
      title: "Research Initiatives",
      description: "Stay informed about ongoing clinical trials and research programs",
      href: "/resources/research"
    }
  ],
  news: [
    {
      title: "TRACK Trial Now Enrolling Patients",
      description: "New study aims to establish whether patients with rare tumors can benefit from matched molecular therapy",
      date: "2025-02-28",
      href: "/newly-diagnosed/molecular-tumor-testing"
    },
    {
      title: "Expanded Support Services",
      description: "NLMSF introduces new support programs for patients and caregivers",
      date: "2025-02-15",
      href: "/support"
    },
    {
      title: "Annual Conference Announcement",
      description: "Save the date for our upcoming virtual patient conference",
      date: "2025-02-01",
      href: "/events"
    }
  ],
  testimonials: [
    {
      quote: "NLMSF provided invaluable support during my LMS journey. Their resources and community helped me understand my diagnosis and treatment options.",
      author: "LMS Survivor",
      location: "California"
    },
    {
      quote: "The foundation's dedication to research and patient support gives hope to everyone affected by LMS. They're making a real difference.",
      author: "Medical Professional",
      location: "Texas"
    },
    {
      quote: "Finding NLMSF connected me with others who understand what I'm going through. Their support network is incredible.",
      author: "LMS Patient",
      location: "New York"
    }
  ],
  partners: [
    {
      name: "Partner 1",
      logo: "https://nlmsf.org/wp-content/uploads/2020/05/unnamed-32.jpg",
      href: "#"
    },
    {
      name: "ASCO",
      logo: "https://nlmsf.org/wp-content/uploads/2020/05/7-asco.jpg",
      href: "#"
    },
    {
      name: "Partner 3",
      logo: "https://nlmsf.org/wp-content/uploads/2020/05/unnamed-36.jpg",
      href: "#"
    },
    {
      name: "Partner 4",
      logo: "https://nlmsf.org/wp-content/uploads/2020/05/download-3.png",
      href: "#"
    },
    {
      name: "Partner 5",
      logo: "https://nlmsf.org/wp-content/uploads/2020/05/unnamed-34.jpg",
      href: "#"
    },
    {
      name: "ECOG",
      logo: "https://nlmsf.org/wp-content/uploads/2021/02/ECOG.jpg",
      href: "#"
    },
    {
      name: "Partner 7",
      logo: "https://nlmsf.org/wp-content/uploads/2020/05/unnamed-33.jpg",
      href: "#"
    },
    {
      name: "Partner 8",
      logo: "https://nlmsf.org/wp-content/uploads/2020/05/unnamed-35.jpg",
      href: "#"
    },
    {
      name: "PCORI",
      logo: "https://nlmsf.org/wp-content/uploads/2021/03/Pcori.jpg",
      href: "#"
    },
    {
      name: "Partner 10",
      logo: "https://nlmsf.org/wp-content/uploads/2020/05/cb0a477898aea87bc1af0e7ddeaea647-1.png",
      href: "#"
    },
    {
      name: "Partner 11",
      logo: "https://nlmsf.org/wp-content/uploads/2020/05/download-2.png",
      href: "#"
    },
    {
      name: "Sarcoma Oncology Center",
      logo: "https://nlmsf.org/wp-content/uploads/2020/05/Sarcoma-Oncology-Center.jpg",
      href: "#"
    },
    {
      name: "Lazarex",
      logo: "https://nlmsf.org/wp-content/uploads/2020/12/lazarex.jpg",
      href: "#"
    },
    {
      name: "Partner 14",
      logo: "https://nlmsf.org/wp-content/uploads/2020/05/download-6.png",
      href: "#"
    },
    {
      name: "Partner 15",
      logo: "https://nlmsf.org/wp-content/uploads/2020/05/download-6.jpg",
      href: "#"
    },
    {
      name: "Partner 16",
      logo: "https://nlmsf.org/wp-content/uploads/2020/05/unnamed-38.jpg",
      href: "#"
    },
    {
      name: "Partner 17",
      logo: "https://nlmsf.org/wp-content/uploads/2020/11/unnamed-74-1.jpg",
      href: "#"
    },
    {
      name: "Count Me In",
      logo: "https://nlmsf.org/wp-content/uploads/2021/11/CountmeIn.jpg",
      href: "#"
    },
    {
      name: "University of Mannheim",
      logo: "https://nlmsf.org/wp-content/uploads/2022/03/University-of-Mannheim.jpg",
      href: "#"
    },
    {
      name: "USC",
      logo: "https://nlmsf.org/wp-content/uploads/2022/03/USC.jpg",
      href: "#"
    },
    {
      name: "Royal Marsden",
      logo: "https://nlmsf.org/wp-content/uploads/2022/03/royal-marsden.jpg",
      href: "#"
    },
    {
      name: "McGill University",
      logo: "https://nlmsf.org/wp-content/uploads/2022/03/McGill.jpg",
      href: "#"
    }
  ]
};
