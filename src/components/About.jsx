import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const About = () => {
  const benefits = [
    'الوصول السريع إلى التقارير الرسمية من مصادر حكومية واقتصادية',
    'تحميل الملفات بضغطة زر بدون تعقيدات أو عوائق',
    'البحث الذكي حسب الجهة، المجال، أو الموضوع',
    'تحديثات مستمرة للمحتوى وإضافة تقارير جديدة أسبوعياً',
  ];

  const values = [
    { title: 'الموثوقية', description: 'مصادر رسمية معتمدة' },
    { title: 'الاحترافية', description: 'تنظيم وتصنيف دقيق' },
    { title: 'السرعة', description: 'وصول فوري للمحتوى' },
    { title: 'الجودة', description: 'تقارير محدثة ودقيقة' },
  ];

  return (
    <section id="about" className="section-container bg-gradient-to-b from-white to-accent-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* من نحن */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary-100 px-4 py-2 rounded-full mb-4"
            >
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-600">من نحن</span>
            </motion.div>

            <h2 className="text-4xl font-bold text-primary-500 mb-6">
              منصتك الموثوقة للتقارير والدراسات
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              <strong>تقارير</strong> هي منصة سعودية متخصصة في توفير الوصول السريع والمنظم لآلاف التقارير والدراسات الرسمية من مختلف الجهات الحكومية والاقتصادية والأكاديمية.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              نسعى لتسهيل عملية البحث والوصول إلى المعلومات الموثوقة للباحثين، الطلاب، رواد الأعمال، وصناع القرار.
            </p>
          </div>

          {/* لماذا تقارير */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-6">
              لماذا تقارير؟
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-neutral-700 leading-relaxed flex-1">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Left Side - Values */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white border-2 border-primary-100 rounded-2xl p-8 text-center hover:border-primary-300 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h4 className="text-xl font-bold text-neutral-800 mb-2">{value.title}</h4>
                <p className="text-sm text-neutral-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
