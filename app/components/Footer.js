'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <>
            {/* Main Footer */}
            <footer className="footer-main" id="contact">
                <div className="footer-main__grid">
                    <div className="footer-main__brand">
                        <h3>Lilac Template</h3>
                        <p>123 Example Road</p>
                        <p>Minneapolis, MN</p>
                        <br />
                        <a href="mailto:email@example.com">email@example.com</a>
                        <a href="tel:+18005555555">(800) 555-5555</a>
                    </div>

                    <div className="footer-main__hours">
                        <h4>Hours</h4>
                        <p>Monday – Friday</p>
                        <p>10am – 4pm</p>
                    </div>

                    <div className="footer-main__find">
                        <h4>Find</h4>
                        <Link href="/">Home</Link>
                        <Link href="#contact">Connect</Link>
                        <Link href="#blog">Blog</Link>
                    </div>
                </div>
            </footer>

            {/* Bottom Footer */}
            <div className="footer-bottom">
                <div className="footer-bottom__links">
                    <a href="#">Privacy &amp; Cookies Policy</a>
                    <a href="#">Cookie Data Exemption</a>
                    <a href="#">Website Terms &amp; Conditions</a>
                    <a href="#">Disclaimer</a>
                </div>
                <p className="footer-bottom__credit">
                    Lolicone Template Credits: <a href="#">Go Bloom Creative</a>
                </p>
                <p className="footer-bottom__copy">
                    All Rights Reserved © 2024 Your Business Name Here, LLC.
                </p>
            </div>
        </>
    );
}
