import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata = {
    title: "About — Wainaina Thomas",
    description: "I find the gap between what people intend to do and what they actually do — and I design into it.",
};

export default function About() {
    return (
        <>
            <Navigation />

            <main className="container grid-12">
                <div className="col-span-8-center">
                    {/* Opening */}
                    <section className="section section--large" aria-label="About introduction">
                        <FadeIn>
                            <h1 className="about__opening">
                                I find the gap between what people intend to do and what they actually do —
                                and I design into it.
                            </h1>
                        </FadeIn>
                    </section>

                    {/* Origin Story */}
                    <section className="about__section" aria-label="Origin story">
                        <FadeIn>
                            <p className="about__section-title">How I Got Here</p>
                            <p className="about__text">
                                I didn't start in design. I started by noticing things that didn't work — and wondering why nobody fixed them.
                            </p>
                            <p className="about__text">
                                The question that pulled me toward UX was simple: why do some products feel effortless while others make you want to throw your phone? The answer, I learned, is almost never about aesthetics. It's about understanding — understanding what people are trying to do, where the friction lives, and what the business actually needs to happen.
                            </p>
                            <p className="about__text">
                                That question led me to UX design. Not the pixel-perfect kind (though I care about craft), but the kind that starts with research, evidence, and real people.
                            </p>
                        </FadeIn>
                    </section>

                    {/* How I Work */}
                    <section className="about__section" aria-label="Methodology">
                        <FadeIn>
                            <p className="about__section-title">How I Work</p>
                            <div className="about__highlight">
                                I'm a research-first designer. I talk to people before I trust my assumptions. I sketch before I open Figma. I test with real users before I call anything finished.
                            </div>
                            <p className="about__text">
                                I'm drawn to problems where the system is fighting the user — where functional software has been applied to the wrong context, or where business requirements have drifted away from what people actually need.
                            </p>
                            <p className="about__text">
                                My process is straightforward: understand the problem deeply, design the simplest possible solution, then test it with real people. I believe that good research doesn't just inform design — it makes the case for it.
                            </p>
                        </FadeIn>
                    </section>

                    {/* Background */}
                    <section className="about__section" aria-label="Background">
                        <FadeIn>
                            <p className="about__section-title">Background</p>
                            <p className="about__text">
                                I'm self-taught in UX design, but I've been intentional about how I've learned. I've studied design thinking, information architecture, and user research methodology through courses, books, and — most importantly — by doing real projects.
                            </p>
                            <p className="about__text">
                                What I bring from my previous experience: the ability to think systematically about problems, communicate clearly with different stakeholders, and stay focused on outcomes rather than outputs.
                            </p>
                        </FadeIn>
                    </section>

                    {/* What I'm Looking For */}
                    <section className="about__section" aria-label="What I'm looking for">
                        <FadeIn>
                            <p className="about__section-title">What I'm Looking For</p>
                            <p className="about__text">
                                I'm looking for my first full-time UX design role at a company that:
                            </p>
                            <ul className="about__list">
                                <li>Values research as much as craft</li>
                                <li>Builds products that solve real problems for real people</li>
                                <li>Sees junior designers as learners who will grow into the role</li>
                            </ul>
                            <p className="about__text" style={{ marginTop: 'var(--space-6)' }}>
                                I'm interested in product companies, startups, and B2B SaaS teams — anywhere design thinking connects directly to business outcomes. I'm based in Nairobi and open to remote roles.
                            </p>
                        </FadeIn>
                    </section>

                    {/* Beyond Design */}
                    <section className="about__section" aria-label="Interests">
                        <FadeIn>
                            <p className="about__section-title">Beyond Design</p>
                            <p className="about__text">When I'm not designing, I'm probably:</p>
                            <ul className="about__list">
                                <li>Mapping the best chai spots in Nairobi (I have opinions about masala ratios)</li>
                                <li>Reading about government digital services and how technology fails in institutional contexts</li>
                                <li>Learning in public — documenting my UX journey and sharing what I find along the way</li>
                            </ul>
                        </FadeIn>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}
