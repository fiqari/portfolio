"use client";

import { useEffect, useRef } from "react";

export default function FadeIn({ children, delayClass = "", className = "" }) {
    const domRef = useRef();

    useEffect(() => {
        // Respect user motion preferences
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            if (domRef.current) {
                domRef.current.classList.add("visible");
            }
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        // Optional: stop observing once faded in to avoid re-triggering
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={domRef} className={`fade-in ${delayClass} ${className}`}>
            {children}
        </div>
    );
}
