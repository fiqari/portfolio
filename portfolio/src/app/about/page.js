import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "About — Wainaina Thomas",
  description:
    "Product designer who figures out what to build before opening Figma. End-to-end, constraint-driven, async-first.",
};

export default function AboutPage() {
  const processSteps = [
    {
      num: "01",
      title: "Find the bottleneck",
      body: "If a checkout is slow, changing the button color won't save it. I look at the payment APIs and data flows first.",
    },
    {
      num: "02",
      title: "Set the constraints",
      body: "I design for the user's actual phone and connection speed. If the app uses too much data or loads slowly on 3G, it fails.",
    },
    {
      num: "03",
      title: "Map the edge cases",
      body: "I design the errors, the empty states, and the offline views before I design the happy path. The app has to fail gracefully.",
    },
    {
      num: "04",
      title: "Ship and watch",
      body: "I test functional prototypes early with real users. If people get stuck, we rewrite the copy or change the flow immediately.",
    },
  ];

  const tools = [
    { category: "Design", items: "Figma, FigJam, Whimsical" },
    { category: "Prototyping", items: "Figma Prototyping, Framer" },
    { category: "Research", items: "Maze, Hotjar, usability audits, review mining" },
    { category: "Development", items: "HTML/CSS, React, Next.js, Python" },
    { category: "Collaboration", items: "Notion, Slack, Loom, Linear" },
    { category: "Data", items: "Google Analytics, Mixpanel, spreadsheets" },
  ];

  return (
    <>
      <Navigation />

      <main>
        {/* --- HERO --- */}
        <section className="about-hero container">
          <div className="narrow">
            <FadeIn>
              <h1 className="about-hero__title">
                I figure out how it works before I open Figma.
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="about-hero__intro">
                I&apos;m a product designer who codes. I build mobile checkouts, transaction flows, and web apps that need to be fast and reliable. I don&apos;t just draw mockups; I structure the data flow and build the production-ready React elements.
              </p>
              <p className="about-hero__intro">
                I focus on real-world constraints—like spotty connections, high data costs, and slow payment gateways. If an interface is slow or confusing, people leave. My case studies—a supermarket deal aggregator and a museum ticketing flow—address real, operational bottlenecks in Nairobi. I built them to solve systems issues with code and interaction design.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* --- WHAT I DO --- */}
        <section className="about-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">What I do</p>
              <h2 className="case-section__title">
                I build what I design
              </h2>
              <p className="case-section__text">
                I don&apos;t just hand off static mockups and hope for the best. I write the frontend code myself. That means the micro-animations, loading states, and offline fallbacks work exactly the same in the browser as they do in Figma.
              </p>
              <p className="case-section__text">
                For me, coding isn&apos;t a side gig. It&apos;s how I ensure the user experience in the browser matches the design.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* --- PROCESS --- */}
        <section className="about-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">How I work</p>
              <h2 className="case-section__title">Process</h2>
              <div className="about-process">
                {processSteps.map((step) => (
                  <div key={step.num} className="about-process__step">
                    <div className="about-process__num">{step.num}</div>
                    <div>
                      <h3 className="about-process__title">{step.title}</h3>
                      <p className="about-process__body">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- TOOLS --- */}
        <section className="about-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">Tools</p>
              <h2 className="case-section__title">What I use</h2>
              <div className="about-tools">
                {tools.map((t) => (
                  <div key={t.category} className="about-tools__row">
                    <span className="about-tools__category">{t.category}</span>
                    <span className="about-tools__items">{t.items}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- REMOTE READINESS --- */}
        <section className="about-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">How I collaborate</p>
              <h2 className="case-section__title">
                I design for async teams
              </h2>
              <p className="case-section__text">
                I&apos;ve worked in distributed setups my entire design career. I use a few simple habits to keep work moving without constant meetings.
              </p>
              <div className="about-remote-grid">
                <div className="about-remote-card">
                  <h3 className="about-remote-card__title">Write it down</h3>
                  <p className="about-remote-card__body">
                    Every design decision is documented in Figma or Notion. Anyone can jump in and find the context without waiting for a meeting.
                  </p>
                </div>
                <div className="about-remote-card">
                  <h3 className="about-remote-card__title">Record a Loom</h3>
                  <p className="about-remote-card__body">
                    I record 3-minute video walkthroughs of my designs. The team can watch on their own time, keeping calendars clear.
                  </p>
                </div>
                <div className="about-remote-card">
                  <h3 className="about-remote-card__title">Structured syncs</h3>
                  <p className="about-remote-card__body">
                    Syncs and pairing happen during shared hours. Deep work happens outside them.
                  </p>
                </div>
                <div className="about-remote-card">
                  <h3 className="about-remote-card__title">Share early</h3>
                  <p className="about-remote-card__body">
                    I post weekly updates in Slack. You&apos;ll always know what is designed, what is in progress, and what is ready for feedback.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>


      </main>

      <Footer />
    </>
  );
}
