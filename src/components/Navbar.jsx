import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'التقارير', href: '/reports', isRoute: true },
        { name: 'الأسعار', href: '/pricing', isRoute: true },
        { name: 'من نحن', href: '#about', isRoute: false },
        { name: 'تواصل معنا', href: '#contact', isRoute: false },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-md' : 'bg-white/95'
                }`}
        >
            <div className="section-container !py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 text-2xl font-bold cursor-pointer"
                        >
                            <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-primary-500 font-bold">تقارير</span>
                        </motion.div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            link.isRoute ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-neutral-700 hover:text-primary-500 transition-colors duration-300 font-medium"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-neutral-700 hover:text-primary-500 transition-colors duration-300 font-medium"
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                        <Link to="/login">
                            <Button variant="outline" size="sm">
                                تسجيل دخول
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button variant="primary" size="sm">
                                إنشاء حساب
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-primary-500 p-2"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 glass rounded-lg p-4"
                    >
                        {navLinks.map((link) => (
                            link.isRoute ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-3 text-neutral-700 hover:text-primary-500 transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-3 text-neutral-700 hover:text-primary-500 transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                        <div className="border-t border-neutral-200 pt-4 mt-4 space-y-2">
                            <Link to="/login" onClick={() => setIsOpen(false)}>
                                <Button variant="outline" size="sm" className="w-full">
                                    تسجيل دخول
                                </Button>
                            </Link>
                            <Link to="/signup" onClick={() => setIsOpen(false)}>
                                <Button variant="primary" size="sm" className="w-full">
                                    إنشاء حساب
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
