import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, Award, Users, CheckCircle, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { value: '10+', label: 'سنوات من الخبرة' },
  { value: '5000+', label: 'عميل سعيد' },
  { value: '15000+', label: 'مشروع منجز' },
  { value: '100%', label: 'رضا العملاء' },
]

const values = [
  {
    icon: Target,
    title: 'الجودة',
    description: 'نلتزم بأعلى معايير الجودة في جميع منتجاتنا وخدماتنا',
  },
  {
    icon: Eye,
    title: 'الابتكار',
    description: 'نسعى دائماً لتقديم حلول إبداعية ومبتكرة لعملائنا',
  },
  {
    icon: Award,
    title: 'الاحترافية',
    description: 'فريق عمل محترف يسعى لتحقيق أفضل النتائج',
  },
  {
    icon: Users,
    title: 'العميل أولاً',
    description: 'رضا العميل هو هدفنا الأول والأخير',
  },
]

const team = [
  {
    name: 'أحمد الراشد',
    role: 'المدير التنفيذي',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'فهد العتيبي',
    role: 'مدير الإنتاج',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'سارة القحطاني',
    role: 'مديرة التصميم',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'محمد الشمري',
    role: 'مدير المبيعات',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-8">
            <Link href="/" className="hover:text-primary-foreground transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="h-4 w-4" />
            <span>من نحن</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              نبل وابتكار للدعاية والإعلان
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              شركة رائدة في مجال الدعاية والإعلان والطباعة الرقمية في المملكة العربية السعودية. نقدم حلولاً إبداعية متكاملة لتعزيز حضور علامتكم التجارية.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary-foreground blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">قصتنا</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  تأسست شركة نبل وابتكار للدعاية والإعلان برؤية واضحة تهدف إلى تقديم خدمات دعاية وإعلان متميزة تواكب التطورات العالمية وتلبي احتياجات السوق المحلي.
                </p>
                <p>
                  على مدار أكثر من عشر سنوات، عملنا مع آلاف العملاء من مختلف القطاعات، وقدمنا لهم حلولاً إبداعية ساهمت في تعزيز حضور علاماتهم التجارية وزيادة مبيعاتهم.
                </p>
                <p>
                  نفخر بفريقنا المتميز من المصممين والفنيين الذين يعملون بشغف لتحويل أفكار عملائنا إلى واقع ملموس يتجاوز توقعاتهم.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {['طباعة رقمية بأحدث التقنيات', 'تصميم جرافيكي احترافي', 'لوحات إعلانية بجميع الأحجام', 'هدايا دعائية مميزة'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop"
                alt="فريق العمل"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">قيمنا</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتحدد هويتنا
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">فريقنا</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              فريق متميز من المحترفين يعمل بشغف لتحقيق أفضل النتائج لعملائنا
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">هل أنت مستعد للبدء؟</h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">تواصل معنا</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
