import { motion } from 'framer-motion';
import { FileText, TrendingUp, Building2, BarChart3 } from 'lucide-react';

const ReportShowcase = () => {
    const featuredReports = [
        {
            id: 1,
            title: 'تقرير التحول الرقمي في القطاع الحكومي السعودي 2024',
            category: 'أداء حكومي',
            icon: Building2,
            preview: 'تحليل شامل لمبادرات التحول الرقمي في الجهات الحكومية مع مؤشرات الأداء الرئيسية...',
            reports: '24 تقرير',
            price: 'مجاني',
        },
        {
            id: 2,
            title: 'تحليل السوق السعودي: قطاع التكنولوجيا والابتكار',
            category: 'تحليل أسواق',
            icon: TrendingUp,
            preview: 'دراسة معمقة لفرص الاستثمار في قطاع التكنولوجيا مع توقعات النمو حتى 2030...',
            reports: '18 تقرير',
            price: 'مميز',
        },
        {
            id: 3,
            title: 'المؤشرات الاقتصادية الرئيسية للربع الأول 2024',
            category: 'اقتصاد',
            icon: BarChart3,
            preview: 'تقرير تفصيلي يغطي النمو الاقتصادي، معدلات التضخم، والتجارة الخارجية...',
            reports: '32 تقرير',
            price: 'مجاني',
        },
        {
            id: 4,
            title: 'دراسة أداء الشركات المساهمة في السوق السعودي',
            category: 'دراسات مؤسسية',
            icon: FileText,
            preview: 'تحليل مالي وإداري لأكبر الشركات المدرجة مع تقييم الأداء والتوصيات...',
            reports: '15 تقرير',
            price: 'مميز',
        },
    ];

    return (
        <section className="section-container bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-500">
                    تقارير مميزة
                </h2>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                    اطلع على أمثلة من تقاريرنا الاحترافية في مختلف المجالات
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {featuredReports.map((report, index) => (
                    <motion.div
                        key={report.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-hover rounded-xl p-6 bg-gradient-to-br from-white to-accent-50/30 border-2 border-primary-500/10"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-primary-500 flex items-center justify-center flex-shrink-0">
                                <report.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-semibold text-primary-600 bg-accent-100 px-3 py-1 rounded-full">
                                        {report.category}
                                    </span>
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${report.price === 'مجاني'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-accent-200 text-primary-700'
                                        }`}>
                                        {report.price}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-primary-500 mb-2">
                                    {report.title}
                                </h3>
                            </div>
                        </div>

                        <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                            {report.preview}
                        </p>

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-neutral-500">
                                {report.reports}
                            </span>
                            <button className="text-primary-500 hover:text-primary-600 font-semibold text-sm transition-colors">
                                معاينة التقرير ←
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    تصفح جميع التقارير (500+)
                </button>
            </motion.div>
        </section>
    );
};

export default ReportShowcase;
