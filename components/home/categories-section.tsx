import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { categories } from '@/lib/data'

export function CategoriesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">تصفح الأقسام</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعتنا المتنوعة من خدمات الدعاية والإعلان والطباعة
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="group"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-lg transition-all duration-300">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                  <h3 className="font-bold text-background text-sm md:text-base mb-1">
                    {category.name}
                  </h3>
                  <span className="text-background/80 text-xs">
                    {category.productCount} منتج
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            عرض جميع الأقسام
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
