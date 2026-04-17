import { HeroCarousel } from '@/components/home/hero-carousel'
import { CategoriesSection } from '@/components/home/categories-section'
import { PromoBanner } from '@/components/home/promo-banner'
import { FeaturedProducts } from '@/components/home/featured-products'
import { StatsSection } from '@/components/home/stats-section'
import { ServicesSection } from '@/components/home/services-section'
import { BrandsSection } from '@/components/home/brands-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <CategoriesSection />
      <PromoBanner />
      <FeaturedProducts />
      <StatsSection />
      <ServicesSection />
      <BrandsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
