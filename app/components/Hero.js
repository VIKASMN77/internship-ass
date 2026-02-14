'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__image-wrapper">
                <Image
                    src="/images/hero-lilac.png"
                    alt="Woman holding a bouquet of lilac flowers"
                    width={450}
                    height={600}
                    className="hero__image"
                    priority
                />
            </div>
            <div className="hero__content">
                <h1 className="hero__title">Live your life<br />in full bloom</h1>
                <p className="hero__subtitle">Therapy for Adults in Minneapolis, MN.</p>
                <Link href="#contact" className="btn">CONNECT WITH ME →</Link>
            </div>
        </section>
    );
}
