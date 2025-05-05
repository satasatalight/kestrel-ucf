"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
  href: string; // Internal or external link
  isNewWindow?: boolean;
}

const NavBarLink = ({ label, href, isNewWindow }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === `/${label.toLowerCase()}`;
  const baseClasses =
    "text-white hover:opacity-100 hover:underline text-xl font-semibold transition";
  const activeClass = isActive ? "opacity-100 underline" : "opacity-75";

  // Use shadcn dropdown for "Teams"
  if (label.toLowerCase() === "teams") {
    return (
<<<<<<< Updated upstream
      <div
        className="relative group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className={baseClasses + activeClass}>{label}</button>
        {isOpen && (
          <div className="absolute top-full mt-0 bg-neutral-800/80 text-white -left-3 rounded-b-md">
            <Link
              href="/sensors"
              className="block px-4 py-2 hover:bg-neutral-900/80"
            >
              Sensors
            </Link>
            <Link
              href="/pathing"
              className="block px-4 py-2 hover:bg-neutral-900/80"
            >
              Pathing
            </Link>
            <Link
              href="/ardupilot"
              className="block px-4 py-2 hover:bg-neutral-900/80"
            >
              Ardupilot
            </Link>
            <Link
              href="/model"
              className="block px-4 py-2 hover:bg-neutral-900/80"
            >
              Model
            </Link>
          </div>
        )}
      </div>
=======
      <DropdownMenu>
        {/* <DropdownMenuTrigger asChild>
          <button className={baseClasses + activeClass}>{label}</button>
        </DropdownMenuTrigger> */}
        {/* Clicking this now goes to /teams */}
        <Link
          href="/teams"
          className={baseClasses + activeClass}
        >
          {label}
        </Link>
        <DropdownMenuContent
          align="start" // adjust alignment as needed
          className="z-9999"
        >
          <DropdownMenuItem asChild>
            <Link href="/sensors">Sensors</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/pathing">Pathing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/ardupilot">Ardupilot</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/model">Model</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/leadership">Leadership</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/website">Website</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
>>>>>>> Stashed changes
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
