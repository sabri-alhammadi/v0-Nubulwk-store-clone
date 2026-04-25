"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ThumbsUp, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

interface Review {
  id: string
  author: string
  rating: number
  title: string
  content: string
  date: string
  helpful: number
  verified: boolean
}

interface ReviewsSectionProps {
  productId: string
  reviews?: Review[]
}

const sampleReviews: Review[] = [
  {
    id: '1',
    author: 'أحمد محمد',
    rating: 5,
    title: 'منتج رائع جداً!',
    content: 'جودة عالية جداً والتوصيل كان سريع. سأشتري منهم مرة أخرى بكل تأكيد.',
    date: '2024-03-15',
    helpful: 24,
    verified: true,
  },
  {
    id: '2',
    author: 'سارة علي',
    rating: 5,
    title: 'استثنائي!',
    content: 'تعاملت معهم في عدة طلبات والجودة دائماً متميزة. الفريق محترف جداً.',
    date: '2024-03-10',
    helpful: 18,
    verified: true,
  },
  {
    id: '3',
    author: 'محمد الشمري',
    rating: 4,
    title: 'جيد جداً',
    content: 'المنتج جيد والسعر معقول. التوصيل استغرق وقتاً أطول من المتوقع قليلاً.',
    date: '2024-03-05',
    helpful: 12,
    verified: true,
  },
]

export function ReviewsSection({ productId, reviews = sampleReviews }: ReviewsSectionProps) {
  const [showForm, setShowForm] = useState(false)
  const [newReviews, setNewReviews] = useState<Review[]>([])
  const [rating, setRating] = useState('5')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const allReviews = [...newReviews, ...reviews]
  const averageRating = Math.round(
    allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length * 10
  ) / 10

  const handleSubmitReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const newReview: Review = {
      id: Date.now().toString(),
      author: formData.get('author') as string,
      rating: parseInt(rating),
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      date: new Date().toISOString().split('T')[0],
      helpful: 0,
      verified: false,
    }

    await new Promise(resolve => setTimeout(resolve, 1000))

    setNewReviews([newReview, ...newReviews])
    setIsSubmitting(false)
    setShowForm(false)
    ;(e.target as HTMLFormElement).reset()
    setRating('5')
  }

  return (
    <div className="space-y-8">
      {/* Rating Summary */}
      <div className="bg-gradient-to-l from-primary/10 to-transparent rounded-2xl p-6 md:p-8">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <div className="flex items-end gap-4 mb-6">
              <div className="text-5xl font-bold text-primary">{averageRating}</div>
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.round(averageRating)
                          ? 'fill-secondary text-secondary'
                          : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  على أساس {allReviews.length} تقييم
                </p>
              </div>
            </div>

            <Button
              onClick={() => setShowForm(!showForm)}
              className="rounded-xl w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4 ml-2" />
              اكتب تقييمك
            </Button>
          </div>

          {/* Rating Breakdown */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map(stars => {
              const count = allReviews.filter(r => r.rating === stars).length
              const percentage = allReviews.length > 0
                ? Math.round((count / allReviews.length) * 100)
                : 0

              return (
                <div key={stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 min-w-fit">
                    <span className="text-sm font-medium text-muted-foreground">{stars}</span>
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                  </div>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-secondary rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground min-w-fit">{count}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Review Form */}
      <AnimatePresence>
        {showForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmitReview}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 space-y-4 overflow-hidden"
          >
            <h3 className="text-xl font-bold text-foreground">اكتب تقييمك</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="author">اسمك</Label>
                <Input
                  id="author"
                  name="author"
                  required
                  placeholder="أدخل اسمك"
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">بريدك الإلكتروني</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="example@email.com"
                  className="rounded-xl"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>التقييم</Label>
              <RadioGroup value={rating} onValueChange={setRating}>
                <div className="flex gap-4">
                  {[5, 4, 3, 2, 1].map(value => (
                    <label
                      key={value}
                      className="flex items-center cursor-pointer hover:scale-110 transition-transform"
                    >
                      <RadioGroupItem value={value.toString()} id={`rating-${value}`} />
                      <span className="ml-2">
                        {[...Array(value)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-secondary text-secondary inline mr-0.5"
                          />
                        ))}
                      </span>
                    </label>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">عنوان التقييم</Label>
              <Input
                id="title"
                name="title"
                required
                placeholder="ملخص تقييمك"
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">تفاصيل التقييم</Label>
              <Textarea
                id="content"
                name="content"
                required
                placeholder="شارك تجربتك مع هذا المنتج..."
                rows={4}
                className="rounded-xl"
              />
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl flex-1"
              >
                {isSubmitting ? (
                  'جاري الإرسال...'
                ) : (
                  <>
                    <Send className="h-4 w-4 ml-2" />
                    إرسال التقييم
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForm(false)}
                className="rounded-xl"
              >
                إلغاء
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Reviews List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground">
          التقييمات ({allReviews.length})
        </h3>

        <AnimatePresence mode="popLayout">
          {allReviews.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8 text-muted-foreground"
            >
              لم يتم إضافة أي تقييمات حتى الآن. كن الأول وشارك رأيك!
            </motion.div>
          ) : (
            allReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-2xl p-6 border border-border/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div>
                        <h4 className="font-bold text-foreground">{review.author}</h4>
                        <p className="text-xs text-muted-foreground">
                          {new Date(review.date).toLocaleDateString('ar-SA')}
                        </p>
                      </div>
                      {review.verified && (
                        <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                          مشترٍ تحقق منه
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'fill-secondary text-secondary'
                            : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h5 className="font-bold text-foreground mb-2">{review.title}</h5>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {review.content}
                </p>

                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  هل كان مفيداً؟ ({review.helpful})
                </button>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
