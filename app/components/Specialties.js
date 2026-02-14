'use client';

import Image from 'next/image';

const specialties = [
    {
        title: 'Self-Esteem',
        text: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
        image: '/images/self-esteem.png',
        alt: 'Man in home office reflecting',
    },
    {
        title: 'Relationships',
        text: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
        image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=500&h=500&fit=crop',
        alt: 'Person sitting outdoors peacefully',
    },
    {
        title: 'Burnout',
        text: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
        alt: 'Person reading near bookshelf',
    },
];

export default function Specialties() {
    return (
        <section className="specialties" id="specialties">
            <h2 className="specialties__title">My Specialties</h2>
            <div className="specialties__grid">
                {specialties.map((item) => (
                    <div className="specialty-card" key={item.title}>
                        <h3 className="specialty-card__title">{item.title}</h3>
                        <p className="specialty-card__text">{item.text}</p>
                        <div className="specialty-card__image-wrapper">
                            {item.image.startsWith('/') ? (
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={220}
                                    height={220}
                                    className="specialty-card__image"
                                    loading="lazy"
                                />
                            ) : (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="specialty-card__image"
                                    loading="lazy"
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
