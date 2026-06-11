"use client";

import { useState, useEffect } from "react";

export default function PostClient({ postTitle }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
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
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;

  return (
    <>
      {/* Fixed progress bar */}
      <div className="scroll-progress-container" aria-hidden="true">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Share and Action bar */}
      <div className="action-share-bar">
        <div className="action-share-bar__group">
          <button onClick={handleCopyLink} className="action-share-bar__btn">
            {copied ? "Link Copied!" : "Copy Link"}
          </button>
        </div>
        <div className="action-share-bar__group">
          <a href={tweetUrl} target="_blank" rel="noopener noreferrer" className="action-share-bar__link">
            Share on X
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="action-share-bar__link">
            Share on LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
