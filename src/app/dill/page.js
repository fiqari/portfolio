import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import PipelineDiagram from "@/components/PipelineDiagram";
import Image from "next/image";
import AnnotatedImage from "@/components/AnnotatedImage";

export const metadata = {
  title: "Dill Ecosystem — Wainaina Thomas",
  description: "Architecting a three-sided B2C/B2B marketplace for grocery deals from data pipeline to final pixel.",
};

export default function CaseStudyDill() {
  const metaItems = [
    { label: "Role", value: "Solo Designer & Builder" },
    { label: "Context", value: "Live PWA · Stealth Mode" },
    { label: "Market", value: "Nairobi, Kenya" },
    { label: "Status", value: "Phase 1 Deployed" }
  ];

  return (
    <>
      <Navigation />
      
      <main className="case-study">
        {/* HERO SECTION */}
        <section className="hero container pt-24 pb-12">
          <div className="narrow">
            <FadeIn>
              <h1 className="hero__title mb-4">
                Four retailers. Three marketplace sides. One unified interface.
              </h1>
              <p className="hero__subtitle mb-8">
                Dill is Nairobi's smartest B2B/B2C marketplace for grocery deals. I designed and built it from the ground up to bridge the gap between price-conscious shoppers and supermarket marketing managers.
              </p>
              
              <div className="hero-meta mb-12 flex flex-wrap gap-6">
                {metaItems.map((item, i) => (
                  <div key={i} className="meta-item">
                    <span className="meta-item__label block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{item.label}</span>
                    <span className="meta-item__value text-sm font-medium text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden mt-8 bg-gray-50 flex items-center justify-center border border-gray-100">
               <div className="relative w-[300px] h-[600px] rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl">
                 <Image src="/assets/dill/1.png" alt="Dill live deal feed" fill className="object-cover" priority />
               </div>
            </div>
          </FadeIn>
        </section>

        {/* THE MARKET GAP */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <h2 className="phase-header">The Market Gap</h2>
              <span className="phase-header__meta">Problem Framing</span>
              
              <p className="case-section__text">
                Currently, grocery deal discovery in Kenya is highly fragmented. Consumers hunt for discounts across disparate supermarket websites and social media feeds. Conversely, supermarkets rely on expensive, low-conversion channels (broadcasting via TV, ads, SMS) to reach an audience already seeking savings.
              </p>
              <p className="case-section__text">
                The solution is a three-sided ecosystem: the Shopper, the Store Manager, and the Dill Aggregator unifying the data. But building a marketplace from scratch introduces the classic cold-start problem.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* PHASE 1: AGGREGATION */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <h2 className="phase-header">Phase 1: Aggregation</h2>
              <span className="phase-header__meta">The MVP Architecture</span>
              
              <span className="stealth-label">Proprietary Architecture</span>
              <p className="case-section__text">
                The standard approach is to build a merchant portal and ask supermarkets to upload their promotions. I decided against it. A marketing manager at Carrefour Kenya is not going to maintain a dashboard for an app with zero users. The portal would launch empty.
              </p>
              <p className="case-section__text">
                Instead, I cut the merchant out of the pipeline. I built a custom data aggregation layer that autonomously normalises heterogeneous deal data from major supermarket sites into a unified, user-centric mobile interface. No partnerships required.
              </p>

              <div className="my-10 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <PipelineDiagram />
              </div>

              <div className="data-example mb-10">
                <div className="data-example__side">
                  <p className="data-example__heading">Raw scrape (Carrefour)</p>
                  <pre className="data-example__code">{'"Ariel Power Gel 2L\n'
+ 'Was KES 1,299 Now KES 899\n'
+ 'Valid: 15-21 Apr\n'
+ 'Category: HOME CARE"'}</pre>
                </div>
                <div className="data-example__arrow">→</div>
                <div className="data-example__side">
                  <p className="data-example__heading">Normalised output</p>
                  <pre className="data-example__code">{'{ "name": "Ariel Power Gel",\n'
+ '  "size": "2L",\n'
+ '  "price": 899,\n'
+ '  "was": 1299,\n'
+ '  "pct": 31,\n'
+ '  "retailer": "carrefour",\n'
+ '  "category": "household",\n'
+ '  "expires": "2026-04-21" }'}</pre>
                </div>
              </div>

              <AnnotatedImage 
                src="/assets/dill/1.png"
                alt="Unified deal feed"
                align="right"
                caption="Phase 1 converts chaotic external data into a clean, scannable feed."
                annotations={[
                  {
                    x: 60, y: 35,
                    title: "Absolute Savings",
                    desc: "Shoppers don't calculate percentages in the aisle. The system automatically computes and highlights the absolute monetary saving."
                  },
                  {
                    x: 30, y: 80,
                    title: "Brand Normalisation",
                    desc: "Irregular product titles from various scrapes are parsed and mapped to clean brand logos and consistent naming conventions."
                  }
                ]}
              />
            </FadeIn>
          </div>
        </section>

        {/* PHASE 2: B2C STICKINESS */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <h2 className="phase-header">Phase 2: The Stickiness Pivot</h2>
              <span className="phase-header__meta">B2C User Retention Strategy</span>
              
              <span className="stealth-label">Illustrative Concept</span>
              <p className="case-section__text">
                With the supply-side populated via automation, Phase 2 transitions Dill from a passive aggregator into an active, sticky ecosystem. This involves evolving the UX from search to predictive discovery.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div className="bg-gray-100 rounded-3xl w-full aspect-[4/5] flex items-center justify-center border border-gray-200">
                  {/* Placeholder for Phase 2 Figma Mock */}
                  <div className="text-center p-6">
                    <span className="text-4xl block mb-4 text-gray-300">📱</span>
                    <h3 className="font-display font-bold text-gray-400 mb-2">Phase 2 Prototype</h3>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Asset Pending</p>
                  </div>
                </div>
                <div className="space-y-8 flex flex-col justify-center">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1 h-full bg-emerald-500"></div>
                    <h4 className="font-bold text-gray-900 mb-2">Location Awareness</h4>
                    <p className="text-sm text-gray-600">Geo-fencing logic that pushes real-time flash deal alerts when a user is within 500 metres of a specific supermarket branch.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">Subscriptions & Channels</h4>
                    <p className="text-sm text-gray-600">Users can subscribe to verified supermarket channels or high-intent product categories (e.g., 'Dairy' or 'Baby') to curate their feed.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">Predictive "Dill of the Day"</h4>
                    <p className="text-sm text-gray-600">ML-powered logic learns grocery habits to surface highly relevant matches, maximising conversion rates before the user even searches.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* PHASE 3: B2B MONETISATION */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <h2 className="phase-header">Phase 3: The Scalability Pivot</h2>
              <span className="phase-header__meta">B2B SaaS Monetisation</span>
              
              <span className="stealth-label">Conceptual Placeholder</span>
              <p className="case-section__text">
                The final evolution transforms Dill into a self-sustaining commercial channel. Once the B2C audience is established, supermarkets are given the keys.
              </p>
              <p className="case-section__text">
                I designed a streamlined B2B SaaS mobile dashboard that empowers store managers to bypass traditional, slow ad spend. They can draft, target, and publish deals directly to their subscribed Dill audience in under 60 seconds.
              </p>

              <div className="my-10 bg-gray-100 rounded-3xl w-full aspect-video flex items-center justify-center border border-gray-200">
                {/* Placeholder for Phase 3 Figma Mock (Admin Dashboard) */}
                <div className="text-center p-6">
                  <span className="text-4xl block mb-4 text-gray-300">📊</span>
                  <h3 className="font-display font-bold text-gray-400 mb-2">SaaS Dashboard Prototype</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Asset Pending</p>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 my-8">
                <h4 className="font-bold text-emerald-900 mb-2">The "Magic Upload" Flow</h4>
                <p className="text-sm text-emerald-800">
                  To eliminate B2B friction, the dashboard features an OCR-powered upload system. A store manager snaps a photo of a physical promo flyer, and the system automatically extracts the product name, original price, and discount percentage to auto-fill the digital listing.
                </p>
              </div>

            </FadeIn>
          </div>
        </section>

        {/* ACCESSIBILITY */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label mt-8">Accessibility Standard</p>
              <p className="case-section__text">
                Deal cards use sufficient contrast for price text against card backgrounds, meeting WCAG 2.1 AA requirements. All interactive elements have minimum 44×44px touch targets for reliable use on mid-range Android devices. The app respects <code>prefers-reduced-motion</code> for users who have disabled animations at the OS level.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* REFLECTION */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <div className="case-reflection">
                <p className="case-section__label">Builder Retrospective</p>
                <h2 className="case-section__title">Products that work before they look good.</h2>
                <p className="case-section__text">
                  Dill proves the ability to design an ecosystem end-to-end. It isn't just a UI prototype; it's a foundation of rigorous data logic ensuring seamless functionality from the backend scraping engine to the final high-fidelity pixel.
                </p>
                <p className="case-section__text">
                  The interface aims for a 7-Eleven level of commercial polish—clean, conversion-focused, and incredibly fast. It demonstrates that complex architecture and business model scaling can be translated into a frictionless, empowering experience for both sides of the marketplace.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
