import '../App.css';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';

export default function Home() {
    return (
        <div className="px-6 md:px-16 lg:px-24 overflow-hidden">
            <Hero />
            <AboutSection />
            <Services />
            <FaqSection />
            <Testimonials />
        </div>
    );
}
