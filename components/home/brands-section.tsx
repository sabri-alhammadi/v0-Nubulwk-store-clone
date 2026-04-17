"use client"

import { motion } from 'framer-motion'

const brands = [
  { name: 'أرامكو', initials: 'أر' },
  { name: 'سابك', initials: 'سا' },
  { name: 'الراجحي', initials: 'رج' },
  { name: 'موبايلي', initials: 'مو' },
  { name: 'STC', initials: 'ST' },
  { name: 'الأهلي', initials: 'أه' },
]

export function BrandsSection() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground">يثق بنا أكثر من 500 شركة ومؤسسة</p>
        </motion.div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 bg-card rounded-2xl shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex items-center justify-center border border-border/50 group-hover:border-primary/20">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-muted-foreground/50 group-hover:text-primary transition-colors">
                    {brand.initials}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{brand.name}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
