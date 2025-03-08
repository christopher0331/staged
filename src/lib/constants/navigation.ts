import { MainNavItem, FooterItem } from "@/lib/types/navigation";

export const mainNav: MainNavItem[] = [
  {
    title: "About Us",
    href: "/about",
    items: [
      {
        title: "Mission & Vision",
        href: "/about/mission-vision",
        description: "Our mission and vision for the future"
      },
      {
        title: "History & Milestones",
        href: "/about/history",
        description: "Our journey and achievements"
      },
      {
        title: "Leadership & Board",
        href: "/about/leadership",
        description: "Meet our team and board members"
      },
      {
        title: "Partners & Collaborations",
        href: "/about/partners",
        description: "Our partners in the fight against LMS"
      }
    ]
  },
  {
    title: "Newly Diagnosed",
    href: "/newly-diagnosed",
    items: [
      {
        title: "Overview",
        href: "/newly-diagnosed/what-is-lms",
        description: "Understanding Leiomyosarcoma (LMS) and its diagnosis"
      },
      {
        title: "Next Steps",
        href: "/newly-diagnosed/next-steps",
        description: "What to do after diagnosis"
      }
    ]
  },
  {
    title: "What is LMS?",
    href: "/newly-diagnosed/what-is-lms",
    items: [
      {
        title: "Overview",
        href: "/what-is-lms/overview",
        description: "Understanding Leiomyosarcoma"
      },
      {
        title: "Diagnosis & Staging",
        href: "/what-is-lms/diagnosis",
        description: "Information about diagnosis and staging"
      },
      {
        title: "Treatment Options",
        href: "/what-is-lms/treatment",
        description: "Available treatment options"
      },
      {
        title: "Clinical Trials",
        href: "/what-is-lms/clinical-trials",
        description: "Current clinical trials and research"
      },
      {
        title: "FAQ",
        href: "/what-is-lms/faq",
        description: "Frequently asked questions"
      }
    ]
  },
  {
    title: "Support",
    href: "/support",
    items: [
      {
        title: "Support Groups",
        href: "/support/groups",
        description: "Join our support community"
      },
      {
        title: "Educational Resources",
        href: "/support/resources",
        description: "Learning materials and guides"
      },
      {
        title: "Financial Aid",
        href: "/support/financial-aid",
        description: "Financial assistance programs"
      },
      {
        title: "Caregiver Resources",
        href: "/support/caregivers",
        description: "Resources for caregivers"
      }
    ]
  },
  {
    title: "Research",
    href: "/research",
    items: [
      {
        title: "Research Initiatives",
        href: "/research/initiatives",
        description: "Current research projects"
      },
      {
        title: "Publications & Studies",
        href: "/research/publications",
        description: "Scientific publications and studies"
      },
      {
        title: "Grants & Funding",
        href: "/research/grants",
        description: "Research funding opportunities"
      }
    ]
  },
  {
    title: "Get Involved",
    href: "/get-involved",
    items: [
      {
        title: "Donate",
        href: "/get-involved/donate",
        description: "Support our mission"
      },
      {
        title: "Volunteer",
        href: "/get-involved/volunteer",
        description: "Join our volunteer program"
      },
      {
        title: "Fundraise",
        href: "/get-involved/fundraise",
        description: "Start your fundraising campaign"
      }
    ]
  }
];

export const footerNav: FooterItem[] = [
  {
    title: "Quick Links",
    items: [
      { title: "Home", href: "/" },
      { title: "About Us", href: "/about" },
      { title: "What is LMS?", href: "/what-is-lms" },
      { title: "Support", href: "/support" },
      { title: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Support",
    items: [
      { title: "24/7 Hotline", href: "tel:+13038083437" },
      { title: "Support Groups", href: "/support/groups" },
      { title: "Resources", href: "/support/resources" },
      { title: "FAQ", href: "/what-is-lms/faq" }
    ]
  },
  {
    title: "Get Involved",
    items: [
      { title: "Donate", href: "/get-involved/donate" },
      { title: "Volunteer", href: "/get-involved/volunteer" },
      { title: "Fundraise", href: "/get-involved/fundraise" },
      { title: "Newsletter", href: "/contact/newsletter" }
    ]
  },
  {
    title: "Connect",
    items: [
      { title: "Facebook", href: "https://facebook.com/nlmsf", external: true },
      { title: "Twitter", href: "https://twitter.com/nlmsf", external: true },
      { title: "Instagram", href: "https://instagram.com/nlmsf", external: true },
      { title: "LinkedIn", href: "https://linkedin.com/company/nlmsf", external: true }
    ]
  }
];
