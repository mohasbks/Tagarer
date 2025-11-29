import { motion } from 'framer-motion';
import { FileText, Search, Download, Zap, Shield, TrendingUp, Database, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
    const features = [
        {
            icon: Search,
            title: 'بحث متقدم وذكي',
            description: 'محرك بحث قوي يساعدك في العثور على التقارير المناسبة بسرعة ودقة',
            color: 'from-blue-500 to-blue-600',
        },
        {
            icon: Download,
            title: 'تحميل فوري ومباشر',
            description: 'حمّل التقارير بصيغة PDF بضغطة واحدة دون تعقيدات',
            color: 'from-green-500 to-green-600',
        },
        {
            icon: Database,
            title: 'قاعدة بيانات شاملة',
            description: '6000+ تقرير من 800+ مصدر موثوق في 40+ تصنيف متخصص',
            color: 'from-purple-500 to-purple-600',
        },
        {
            icon: Clock,
            title: 'تحديثات مستمرة',
            description: 'نضيف تقارير جديدة أسبوعياً ونحدث المحتوى باستمرار',
            color: 'from-orange-500 to-orange-600',
        },
    ];

    return (
        <section className="section-container bg-white">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">
                    ما الذي نقدمه؟
                </h2>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                    منصة متكاملة توفر لك كل ما تحتاجه للوصول إلى التقارير والدراسات المتخصصة
                </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="relative bg-white border-2 border-neutral-100 rounded-2xl p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-300 h-full">
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-neutral-800 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-neutral-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Decorative Element */}
                            <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-tl-full transition-opacity group-hover:opacity-10`}></div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
            >
                <Link
                    to="/reports"
                    className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                    <Search className="w-5 h-5" />
                    ابدأ البحث الآن
                </Link>
            </motion.div>
        </section>
    );
};

export default Features;
