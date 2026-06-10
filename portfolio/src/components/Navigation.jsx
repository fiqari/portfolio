"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav__inner container">
        <Link href="/" className="nav__logo">
          Wainaina Thomas
        </Link>
        <div className="nav__links">
          <Link
            href="/#work"
            className={`nav__link ${pathname === "/" ? "nav__link--active" : ""}`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`nav__link ${pathname === "/about" ? "nav__link--active" : ""}`}
          >
            About
          </Link>
          <Link
            href="/healthherald"
            className={`nav__link ${pathname.startsWith("/healthherald") ? "nav__link--active" : ""}`}
          >
            Writing
          </Link>
          <a
            href="/wainaina_thomas_resume.pdf"

            target="_blank"
            rel="noopener noreferrer"
            className="nav__link nav__link--resume"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
