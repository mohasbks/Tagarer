import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, Eye, FileText, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Reports = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data - في التطبيق الفعلي سيأتي من API
  const reports = [
    {
      id: 1,
      title: 'تقرير التشريعات الرياضية بالمملكة العربية السعودية',
      source: 'قسطاس',
      year: 2025,
      type: 'تقارير أخرى',
    },
    {
      id: 2,
      title: 'التكامل الفعال للحوسبة السحابية في التحول الرقمي بقطاع التعليم',
      source: 'هيئة الحكومة الرقمية',
      year: 2025,
      type: 'التقارير الحكومية الأخرى',
    },
    // يمكن إضافة المزيد من التقارير هنا
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-accent-50/30 pt-24">
      <div className="section-container">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">
            مكتبة التقارير
          </h1>
          <p className="text-lg text-neutral-600">
            تصفح وابحث في مكتبتنا الشاملة من التقارير المتخصصة
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 mb-8 shadow-lg border-2 border-primary-500/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative md:col-span-2">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="أدخل كلمة البحث هنا..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none text-neutral-700"
              />
            </div>

            {/* Type Filter */}
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none text-neutral-700 appearance-none"
              >
                <option value="">نوع التقارير</option>
                <option value="government">التقارير الحكومية</option>
                <option value="ai">تقارير الذكاء الاصطناعي</option>
                <option value="charity">تقارير الجمعيات الخيرية</option>
                <option value="other">تقارير أخرى</option>
              </select>
              <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
            </div>

            {/* Source Filter */}
            <div className="relative">
              <select
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none text-neutral-700 appearance-none"
              >
                <option value="">اختر المصدر</option>
                <option value="source1">هيئة الحكومة الرقمية</option>
                <option value="source2">قسطاس</option>
                <option value="source3">صكوك</option>
              </select>
              <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Reports Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-primary-500/10"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-right font-semibold">اسم التقرير</th>
                  <th className="px-6 py-4 text-right font-semibold">المصدر</th>
                  <th className="px-6 py-4 text-right font-semibold">السنة</th>
                  <th className="px-6 py-4 text-right font-semibold">النوع</th>
                  <th className="px-6 py-4 text-right font-semibold">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <motion.tr
                    key={report.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-neutral-100 hover:bg-accent-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="text-neutral-800 font-medium">{report.title}</div>
                    </td>
                    <td className="px-6 py-4 text-neutral-600">{report.source}</td>
                    <td className="px-6 py-4 text-neutral-600">{report.year}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 bg-accent-100 text-primary-600 text-sm rounded-full">
                        {report.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-2 hover:bg-primary-100 rounded-lg transition-colors group"
                          title="تحميل"
                        >
                          <Download className="w-5 h-5 text-primary-500 group-hover:text-primary-600" />
                        </button>
                        <button
                          className="p-2 hover:bg-primary-100 rounded-lg transition-colors group"
                          title="قراءة"
                        >
                          <Eye className="w-5 h-5 text-primary-500 group-hover:text-primary-600" />
                        </button>
                        <button
                          className="p-2 hover:bg-primary-100 rounded-lg transition-colors group"
                          title="تلخيص"
                        >
                          <FileText className="w-5 h-5 text-primary-500 group-hover:text-primary-600" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 p-6 border-t border-neutral-100">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="p-2 rounded-lg border-2 border-neutral-200 hover:border-primary-500 hover:bg-primary-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
            >
              <ChevronRight className="w-5 h-5 text-neutral-600" />
            </button>

            <button className="px-4 py-2 rounded-lg bg-primary-500 text-white font-semibold">
              1
            </button>
            <button className="px-4 py-2 rounded-lg border-2 border-neutral-200 hover:border-primary-500 hover:bg-primary-50 transition-all text-neutral-700">
              2
            </button>
            <span className="px-3 text-neutral-500">...</span>
            <button className="px-4 py-2 rounded-lg border-2 border-neutral-200 hover:border-primary-500 hover:bg-primary-50 transition-all text-neutral-700">
              167
            </button>

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="p-2 rounded-lg border-2 border-neutral-200 hover:border-primary-500 hover:bg-primary-50 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-600" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reports;
