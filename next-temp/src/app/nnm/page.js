import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Nairobi National Museum — Case Study",
    description: "What 15+ visitors said about buying a ticket at Nairobi National Museum, and the research that shaped a redesign.",
};

export default function CaseStudyNNM() {
    return (
        <>
            <Navigation />

            <main>
                {/* 1. HERO (Slide 1) */}
                <section className="case-hero container grid-12">
                    <div className="col-span-8-center">
                        <FadeIn>
                            <Link
                                href="/#work"
                                className="label case-back-link"
                            >
                                ← Back to Work
                            </Link>
                        </FadeIn>

                        <FadeIn delayClass="fade-in-delay-1">
                            <h1 className="case-hero__title">
                                What 15+ visitors said about buying a ticket at Nairobi National Museum
                            </h1>
                        </FadeIn>

                        <FadeIn delayClass="fade-in-delay-2">
                            <p className="case-section__text" style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-4)' }}>
                                Research that shaped a redesign
                            </p>
                        </FadeIn>

                        <FadeIn delayClass="fade-in-delay-3">
                            <dl className="case-hero__table">
                                <div>
                                    <dt>Type</dt>
                                    <dd>Unsolicited Redesign & UX Research</dd>
                                </div>
                                <div>
                                    <dt>Scope</dt>
                                    <dd>Mobile-First Product Design & Check-out Architecture</dd>
                                </div>
                                <div>
                                    <dt>Focus</dt>
                                    <dd>Frictionless checkout, Multi-currency processing, UX simplification</dd>
                                </div>
                            </dl>
                        </FadeIn>
                    </div>
                </section>

                <div className="container grid-12">

                    {/* Intro Image / Research Synthesis */}
                    <FadeIn className="case-image col-span-full">
                        <img
                            src="/assets/nnm/1.png"
                            alt="Research synthesis — mapping failure patterns from TripAdvisor reviews"
                            loading="lazy"
                        />
                        <p className="case-image__caption">
                            Analyzing qualitative feedback to identify payment friction points
                        </p>
                    </FadeIn>

                    {/* 2. THE RESEARCH FINDINGS (Slides 2, 3, 4) */}
                    <section className="case-section col-span-8-center" aria-label="Research Findings">
                        <FadeIn>
                            <p className="case-section__label">01</p>
                            <h2 className="case-section__title">The Findings</h2>

                            {/* Slide 2 */}
                            <div className="decision" style={{ marginTop: 'var(--space-8)' }}>
                                <p className="decision__number">Pattern 01</p>
                                <h3 className="decision__title">The system blocked international cards</h3>
                                <p className="decision__block-text">
                                    Several international visitors couldn't complete payment — UK debit cards, credit cards, and foreign bank accounts continually failed. One visitor left after 20 minutes of failed attempts. Another never returned to try again.
                                </p>
                            </div>

                            {/* Slide 3 */}
                            <div className="decision">
                                <p className="decision__number">Pattern 02</p>
                                <h3 className="decision__title">The process was multi-step and unclear</h3>
                                <p className="decision__block-text">
                                    At points, visitors had to get a booking number from one person, pay at a separate shop, then collect a printed ticket from a third person. There was no single clear, unified path to entry.
                                </p>
                            </div>

                            {/* Slide 4 */}
                            <div className="decision">
                                <p className="decision__number">Pattern 03</p>
                                <h3 className="decision__title">Some visitors simply gave up and left</h3>
                                <p className="decision__block-text">
                                    Multiple reviewers described abandoning the visit entirely. A museum with irreplaceable exhibits was losing visitors not to competition — but to friction at the front door.
                                </p>
                            </div>
                        </FadeIn>
                    </section>

                    {/* NEW SECTION: IA & EDGE CASES */}
                    <section className="case-section col-span-8-center" aria-label="Information Architecture & Constraints">
                        <FadeIn>
                            <p className="case-section__label">02</p>
                            <h2 className="case-section__title">Defining the Edge Cases</h2>
                            <p className="case-section__text">
                                A standard Western e-commerce checkout flow wouldn't work here. The architecture needed to account for strict local constraints: intermittent internet at the museum gate, complex ticket tiering (citizen vs resident vs tourist), and offline confirmation states.
                            </p>

                            <h3 style={{ fontSize: 'var(--text-xl)', margin: 'var(--space-8) 0 var(--space-5)' }}>
                                Jobs to be Done (JTBD)
                            </h3>
                            <ul className="about__list">
                                <li><strong>The Backpacker:</strong> "Help me buy a ticket online fast so I don't get stranded when my UK debit card is rejected at the physical booth."</li>
                                <li><strong>The Local School Teacher:</strong> "Help me pay smoothly using M-Pesa so I don't have to carry cash for 30 students."</li>
                                <li><strong>The Museum Operations Lead:</strong> "Help me verify tickets instantly at the gate even if the government Wi-Fi is completely down."</li>
                            </ul>

                            <div className="insight" style={{ marginTop: 'var(--space-8)' }}>
                                <p className="insight__label">Core Architectural Pivot</p>
                                <p className="insight__text">
                                    Mobile-first isn't just a preference at the gate; it's a hard constraint. The failure of the current system isn't just poor UI—it's a context mismatch. The solution required decoupling ticket verification from active internet connectivity via offline QR codes.
                                </p>
                            </div>
                        </FadeIn>
                    </section>

                    {/* 3. DESIGN RESPONSE (Slide 5) */}
                    <section className="case-section col-span-8-center" aria-label="Design Response">
                        <FadeIn>
                            <p className="case-section__label">03</p>
                            <h2 className="case-section__title">The Design Response</h2>
                            <p className="case-section__text">
                                The solution prioritized reducing cognitive load and eliminating dead ends for international and local visitors alike. A seamless guest checkout optimized for both M-Pesa and card payments.
                            </p>

                            <div className="decision" style={{ marginTop: 'var(--space-8)' }}>
                                <div className="decision__block">
                                    <ul className="about__list" style={{ marginTop: 'var(--space-2)' }}>
                                        <li><strong>Guest checkout:</strong> No account required.</li>
                                        <li><strong>2 fields:</strong> Collecting only what is strictly necessary.</li>
                                        <li><strong>Inclusive payment:</strong> Both native M-Pesa and secure card payment.</li>
                                        <li><strong>Multi-currency:</strong> Displaying pricing natively in KES and USD.</li>
                                        <li><strong>Booking time target:</strong> Under 2 minutes from scanning the entry QR code to ticket receipt.</li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>
                    </section>

                    {/* Design screens */}
                    <FadeIn className="case-image col-span-full">
                        <img src="/assets/nnm/3.png" alt="Guest checkout path — selecting visitor type" loading="lazy" />
                        <p className="case-image__caption">Upfront routing: Visitor type configuration enables multi-currency flow instantly</p>
                    </FadeIn>

                    <FadeIn className="case-image col-span-full">
                        <img src="/assets/nnm/4.png" alt="Streamlined booking details" loading="lazy" />
                        <p className="case-image__caption">2-field data entry minimizing friction before payment</p>
                    </FadeIn>

                    <FadeIn className="case-image col-span-full">
                        <img src="/assets/nnm/5.png" alt="M-Pesa and Card payment methodologies" loading="lazy" />
                        <p className="case-image__caption">Addressing the primary failure point: explicit support for international cards alongside native M-Pesa</p>
                    </FadeIn>

                    <FadeIn className="case-image col-span-full">
                        <img src="/assets/nnm/6.png" alt="Clear ticket delivery format" loading="lazy" />
                        <p className="case-image__caption">The output: A single scannable ticket, eliminating the three-person manual handover</p>
                    </FadeIn>

                    {/* 4. PROTOTYPE AND SYSTEMS THINKING */}
                    <section className="case-section col-span-8-center" aria-label="Prototype and Systems">
                        <FadeIn>
                            <p className="case-section__label">04</p>
                            <h2 className="case-section__title">Scalable Systems Thinking</h2>
                            <p className="case-section__text">
                                Kenya manages 24 distinct national museums and monuments. Building a bespoke app for one location is an unsustainable anti-pattern. Everything in this checkout flow—from the color tokens to the UI components—was built as a heavily restricted, white-label design system.
                            </p>

                            <p className="case-section__text" style={{ marginTop: 'var(--space-4)' }}>
                                Adding a 25th museum later isn't a redesign; it's a JSON configuration change swapping the hero image, location name, and localized tier pricing. The core checkout mechanics remain identical.
                            </p>
                        </FadeIn>
                    </section>

                    <FadeIn className="case-video col-span-full" style={{ marginTop: 'var(--space-8)' }}>
                        <video controls preload="metadata" poster="/assets/nnm/2.png">
                            <source src="/assets/nnm/NNM.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="case-image__caption" style={{ marginTop: 'var(--space-4)' }}>A targeted breakdown of the sub-2-minute checkout experience.</p>
                    </FadeIn>

                    <FadeIn className="case-image col-span-full">
                        <img
                            src="/assets/nnm/7.png"
                            alt="End-to-end user flow diagram"
                            loading="lazy"
                        />
                        <p className="case-image__caption">End-to-end user flow diagram mapping the simplified logic</p>
                    </FadeIn>

                    {/* NEW SECTION: METRICS & BUSINESS OUTCOMES */}
                    <section className="case-section col-span-8-center" aria-label="Business Metrics">
                        <FadeIn>
                            <p className="case-section__label">05</p>
                            <h2 className="case-section__title">Projected Business Impact</h2>
                            <p className="case-section__text">
                                This remains an unsolicited redesign, meaning direct Google Analytics data isn't accessible. However, based on the baseline friction models established during research, the UI interventions directly map to the following business KPIs:
                            </p>

                            <div className="decision" style={{ marginTop: 'var(--space-8)' }}>
                                <div className="decision__block">
                                    <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>1. International Revenue Recovery (Drop-off Rate)</h3>
                                    <p className="decision__block-text" style={{ marginBottom: 'var(--space-6)' }}>
                                        At KES 1,200 (~$9 USD) per ticket, a 20-minute checkout blockage for foreign cards explicitly kills revenue. Bypassing account creation in favor of a Stripe/Visa-enabled guest checkout directly targets the <strong>cart abandonment rate</strong> cited perfectly in international TripAdvisor reviews.
                                    </p>

                                    <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>2. Time-to-Ticket (T2T)</h3>
                                    <p className="decision__block-text" style={{ marginBottom: 'var(--space-6)' }}>
                                        Moving from a fragmented "pay here, print there" physical loop to a 2-field digital guest checkout cuts the task completion time from an estimated 15 minutes to under 2 minutes.
                                    </p>

                                    <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>3. Operational Cost Reduction</h3>
                                    <p className="decision__block-text">
                                        The current process requires three human touchpoints: issuing a booking number, processing payment, and printing the ticket. A self-serve QR code workflow reduces this to a single automated scan, drastically cutting the operational footprint per visitor.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </section>

                    {/* 5. CLOSE (Slide 6) */}
                    <section className="case-section col-span-8-center" aria-label="Conclusion">
                        <FadeIn>
                            <p className="case-section__label">06</p>

                            <div className="insight" style={{ marginTop: 'var(--space-8)', textAlign: 'center', backgroundColor: 'transparent', padding: 'var(--space-12) 0' }}>
                                <p className="insight__text" style={{ fontSize: 'var(--text-xl)', lineHeight: 1.4, margin: '0 auto', maxWidth: '25ch', color: 'var(--color-text-primary)' }}>
                                    The exhibit is world-class.<br />
                                    The entry shouldn't be the obstacle.
                                </p>
                            </div>
                        </FadeIn>
                    </section>

                    {/* Hominids image to close out */}
                    <FadeIn className="case-image col-span-full" style={{ marginBottom: 'var(--space-20)' }}>
                        <img
                            src="/assets/nnm/Hominids.webp"
                            alt="Hominid fossils on display at the Nairobi National Museum"
                            loading="lazy"
                        />
                    </FadeIn>

                </div>{/* .grid-12 container */}
            </main>

            <Footer />
        </>
    );
}
