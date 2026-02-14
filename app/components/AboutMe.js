'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
    return (
        <section className="about-me" id="about-me">
            <div className="about-me__content">
                <h2 className="about-me__title">Hi, I&apos;m Lilac.</h2>
                <p className="about-me__text">
                    I&apos;m committed to building a safe and supportive environment in which you can sit and explore your thoughts,
                    feelings, and experiences. With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
                </p>
                <Link href="#contact" className="btn">LET&apos;S CHAT →</Link>
            </div>
            <div className="about-me__images">
                <div className="about-me__arch-image">
                    <Image
                        src="/images/hero-lilac.png"
                        alt="Lilac holding flowers"
                        width={280}
                        height={380}
                        loading="lazy"
                    />
                </div>
                <div className="about-me__circle-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop"
                        alt="White hydrangea flowers"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
