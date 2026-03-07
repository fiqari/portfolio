import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer container grid-12">
            <div className="footer__inner col-span-8-center">

                {/* Left: Identity & Copyright */}
                <div className="footer__identity">
                    <span className="footer__name">Wainaina Thomas</span>
                    <span className="footer__separator">—</span>
                    <span className="footer__role">Product Designer</span>
                    <span className="footer__copyright">© {new Date().getFullYear()}</span>
                </div>

                {/* Right: Connect */}
                <div className="footer__connect">
                    <a href="mailto:thomas@raimana.tech" className="footer__link">
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/wainaina-thomas" target="_blank" rel="noopener noreferrer" className="footer__link">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/raimana.studio" target="_blank" rel="noopener noreferrer" className="footer__link">
                        Instagram
                    </a>
                </div>

            </div>
        </footer>
    );
}
