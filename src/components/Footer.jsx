import { Link } from 'react-router-dom';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const services = [
        { name: 'التقارير الاقتصادية', link: '/reports' },
        { name: 'الأداء الحكومي', link: '/reports' },
        { name: 'تحليل الأسواق', link: '/reports' },
        { name: 'الدراسات المؤسسية', link: '/reports' },
    ];

    const company = [
        { name: 'من نحن', link: '/about' },
        { name: 'الخدمات', link: '/reports' },
        { name: 'اتصل بنا', link: '/contact' },
    ];

    const legal = [
        { name: 'سياسة الخصوصية', link: '/privacy' },
        { name: 'الشروط والأحكام', link: '/terms' },
    ];

    return (
        <footer className="bg-gradient-to-br from-primary-500 to-primary-700 text-white">
            <div className="section-container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold">تقارير</span>
                        </Link>
                        <p className="text-accent-100 leading-relaxed mb-6">
                            منصة التقارير والدراسات المهنية الموثوقة
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">الخدمات</h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        to={service.link}
                                        className="text-accent-100 hover:text-white transition-colors block"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">الشركة</h3>
                        <ul className="space-y-3">
                            {company.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.link}
                                        className="text-accent-100 hover:text-white transition-colors block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:info@tagarer.sa"
                                    className="text-accent-100 hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <Mail className="w-4 h-4" />
                                    info@tagarer.sa
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+966XXXXXXXXX"
                                    className="text-accent-100 hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <Phone className="w-4 h-4" />
                                    +966 XX XXX XXXX
                                </a>
                            </li>
                            <li className="text-accent-100 flex items-start gap-2">
                                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                                <span>الرياض، المملكة العربية السعودية</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-accent-100 text-sm text-center md:text-right">
                            © 2025 تقارير. جميع الحقوق محفوظة.
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center">
                            {legal.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className="text-accent-100 hover:text-white text-sm transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
