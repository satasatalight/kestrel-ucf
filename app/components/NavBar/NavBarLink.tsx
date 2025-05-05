"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
  label: string;
  href: string; // Internal or external link
  isNewWindow?: boolean; // test
}

const NavBarLink = ({ label, href, isNewWindow }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === `/${label.toLowerCase()}`;
  const baseClasses =
    "text-white hover:opacity-100 hover:underline text-xl font-semibold transition";
  const activeClass = isActive ? "opacity-100 underline" : "opacity-75";
  const [isOpen, setIsOpen] = useState(false);

  // Use shadcn dropdown for "Teams"
  if (label.toLowerCase() === "teams") {
    return (
      <div
        className="relative group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >

        {/* Clickable Link to /temas */}
        <Link href = "/teams" className = {baseClasses + activeClass}>
          {label}
        </Link>

        {/* <button className={baseClasses + activeClass}>{label}</button> */}
        {isOpen && (
          <div className="absolute top-full mt-0 bg-neutral-800/80 text-white -left-3 rounded-b-md">
            <Link
              href="/team/sensors"
              className="block px-4 py-2 hover:bg-neutral-900/80"
            >
              Sensors
            </Link>
            <Link
              href="/team/pathing"
              className="block px-4 py-2 hover:bg-neutral-900/80"
            >
              Pathing
            </Link>
            <Link
              href="/team/ardupilot"
              className="block px-4 py-2 hover:bg-neutral-900/80"
            >
              Ardupilot
            </Link>
            <Link
              href="/team/model"
              className="block px-4 py-2 hover:bg-neutral-900/80"
            >
              Model
            </Link>
          </div>
        )}
      </div>
    );
  }

  // For normal links, use Next.js <Link>
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
