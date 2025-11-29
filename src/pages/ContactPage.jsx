import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'البريد الإلكتروني',
            value: 'info@tagarer.sa',
            link: 'mailto:info@tagarer.sa',
        },
        {
            icon: Phone,
            title: 'الهاتف',
            value: '+966 XX XXX XXXX',
            link: 'tel:+966XXXXXXXXX',
        },
        {
            icon: MapPin,
            title: 'الموقع',
            value: 'الرياض، المملكة العربية السعودية',
            link: null,
        },
        {
            icon: Clock,
            title: 'ساعات العمل',
            value: 'الأحد - الخميس: 9:00 ص - 5:00 م',
            link: null,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-accent-50 to-white pt-24 pb-16">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 mb-4">
                        تواصل معنا
                    </h1>
                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                        نحن هنا للإجابة على استفساراتك ومساعدتك في الحصول على المعلومات التي تحتاجها
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-primary-500/10">
                            <h2 className="text-2xl font-bold text-primary-500 mb-6">أرسل لنا رسالة</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                        الاسم الكامل
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                                        placeholder="أدخل اسمك الكامل"
                                        required
                                    />
                                </div>

                                {/* Email & Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                            البريد الإلكتروني
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                            رقم الهاتف
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                                            placeholder="+966 XX XXX XXXX"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                        الموضوع
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                                        placeholder="موضوع الرسالة"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                        الرسالة
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows="5"
                                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                                        placeholder="اكتب رسالتك هنا..."
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    إرسال الرسالة
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Contact Cards */}
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-500/10 hover:border-primary-300 hover:shadow-xl transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                                        <info.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-neutral-800 mb-1">{info.title}</h3>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="text-primary-600 hover:text-primary-700 font-medium"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-neutral-600">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Support CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white"
                        >
                            <MessageSquare className="w-12 h-12 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">هل تحتاج مساعدة فورية؟</h3>
                            <p className="text-accent-100 mb-4">
                                فريق الدعم الفني متاح للإجابة على استفساراتك في أوقات العمل الرسمية
                            </p>
                            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-accent-50 transition-colors">
                                تحدث مع الدعم الفني
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
