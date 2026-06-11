"use client";

import { useState } from "react";
import Link from "next/link";
import { posts } from "./posts-data";

export default function BlogHome() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubscribed(true);
    setEmail("");
  };

  // The first post is always featured on the front page
  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);

  // Formatting date for dateline
  const currentFormattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Blog Specific Header */}
      <header className="blog-nav">
        <div className="blog-width-limit blog-nav__inner">
          <Link href="/" className="blog-nav__logo">
            Health<span>Herald</span>
          </Link>
          <nav className="blog-nav__links">
            <a href="https://wainaina.tech/about" className="blog-nav__link">
              Designer Bio
            </a>
            <a href="https://wainaina.tech" className="blog-nav__link">
              Portfolio
            </a>
            <a href="#subscribe" className="blog-nav__btn">
              Subscribe
            </a>
          </nav>
        </div>
      </header>

      <main className="blog-width-limit py-8">
        {/* Broadsheet Masthead */}
        <section className="masthead">
          <span className="masthead__sub-label">Health Policy & Equity Analysis</span>
          <h1 className="masthead__title">Health Herald</h1>
          <p className="masthead__tagline">
            Unpacking the friction of universal coverage, devolved systems, and transaction rails in East Africa.
          </p>
        </section>

        {/* broadsheet volume details */}
        <div className="dateline-bar">
          <span className="dateline-bar__issue">Vol. I · No. 1</span>
          <span>Nairobi, Kenya</span>
          <span>{currentFormattedDate}</span>
        </div>

        {/* Broadsheet Editorial Grid */}
        <div className="editorial-grid">
          
          {/* Left Column: Articles */}
          <div className="editorial-grid__main">
            
            {/* Featured Post Spotlight */}
            {featuredPost && (
              <div className="nyt-card" style={{ marginBottom: "32px" }}>
                {/* Card Header Logo (representing NYT logo) */}
                <div className="nyt-card__logo-container">
                  <Link href={`/posts/${featuredPost.slug}`} className="nyt-card__logo">
                    The Health Herald
                  </Link>
                </div>
                <hr className="nyt-card__divider" />

                {/* Card Body */}
                <div className="nyt-card__body">
                  <span className="nyt-card__category">{featuredPost.category}</span>
                  <h2 className="nyt-card__title">
                    <Link href={`/posts/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="nyt-card__subtitle">{featuredPost.excerpt}</p>

                  <div className="nyt-card__actions">
                    <Link href={`/posts/${featuredPost.slug}`} className="nyt-card__btn-pill">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 12v10H4V12" />
                        <path d="M2 7h20v5H2z" />
                        <path d="M12 22V7" />
                        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                      </svg>
                      Read full article
                    </Link>
                  </div>
                </div>

                {/* Card Image */}
                <div className="nyt-card__image-container">
                  <Link href={`/posts/${featuredPost.slug}`}>
                    <img
                      src="/images/nhif_illustration.png"
                      alt={featuredPost.title}
                      className="nyt-card__image"
                    />
                  </Link>
                </div>
              </div>
            )}

            <div className="broadsheet-double-rule" style={{ borderColor: 'rgba(255, 255, 255, 0.25)', borderTop: '4px double rgba(255, 255, 255, 0.25)' }}>
              <span className="secondary-section-title" style={{ color: '#ffffff', borderBottom: '2px solid rgba(255, 255, 255, 0.25)', marginBottom: 0 }}>
                Additional Policy Bulletins
              </span>
            </div>

            {/* Secondary articles */}
            <div className="card-flow">
              {secondaryPosts.map((post) => (
                <article key={post.slug} className="nyt-card">
                  <div className="nyt-card__body">
                    <span className="nyt-card__category">{post.category}</span>
                    <h3 className="nyt-card__title" style={{ fontSize: "1.6rem" }}>
                      <Link href={`/posts/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="nyt-card__subtitle" style={{ marginBottom: "16px" }}>{post.excerpt}</p>
                    <div className="nyt-card__actions">
                      <Link href={`/posts/${post.slug}`} className="nyt-card__btn-pill">
                        Read Analysis
                      </Link>
                    </div>
                  </div>
                  <div className="nyt-card__image-container" style={{ aspectRatio: "16 / 8" }}>
                    <Link href={`/posts/${post.slug}`}>
                      <img
                        src={`/images/${
                          post.slug === "mobile-health-rails"
                            ? "money_illustration"
                            : "county_illustration"
                        }.png`}
                        alt={post.title}
                        className="nyt-card__image"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="editorial-sidebar">
            
            {/* Bloomberg Style Newsletter */}
            <section id="subscribe" className="newsletter-box">
              <h3 className="newsletter-box__title">The Dispatch</h3>
              <p className="newsletter-box__desc">
                High-fidelity design teardowns and health equity briefings. Direct to your inbox.
              </p>
              {isSubscribed ? (
                <p className="newsletter-box__success">✓ Added to the registry list.</p>
              ) : (
                <form onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="newsletter-box__input"
                  />
                  <button type="submit" className="newsletter-box__btn">
                    Register
                  </button>
                </form>
              )}
            </section>

            {/* Author / Columnist bio */}
            <section className="author-widget">
              <h4 className="author-widget__title">The Columnist</h4>
              <div className="author-widget__profile">
                <div className="author-widget__avatar" aria-hidden="true">
                  WT
                </div>
                <div className="author-widget__bio">
                  <p>
                    <strong>Wainaina Thomas</strong> is a Product Designer and Health Systems Researcher based in Nairobi. He works at the intersection of public utility design, low-bandwidth interfaces, and health equity infrastructure.
                  </p>
                </div>
              </div>
            </section>

          </div>

        </div>
      </main>

      <footer className="blog-footer">
        <div className="blog-width-limit">
          <p className="blog-footer__copyright">
            © {new Date().getFullYear()} Health Herald. Written and curated by Wainaina Thomas.
          </p>
        </div>
      </footer>
    </>
  );
}
