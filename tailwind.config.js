/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // TAGARER Brand Colors - Professional Saudi Identity
                primary: {
                    50: '#e6f2ed',
                    100: '#cce5db',
                    200: '#99cbb7',
                    300: '#66b193',
                    400: '#33976f',
                    500: '#0b3d2e', // Main Dark Green - Trust & Stability
                    600: '#093126',
                    700: '#07251e',
                    800: '#051915',
                    900: '#020c0b',
                },
                accent: {
                    50: '#f7fdfb',
                    100: '#d8f0e6', // Light Mint Green - Modern & Friendly
                    200: '#b1e1cd',
                    300: '#8ad2b4',
                    400: '#63c39b',
                    500: '#3cb482',
                    600: '#309068',
                    700: '#246c4e',
                    800: '#184834',
                    900: '#0c241a',
                },
                neutral: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151', // Dark Gray for text
                    800: '#1f2937',
                    900: '#111827',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                arabic: ['Cairo', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
