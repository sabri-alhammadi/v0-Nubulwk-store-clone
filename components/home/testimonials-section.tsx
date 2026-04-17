import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">آراء عملائنا</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نفخر بثقة عملائنا ونسعى دائماً لتحقيق رضاهم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-foreground mb-4 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
