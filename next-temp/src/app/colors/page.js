"use client";

import Link from "next/link";
import { useEffect } from "react";

const themes = [
    {
        name: "1. Warm Paper (Editorial)",
        bg: "#FAF8F5",
        text: "#2C2C2C",
        textSecondary: "#6e6e6e",
        accent: "#A67C52",
        description: "A soft, warm off-white that mimics traditional high-quality printing paper. Significantly reduces blue-light eye strain without committing to dark mode.",
    },
    {
        name: "2. Cool Slate (Technical SaaS)",
        bg: "#F4F6F8",
        text: "#1F2937",
        textSecondary: "#4B5563",
        accent: "#2563EB",
        description: "A very faint blue-grey. Very common in modern SaaS applications (like Stripe or Linear) and creates a very clean, highly technical aesthetic.",
    },
    {
        name: "3. Oat Milk (Soft & Natural)",
        bg: "#F3F1EC",
        text: "#333333",
        textSecondary: "#777777",
        accent: "#D97757",
        description: "A grounded beige. It strips all harshness from the screen, making long-form case studies feel incredibly calm and readable.",
    },
    {
        name: "4. Alabaster (Warm Minimalist)",
        bg: "#F9F7F3",
        text: "#2D2A26",
        textSecondary: "#6B665E",
        accent: "#8C8C8C",
        description: "Almost white, but pulled slightly into the yellow/red spectrum to subtly warm up the page and stop digital glare.",
    },
    {
        name: "5. Muted Sage (Calming Focus)",
        bg: "#F0F3F1",
        text: "#233026",
        textSecondary: "#4E5C52",
        accent: "#4A7A59",
        description: "A highly subtle green-grey tint. Physiologically, green is the most restful color for the human eye, reducing cognitive fatigue.",
    },
    {
        name: "6. Soft Silver (Neutral Monochromatic)",
        bg: "#F0F0F0",
        text: "#222222",
        textSecondary: "#555555",
        accent: "#111111",
        description: "A completely flat, neutral light grey. No color tint, just a simple step down in brightness from pure white.",
    },
    {
        name: "7. Midnight Slate (Low Strain Dark Mode)",
        bg: "#1A1D20",
        text: "#E2E4E9",
        textSecondary: "#9AA4B8",
        accent: "#8B9BB4",
        description: "A true low-strain dark mode. Not pure black (which causes astigmatism halation), paired with soft off-white text for ultimate comfort.",
    }
];

export default function ColorsPage() {

    // Update body background for this page specifically so the sides aren't glaring
    useEffect(() => {
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.backgroundImage = "none";
        return () => {
            document.body.style.backgroundColor = "";
            document.body.style.backgroundImage = "";
        };
    }, []);

    return (
        <main style={{ padding: "4rem 2rem", maxWidth: "1000px", margin: "0 auto", backgroundColor: "#FFFFFF" }}>
            <div style={{ marginBottom: "4rem" }}>
                <Link href="/" style={{ textDecoration: "underline", color: "#666", fontSize: "1.1rem" }}>
                    &larr; Back to Portfolio
                </Link>
                <h1 style={{ fontSize: "3rem", fontWeight: 300, marginTop: "2rem", color: "#111", letterSpacing: "-0.02em" }}>
                    Low-Eyestrain Palette Options
                </h1>
                <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "60ch", lineHeight: 1.6, marginTop: "1rem" }}>
                    Pure white (#FFFFFF) paired with pure black (#000000) causes the most digital eye strain due to maximum contrast. Here are 7 highly professional alternatives tailored for a Product Designer. Review the cards below to see how each theme affects readability and mood.
                </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4rem", paddingBottom: "10rem" }}>
                {themes.map((theme, i) => (
                    <div
                        key={i}
                        style={{
                            backgroundColor: theme.bg,
                            color: theme.text,
                            padding: "4rem auto",
                            borderRadius: "16px",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                            border: "1px solid rgba(0,0,0,0.05)",
                            overflow: "hidden"
                        }}
                    >
                        {/* Header info bar */}
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            flexWrap: "wrap",
                            gap: "2rem",
                            padding: "2rem 3rem",
                            borderBottom: `1px solid ${theme.textSecondary}30`
                        }}>
                            <div>
                                <h2 style={{ margin: 0, fontSize: "2rem", fontWeight: 400, letterSpacing: "-0.01em" }}>{theme.name}</h2>
                                <p style={{ margin: "0.5rem 0 0", color: theme.textSecondary, fontSize: "1rem", maxWidth: "55ch", lineHeight: 1.6 }}>{theme.description}</p>
                            </div>

                            <div style={{ display: "flex", gap: "1.5rem", fontFamily: "monospace", fontSize: "0.85rem", color: theme.textSecondary }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: theme.bg, boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)" }}></div>
                                    <span>BG: {theme.bg}</span>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: theme.text }}></div>
                                    <span>TEXT: {theme.text}</span>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: theme.accent }}></div>
                                    <span>ACCENT: {theme.accent}</span>
                                </div>
                            </div>
                        </div>

                        {/* Mock Portfolio Layout Area */}
                        <div style={{ padding: "4rem 3rem", display: "flex", flexDirection: "column", gap: "3rem" }}>

                            {/* Mock Hero */}
                            <div>
                                <h1 style={{ fontSize: "4.5rem", fontWeight: 200, margin: 0, lineHeight: 1.08, letterSpacing: "-0.02em" }}>
                                    Product Designer
                                </h1>
                                <p style={{ fontSize: "1.8rem", color: theme.textSecondary, marginTop: "1rem", fontWeight: 200, maxWidth: "25ch", lineHeight: 1.2 }}>
                                    Solving user problems in ways that make business sense.
                                </p>
                            </div>

                            {/* Mock Components */}
                            <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                                <button style={{
                                    backgroundColor: theme.text,
                                    color: theme.bg,
                                    padding: "1rem 2rem",
                                    borderRadius: "8px",
                                    border: "none",
                                    fontSize: "1.1rem",
                                    cursor: "pointer",
                                    fontWeight: 400
                                }}>
                                    View Selected Work
                                </button>
                                <span style={{
                                    color: theme.accent,
                                    fontSize: "1.1rem",
                                    fontWeight: 500,
                                    borderBottom: `1px solid ${theme.accent}`
                                }}>
                                    hello@wainainathomas.com
                                </span>
                            </div>

                            {/* Mock Info Cards */}
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                gap: "2rem",
                                marginTop: "1rem"
                            }}>
                                <div style={{ padding: "2rem", backgroundColor: theme.bg, border: `1px solid ${theme.textSecondary}40`, borderRadius: "12px" }}>
                                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: theme.accent, fontWeight: 500 }}>
                                        The Problem
                                    </span>
                                    <p style={{ marginTop: "1rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                                        Cart abandonment rates spiked by 42% on 3G connections due to excessive payload sizes on product listing pages.
                                    </p>
                                </div>
                                <div style={{ padding: "2rem", backgroundColor: theme.bg, border: `1px solid ${theme.textSecondary}40`, borderRadius: "12px" }}>
                                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: theme.accent, fontWeight: 500 }}>
                                        The Solution
                                    </span>
                                    <p style={{ marginTop: "1rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                                        A modular, progressively enhanced frontend architecture that lazily loads rich assets only once conversion intent is detected.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </main>
    );
}
