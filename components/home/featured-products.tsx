import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ProductCard } from '@/components/products/product-card'
import { featuredProducts } from '@/lib/data'

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">منتجات مميزة</h2>
            <p className="text-muted-foreground">أفضل منتجاتنا وعروضنا الحصرية</p>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            عرض الكل
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            عرض الكل
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
