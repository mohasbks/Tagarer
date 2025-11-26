import { motion } from 'framer-motion';
import {
    TrendingUp,
    Building2,
    BarChart3,
    FileText
} from 'lucide-react';

const Services = () => {
    const categories = [
        {
            icon: TrendingUp,
            title: 'التقارير الاقتصادية',
            count: '120+ تقرير',
            description: 'تحليلات اقتصادية شاملة ومؤشرات الأداء',
        },
        {
            icon: Building2,
            title: 'الأداء الحكومي',
            count: '85+ تقرير',
            description: 'تقييم أداء الجهات والمؤسسات الحكومية',
        },
        {
            icon: BarChart3,
            title: 'تحليل الأسواق',
            count: '150+ تقرير',
            description: 'دراسات الأسواق والفرص الاستثمارية',
        },
        {
            icon: FileText,
            title: 'الدراسات المؤسسية',
            count: '95+ تقرير',
            description: 'تحليل وتقييم أداء الشركات والمؤسسات',
        },
    ];

    return (
        <section id="services" className="section-container bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-500">
                    تصفح حسب التصنيف
                </h2>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                    اختر التصنيف المناسب للوصول السريع للتقارير التي تحتاجها
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="glass-hover rounded-xl p-6 bg-gradient-to-br from-white to-accent-50/30 h-full flex flex-col border-2 border-primary-500/10 cursor-pointer">
                            <div className="w-14 h-14 rounded-lg bg-primary-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <category.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-primary-500">{category.title}</h3>
                            <p className="text-sm text-accent-600 font-semibold mb-3">{category.count}</p>
                            <p className="text-neutral-600 mb-4 flex-grow">{category.description}</p>
                            <button className="text-primary-500 hover:text-primary-600 font-semibold text-sm transition-colors text-right">
                                تصفح التقارير ←
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
