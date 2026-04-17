"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { ProductCard } from '@/components/products/product-card'
import { featuredProducts } from '@/lib/data'
import { Button } from '@/components/ui/button'

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider mb-3">
              <Sparkles className="h-4 w-4" />
              الأكثر مبيعاً
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">منتجات مميزة</h2>
            <p className="text-muted-foreground text-lg max-w-lg">
              أفضل منتجاتنا وعروضنا الحصرية المختارة بعناية لتلبية احتياجاتك
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg" className="rounded-xl group" asChild>
              <Link href="/products">
                عرض جميع المنتجات
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 8).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:hidden"
        >
          <Button variant="outline" size="lg" className="rounded-xl group" asChild>
            <Link href="/products">
              عرض جميع المنتجات
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
