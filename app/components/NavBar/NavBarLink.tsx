"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
  href: string; // ✅ Add this line to allow optional external links
  isNewWindow?: boolean;
}

const NavBarLink = ({ label, href, isNewWindow }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === `/${label.toLowerCase()}`;

  const baseClasses =
    "inline text-white hover:opacity-100 hover:underline text-xl font-semibold transition ";
  const activeClass = isActive ? "opacity-100 underline" : "opacity-75";

  // Internal link using <Link>
  return (
    <Link
      href={href}
      className={baseClasses + activeClass}
      target={isNewWindow ? "_blank" : ""}
    >
      {label}
    </Link>
  );
};

export default NavBarLink;
