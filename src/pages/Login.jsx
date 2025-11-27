import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, FileText } from 'lucide-react';
import Button from '../components/Button';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login:', formData);
    };

    const handleSocialLogin = (provider) => {
        console.log(`Login with ${provider}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-accent-50/30 pt-24 pb-16">
            <div className="section-container">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden lg:block"
                    >
                        <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-12 text-white">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                                    <FileText className="w-7 h-7" />
                                </div>
                                <span className="text-3xl font-bold">تقارير</span>
                            </div>

                            <h2 className="text-3xl font-bold mb-4">أهلاً بك مرة أخرى!</h2>
                            <p className="text-accent-100 text-lg mb-8">
                                الوصول إلى آلاف التقارير والدراسات المتخصصة في انتظارك
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/10 rounded-xl p-4">
                                    <div className="text-3xl font-bold mb-1">6000+</div>
                                    <div className="text-accent-100 text-sm">تقرير متاح</div>
                                </div>
                                <div className="bg-white/10 rounded-xl p-4">
                                    <div className="text-3xl font-bold mb-1">40+</div>
                                    <div className="text-accent-100 text-sm">تصنيف</div>
                                </div>
                                <div className="bg-white/10 rounded-xl p-4">
                                    <div className="text-3xl font-bold mb-1">800+</div>
                                    <div className="text-accent-100 text-sm">مصدر موثوق</div>
                                </div>
                                <div className="bg-white/10 rounded-xl p-4">
                                    <div className="text-3xl font-bold mb-1">24/7</div>
                                    <div className="text-accent-100 text-sm">دعم فني</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-primary-500/10"
                    >
                        <h1 className="text-3xl font-bold text-primary-500 mb-2">تسجيل الدخول</h1>
                        <p className="text-neutral-600 mb-8">مرحباً بعودتك! سجل دخولك للمتابعة</p>

                        {/* Social Login */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <button
                                onClick={() => handleSocialLogin('google')}
                                className="flex items-center justify-center gap-2 p-3 border-2 border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={() => handleSocialLogin('apple')}
                                className="flex items-center justify-center gap-2 p-3 border-2 border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={() => handleSocialLogin('twitter')}
                                className="flex items-center justify-center gap-2 p-3 border-2 border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-neutral-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-neutral-500">أو سجل دخول بالبريد</span>
                            </div>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                    البريد الإلكتروني
                                </label>
                                <div className="relative">
                                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="name@example.com"
                                        className="w-full pr-10 pl-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                    كلمة المرور
                                </label>
                                <div className="relative">
                                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        placeholder="••••••••"
                                        className="w-full pr-10 pl-12 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember & Forgot */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.remember}
                                        onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                                        className="w-4 h-4 accent-primary-500"
                                    />
                                    <span className="text-sm text-neutral-700">تذكرني</span>
                                </label>
                                <Link to="/forgot-password" className="text-sm text-primary-500 hover:text-primary-600">
                                    نسيت كلمة المرور؟
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <Button type="submit" variant="primary" className="w-full" size="lg">
                                تسجيل الدخول
                            </Button>
                        </form>

                        {/* Sign Up Link */}
                        <p className="text-center text-neutral-600 mt-6">
                            ليس لديك حساب؟{' '}
                            <Link to="/signup" className="text-primary-500 hover:text-primary-600 font-semibold">
                                سجل الآن
                            </Link>
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Login;
