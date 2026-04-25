import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import ScreenFlow from "@/components/ScreenFlow";
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

  const ticketFlowScreens = [
    { src: "/assets/nnm/1.png", alt: "Museum landing page with 'Buy Tickets' CTA", label: "Landing" },
    { src: "/assets/nnm/2.png", alt: "Visitor type selection — Citizen, Resident, International", label: "Visitor type" },
    { src: "/assets/nnm/3.png", alt: "Ticket selection with upfront pricing", label: "Select tickets" },
    { src: "/assets/nnm/4.png", alt: "Guest information — name and email only", label: "Guest info" },
    { src: "/assets/nnm/5.png", alt: "Payment method selection — Card or M-Pesa", label: "Payment method" },
    { src: "/assets/nnm/7.png", alt: "Card payment details entry", label: "Card details" },
    { src: "/assets/nnm/6.png", alt: "M-Pesa mobile payment flow", label: "M-Pesa option" },
    { src: "/assets/nnm/9.png", alt: "QR code ticket confirmation ready to show at entrance", label: "Confirmation" },
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

        {/* HERO IMAGE — real museum landing page */}
        <section className="container">
          <FadeIn delay={0.3}>
            <div className="case-image">
              <Image
                src="/assets/nnm/1.png"
                alt="Nairobi National Museum landing page showing the museum entrance and 'Buy Tickets' button"
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
                Visitors arrived ready to pay and left without entering.
              </h2>
              <p className="case-section__text">
                The Nairobi National Museum holds one of Africa's most significant palaeontological collections, including hominid fossils that are critical to understanding human evolution. It receives both domestic and international visitors year-round.
              </p>
              <div className="callout">
                <p>
                  "It is extremely difficult to buy a ticket as a foreigner. They force you to register a national account online."
                  <br />
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-3)', display: 'block', marginTop: 'var(--space-2)' }}>— TripAdvisor review, Oct 2024</span>
                </p>
              </div>
              <p className="case-section__text">
                For most of 2024, tourists who tried to buy a ticket online were turned away. Not by a bad button or confusing layout. By a government payment gateway that required a Kenyan eCitizen identity account to process any transaction. An international visitor cannot create one in an afternoon. They just leave.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* THE DIAGNOSIS */}
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

              {/* BEFORE / AFTER COMPARISON */}
              <div className="flow-compare">
                <div className="flow-compare__side flow-compare__side--before">
                  <p className="flow-compare__heading">Original flow</p>
                  <div className="flow-compare__steps">
                    <div className="flow-compare__step">
                      <span className="flow-compare__step-num">1</span>
                      <span>Visit museum website</span>
                    </div>
                    <div className="flow-compare__step">
                      <span className="flow-compare__step-num">2</span>
                      <span>Click "Buy Tickets"</span>
                    </div>
                    <div className="flow-compare__step">
                      <span className="flow-compare__step-num">3</span>
                      <span>Redirect to eCitizen portal</span>
                    </div>
                    <div className="flow-compare__step flow-compare__step--blocked">
                      <span className="flow-compare__step-num">4</span>
                      <span>Create eCitizen account (requires Kenyan ID)</span>
                    </div>
                    <div className="flow-compare__step flow-compare__step--blocked">
                      <span className="flow-compare__step-num">5</span>
                      <span>Verify identity</span>
                    </div>
                    <div className="flow-compare__step flow-compare__step--blocked">
                      <span className="flow-compare__step-num">6</span>
                      <span>Return to ticketing flow</span>
                    </div>
                    <div className="flow-compare__step flow-compare__step--blocked">
                      <span className="flow-compare__step-num">7</span>
                      <span>Complete payment</span>
                    </div>
                  </div>
                </div>

                <div className="flow-compare__side flow-compare__side--after">
                  <p className="flow-compare__heading">Redesigned flow</p>
                  <div className="flow-compare__steps">
                    <div className="flow-compare__step">
                      <span className="flow-compare__step-num">1</span>
                      <span>Select visitor type and tickets</span>
                    </div>
                    <div className="flow-compare__step">
                      <span className="flow-compare__step-num">2</span>
                      <span>Enter name + email (guest checkout)</span>
                    </div>
                    <div className="flow-compare__step">
                      <span className="flow-compare__step-num">3</span>
                      <span>Pay by card or M-Pesa → receive QR ticket</span>
                    </div>
                  </div>
                </div>
              </div>
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
                alt="Ticket selection screen showing Citizen, Resident, and International visitor types with upfront pricing"
                width={1600}
                height={800}
              />
              <p className="case-image__caption">Pricing is visible before any personal information is requested. The visitor type segmentation (Citizen / Resident / International) determines the rate immediately.</p>
            </div>
          </FadeIn>
        </section>

        {/* FULL TICKET FLOW */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">04 — The complete flow</p>
              <h2 className="case-section__title">
                Landing to QR code in under two minutes.
              </h2>
              <p className="case-section__text">
                The redesigned flow takes a visitor from the museum landing page to a scannable QR ticket in 3 steps. The entire journey is designed for a 390px screen on a 3G connection — the actual device context described in dozens of TripAdvisor reviews.
              </p>
            </FadeIn>
          </div>
          <FadeIn>
            <ScreenFlow screens={ticketFlowScreens} />
          </FadeIn>
        </section>

        {/* VISUAL SYSTEM */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">05 — Visual language</p>
              <h2 className="case-section__title">
                The identity needs to earn the collection.
              </h2>
              <p className="case-section__text">
                A tourist clicking a link in their Nairobi hotel room has about five seconds to decide if this place is worth their afternoon. The original site gave them nothing to work with — unstyled government components with no visual identity. I used Josefin Sans for a clean, modern display feel paired with a deep institutional red (#8B1A1A) to signal what the museum actually is: a place that holds some of the most significant fossils and artefacts on the continent.
              </p>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="case-image">
              <Image
                src="/assets/nnm/system_board.png"
                alt="Design system board showing Josefin Sans typography, institutional red colour palette, button states, and icon set"
                width={1600}
                height={800}
              />
              <p className="case-image__caption">UI design system — Josefin Sans headings, institutional red palette, and component states.</p>
            </div>
          </FadeIn>
        </section>

        {/* OUTCOME */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label">06 — Outcome</p>
              <h2 className="case-section__title">
                What this analysis produced.
              </h2>
              <p className="case-section__text">
                This is an unsolicited redesign — I didn't have access to the museum's internal data or engineering team. The value of this project lies in the analytical methodology, not a shipped product.
              </p>
              <div className="outcome">
                <p className="outcome__title">Research & design outputs</p>
                <div className="outcome__items">
                  <div className="outcome__item">
                    <span className="outcome__bullet"></span>
                    <p className="outcome__text">Analysed 18 months of TripAdvisor reviews to identify a consistent structural failure pattern — the eCitizen dependency blocking international ticket purchases</p>
                  </div>
                  <div className="outcome__item">
                    <span className="outcome__bullet"></span>
                    <p className="outcome__text">Distinguished between surface-level UX issues and the upstream policy dependency that caused them — reframing the problem from "bad UI" to "broken architecture"</p>
                  </div>
                  <div className="outcome__item">
                    <span className="outcome__bullet"></span>
                    <p className="outcome__text">Designed a complete guest checkout flow reducing the purchase path from 7+ steps (with a hard blocker at step 4) to 3 steps with no account requirement</p>
                  </div>
                  <div className="outcome__item">
                    <span className="outcome__bullet"></span>
                    <p className="outcome__text">Built a visual identity system (Josefin Sans, institutional red) that positions the museum as a cultural institution rather than a government service</p>
                  </div>
                  <div className="outcome__item">
                    <span className="outcome__bullet"></span>
                    <p className="outcome__text">Included dual payment rails — international card payments (via Stripe) and M-Pesa for domestic visitors — matching how people actually pay in Kenya</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* REFLECTION */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <div className="case-reflection">
                <p className="case-section__label">Reflection</p>
                <h2 className="case-section__title">What I'd take forward.</h2>
                <p className="case-section__text">
                  This project taught me that the most impactful design decisions often happen before any screen is drawn. Identifying the eCitizen dependency as the root cause — rather than treating the symptoms with better buttons or clearer copy — changed what "redesign" meant entirely. It wasn't about making the existing flow prettier. It was about removing the thing that made the flow impossible.
                </p>
                <p className="case-section__text">
                  If I were to continue this work, the next step would be user testing with actual tourists at the museum entrance — observing the real device context, the real connection quality, and the real decision-making process. The TripAdvisor reviews gave me a starting point, but they're a proxy for observation, not a replacement for it.
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
