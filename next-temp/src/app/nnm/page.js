import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Nairobi National Museum — Case Study",
    description: "How I redesigned the Nairobi National Museum's ticketing experience by studying 17 TripAdvisor reviews.",
};

export default function CaseStudyNNM() {
    return (
        <>
            <Navigation />

            <main>
                {/* 1. HERO */}
                <section className="case-hero container grid-12">
                    <div className="col-span-8-center">
                        <FadeIn>
                            <Link
                                href="/#work"
                                className="label"
                                style={{ display: 'inline-block', marginBottom: 'var(--space-5)' }}
                            >
                                ← Back to Work
                            </Link>
                        </FadeIn>

                        <FadeIn delayClass="fade-in-delay-1">
                            <h1 className="case-hero__title">
                                The museum that holds humanity's oldest bones couldn't sell a ticket online
                            </h1>
                        </FadeIn>

                        <FadeIn delayClass="fade-in-delay-2">
                            <dl className="case-hero__table">
                                <div>
                                    <dt>Role</dt>
                                    <dd>UX Designer (solo, unsolicited)</dd>
                                </div>
                                <div>
                                    <dt>Platform</dt>
                                    <dd>iOS Mobile</dd>
                                </div>
                                <div>
                                    <dt>Tools</dt>
                                    <dd>Figma</dd>
                                </div>
                                <div>
                                    <dt>Research</dt>
                                    <dd>TripAdvisor review mining (17 reviews, 2024–2026)</dd>
                                </div>
                                <div>
                                    <dt>Focus</dt>
                                    <dd>Guest checkout flow redesign</dd>
                                </div>
                            </dl>
                        </FadeIn>
                    </div>
                </section>

                <div className="container grid-12">
                    {/* 2. THE PROBLEM */}
                    <section className="case-section col-span-8-center" aria-label="Problem">
                        <FadeIn>
                            <p className="case-section__label">01</p>
                            <h2 className="case-section__title">The Problem</h2>
                            <p className="case-section__text">
                                The Nairobi National Museum houses some of humanity's most important fossils — including the Turkana Boy, a 1.5-million-year-old Homo erectus skeleton. It is a national treasure and a major tourism landmark.
                            </p>
                            <p className="case-section__text">
                                But visitors can't buy a ticket.
                            </p>
                            <p className="case-section__text">
                                Kenya's government digitization initiative routed all museum ticketing through eCitizen — a national services portal designed for citizens applying for passports, business permits, and tax filings. Buying a museum ticket now requires the same process.
                            </p>

                            <h3 style={{ fontSize: 'var(--text-xl)', margin: 'var(--space-8) 0 var(--space-5)' }}>
                                Three documented failure modes
                            </h3>

                            <div className="failure-mode">
                                <p className="failure-mode__title">1. International cards rejected</p>
                                <p className="failure-mode__desc">
                                    The payment system doesn't reliably accept non-Kenyan cards. Foreign visitors — the museum's primary revenue source — are turned away at the gate.
                                </p>
                            </div>

                            <div className="failure-mode">
                                <p className="failure-mode__title">2. Mandatory government account creation</p>
                                <p className="failure-mode__desc">
                                    Visitors must create an eCitizen account — a process that requires passport details, takes 20–60 minutes, and frequently crashes. Museum staff have no ability to sell tickets directly.
                                </p>
                            </div>

                            <div className="failure-mode">
                                <p className="failure-mode__title">3. Multi-person, multi-location process</p>
                                <p className="failure-mode__desc">
                                    Even at the museum, buying a ticket involves visiting one desk for a booking number, a separate shop for payment, then another desk for the printed ticket. Three touchpoints for one transaction.
                                </p>
                            </div>

                            <div className="quote">
                                <p className="quote__text">
                                    "Tried to go end of October. To buy a ticket, I was told that the only option was to use a website, but it was very slow and it didn't accept any of my UK issued debits or credit cards. After trying for 20 minutes, I just gave up. First time in my life I can't get to a museum because I can't buy a ticket."
                                </p>
                                <p className="quote__source">— TripAdvisor review, October 2025</p>
                            </div>

                            <div className="quote">
                                <p className="quote__text">
                                    "I arrived at the museum and was directed to use the online ticketing system. This was such a frustrating system that I gave up and left the museum rather than waste time with it any further."
                                </p>
                                <p className="quote__source">— TripAdvisor review, July 2025</p>
                            </div>

                            <div className="quote">
                                <p className="quote__text">
                                    "Please Nairobi National Museum change the way you can purchase tickets. It took over an hour to set things up and the system crashed. When a wonderful person saw my frustration and that I had given up and was ready to walk out, they purchased my ticket for me!"
                                </p>
                                <p className="quote__source">— TripAdvisor review, October 2024</p>
                            </div>

                            <div className="insight">
                                <p className="insight__label">Core Insight</p>
                                <p className="insight__text">
                                    eCitizen isn't broken — it's functional software applied to the wrong context. A platform designed for annual government transactions has been forced into serving a walk-up, high-frequency, tourist-driven use case it was never designed for.
                                </p>
                            </div>

                            <p className="case-section__text">
                                <strong>The problem isn't technology — it's context mismatch.</strong> Visitors arrive ready to buy a ticket (a 2-minute task) and are handed a government registration process (a 20–60 minute task). The result: lost revenue, frustrated visitors, and a 1-star ticketing experience on one of Kenya's most important cultural institutions.
                            </p>
                        </FadeIn>
                    </section>

                    {/* 3. MY APPROACH */}
                    <section className="case-section col-span-8-center" aria-label="Approach">
                        <FadeIn>
                            <p className="case-section__label">02</p>
                            <h2 className="case-section__title">My Approach</h2>
                            <p className="case-section__text">
                                I mined 17 TripAdvisor reviews written between February 2024 and January 2026. Instead of surveying hypothetical users, I studied people who had already attempted the task — and documented exactly where they failed.
                            </p>

                            <div className="about__highlight">
                                One guiding question: "What is the minimum a visitor needs to provide to get a valid ticket — and nothing more?"
                            </div>

                            <p className="case-section__text">
                                This question stripped away every unnecessary step. No government accounts. No passport entry. No multi-desk workflow. Just: who are you, how many tickets, and how will you pay?
                            </p>
                        </FadeIn>
                    </section>

                    {/* Case study images */}
                    <FadeIn className="case-image col-span-full">
                        <img
                            src="/assets/nnm/1.png"
                            alt="TripAdvisor 1-star review complaining about offline ticketing"
                            loading="lazy"
                        />
                        <p className="case-image__caption">
                            Research synthesis — mapping failure patterns from TripAdvisor reviews
                        </p>
                    </FadeIn>

                    {/* 4. THREE DECISIONS */}
                    <section className="case-section" aria-label="Design decisions">
                        <FadeIn>
                            <p className="case-section__label">03</p>
                            <h2 className="case-section__title">Three Decisions</h2>

                            <div className="decision">
                                <p className="decision__number">Decision 01</p>
                                <h3 className="decision__title">Guest checkout as primary path</h3>
                                <div className="decision__block">
                                    <p className="decision__block-label">Research finding</p>
                                    <p className="decision__block-text">
                                        100% of the negative reviews mentioned account creation as a barrier. Visitors aren't repeat users of eCitizen — they need a ticket once, then they leave Kenya.
                                    </p>
                                </div>
                                <div className="decision__block">
                                    <p className="decision__block-label">Design response</p>
                                    <p className="decision__block-text">
                                        Made guest checkout the default path. No account creation required. Visitors provide only: name, email (for receipt), visitor count, and payment.
                                    </p>
                                </div>
                                <div className="decision__block">
                                    <p className="decision__block-label">Rationale</p>
                                    <p className="decision__block-text">
                                        This eliminates the biggest friction point while still collecting the data the museum needs for reporting: visitor count, type (citizen/resident/international), and revenue.
                                    </p>
                                </div>
                            </div>

                            <div className="decision">
                                <p className="decision__number">Decision 02</p>
                                <h3 className="decision__title">Visitor type routing upfront</h3>
                                <div className="decision__block">
                                    <p className="decision__block-label">Research finding</p>
                                    <p className="decision__block-text">
                                        The museum uses different pricing tiers: Kenyan citizen, East African resident, and international visitor. The current system forces everyone through the same path and asks for this information deep in the flow.
                                    </p>
                                </div>
                                <div className="decision__block">
                                    <p className="decision__block-label">Design response</p>
                                    <p className="decision__block-text">
                                        Ask "Which best describes you?" (Citizen / Resident / International) as the first step. This sets pricing, payment options, and required fields before the user invests time.
                                    </p>
                                </div>
                                <div className="decision__block">
                                    <p className="decision__block-label">Rationale</p>
                                    <p className="decision__block-text">
                                        Upfront routing reduces surprise pricing, enables currency-appropriate payment flows (M-Pesa for citizens, card for international), and prevents users from completing a long form only to discover wrong pricing at the end.
                                    </p>
                                </div>
                            </div>

                            <div className="decision">
                                <p className="decision__number">Decision 03</p>
                                <h3 className="decision__title">QR code + PDF offline fallback</h3>
                                <div className="decision__block">
                                    <p className="decision__block-label">Research finding</p>
                                    <p className="decision__block-text">
                                        Multiple reviews mentioned poor connectivity at the museum. WiFi is unreliable, and tourists on Safaricom SIMs struggle with data. If the ticket exists only in the eCitizen portal, visitors can't access it at the gate.
                                    </p>
                                </div>
                                <div className="decision__block">
                                    <p className="decision__block-label">Design response</p>
                                    <p className="decision__block-text">
                                        After payment, generate a QR code ticket that can be accessed three ways: displayed on screen, saved as a PDF, or sent via email. The QR code works offline — staff scan it, not the visitor's account.
                                    </p>
                                </div>
                                <div className="decision__block">
                                    <p className="decision__block-label">Rationale</p>
                                    <p className="decision__block-text">
                                        This decouples ticket access from internet connectivity. It also removes the museum's dependency on eCitizen uptime — if the portal goes down, already-purchased tickets still work.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </section>

                    {/* Design screens */}
                    <FadeIn className="case-image col-span-full">
                        <img src="/assets/nnm/3.png" alt="Guest checkout flow — visitor type selection screen" loading="lazy" />
                        <p className="case-image__caption">Visitor type selection — first step in the redesigned flow</p>
                    </FadeIn>

                    <FadeIn className="case-image col-span-full">
                        <img src="/assets/nnm/4.png" alt="Ticket quantity and visitor details screen" loading="lazy" />
                        <p className="case-image__caption">Simplified ticket booking — only essential information required</p>
                    </FadeIn>

                    <FadeIn className="case-image col-span-full">
                        <img src="/assets/nnm/5.png" alt="Payment options screen showing M-Pesa and card options" loading="lazy" />
                        <p className="case-image__caption">Payment options adapted to visitor type</p>
                    </FadeIn>

                    <FadeIn className="case-image col-span-full">
                        <img src="/assets/nnm/6.png" alt="QR code ticket confirmation screen" loading="lazy" />
                        <p className="case-image__caption">QR code ticket — works offline, scannable at the gate</p>
                    </FadeIn>

                    {/* 5. PROTOTYPE */}
                    <section className="case-section col-span-8-center" aria-label="Prototype">
                        <FadeIn>
                            <p className="case-section__label">04</p>
                            <h2 className="case-section__title">Prototype</h2>
                            <p className="case-section__text">
                                A walkthrough of the redesigned ticketing flow, from visitor type selection through payment to QR code ticket delivery.
                            </p>
                        </FadeIn>
                    </section>

                    <FadeIn className="case-video col-span-full">
                        <video controls preload="metadata" poster="/assets/nnm/2.png">
                            <source src="/assets/nnm/NNM.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </FadeIn>

                    <FadeIn className="case-image col-span-full">
                        <img
                            src="/assets/nnm/7.png"
                            alt="Complete user flow diagram showing all screens in the redesigned ticketing experience"
                            loading="lazy"
                        />
                        <p className="case-image__caption">Complete user flow — guest checkout path from start to ticket</p>
                    </FadeIn>

                    {/* 6. POTENTIAL BUSINESS OUTCOMES */}
                    <section className="case-section col-span-8-center" aria-label="Business outcomes">
                        <FadeIn>
                            <p className="case-section__label">05</p>
                            <h2 className="case-section__title">Potential Business Outcomes</h2>
                            <p className="case-section__text">
                                This was an unsolicited redesign — there are no live metrics. What follows is a grounded case for what a working flow would mean.
                            </p>

                            <div className="outcome">
                                <p className="outcome__title">Revenue recovery from international visitors</p>
                                <p className="outcome__text">
                                    At KES 1,200 per ticket (~$9 USD), every lost international visitor is direct revenue lost. Multiple reviews describe visitors giving up and leaving. A guest checkout flow removes the primary barrier to purchase. Even recovering 10% of abandonments would represent meaningful revenue for a public institution.
                                </p>
                            </div>

                            <div className="outcome">
                                <p className="outcome__title">Reduced operational burden</p>
                                <p className="outcome__text">
                                    The current three-person, three-desk process ties up staff who could be providing visitor services. A self-serve digital flow frees staff from manual data entry and payment processing, reducing operational cost per ticket.
                                </p>
                            </div>

                            <div className="outcome">
                                <p className="outcome__title">Reputational recovery on TripAdvisor</p>
                                <p className="outcome__text">
                                    The museum's TripAdvisor listing is dominated by ticketing complaints. Fixing the purchase experience would shift reviews toward the actual museum experience — which visitors consistently praise. Better ratings drive more visits.
                                </p>
                            </div>

                            <div className="outcome">
                                <p className="outcome__title">Donation integration opportunity</p>
                                <p className="outcome__text">
                                    A working checkout flow creates the infrastructure for post-purchase prompts: "Add a KES 200 donation to museum conservation?" Currently, there's no moment in the flow where this is possible. A smooth transaction opens the door for voluntary contributions.
                                </p>
                            </div>

                            <div className="outcome">
                                <p className="outcome__title">Scalability as a template</p>
                                <p className="outcome__text">
                                    Kenya has 24 national museums and monuments using the same eCitizen integration. A guest checkout pattern that works for Nairobi National Museum could serve as a template for all national heritage sites — multiplying the impact across the entire system.
                                </p>
                            </div>
                        </FadeIn>
                    </section>

                    {/* Hominids image */}
                    <FadeIn className="case-image col-span-full">
                        <img
                            src="/assets/nnm/Hominids.webp"
                            alt="Hominid fossils on display at the Nairobi National Museum"
                            loading="lazy"
                        />
                        <p className="case-image__caption">
                            The museum's hominid collection — what visitors came to see, if they can get past the ticketing system
                        </p>
                    </FadeIn>

                    {/* 7. REFLECTION */}
                    <section className="case-section col-span-8-center" aria-label="Reflection">
                        <FadeIn>
                            <p className="case-section__label">06</p>
                            <h2 className="case-section__title">Reflection</h2>

                            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>
                                What I learned
                            </h3>
                            <p className="case-section__text">
                                The biggest insight wasn't about UX patterns — it was about institutional systems. The ticketing problem exists because of a well-intentioned government digitization initiative that prioritized centralization over user context. The solution isn't to fight the institution — it's to design a layer that serves both the visitor's need (buy a ticket quickly) and the institution's need (track revenue, verify visitors, report to government).
                            </p>

                            <h3 style={{ fontSize: 'var(--text-xl)', margin: 'var(--space-8) 0 var(--space-4)' }}>
                                What I'd do differently
                            </h3>
                            <p className="case-section__text">
                                This project was based entirely on secondary research (TripAdvisor reviews). If I could do it again, I'd supplement with:
                            </p>
                            <ul className="about__list" style={{ marginBottom: 'var(--space-5)' }}>
                                <li>Direct observation at the museum — watching visitors attempt the current process</li>
                                <li>Interviews with museum staff — understanding their constraints and what data they actually need</li>
                                <li>Usability testing of the prototype — with both Kenyan and international participants</li>
                            </ul>
                            <p className="case-section__text">
                                I'd also want to understand the technical constraints of integrating with eCitizen's API, which would shape what's actually buildable.
                            </p>

                            <h3 style={{ fontSize: 'var(--text-xl)', margin: 'var(--space-8) 0 var(--space-4)' }}>
                                What comes next
                            </h3>
                            <p className="case-section__text">
                                A version 2 would explore: multi-museum passes (visitors often combine Nairobi National Museum with the snake park), guided tour booking integration, and accessibility features for visitors with disabilities navigating the museum grounds.
                            </p>
                        </FadeIn>
                    </section>

                </div>{/* .grid-12 container */}
            </main>

            <Footer />
        </>
    );
}
