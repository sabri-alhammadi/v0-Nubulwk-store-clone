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
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wider mb-3">استكشف خدماتنا</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">تصفح الأقسام</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            اكتشف مجموعتنا المتنوعة من خدمات الدعاية والإعلان والطباعة الاحترافية
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
        >
          {categories.map((category, index) => (
            <motion.div key={category.slug} variants={itemVariants}>
              <Link
                href={`/products?category=${category.slug}`}
                className="group block"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-card shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
                    <motion.div
                      className="transform group-hover:-translate-y-2 transition-transform duration-300"
                    >
                      <h3 className="font-bold text-background text-lg mb-1">
                        {category.name}
                      </h3>
                      <span className="text-background/70 text-sm">
                        {category.productCount} منتج
                      </span>
                      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-flex items-center gap-1 text-sm text-primary-foreground bg-primary px-3 py-1 rounded-full">
                          تصفح
                          <ArrowLeft className="h-3 w-3" />
                        </span>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Corner decoration */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-r-2 border-background/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-l-2 border-background/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
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
