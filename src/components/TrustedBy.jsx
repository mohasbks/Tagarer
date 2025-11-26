import { motion } from 'framer-motion';
import { Shield, Award, Users } from 'lucide-react';

const TrustedBy = () => {
    // SVG logos from the SVG directory
    const logos = [
        { path: '/SVG/1-Dg2imleq.svg', size: 'normal' },
        { path: '/SVG/2-ClrwYHlG.svg', size: 'large' },
        { path: '/SVG/4-BDI4o6x-.svg', size: 'large' },
        { path: '/SVG/6-DsXeATSP.svg', size: 'large' },
        { path: '/SVG/7-UuGvmE0M.svg', size: 'normal' },
        { path: '/SVG/8-DR7znFYj.svg', size: 'large' },
        { path: '/SVG/10-CO0XBDNI.svg', size: 'normal' },
    ];

    const trustMetrics = [
        {
            icon: Shield,
            value: 'بيانات رسمية',
            description: 'معتمدة من مصادر حكومية',
        },
        {
            icon: Award,
            value: '500+ تقرير',
            description: 'في مختلف المجالات',
        },
        {
            icon: Users,
            value: '50+ جهة',
            description: 'حكومية ومؤسسية',
        },
    ];

    return (
        <section className="section-container section-bg-accent">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500">
                    موثوق من الجهات الرائدة
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    يعتمد علينا العشرات من الجهات الحكومية والمؤسسات الكبرى في الحصول على تقارير موثوقة
                </p>
            </motion.div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {trustMetrics.map((metric, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl p-6 text-center border-2 border-primary-500/10 hover:border-primary-500/30 transition-all"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center mx-auto mb-4">
                            <metric.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-primary-500 mb-2">{metric.value}</div>
                        <div className="text-sm text-neutral-600">{metric.description}</div>
                    </motion.div>
                ))}
            </div>

            {/* Partner Logos - With different sizes */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12 items-center mb-8">
                {logos.map((logo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex items-center justify-center"
                    >
                        <img
                            src={logo.path}
                            alt={`شريك ${index + 1}`}
                            className={`w-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ${logo.size === 'large' ? 'h-64' : 'h-48'
                                }`}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Testimonial */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 max-w-3xl mx-auto bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center"
            >
                <p className="text-lg italic mb-4">
                    "منصة تقارير وفرت علينا وقتاً كبيراً في الحصول على بيانات موثوقة ومحدثة. التقارير احترافية وتساعدنا في اتخاذ قرارات استراتيجية مبنية على معلومات دقيقة."
                </p>
                <div className="text-accent-100 font-semibold">
                    — مسؤول تنفيذي في جهة حكومية رائدة
                </div>
            </motion.div>
        </section>
    );
};

export default TrustedBy;
