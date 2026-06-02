"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        Geografica
      </Link>

      <div className="navLinks">
        <Link
          href="/flights"
          className={`navLink ${isActive("/flights") ? "activeLink" : ""}`}
        >
          Flights
        </Link>

        <Link
          href="/hotels"
          className={`navLink ${isActive("/hotels") ? "activeLink" : ""}`}
        >
          Hotels
        </Link>

        <Link
          href="/packages"
          className={`navLink ${isActive("/packages") ? "activeLink" : ""}`}
        >
          Packages
        </Link>

        <Link
          href="/visas"
          className={`navLink ${isActive("/visas") ? "activeLink" : ""}`}
        >
          Visas
        </Link>
      </div>

      <div className="navLinks">
        <button className="navLink">
          Search
        </button>

        <button className="navLink">
          Profile
        </button>
      </div>
    </nav>
  );
}