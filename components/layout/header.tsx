"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingCart, Menu, X, Phone, User, Mail, MapPin, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { useCart } from '@/lib/cart-context'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { categories } from '@/lib/data'

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/products', label: 'المنتجات' },
  { href: '/about', label: 'من نحن' },
  { href: '/contact', label: 'اتصل بنا' },
]

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { totalItems, isCartOpen, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gradient-to-l from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        <div className="container mx-auto px-4 py-2.5 relative">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 rounded-full p-1">
                  <Phone className="h-3 w-3" />
                </div>
                <span className="font-medium">+966 50 000 0000</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <div className="bg-white/20 rounded-full p-1">
                  <Mail className="h-3 w-3" />
                </div>
                <span>info@nobelinnovation.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1">
              <MapPin className="h-3 w-3" />
              <span>الرياض، المملكة العربية السعودية</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <motion.div 
        className={`bg-card/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'shadow-lg shadow-primary/5' : 'shadow-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile menu button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="relative">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-gradient-to-b from-card to-muted/30">
                <SheetTitle className="text-right text-xl font-bold">القائمة</SheetTitle>
                <nav className="mt-8 flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg p-3 transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm font-bold text-primary mb-3 px-3">الأقسام</p>
                    {categories.map((category, index) => (
                      <motion.div
                        key={category.slug}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: (navLinks.length + index) * 0.05 }}
                      >
                        <Link
                          href={`/products?category=${category.slug}`}
                          className="block py-2.5 px-3 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl p-3 shadow-lg shadow-primary/25">
                  <span className="text-2xl font-bold">نبل</span>
                </div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-secondary rounded-full" />
              </motion.div>
              <div className="hidden sm:block">
                <p className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">نبل وابتكار</p>
                <p className="text-xs text-muted-foreground">للدعاية والإعلان</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-medium text-foreground hover:text-primary px-4 py-2 rounded-lg hover:bg-primary/5 transition-all group"
                >
                  {link.label}
                  <span className="absolute bottom-0 right-4 left-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right rounded-full" />
                </Link>
              ))}
              <div className="relative group">
                <button className="flex items-center gap-1 font-medium text-foreground hover:text-primary px-4 py-2 rounded-lg hover:bg-primary/5 transition-all">
                  الأقسام
                  <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-card rounded-xl shadow-xl shadow-foreground/5 border p-2 min-w-[200px]">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/products?category=${category.slug}`}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Search bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md">
              <div className="relative w-full group">
                <Input
                  type="search"
                  placeholder="ابحث عن منتج..."
                  className="w-full pr-4 pl-12 h-11 bg-muted/50 border-transparent focus:border-primary focus:bg-card rounded-xl transition-all"
                />
                <div className="absolute left-1 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-lg p-2 group-focus-within:scale-110 transition-transform">
                  <Search className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              {/* Mobile search toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-xl"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </Button>

              {/* Account */}
              <Button variant="ghost" size="icon" className="hidden sm:flex rounded-xl hover:bg-primary/10 hover:text-primary">
                <User className="h-5 w-5" />
              </Button>

              {/* Cart */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative rounded-xl hover:bg-primary/10 hover:text-primary"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <AnimatePresence>
                    {totalItems > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg"
                      >
                        {totalItems}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile search bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-4 md:hidden overflow-hidden"
              >
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="ابحث عن منتج..."
                    className="w-full pr-4 pl-12 h-11 bg-muted/50 border-transparent focus:border-primary rounded-xl"
                  />
                  <div className="absolute left-1 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-lg p-2">
                    <Search className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Promo Banner */}
      <div className="bg-gradient-to-l from-secondary via-secondary to-secondary/90 text-secondary-foreground py-2 overflow-hidden">
        <motion.div
          className="flex items-center justify-center gap-2 text-sm font-medium"
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
          شحن مجاني للطلبات فوق 200 ريال | خصم 15% على أول طلب
          <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
        </motion.div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar open={isCartOpen} onOpenChange={setIsCartOpen} />
    </header>
  )
}
