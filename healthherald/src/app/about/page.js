"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <>
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

      <main className="blog-container py-16">
        <div className="blog-narrow">
          <h1 className="blog-title text-4xl mb-6">About Health Herald</h1>
          
          <div className="post-content">
            <p>
              <strong>Health Herald</strong> is a publication dedicated to unpacking the complex mechanics of health policy, digital healthcare infrastructure, and devolved health governance systems in Kenya.
            </p>
            <p>
              Many health policy resources are written in dry, academic language or focused solely on high-level administrative summaries. This publication attempts to look at health systems from the perspective of <strong>constraints, incentives, and interfaces</strong>. 
            </p>
            <p>
              We cover how universal health coverage changes operate on the ground, how mobile money transaction rails intersect with clinical cashflow realities, and how user interface decisions directly impact healthcare accessibility at county clinics.
            </p>

            <h3>About the Author</h3>
            <p>
              Health Herald is written by <strong>Wainaina Thomas</strong>, a Product Designer and Health Systems Researcher based in Nairobi, Kenya. Wainaina focuses on designing frictionless, low-bandwidth digital solutions for public utilities and health networks across emerging markets.
            </p>
            <p>
              With a background bridging engineering and user research, Wainaina believes that the success of social policies relies heavily on the design of the interfaces through which citizens access them.
            </p>
          </div>

          <section id="subscribe" className="subscribe-card mt-12">
            <h3 className="subscribe-card__title">Subscribe to Health Herald</h3>
            <p className="subscribe-card__desc">
              Join our community of policy makers, designers, and healthcare professionals. Receive a fresh systems analysis and design teardown weekly.
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
        </div>
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
