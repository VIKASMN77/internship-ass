'use client';

import Link from 'next/link';

export default function GetStarted() {
    return (
        <section className="get-started" id="get-started">
            <h2 className="get-started__title">Get started today.</h2>
            <p className="get-started__text">
                Ready to take the first step towards a happier, healthier you?
                Contact me to book your first session. I look forward to starting this therapeutic journey with you.
            </p>
            <Link href="#contact" className="btn btn--white">GET IN TOUCH →</Link>
        </section>
    );
}
