import { motion } from 'framer-motion';
import { Search, Download, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Hero = () => {
    const stats = [
        { value: '6000+', label: 'تقرير متاح', icon: Download },
        { value: '800+', label: 'مصدر موثوق', icon: Shield },
        { value: '40+', label: 'تصنيف متخصص', icon: TrendingUp },
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                        >
                            <Shield className="w-4 h-4" />
                            <span className="text-sm font-medium">منصة التقارير والدراسات المتخصصة</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        >
                            رؤية مالية
                            <br />
                            <span className="text-accent-200">لنموذج سعودي</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-accent-100 mb-8 leading-relaxed max-w-xl"
                        >
                            الوصول الفوري لآلاف التقارير الرسمية والدراسات المتخصصة من مصادر موثوقة
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <Link to="/reports">
                                <Button
                                    variant="accent"
                                    size="lg"
                                    icon={Search}
                                    className="bg-white text-primary-600 hover:bg-accent-50 shadow-xl"
                                >
                                    تصفح 6000+ تقرير مجاناً
                                </Button>
                            </Link>
                            <Link to="/pricing">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-white text-white hover:bg-white/10"
                                >
                                    تعرف على الأسعار
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-3 gap-6"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center lg:text-right">
                                    <div className="flex items-center gap-2 mb-1 justify-center lg:justify-start">
                                        <stat.icon className="w-5 h-5 text-accent-200" />
                                        <div className="text-3xl font-bold">{stat.value}</div>
                                    </div>
                                    <div className="text-sm text-accent-100">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Visual - Professional SVG Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <svg viewBox="0 0 600 600" className="w-full h-auto">
                            <defs>
                                <linearGradient id="documentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#f8f9fa', stopOpacity: 1 }} />
                                </linearGradient>

                                <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#0b3d2e', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#165a45', stopOpacity: 1 }} />
                                </linearGradient>

                                <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#d8f0e6', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#b8e6d5', stopOpacity: 1 }} />
                                </linearGradient>

                                <filter id="shadow1" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                                    <feOffset dx="0" dy="4" result="offsetblur" />
                                    <feComponentTransfer>
                                        <feFuncA type="linear" slope="0.3" />
                                    </feComponentTransfer>
                                    <feMerge>
                                        <feMergeNode />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                <filter id="shadow2" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur in="SourceAlpha" stdDeviation="12" />
                                    <feOffset dx="0" dy="8" result="offsetblur" />
                                    <feComponentTransfer>
                                        <feFuncA type="linear" slope="0.2" />
                                    </feComponentTransfer>
                                    <feMerge>
                                        <feMergeNode />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Background Glow */}
                            <circle cx="300" cy="300" r="220" fill="url(#accentGrad)" opacity="0.15" filter="url(#glow)" />

                            {/* Main Document Container */}
                            <g transform="translate(150, 120)">
                                {/* Document 3 - Background */}
                                <g transform="rotate(-5 150 180)" filter="url(#shadow1)">
                                    <rect x="0" y="0" width="300" height="360" rx="16" fill="url(#documentGrad)" stroke="#e0e0e0" strokeWidth="2" />
                                </g>

                                {/* Document 2 - Middle */}
                                <g transform="rotate(-2 150 180)" filter="url(#shadow1)">
                                    <rect x="10" y="10" width="300" height="360" rx="16" fill="url(#documentGrad)" stroke="#d0d0d0" strokeWidth="2" />
                                </g>

                                {/* Document 1 - Front (Main) */}
                                <g filter="url(#shadow2)">
                                    <rect x="20" y="20" width="300" height="360" rx="16" fill="url(#documentGrad)" stroke="#c0c0c0" strokeWidth="2" />

                                    {/* Document Header */}
                                    <rect x="20" y="20" width="300" height="60" rx="16" fill="url(#primaryGrad)" />
                                    <circle cx="50" cy="50" r="18" fill="white" opacity="0.3" />
                                    <rect x="80" y="40" width="200" height="8" rx="4" fill="white" opacity="0.9" />
                                    <rect x="80" y="55" width="150" height="6" rx="3" fill="white" opacity="0.6" />

                                    {/* Content Lines */}
                                    <rect x="45" y="110" width="240" height="8" rx="4" fill="#e8e8e8" />
                                    <rect x="45" y="130" width="210" height="8" rx="4" fill="#e8e8e8" />
                                    <rect x="45" y="150" width="230" height="8" rx="4" fill="#e8e8e8" />
                                    <rect x="45" y="170" width="180" height="8" rx="4" fill="#e8e8e8" />

                                    {/* Stats Cards */}
                                    <g transform="translate(45, 200)">
                                        <rect x="0" y="0" width="120" height="80" rx="12" fill="url(#accentGrad)" opacity="0.6" />
                                        <text x="60" y="35" textAnchor="middle" fill="#0b3d2e" fontSize="24" fontWeight="bold">6K+</text>
                                        <text x="60" y="55" textAnchor="middle" fill="#0b3d2e" fontSize="11" opacity="0.8">تقارير</text>

                                        <rect x="135" y="0" width="120" height="80" rx="12" fill="url(#accentGrad)" opacity="0.8" />
                                        <text x="195" y="35" textAnchor="middle" fill="#0b3d2e" fontSize="24" fontWeight="bold">800+</text>
                                        <text x="195" y="55" textAnchor="middle" fill="#0b3d2e" fontSize="11" opacity="0.8">مصدر</text>
                                    </g>

                                    {/* Chart Area */}
                                    <rect x="45" y="300" width="240" height="60" rx="12" fill="#f8f9fa" />

                                    <g transform="translate(45, 300)">
                                        <path
                                            d="M 20 45 L 40 35 L 60 40 L 80 25 L 100 30 L 120 20 L 140 25 L 160 15 L 180 20 L 200 10 L 220 15"
                                            stroke="url(#primaryGrad)"
                                            strokeWidth="3"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <animate
                                                attributeName="stroke-dasharray"
                                                from="0,400"
                                                to="400,0"
                                                dur="2s"
                                                repeatCount="indefinite"
                                            />
                                        </path>

                                        <circle cx="20" cy="45" r="4" fill="url(#primaryGrad)">
                                            <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
                                        </circle>
                                        <circle cx="80" cy="25" r="4" fill="url(#primaryGrad)">
                                            <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
                                        </circle>
                                        <circle cx="140" cy="25" r="4" fill="url(#primaryGrad)">
                                            <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
                                        </circle>
                                        <circle cx="200" cy="10" r="4" fill="url(#primaryGrad)">
                                            <animate attributeName="r" values="4;6;4" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
                                        </circle>
                                    </g>
                                </g>
                            </g>

                            {/* Floating Action Icons */}
                            <g transform="translate(500, 150)" filter="url(#shadow2)">
                                <circle cx="0" cy="0" r="35" fill="white" />
                                <circle cx="0" cy="0" r="33" fill="url(#primaryGrad)" />
                                <path d="M 0 -12 L 0 8 M -8 2 L 0 10 L 8 2 M -10 12 L 10 12"
                                    stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                <animateTransform
                                    attributeName="transform"
                                    type="translate"
                                    values="500,150; 500,155; 500,150"
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                            </g>

                            <g transform="translate(80, 180)" filter="url(#shadow2)">
                                <circle cx="0" cy="0" r="35" fill="white" />
                                <circle cx="0" cy="0" r="33" fill="url(#accentGrad)" />
                                <circle cx="-4" cy="-4" r="10" stroke="#0b3d2e" strokeWidth="2.5" fill="none" />
                                <line x1="5" y1="5" x2="12" y2="12" stroke="#0b3d2e" strokeWidth="2.5" strokeLinecap="round" />
                                <animateTransform
                                    attributeName="transform"
                                    type="translate"
                                    values="80,180; 80,175; 80,180"
                                    dur="2.5s"
                                    repeatCount="indefinite"
                                />
                            </g>

                            <g transform="translate(100, 480)" filter="url(#shadow1)">
                                <circle cx="0" cy="0" r="30" fill="white" />
                                <circle cx="0" cy="0" r="28" fill="#d8f0e6" />
                                <path d="M -8 0 L -3 6 L 8 -6" stroke="#0b3d2e" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                <animateTransform
                                    attributeName="transform"
                                    type="translate"
                                    values="100,480; 100,485; 100,480"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                            </g>

                            <g transform="translate(520, 450)" filter="url(#shadow1)">
                                <circle cx="0" cy="0" r="28" fill="white" />
                                <circle cx="0" cy="0" r="26" fill="#ffd700" opacity="0.3" />
                                <path d="M 0 -10 L 2.5 -3 L 10 -2 L 4 3 L 5 10 L 0 6 L -5 10 L -4 3 L -10 -2 L -2.5 -3 Z"
                                    fill="url(#primaryGrad)" />
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    values="0 520 450; 360 520 450"
                                    dur="10s"
                                    repeatCount="indefinite"
                                />
                            </g>

                            {[
                                { cx: 120, cy: 120, r: 3 },
                                { cx: 480, cy: 280, r: 4 },
                                { cx: 90, cy: 380, r: 3 },
                                { cx: 520, cy: 320, r: 3 },
                                { cx: 200, cy: 90, r: 2 },
                                { cx: 400, cy: 520, r: 2 },
                            ].map((dot, i) => (
                                <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill="rgba(255,255,255,0.6)">
                                    <animate
                                        attributeName="opacity"
                                        values="0.3;1;0.3"
                                        dur={`${2 + i * 0.5}s`}
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            ))}

                            <line x1="100" y1="480" x2="120" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="5,5">
                                <animate attributeName="stroke-dashoffset" from="0" to="100" dur="3s" repeatCount="indefinite" />
                            </line>
                            <line x1="500" y1="150" x2="520" y2="450" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="5,5">
                                <animate attributeName="stroke-dashoffset" from="0" to="100" dur="4s" repeatCount="indefinite" />
                            </line>
                        </svg>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-white/50 rounded-full"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
