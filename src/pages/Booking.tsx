// components/Booking.tsx
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Clock, MapPin, Phone, Mail, ChevronDown } from 'lucide-react';
import Swal from 'sweetalert2';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    curriculum: string;
    sessionType: string;
    preferredDate: string;
    preferredTime: string;
    message: string;
}

interface DropdownOption {
    value: string;
    label: string;
}

const sessionTypes: DropdownOption[] = [
    { value: '', label: 'Select session type' },
    { value: 'one-on-one', label: 'One-on-One Tutoring' },
    { value: 'group', label: 'Group Session' },
    { value: 'exam-prep', label: 'Exam Preparation' },
    { value: 'career-coaching', label: 'Career Coaching' },
    { value: 'consultation', label: 'Free Consultation' },
];

const curriculums: DropdownOption[] = [
    { value: '', label: 'Select curriculum' },
    { value: 'nigerian', label: 'Nigerian Curriculum (WAEC/NECO)' },
    { value: 'british', label: 'British Curriculum (IGCSE/A-Levels)' },
    { value: 'american', label: 'American Curriculum (SAT/AP)' },
    { value: 'ib', label: 'International Baccalaureate (IB)' },
    { value: 'other', label: 'Other / Not Sure' },
];

const contactInfo = [
    { icon: Clock, label: 'Working Hours', value: 'Mon – Sat, 8 AM – 8 PM' },
    { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria (Online & In-Person)' },
    { icon: Phone, label: 'Phone', value: '+234 812 345 6789' },
    { icon: Mail, label: 'Email', value: 'hello@fastlane.ng' },
];

const faqs = [
    {
        question: 'How long is a typical session?',
        answer: 'Sessions typically last 60–90 minutes depending on the session type. One-on-One tutoring and Exam Prep sessions run 90 minutes, while consultations are 30 minutes.',
    },
    {
        question: 'Can I reschedule or cancel?',
        answer: 'Yes! You can reschedule or cancel up to 24 hours before your session at no charge. Simply reply to your confirmation email or contact us directly.',
    },
    {
        question: 'Is the first session really free?',
        answer: 'Absolutely. Your first consultation is completely free, no strings attached. It\'s an opportunity for us to understand your goals and for you to experience our teaching style.',
    },
    {
        question: 'What do I need to prepare?',
        answer: 'Nothing special! Just bring your questions and any materials you\'d like to review. We\'ll handle the rest and tailor the session to your needs.',
    },
];

export default function Booking() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        curriculum: '',
        sessionType: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
    });

    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const contentType = res.headers.get('content-type');
            let data;
            if (contentType && contentType.includes('application/json')) {
                data = await res.json();
            } else {
                const text = await res.text();
                console.error('Non-JSON response:', text);
                data = { error: 'Server returned an unexpected response format.' };
            }

            if (res.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Thank you! Your booking request has been submitted.',
                    icon: 'success',
                    background: '#111111',
                    color: '#ffffff',
                    confirmButtonColor: '#194070',
                    customClass: {
                        popup: 'border border-white/10 rounded-2xl'
                    }
                });
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    curriculum: '',
                    sessionType: '',
                    preferredDate: '',
                    preferredTime: '',
                    message: '',
                });
            } else {
                console.error('Booking API Error:', data);
                Swal.fire({
                    title: 'Oops!',
                    text: data.error || 'Server error occurred during booking.',
                    icon: 'error',
                    background: '#111111',
                    color: '#ffffff',
                    confirmButtonColor: '#FF3333',
                    customClass: {
                        popup: 'border border-white/10 rounded-2xl'
                    }
                });
            }
        } catch (err: any) {
            console.error('Booking Fetch Error:', err);
            Swal.fire({
                title: 'Connection Error',
                text: 'Could not connect to the booking service. Please check your internet connection or try again later.',
                icon: 'error',
                background: '#111111',
                color: '#ffffff',
                confirmButtonColor: '#FF3333',
                customClass: {
                    popup: 'border border-white/10 rounded-2xl'
                }
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
                {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" /> */}

                <div className="relative z-10 px-6 md:px-16 lg:px-24 text-center">
                    <div
                        className="inline-block px-4 py-1.5 rounded-full border-y border-white/20 bg-white/5 text-[10px] font-bold tracking-widest uppercase text-blue-400 mb-4"
                    >
                        Book a Session
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                        Start Your Learning
                        <br />
                        <span className="text-gray-500">Journey Today</span>
                    </h1>

                    <p className="text-gray-400 text-[15px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
                        Schedule a free consultation or book a session with one of our expert tutors. We'll match you with the perfect instructor for your goals.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-6 md:px-16 lg:px-24 pb-24">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Booking Form */}
                    <div className="lg:w-3/5">
                        <div className="border border-white/10 rounded-2xl p-8 md:p-10 bg-white/[0.02] backdrop-blur-sm">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">Book Your Session</h2>
                            <p className="text-gray-500 text-sm mb-10">
                                Fill in the details below and we'll get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                                            First Name
                                        </label>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="John"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                                            Last Name
                                        </label>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Email & Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+234 800 000 0000"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Dropdowns */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="curriculum" className="block text-sm font-medium text-gray-300">
                                            Curriculum
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="curriculum"
                                                name="curriculum"
                                                required
                                                value={formData.curriculum}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                                            >
                                                {curriculums.map((c) => (
                                                    <option key={c.value} value={c.value} className="bg-black text-white">
                                                        {c.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="sessionType" className="block text-sm font-medium text-gray-300">
                                            Session Type
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="sessionType"
                                                name="sessionType"
                                                required
                                                value={formData.sessionType}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                                            >
                                                {sessionTypes.map((s) => (
                                                    <option key={s.value} value={s.value} className="bg-black text-white">
                                                        {s.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                {/* Date & Time */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300">
                                            Preferred Date
                                        </label>
                                        <input
                                            id="preferredDate"
                                            name="preferredDate"
                                            type={formData.preferredDate ? "date" : "text"}
                                            onFocus={(e) => (e.target.type = "date")}
                                            onBlur={(e) => !formData.preferredDate && (e.target.type = "text")}
                                            required
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            placeholder="Select preferred date"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300">
                                            Preferred Time
                                        </label>
                                        <input
                                            id="preferredTime"
                                            name="preferredTime"
                                            type={formData.preferredTime ? "time" : "text"}
                                            onFocus={(e) => (e.target.type = "time")}
                                            onBlur={(e) => !formData.preferredTime && (e.target.type = "text")}
                                            required
                                            value={formData.preferredTime}
                                            onChange={handleChange}
                                            placeholder="Select preferred time"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Additional Notes */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                        Additional Notes <span className="text-gray-600">(optional)</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Any specific topics, goals, or questions you'd like to discuss..."
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`group w-fit flex items-center justify-between gap-4 px-2 py-1.5 pl-6 rounded-full border transition-all duration-300 ${loading ? 'border-gray-700 opacity-50 cursor-not-allowed' : 'border-gray-500 hover:border-white cursor-pointer'} bg-transparent`}
                                >
                                    <span className="text-[17px] font-medium text-white">
                                        {loading ? 'Processing...' : 'Book a Session'}
                                    </span>
                                    <span className="bg-white rounded-full p-2.5 text-black">
                                        <FaArrowRight size={16} />
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Sidebar (contact info & FAQs) */}
                    <div className="lg:w-2/5 space-y-8">
                        {/* Contact Info */}
                        <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
                            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                            <div className="space-y-6">
                                {contactInfo.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 flex-shrink-0">
                                            <item.icon size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">{item.label}</p>
                                            <p className="text-sm text-white">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQs */}
                        <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
                            <h3 className="text-xl font-bold mb-6">Common Questions</h3>
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="border-b border-white/5 last:border-b-0 pb-4 last:pb-0">
                                        <button
                                            onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                                            className="flex items-center justify-between w-full text-left gap-4 py-1 cursor-pointer"
                                        >
                                            <span className="text-sm font-medium text-gray-200">{faq.question}</span>
                                            <ChevronDown
                                                className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${expandedFaq === i ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                            <p className="text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}