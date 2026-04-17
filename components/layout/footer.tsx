import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react'
import { categories } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground rounded-lg p-2">
                <span className="text-xl font-bold">نبل</span>
              </div>
              <div>
                <p className="font-bold">نبل وابتكار</p>
                <p className="text-xs text-background/70">للدعاية والإعلان</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              شركة متخصصة في خدمات الدعاية والإعلان والطباعة الرقمية. نقدم أفضل الحلول الإبداعية لتعزيز علامتك التجارية.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/80 hover:text-primary transition-colors text-sm">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-background/80 hover:text-primary transition-colors text-sm">
                  المنتجات
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/80 hover:text-primary transition-colors text-sm">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-primary transition-colors text-sm">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4">الأقسام</h3>
            <ul className="space-y-2">
              {categories.slice(0, 5).map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-background/80 text-sm">
                  الرياض، المملكة العربية السعودية
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-background/80 text-sm" dir="ltr">
                  +966 50 000 0000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-background/80 text-sm">
                  info@nublandebtikar.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>© 2026 نبل وابتكار للدعاية والإعلان. جميع الحقوق محفوظة.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
