import { motion } from 'framer-motion';
import { Target, Shield, Award, CheckCircle2 } from 'lucide-react';
import Card from './Card';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'الموثوقية',
      description: 'نلتزم بأعلى معايير الدقة والمصداقية في جميع تقاريرنا',
    },
    {
      icon: Award,
      title: 'الاحترافية',
      description: 'فريق من الخبراء المتخصصين في مختلف المجالات',
    },
    {
      icon: Target,
      title: 'الدقة',
      description: 'بيانات محدثة وتحليلات عميقة لاتخاذ قرارات صائبة',
    },
    {
      icon: CheckCircle2,
      title: 'الجودة',
      description: 'التزام تام بمعايير الجودة العالمية في إعداد التقارير',
    },
  ];

  const benefits = [
    'الوصول السريع إلى التقارير الرسمية',
    'تحميل الملفات بضغطة زر',
    'البحث الذكي حسب الجهة أو المجال',
  ];

  return (
    <section id="about" className="section-container bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-500">
            من نحن
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-4">
            <span className="font-bold text-primary-600">تقارير</span> هي منصة سعودية متخصصة في توفير تقارير ودراسات مهنية جاهزة تخدم الشركات ورواد الأعمال والجهات الحكومية والمهنيين.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed mb-4">
            نسعى لتمكين المؤسسات من اتخاذ قرارات استراتيجية مبنية على بيانات دقيقة وموثوقة، من خلال تقارير احترافية في مجالات الاقتصاد والأداء الحكومي والدراسات المؤسسية وتحليل الأسواق.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            نؤمن بأهمية المعلومة الموثوقة في بناء مستقبل أفضل، ونلتزم بتقديم محتوى عالي الجودة يعكس الواقع ويساعد في رسم الخطط المستقبلية.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br from-accent-50 to-white border-2 border-primary-500/10"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-200/50 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 text-primary-500">لماذا تقارير؟</h3>
            <p className="text-neutral-600 leading-relaxed mb-6">
              في ظل تشتت التقارير والدراسات في منصات متعددة، جاء "تقارير" ليكون الحل الأمثل للباحثين والمهتمين. نقدم قاعدة بيانات متجددة للتقارير والأبحاث الرسمية، مع إمكانية الاطلاع المباشر أو التحميل بسهولة.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-neutral-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              icon={value.icon}
              title={value.title}
              description={value.description}
              className="bg-white"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
