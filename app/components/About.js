'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <section className="about" id="about">
                <div className="about__content">
                    <h2 className="about__title">Live a fulfilling life.</h2>
                    <p className="about__text">
                        Life can be challenging—especially when you&apos;re trying to balance your personal and professional life.
                    </p>
                    <p className="about__text">
                        It&apos;s easy to feel like you&apos;re alone in facing these challenges, but I want you to know that I&apos;m here to help.
                    </p>
                    <Link href="#contact" className="about__cta-link">GET IN TOUCH →</Link>
                </div>
                <div className="about__image-wrapper">
                    <Image
                        src="/images/lifestyle-flatlay.png"
                        alt="Lifestyle flat lay with lilac flowers, coffee, and notebook"
                        width={600}
                        height={500}
                        className="about__image"
                        loading="lazy"
                    />
                </div>
            </section>
        </>
    );
}
