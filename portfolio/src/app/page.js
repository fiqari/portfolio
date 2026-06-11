import Navigation from "@/components/Navigation";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="hero container">
          <FadeIn>
            <h1 className="hero__title">
              Most design only works in Figma. I build for the real world.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="hero__subtitle">
              I&apos;m a product designer and developer. I focus on B2C mobile experiences—designing checkouts that convert and writing the code that runs them.
            </p>
          </FadeIn>
        </section>

        {/* Selected Work */}
        <section className="container" id="work">
          <div className="project-grid">
            <FadeIn>
              <ProjectCard
                id="project-nnm"
                href="/nnm"
                imageSrc="/assets/nnm/1.png"
                imageAlt="Nairobi National Museum landing page showing ticket booking flow"
                headline="Nairobi National Museum"
                subtitle="From a 45-minute queue at the gate to a 45-second checkout. I redesigned the ticket purchase flow so visitors can buy tickets without creating a government profile."
                tags={["Systems Redesign", "Checkout Optimization"]}
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ProjectCard
                id="project-dill"
                href="/dill"
                imageSrc="/assets/dill/1.png"
                imageAlt="Dill deal aggregator showing supermarket deals with KES pricing"
                headline="Dill"
                subtitle="Four supermarkets, one screen, zero data partnerships. I wrote the scrapers and built the frontend for a live Nairobi grocery deal aggregator."
                tags={["Data Scraping", "Live Product"]}
              />
            </FadeIn>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
