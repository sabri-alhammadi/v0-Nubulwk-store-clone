"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart, Eye, Star, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'
import type { Product } from '@/lib/data'

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    })
  }

  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border border-border/50">
        {/* Image container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {product.badge && (
              <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                {product.badge}
              </span>
            )}
            {discount > 0 && (
              <span className="bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                خصم {discount}%
              </span>
            )}
          </div>
          
          {/* Wishlist button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-3 left-3 w-9 h-9 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive hover:text-destructive-foreground"
          >
            <Heart className="h-4 w-4" />
          </motion.button>
          
          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick actions */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
              <Button
                className="w-full rounded-xl shadow-lg"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 ml-2" />
                أضف للسلة
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="icon" 
                variant="secondary" 
                className="rounded-xl shadow-lg"
                asChild
              >
                <Link href={`/products/${product.id}`}>
                  <Eye className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <Link
            href={`/products?category=${product.categorySlug}`}
            className="inline-block text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full hover:bg-primary/20 transition-colors"
          >
            {product.category}
          </Link>
          
          <Link href={`/products/${product.id}`}>
            <h3 className="font-bold mt-3 text-foreground hover:text-primary transition-colors line-clamp-1 text-lg">
              {product.name}
            </h3>
          </Link>
          
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < 4 ? 'fill-secondary text-secondary' : 'fill-muted text-muted'}`} 
              />
            ))}
            <span className="text-xs text-muted-foreground mr-1">(24 تقييم)</span>
          </div>
          
          {/* Price */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-xl text-primary">{product.price}</span>
              <span className="text-sm text-muted-foreground">ر.س</span>
            </div>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {product.originalPrice} ر.س
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
