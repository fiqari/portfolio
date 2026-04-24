import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Nairobi National Museum — Wainaina Thomas",
  description: "The ticketing flow required a Kenyan government ID. Tourists couldn't buy tickets. I redesigned the entire purchase path.",
};

export default function CaseStudyNNM() {
  const metaItems = [
    { label: "Role", value: "Solo designer" },
    { label: "Type", value: "Unsolicited redesign" },
    { label: "Platform", value: "Mobile-first" },
    { label: "Research", value: "TripAdvisor reviews + site audit" }
  ];

  const decisions = [
    {
      title: "Guest checkout, no account",
      body: "The account wall was the entire problem. I removed it. A visitor picks tickets, enters an email, pays, and gets a QR code. This is exactly how Booking.com handles international guests — no local profile needed.",
    },
    {
      title: "Show pricing before asking for anything",
      body: "Resident and non-resident rates are different — that's fine, most museums do this. But the original flow buried the pricing. I moved it to the first screen: you see what you'll pay before you type a single character.",
    },
    {
      title: "Designed at 390px first",
      body: "Every review described the same scene: someone standing outside the museum on their phone, on 3G, trying to buy a ticket. That's the device context that matters. I designed at mobile width from the first screen and scaled up.",
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
                The museum that couldn't take your money.
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

        {/* HERO IMAGE */}
        <section className="container">
          <FadeIn delay={0.3}>
            <div className="case-image">
              <Image
                src="/assets/nnm/hero_mockup.png"
                alt="Nairobi National Museum redesigned ticketing flow on mobile"
                width={1600}
                height={900}
                priority
              />
            </div>
          </FadeIn>
        </section>

        {/* CONTENT */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">01 — The problem</p>
              <h2 className="case-section__title">
                Visitors arrived ready to pay and left without entering.
              </h2>
              <div className="callout">
                <p>
                  "It is extremely difficult to buy a ticket as a foreigner. They force you to register a national account online."
                  <br />
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-3)', display: 'block', marginTop: 'var(--space-2)' }}>— TripAdvisor review, Oct 2024</span>
                </p>
              </div>
              <p className="case-section__text">
                Nairobi National Museum holds one of East Africa's most important natural history collections. For most of 2024, tourists who tried to buy a ticket online were turned away. Not by a bad button or confusing layout. By a government payment gateway that required a Kenyan eCitizen identity account to process any transaction. An international visitor cannot create one in an afternoon. They just leave.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">02 — The diagnosis</p>
              <h2 className="case-section__title">
                This isn't a UX problem. It's a policy dependency.
              </h2>
              <p className="case-section__text">
                Redesigning button colours or cleaning up the visual hierarchy changes nothing. The eCitizen requirement sits upstream of the interface. The only design intervention that matters is removing that dependency and replacing it with a flow any visitor can complete on their phone.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* DECISIONS */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">03 — Decisions</p>
              <h2 className="case-section__title">What I changed and why.</h2>
              <div className="card-grid">
                {decisions.map((d, i) => (
                  <div key={i} className="card">
                    <h3 className="card__title">{d.title}</h3>
                    <p className="card__body">{d.body}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="case-image" style={{ marginTop: 'var(--space-8)' }}>
              <Image
                src="/assets/nnm/3.png"
                alt="Ticket selection screen showing resident and non-resident pricing upfront"
                width={1600}
                height={800}
              />
            </div>
          </FadeIn>
        </section>

        {/* VISUAL SYSTEM */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">04 — Visual language</p>
              <h2 className="case-section__title">
                The identity needs to earn the collection.
              </h2>
              <p className="case-section__text">
                A tourist clicking a link in their Nairobi hotel room has about five seconds to decide if this place is worth their afternoon. The original site gave them nothing to work with — unstyled government components with no visual identity. I paired heavy serifs with a deep institutional red to signal what the museum actually is: a place that holds some of the most significant fossils and artefacts on the continent.
              </p>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="case-image">
              <Image
                src="/assets/nnm/system_board.png"
                alt="Design system board showing serif typography and institutional colour palette"
                width={1600}
                height={800}
              />
            </div>
          </FadeIn>
        </section>

        {/* REFLECTION */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <div className="case-reflection">
                <p className="case-section__label">Reflection</p>
                <h2 className="case-section__title">What this isn't.</h2>
                <p className="case-section__text">
                  This is an unsolicited redesign. I didn't interview museum visitors. I don't know whether NNM's backend infrastructure could support a guest checkout flow tomorrow. Those are real limitations. What I did do: I looked at 18 months of public evidence, identified a pattern that pointed to a specific structural failure, and proposed an intervention that addresses the root cause — not the surface.
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
              <Link href="/dill" className="next-project__link">
                Dill Deal Aggregator →
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
