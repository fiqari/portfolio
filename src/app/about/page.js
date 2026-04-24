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
      title: "Find the actual problem",
      body: "Most briefs describe a symptom. Before I sketch anything, I need to know if the problem is in the UI, the data, the business model, or the policy layer. Getting this wrong means designing the right solution for the wrong problem.",
    },
    {
      num: "02",
      title: "Name the constraints",
      body: "What devices do users actually have? What's the data budget? What can engineering ship this quarter? I write these down explicitly. They're not obstacles — they're the brief.",
    },
    {
      num: "03",
      title: "Make the hard calls first",
      body: "Which information goes first? What gets cut? What's the one thing each screen has to do? I make these decisions before opening Figma, because the interface should follow from them — not the other way around.",
    },
    {
      num: "04",
      title: "Ship, measure, be honest",
      body: "I push for testable work early. If the numbers don't move, I write down why and change the approach. The reflection matters as much as the output.",
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
                I figure out what to build. Then I build it.
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="about-hero__intro">
                I'm a product designer who works end-to-end — from the first 
                conversation about what the product should do, through the 
                information architecture and interaction model, to the final 
                interface people actually use.
              </p>
              <p className="about-hero__intro">
                The work I'm most drawn to has real constraints: limited 
                budgets, unfamiliar markets, infrastructure that pushes back. 
                Those projects force better decisions. My two current case 
                studies — a supermarket deal aggregator and a museum ticketing 
                redesign — both came from noticing broken experiences in 
                Nairobi and deciding to fix them with design.
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
                The upstream work and the interface that follows
              </h2>
              <p className="case-section__text">
                I make product-level calls — what to build, what to cut, 
                how the system should behave — and then design the screens 
                that make those decisions tangible. I don't hand off wireframes 
                and walk away. I care about the spacing, the transitions, 
                the way a loading state feels at 250ms.
              </p>
              <p className="case-section__text">
                I can also write frontend code. Not as a novelty — because 
                closing the gap between the Figma file and what ships means 
                fewer things get lost in translation.
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
                Remote is how I work, not something I tolerate
              </h2>
              <p className="case-section__text">
                I've worked in distributed setups my entire design career. 
                I have specific habits that make this reliable regardless 
                of where the rest of the team sits.
              </p>
              <div className="about-remote-grid">
                <div className="about-remote-card">
                  <h3 className="about-remote-card__title">Written-first</h3>
                  <p className="about-remote-card__body">
                    Every design decision lives in Notion or Figma. If it's not written down, it didn't happen.
                  </p>
                </div>
                <div className="about-remote-card">
                  <h3 className="about-remote-card__title">Loom over meetings</h3>
                  <p className="about-remote-card__body">
                    I record design walkthroughs instead of scheduling 30-minute calls. Teammates review on their time.
                  </p>
                </div>
                <div className="about-remote-card">
                  <h3 className="about-remote-card__title">Structured overlap</h3>
                  <p className="about-remote-card__body">
                    Syncs and pairing happen during shared hours. Deep work happens outside them.
                  </p>
                </div>
                <div className="about-remote-card">
                  <h3 className="about-remote-card__title">Visible progress</h3>
                  <p className="about-remote-card__body">
                    Weekly design updates in Slack. Nobody should need to ask "where are we on this?".
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- CTA --- */}
        <section className="container">
          <div className="cta-section narrow">
            <FadeIn>
              <h2 className="case-section__title">Let's talk</h2>
              <p className="case-section__text">
                I'm looking for product design roles where the decisions 
                carry weight — where I can own the problem end-to-end, 
                not just push pixels on a ticket. If that sounds like 
                what you're hiring for, reach out.
              </p>
              <div className="cta-links">
                <a href="mailto:hello@wainainathomas.com" className="cta-link">
                  hello@wainainathomas.com
                </a>
                <a href="https://www.linkedin.com/in/wainaina-thomas" target="_blank" rel="noopener noreferrer" className="cta-link">
                  LinkedIn
                </a>
                <a href="/Wainaina_Thomas_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-link">
                  Resume ↗
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
