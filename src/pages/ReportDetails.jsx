import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Download,
    Eye,
    FileText,
    Share2,
    Bookmark,
    Printer,
    Calendar,
    FileType,
    HardDrive,
    Tag,
    ArrowRight,
} from 'lucide-react';
import Button from '../components/Button';

const ReportDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isSaved, setIsSaved] = useState(false);

    // Sample data - في التطبيق الفعلي سيأتي من API
    const report = {
        id: 1,
        title: 'تقرير التشريعات الرياضية بالمملكة العربية السعودية',
        source: 'قسطاس',
        sourceLogo: '/SVG/1-Dg2imleq.svg',
        publishDate: '2025-01-15',
        pages: 156,
        fileSize: '3.2 MB',
        type: 'تقارير أخرى',
        rating: 4.5,
        downloads: 1243,
        views: 5821,
        summary: `يقدم هذا التقرير تحليلاً شاملاً للتشريعات الرياضية في المملكة العربية السعودية، مع التركيز على التطورات التشريعية الأخيرة وأثرها على القطاع الرياضي. يستعرض التقرير الإطار القانوني الحاكم للأنشطة الرياضية، بما في ذلك الأندية والاتحادات الرياضية، وآليات الحوكمة الرياضية.

كما يتناول التقرير المبادرات الحكومية لتطوير القطاع الرياضي ضمن رؤية المملكة 2030، والتحديات القانونية التي تواجه الاستثمار الرياضي، مع تقديم توصيات عملية لتحسين البيئة التشريعية.`,
        keywords: ['تشريعات رياضية', 'قانون رياضي', 'السعودية', 'أندية رياضية', 'رؤية 2030'],
        tableOfContents: [
            { title: 'المقدمة', page: 5 },
            { title: 'الإطار التشريعي للرياضة في المملكة', page: 15 },
            { title: 'حوكمة الأندية والاتحادات الرياضية', page: 35 },
            { title: 'الاستثمار الرياضي والتحديات القانونية', page: 68 },
            { title: 'المبادرات الحكومية ورؤية 2030', page: 95 },
            { title: 'التوصيات والخلاصة', page: 140 },
        ],
    };

    const relatedReports = [
        {
            id: 2,
            title: 'تقرير قطاع المطاعم في المملكة العربية السعودية',
            source: 'صكوك',
            year: 2025,
            type: 'تقارير أخرى',
        },
        {
            id: 3,
            title: 'التكامل الفعال للحوسبة السحابية في التحول الرقمي',
            source: 'هيئة الحكومة الرقمية',
            year: 2025,
            type: 'التقارير الحكومية',
        },
        {
            id: 4,
            title: 'تقرير مركز ريادة الأعمال الرقمية للربع الأول',
            source: 'مركز ريادة الأعمال الرقمية',
            year: 2025,
            type: 'التقارير الحكومية',
        },
    ];

    const isSubscribed = false; // في التطبيق الفعلي سيأتي من حالة المستخدم

    return (
        <div className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-accent-50/30 pt-24 pb-16">
            <div className="section-container">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/reports')}
                    className="flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-6 font-semibold"
                >
                    <ArrowRight className="w-5 h-5" />
                    العودة إلى التقارير
                </motion.button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Report Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl p-8 mb-6 shadow-lg border-2 border-primary-500/10"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h1 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
                                        {report.title}
                                    </h1>
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={report.sourceLogo}
                                                alt={report.source}
                                                className="w-8 h-8 object-contain"
                                            />
                                            <span className="font-semibold text-neutral-700">{report.source}</span>
                                        </div>
                                        <span className="px-3 py-1 bg-accent-100 text-primary-600 rounded-full text-sm font-semibold">
                                            {report.type}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsSaved(!isSaved)}
                                    className={`p-3 rounded-lg transition-colors ${isSaved
                                            ? 'bg-primary-500 text-white'
                                            : 'bg-neutral-100 text-neutral-600 hover:bg-primary-100'
                                        }`}
                                >
                                    <Bookmark className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Metadata */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="flex items-center gap-2 text-neutral-600">
                                    <Calendar className="w-5 h-5" />
                                    <span className="text-sm">{report.publishDate}</span>
                                </div>
                                <div className="flex items-center gap-2 text-neutral-600">
                                    <FileType className="w-5 h-5" />
                                    <span className="text-sm">{report.pages} صفحة</span>
                                </div>
                                <div className="flex items-center gap-2 text-neutral-600">
                                    <HardDrive className="w-5 h-5" />
                                    <span className="text-sm">{report.fileSize}</span>
                                </div>
                                <div className="flex items-center gap-2 text-neutral-600">
                                    <Eye className="w-5 h-5" />
                                    <span className="text-sm">{report.views} مشاهدة</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3">
                                {isSubscribed ? (
                                    <>
                                        <Button variant="primary" icon={Download}>
                                            تحميل PDF
                                        </Button>
                                        <Button variant="outline" icon={Eye}>
                                            قراءة أونلاين
                                        </Button>
                                        <Button variant="outline" icon={FileText}>
                                            تلخيص بالذكاء الاصطناعي
                                        </Button>
                                        <Button variant="outline" icon={Share2}>
                                            مشاركة
                                        </Button>
                                        <Button variant="outline" icon={Printer}>
                                            طباعة
                                        </Button>
                                    </>
                                ) : (
                                    <div className="w-full">
                                        <Button variant="primary" className="w-full mb-3">
                                            اشترك للوصول الكامل
                                        </Button>
                                        <Button variant="outline" className="w-full">
                                            معاينة محدودة (أول 3 صفحات)
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-8 mb-6 shadow-lg border-2 border-primary-500/10"
                        >
                            <h2 className="text-2xl font-bold text-primary-500 mb-4">الملخص التنفيذي</h2>
                            <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                                {report.summary}
                            </p>

                            {/* Keywords */}
                            <div className="mt-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Tag className="w-5 h-5 text-primary-500" />
                                    <span className="font-semibold text-neutral-700">الكلمات المفتاحية:</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {report.keywords.map((keyword, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-accent-100 text-primary-600 rounded-full text-sm cursor-pointer hover:bg-primary-100 transition-colors"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Table of Contents */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-500/10"
                        >
                            <h2 className="text-2xl font-bold text-primary-500 mb-4">جدول المحتويات</h2>
                            <div className="space-y-2">
                                {report.tableOfContents.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-3 hover:bg-accent-50 rounded-lg transition-colors cursor-pointer"
                                    >
                                        <span className="text-neutral-700">{item.title}</span>
                                        <span className="text-neutral-500 text-sm">صفحة {item.page}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Related Reports */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-500/10 sticky top-24"
                        >
                            <h3 className="text-xl font-bold text-primary-500 mb-4">قد يهمك أيضاً</h3>
                            <div className="space-y-4">
                                {relatedReports.map((relatedReport) => (
                                    <div
                                        key={relatedReport.id}
                                        onClick={() => navigate(`/report/${relatedReport.id}`)}
                                        className="p-4 border-2 border-neutral-100 rounded-lg hover:border-primary-300 hover:shadow-md transition-all cursor-pointer"
                                    >
                                        <h4 className="font-semibold text-neutral-800 mb-2 line-clamp-2">
                                            {relatedReport.title}
                                        </h4>
                                        <div className="text-sm text-neutral-600 mb-2">{relatedReport.source}</div>
                                        <span className="text-xs px-2 py-1 bg-accent-100 text-primary-600 rounded-full">
                                            {relatedReport.type}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportDetails;
