import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Pricing from './pages/Pricing';
import ReportDetails from './pages/ReportDetails';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/report/:id" element={<ReportDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<div className="min-h-screen pt-24 section-container"><h1 className="text-3xl font-bold text-primary-500">سياسة الخصوصية</h1><p className="mt-4 text-neutral-700">قريباً...</p></div>} />
          <Route path="/terms" element={<div className="min-h-screen pt-24 section-container"><h1 className="text-3xl font-bold text-primary-500">الشروط والأحكام</h1><p className="mt-4 text-neutral-700">قريباً...</p></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
