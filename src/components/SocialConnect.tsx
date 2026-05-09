import { FaWhatsapp, FaTiktok, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

interface SocialCard {
    id: string;
    name: string;
    icon: React.ReactNode;
    handle: string;
    description: string;
    buttonText: string;
    link: string;
    gradientFrom: string;
    gradientTo: string;
}

const socialCards: SocialCard[] = [
    {
        id: 'whatsapp',
        name: 'WhatsApp',
        icon: <FaWhatsapp className="w-10 h-10 md:w-12 md:h-12" />,
        handle: 'Contact Us on WhatsApp',
        description: 'Get instant support and quick responses',
        buttonText: 'Message on WhatsApp',
        link: 'https://wa.me/2347062510816',
        gradientFrom: 'from-[#194970]',
        gradientTo: 'to-[#2E9D41]'
    },
    {
        id: 'tiktok',
        name: 'TikTok',
        icon: <FaTiktok className="w-10 h-10 md:w-12 md:h-12" />,
        handle: '@fastlane.tutors',
        description: 'Follow us for educational content',
        buttonText: 'Follow Us',
        link: 'https://www.tiktok.com/@fastlane.tutors?_r=1&_t=ZS-96Ag9gpTeHF',
        gradientFrom: 'from-[#194970]',
        gradientTo: 'to-[#2E9D41]'
    },
    {
        id: 'twitter',
        name: 'Twitter (X)',
        icon: <FaXTwitter className="w-10 h-10 md:w-12 md:h-12" />,
        handle: 'Follow us for updates and tips',
        description: 'Stay updated with latest news',
        buttonText: 'Follow Us',
        link: '#',
        gradientFrom: 'from-[#194970]',
        gradientTo: 'to-[#2E9D41]'
    },
    {
        id: 'facebook',
        name: 'Facebook',
        icon: <FaFacebook className="w-10 h-10 md:w-12 md:h-12" />,
        handle: 'Connect with our community',
        description: 'Join our learning community',
        buttonText: 'Visit Facebook',
        link: '#',
        gradientFrom: 'from-[#194970]',
        gradientTo: 'to-[#2E9D41]'
    },
    {
        id: 'instagram',
        name: 'Instagram',
        icon: <FaInstagram className="w-10 h-10 md:w-12 md:h-12" />,
        handle: '@fastlane.tutors',
        description: 'Visual learning and inspiration',
        buttonText: 'Follow Us',
        link: 'https://www.instagram.com/fastlane.tutors?igsh=MXB5Z3lhdWVveGR3dw%3D%3D&utm_source=qr',
        gradientFrom: 'from-[#194970]',
        gradientTo: 'to-[#2E9D41]'
    },
    {
        id: 'youtube',
        name: 'YouTube',
        icon: <FaYoutube className="w-10 h-10 md:w-12 md:h-12" />,
        handle: '@fastlanetutors',
        description: 'Watch educational tutorials',
        buttonText: 'Subscribe on YouTube',
        link: 'https://youtube.com/@fastlanetutors?si=DzDSPFMqlqXMC91V',
        gradientFrom: 'from-[#194970]',
        gradientTo: 'to-[#2E9D41]'
    }
];

export default function SocialConnect() {
    return (
        <section className="py-16 md:py-24 text-black dark:text-white">
            <div className="text-center mb-16 md:mb-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Get In <span className="text-[#194970]">Touch</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                    Connect with us on social media
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {socialCards.map((social) => (
                    <div
                        key={social.id}
                        className="relative group"
                    >
                        {/* Gradient Border Effect */}
                        <div className={`absolute -inset-[1px] bg-gradient-to-r ${social.gradientFrom} ${social.gradientTo} rounded-xl md:rounded-2xl opacity-100`} />
                        
                        {/* Card Content */}
                        <div className="relative bg-white dark:bg-[#111111] rounded-xl md:rounded-2xl p-6 md:p-8 h-full flex flex-col items-center text-center space-y-3 md:space-y-4 transition-transform duration-300 hover:scale-[1.02]">
                            {/* Icon */}
                            <div className="text-[#194970]">
                                {social.icon}
                            </div>

                            {/* Platform Name */}
                            <h3 className="text-lg md:text-2xl font-bold text-black dark:text-white">
                                {social.name}
                            </h3>

                            {/* Handle/Description */}
                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                {social.handle}
                            </p>

                            {/* Button */}
                            <button
                                onClick={() => window.open(social.link, '_blank')}
                                className="mt-auto px-3 md:px-6 py-2 md:py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-[#194970] dark:hover:border-[#194970] transition-colors text-xs md:text-sm font-medium text-black dark:text-white hover:bg-[#194970]/5 dark:hover:bg-[#194970]/10"
                            >
                                {social.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
