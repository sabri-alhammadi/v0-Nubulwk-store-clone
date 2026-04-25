"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle, Sparkles, ArrowLeft } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-l from-primary via-primary to-primary/90" />
          <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'url(\"data:image/svg+xml,%3Csvg width=\\\"60\\\" height=\\\"60\\\" viewBox=\\\"0 0 60 60\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"%3E%3Cg fill=\\\"none\\\" fill-rule=\\\"evenodd\\\"%3E%3Cg fill=\\\"%23ffffff\\\" fill-opacity=\\\"0.05\\\"%3E%3Cpath d=\\\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\\"/\u003E%3C/g%3E%3C/g%3E%3C/svg%3E\")'}} />
          
          {/* Decorative blurs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          {/* Content */}
          <div className="relative p-10 md:p-16 text-center text-primary-foreground">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">استشارة مجانية</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold mb-6 text-balance leading-tight"
            >
              هل لديك مشروع؟
              <br />
              <span className="text-secondary">تواصل معنا الآن</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-lg md:text-xl leading-relaxed"
            >
              فريقنا جاهز لمساعدتك في تحويل أفكارك إلى واقع. احصل على استشارة مجانية وعرض سعر خاص لمشروعك
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-xl shadow-lg group" asChild>
                <Link href="/contact">
                  <MessageCircle className="h-5 w-5 ml-2" />
                  تواصل معنا
                  <ArrowLeft className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-xl bg-transparent border-2 border-white/30 text-primary-foreground hover:bg-white/10 backdrop-blur-sm" 
                asChild
              >
                <Link href="tel:+966500000000">
                  <Phone className="h-5 w-5 ml-2" />
                  اتصل الآن
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
