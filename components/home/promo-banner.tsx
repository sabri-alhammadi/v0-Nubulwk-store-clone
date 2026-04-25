"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, Percent, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PromoBanner() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Banner 1 - Big Sale */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-l from-primary via-primary to-primary/90 p-8 md:p-10 min-h-[280px]"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-50" style={{backgroundImage: 'url(\"data:image/svg+xml,%3Csvg width=\\\"100\\\" height=\\\"100\\\" viewBox=\\\"0 0 100 100\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"%3E%3Cpath d=\\\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\\\" fill=\\\"%23ffffff\\\" fill-opacity=\\\"0.05\\\" fill-rule=\\\"evenodd\\\"/\u003E%3C/svg%3E\")'}} />
            
            {/* Glow effect */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-secondary text-secondary-foreground rounded-full p-2">
                  <Percent className="h-4 w-4" />
                </div>
                <span className="text-white/90 font-medium">عرض حصري</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                خصم يصل إلى
                <span className="text-secondary"> 30% </span>
              </h3>
              <p className="text-white/80 mb-6 max-w-xs">
                على جميع خدمات الطباعة واللوحات الإعلانية
              </p>
              
              <Button variant="secondary" className="rounded-xl group/btn" asChild>
                <Link href="/products">
                  تسوق الآن
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover/btn:-translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            {/* Discount badge */}
            <div className="absolute top-6 left-6 bg-secondary text-secondary-foreground rounded-full w-20 h-20 flex flex-col items-center justify-center font-bold shadow-lg group-hover:rotate-12 transition-transform">
              <span className="text-2xl">30%</span>
              <span className="text-xs">خصم</span>
            </div>
          </motion.div>
          
          {/* Banner 2 - New Arrivals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-l from-secondary via-secondary to-secondary/90 p-8 md:p-10 min-h-[280px]"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-50" style={{backgroundImage: 'url(\"data:image/svg+xml,%3Csvg width=\\\"60\\\" height=\\\"60\\\" viewBox=\\\"0 0 60 60\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"%3E%3Cg fill=\\\"none\\\" fill-rule=\\\"evenodd\\\"%3E%3Cg fill=\\\"%23ffffff\\\" fill-opacity=\\\"0.08\\\"%3E%3Cpath d=\\\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\\"/\u003E%3C/g%3E%3C/g%3E%3C/svg%3E\")'}} />
            
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white/20 backdrop-blur-sm text-white rounded-full p-2">
                  <Clock className="h-4 w-4" />
                </div>
                <span className="text-white/90 font-medium">عرض محدود</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                وصلت
                <span className="text-primary-foreground"> منتجات جديدة </span>
              </h3>
              <p className="text-white/80 mb-6 max-w-xs">
                اكتشف أحدث تشكيلاتنا من الهدايا الدعائية والمطبوعات
              </p>
              
              <Button className="rounded-xl bg-white text-secondary hover:bg-white/90 group/btn" asChild>
                <Link href="/products">
                  اكتشف المزيد
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover/btn:-translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            {/* New badge */}
            <div className="absolute top-6 left-6 bg-white text-secondary rounded-xl px-4 py-2 font-bold shadow-lg group-hover:rotate-3 transition-transform">
              جديد
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
