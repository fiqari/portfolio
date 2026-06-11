import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import PipelineDiagram from "@/components/PipelineDiagram";
import Image from "next/image";
import AnnotatedImage from "@/components/AnnotatedImage";

export const metadata = {
  title: "Dill Ecosystem — Wainaina Thomas",
  description: "Grocery deal aggregator for Nairobi. Built from Python scraper scripts to React frontend.",
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
                Four major retailers. One normalized interface.
              </h1>
              <p className="hero__subtitle mb-8">
                Dill aggregates grocery promotions across Nairobi&apos;s major supermarket chains. I designed the database schema, built the Python scraping pipeline, and wrote the mobile-first frontend to unify fragmented deal data for consumers and store managers.
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
                Supermarkets in Nairobi publish discounts in PDF pamphlets, social media posts, and separate website subdomains. To find a discount, shoppers have to browse dozens of sources. At the same time, store managers buy expensive print and SMS ads to broadcast deals, with no way to measure which promotions convert.
              </p>
              <p className="case-section__text">
                We needed to bring this into a single app. But supermarket managers are busy. They won&apos;t log into a new portal to upload deals. To make Dill work, we had to get the data without asking them.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* PHASE 1: AGGREGATION */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <h2 className="phase-header">Phase 1: Getting the data</h2>
              <span className="phase-header__meta">The automated pipeline</span>
              
              <span className="stealth-label">Active Scraper Pipeline</span>
              <p className="case-section__text">
                Instead of waiting for supermarkets to sign up, I wrote daily Python scrapers. They pull promotions directly from Naivas, Carrefour, and Quickmart websites.
              </p>
              <p className="case-section__text">
                The system cleans the messy scraper output, calculates the exact discount, and maps it to standardized brand logos. The shopper gets a clean, unified feed with no manual data entry required.
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
                    title: "Brand Mapping",
                    desc: "Irregular scraper output like 'Ariel Pwdr 2kg' is mapped to a standardized database entry with correct brand logos."
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
              <h2 className="phase-header">Phase 2: Keeping shoppers coming back</h2>
              <span className="phase-header__meta">Mobile features</span>
              
              <span className="stealth-label">Illustrative Concept</span>
              <p className="case-section__text">
                Once we had the deals, we had to make the app useful. Grocery shopping is a habit. We designed features that fit into the shopper&apos;s daily routine.
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
                    <h4 className="font-bold text-gray-900 mb-2">Proximity Alerts</h4>
                    <p className="text-sm text-gray-600">The app alerts users when they are near a store with a discount they saved.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">Category Filters</h4>
                    <p className="text-sm text-gray-600">Shoppers subscribe to categories like &apos;Dairy&apos; or &apos;Baby Care&apos; to build a custom, fast-loading feed.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">Smart Sorting</h4>
                    <p className="text-sm text-gray-600">The homepage ranks high-frequency household items first based on what the user taps and saves.</p>
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
              <h2 className="phase-header">Phase 3: Letting merchants post</h2>
              <span className="phase-header__meta">Supermarket dashboard</span>
              
              <span className="stealth-label">Conceptual Placeholder</span>
              <p className="case-section__text">
                Once Dill had an active user base, we built a way for store managers to post promotions directly.
              </p>
              <p className="case-section__text">
                I designed a mobile B2B dashboard where a store manager can launch a flash sale in under a minute, bypassing corporate ad approval cycles.
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
                <h4 className="font-bold text-emerald-900 mb-2">Shelf-tag scanning</h4>
                <p className="text-sm text-emerald-800">
                  A store manager can take a photo of a shelf tag. The system reads the prices and automatically drafts the listing.
                </p>
              </div>

            </FadeIn>
          </div>
        </section>

        {/* ACCESSIBILITY */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label mt-8">Legible in the aisles</p>
              <p className="case-section__text">
                Supermarkets have bright fluorescent lights and high screen glare. We used high-contrast text and 48×48px touch targets so shoppers can navigate the app easily while holding a shopping basket.
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
                <h2 className="case-section__title">Scrapers, databases, and pixels</h2>
                <p className="case-section__text">
                  Dill isn&apos;t a prototype. It&apos;s a live progressive web app. Building it meant writing Python scrapers, setting up MongoDB, and writing React code.
                </p>
                <p className="case-section__text">
                  Because I worked on the entire pipeline, the design is fast, robust, and powered entirely by live data.
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
