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
              <article className="featured-article">
                <span className="featured-article__label">{featuredPost.category}</span>
                <h2 className="featured-article__title">
                  <Link href={`/posts/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>
                
                <div className="featured-article__meta">
                  <span className="featured-article__byline">By {featuredPost.author}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <p className="featured-article__excerpt">{featuredPost.excerpt}</p>
                <Link href={`/posts/${featuredPost.slug}`} className="read-more-link">
                  Read Analysis
                </Link>
              </article>
            )}

            <div className="broadsheet-double-rule">
              <span className="secondary-section-title">Additional Policy Bulletins</span>
            </div>

            {/* Secondary articles */}
            <div className="card-flow">
              {secondaryPosts.map((post) => (
                <article key={post.slug} className="editorial-card">
                  <div className="editorial-card__meta">
                    <span className="editorial-card__category">{post.category}</span>
                    <span>{post.date} · {post.readTime}</span>
                  </div>
                  <h3 className="editorial-card__title">
                    <Link href={`/posts/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="editorial-card__excerpt">{post.excerpt}</p>
                  <Link href={`/posts/${post.slug}`} className="read-more-link">
                    Read Analysis
                  </Link>
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
