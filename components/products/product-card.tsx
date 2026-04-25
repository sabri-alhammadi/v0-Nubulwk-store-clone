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
      <div className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 border border-border hover:border-primary/30">
        {/* Image container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {product.badge && (
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="badge-accent shadow-lg animate-pulse"
              >
                {product.badge}
              </motion.span>
            )}
            {discount > 0 && (
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="badge-success shadow-lg"
              >
                خصم {discount}%
              </motion.span>
            )}
          </div>
          
          {/* Wishlist button */}
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-3 left-3 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive hover:text-white"
          >
            <Heart className="h-5 w-5" />
          </motion.button>
          
          {/* Quick actions */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
              <Button
                className="w-full rounded-xl shadow-lg glow-primary font-semibold"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 ml-2" />
                أضف للسلة
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="icon" 
                className="rounded-xl shadow-lg bg-accent hover:bg-accent/80 text-white"
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
            className="badge-primary hover:bg-primary/20 transition-colors cursor-pointer"
          >
            {product.category}
          </Link>
          
          <Link href={`/products/${product.id}`}>
            <h3 className="font-poppins font-bold mt-3 text-foreground hover:text-primary transition-colors line-clamp-1 text-lg">
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
                className={`h-4 w-4 ${i < 4 ? 'fill-accent text-accent' : 'fill-muted text-muted'}`} 
              />
            ))}
            <span className="text-xs text-muted-foreground mr-1">(24 تقييم)</span>
          </div>
          
          {/* Price */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
            <div className="flex items-baseline gap-2">
              <span className="font-poppins font-bold text-2xl text-gradient">
                {product.price}
              </span>
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
