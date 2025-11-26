import { motion } from 'framer-motion';
import {
    FileText,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { name: 'التقارير الاقتصادية', href: '#services' },
            { name: 'الأداء الحكومي', href: '#services' },
            { name: 'تحليل الأسواق', href: '#services' },
            { name: 'الدراسات المؤسسية', href: '#services' },
        ],
        company: [
            { name: 'من نحن', href: '#about' },
            { name: 'الخدمات', href: '#services' },
            { name: 'اتصل بنا', href: '#contact' },
        ],
    };

    const socialLinks = [
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
    ];

    return (
        <footer className="section-bg-primary text-white mt-20">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                                <FileText className="w-6 h-6 text-primary-500" />
                            </div>
                            <span className="text-2xl font-bold text-white">تقارير</span>
                        </div>
                        <p className="text-accent-100 mb-4">
                            منصة التقارير والدراسات المهنية الموثوقة
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-white" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-4">الخدمات</h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-accent-100 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-4">الشركة</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-accent-100 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-4">تواصل معنا</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-accent-100">
                                <Mail className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                                <span>info@tagarer.sa</span>
                            </li>
                            <li className="flex items-start gap-3 text-accent-100">
                                <Phone className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                                <span>+966 XX XXX XXXX</span>
                            </li>
                            <li className="flex items-start gap-3 text-accent-100">
                                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                                <span>الرياض، المملكة العربية السعودية</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-accent-100 text-sm">
                            © {currentYear} تقارير. جميع الحقوق محفوظة.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-accent-100 hover:text-white transition-colors">
                                سياسة الخصوصية
                            </a>
                            <a href="#" className="text-accent-100 hover:text-white transition-colors">
                                الشروط والأحكام
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
