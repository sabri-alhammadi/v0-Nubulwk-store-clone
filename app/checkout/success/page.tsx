import Link from 'next/link'
import { CheckCircle, Home, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CheckoutSuccessPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-4">تم استلام طلبك بنجاح!</h1>

          <p className="text-muted-foreground mb-2">
            شكراً لك على طلبك. سيتم التواصل معك قريباً لتأكيد الطلب.
          </p>

          <p className="text-sm text-muted-foreground mb-8">
            رقم الطلب: <span className="font-semibold text-foreground">#ORD-{Date.now().toString().slice(-6)}</span>
          </p>

          <div className="bg-muted/50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold mb-3">ماذا بعد؟</h3>
            <ul className="text-sm text-muted-foreground text-right space-y-2">
              <li>1. سيتم مراجعة طلبك من قبل فريقنا</li>
              <li>2. ستتلقى رسالة تأكيد على بريدك الإلكتروني</li>
              <li>3. سيتم التواصل معك لتحديد موعد التوصيل</li>
              <li>4. استلم طلبك واستمتع بمنتجاتك!</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">
                <Home className="h-4 w-4 ml-2" />
                العودة للرئيسية
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/products">
                <ShoppingBag className="h-4 w-4 ml-2" />
                متابعة التسوق
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
