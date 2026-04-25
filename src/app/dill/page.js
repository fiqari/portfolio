import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import PipelineDiagram from "@/components/PipelineDiagram";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Dill — Wainaina Thomas",
  description: "A supermarket deal aggregator I built by removing the merchant from the data pipeline entirely.",
};

export default function CaseStudyDill() {
  const metaItems = [
    { label: "Role", value: "Solo designer & dev" },
    { label: "Type", value: "Live PWA" },
    { label: "Platform", value: "Mobile-first" },
    { label: "Status", value: "In development" }
  ];

  const constraints = [
    {
      title: "Expensive data",
      body: "Prepaid mobile data in Kenya costs real money. Every unnecessary kilobyte is a cost I'm passing to my users.",
    },
    {
      title: "Mid-range Android",
      body: "The target device is a KES 15,000 phone (~$115 USD), not a developer's MacBook. JS-heavy interfaces stutter on real hardware.",
    },
    {
      title: "Nobody will pay for this",
      body: "A person hunting for savings won't buy a subscription to find them. The product has to be free.",
    },
    {
      title: "Zero infrastructure budget",
      body: "Everything runs on free-tier GitHub Actions. This forced a fetch-once architecture that turned out leaner than anything a budget would have produced.",
    },
  ];

  return (
    <>
      <Navigation />

      <main>
        {/* HERO */}
        <section className="case-hero container">
          <div className="narrow">
            <FadeIn>
              <Link href="/#work" className="case-back">
                ← Back to Work
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="case-hero__title">
                Four supermarkets, one screen, no merchant portal.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="case-meta">
                {metaItems.map((item) => (
                  <div key={item.label} className="case-meta__chip">
                    <span className="case-meta__label">{item.label}</span>
                    <span className="case-meta__value">{item.value}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* HERO IMAGE — real deal cards UI */}
        <section className="container">
          <FadeIn delay={0.3}>
            <div className="case-image">
              <Image
                src="/assets/dill/1.png"
                alt="Dill app showing deal cards with KES pricing from Carrefour and Naivas"
                width={1600}
                height={900}
                priority
              />
            </div>
          </FadeIn>
        </section>

        {/* THE PROBLEM */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">01 — The problem</p>
              <h2 className="case-section__title">
                The deals exist. Getting to them takes more effort than the savings are worth.
              </h2>
              <p className="case-section__text">
                Kenya's grocery market serves 54 million people across four dominant supermarket chains — Carrefour, Naivas, QuickMart, and Greenspoon. Each runs weekly promotions. The information is real and current. It's also scattered across four separate websites, WhatsApp forwards, and paper flyers pinned to store entrances. I kept running into the same experience: I knew deals existed but checking four places wasn't worth the ten minutes it took. So I stopped checking, like most people do.
              </p>
              <div className="callout">
                <p>
                  <strong>The bet:</strong> if I can make comparing deals take five seconds instead of ten minutes, more people will actually use it — and the app becomes valuable enough to sustain itself.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* THE DECISION */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">02 — The decision</p>
              <h2 className="case-section__title">
                I cut the merchant out of the pipeline.
              </h2>
              <p className="case-section__text">
                The standard approach is obvious: build a portal, ask each supermarket's marketing team to upload their promotions weekly. I thought about this for a while and decided against it. A marketing manager at Carrefour Kenya is not going to maintain a dashboard for an app with zero users. The portal would launch empty, and an empty deal aggregator has nothing to show anyone.
              </p>
              <p className="case-section__text">
                Instead, I built an automated pipeline that pulls deal data directly from retailer websites. No partnership required. No waiting for anyone to say yes. The data flows on a schedule, gets normalised into a consistent format, and lands in a Firestore database that the PWA reads from.
              </p>
            </FadeIn>
            <FadeIn>
              <PipelineDiagram />
              <p className="case-image__caption" style={{ marginTop: 'var(--space-2)', paddingLeft: 'var(--space-4)' }}>
                The actual data pipeline — retailer sites are scraped weekly via GitHub Actions, normalised, and served through Firestore.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* CONSTRAINTS */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">03 — Constraints</p>
              <h2 className="case-section__title">
                Every design decision traces back to one of these.
              </h2>
              <div className="card-grid">
                {constraints.map((c, i) => (
                  <div key={i} className="card">
                    <h3 className="card__title">{c.title}</h3>
                    <p className="card__body">{c.body}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* THE DEAL CARD */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">04 — The deal card</p>
              <h2 className="case-section__title">
                One hierarchy call that defines the whole product.
              </h2>
              <p className="case-section__text">
                The deal card is the atomic unit of Dill. Every other screen exists to surface it or filter toward it. The key question was which number goes biggest: 40% off (feels exciting) or KES 200 saved (is that even worth the trip?). I chose to show both at equal weight. A percentage alone optimises for dopamine; an absolute alone favours high-ticket items. Showing both lets the shopper apply their own judgment.
              </p>
              <p className="case-section__text">
                Everything else on the card — brand imagery, marketing language, promo badges — got stripped out. <strong>Price is the product.</strong> The card shows four things: current price, original price, percentage saved, and which store has it. That's the information a shopper needs to decide, and nothing more.
              </p>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="case-image">
              <Image
                src="/assets/dill/1.png"
                alt="Dill interface showing deal cards with price and percentage savings"
                width={1600}
                height={800}
              />
              <p className="case-image__caption">The deal card strips everything to price, percentage, retailer, and distance. Each card is a complete decision unit.</p>
            </div>
          </FadeIn>
        </section>

        {/* OUTCOME */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">05 — Current status</p>
              <h2 className="case-section__title">
                Where Dill is now.
              </h2>
              <p className="case-section__text">
                Dill is a live product in active development. The automated pipeline runs weekly, pulling current deals from all four retailers. The PWA serves cached data for offline use and loads under 2 seconds on a 3G connection.
              </p>
              <div className="outcome">
                <p className="outcome__title">What's been built</p>
                <div className="outcome__items">
                  <div className="outcome__item">
                    <span className="outcome__bullet"></span>
                    <p className="outcome__text">Automated scraping pipeline pulling live deal data from 4 retailers via GitHub Actions — zero ongoing cost</p>
                  </div>
                  <div className="outcome__item">
                    <span className="outcome__bullet"></span>
                    <p className="outcome__text">Offline-first PWA with service worker caching — users check deals at home on WiFi, browse cached data in-store on 3G</p>
                  </div>
                  <div className="outcome__item">
                    <span className="outcome__bullet"></span>
                    <p className="outcome__text">Full search, filtering by category and retailer, and distance-based sorting using device geolocation</p>
                  </div>
                  <div className="outcome__item">
                    <span className="outcome__bullet"></span>
                    <p className="outcome__text">Runs entirely on free-tier infrastructure — Firestore, GitHub Actions, Vercel hosting</p>
                  </div>
                </div>
              </div>
              <p className="case-section__text">
                <strong>Next steps:</strong> Validate the core assumption — that shoppers check deals <em>before</em> leaving home and rely on cached data at the store. This assumption shaped the entire offline architecture. Whether it reflects real behaviour, or whether people want live data and would rather wait for a connection, is the open question that determines the next iteration.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* REFLECTION */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <div className="case-reflection">
                <p className="case-section__label">Reflection</p>
                <h2 className="case-section__title">What I learned</h2>
                <p className="case-section__text">
                  Building Dill forced a specific discipline: every feature had to justify its existence against a constraint. The offline-first architecture wasn't a technical preference — it was the only option for users who can't afford to stream data in a supermarket aisle. Removing the merchant portal wasn't a shortcut — it was a strategic decision that eliminated a cold-start dependency.
                </p>
                <p className="case-section__text">
                  The biggest lesson was that removing things is harder than adding them. Stripping the deal card down to four pieces of information required fighting the instinct to add "just one more" data point. The restraint came from watching real shoppers — they don't read cards, they scan them. Every element that slows a scan costs attention that doesn't come back.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* NEXT PROJECT */}
        <section className="container">
          <div className="next-project">
            <FadeIn>
              <p className="next-project__label">Next Case Study</p>
              <Link href="/nnm" className="next-project__link">
                Nairobi National Museum →
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
