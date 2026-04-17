"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useCart } from '@/lib/cart-context'
import type { Product } from '@/lib/data'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
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

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full" asChild>
            <Link href={`/products/${product.id}`}>
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <Link
          href={`/products?category=${product.categorySlug}`}
          className="text-xs text-primary hover:underline"
        >
          {product.category}
        </Link>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold mt-1 text-foreground hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-primary">{product.price} ر.س</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {product.originalPrice} ر.س
              </span>
            )}
          </div>
        </div>
        <Button
          className="w-full mt-3"
          size="sm"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 ml-2" />
          أضف للسلة
        </Button>
      </CardContent>
    </Card>
  )
}
