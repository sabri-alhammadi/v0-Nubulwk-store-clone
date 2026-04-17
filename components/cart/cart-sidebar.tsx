"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Package } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'

interface CartSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartSidebar({ open, onOpenChange }: CartSidebarProps) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart, totalItems } = useCart()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-full sm:max-w-md flex flex-col bg-gradient-to-b from-card to-muted/30 p-0">
        <SheetHeader className="p-6 border-b border-border/50 bg-card">
          <SheetTitle className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 text-primary" />
              </div>
              <div>
                <span className="block">سلة التسوق</span>
                <span className="text-sm font-normal text-muted-foreground">{totalItems} منتج</span>
              </div>
            </div>
            {items.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={clearCart}
              >
                <Trash2 className="h-4 w-4 ml-1" />
                إفراغ
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center p-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-28 h-28 rounded-2xl bg-muted flex items-center justify-center"
            >
              <Package className="h-14 w-14 text-muted-foreground" />
            </motion.div>
            <div>
              <p className="font-bold text-xl mb-2">سلة التسوق فارغة</p>
              <p className="text-muted-foreground">
                ابدأ التسوق وأضف منتجاتك المفضلة
              </p>
            </div>
            <Button className="rounded-xl" onClick={() => onOpenChange(false)} asChild>
              <Link href="/products">
                تصفح المنتجات
                <ArrowLeft className="h-4 w-4 mr-2" />
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-4">
              <AnimatePresence>
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-4 p-4 bg-card rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-muted">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                        <p className="font-bold text-primary mt-1">{item.price} ر.س</p>
                        
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center bg-muted/50 rounded-lg overflow-hidden">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-bold">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </div>

            <div className="border-t border-border/50 p-6 bg-card space-y-4">
              {/* Subtotal */}
              <div className="flex items-center justify-between text-muted-foreground">
                <span>المجموع الفرعي:</span>
                <span>{totalPrice.toFixed(2)} ر.س</span>
              </div>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>الشحن:</span>
                <span className="text-green-600 font-medium">مجاني</span>
              </div>
              
              {/* Total */}
              <div className="flex items-center justify-between text-xl font-bold pt-4 border-t border-border/50">
                <span>الإجمالي:</span>
                <span className="text-primary">{totalPrice.toFixed(2)} ر.س</span>
              </div>
              
              <div className="grid gap-3 pt-2">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="w-full rounded-xl shadow-lg shadow-primary/25" asChild>
                    <Link href="/checkout" onClick={() => onOpenChange(false)}>
                      إتمام الشراء
                      <ArrowLeft className="h-4 w-4 mr-2" />
                    </Link>
                  </Button>
                </motion.div>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-xl"
                  onClick={() => onOpenChange(false)}
                  asChild
                >
                  <Link href="/products">متابعة التسوق</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
