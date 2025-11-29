import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp, Shield, Zap, Check, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    const values = [
        {
            icon: Shield,
            title: 'الموثوقية',
            description: 'نقدم تقارير من مصادر رسمية معتمدة فقط',
        },
        {
            icon: Zap,
            title: 'السرعة',
            description: 'وصول فوري وسريع لآلاف التقارير المتخصصة',
        },
        {
            icon: Award,
            title: 'الجودة',
            description: 'محتوى محدث ومنظم بأعلى معايير الجودة',
        },
        {
            icon: Globe,
            title: 'الشمولية',
            description: 'تغطية واسعة لجميع القطاعات والمجالات',
        },
    ];

    const stats = [
        { value: '6000+', label: 'تقرير متاح' },
        { value: '800+', label: 'مصدر موثوق' },
        { value: '40+', label: 'تصنيف متخصص' },
        { value: '24/7', label: 'دعم مستمر' },
    ];

    const features = [
        'الوصول السريع إلى التقارير الرسمية من مصادر حكومية واقتصادية',
        'تحميل الملفات بضغطة زر بدون تعقيدات أو عوائق',
        'البحث الذكي حسب الجهة، المجال، أو الموضوع',
        'تحديثات مستمرة للمحتوى وإضافة تقارير جديدة أسبوعياً',
        'تصنيف دقيق ومنظم للتقارير حسب المجالات المتخصصة',
        'واجهة سهلة الاستخدام ومتوافقة مع جميع الأجهزة',
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-accent-50 to-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="section-container mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 mb-6">
                        من نحن
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                        <strong className="text-primary-600">تقارير</strong> هي منصة سعودية متخصصة في توفير الوصول السريع والمنظم لآلاف التقارير والدراسات الرسمية من مختلف الجهات الحكومية والاقتصادية والأكاديمية
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 text-center shadow-lg border-2 border-primary-500/10 hover:border-primary-300 hover:shadow-xl transition-all"
                        >
                            <div className="text-4xl font-bold text-primary-500 mb-2">{stat.value}</div>
                            <div className="text-sm text-neutral-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-container mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-white"
                    >
                        <Target className="w-16 h-16 mb-6" />
                        <h2 className="text-3xl font-bold mb-4">رسالتنا</h2>
                        <p className="text-lg text-accent-100 leading-relaxed">
                            تسهيل الوصول إلى المعلومات الموثوقة وتوفير منصة شاملة تجمع التقارير والدراسات المتخصصة لخدمة الباحثين والمهتمين في جميع المجالات
                        </p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-primary-500/10"
                    >
                        <TrendingUp className="w-16 h-16 mb-6 text-primary-500" />
                        <h2 className="text-3xl font-bold text-primary-500 mb-4">رؤيتنا</h2>
                        <p className="text-lg text-neutral-700 leading-relaxed">
                            أن نكون المرجع الأول في المملكة العربية السعودية للوصول إلى التقارير والدراسات الرسمية، ونساهم في دعم اتخاذ القرارات المبنية على بيانات موثوقة
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="section-container mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">قيمنا</h2>
                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                        المبادئ التي نلتزم بها في تقديم خدماتنا
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-primary-500/10 hover:border-primary-300 hover:shadow-xl transition-all group"
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <value.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-800 mb-2">{value.title}</h3>
                            <p className="text-neutral-600">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-container mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">
                            لماذا تختار تقارير؟
                        </h2>
                        <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                            نوفر لك تجربة متميزة في الوصول إلى المعلومات والتقارير المتخصصة بطريقة سهلة وموثوقة
                        </p>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
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
                                    <p className="text-neutral-700 leading-relaxed">{feature}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image/Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-12 text-white"
                    >
                        <Users className="w-20 h-20 mb-6" />
                        <h3 className="text-3xl font-bold mb-4">فريق متخصص</h3>
                        <p className="text-lg text-accent-100 leading-relaxed mb-6">
                            نعمل باستمرار على تحديث وتطوير المنصة لتوفير أفضل تجربة مستخدم وضمان دقة وجودة المحتوى المقدم
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <div className="text-2xl font-bold mb-1">100%</div>
                                <div className="text-sm text-accent-100">مصادر موثوقة</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <div className="text-2xl font-bold mb-1">تحديث</div>
                                <div className="text-sm text-accent-100">أسبوعي</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-12 text-center text-white"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">هل أنت جاهز للبدء؟</h2>
                    <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
                        انضم إلى آلاف المستخدمين واحصل على وصول فوري لآلاف التقارير المتخصصة
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/reports">
                            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-50 shadow-lg hover:shadow-xl transition-all">
                                تصفح التقارير
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
                                تواصل معنا
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutPage;
