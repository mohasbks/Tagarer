import Hero from "../components/Hero";
import Features from "../components/Features";
import ReportShowcase from "../components/ReportShowcase";
import TrustedBy from "../components/TrustedBy";
import SubscriptionBenefits from "../components/SubscriptionBenefits";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <ReportShowcase />
            <TrustedBy />
            <SubscriptionBenefits />
            <About />
            <Contact />
        </>
    );
};

export default Home;
