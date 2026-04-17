"use client"

import { useSearchParams } from 'next/navigation'
import { useState, useMemo, Suspense } from 'react'
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react'
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

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(p => p.categorySlug === selectedCategory)
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    }

    // Sort
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
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">الأقسام</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`block w-full text-right py-2 px-3 rounded-lg transition-colors ${
              !selectedCategory
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted'
            }`}
          >
            جميع المنتجات
          </button>
          {categories.map(category => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.slug)}
              className={`block w-full text-right py-2 px-3 rounded-lg transition-colors ${
                selectedCategory === category.slug
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              {category.name}
              <span className="text-xs mr-2 opacity-70">({category.productCount})</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">الترتيب</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSortBy('default')}
            className={`block w-full text-right py-2 px-3 rounded-lg transition-colors ${
              sortBy === 'default'
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted'
            }`}
          >
            الافتراضي
          </button>
          <button
            onClick={() => setSortBy('price-asc')}
            className={`block w-full text-right py-2 px-3 rounded-lg transition-colors ${
              sortBy === 'price-asc'
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted'
            }`}
          >
            السعر: من الأقل للأعلى
          </button>
          <button
            onClick={() => setSortBy('price-desc')}
            className={`block w-full text-right py-2 px-3 rounded-lg transition-colors ${
              sortBy === 'price-desc'
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted'
            }`}
          >
            السعر: من الأعلى للأقل
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {currentCategory ? currentCategory.name : 'جميع المنتجات'}
          </h1>
          <p className="text-muted-foreground">
            {currentCategory
              ? currentCategory.description
              : 'تصفح جميع منتجاتنا وخدماتنا المتنوعة'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-card rounded-xl p-6 shadow-sm">
              <FilterSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex-1 min-w-[200px]">
                <Input
                  type="search"
                  placeholder="ابحث عن منتج..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="max-w-sm"
                />
              </div>

              <div className="flex items-center gap-2">
                {/* Mobile Filter */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <SlidersHorizontal className="h-4 w-4 ml-2" />
                      فلترة
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80">
                    <SheetHeader>
                      <SheetTitle>فلترة المنتجات</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterSidebar />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* View Mode */}
                <div className="hidden sm:flex items-center border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                    size="icon"
                    className="rounded-l-none"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                    size="icon"
                    className="rounded-r-none"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-muted-foreground mb-4">
              عرض {filteredProducts.length} منتج
            </p>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">لم يتم العثور على منتجات</h3>
                <p className="text-muted-foreground">
                  جرب تغيير معايير البحث أو الفلترة
                </p>
              </div>
            ) : (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'space-y-4'
                }
              >
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="py-8 text-center">جاري التحميل...</div>}>
      <ProductsContent />
    </Suspense>
  )
}
