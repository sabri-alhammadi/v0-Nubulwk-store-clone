"use client"

import { motion } from 'framer-motion'
import { Truck, Palette, Shield, Clock, Headphones, Award } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'تصميم مجاني',
    description: 'فريق تصميم محترف يقدم لك تصاميم إبداعية مجانية لجميع الطلبات',
    color: 'from-primary/20 to-primary/5',
    iconColor: 'text-primary',
  },
  {
    icon: Truck,
    title: 'شحن سريع',
    description: 'نوصل طلبك إلى باب منزلك في أسرع وقت ممكن مع خدمة التتبع',
    color: 'from-secondary/20 to-secondary/5',
    iconColor: 'text-secondary',
  },
  {
    icon: Shield,
    title: 'ضمان الجودة',
    description: 'نضمن لك أعلى معايير الجودة في جميع منتجاتنا وخدماتنا',
    color: 'from-green-500/20 to-green-500/5',
    iconColor: 'text-green-600',
  },
  {
    icon: Clock,
    title: 'تسليم في الموعد',
    description: 'نلتزم بمواعيد التسليم المتفق عليها دون أي تأخير',
    color: 'from-amber-500/20 to-amber-500/5',
    iconColor: 'text-amber-600',
  },
  {
    icon: Headphones,
    title: 'دعم متواصل',
    description: 'فريق دعم فني متاح على مدار الساعة للإجابة عن استفساراتك',
    color: 'from-cyan-500/20 to-cyan-500/5',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Award,
    title: 'خبرة طويلة',
    description: 'أكثر من 10 سنوات من الخبرة في مجال الدعاية والإعلان',
    color: 'from-rose-500/20 to-rose-500/5',
    iconColor: 'text-rose-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function ServicesSection() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wider mb-3">لماذا نبل وابتكار؟</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">مميزاتنا</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            نقدم لك أفضل الخدمات بأعلى معايير الجودة والاحترافية
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${service.color} border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5`}>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-card shadow-lg mb-6 ${service.iconColor} group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-7 w-7" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                
                {/* Decorative corner */}
                <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-r-2 border-primary/10 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
