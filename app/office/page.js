'use client';

import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';

export default function OfficePage() {
  return (
    <>
      <header className="header" id="header">
        <Link href="/" className="header__logo">Lilac Template</Link>
        <nav className="header__nav">
          <Link href="/#office" className="header__nav-link">Office</Link>
          <Link href="/#contact" className="header__nav-link">Contact</Link>
        </nav>
      </header>

      <main className="office-page">
        <section className="office-page__hero">
          <h1 className="office-page__main-title">Office</h1>
          <p className="office-page__tagline">
            A calm space for healing. Our office is designed so you can feel safe, at ease, and fully yourself.
          </p>
        </section>

        <ScrollReveal>
          <div className="office-page__hero-image">
            <img
              src="/images/office1.png"
              alt="Welcoming therapy office with comfortable seating, natural light, and a calm atmosphere"
              className="office-page__hero-img"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <section className="office-page__content">
          <ScrollReveal>
          <p className="office-page__intro">
            Whether you choose in-person or hybrid sessions, you&apos;ll find a quiet, private environment
            where your comfort and confidentiality come first. The space is set up to support reflection,
            openness, and the kind of conversations that lead to real change.
          </p>
          </ScrollReveal>

          <ScrollReveal>
          <div className="office-page__image-block">
            <img
              src="/images/office2.png"
              alt="Calm, inviting therapy space with comfortable seating and natural light"
              className="office-page__image"
              loading="lazy"
            />
            <p className="office-page__image-caption">A calm space for reflection and healing.</p>
          </div>
          </ScrollReveal>

          <ScrollReveal>
          <div className="office-page__details">
            <div className="office-page__detail">
              <span className="office-page__detail-label">Location</span>
              <span className="office-page__detail-text">Minneapolis, MN — easy parking and transit-friendly.</span>
            </div>
            <div className="office-page__detail">
              <span className="office-page__detail-label">Sessions</span>
              <span className="office-page__detail-text">In-person and hybrid options available.</span>
            </div>
            <div className="office-page__detail">
              <span className="office-page__detail-label">Safety, comfort & privacy</span>
              <span className="office-page__detail-text">A private, quiet space where you can feel at ease.</span>
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal>
          <section className="office-page__feature office-page__feature--sessions">
            <div className="office-page__feature-content">
              <h2 className="office-page__feature-title">In-person & hybrid sessions</h2>
              <p className="office-page__feature-text">
                Meet in our calming office for face-to-face sessions, or join from home via secure video when that works better for you. We offer both in-person and hybrid options so you can choose what feels right for your schedule and comfort.
              </p>
            </div>
            <div className="office-page__feature-image">
              <img
                src="/images/hybrid-sessions.png"
                alt="In-person and hybrid meeting: colleagues in office with remote participants on screen"
                className="office-page__feature-img"
                loading="lazy"
              />
            </div>
          </section>
          </ScrollReveal>

          <ScrollReveal>
          <section className="office-page__feature office-page__feature--privacy">
            <div className="office-page__feature-content">
              <h2 className="office-page__feature-title">Safety, comfort & privacy</h2>
              <p className="office-page__feature-text">
                Your wellbeing is at the center of everything we do. The space is designed for complete confidentiality, with a quiet, secure environment where you can speak openly and feel fully supported.
              </p>
            </div>
            <div className="office-page__feature-image">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&h=600&fit=crop"
                alt="Peaceful, private space with soft light and a sense of safety"
                className="office-page__feature-img"
                loading="lazy"
              />
            </div>
          </section>
          </ScrollReveal>
        </section>

        <ScrollReveal>
        <div className="office-page__cta">
          <Link href="/#contact" className="btn">Get in touch →</Link>
        </div>
        </ScrollReveal>
      </main>

      <footer className="footer-bottom" style={{ marginTop: 'auto' }}>
        <div className="footer-bottom__links">
          <Link href="/">Home</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <p className="footer-bottom__copy">© Lilac Template. Therapy for Adults in Minneapolis, MN.</p>
      </footer>
    </>
  );
}
