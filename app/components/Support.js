'use client';

import Link from 'next/link';

export default function Support() {
    return (
        <section className="support" id="support">
            <div className="support__image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=800&fit=crop"
                    alt="Woman sitting peacefully in meditation"
                    className="support__image"
                    loading="lazy"
                />
            </div>
            <div className="support__content">
                <h2 className="support__title">You don&apos;t have to do this all alone.</h2>
                <p className="support__intro">If you are experiencing any of these, it might be time to seek support:</p>
                <ul className="support__list">
                    <li className="support__list-item">Persistent feelings of sadness or hopelessness</li>
                    <li className="support__list-item">Trouble focusing or making decisions</li>
                    <li className="support__list-item">Difficulty maintaining relationships</li>
                    <li className="support__list-item">Feeling constantly exhausted or unmotivated</li>
                    <li className="support__list-item">A pervasive sense of being overwhelmed</li>
                </ul>
                <p className="support__closing">
                    With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
                </p>
                <hr className="support__divider" />
                <Link href="#contact" className="support__cta">BOOK WITH ME →</Link>
            </div>
        </section>
    );
}
