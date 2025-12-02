import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Zap, TrendingUp, Award } from 'lucide-react';
import Button from '../components/Button';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly'); // monthly or yearly

    const plans = [
        {
            name: 'المجانية',
            nameEn: 'free',
            price: {
                monthly: 0,
                yearly: 0,
            },
            description: 'مثالية للتجربة والاستكشاف',
            icon: Zap,
            features: [
                { text: 'معاينة 50 تقرير شهرياً', included: true },
                { text: 'بحث محدود', included: true },
                { text: 'عرض أولي للتقارير', included: true },
                { text: 'بدون تحميل', included: false },
                { text: 'دعم فني', included: false },
                { text: 'تحليلات الذكاء الاصطناعي', included: false },
            ],
            cta: 'ابدأ مجاناً',
            popular: false,
        },
        {
            name: 'الأساسية',
            nameEn: 'basic',
            price: {
                monthly: 99,
                yearly: 999,
            },
            savings: 200,
            description: 'الأنسب للأفراد والباحثين',
            icon: TrendingUp,
            features: [
                { text: 'وصول لـ 500+ تقرير', included: true },
                { text: 'تحميل غير محدود', included: true },
                { text: 'بحث متقدم', included: true },
                { text: 'تحديثات شهرية', included: true },
                { text: 'دعم فني', included: true },
                { text: 'تحليلات الذكاء الاصطناعي', included: false },
            ],
            cta: 'اشترك الآن',
            popular: true,
        },
        {
            name: 'الاحترافية',
            nameEn: 'pro',
            price: {
                monthly: 299,
                yearly: 2999,
            },
            savings: 590,
            description: 'مثالية للشركات والمؤسسات',
            icon: Award,
            features: [
                { text: 'وصول لـ 6000+ تقرير', included: true },
                { text: 'تحميل وتصدير غير محدود', included: true },
                { text: 'بحث متقدم بالذكاء الاصطناعي', included: true },
                { text: 'تحليلات مخصصة', included: true },
                { text: 'API Access', included: true },
                { text: 'دعم أولوية 24/7', included: true },
            ],
            cta: 'اشترك الآن',
            popular: false,
        },
    ];

    const faqs = [
        {
            question: 'هل يمكنني تغيير الخطة لاحقاً؟',
            answer: 'نعم، يمكنك الترقية أو التخفيض في أي وقت. سيتم احتساب الفرق في السعر تلقائياً.',
        },
        {
            question: 'ما هي طرق الدفع المتاحة؟',
            answer: 'نقبل جميع البطاقات الائتمانية (Visa, MasterCard, Mada) والتحويل البنكي للمؤسسات.',
        },
        {
            question: 'هل يوجد ضمان استرداد الأموال؟',
            answer: 'نعم، نوفر ضمان استرداد كامل خلال 14 يوم من الاشتراك إذا لم تكن راضياً عن الخدمة.',
        },
        {
            question: 'كيف أقوم بإلغاء الاشتراك؟',
            answer: 'يمكنك إلغاء الاشتراك في أي وقت من لوحة التحكم. لن يتم خصم أي مبالغ بعد الإلغاء.',
        },
        {
            question: 'هل التقارير محدثة باستمرار؟',
            answer: 'نعم، نضيف تقارير جديدة أسبوعياً ونحدث التقارير الموجودة فور صدور نسخ جديدة منها.',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-accent-50/30 pt-20 pb-12">
            <div className="section-container">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">
                        اختر الخطة المناسبة لك
                    </h1>
                    <p className="text-lg text-neutral-600 mb-8">
                        خطط مرنة تناسب احتياجاتك - ابدأ مجاناً ثم قم بالترقية متى شئت
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg border-2 border-primary-500/10">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-2 rounded-full transition-all font-semibold ${billingCycle === 'monthly'
                                    ? 'bg-primary-500 text-white'
                                    : 'text-neutral-600 hover:text-primary-500'
                                }`}
                        >
                            شهري
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-6 py-2 rounded-full transition-all font-semibold relative ${billingCycle === 'yearly'
                                    ? 'bg-primary-500 text-white'
                                    : 'text-neutral-600 hover:text-primary-500'
                                }`}
                        >
                            سنوي
                            <span className="absolute -top-2 -right-2 bg-accent-200 text-primary-600 text-xs px-2 py-1 rounded-full font-bold">
                                وفّر
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.nameEn}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${plan.popular
                                    ? 'border-primary-500 shadow-lg scale-105'
                                    : 'border-neutral-200 hover:border-primary-300'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                    الأكثر شعبية ⭐
                                </div>
                            )}

                            {/* Icon */}
                            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                                <plan.icon className="w-8 h-8 text-primary-600" />
                            </div>

                            {/* Plan Name */}
                            <h3 className="text-2xl font-bold text-primary-500 mb-2">{plan.name}</h3>
                            <p className="text-neutral-600 mb-6">{plan.description}</p>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-bold text-neutral-800">
                                        {plan.price[billingCycle]}
                                    </span>
                                    {plan.price[billingCycle] > 0 && (
                                        <span className="text-neutral-600">ريال</span>
                                    )}
                                </div>
                                <div className="text-neutral-500 mt-1">
                                    {billingCycle === 'yearly' && plan.price.yearly > 0 ? '/سنة' : '/شهر'}
                                </div>
                                {billingCycle === 'yearly' && plan.savings && (
                                    <div className="text-accent-600 font-semibold mt-2">
                                        وفر {plan.savings} ريال سنوياً 💰
                                    </div>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        {feature.included ? (
                                            <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                                        ) : (
                                            <X className="w-5 h-5 text-neutral-300 flex-shrink-0 mt-0.5" />
                                        )}
                                        <span
                                            className={
                                                feature.included ? 'text-neutral-700' : 'text-neutral-400 line-through'
                                            }
                                        >
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Button
                                variant={plan.popular ? 'primary' : 'outline'}
                                className="w-full"
                                size="lg"
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary-500 text-center mb-8">
                        الأسئلة الشائعة
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 border-2 border-neutral-100 hover:border-primary-300 transition-colors"
                            >
                                <h3 className="text-lg font-bold text-neutral-800 mb-2">{faq.question}</h3>
                                <p className="text-neutral-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-12 text-center text-white"
                >
                    <h2 className="text-3xl font-bold mb-4">ابدأ تجربتك المجانية اليوم</h2>
                    <p className="text-xl mb-6 text-accent-100">لا حاجة لبطاقة ائتمانية</p>
                    <Button variant="accent" size="lg" className="bg-white text-primary-600 hover:bg-accent-50">
                        جرّب مجاناً الآن
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};

export default Pricing;
