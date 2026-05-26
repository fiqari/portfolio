import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-v2">
      <div className="container">
        <div className="footer-v2__top">
          <div className="footer-v2__cta">
            <span className="footer-v2__label">SAY HELLO</span>
            <a href="mailto:hello@wainainathomas.com" className="footer-v2__email">
              hello@wainainathomas.com
            </a>
          </div>
          
          <div className="footer-v2__links">
            <div className="footer-v2__column">
              <h4 className="footer-v2__header">Work</h4>
              <Link href="/nnm" className="footer-v2__link">Nairobi Museum</Link>
              <Link href="/dill" className="footer-v2__link">Dill Aggregator</Link>
            </div>
            <div className="footer-v2__column">
              <h4 className="footer-v2__header">Social</h4>
              <a href="https://www.linkedin.com/in/wainaina-thomas" target="_blank" rel="noopener noreferrer" className="footer-v2__link">LinkedIn</a>
              <a href="https://github.com/fiqari" target="_blank" rel="noopener noreferrer" className="footer-v2__link">GitHub</a>
            </div>
            <div className="footer-v2__column">
              <h4 className="footer-v2__header">More</h4>
              <Link href="/about" className="footer-v2__link">About</Link>
              <a href="/wainaina_thomas_resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-v2__link">Resume</a>
            </div>
          </div>
        </div>
        
        <div className="footer-v2__bottom">
          <p className="footer-v2__copyright">
            © {new Date().getFullYear()} Wainaina Thomas
          </p>
          <div className="footer-v2__status">
            <span className="footer-v2__dot"></span>
            Available for remote roles · UTC+3
          </div>
        </div>
      </div>
    </footer>
  );
}
