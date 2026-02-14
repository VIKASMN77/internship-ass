'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="header" id="header">
            <Link href="/" className="header__logo">Lilac Template</Link>
            <nav className="header__nav">
                <Link href="/office" className="header__nav-link">Office</Link>
                <Link href="#blog" className="header__nav-link">Blog</Link>
                <Link href="#contact" className="header__nav-link">Contact</Link>
            </nav>
        </header>
    );
}
