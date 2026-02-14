import dynamic from 'next/dynamic';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ScrollReveal from './components/ScrollReveal';

const Specialties = dynamic(() => import('./components/Specialties'), { ssr: true });
const Support = dynamic(() => import('./components/Support'), { ssr: true });
const AboutMe = dynamic(() => import('./components/AboutMe'), { ssr: true });
const Office = dynamic(() => import('./components/Office'), { ssr: true });
const GetStarted = dynamic(() => import('./components/GetStarted'), { ssr: true });
const Footer = dynamic(() => import('./components/Footer'), { ssr: true });

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Specialties /></ScrollReveal>
      <ScrollReveal><Support /></ScrollReveal>
      <ScrollReveal><AboutMe /></ScrollReveal>
      <ScrollReveal><Office /></ScrollReveal>
      <ScrollReveal><GetStarted /></ScrollReveal>
      <ScrollReveal><Footer /></ScrollReveal>
    </main>
  );
}
