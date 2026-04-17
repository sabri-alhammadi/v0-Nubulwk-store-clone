import { HeroCarousel } from '@/components/home/hero-carousel'
import { CategoriesSection } from '@/components/home/categories-section'
import { FeaturedProducts } from '@/components/home/featured-products'
import { ServicesSection } from '@/components/home/services-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <CategoriesSection />
      <FeaturedProducts />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
