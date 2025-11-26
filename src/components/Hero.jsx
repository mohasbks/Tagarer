import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, FileText, Search, TrendingUp, CheckCircle } from 'lucide-react';
import Button from './Button';

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        // Handle search logic here
    };

    const steps = [
        { icon: Search, text: 'ابحث' },
        { icon: FileText, text: 'اطّلع' },
        { icon: CheckCircle, text: 'حمّل' },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-gradient-to-br from-accent-50 via-white to-accent-50/30">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute top-20 right-20 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-200 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-accent-100 px-4 py-2 rounded-full mb-6 border border-primary-500/20"
                    >
                        <Award className="w-4 h-4 text-primary-600" />
                        <span className="text-sm text-primary-700 font-semibold">موثوق من +50 جهة حكومية</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        <span className="text-primary-500">تقارير ودراسات</span>
                        <br />
                        <span className="text-neutral-800">احترافية جاهزة</span>
                    </motion.h1>

                    {/* Value Proposition */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-3xl mx-auto"
                    >
                        وصول فوري لأكثر من 500 تقرير ودراسة في الاقتصاد والأسواق والأداء الحكومي.
                        <br />
                        بيانات موثوقة ودقيقة تساعدك في اتخاذ قرارات مبنية على معلومات رسمية.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        onSubmit={handleSearch}
                        className="max-w-2xl mx-auto mb-8"
                    >
                        <div className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="ابحث عن تقرير اقتصادي، دراسة سوق، أو تحليل قطاع..."
                                className="w-full px-6 py-4 pr-14 rounded-full border-2 border-primary-500/20 focus:border-primary-500 focus:outline-none text-neutral-700 shadow-lg bg-white"
                            />
                            <button
                                type="submit"
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary-500 text-white p-3 rounded-full hover:bg-primary-600 transition-colors"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.form>

                    {/* 3-Step Journey */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-center gap-4 mb-10"
                    >
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center mb-2">
                                        <step.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-sm font-semibold text-primary-600">{step.text}</span>
                                </div>
                                {index < steps.length - 1 && (
                                    <ArrowRight className="w-6 h-6 text-primary-400 mx-2" />
                                )}
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-wrap gap-4 justify-center mb-12"
                    >
                        <Button variant="primary" size="lg" icon={TrendingUp}>
                            تصفح 500+ تقرير مجاناً
                        </Button>
                        <Button variant="secondary" size="lg">
                            تعرف على الأسعار
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                    >
                        {[
                            { value: '500+', label: 'تقرير متخصص' },
                            { value: '50+', label: 'جهة حكومية' },
                            { value: '98%', label: 'رضا العملاء' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-primary-500 mb-1">{stat.value}</div>
                                <div className="text-sm text-neutral-600">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
