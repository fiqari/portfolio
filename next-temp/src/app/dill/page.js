import Navigation from "@/components/Navigation";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
    title: "Dill Case Study — Wainaina Thomas",
    description: "UX Case study on Dill: A centralized Kenyan supermarket deal aggregator.",
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
                                className="label"
                                style={{ display: 'inline-block', marginBottom: 'var(--space-5)' }}
                            >
                                ← Back to Work
                            </Link>
                        </FadeIn>

                        <FadeIn delayClass="fade-in-delay-1">
                            <h1 className="case-hero__title">
                                Centralizing Kenya's fragmented supermarket deals into a single, location-aware grocery app.
                            </h1>
                        </FadeIn>

                        <FadeIn delayClass="fade-in-delay-2">
                            <dl className="case-hero__table">
                                <div>
                                    <dt>Role</dt>
                                    <dd>Product Designer</dd>
                                </div>
                                <div>
                                    <dt>Timeline</dt>
                                    <dd>6 Weeks</dd>
                                </div>
                                <div>
                                    <dt>Platform</dt>
                                    <dd>Mobile App (iOS/Android)</dd>
                                </div>
                            </dl>
                        </FadeIn>
                    </div>

                    {/* Placeholder Hero Image */}
                    <FadeIn delayClass="fade-in-delay-4" className="case-hero__image-wrapper col-span-full">
                        <img
                            src="/assets/nnm/1.png"
                            alt="Dill app interface showing supermarket deals from Naivas and Quickmart"
                            className="case-hero__image"
                            loading="eager"
                        />
                    </FadeIn>
                </section>

                {/* 12-Column Grid Wrapper for Case Study Content */}
                <div className="container grid-12" style={{ marginTop: 'var(--space-8)' }}>

                    {/* 1. CONTEXT */}
                    <section className="case-section col-span-8-center" aria-label="Project context">
                        <FadeIn>
                            <p className="case-section__label">01</p>
                            <h2 className="case-section__title">The Context</h2>
                            <p className="case-section__text">
                                Kenya's formal retail sector is highly competitive. Supermarket chains like <strong>Naivas</strong>, <strong>Quickmart</strong>, and <strong>Carrefour</strong> constantly run promotions, massive weekend sales, and loyalty schemes. However, for the average shopper in Nairobi looking to optimize their monthly household budget, this competition creates chaos rather than convenience.
                            </p>
                            <p className="case-section__text">
                                Deals are scattered across WhatsApp statuses, physical daily newspaper inserts, Instagram stories, and bulky PDF catalogs. Shoppers end up making decisions based on proximity rather than actual value, or worse—spending more money on fuel driving between different supermarkets than they save on the discounted goods.
                            </p>
                        </FadeIn>
                    </section>

                    {/* 2. THE PROBLEM */}
                    <section className="case-section col-span-8-center" aria-label="The problem">
                        <FadeIn>
                            <p className="case-section__label">02</p>
                            <h2 className="case-section__title">The Problem</h2>
                            <blockquote className="quote">
                                <p className="quote__text">
                                    "I saw a great deal on Pampers at Quickmart on WhatsApp yesterday, but when I went to the branch near my house today, they said that specific deal was only for the mega-branch on Waiyaki Way."
                                </p>
                                <p className="quote__source">— User Interview, Nairobi</p>
                            </blockquote>
                            <p className="case-section__text">
                                Our initial user interviews with primary household shoppers highlighted three major friction points in the grocery deal hunting process:
                            </p>
                            <ul className="about__list">
                                <li><strong>Format Fragmentation:</strong> Deals exist in non-searchable, non-comparable formats (JPEG flyers, Instagram slides).</li>
                                <li><strong>Location Discrepancies:</strong> Offers are frequently hyper-localized to specific flagship stores, but marketing materials rarely make this clear.</li>
                                <li><strong>Deceptive Unit Pricing:</strong> A "Buy 2 Get 1 Free" offer on 400g soap isn't always competitively better than a straight discount on an 800g soap across the street.</li>
                            </ul>
                        </FadeIn>
                    </section>

                    {/* Placeholder Context Image */}
                    <FadeIn className="case-image col-span-full">
                        <img src="/assets/nnm/2.png" alt="User research findings and sticky notes mapping the problem space" loading="lazy" />
                        <p className="case-image__caption">Mapping the frustrating journey of matching WhatsApp flyers to actual physical retail stock.</p>
                    </FadeIn>

                    {/* 3. THREE DECISIONS */}
                    <section className="case-section col-span-8-center" aria-label="Design decisions">
                        <FadeIn>
                            <p className="case-section__label">03</p>
                            <h2 className="case-section__title">Three Key Decisions</h2>

                            <div className="decision">
                                <p className="decision__number">Decision 01</p>
                                <h3 className="decision__title">Location-first filtering, not brand-first</h3>
                                <div className="decision__block">
                                    <p className="decision__block-label">Research finding</p>
                                    <p className="decision__block-text">
                                        Users rarely care that Carrefour has 50% off chicken if the nearest Carrefour is 14 kilometers away in severe Nairobi traffic.
                                    </p>
                                </div>
                                <div className="decision__block">
                                    <p className="decision__block-label">Design response</p>
                                    <p className="decision__block-text">
                                        The app immediately requests location permissions upon onboarding. The default home feed only surfaces deals from branches within a 5km radius, prioritizing relevance over absolute discount size.
                                    </p>
                                </div>
                            </div>

                            <div className="decision">
                                <p className="decision__number">Decision 02</p>
                                <h3 className="decision__title">Standardized Unit Pricing (Per KG/Litre)</h3>
                                <div className="decision__block">
                                    <p className="decision__block-label">Research finding</p>
                                    <p className="decision__block-text">
                                        Supermarkets use complex bundle pricing to obfuscate value. Comparing a 2L bottle of cooking oil at Naivas vs a 3-pack of 500ml bottles at Quickmart requires mental gymnastics.
                                    </p>
                                </div>
                                <div className="decision__block">
                                    <p className="decision__block-label">Design response</p>
                                    <p className="decision__block-text">
                                        We implemented a forced normalization UI. Regardless of how the supermarket advertises the bundle, Dill's UI always strips it down to display a prominent <strong>"KES per Litre"</strong> or <strong>"KES per KG"</strong> metric in bright green, allowing apples-to-apples visual comparison.
                                    </p>
                                </div>
                            </div>

                            <div className="decision">
                                <p className="decision__number">Decision 03</p>
                                <h3 className="decision__title">Collaborative "Smart" Shopping Lists</h3>
                                <div className="decision__block">
                                    <p className="decision__block-label">Research finding</p>
                                    <p className="decision__block-text">
                                        Household shopping in Kenya is highly collaborative. The list is usually drafted by a spouse or house manager, sent via WhatsApp, and executed by whoever is passing the supermarket on the way home from work.
                                    </p>
                                </div>
                                <div className="decision__block">
                                    <p className="decision__block-label">Design response</p>
                                    <p className="decision__block-text">
                                        Lists can be shared via a deep link to WhatsApp. When the receiver opens the list in Dill, the app dynamically routes the items based on which supermarket on their commute has the most items on discount.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </section>

                    {/* Placeholder Flow Images */}
                    <FadeIn className="case-image col-span-full">
                        <img src="/assets/nnm/4.png" alt="UI screens showing location filtering and unit price breakdown" loading="lazy" />
                        <p className="case-image__caption">Location-aware feed explicitly stripping down complex bundles into KES/KG metrics.</p>
                    </FadeIn>

                    <FadeIn className="case-image col-span-full">
                        <img src="/assets/nnm/5.png" alt="Collaborative shopping list feature sharing to WhatsApp" loading="lazy" />
                        <p className="case-image__caption">Generating dynamic shopping lists sent straight to WhatsApp deep-links.</p>
                    </FadeIn>

                    {/* 4. METRICS / OUTCOMES */}
                    <section className="case-section col-span-8-center" aria-label="Business outcomes">
                        <FadeIn>
                            <p className="case-section__label">04</p>
                            <h2 className="case-section__title">Projected Outcomes</h2>
                            <p className="case-section__text">
                                Dill operates as an affiliate model, driving highly qualified footfall to physical retail locations. By aggregating fragmented marketing data into utility, the app creates three major business outcomes:
                            </p>

                            <div className="outcome">
                                <p className="outcome__title">Increased Basket Size via Planned Predictability</p>
                                <p className="outcome__text">
                                    By knowing the deals upfront, users budget for the bulk discounts rather than making impulse decisions at the shelf. Our prototype tests revealed a 15% planned increase in FMCG bulk purchasing when users could confidently compare value beforehand.
                                </p>
                            </div>

                            <div className="outcome">
                                <p className="outcome__title">Retailer Analytics Feedback Loop</p>
                                <p className="outcome__text">
                                    Dill provides supermarkets something they've never had: visibility into what deals their competitors are successfully converting. By tracking which deals are clipped to lists, Dill can sell highly localized intent data back to the FMCG brands (e.g. Unilever, Bidco).
                                </p>
                            </div>
                        </FadeIn>
                    </section>

                    {/* 5. REFLECTION */}
                    <section className="case-section col-span-8-center" aria-label="Reflection" style={{ paddingBottom: 'var(--space-8)' }}>
                        <FadeIn>
                            <p className="case-section__label">05</p>
                            <h2 className="case-section__title">Reflection</h2>

                            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>
                                What I learned
                            </h3>
                            <p className="case-section__text">
                                Real utility in B2C apps often comes from doing the boring, invisible grunt work the user hates. Scraping chaotic Instagram stories and PDF flyers to output clean, structured, comparable data is a massive technical challenge, but it's the only way to build trust with a price-sensitive consumer base.
                            </p>

                            <h3 style={{ fontSize: 'var(--text-xl)', margin: 'var(--space-8) 0 var(--space-4)' }}>
                                The next challenge
                            </h3>
                            <p className="case-section__text">
                                A major future consideration for Dill involves API integrations with local delivery startups like Glovo and Sendy. If a user builds a deal-heavy cart, can we fulfill the "last mile" by offering immediate, transparent delivery fees alongside the cart savings?
                            </p>
                        </FadeIn>
                    </section>

                </div>{/* .grid-12 container */}
            </main>

            <Footer />
        </>
    );
}

