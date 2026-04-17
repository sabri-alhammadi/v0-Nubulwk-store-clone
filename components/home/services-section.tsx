import { Palette, Truck, Shield, Headphones } from 'lucide-react'
import { services } from '@/lib/data'

const iconMap = {
  Palette,
  Truck,
  Shield,
  Headphones,
}

export function ServicesSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">لماذا نبل وابتكار؟</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            نقدم لكم أفضل الخدمات بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div
                key={service.id}
                className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
