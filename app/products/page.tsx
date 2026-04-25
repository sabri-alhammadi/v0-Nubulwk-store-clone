"use client"

import { useSearchParams } from 'next/navigation'
import { useState, useMemo, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Grid, List, SlidersHorizontal, Search, Package, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ProductCard } from '@/components/products/product-card'
import { products, categories } from '@/lib/data'

function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedCategory) {
      filtered = filtered.filter(p => p.categorySlug === selectedCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    }

    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [selectedCategory, searchQuery, sortBy])

  const currentCategory = selectedCategory
    ? categories.find(c => c.slug === selectedCategory)
    : null

  const FilterSidebar = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="w-6 h-0.5 bg-primary rounded-full" />
          الأقسام
        </h3>
        <div className="space-y-1">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`flex items-center justify-between w-full text-right py-3 px-4 rounded-xl transition-all ${
              !selectedCategory
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'hover:bg-muted'
            }`}
          >
            <span>جميع المنتجات</span>
            <ChevronLeft className="h-4 w-4" />
          </button>
          {categories.map(category => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.slug)}
              className={`flex items-center justify-between w-full text-right py-3 px-4 rounded-xl transition-all ${
                selectedCategory === category.slug
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'hover:bg-muted'
              }`}
            >
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                selectedCategory === category.slug
                  ? 'bg-white/20'
                  : 'bg-muted'
              }`}>
                {category.productCount}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="w-6 h-0.5 bg-secondary rounded-full" />
          الترتيب
        </h3>
        <div className="space-y-1">
          {[
            { key: 'default', label: 'الافتراضي' },
            { key: 'price-asc', label: 'السعر: من الأقل للأعلى' },
            { key: 'price-desc', label: 'السعر: من الأعلى للأقل' },
          ].map(option => (
            <button
              key={option.key}
              onClick={() => setSortBy(option.key as typeof sortBy)}
              className={`block w-full text-right py-3 px-4 rounded-xl transition-all ${
                sortBy === option.key
                  ? 'bg-secondary text-secondary-foreground shadow-lg shadow-secondary/25'
                  : 'hover:bg-muted'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Page Header */}
      <div className="bg-gradient-to-l from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'url(\"data:image/svg+xml,%3Csvg width=\\\"60\\\" height=\\\"60\\\" viewBox=\\\"0 0 60 60\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"%3E%3Cg fill=\\\"none\\\" fill-rule=\\\"evenodd\\\"%3E%3Cg fill=\\\"%23ffffff\\\" fill-opacity=\\\"0.05\\\"%3E%3Cpath d=\\\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\\"/\u003E%3C/g%3E%3C/g%3E%3C/svg%3E\")'}} />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-4 py-12 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-6">
            <Link href="/" className="hover:text-primary-foreground transition-colors">الرئيسية</Link>
            <ChevronLeft className="h-4 w-4" />
            <span className="text-primary-foreground">المنتجات</span>
            {currentCategory && (
              <>
                <ChevronLeft className="h-4 w-4" />
                <span className="text-primary-foreground">{currentCategory.name}</span>
              </>
            )}
          </nav>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {currentCategory ? currentCategory.name : 'جميع المنتجات'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl"
          >
            {currentCategory
              ? currentCategory.description
              : 'تصفح جميع منتجاتنا وخدماتنا المتنوعة في مجال الدعاية والإعلان'}
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-72 shrink-0">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-24 bg-card rounded-2xl p-6 shadow-lg shadow-foreground/5 border border-border/50"
            >
              <FilterSidebar />
            </motion.div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-4 mb-8 bg-card p-4 rounded-2xl shadow-sm border border-border/50"
            >
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="ابحث عن منتج..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="max-w-sm pr-4 pl-12 h-11 bg-muted/50 border-transparent focus:border-primary rounded-xl"
                  />
                  <div className="absolute left-1 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-lg p-2">
                    <Search className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Mobile Filter */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden rounded-xl">
                      <SlidersHorizontal className="h-4 w-4 ml-2" />
                      فلترة
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80 bg-gradient-to-b from-card to-muted/30">
                    <SheetHeader>
                      <SheetTitle className="text-right text-xl">فلترة المنتجات</SheetTitle>
                    </SheetHeader>
                    <div className="mt-8">
                      <FilterSidebar />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* View Mode */}
                <div className="hidden sm:flex items-center bg-muted/50 rounded-xl p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                    size="icon"
                    className="rounded-lg"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                    size="icon"
                    className="rounded-lg"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Results count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                عرض <span className="font-bold text-foreground">{filteredProducts.length}</span> منتج
              </p>
            </div>

            {/* Products Grid */}
            <AnimatePresence mode="wait">
              {filteredProducts.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-16 bg-card rounded-2xl border border-border/50"
                >
                  <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Package className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">لم يتم العثور على منتجات</h3>
                  <p className="text-muted-foreground mb-6">
                    جرب تغيير معايير البحث أو الفلترة
                  </p>
                  <Button variant="outline" onClick={() => {
                    setSelectedCategory(null)
                    setSearchQuery('')
                  }}>
                    إعادة تعيين الفلاتر
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                      : 'space-y-4'
                  }
                >
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">جاري التحميل...</p>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
