"use client"

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wider mb-3">شهادات العملاء</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">آراء عملائنا</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            نفخر بثقة عملائنا ونسعى دائماً لتحقيق رضاهم وتجاوز توقعاتهم
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl p-8 shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border border-border/50 h-full">
                {/* Quote icon */}
                <div className="absolute -top-4 right-8">
                  <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-3 shadow-lg shadow-primary/25">
                    <Quote className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="pt-4">
                  <p className="text-foreground leading-relaxed mb-6 text-lg">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'fill-secondary text-secondary' : 'fill-muted text-muted'}`} 
                      />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-primary/10 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
