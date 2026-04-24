import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__inner">
        <span className="footer__left">
          © {new Date().getFullYear()} Wainaina Thomas
        </span>
        <div className="footer__links">
          <a href="mailto:hello@wainainathomas.com" className="footer__link">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/wainaina-thomas"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
