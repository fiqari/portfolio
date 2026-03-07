"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll state for sticky nav border
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle escape key to close menu
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
                const toggleBtn = document.getElementById("nav-toggle");
                if (toggleBtn) toggleBtn.focus();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const overlayLinks = [
        { href: "/#work", label: "Work" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <>
            <nav
                className={`nav ${scrolled ? "scrolled" : ""}`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="nav__inner container">
                    <Link href="/" className="nav__logo" onClick={closeMenu}>
                        Wainaina Thomas
                    </Link>

                    <div className="nav__links" id="nav-links">
                        <Link
                            href="/#work"
                            className={`nav__link ${pathname === "/" ? "nav__link--active" : ""}`}
                            aria-current={pathname === "/" ? "page" : undefined}
                        >
                            Work
                        </Link>
                        <Link href="/#contact" className="nav__link">
                            Contact
                        </Link>
                    </div>

                </div>

            </nav>

            <button
                className={`nav__toggle ${isOpen ? "active" : ""}`}
                id="nav-toggle"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="nav-overlay"
                onClick={toggleMenu}
            >
                <div className="nav__toggle-icon">
                    <span className="nav__toggle-bar nav__toggle-bar--top"></span>
                    <span className="nav__toggle-bar nav__toggle-bar--bottom"></span>
                </div>
            </button>

            {/* Mobile overlay */}
            <div
                className={`nav__overlay ${isOpen ? "open" : ""}`}
                id="nav-overlay"
                role="dialog"
                aria-label="Navigation menu"
                aria-modal="true"
            >
                <div className="nav__overlay-inner">
                    {overlayLinks.map((link, i) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="nav__overlay-link"
                            onClick={closeMenu}
                            style={{ "--link-index": i }}
                        >
                            <span className="nav__overlay-link-text">{link.label}</span>
                            <span className="nav__overlay-link-line"></span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
