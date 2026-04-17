"use client"

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const contactInfo = [
  {
    icon: MapPin,
    title: 'العنوان',
    details: ['الرياض، المملكة العربية السعودية', 'شارع الملك فهد، حي العليا'],
  },
  {
    icon: Phone,
    title: 'الهاتف',
    details: ['+966 50 000 0000', '+966 11 000 0000'],
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    details: ['info@nublandebtikar.com', 'sales@nublandebtikar.com'],
  },
  {
    icon: Clock,
    title: 'ساعات العمل',
    details: ['السبت - الخميس: 9 صباحاً - 9 مساءً', 'الجمعة: مغلق'],
  },
]

const services = [
  'طباعة رقمية',
  'لوحات إعلانية',
  'ستيكرات وملصقات',
  'هدايا دعائية',
  'مطبوعات تجارية',
  'أختام وطوابع',
  'خدمة أخرى',
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-8">
            <Link href="/" className="hover:text-primary-foreground transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="h-4 w-4" />
            <span>اتصل بنا</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              تواصل معنا
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              نحن هنا لمساعدتك! تواصل معنا للحصول على استشارة مجانية أو عرض سعر لمشروعك
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary-foreground blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">أرسل لنا رسالة</h2>
              <p className="text-muted-foreground mb-8">
                املأ النموذج أدناه وسيقوم فريقنا بالرد عليك في أقرب وقت ممكن
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">تم إرسال رسالتك بنجاح!</h3>
                  <p className="text-green-700">
                    شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    إرسال رسالة أخرى
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم الكامل</Label>
                      <Input id="name" required placeholder="أدخل اسمك" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الجوال</Label>
                      <Input id="phone" type="tel" required placeholder="05xxxxxxxx" dir="ltr" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" required placeholder="example@email.com" dir="ltr" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">الخدمة المطلوبة</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر الخدمة" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">الموضوع</Label>
                    <Input id="subject" required placeholder="موضوع الرسالة" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">الرسالة</Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="اكتب رسالتك هنا..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'جاري الإرسال...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 ml-2" />
                        إرسال الرسالة
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">موقعنا</h2>
              <p className="text-muted-foreground mb-8">
                يسعدنا استقبالكم في مقرنا الرئيسي في الرياض
              </p>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.5756456789!2d46.6884!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDEnMTguMiJF!5e0!3m2!1sen!2ssa!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقعنا على الخريطة"
                />
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                <h3 className="font-bold text-foreground mb-4">تواصل سريع</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1" asChild>
                    <a href="tel:+966500000000">
                      <Phone className="h-4 w-4 ml-2" />
                      اتصل بنا
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 ml-2" />
                      واتساب
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">الأسئلة الشائعة</h2>
            <p className="text-muted-foreground">إجابات على الأسئلة الأكثر شيوعاً</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'ما هي مدة التوصيل؟',
                a: 'تتراوح مدة التوصيل من 3 إلى 5 أيام عمل حسب المنتج والموقع.',
              },
              {
                q: 'هل تقدمون خدمة التصميم؟',
                a: 'نعم، نقدم خدمة التصميم المجاني لجميع الطلبات.',
              },
              {
                q: 'ما هي طرق الدفع المتاحة؟',
                a: 'نقبل الدفع نقداً عند الاستلام أو عبر البطاقات البنكية أو التحويل البنكي.',
              },
              {
                q: 'هل يمكن إلغاء الطلب؟',
                a: 'يمكن إلغاء الطلب قبل بدء التنفيذ. يرجى التواصل معنا في أقرب وقت.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
