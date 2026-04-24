# Sokodeals — Designing a Dual-Sided Deal Aggregator for Kenyan Supermarkets

**Role:** Product Designer (End-to-End)
**Type:** Self-Initiated / Raimana Studio
**Platform:** Progressive Web App (PWA)
**Year:** 2024–2025
**Status:** In Development

---

## Overview

Kenyan supermarket shoppers have no reliable way to compare deals across stores without physically visiting each one or checking multiple apps separately. At the same time, supermarkets spend money promoting offers through flyers and WhatsApp forwards that reach a limited, untracked audience. Sokodeals is a dual-sided PWA that connects both groups — giving shoppers a single place to find current deals and giving merchants a direct channel to reach price-conscious buyers.

This case study covers the full design process: from identifying the problem to resolving the tension that comes with designing for two very different user groups at once.

---

## The Problem

### For Shoppers

Kenya's supermarket sector is competitive. Naivas, Quickmart, Carrefour, and Magunas all run weekly promotions, but a shopper who wants to compare prices across stores has to do it manually. There is no aggregated, up-to-date source. Most people rely on word of mouth, store visits, or social media posts that are often outdated by the time they're seen.

The additional constraint is connectivity. A significant portion of Kenyan shoppers access the internet through mobile data with inconsistent coverage. Any solution that requires a stable connection to function is a solution that fails the people who need it most.

### For Merchants

Supermarket marketing teams already create promotions — the problem is distribution. Their current options are expensive (print, radio) or unreliable (WhatsApp, in-store signage). There is no lightweight digital channel where they can publish a deal and know it reaches people who are actively looking to buy.

### The Core Tension

This is not a single-sided product. Shoppers want unbiased, accurate information. Merchants want maximum visibility for their promotions. Designing for both without letting one side undermine the other was the central design challenge.

---

## Research

Because this is a self-initiated project, formal research was lean — but deliberate. The goal was to validate assumptions before committing to a design direction.

### What I Did

**Informal interviews with shoppers (n=8):** I spoke with a small group of regular supermarket shoppers in Nairobi, ranging from students to working adults. I asked them how they currently find deals, what influences where they shop each week, and whether they had ever changed stores based on a promotion.

**Competitive review:** I looked at how existing platforms — supermarket apps, price comparison sites, and deal aggregators in other markets — structured their interfaces. Most were either too store-centric (you had to already know which store you wanted) or too cluttered with sponsored content that made it hard to trust the results.

**Merchant channel audit:** I reviewed how each of the four target supermarkets currently communicates promotions — websites, apps, social media, and printed flyers. This helped me understand what data they already produce and how much extra work a merchant portal would ask of their teams.

### Key Findings

1. **Shoppers shop by category, not by store.** The most common question wasn't "what's on offer at Naivas?" — it was "where can I get the cheapest cooking oil this week?" The interface needed to organise deals by product category first, not by retailer.

2. **Trust is fragile.** Shoppers were sceptical of any platform that felt like it was pushing certain stores. Several mentioned that they'd stopped using a supermarket app because it "always showed the same things." Transparency — or at least the appearance of it — would be important.

3. **Offline access is not a nice-to-have.** Six out of eight people mentioned connectivity as a real issue when shopping. Two said they regularly lose data connection inside large supermarkets. This confirmed that offline-first wasn't a technical feature — it was a core user need.

4. **Merchant upload needs to be fast.** Marketing managers at supermarket chains are not product-focused roles. They're busy people who deal with many channels at once. If uploading a deal took more than a few minutes, the portal would be abandoned.

---

## Defining the Users

### Primary Users

**The Budget Shopper**
A working adult or household manager who shops weekly and actively looks for ways to reduce their grocery bill. They know the major chains and have preferences, but price can override loyalty. They use a smartphone and intermittent mobile data.

**The Merchant Marketing Manager**
A mid-level marketing or promotions staff member at a supermarket chain. They manage weekly promotions across multiple channels. They are not technical, but they are comfortable with digital tools. Their priority is speed — they need to publish deals quickly and move on.

### Secondary Users

**The Casual Browser** — A shopper who isn't actively hunting deals but would act on one if it appeared at the right moment. This user benefits from a clean, browsable interface rather than a search-first one.

---

## Design Principles

Before moving into structure and flows, I established three principles to guide decisions throughout the process.

**1. Category first, retailer second.**
The interface should reflect how shoppers think — by product — not how merchants think — by store. Retailers appear as a filter, not as the primary organising structure.

**2. Speed over completeness on the merchant side.**
A deal published quickly and imperfectly is more valuable than one that takes twenty minutes to upload perfectly. The merchant portal should have sensible defaults and minimal required fields.

**3. Offline as baseline, not exception.**
The consumer app should assume the user may lose connectivity at any point. Data should be cached aggressively and the interface should degrade gracefully rather than breaking.

---

## Information Architecture

The platform has two separate surfaces that share an underlying data layer.

### Consumer App

```
Home
├── Featured Deals (curated, time-sensitive)
├── Browse by Category
│   ├── Grocery & Staples
│   ├── Fresh Produce
│   ├── Household
│   ├── Personal Care
│   └── Beverages
├── Browse by Store
│   ├── Naivas
│   ├── Quickmart
│   ├── Carrefour
│   └── Magunas
├── Search
└── Saved Deals
```

### Merchant Portal

```
Dashboard
├── Active Deals
├── Add New Deal
│   ├── Product Details
│   ├── Pricing & Discount
│   ├── Validity Period
│   └── Store Selection
├── Deal Performance (views, saves)
└── Account Settings
```

---

## Key Design Decisions

### Decision 1 — Offline-First Architecture

The consumer app caches deal data locally on the device using a service worker. When a user opens the app without connectivity, they see the last synced set of deals with a clear timestamp indicating when the data was last updated. Deals that have expired are visually marked but still visible, because a shopper mid-trip deserves to see what they saved — not a blank screen.

**Why this matters:** This is not a standard design decision in most product contexts, but in this market it changes the fundamental reliability of the product. An app that fails without connectivity is, for many users, an app that fails half the time.

### Decision 2 — Category-Led Navigation

Early sketches organised deals by store, which felt intuitive from a merchant's perspective. After the shopper interviews, it became clear this was the wrong mental model. The final structure puts categories front and centre on the home screen. Store filtering is available as a secondary action — you can narrow to "Quickmart deals in the Household category," but you can't enter the app into a store-first view by default.

This decision created minor friction with the merchant side: store branding feels less prominent to the merchants. The trade-off was worth it because it protects the shopper's trust that the platform isn't simply an advertising surface.

### Decision 3 — Merchant Upload Flow

Initial designs for the merchant portal had eight steps before a deal went live. Tested against a simulated scenario with three people, the feedback was consistent: too many screens, too many required fields. The revised flow reduced this to four screens with three required fields — product name, discount amount or percentage, and validity dates. Everything else (images, category tags, store-specific notes) is optional and can be added later.

The portal also includes a "Duplicate Deal" function, because many promotions repeat weekly with minor changes. This came directly from noticing that merchants were likely to publish the same fifteen or twenty deals on a rotating basis.

### Decision 4 — Deal Expiry Handling

Expired deals are a trust problem. If a shopper sees a deal, visits the store, and finds it's no longer valid, they lose confidence in the platform. The design handles this in two ways: deals expire automatically at midnight on their end date and move to an archived state rather than disappearing entirely, and the consumer app shows a clear countdown for deals ending within 24 hours. Merchants receive an in-portal prompt to renew or update a deal three days before it expires.

---

## The Dual-Sided Challenge in Practice

Designing for two user groups with different goals requires constant prioritisation. Several specific moments in this project forced a clear choice between the two sides.

**Homepage real estate:** Merchants naturally wanted featured placement for their deals. Shoppers wanted deals ranked by relevance — best discount, nearest expiry, or closest store. The resolution was a "Featured" section at the top of the home screen, limited to two deals, clearly labelled as promoted. Everything below is ranked by deal quality, not by merchant preference.

**Deal data quality:** Merchants sometimes uploaded incomplete or ambiguous deal information — "up to 30% off selected items" is not a useful deal listing for a shopper. The merchant portal includes inline guidance at each field explaining what makes a deal listing useful, framed from the shopper's perspective. This nudges better data quality without creating a hard validation rule that frustrates merchants.

**Notifications:** Merchants wanted the ability to push notifications directly to users. This was removed from scope because it would have positioned the platform as a marketing tool for merchants, which would erode shopper trust over time. Instead, shoppers can save deals and receive a single reminder notification when a saved deal is about to expire.

---

## Screens and Flows

### Consumer App — Core Screens

**Home Screen**
The home screen opens with a horizontally scrollable row of featured deals, followed by category tiles in a two-column grid. A persistent search bar sits at the top. The design uses high-contrast cards with a clear price-cut label (e.g. "Was KES 450 → KES 290") to make the value immediately obvious without requiring the shopper to calculate it.

**Deal Detail Screen**
Each deal has its own screen showing the product image, discount details, validity period, and which stores carry it. A "Save Deal" button caches the deal for offline access. A map link opens the nearest participating store in Google Maps.

**Category Browse Screen**
Deals within a category are sorted by expiry date by default, with a filter option to sort by discount size or store. The filter panel is a bottom sheet rather than a full screen, keeping the user's context visible behind it.

**Offline State**
When the app detects no connectivity, a non-intrusive banner appears at the top of the screen. The rest of the interface functions normally using cached data. The banner disappears automatically when connectivity is restored and new data syncs.

### Merchant Portal — Core Screens

**Dashboard**
The dashboard shows active deals, total views, and total saves in a simple three-card summary. Below that is a list of active deals sorted by expiry date, so the merchant can see what needs attention first.

**Add New Deal — Step 1: Product Details**
The merchant enters the product name, selects a category from a dropdown, and uploads an image (optional). The image upload accepts a phone photo directly, reducing the need for a proper product image.

**Add New Deal — Step 2: Pricing**
The merchant enters the original price and either the sale price or the percentage discount — the form calculates the other field automatically. This reduces input errors and speeds up the process.

**Add New Deal — Step 3: Validity and Store Selection**
The merchant sets a start and end date, then selects which of their stores the deal applies to. Multi-store selection is handled with checkboxes rather than a dropdown, because most merchants will either select all stores or a specific subset.

**Add New Deal — Step 4: Review and Publish**
A summary screen shows the deal as it will appear to shoppers, with a "Looks good, publish" button. There is also an option to save as draft. This final review step catches obvious errors before the deal goes live.

---

## Trade-offs and What I Would Do Differently

**Ratings and reviews were cut.** An early version of the design included a way for shoppers to flag misleading deals. This was important for trust, but the moderation flow required for it was too complex to design well within this scope. It remains a future feature.

**Merchant analytics are shallow.** The current portal shows views and saves, but nothing about conversion — whether a shopper who saved a deal actually visited the store. That data would require a more complex integration (loyalty card data, geofencing, or QR codes at checkout) that is beyond the current scope.

**No pricing tier for merchants yet.** The platform currently treats all merchants the same. In reality, a national chain like Carrefour and a single-branch local supermarket have very different needs and very different willingness to pay. A tiered model with different feature sets would make sense as the product grows, but designing that during the initial build risked over-engineering the product before knowing what merchants actually use.

**I would spend more time on merchant onboarding.** Getting a supermarket chain to adopt a new third-party platform requires buy-in from more than one person — usually a marketing manager and a commercial director. The current design treats onboarding as a single-user flow. A better version would account for the fact that the person creating the account and the person approving its use are often different people.

---

## Hypotheses and Success Metrics

Since Sokodeals is pre-launch, the following are the hypotheses the design is built around. These will be tested during a structured pilot with a limited set of merchants and shoppers.

| Hypothesis | Metric |
|---|---|
| Shoppers will browse by category more than by store | Category navigation tap rate vs. store navigation tap rate |
| Offline access will reduce app abandonment during low-connectivity sessions | Session completion rate on low-signal vs. full-signal connections |
| A four-step upload flow will reduce merchant drop-off compared to longer flows | Portal deal completion rate |
| Saved deals drive repeat app opens | Return visit rate among users with at least one saved deal |

---

## Reflection

This project reinforced a few things I already believed about product design, and taught me a few things I didn't expect.

The dual-sided structure made every design decision more consequential. In a single-sided product, you optimise for one user's needs. Here, every navigation decision, every piece of real estate on the screen, and every data field in the portal had implications for both sides. That complexity is what made the project genuinely interesting — and what required the most deliberate trade-off thinking.

Designing for the Kenyan market specifically, rather than a generic emerging market, also changed the shape of several decisions. The offline-first requirement, the mobile-first constraint, and the competitive dynamics of the local supermarket sector are all specific enough that a design lifted from a Western comparable product would have failed in predictable ways.

The hardest thing to design well was trust. You can't put trust on a screen, but every decision about layout, labelling, information hierarchy, and merchant visibility either builds it or erodes it. Most of the meaningful design work in this project happened in that space.

---

## Tools Used

- Figma — wireframes, UI design, prototyping
- FigJam — user flows, IA mapping
- Notion — research notes, project documentation

---

*Sokodeals is a Raimana Studio project. All research and design by Thomas Wainaina.*
