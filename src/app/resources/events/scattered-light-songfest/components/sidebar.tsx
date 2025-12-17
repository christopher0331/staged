import { SidebarNav } from '../../components/sidebar-nav';

export function EventSidebar() {
  const navItems = [
    {
      href: "#event-details",
      label: "Event Details",
      color: "purple" as const
    },
    {
      href: "#jons-story",
      label: "Jon's Story",
      color: "blue" as const
    },
    {
      href: "#about-lms",
      label: "About LMS",
      color: "teal" as const
    },
    {
      href: "#donation",
      label: "How to Support",
      color: "orange" as const
    }
  ];

  const backLink = {
    href: "/resources/events",
    label: "Back to Events"
  };

  return <SidebarNav items={navItems} backLink={backLink} />;
}
