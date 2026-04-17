"use client"

import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ShoppingCart, Heart, Share2, Check, ChevronLeft, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'
import { getProductById, getProductsByCategory, products } from '@/lib/data'
import { ProductCard } from '@/components/products/product-card'

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: PageProps) {
  const { id } = use(params)
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

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary transition-colors">
            الرئيسية
          </Link>
          <ChevronLeft className="h-4 w-4" />
          <Link href="/products" className="hover:text-primary transition-colors">
            المنتجات
          </Link>
          <ChevronLeft className="h-4 w-4" />
          <Link
            href={`/products?category=${product.categorySlug}`}
            className="hover:text-primary transition-colors"
          >
            {product.category}
          </Link>
          <ChevronLeft className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.badge && (
              <span className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1.5 rounded">
                {product.badge}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <Link
              href={`/products?category=${product.categorySlug}`}
              className="text-primary text-sm font-medium hover:underline mb-2"
            >
              {product.category}
            </Link>

            <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">{product.price} ر.س</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {product.originalPrice} ر.س
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-secondary/20 text-secondary px-2 py-1 rounded text-sm font-semibold">
                  وفر {product.originalPrice - product.price} ر.س
                </span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Features */}
            {product.features && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">المميزات:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-6">
              <div
                className={`w-3 h-3 rounded-full ${
                  product.inStock ? 'bg-green-500' : 'bg-red-500'
                }`}
              />
              <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                {product.inStock ? 'متوفر في المخزون' : 'غير متوفر'}
              </span>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5 ml-2" />
                أضف للسلة
              </Button>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4 border-t">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 ml-2" />
                أضف للمفضلة
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 ml-2" />
                مشاركة
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">منتجات مشابهة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
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
