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
              I design products that work before they look good.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="hero__subtitle">
              Product designer. I figure out what to build, then I build it — end-to-end, from the data model to the last pixel.
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
                subtitle="From a 45-minute queue to a 45-second flow. I redesigned the entire purchase path for the Nairobi National Museum."
                tags={["Interaction Design", "Product Strategy"]}
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ProjectCard
                id="project-dill"
                href="/dill"
                imageSrc="/assets/dill/1.png"
                imageAlt="Dill deal aggregator showing supermarket deals with KES pricing"
                headline="Dill"
                subtitle="Four supermarkets, one screen, no merchant portal. A live PWA I designed and built from the data pipeline to the last pixel."
                tags={["Product Design", "PWA", "Live Product"]}
              />
            </FadeIn>
          </div>
        </section>

        {/* Contact Strip */}
        <section className="container" id="contact">
          <div className="contact-strip">
            <FadeIn>
              <p className="contact-strip__heading">Available for work · UTC+3</p>
              <a href="mailto:hello@wainainathomas.com" className="contact-strip__email">
                hello@wainainathomas.com
              </a>
              <p className="contact-strip__meta">
                Based in Nairobi. I overlap 4+ hours daily with Europe and the US East Coast. Async-first — I write things down, record walkthroughs, and ship without waiting for a meeting.
              </p>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
