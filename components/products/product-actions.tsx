"use client"

import { useState } from 'react'
import { ShoppingCart, Heart, Share2, Minus, Plus, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'
import type { Product } from '@/lib/data'

interface ProductActionsProps {
  product: Product
}

export function ProductActions({ product }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCart()

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
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: product.name,
        text: `${product.name} - ${product.description}`,
        url: window.location.href,
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-muted-foreground">الكمية:</span>
        <div className="flex items-center border border-border/50 rounded-lg p-1">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-2 hover:bg-muted transition-colors"
            aria-label="تقليل الكمية"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-12 text-center font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-2 hover:bg-muted transition-colors"
            aria-label="زيادة الكمية"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Price Display */}
      <div className="space-y-2">
        <div className="text-3xl font-bold text-primary">
          {(product.price * quantity).toLocaleString('ar-SA')} ر.س
        </div>
        {product.originalPrice && (
          <div className="text-lg text-muted-foreground line-through">
            {(product.originalPrice * quantity).toLocaleString('ar-SA')} ر.س
          </div>
        )}
      </div>

      {/* Add to Cart Button */}
      <Button
        onClick={handleAddToCart}
        size="lg"
        className="w-full rounded-xl gap-2"
        disabled={isAdded}
      >
        {isAdded ? (
          <>
            <Check className="h-5 w-5" />
            تمت الإضافة
          </>
        ) : (
          <>
            <ShoppingCart className="h-5 w-5" />
            أضف إلى السلة
          </>
        )}
      </Button>

      {/* Secondary Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          size="lg"
          className="rounded-xl gap-2"
          onClick={handleShare}
        >
          <Share2 className="h-5 w-5" />
          شارك
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-xl gap-2"
        >
          <Heart className="h-5 w-5" />
          حفظ
        </Button>
      </div>
    </div>
  )
}
