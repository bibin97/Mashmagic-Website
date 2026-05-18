import React from 'react';
import TestimonialCards from '../components/TestimonialCard';

export default function Testimonials() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <TestimonialCards showVideos={true} />
    </div>
  );
}
