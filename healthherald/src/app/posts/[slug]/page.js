"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../../posts-data";

export default function PostPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Track scroll progress for the top reading bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubscribed(true);
    setEmail("");
  };

  const tweetUrl = typeof window !== "undefined"
    ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`
    : "#";

  const linkedinUrl = typeof window !== "undefined"
    ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
    : "#";

  return (
    <>
      {/* Scroll progress bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>

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

      <main className="blog-container py-12">
        <article className="blog-narrow">
          {/* Post Header */}
          <div className="post-view-header">
            <span className="blog-hero__tag">{post.category}</span>
            <h1 className="blog-title post-view-header__title">{post.title}</h1>
            
            <div className="post-author-box">
              <div className="w-10 h-10 rounded-full bg-green-800 text-white flex items-center justify-center font-bold text-sm">
                WT
              </div>
              <div className="post-author-info">
                <p className="post-author-info__name">{post.author}</p>
                <p className="post-author-info__role">{post.authorRole} • {post.date} • {post.readTime}</p>
              </div>
            </div>
          </div>

          {/* Social Share & Action Bar */}
          <div className="action-bar">
            <div className="action-bar__left">
              <button onClick={handleCopyLink} className="action-btn">
                <span>🔗</span> {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
            <div className="action-bar__right">
              <a href={tweetUrl} target="_blank" rel="noopener noreferrer" className="action-btn">
                <span>🐦</span> Share on X
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="action-btn">
                <span>💼</span> Share on LinkedIn
              </a>
            </div>
          </div>

          {/* Post Content */}
          <div className="post-content">
            {post.blocks.map((block, idx) => {
              switch (block.type) {
                case "paragraph":
                  return <p key={idx}>{block.text}</p>;
                case "heading":
                  return <h2 key={idx}>{block.text}</h2>;
                case "quote":
                  return <blockquote key={idx}>{block.text}</blockquote>;
                case "list":
                  return (
                    <ul key={idx}>
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* End of article Newsletter Card */}
          <section id="subscribe" className="subscribe-card mt-12">
            <h3 className="subscribe-card__title">Subscribe to Health Herald</h3>
            <p className="subscribe-card__desc">
              Liked this article? Subscribe to get next week&apos;s health policy deep-dive delivered directly to your inbox.
            </p>
            {isSubscribed ? (
              <div className="subscribe-success text-center">
                🎉 You&apos;re subscribed! Thanks for reading.
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
                  Subscribe
                </button>
              </form>
            )}
          </section>

          {/* Back button */}
          <div className="text-center mt-12">
            <Link href="/" className="blog-header__link font-bold text-sm">
              ← Back to articles
            </Link>
          </div>
        </article>
      </main>

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
