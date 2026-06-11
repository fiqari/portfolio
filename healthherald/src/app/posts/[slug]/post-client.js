"use client";

import { useState, useEffect } from "react";

export default function PostClient({ postTitle }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }

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

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(currentUrl)}`;

  return (
    <>
      {/* Fixed progress bar */}
      <div className="scroll-progress-container" aria-hidden="true">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Share and Action bar */}
      <div className="nyt-card__actions">
        <button onClick={handleCopyLink} className="nyt-card__btn-pill" title="Copy Article Link">
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
          {copied ? "Link Copied!" : "Share full article"}
        </button>

        <a
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nyt-card__btn-circle"
          title="Share on X"
        >
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
            <path d="M15 14l5-5-5-5" />
            <path d="M4 18v-3a4 4 0 0 1 4-4h12" />
          </svg>
        </a>

        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="nyt-card__btn-circle"
          title={isBookmarked ? "Remove Bookmark" : "Bookmark Article"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={isBookmarked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </>
  );
}
