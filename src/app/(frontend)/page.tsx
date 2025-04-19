import React from 'react'
import { HeroSection } from './_sections/hero'
import { ReviewsSection } from './_sections/reviews'
import { FeaturesSection } from './_sections/features'

export default async function HomePage() {
  return (
    <div className="py-8">
      <div className="container">
        <HeroSection />
      </div>

      <ReviewsSection className="mb-10" />

      <div className="container">
        <FeaturesSection />
      </div>
    </div>
  )
}
