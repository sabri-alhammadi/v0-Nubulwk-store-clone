import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-l from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            هل لديك مشروع؟ تواصل معنا الآن
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
            فريقنا جاهز لمساعدتك في تحويل أفكارك إلى واقع. احصل على استشارة مجانية وعرض سعر خاص
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                <MessageCircle className="h-5 w-5 ml-2" />
                تواصل معنا
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="tel:+966500000000">
                <Phone className="h-5 w-5 ml-2" />
                اتصل الآن
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
