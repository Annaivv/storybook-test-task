export interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Consulting", href: "/consulting" },
      { label: "Workshops", href: "/workshops" },
    ],
  },
  {
    label: "Products",
    children: [
      {
        label: "Software",
        children: [
          { label: "CRM", href: "/crm" },
          { label: "Analytics", href: "/analytics" },
        ],
      },
      { label: "Hardware", href: "/hardware" },
    ],
  },
];
