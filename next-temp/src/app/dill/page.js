import Navigation from "@/components/Navigation";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
    title: "Dill Case Study — Wainaina Thomas",
    description: "UX Case study on Dill: An aggregator of intent for Kenya's high-inflation grocery market.",
};

export default function DillCaseStudy() {
    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="case-hero container grid-12" aria-label="Case study introduction">
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
                                Dill: An Aggregator of Intent for Kenya's High-Inflation Grocery Market
                            </h1>
                        </FadeIn>

                        <FadeIn delayClass="fade-in-delay-2">
                            <p className="case-section__text" style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-4)' }}>
                                Centralizing fragmented supermarket deals into a single, noise-free utility.
                            </p>
                        </FadeIn>

                        <FadeIn delayClass="fade-in-delay-3">
                            <dl className="case-hero__table">
                                <div>
                                    <dt>Role</dt>
                                    <dd>Product Strategy & UX Design</dd>
                                </div>
                                <div>
                                    <dt>Focus</dt>
                                    <dd>B2C Data Utility, Purchase Intent</dd>
                                </div>
                                <div>
                                    <dt>Constraints</dt>
                                    <dd>Mid-range Android, Data Bundles, High Inflation</dd>
                                </div>
                            </dl>
                        </FadeIn>
                    </div>

                    {/* Placeholder Hero Image */}
                    <FadeIn delayClass="fade-in-delay-4" className="case-hero__image-wrapper col-span-full">
                        <img
                            src="/assets/nnm/1.png"
                            alt="Dill app interface showing supermarket deals from various retailers"
                            className="case-hero__image"
                            loading="eager"
                        />
                    </FadeIn>
                </section>

                {/* 12-Column Grid Wrapper for Case Study Content */}
                <div className="container grid-12" style={{ marginTop: 'var(--space-8)' }}>

                    {/* 1. CORE PHILOSOPHY */}
                    <section className="case-section col-span-8-center" aria-label="Target Audience & Behavior">
                        <FadeIn>
                            <p className="case-section__label">01</p>
                            <h2 className="case-section__title">The Target Audience</h2>

                            <div className="insight" style={{ marginTop: 'var(--space-8)' }}>
                                <p className="insight__label">Core Behavior</p>
                                <p className="insight__text">
                                    These are not brand loyalists. They do not care about Naivas Reward points or Carrefour MyCLUB points if it means paying KES 200 more for cooking oil. They are loyal <em>only to the deal</em>.
                                </p>
                            </div>

                            <p className="case-section__text">
                                Dill serves supermarket-agnostic consumers in emerging markets, specifically Nairobi, Kenya. Under extreme inflationary pressure, these shoppers will willingly travel an extra kilometer, or patronize a retail brand they despise, if the aggregate savings justify the trip.
                            </p>
                        </FadeIn>
                    </section>

                    {/* 2. THE PROBLEM */}
                    <section className="case-section col-span-8-center" aria-label="The Problem">
                        <FadeIn>
                            <p className="case-section__label">02</p>
                            <h2 className="case-section__title">The Fragmented Data Problem</h2>
                            <p className="case-section__text">
                                Currently, this hyper-sensitive cohort relies on a chaotic, manual ecosystem to find out where a 5kg bag of rice is cheapest today. The data is hopelessly fragmented across:
                            </p>

                            <ul className="about__list">
                                <li><strong>Dark Social:</strong> Compressed, often outdated WhatsApp forwards of weekend deals.</li>
                                <li><strong>Analog Media:</strong> Crumpled newspaper inserts and physical flyers.</li>
                                <li><strong>Blind Store Visits:</strong> Walking into a store, hoping the price hasn't jumped since last Tuesday.</li>
                            </ul>

                            <p className="case-section__text" style={{ marginTop: 'var(--space-4)' }}>
                                There is zero centralized visibility, making planned, budget-conscious shopping nearly impossible.
                            </p>
                        </FadeIn>
                    </section>

                    {/* Placeholder Image */}
                    <FadeIn className="case-image col-span-full">
                        <img src="/assets/nnm/2.png" alt="Mapping the chaotic flow of finding deals via WhatsApp and newspapers" loading="lazy" />
                        <p className="case-image__caption">The cognitive load of matching analog flyers to actual physical retail stock across multiple locations.</p>
                    </FadeIn>

                    {/* 3. THE SOLUTION */}
                    <section className="case-section col-span-8-center" aria-label="The Solution">
                        <FadeIn>
                            <p className="case-section__label">03</p>
                            <h2 className="case-section__title">A Utility, Not a Marketing Engine</h2>
                            <p className="case-section__text">
                                Dill's proposition is ruthless simplicity. It removes the noise, the flashy endcaps, and the psychological tricks of retail marketing. It extracts the raw, comparable price data and serves it cleanly organized by location and category.
                            </p>

                            <div className="decision" style={{ marginTop: 'var(--space-8)' }}>
                                <div className="decision__block">
                                    <p className="decision__block-label">The Magnifying Glass for Savings</p>
                                    <p className="decision__block-text">
                                        We treat the interface like a financial dashboard rather than a typical e-commerce storefront. If a user spends just 5 minutes on Dill to save KES 500 across their weekly shop—and does it again next week—the product has succeeded.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </section>

                    {/* 4. AGGREGATOR OF INTENT */}
                    <section className="case-section col-span-8-center" aria-label="Aggregator of Intent">
                        <FadeIn>
                            <p className="case-section__label">04</p>
                            <h2 className="case-section__title">The "Aggregator of Intent"</h2>
                            <p className="case-section__text">
                                When you strip away the branding, what remains is pure, highly qualified purchase behavior.
                            </p>

                            <div className="outcome" style={{ marginTop: 'var(--space-6)' }}>
                                <p className="outcome__title">Uncoupling Search from Loyalty</p>
                                <p className="outcome__text">
                                    When someone searches for "Unga" (maize flour) on Dill, they are signaling immediate, high-purchase intent. By capturing this search query outside the walled garden of a specific supermarket app, Dill aggregates intent at a massive scale.
                                </p>
                            </div>

                            <p className="case-section__text" style={{ marginTop: 'var(--space-6)' }}>
                                This is the core business value. Dill isn't just a scraper; it's a real-time ledger of what price-sensitive consumers actually want to buy today, unaffected by which logo is painted on the building.
                            </p>
                        </FadeIn>
                    </section>

                    {/* Placeholder Flow Images */}
                    <FadeIn className="case-image col-span-full">
                        <img src="/assets/nnm/4.png" alt="UI screens showing raw price utility" loading="lazy" />
                        <p className="case-image__caption">Translating the "Aggregator of Intent" into a noise-free, highly utilitarian mobile interface.</p>
                    </FadeIn>

                    {/* NEW SECTION 1: UI EXECUTION & ANATOMY */}
                    <section className="case-section col-span-8-center" aria-label="UI Execution">
                        <FadeIn>
                            <p className="case-section__label">05</p>
                            <h2 className="case-section__title">The Anatomy of a Deal Card</h2>
                            <p className="case-section__text">
                                The UI had to reflect the "Utility, Not Marketing" principle. On a standard e-commerce site, the product image taking up 60% of the card is the conversion driver. On Dill, the conversion driver is the <em>savings amount</em>.
                            </p>

                            <div className="decision" style={{ marginTop: 'var(--space-8)' }}>
                                <div className="decision__block">
                                    <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>1. Visual Hierarchy Inversion</h3>
                                    <p className="decision__block-text" style={{ marginBottom: 'var(--space-6)' }}>
                                        Instead of the product name, the <strong>"Save KES X"</strong> badge is the largest typographic element on the card. This answers the user's immediate question before they even read what the product is. KES is used instead of % because absolute currency maps directly to their physical wallet.
                                    </p>

                                    <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>2. Deal Confidence (Metadata)</h3>
                                    <p className="decision__block-text" style={{ marginBottom: 'var(--space-6)' }}>
                                        To combat the trust deficit of outdated flyers, every card enforces strict metadata: a <strong>"Verified At" timestamp</strong> and visual decaying (opacity drops) as the deal approaches expiry.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </section>

                    {/* NEW SECTION 2: CONSTRAINTS */}
                    <section className="case-section col-span-8-center" aria-label="Constraints">
                        <FadeIn>
                            <p className="case-section__label">06</p>
                            <h2 className="case-section__title">Designing for the 3G Constraint</h2>
                            <p className="case-section__text">
                                Most Kenyan users do not browse on unlimited Wi-Fi; they purchase strictly rationed 3G/4G data bundles. An app that drains 50MB of data just to load a feed of cooking oil images will be uninstalled by the afternoon.
                            </p>

                            <div className="insight" style={{ marginTop: 'var(--space-6)' }}>
                                <p className="insight__text">
                                    Performance here isn't an engineering metric; it's a core UX retention strategy.
                                </p>
                            </div>

                            <ul className="about__list" style={{ marginTop: 'var(--space-6)' }}>
                                <li><strong>Typography-Led UI:</strong> Abstracted away the need for high-res lifestyle product photography. We treated the feed like a financial market board.</li>
                                <li><strong>Asset Reduction:</strong> Replaced heavy image overlays with CSS gradients and SVGs.</li>
                                <li><strong>Skeleton States:</strong> Implemented precise skeleton loaders that mimic the deal card shape, drastically lowering perceived latency on 3G connections.</li>
                            </ul>
                        </FadeIn>
                    </section>

                    {/* NEW SECTION 3: B2B MERCHANT PORTAL */}
                    <section className="case-section col-span-8-center" aria-label="B2B Merchant Portal">
                        <FadeIn>
                            <p className="case-section__label">07</p>
                            <h2 className="case-section__title">The B2B Marketplace Pivot</h2>
                            <p className="case-section__text">
                                Phase 1 of Dill scraped external deals. Phase 2 turned it into a two-sided marketplace by introducing the <strong>Merchant Portal</strong>, allowing supermarket branch managers to manually post flash sales for close-to-expiry inventory (e.g., bakery items, fresh produce).
                            </p>

                            <div className="decision" style={{ marginTop: 'var(--space-8)' }}>
                                <div className="decision__block">
                                    <p className="decision__block-label">The B2B UX Challenge</p>
                                    <p className="decision__block-text">
                                        The user is a non-technical bakery manager working the floor at Naivas. They do not have time to navigate a complex inventory CMS on a desktop computer in the back office. They need to post a deal for 15 expiring loaves of bread in under 60 seconds from their phone.
                                    </p>
                                    <p className="decision__block-text" style={{ marginTop: 'var(--space-4)' }}>
                                        <strong>The Response:</strong> A hyper-utilitarian mobile web view. Tap item category, enter absolute discount price, take a live photo, and hit publish. Zero typing required.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </section>

                    {/* NEW SECTION 4: METRICS */}
                    <section className="case-section col-span-8-center" aria-label="Business Metrics">
                        <FadeIn>
                            <p className="case-section__label">08</p>
                            <h2 className="case-section__title">Proposed Business Metrics</h2>
                            <p className="case-section__text">
                                To validate the "Aggregator of Intent" thesis, the UI and architecture were designed to move these specific KPIs:
                            </p>

                            <dl className="case-hero__table" style={{ marginTop: 'var(--space-8)' }}>
                                <div style={{ marginBottom: 'var(--space-4)' }}>
                                    <dt>Search Success Rate</dt>
                                    <dd>Targeting &gt;70% of searches resulting in a deal expansion or cart addition, proving the inventory matches local demand context.</dd>
                                </div>
                                <div style={{ marginBottom: 'var(--space-4)' }}>
                                    <dt>Time to First Deal</dt>
                                    <dd>Targeting &lt;10 seconds from app open to interaction, relying heavily on the typography-first UI and 3G optimization.</dd>
                                </div>
                                <div>
                                    <dt>Share Rate</dt>
                                    <dd>Targeting &gt;15% of sessions resulting in a WhatsApp share. Dark social is the primary organic acquisition loop; the share UX must be frictionless.</dd>
                                </div>
                            </dl>
                        </FadeIn>
                    </section>

                    {/* 5. REFLECTION */}
                    <section className="case-section col-span-8-center" aria-label="Reflection" style={{ paddingBottom: 'var(--space-12)' }}>
                        <FadeIn>
                            <p className="case-section__label">09</p>

                            <div className="insight" style={{ marginTop: 'var(--space-8)', textAlign: 'center', backgroundColor: 'transparent', padding: 'var(--space-12) 0' }}>
                                <p className="insight__text" style={{ fontSize: 'var(--text-xl)', lineHeight: 1.4, margin: '0 auto', maxWidth: '30ch', color: 'var(--color-text-primary)' }}>
                                    "When inflation bites, loyalty to a brand evaporates. Loyalty to the deal is all that remains."
                                </p>
                            </div>
                        </FadeIn>
                    </section>
                </div>{/* .grid-12 container */}
            </main>
            <Footer />
        </>
    );
}
