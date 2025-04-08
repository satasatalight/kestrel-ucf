"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
  label: string;
  href: string; // ✅ Add this line to allow optional external links
  isNewWindow?: boolean;
}

const NavBarLink = ({ label, href, isNewWindow }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === `/${label.toLowerCase()}`;
  const [isOpen, setIsOpen] = useState(false);

  const baseClasses =
    "inline text-white hover:opacity-100 hover:underline text-xl font-semibold transition ";
  const activeClass = isActive ? "opacity-100 underline" : "opacity-75";

  // 👉 If label is "Teams", return dropdown menu
  if (label.toLowerCase() === "teams") {
    return (
      <div
        className="relative group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className={baseClasses + activeClass}>{label}</button>
        {isOpen && (
          <div className="absolute top-full mt-0 bg-neutral-800/80 text-white -left-3 rounded-b-md">
            <Link
              href="/hardware"
              className="block px-4 py-2 hover:bg-neutral-900/80"
            >
              Sensors
            </Link>
            <Link
              href="/software"
              className="block px-4 py-2 hover:bg-neutral-900/80"
            >
              Pathing
            </Link>
            <Link
              href="/research"
              className="block px-4 py-2 hover:bg-neutral-900/80"
            >
              Ardupilot
            </Link>
            <Link
              href="/research"
              className="block px-4 py-2 hover:bg-neutral-900/80"
            >
              Model
            </Link>
          </div>
        )}
      </div>
    );
  }

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
