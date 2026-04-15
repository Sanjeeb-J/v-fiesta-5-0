import Hero from '@/components/Hero';
import About from '@/components/About';
import EventsGrid from '@/components/EventsGrid';
import Speakers from '@/components/Speakers';
import FAQ from '@/components/FAQ';
import RegisterCTA from '@/components/RegisterCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EventsGrid />
      <Speakers />
      <FAQ />
      <RegisterCTA />
    </>
  );
}
