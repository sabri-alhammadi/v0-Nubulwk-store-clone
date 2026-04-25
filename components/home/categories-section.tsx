"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { categories } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export function CategoriesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-primary mb-4 inline-block">استكشف خدماتنا</span>
          <h2 className="text-gradient section-title mb-4">تصفح الأقسام</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            اكتشف مجموعتنا المتنوعة من خدمات الدعاية والإعلان والطباعة الاحترافية
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div key={category.slug} variants={itemVariants}>
              <Link
                href={`/products?category=${category.slug}`}
                className="group block"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-card shadow-md hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border border-border hover:border-primary/50 glow-sm">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
                    <motion.div
                      className="transform group-hover:-translate-y-3 transition-transform duration-300"
                    >
                      <h3 className="font-poppins font-bold text-white text-lg mb-1 group-hover:text-accent transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-white/80 text-sm">
                        {category.productCount} منتج
                      </span>
                      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-100 scale-90">
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent px-4 py-2 rounded-full shadow-lg">
                          تصفح الآن
                          <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Corner decoration */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all group"
          >
            عرض جميع المنتجات
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
