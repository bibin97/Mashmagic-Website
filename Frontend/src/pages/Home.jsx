import React from 'react';
import Hero from '../components/Hero/Hero';
import CardGrid from '../components/CardGrid';
import OurPrograms from '../components/OurPrograms';
import TestimonialCards from '../components/TestimonialCard';

export default function Home() {
  return (
    <>
      <Hero />
      <CardGrid />
      <OurPrograms />
      <TestimonialCards />
    </>
  );
}
