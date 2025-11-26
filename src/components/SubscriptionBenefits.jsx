import { motion } from 'framer-motion';
import { Check, X, Crown } from 'lucide-react';
import Button from './Button';

const SubscriptionBenefits = () => {
    const plans = [
        {
            name: 'مجاني',
            price: '0',
            period: '',
            description: 'للتجربة والاستكشاف',
            features: [
                { text: 'الوصول لـ 50 تقرير مجاني', included: true },
                { text: 'معاينة جميع التقارير', included: true },
                { text: 'تحديثات شهرية', included: true },
                { text: 'تحميل التقارير الكاملة', included: false },
                { text: 'الوصول للتقارير المميزة', included: false },
                { text: 'تقارير مخصصة', included: false },
            ],
            cta: 'ابدأ مجاناً',
            highlighted: false,
        },
        {
            name: 'مميز',
            price: '299',
            period: '/شهرياً',
            description: 'للمحترفين والشركات',
            features: [
                { text: 'وصول غير محدود لجميع التقارير', included: true },
                { text: 'تحميل جميع التقارير بصيغة PDF', included: true },
                { text: 'تحديثات يومية', included: true },
                { text: 'الوصول للتقارير المميزة', included: true },
                { text: 'دعم فني مخصص', included: true },
                { text: 'تقارير مخصصة عند الطلب', included: true },
            ],
            cta: 'ابدأ النسخة التجريبية',
            highlighted: true,
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
                    اختر الخطة المناسبة لك
                </h2>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                    ابدأ مجاناً، أو احصل على وصول كامل لجميع التقارير والمزايا المميزة
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`rounded-2xl p-8 relative ${plan.highlighted
                                ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-2xl scale-105'
                                : 'bg-gradient-to-br from-accent-50 to-white border-2 border-primary-500/20'
                            }`}
                    >
                        {plan.highlighted && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-200 text-primary-700 px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                                <Crown className="w-4 h-4" />
                                الأكثر شعبية
                            </div>
                        )}

                        <div className="text-center mb-6">
                            <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-primary-500'}`}>
                                {plan.name}
                            </h3>
                            <p className={`text-sm mb-4 ${plan.highlighted ? 'text-accent-100' : 'text-neutral-600'}`}>
                                {plan.description}
                            </p>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-primary-500'}`}>
                                    {plan.price}
                                </span>
                                <span className={`text-lg ${plan.highlighted ? 'text-accent-100' : 'text-neutral-600'}`}>
                                    {plan.period && 'ريال'}
                                </span>
                            </div>
                            {plan.period && (
                                <span className={`text-sm ${plan.highlighted ? 'text-accent-100' : 'text-neutral-600'}`}>
                                    {plan.period}
                                </span>
                            )}
                        </div>

                        <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    {feature.included ? (
                                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-accent-100' : 'text-primary-500'
                                            }`} />
                                    ) : (
                                        <X className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-white/30' : 'text-neutral-300'
                                            }`} />
                                    )}
                                    <span className={`text-sm ${feature.included
                                            ? plan.highlighted ? 'text-white' : 'text-neutral-700'
                                            : plan.highlighted ? 'text-white/50' : 'text-neutral-400'
                                        }`}>
                                        {feature.text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant={plan.highlighted ? 'secondary' : 'primary'}
                            size="lg"
                            className="w-full"
                        >
                            {plan.cta}
                        </Button>
                    </motion.div>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center text-neutral-500 text-sm mt-8"
            >
                جميع الأسعار شاملة ضريبة القيمة المضافة • يمكنك الإلغاء في أي وقت
            </motion.p>
        </section>
    );
};

export default SubscriptionBenefits;
