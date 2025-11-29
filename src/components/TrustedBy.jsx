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
            value: '40+',
            description: 'تصنيف',
        },
        {
            icon: Award,
            value: '6000+',
            description: 'تقرير',
        },
        {
            icon: Users,
            value: '800+',
            description: 'مصدر',
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
                    قاعدة بيانات شاملة
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    نوفر لك وصولاً لآلاف التقارير والدراسات من مئات المصادر الموثوقة في أكثر من 40 تصنيفاً متخصصاً
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

            {/* Sources Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-primary-500">
                    مصادرنا الموثوقة
                </h3>
                <p className="text-base text-neutral-600 max-w-xl mx-auto">
                    تقارير رسمية من جهات حكومية، اقتصادية، وأكاديمية.
                </p>
            </motion.div>

            {/* Partner Logos - Clean & Simple */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12 items-center">
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
        </section>
    );
};

export default TrustedBy;
