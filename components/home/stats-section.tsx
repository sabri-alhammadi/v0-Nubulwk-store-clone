"use client"

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Users, Package, Award, ThumbsUp } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'عميل سعيد',
    color: 'from-primary/20 to-primary/5',
    iconColor: 'text-primary bg-primary/20',
  },
  {
    icon: Package,
    value: 15000,
    suffix: '+',
    label: 'طلب منجز',
    color: 'from-secondary/20 to-secondary/5',
    iconColor: 'text-secondary bg-secondary/20',
  },
  {
    icon: Award,
    value: 10,
    suffix: '+',
    label: 'سنوات خبرة',
    color: 'from-green-500/20 to-green-500/5',
    iconColor: 'text-green-600 bg-green-100',
  },
  {
    icon: ThumbsUp,
    value: 99,
    suffix: '%',
    label: 'رضا العملاء',
    color: 'from-amber-500/20 to-amber-500/5',
    iconColor: 'text-amber-600 bg-amber-100',
  },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString('ar-SA')}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`relative bg-card rounded-2xl p-6 md:p-8 text-center shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border border-border/50 overflow-hidden`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-50`} />
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl ${stat.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-7 w-7" />
                </div>
                
                {/* Value */}
                <div className="relative text-3xl md:text-4xl font-bold text-foreground mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <p className="relative text-muted-foreground font-medium">{stat.label}</p>
                
                {/* Decorative corner */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-r-2 border-primary/10 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
