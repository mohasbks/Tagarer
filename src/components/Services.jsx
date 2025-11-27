import { motion } from 'framer-motion';
import { Search, Download, Link2, Database } from 'lucide-react';

const Services = () => {
    const features = [
        {
            icon: Search,
            title: 'بحث متقدم وسريع',
            description: 'ابحث عن التقارير بسهولة حسب الجهة، المجال، أو الكلمات المفتاحية.',
        },
        {
            icon: Download,
            title: 'تحميل مباشر',
            description: 'حمل التقارير بجودة عالية دون تعقيدات أو صعوبات.',
        },
        {
            icon: Link2,
            title: 'روابط محدثة دائمًا',
            description: 'تأكد من وصولك إلى التقارير دون عناء الروابط المعطلة.',
        },
        {
            icon: Database,
            title: 'قاعدة بيانات متكاملة',
            description: 'مجموعة شاملة من التقارير في كل المجالات في مكان واحد.',
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
                    اكتشف مميزاتنا
                </h2>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                    أهم الخصائص التي تجعل "تقارير" وجهتك الأولى للمعرفة
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <feature.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-primary-500">{feature.title}</h3>
                        <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
