import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from './Button';
import Card from './Card';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'البريد الإلكتروني',
            value: 'info@tagarer.sa',
            href: 'mailto:info@tagarer.sa',
        },
        {
            icon: Phone,
            title: 'الهاتف',
            value: '+966 XX XXX XXXX',
            href: 'tel:+966XXXXXXXXX',
        },
        {
            icon: MapPin,
            title: 'العنوان',
            value: 'الرياض، المملكة العربية السعودية',
            href: '#',
        },
    ];

    return (
        <section id="contact" className="section-container section-bg-accent">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-500">
                    تواصل معنا
                </h2>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                    نحن هنا لمساعدتك. تواصل معنا وسنكون سعداء بالرد على استفساراتك
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="h-full bg-white">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                                    الاسم
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-neutral-700 placeholder-neutral-400 bg-white border border-neutral-200"
                                    placeholder="أدخل اسمك"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                                    البريد الإلكتروني
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-neutral-700 placeholder-neutral-400 bg-white border border-neutral-200"
                                    placeholder="example@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                                    رقم الهاتف
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-neutral-700 placeholder-neutral-400 bg-white border border-neutral-200"
                                    placeholder="+966 XX XXX XXXX"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                                    الرسالة
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-neutral-700 placeholder-neutral-400 resize-none bg-white border border-neutral-200"
                                    placeholder="اكتب رسالتك هنا..."
                                />
                            </div>

                            <Button type="submit" variant="primary" size="lg" icon={Send} className="w-full">
                                إرسال الرسالة
                            </Button>
                        </form>
                    </Card>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a
                                href={info.href}
                                className="block glass-hover rounded-xl p-6 transition-all duration-300 bg-white"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary-500 flex items-center justify-center flex-shrink-0">
                                        <info.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-primary-500 mb-1">{info.title}</h3>
                                        <p className="text-neutral-600">{info.value}</p>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}

                    {/* Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass rounded-xl p-6 h-64 flex items-center justify-center bg-gradient-to-br from-accent-50 to-white border-2 border-primary-500/10"
                    >
                        <div className="text-center">
                            <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-2" />
                            <p className="text-neutral-600 font-semibold">موقعنا</p>
                            <p className="text-sm text-neutral-500 mt-1">الرياض، المملكة العربية السعودية</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
