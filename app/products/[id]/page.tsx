"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { ShoppingCart, Heart, Share2, Check, ChevronLeft, Minus, Plus, Star, Truck, Shield, RotateCcw, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'
import { getProductById, getProductsByCategory, products } from '@/lib/data'
import { ProductCard } from '@/components/products/product-card'
import { ReviewsSection } from '@/components/products/reviews-section'

interface PageProps {
  params: { id: string }
}

export default function ProductPage({ params }: PageProps) {
  const id = params.id
  const product = getProductById(id)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  if (!product) {
    notFound()
  }

  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter(p => p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      })
    }
  }

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Page Header */}
      <div className="bg-card border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <ChevronLeft className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary transition-colors">المنتجات</Link>
            <ChevronLeft className="h-4 w-4" />
            <Link
              href={`/products?category=${product.categorySlug}`}
              className="hover:text-primary transition-colors"
            >
              {product.category}
            </Link>
            <ChevronLeft className="h-4 w-4" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-card shadow-2xl shadow-primary/10 border border-border/50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              
              {/* Badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {product.badge && (
                  <span className="bg-secondary text-secondary-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    {product.badge}
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-destructive text-destructive-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    خصم {discount}%
                  </span>
                )}
              </div>
              
              {/* Wishlist */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 left-4 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-destructive hover:text-destructive-foreground transition-colors"
              >
                <Heart className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <Link
              href={`/products?category=${product.categorySlug}`}
              className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full hover:bg-primary/20 transition-colors w-fit mb-4"
            >
              {product.category}
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < 4 ? 'fill-secondary text-secondary' : 'fill-muted text-muted'}`} />
                ))}
              </div>
              <span className="text-muted-foreground">(24 تقييم)</span>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-l from-primary/10 to-transparent rounded-2xl p-6 mb-6">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-primary">{product.price}</span>
                <span className="text-xl text-primary">ر.س</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice} ر.س
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-sm text-green-600 font-medium mt-2">
                  وفر {product.originalPrice - product.price} ر.س
                </p>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              {product.description}
            </p>

            {/* Features */}
            {product.features && (
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-4">المميزات:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground bg-muted/50 rounded-xl p-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stock Status */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-3 h-3 rounded-full animate-pulse ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'متوفر في المخزون' : 'غير متوفر حالياً'}
              </span>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center bg-muted/50 rounded-xl overflow-hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none h-12"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-16 text-center font-bold text-lg">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none h-12"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                <Button
                  size="lg"
                  className="w-full h-12 text-lg rounded-xl shadow-lg shadow-primary/25"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 ml-2" />
                  أضف للسلة
                </Button>
              </motion.div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6 border-t border-border/50">
              <Button variant="outline" className="rounded-xl">
                <Heart className="h-4 w-4 ml-2" />
                أضف للمفضلة
              </Button>
              <Button variant="outline" className="rounded-xl">
                <Share2 className="h-4 w-4 ml-2" />
                مشاركة
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border/50">
              {[
                { icon: Truck, label: 'شحن سريع' },
                { icon: Shield, label: 'ضمان الجودة' },
                { icon: RotateCcw, label: 'استرجاع سهل' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-card rounded-2xl p-8 border border-border/50">
            <ReviewsSection productId={id} />
          </div>
        </motion.section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">منتجات مشابهة</h2>
                <p className="text-muted-foreground">قد تعجبك هذه المنتجات أيضاً</p>
              </div>
              <Button variant="outline" className="rounded-xl" asChild>
                <Link href={`/products?category=${product.categorySlug}`}>
                  عرض الكل
                  <ChevronLeft className="h-4 w-4 mr-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return products.map(product => ({
    id: product.id,
  }))
}
