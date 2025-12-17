export interface NavItem {
  title: string;
  href?: string;
  description?: string;
  isCategory?: boolean;
  disabled?: boolean;
  items?: NavItem[];
}

export interface MainNavItem {
  title: string;
  href?: string;
  description?: string;
  items?: NavItem[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}
