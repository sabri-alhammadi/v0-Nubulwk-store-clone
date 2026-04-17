"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Minus, Plus, Trash2, ShoppingBag, CreditCard, Truck, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useCart } from '@/lib/cart-context'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('cash')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const shippingCost = totalPrice >= 200 ? 0 : 25
  const finalTotal = totalPrice + shippingCost

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate order submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    clearCart()
    router.push('/checkout/success')
  }

  if (items.length === 0) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-4">سلة التسوق فارغة</h1>
            <p className="text-muted-foreground mb-6">
              لم تقم بإضافة أي منتجات للسلة بعد. ابدأ التسوق الآن!
            </p>
            <Button asChild>
              <Link href="/products">تصفح المنتجات</Link>
            </Button>
          </div>
        </div>
      </div>
    )
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
          <span className="text-foreground">إتمام الشراء</span>
        </nav>

        <h1 className="text-3xl font-bold text-foreground mb-8">إتمام الشراء</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-6">معلومات التواصل</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">الاسم الأول</Label>
                    <Input id="firstName" required placeholder="أدخل اسمك الأول" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">الاسم الأخير</Label>
                    <Input id="lastName" required placeholder="أدخل اسمك الأخير" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الجوال</Label>
                    <Input id="phone" type="tel" required placeholder="05xxxxxxxx" dir="ltr" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" required placeholder="example@email.com" dir="ltr" />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-6">عنوان الشحن</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">المدينة</Label>
                      <Input id="city" required placeholder="المدينة" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="district">الحي</Label>
                      <Input id="district" required placeholder="الحي" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="street">الشارع</Label>
                    <Input id="street" required placeholder="اسم الشارع" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">تفاصيل العنوان</Label>
                    <Textarea
                      id="address"
                      placeholder="رقم المبنى، الطابق، معالم قريبة..."
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-6">طريقة الدفع</h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-3">
                    <label
                      htmlFor="cash"
                      className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                        paymentMethod === 'cash' ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                      }`}
                    >
                      <RadioGroupItem value="cash" id="cash" />
                      <Truck className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">الدفع عند الاستلام</p>
                        <p className="text-sm text-muted-foreground">ادفع نقداً عند استلام طلبك</p>
                      </div>
                    </label>
                    <label
                      htmlFor="card"
                      className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                        paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                      }`}
                    >
                      <RadioGroupItem value="card" id="card" />
                      <CreditCard className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">بطاقة ائتمان</p>
                        <p className="text-sm text-muted-foreground">ادفع باستخدام Visa أو Mastercard</p>
                      </div>
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-6">ملخص الطلب</h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 max-h-80 overflow-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center gap-1">
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-6 text-center text-xs">{item.quantity}</span>
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <p className="font-semibold text-sm">{(item.price * item.quantity).toFixed(2)} ر.س</p>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3 py-4 border-t border-b">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">المجموع الفرعي</span>
                    <span>{totalPrice.toFixed(2)} ر.س</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">الشحن</span>
                    <span>
                      {shippingCost === 0 ? (
                        <span className="text-green-600">مجاني</span>
                      ) : (
                        `${shippingCost.toFixed(2)} ر.س`
                      )}
                    </span>
                  </div>
                  {shippingCost > 0 && (
                    <p className="text-xs text-muted-foreground">
                      أضف {(200 - totalPrice).toFixed(2)} ر.س للحصول على شحن مجاني
                    </p>
                  )}
                </div>

                <div className="flex justify-between text-lg font-bold mt-4 mb-6">
                  <span>المجموع الكلي</span>
                  <span className="text-primary">{finalTotal.toFixed(2)} ر.س</span>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'جاري إتمام الطلب...' : 'تأكيد الطلب'}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  بالنقر على تأكيد الطلب، أنت توافق على الشروط والأحكام
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
