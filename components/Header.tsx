"use client";

import PillNav from "./PillNav";

export default function Header() {
  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <PillNav
      items={navItems}
      activeHref="#hero"
      logoHref="#hero"
    />
  );
}
