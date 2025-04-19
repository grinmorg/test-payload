import React from 'react'
import { Globe } from '@/components/magicui/globe'
import { HeroSection } from './_sections/hero'
import { ReviewsSection } from './_sections/reviews'

export default async function HomePage() {
  return (
    <div className="container">
      <HeroSection />
      <ReviewsSection />
    </div>
  )
}
