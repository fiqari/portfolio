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
          <div className="col-span-8-center">
            <FadeIn>
              <p className="hero__name">Hi, I'm Wainaina Thomas</p>
            </FadeIn>

            <FadeIn delayClass="fade-in-delay-1">
              <h1 className="hero__title">UI UX Designer</h1>
            </FadeIn>

            <FadeIn delayClass="fade-in-delay-2">
              <p className="hero__subtitle">
                Solving user problems in ways that make business sense
              </p>
            </FadeIn>

            <FadeIn delayClass="fade-in-delay-3">
              <p className="hero__body">
                I'm a UX designer looking for my first full-time role. I care about understanding real problems before designing solutions — which is why research comes before pixels in everything I build.
              </p>
            </FadeIn>

            <FadeIn delayClass="fade-in-delay-3">
              <p className="hero__status">
                <span>Currently:</span> Building a portfolio, learning in public, based in Nairobi, Kenya
              </p>
            </FadeIn>

            <FadeIn delayClass="fade-in-delay-4" className="hero__location">
              <div className="hero__location-text">
                <span className="hero__location-city">Nairobi, KE</span>
                <LiveClock />
              </div>
              <img
                src="/assets/timestower.png"
                alt="Times Tower, Nairobi"
                className="hero__location-img"
                loading="lazy"
              />
            </FadeIn>

            <FadeIn delayClass="fade-in-delay-4">
              <a href="#work" className="hero__cta">View my work ↓</a>
            </FadeIn>
          </div>
        </section>

        {/* Selected Work */}
        <section className="section section--large container grid-12" id="work" aria-label="Selected work">
          <div className="col-span-full" style={{ marginBottom: 'var(--space-8)' }}>
            <FadeIn>
              <p className="section__heading" style={{ marginBottom: 0 }}>Selected Work</p>
            </FadeIn>
          </div>

          <div className="col-span-8-center project-grid">
            <FadeIn>
              <ProjectCard
                id="project-dill"
                href="/dill"
                imageSrc="/assets/nnm/1.png"
                imageAlt="Dill mobile app interface showing supermarket deals"
                headline="How we centralized Kenyan supermarket deals into a single app"
                subtitle="Dill — Deal Aggregator"
                tags={["UX Research", "Mobile", "Kenya"]}
              />
            </FadeIn>

            <FadeIn>
              <ProjectCard
                id="project-nnm"
                href="/nnm"
                imageSrc="/assets/nnm/2.png"
                imageAlt="Nairobi National Museum mobile app showing guest checkout flow"
                headline="The museum that holds humanity's oldest bones couldn't sell a ticket online"
                subtitle="Nairobi National Museum — Ticketing Redesign"
                tags={["Mobile", "Guest Checkout", "Kenya"]}
              />
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
