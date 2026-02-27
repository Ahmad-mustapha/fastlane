import { useState } from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const [agreed, setAgreed] = useState(false);
    const [email, setEmail] = useState("");

    const handleJoin = () => {
        if (!agreed) {
            alert("Please agree to receive marketing emails first.");
            return;
        }
        if (!email) {
            alert("Please enter your email address.");
            return;
        }
        alert(`Thanks for joining! We'll send updates to ${email}`);
        setEmail("");
    };

    return (
        <footer className="text-white pt-12 md:pt-24 overflow-hidden relative border-t border-white/10">
            {/* Creative Background Elements */}
            {/* <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" /> */}

            <div className="flex items-center justify-center flex-col relative z-10 w-full mb-24 px-6 md:px-16 lg:px-24">
                <div className="flex flex-col items-center text-center gap-6 md:gap-8 mx-auto">
                    {/* <img src={Whitelogo} alt="Fastlane Logo" className="w-20 md:w-24 mb-4" /> */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight w-full">
                        Uncover a new approach to learning
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg max-w-xl">
                        Get started with Fastlane now and be part of a community of learners, from beginners to top achievers.
                    </p>
                    <Link to="/booking" className="sm:w-auto flex items-center justify-between gap-2 px-4 py-3 pl-4 md:pl-6 rounded-full border border-gray-400 dark:border-gray-600 hover:border-white transition-colors bg-transparent text-left w-[220px] md:w-[250px] group">
                        <span className="text-[14px] font-medium md:text-[17px]">Book Free Session</span>
                        <span className="bg-white rounded-full p-3 text-black duration-300 group-hover:scale-110">
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="w-full relative z-10">

                {/* Main Footer Links Grid */}
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 mb-14">
                    {/* Column 1 */}
                    <div className="space-y-6">
                        <h4 className="font-medium text-gray-400 text-sm flex items-center gap-2">
                            <span className="text-gray-600 font-mono text-xs">//</span> Product
                        </h4>
                        <ul className="space-y-4 text-gray-300">
                            {[
                                { name: 'One-on-One Tutoring', link: '/services' },
                                { name: 'Exam Prep', link: '/services' },
                                { name: 'Plans & Pricing', link: '/services' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.link} className="hover:text-white transition-colors text-sm">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-6">
                        <h4 className="font-medium text-gray-400 text-sm flex items-center gap-2">
                            <span className="text-gray-600 font-mono text-xs">//</span> Experts
                        </h4>
                        <ul className="space-y-4 text-gray-300">
                            <li><Link to="/teams" className="hover:text-white transition-colors text-sm">Our Tutors</Link></li>
                            <li><a href="/#contact" className="hover:text-white transition-colors text-sm">Become a Tutor</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-6">
                        <h4 className="font-medium text-gray-400 text-sm flex items-center gap-2">
                            <span className="text-gray-600 font-mono text-xs">//</span> Resources
                        </h4>
                        <ul className="space-y-4 text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors text-sm">Educational Blog</a></li>
                            <li><a href="/#faq" className="hover:text-white transition-colors text-sm">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="space-y-6">
                        <h4 className="font-medium text-gray-400 text-sm flex items-center gap-2">
                            <span className="text-gray-600 font-mono text-xs">//</span> Company
                        </h4>
                        <ul className="space-y-4 text-gray-300">
                            <li><Link to="/about" className="hover:text-white transition-colors text-sm">About Fastlane</Link></li>
                            <li><a href="/#contact" className="hover:text-white transition-colors text-sm">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors text-sm">Terms</a></li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-6">
                        <div className="space-y-4">
                            <h4 className="font-bold text-white text-sm">Never miss an update</h4>
                            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                                Get study tips and curriculum updates from Fastlane. Delivered monthly.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-2 w-full">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@email.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-gray-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                    <button
                                        onClick={handleJoin}
                                        className="bg-white text-black rounded-md px-4 py-2 text-xs font-bold hover:bg-gray-200 transition-colors shrink-0"
                                    >
                                        Join
                                    </button>
                                </div>
                                <div className="flex items-start gap-2">
                                    <button
                                        onClick={() => setAgreed(!agreed)}
                                        className={`mt-1 w-3.5 h-3.5 shrink-0 rounded border border-white/20 flex items-center justify-center transition-colors ${agreed ? 'bg-blue-600 border-blue-600' : 'bg-transparent'}`}
                                    >
                                        {agreed && <FaCheck className="text-white text-[8px]" />}
                                    </button>
                                    <span
                                        className="text-[10px] text-gray-500 leading-tight cursor-pointer select-none"
                                        onClick={() => setAgreed(!agreed)}
                                    >
                                        I agree to receive marketing emails from Fastlane.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-gray-500 py-12 mt-6 md:mt-10 border-t border-white/10">
                    <div className="flex flex-col gap-2">
                        <p>© 2026 Fastlane. Designed by <a target="_blank" href="https://www.linkedin.com/in/mustaphaahmad/" className="hover:text-white transition-colors">Musben.</a></p>
                    </div>

                    {/* Minimalist Contact Info Strip */}
                    <div id="contact" className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-gray-400">
                        <a href="tel:+2348123456789" className="flex items-center gap-2 hover:text-white transition-colors">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <span>+234 812 345 6789</span>
                        </a>
                        <a href="mailto:hello@fastlane.ng" className="flex items-center gap-2 hover:text-white transition-colors">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <span>hello@fastlane.ng</span>
                        </a>
                        <div className="flex items-center gap-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <span>Lagos, Nigeria</span>
                        </div>
                    </div>

                    <div className="flex gap-6 items-center">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06zm1.493 13.93c-2.826.927-6.091-.884-6.839-4.213-.42-1.854.266-3.791 1.761-4.966 1.495-1.175 4.312-2.126 6.541.65.908.975 1.766 2.947-.636 5.652a4.4 4.4 0 01-.827 2.877zm-9.155-9.502a1.096 1.096 0 11-.002 2.192 1.096 1.096 0 01.002-2.192zm6.722 7.072c1.706.758 3.522-.72 3.49-2.716-.032-1.996-1.908-3.324-3.665-2.548a2.536 2.536 0 00-1.285 3.328 2.536 2.536 0 001.46 1.936z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
