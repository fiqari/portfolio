import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import ReviewQuote from "@/components/ReviewQuote";
import AnnotatedImage from "@/components/AnnotatedImage";

export const metadata = {
  title: "Nairobi National Museum — Wainaina Thomas",
  description: "Redesigning the ticket checkout flow.Decoupling government profile requirements from museum ticket sales.",
};

export default function CaseStudyNNM() {
  const metaItems = [
    { label: "Role", value: "Solo Designer" },
    { label: "Context", value: "Unsolicited Redesign" },
    { label: "Platform", value: "Mobile-First Web" },
    { label: "Research", value: "TripAdvisor Synthesis" }
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
                From a 45-minute queue to a 45-second checkout.
              </h1>
              <p className="hero__subtitle mb-8">
                Visitors were giving up at the museum gates because the online ticket system required a government account. I redesigned the checkout so anyone can buy a ticket in 45 seconds using guest checkout and local or international cards.
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
            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden mt-8 shadow-2xl bg-gray-900">
              <Image 
                src="/assets/nnm/museum hero.png"
                alt="Fossil exhibit at Nairobi National Museum"
                fill
                className="object-cover opacity-60"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                 <div className="relative w-[280px] h-[580px] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl rotate-[-2deg] transform transition-transform hover:rotate-0 duration-500">
                   <Image src="/assets/nnm/9.png" alt="New ticket confirmation screen" fill className="object-cover" />
                 </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* THE STAKES */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <h2 className="phase-header">The eCitizen Bottleneck</h2>
              <span className="phase-header__meta">Problem Framing</span>
              
              <p className="case-section__text">
                I read TripAdvisor reviews from 2024 to 2026. The complaints were identical: the museum is incredible, but the payment gateway is broken.
              </p>

              <div className="grid gap-4 my-8">
                <ReviewQuote 
                  quote="First time in my life I can't get to a museum because I can't buy a ticket."
                  date="Oct 2025"
                />
                <ReviewQuote 
                  quote="It took over an hour to set things up and the system crashed. So frustrating."
                  date="Oct 2024"
                />
                <ReviewQuote 
                  quote="The only option was to use a website... it didn't accept any of my UK issued debits or credit cards."
                  date="Oct 2025"
                />
              </div>

              <p className="case-section__text">
                The government required all fees to go through eCitizen—a portal meant for government services like filing taxes. Forcing a visitor standing at the gate to register a government profile created massive friction.
              </p>
              
              <figure className="case-image my-12">
                <div className="case-image__wrapper bg-gray-100 p-4 rounded-3xl">
                  <Image src="/assets/nnm/Hominids.webp" alt="Museum diorama of early hominids" width={1200} height={800} className="rounded-2xl" />
                </div>
                <figcaption className="case-image__caption">The museum houses world-class palaeoanthropological collections. Visitors were traveling internationally to view them, only to be turned away by checkout requirements.</figcaption>
              </figure>
            </FadeIn>
          </div>
        </section>

        {/* THE WALL */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <h2 className="phase-header">Guest Checkout</h2>
              <span className="phase-header__meta">Reducing registration friction</span>
              
              <p className="case-section__text">
                The system assumed users wanted to register a government account. By removing that step, we let users buy tickets directly.
              </p>

              <AnnotatedImage 
                src="/assets/nnm/3.png"
                alt="Ticket selection screen"
                caption="The redesigned entry point removes the account wall entirely."
                annotations={[
                  {
                    x: 50, y: 80,
                    title: "No registration required",
                    desc: "Visitors enter their name and email, pay, and get their tickets. No account setup."
                  },
                  {
                    x: 50, y: 22,
                    title: "Price transparency",
                    desc: "Pricing updates instantly based on residency (citizen, resident, or tourist) before entering checkout."
                  }
                ]}
              />
            </FadeIn>
          </div>
        </section>

        {/* THE BOTTLENECK */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <h2 className="phase-header">Split Payment Rails</h2>
              <span className="phase-header__meta">Handling local and foreign payments</span>
              
              <p className="case-section__text">
                Local payment gateways frequently decline foreign credit cards, and visitors don&apos;t have domestic mobile money accounts. I designed a checkout that routes payments dynamically based on user type.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div>
                  <Image src="/assets/nnm/5.png" alt="Payment selection" width={400} height={800} className="rounded-3xl shadow-lg border border-gray-100" />
                  <p className="text-sm text-gray-500 mt-4 px-2"><strong>Data Minimisation:</strong> We only ask for a name and email. Anything else is just friction.</p>
                </div>
                <div className="space-y-8 flex flex-col justify-center">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">M-Pesa for residents</h4>
                    <p className="text-sm text-gray-600">Domestic visitors pay with M-Pesa. The system sends a payment prompt directly to their phone screen.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">Stripe for international cards</h4>
                    <p className="text-sm text-gray-600">International visitors pay via Stripe, avoiding bank declines and card errors.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* THE RESULT */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <h2 className="phase-header">Offline Tickets</h2>
              <span className="phase-header__meta">Handling weak gate connections</span>
              
              <p className="case-section__text">
                Network connections are weak at the museum gates. The new design generates a ticket that works offline.
              </p>

              <AnnotatedImage 
                src="/assets/nnm/9.png"
                alt="Ticket confirmation"
                align="left"
                caption="The final deliverable is an offline-ready asset."
                annotations={[
                  {
                    x: 50, y: 35,
                    title: "High-contrast QR",
                    desc: "Easy to scan by gate staff, even under direct sunlight or screen glare."
                  },
                  {
                    x: 50, y: 88,
                    title: "Apple Wallet & PDF",
                    desc: "Visitors download the ticket on hotel Wi-Fi and save it to their phone before they arrive."
                  }
                ]}
              />
            </FadeIn>
          </div>
        </section>

        {/* ACCESSIBILITY */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <p className="case-section__label mt-8">Legible in direct sunlight</p>
              <p className="case-section__text">
                Since visitors buy tickets standing outside the gates, we used large 48×48px buttons and high-contrast text that remains readable in bright sunlight.
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
                <h2 className="case-section__title">Diagnosis over decoration</h2>
                <p className="case-section__text">
                  The original museum portal failed not because of its layout, but because of its system boundaries. Forcing a government identity registry onto a visitor ticket purchase was an operational mismatch.
                </p>
                <p className="case-section__text">
                  By treating this as a system logic problem, I designed a guest flow that satisfies government auditing while letting visitors enter the museum without hassle.
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
