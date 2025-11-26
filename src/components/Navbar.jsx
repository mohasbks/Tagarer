import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'التقارير', href: '#reports' },
        { name: 'الأسعار', href: '#pricing' },
        { name: 'من نحن', href: '#about' },
        { name: 'تواصل معنا', href: '#contact' },
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
                    <motion.a
                        href="#home"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 text-2xl font-bold"
                    >
                        <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                            <FileText className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-primary-500 font-bold">تقارير</span>
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-neutral-700 hover:text-primary-500 transition-colors duration-300 font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button variant="primary" size="sm">
                            جرّب مجاناً
                        </Button>
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
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-3 text-neutral-700 hover:text-primary-500 transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button variant="primary" size="sm" className="w-full mt-2">
                            جرّب مجاناً
                        </Button>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
