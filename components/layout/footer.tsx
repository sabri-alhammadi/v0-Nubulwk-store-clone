"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ArrowUp, Send } from 'lucide-react'
import { categories } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      {/* Newsletter Section */}
      <div className="relative border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold mb-2">اشترك في نشرتنا البريدية</h3>
              <p className="text-background/70">احصل على آخر العروض والأخبار مباشرة في بريدك</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md gap-2">
              <Input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 rounded-xl"
              />
              <Button className="rounded-xl px-6">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl p-3 shadow-lg shadow-primary/25 group-hover:scale-105 transition-transform">
                <span className="text-2xl font-bold">نبل</span>
              </div>
              <div>
                <p className="font-bold text-lg">نبل وابتكار</p>
                <p className="text-xs text-background/60">للدعاية والإعلان</p>
              </div>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6">
              شركة متخصصة في خدمات الدعاية والإعلان والطباعة الرقمية. نقدم أفضل الحلول الإبداعية لتعزيز علامتك التجارية.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-xl flex items-center justify-center text-background/60 hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'الرئيسية' },
                { href: '/products', label: 'المنتجات' },
                { href: '/about', label: 'من نحن' },
                { href: '/contact', label: 'اتصل بنا' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-background/70 hover:text-primary hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              الأقسام
            </h3>
            <ul className="space-y-3">
              {categories.slice(0, 5).map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="text-background/70 hover:text-secondary hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-secondary transition-all rounded-full" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              تواصل معنا
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-background/70 pt-2">
                  الرياض، المملكة العربية السعودية
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-background/70" dir="ltr">
                  +966 50 000 0000
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-background/70">
                  info@nobelinnovation.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/10 relative">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">
              © 2026 نبل وابتكار للدعاية والإعلان. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-background/50 hover:text-primary transition-colors text-sm">
                سياسة الخصوصية
              </Link>
              <Link href="#" className="text-background/50 hover:text-primary transition-colors text-sm">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 w-12 h-12 bg-primary text-primary-foreground rounded-xl shadow-lg shadow-primary/25 flex items-center justify-center z-50 hover:bg-primary/90 transition-colors"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  )
}
