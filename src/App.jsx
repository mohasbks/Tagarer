import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ReportShowcase from './components/ReportShowcase'
import Services from './components/Services'
import TrustedBy from './components/TrustedBy'
import SubscriptionBenefits from './components/SubscriptionBenefits'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ReportShowcase />
        <Services />
        <TrustedBy />
        <SubscriptionBenefits />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
