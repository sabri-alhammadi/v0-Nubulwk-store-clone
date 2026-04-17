export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  categorySlug: string
  badge?: string
  inStock: boolean
  features?: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  productCount: number
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'طباعة رقمية',
    slug: 'digital-printing',
    description: 'خدمات الطباعة الرقمية بأعلى جودة',
    image: '/images/category-printing.jpg',
    productCount: 15,
  },
  {
    id: '2',
    name: 'اللوحات الإعلانية',
    slug: 'signage',
    description: 'لوحات إعلانية داخلية وخارجية',
    image: '/images/category-signs.jpg',
    productCount: 12,
  },
  {
    id: '3',
    name: 'ستيكرات وملصقات',
    slug: 'stickers',
    description: 'ستيكرات وملصقات بجميع الأحجام',
    image: '/images/category-stickers.jpg',
    productCount: 20,
  },
  {
    id: '4',
    name: 'هدايا دعائية',
    slug: 'promotional-gifts',
    description: 'هدايا ترويجية مميزة لشركتك',
    image: '/images/category-gifts.jpg',
    productCount: 25,
  },
  {
    id: '5',
    name: 'ملابس مطبوعة',
    slug: 'commercial-prints',
    description: 'تيشرتات، يونيفورم، ملابس مخصصة',
    image: '/images/category-clothing.jpg',
    productCount: 18,
  },
  {
    id: '6',
    name: 'تغليف وعلب',
    slug: 'stamps',
    description: 'علب وتغليف مخصص لمنتجاتك',
    image: '/images/category-packaging.jpg',
    productCount: 8,
  },
]

export const products: Product[] = [
  // طباعة رقمية
  {
    id: '1',
    name: 'طباعة بانر فينيل',
    description: 'طباعة بانر فينيل عالي الجودة مقاوم للعوامل الجوية، مناسب للإعلانات الخارجية والداخلية',
    price: 45,
    originalPrice: 60,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    category: 'طباعة رقمية',
    categorySlug: 'digital-printing',
    badge: 'خصم 25%',
    inStock: true,
    features: ['مقاوم للماء', 'ألوان زاهية', 'متوفر بجميع المقاسات'],
  },
  {
    id: '2',
    name: 'طباعة فوم بورد',
    description: 'طباعة على لوحات الفوم بورد بدقة عالية، مثالية للمعارض والفعاليات',
    price: 35,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&h=500&fit=crop',
    category: 'طباعة رقمية',
    categorySlug: 'digital-printing',
    inStock: true,
    features: ['خفيف الوزن', 'سهل التعليق', 'متوفر بسماكات مختلفة'],
  },
  {
    id: '3',
    name: 'طباعة كانفس',
    description: 'طباعة صور على قماش الكانفس بجودة احترافية، مناسبة للديكور والهدايا',
    price: 85,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&h=500&fit=crop',
    category: 'طباعة رقمية',
    categorySlug: 'digital-printing',
    badge: 'الأكثر مبيعاً',
    inStock: true,
    features: ['قماش عالي الجودة', 'إطار خشبي', 'جاهز للتعليق'],
  },
  // اللوحات الإعلانية
  {
    id: '4',
    name: 'لوحة كلادينج',
    description: 'لوحات كلادينج مضيئة وغير مضيئة بتصميمات احترافية',
    price: 250,
    image: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=500&h=500&fit=crop',
    category: 'اللوحات الإعلانية',
    categorySlug: 'signage',
    inStock: true,
    features: ['مقاوم للصدأ', 'إضاءة LED اختيارية', 'تركيب مجاني'],
  },
  {
    id: '5',
    name: 'لوحة حروف بارزة',
    description: 'لوحات بحروف بارزة ثلاثية الأبعاد مع إضاءة LED',
    price: 350,
    originalPrice: 400,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop',
    category: 'اللوحات الإعلانية',
    categorySlug: 'signage',
    badge: 'عرض خاص',
    inStock: true,
    features: ['حروف ستانلس', 'إضاءة خلفية', 'ضمان سنة'],
  },
  {
    id: '6',
    name: 'لوحة أكريليك',
    description: 'لوحات أكريليك شفافة أو ملونة بتصميمات عصرية',
    price: 180,
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&h=500&fit=crop',
    category: 'اللوحات الإعلانية',
    categorySlug: 'signage',
    inStock: true,
    features: ['شفاف أو ملون', 'مقاوم للكسر', 'سهل التنظيف'],
  },
  // ستيكرات وملصقات
  {
    id: '7',
    name: 'ستيكر فينيل لاصق',
    description: 'ستيكرات فينيل عالية الجودة للسيارات والمحلات',
    price: 15,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop',
    category: 'ستيكرات وملصقات',
    categorySlug: 'stickers',
    inStock: true,
    features: ['مقاوم للماء', 'سهل التركيب', 'قابل للإزالة'],
  },
  {
    id: '8',
    name: 'ستيكر شفاف',
    description: 'ستيكرات شفافة للواجهات الزجاجية والنوافذ',
    price: 20,
    image: 'https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=500&h=500&fit=crop',
    category: 'ستيكرات وملصقات',
    categorySlug: 'stickers',
    badge: 'جديد',
    inStock: true,
    features: ['شفافية عالية', 'طباعة ملونة', 'مناسب للزجاج'],
  },
  {
    id: '9',
    name: 'ستيكر أرضيات',
    description: 'ستيكرات خاصة للأرضيات مقاومة للاحتكاك',
    price: 25,
    image: 'https://images.unsplash.com/photo-1558618047-f4b511ee370e?w=500&h=500&fit=crop',
    category: 'ستيكرات وملصقات',
    categorySlug: 'stickers',
    inStock: true,
    features: ['مقاوم للاحتكاك', 'غير قابل للانزلاق', 'سهل التنظيف'],
  },
  // هدايا دعائية
  {
    id: '10',
    name: 'أقلام دعائية',
    description: 'أقلام دعائية بطباعة شعار شركتك',
    price: 5,
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&h=500&fit=crop',
    category: 'هدايا دعائية',
    categorySlug: 'promotional-gifts',
    badge: 'الأكثر طلباً',
    inStock: true,
    features: ['حبر عالي الجودة', 'طباعة الشعار', 'ألوان متعددة'],
  },
  {
    id: '11',
    name: 'أكواب مطبوعة',
    description: 'أكواب سيراميك أو حرارية مع طباعة مخصصة',
    price: 25,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop',
    category: 'هدايا دعائية',
    categorySlug: 'promotional-gifts',
    inStock: true,
    features: ['سيراميك أو حراري', 'طباعة ثابتة', 'آمن للغسالة'],
  },
  {
    id: '12',
    name: 'حقائب قماشية',
    description: 'حقائب قماشية صديقة للبيئة مع طباعة شعارك',
    price: 15,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&h=500&fit=crop',
    category: 'هدايا دعائية',
    categorySlug: 'promotional-gifts',
    inStock: true,
    features: ['قماش طبيعي', 'صديقة للبيئة', 'متينة'],
  },
  // مطبوعات تجارية
  {
    id: '13',
    name: 'كروت شخصية',
    description: 'كروت شخصية فاخرة بتصميمات احترافية',
    price: 50,
    originalPrice: 65,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop',
    category: 'مطبوعات تجارية',
    categorySlug: 'commercial-prints',
    badge: 'خصم 23%',
    inStock: true,
    features: ['ورق فاخر', 'طباعة وجهين', '500 كرت'],
  },
  {
    id: '14',
    name: 'بروشورات',
    description: 'بروشورات ترويجية بأحجام وطيات متعددة',
    price: 120,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&h=500&fit=crop',
    category: 'مطبوعات تجارية',
    categorySlug: 'commercial-prints',
    inStock: true,
    features: ['طيات متعددة', 'ورق لامع أو مات', '1000 نسخة'],
  },
  {
    id: '15',
    name: 'فلايرات A5',
    description: 'فلايرات إعلانية بمقاس A5 بطباعة ملونة',
    price: 80,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop',
    category: 'مطبوعات تجارية',
    categorySlug: 'commercial-prints',
    inStock: true,
    features: ['طباعة ملونة', 'ورق 150 جرام', '1000 نسخة'],
  },
  // أختام وطوابع
  {
    id: '16',
    name: 'ختم ذاتي الحبر',
    description: 'أختام ذاتية الحبر بمقاسات متعددة',
    price: 45,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&h=500&fit=crop',
    category: 'أختام وطوابع',
    categorySlug: 'stamps',
    badge: 'الأكثر مبيعاً',
    inStock: true,
    features: ['ذاتي الحبر', 'مقاسات متعددة', 'حبر قابل للاستبدال'],
  },
  {
    id: '17',
    name: 'ختم خشبي',
    description: 'أختام خشبية كلاسيكية مع وسادة حبر',
    price: 35,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=500&fit=crop',
    category: 'أختام وطوابع',
    categorySlug: 'stamps',
    inStock: true,
    features: ['خشب طبيعي', 'وسادة حبر', 'تصميم كلاسيكي'],
  },
  {
    id: '18',
    name: 'ختم جيب',
    description: 'أختام محمولة بحجم الجيب للاستخدام أثناء التنقل',
    price: 55,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop',
    category: 'أختام وطوابع',
    categorySlug: 'stamps',
    badge: 'جديد',
    inStock: true,
    features: ['حجم صغير', 'سهل الحمل', 'غطاء محكم'],
  },
]

export const featuredProducts = products.filter(p => p.badge)

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categorySlug === categorySlug)
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export const heroSlides = [
  {
    id: 1,
    title: 'نبل وابتكار للدعاية والإعلان',
    subtitle: 'شريكك الأمثل في عالم الدعاية والإعلان',
    description: 'نقدم لكم أفضل خدمات الطباعة والدعاية بأعلى جودة وأفضل الأسعار',
    image: '/images/hero-1.jpg',
    buttonText: 'تسوق الآن',
    buttonLink: '/products',
  },
  {
    id: 2,
    title: 'عروض خاصة على الطباعة الرقمية',
    subtitle: 'خصم يصل إلى 30%',
    description: 'احصل على أفضل العروض على خدمات الطباعة الرقمية لفترة محدودة',
    image: '/images/hero-2.jpg',
    buttonText: 'اكتشف العروض',
    buttonLink: '/products?category=digital-printing',
  },
  {
    id: 3,
    title: 'هدايا دعائية مميزة',
    subtitle: 'اجعل علامتك التجارية تتألق',
    description: 'مجموعة واسعة من الهدايا الدعائية لتعزيز حضور شركتك',
    image: '/images/hero-3.jpg',
    buttonText: 'تصفح الهدايا',
    buttonLink: '/products?category=promotional-gifts',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'أحمد محمد',
    role: 'مدير شركة الرياض للتقنية',
    content: 'تعاملت مع نبل وابتكار في عدة مشاريع وكانت النتائج مذهلة. جودة عالية وخدمة ممتازة.',
    rating: 5,
  },
  {
    id: 2,
    name: 'سارة العلي',
    role: 'صاحبة متجر زهور',
    content: 'طباعة الكروت الشخصية واللوحات كانت رائعة. أنصح الجميع بالتعامل معهم.',
    rating: 5,
  },
  {
    id: 3,
    name: 'محمد الفهد',
    role: 'مدير تسويق',
    content: 'سرعة في التنفيذ وجودة في المنتج النهائي. شركاء موثوقون للدعاية والإعلان.',
    rating: 5,
  },
]

export const services = [
  {
    id: 1,
    title: 'تصميم مجاني',
    description: 'نقدم خدمة التصميم المجاني لجميع طلباتكم',
    icon: 'Palette',
  },
  {
    id: 2,
    title: 'توصيل سريع',
    description: 'توصيل لجميع مناطق المملكة خلال 3-5 أيام',
    icon: 'Truck',
  },
  {
    id: 3,
    title: 'ضمان الجودة',
    description: 'نضمن جودة جميع منتجاتنا أو استرداد المبلغ',
    icon: 'Shield',
  },
  {
    id: 4,
    title: 'دعم فني',
    description: 'فريق دعم فني متاح على مدار الساعة لمساعدتكم',
    icon: 'Headphones',
  },
]
