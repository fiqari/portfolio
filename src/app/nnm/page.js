import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import ReviewQuote from "@/components/ReviewQuote";
import AnnotatedImage from "@/components/AnnotatedImage";

export const metadata = {
  title: "Nairobi National Museum — Wainaina Thomas",
  description: "From a 45-minute queue to a 45-second flow. Redesigning the ticketing experience.",
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
                From a 45-minute queue to a 45-second flow.
              </h1>
              <p className="hero__subtitle mb-8">
                Tourists were abandoning the Nairobi National Museum at the gates because the ticketing portal required a Kenyan government ID. I redesigned the purchase path into a high-conversion, guest-first checkout.
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
              <h2 className="phase-header">The Stakes</h2>
              <span className="phase-header__meta">Problem Framing</span>
              
              <p className="case-section__text">
                I didn&apos;t need to conduct user interviews to find the problem. Eighteen months of TripAdvisor reviews told the exact same story: the museum itself is world-class, but the payment gateway is a revenue leak.
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
                The government had mandated that all national park and museum fees go through &apos;eCitizen&apos;, a centralised portal designed for citizens accessing civil services. Forcing an international tourist standing outside a museum to create a government profile is a severe mismatch of intent and friction.
              </p>
              
              <figure className="case-image my-12">
                <div className="case-image__wrapper bg-gray-100 p-4 rounded-3xl">
                  <Image src="/assets/nnm/Hominids.webp" alt="Museum diorama of early hominids" width={1200} height={800} className="rounded-2xl" />
                </div>
                <figcaption className="case-image__caption">The museum houses an incredible early hominid collection. People were flying to Kenya to see it, and giving up at the ticket desk.</figcaption>
              </figure>
            </FadeIn>
          </div>
        </section>

        {/* THE WALL */}
        <section className="case-section container">
          <div className="narrow">
            <FadeIn>
              <h2 className="phase-header">The Wall</h2>
              <span className="phase-header__meta">Strategic Solution 1</span>
              
              <p className="case-section__text">
                The root cause wasn&apos;t bad UX; it was a bad policy dependency. The interface assumed the user&apos;s primary goal was &quot;logging into the government portal,&quot; rather than &quot;buying a ticket.&quot;
              </p>

              <AnnotatedImage 
                src="/assets/nnm/3.png"
                alt="Ticket selection screen"
                caption="The redesigned entry point removes the account wall entirely."
                annotations={[
                  {
                    x: 50, y: 80,
                    title: "Guest Checkout",
                    desc: "This is the most critical button in the app. Like an airline or hotel, we let users pay and get their ticket without creating an account."
                  },
                  {
                    x: 50, y: 22,
                    title: "Upfront Segmentation",
                    desc: "Rates vary by residency. Asking this first ensures the pricing shown immediately matches what the user will actually pay."
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
              <h2 className="phase-header">The Bottleneck</h2>
              <span className="phase-header__meta">Strategic Solution 2</span>
              
              <p className="case-section__text">
                The second failure point was payment processing. International cards were failing on the local gateway, and tourists generally don&apos;t have Kenyan mobile money (M-Pesa) accounts. 
              </p>
              <p className="case-section__text">
                My solution was to split the payment rails visually and technologically based on the user&apos;s context.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div>
                  <Image src="/assets/nnm/5.png" alt="Payment selection" width={400} height={800} className="rounded-3xl shadow-lg border border-gray-100" />
                  <p className="text-sm text-gray-500 mt-4 px-2"><strong>Data Minimisation:</strong> Name and email are the only fields required to deliver the ticket. Everything else is friction.</p>
                </div>
                <div className="space-y-8 flex flex-col justify-center">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">Rail A: M-Pesa</h4>
                    <p className="text-sm text-gray-600">For locals and residents, M-Pesa is the default. The flow uses an STK push—a prompt appears directly on their phone. Fast, culturally ingrained, and highly converting.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2">Rail B: Stripe (Card)</h4>
                    <p className="text-sm text-gray-600">For internationals, standardising on a globally trusted gateway like Stripe prevents the &quot;card declined by foreign bank&quot; errors that were plaguing the original system.</p>
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
              <h2 className="phase-header">The Result</h2>
              <span className="phase-header__meta">Outcome</span>
              
              <p className="case-section__text">
                Another recurring complaint was the lack of reliable Wi-Fi at the museum gates, meaning web-based tickets would fail to load precisely when needed.
              </p>

              <AnnotatedImage 
                src="/assets/nnm/9.png"
                alt="Ticket confirmation"
                align="left"
                caption="The final deliverable is an offline-ready asset."
                annotations={[
                  {
                    x: 50, y: 35,
                    title: "High-Contrast QR",
                    desc: "Sized for immediate scanning by the gate staff's handheld devices, even on screens with low brightness or under glare."
                  },
                  {
                    x: 50, y: 88,
                    title: "Offline Fallback",
                    desc: "Tourists without roaming data can download the PDF to their device storage while on hotel Wi-Fi before arriving."
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
              <p className="case-section__label mt-8">Accessibility Standard</p>
              <p className="case-section__text">
                All interactive elements meet WCAG 2.1 AA contrast requirements against both the white card surfaces and the light grey page background. Button hit areas are minimum 44×44px — critical for a flow designed to be used on a phone in direct sunlight outside a museum entrance. The entire ticket purchase flow is navigable by keyboard, and form inputs use explicit labels for screen reader compatibility.
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
                <h2 className="case-section__title">Diagnosis over decoration.</h2>
                <p className="case-section__text">
                  This project reinforced that the highest-leverage design work happens before Figma is even opened. The original portal was aesthetically fine, but operationally broken. 
                </p>
                <p className="case-section__text">
                  By treating the problem as a business logic failure rather than a UI failure, I was able to design a system that works exactly how the end-user expects, while still fulfilling the government&apos;s requirement for digitised revenue collection. The architecture scales seamlessly to any other national park or public utility facing the same bottleneck.
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
