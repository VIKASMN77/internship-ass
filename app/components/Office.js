'use client';

import Link from 'next/link';

export default function Office() {
  return (
    <section className="office" id="office">
      <Link href="/office" className="office__link-wrap" aria-label="Go to Office page">
        <div className="office__image-wrapper">
          <img
            src="/images/office1.png"
            alt="Our therapy office — a calm, welcoming space for healing"
            className="office__image"
            loading="lazy"
          />
        </div>
        <div className="office__content">
          <h2 className="office__title">A calm space for healing.</h2>
          <p className="office__intro">
            Our office is designed so you can feel safe, at ease, and fully yourself. Whether you choose
            in-person or hybrid sessions, you&apos;ll find a quiet, private environment where your comfort
            and confidentiality come first.
          </p>
          <div className="office__details">
            <div className="office__detail">
              <span className="office__detail-label">Location</span>
              <span className="office__detail-text">Minneapolis, MN — easy parking and transit-friendly.</span>
            </div>
            <div className="office__detail">
              <span className="office__detail-label">Sessions</span>
              <span className="office__detail-text">In-person and hybrid options available.</span>
            </div>
            <div className="office__detail">
              <span className="office__detail-label">Safety, comfort & privacy</span>
              <span className="office__detail-text">A private, quiet space where you can feel at ease.</span>
            </div>
          </div>
          <span className="office__cta">Visit our office →</span>
        </div>
      </Link>
    </section>
  );
}
