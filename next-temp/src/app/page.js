import Navigation from "@/components/Navigation";
import LiveClock from "@/components/LiveClock";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="hero container grid-12" aria-label="Introduction">
          <div className="col-span-8">
            <FadeIn>
              <h1 className="hero__title" style={{ marginBottom: 'var(--space-2)' }}>
                Product Designer
              </h1>
            </FadeIn>
            <FadeIn delayClass="fade-in-delay-1">
              <p className="hero__subtitle" style={{ fontSize: 'var(--text-xl)', color: 'var(--color-text-secondary)' }}>
                Solving user problems in ways that make business sense
              </p>
            </FadeIn>
          </div>

          <div className="col-span-4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginTop: 'var(--space-4)' }}>
            <FadeIn delayClass="fade-in-delay-2" className="hero__location">
              <div className="hero__location-text">
                <span className="hero__location-city">Nairobi, KE</span>
                <LiveClock />
              </div>
              <img
                src="/assets/timestower.png"
                alt="Times Tower, Nairobi"
                className="hero__location-img"
                loading="eager"
              />
            </FadeIn>
          </div>
        </section>

        {/* Selected Work */}
        <section className="section section--large container grid-12" id="work" aria-label="Selected work">
          <div className="col-span-full">
            <FadeIn>
              <p className="section__heading">Selected Work</p>
            </FadeIn>
          </div>

          <div className="col-span-full project-grid">
            <FadeIn>
              <ProjectCard
                id="project-dill"
                href="/dill"
                imageSrc="/assets/nnm/1.png"
                imageAlt="Dill mobile app interface showing supermarket deals"
                headline="Dill: An Aggregator of Intent for Kenya's High-Inflation Grocery Market"
                subtitle="Mobile UX & Data Strategy — Mid-range Android, high inflation"
                tags={["Product Strategy", "B2C Data Utility", "Emerging Markets"]}
              />
            </FadeIn>

            <FadeIn>
              <ProjectCard
                id="project-nnm"
                href="/nnm"
                imageSrc="/assets/nnm/2.png"
                imageAlt="Nairobi National Museum mobile app showing guest checkout flow"
                headline="Nairobi National Museum: Eliminating Front-Door Friction with a 2-Minute Guest Checkout"
                subtitle="Nairobi National Museum — Unsolicited Redesign"
                tags={["Mobile First", "Fintech / M-Pesa", "UX Architecture"]}
              />
            </FadeIn>
          </div>
        </section>

        {/* Availability & Contact */}
        <section className="section container grid-12" id="contact">
          <div className="col-span-8-center availability">
            <FadeIn>
              <h2 className="availability__heading">Available for Hire</h2>
              <p className="availability__text">
                Nairobi-based. <strong>Fully open to remote roles</strong> across overlapping time zones.
                Willing to relocate for the right role.
              </p>
              <p className="availability__regions">
                Target regions: <strong>EU, UK, USA, Australia, Singapore, and the Gulf.</strong>
              </p>
              <a href="mailto:hello@wainainathomas.com" className="availability__email">
                hello@wainainathomas.com
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
