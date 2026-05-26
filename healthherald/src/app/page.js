"use client";

import { useState } from "react";
import Link from "next/link";
import { posts } from "./posts-data";

export default function BlogHome() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Newsletter Submit
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubscribed(true);
    setEmail("");
  };

  // Get unique categories for filtering
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  // Filter posts
  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter((p) => p.category === selectedCategory);

  // Spotlights the newest post as featured, and lists the rest
  const featuredPost = posts[0];
  const secondaryPosts = filteredPosts.filter((p) => p.slug !== featuredPost.slug);

  return (
    <>
      {/* Blog Navigation Header */}
      <header className="blog-header">
        <div className="blog-container blog-header__inner">
          <Link href="/" className="blog-header__logo">
            Health<span>Herald</span>.
          </Link>
          <nav className="blog-header__nav">
            <Link href="/about" className="blog-header__link">
              About
            </Link>
            <a href="https://wainaina.tech" className="blog-header__link">
              Portfolio ↗
            </a>
            <a href="#subscribe" className="blog-header__btn">
              Subscribe
            </a>
          </nav>
        </div>
      </header>

      <main className="blog-container">
        {/* Editorial Publication Hero Banner */}
        <section className="blog-hero">
          <span className="blog-hero__tag">Health Policy & Systems</span>
          <h1 className="blog-title blog-hero__title">Health Herald</h1>
          <p className="blog-hero__subtitle">
            Critical analysis of Universal Health Coverage, digital medical infrastructure, and devolution policy in Kenya.
          </p>
        </section>

        {/* Featured Post Spotlight (Only shown if "All" is selected or the featured post fits the category) */}
        {selectedCategory === "All" || featuredPost.category === selectedCategory ? (
          <section className="featured-row">
            <div className="post-featured">
              <div className="post-meta">
                <span className="post-meta__category">{featuredPost.category}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h2 className="blog-title post-featured__title">
                <Link href={`/posts/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="post-featured__excerpt">{featuredPost.excerpt}</p>
              <Link href={`/posts/${featuredPost.slug}`} className="blog-header__link font-bold text-sm text-green-700 hover:text-black">
                Read Article →
              </Link>
            </div>
            
            {/* Quick newsletter subscription inline card */}
            <div className="bg-stone-50 border border-stone-200/60 p-6 rounded-xl flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="font-semibold text-stone-800 mb-2">Subscribe to Health Herald</h3>
                <p className="text-xs text-stone-600 mb-4">
                  Get high-fidelity systems analysis and design teardowns on health policy delivered straight to your inbox.
                </p>
              </div>
              {isSubscribed ? (
                <p className="subscribe-success text-center">✓ Thank you for subscribing!</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Type your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="p-3 border border-stone-200 rounded-md text-xs bg-white focus:outline-none focus:border-stone-400"
                  />
                  <button type="submit" className="bg-stone-900 text-white p-3 rounded-md text-xs font-semibold hover:bg-stone-800 transition">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </section>
        ) : null}

        {/* Category Filters Tabbar */}
        <nav className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-tab ${selectedCategory === cat ? "filter-tab--active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Blog Post List Grid */}
        <section className="posts-grid">
          {secondaryPosts.length > 0 ? (
            secondaryPosts.map((post) => (
              <article key={post.slug} className="post-card">
                <div className="post-meta">
                  <span className="post-meta__category">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="blog-title post-card__title">
                  <Link href={`/posts/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="post-card__excerpt">{post.excerpt}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-stone-500">{post.date}</span>
                  <Link href={`/posts/${post.slug}`} className="text-xs font-bold text-green-700 hover:text-black">
                    Read Article →
                  </Link>
                </div>
              </article>
            ))
          ) : (
            selectedCategory !== "All" && (
              <p className="text-stone-500 text-center py-12 col-span-2">No other posts found in this category.</p>
            )
          )}
        </section>

        {/* Large Centered Substack Subscription Box */}
        <section id="subscribe" className="subscribe-card blog-narrow">
          <h2 className="subscribe-card__title">Read health policy with product-first clarity</h2>
          <p className="subscribe-card__desc">
            No fluff. No generic policy briefs. We explore Universal Health Coverage, claims systems, devolution, and digital interfaces from constraints to pixels.
          </p>
          {isSubscribed ? (
            <div className="subscribe-success">
              <span className="block text-2xl mb-2">🎉</span>
              <p>You&apos;re on the list! Check your inbox for verification details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="subscribe-form__input"
              />
              <button type="submit" className="subscribe-form__btn">
                Subscribe Now
              </button>
            </form>
          )}
        </section>
      </main>

      {/* Editorial Blog Footer */}
      <footer className="blog-footer">
        <div className="blog-container blog-footer__inner">
          <div className="blog-footer__links">
            <Link href="/about" className="blog-footer__link">
              About this publication
            </Link>
            <a href="https://wainaina.tech" className="blog-footer__link">
              Portfolio
            </a>
          </div>
          <p className="blog-footer__copyright">
            © {new Date().getFullYear()} Health Herald. Written by Wainaina Thomas.
          </p>
        </div>
      </footer>
    </>
  );
}
