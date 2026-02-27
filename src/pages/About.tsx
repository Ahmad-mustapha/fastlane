import { GraduationCap, Users, Globe, Zap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import AboutImg from '../assets/aboutus.jpg';
import HeroImg from '../assets/heroimg2.jpg';

const stats = [
    { value: "500+", label: "Students Taught" },
    { value: "98%", label: "Pass Rate" },
    { value: "15+", label: "Expert Tutors" },
    { value: "3", label: "Curriculums" },
];

const previewTeam = [
    {
        id: 'amara-okafor',
        name: 'Amara Okafor',
        role: 'Head of Mathematics',
        roleColor: 'text-blue-400',
        bio: 'Former lecturer at University of Lagos with 12 years of experience turning complex maths into clear, digestible lessons.',
        image: AboutImg,
    },
    {
        id: 'james-whitfield',
        name: 'James Whitfield',
        role: 'Senior English Tutor',
        roleColor: 'text-purple-400',
        bio: 'Oxford-trained educator who has helped over 300 students achieve top marks across IGCSE, A-Level, and SAT.',
        image: HeroImg,
    },
    {
        id: 'fatima-al-hassan',
        name: 'Fatima Al-Hassan',
        role: 'Science Lead',
        roleColor: 'text-emerald-400',
        bio: 'PhD in Biochemistry, bringing world-class academic rigour to every session. Rated #1 by our alumni community.',
        image: AboutImg,
    },
];

export default function About() {
    return (
        <div className="bg-black min-h-screen text-white overflow-hidden">
            <div className="px-6 md:px-16 lg:px-24">

                {/* ── Page Header (Hero) ── */}
                <section className="pt-32 pb-16">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Left Content */}
                        <div className="w-full lg:w-[55%] space-y-6 md:space-y-8">
                            <div
                                className="inline-block px-4 py-1.5 rounded-full border-y border-white/20 bg-white/5 text-[10px] font-bold tracking-widest uppercase text-blue-400"
                            >
                                About Us
                            </div>
                            <h1
                                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] uppercase"
                            >
                                ELEVATING <br />
                                EVERY <br />
                                <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.25)' }}>STUDENT</span>
                            </h1>

                            <div
                                className="flex flex-wrap items-center gap-3"
                            >
                                <div className="flex -space-x-2 shrink-0">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black overflow-hidden bg-gray-800">
                                            <img src={i === 2 ? HeroImg : AboutImg} alt="User" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black bg-gray-900 flex items-center justify-center text-[9px] sm:text-[10px] font-bold">
                                        +40
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm leading-snug">
                                    Join a community of passionate learners and expert mentors.
                                </p>
                            </div>

                            <button
                                className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 transition-colors"
                            >
                                <span className="text-sm font-bold uppercase tracking-wider">Watch our story</span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black pl-0.5">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                            </button>
                        </div>

                        {/* Right Image */}
                        <div
                            className="w-full lg:w-[45%] h-[300px] md:h-[500px] relative overflow-hidden inverted-radius transition-all duration-500"
                            style={{
                                transform: 'translate3d(0,0,0)',
                                WebkitBackfaceVisibility: 'hidden',
                            } as React.CSSProperties}
                        >
                            <img
                                src={AboutImg}
                                alt="Learning space"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 left-6 p-4 rounded-lg bg-black/40 backdrop-blur-md border border-white/10">
                                <h4 className="text-sm font-bold text-white mb-1">Expert-Led Sessions</h4>
                                <p className="text-[10px] text-gray-400">Where results are built, one lesson at a time.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Mission Section ── */}
                <section className="py-16 md:py-24 border-t border-white/10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                        {/* Left Side - Label */}
                        <div className="lg:w-1/4">
                            <div className="flex items-center gap-4 sticky top-24">
                                <div className="w-1 h-12 bg-[#194970] rounded-full"></div>
                                <h2 className="text-xl font-bold tracking-wide uppercase text-white">
                                    Our Core Mission
                                </h2>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="lg:w-3/4 space-y-16">
                            <p
                                className="text-[14px] md:text-[16px] lg:text-[20px] leading-relaxed font-light text-gray-300"
                            >
                                We believe every student regardless of their background or starting point deserves access to world-class instruction.
                                Our mission is to close the gap between classroom teaching and examination excellence, producing a <span className="text-white font-bold">new generation of confident, high-achieving scholars</span>.
                            </p>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div
                                    className="space-y-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                                        <GraduationCap size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Expert-Led Tutoring</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        Every session is delivered by vetted academic specialists who understand the exact demands of Nigerian, British, and American curricula, from WAEC to A-Levels to the SAT.
                                    </p>
                                </div>

                                <div
                                    className="space-y-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                                        <Users size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Personalised Learning Paths</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        No two students learn the same way. We tailor each session to individual gaps, goals, and pace, so every hour spent with Fastlane translates directly into measurable improvement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Vision Section ── */}
                <section className="py-16 md:py-24 border-t border-white/10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                        {/* Left Side - Label */}
                        <div className="lg:w-1/4">
                            <div className="flex items-center gap-4 sticky top-24">
                                <div className="w-1 h-12 bg-[#2e9d41] rounded-full"></div>
                                <h2 className="text-xl font-bold tracking-wide uppercase text-white">
                                    Our Strategic Vision
                                </h2>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="lg:w-3/4 space-y-16">
                            <p
                                className="text-[14px] md:text-[16px] lg:text-[20px] leading-relaxed font-light text-gray-300"
                            >
                                To become <span className="text-white font-bold">West Africa's most trusted academic tutoring platform, </span>where every student, regardless of curriculum or location, can access the expert guidance they need to achieve top results and unlock their future.
                            </p>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div
                                    className="space-y-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4">
                                        <Globe size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Cross-Curriculum Reach</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        We cover Nigerian (WAEC/NECO), British (IGCSE/A-Level), and American (SAT/AP) curricula, giving every student the tools to compete at the highest level, wherever their ambitions take them.
                                    </p>
                                </div>

                                <div
                                    className="space-y-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-[#2e9d41] mb-4">
                                        <Zap size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Results-Driven Teaching</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        We measure our success by our students' results. With a 98% pass rate and hundreds of top-grade alumni, our track record speaks for itself, and we hold every tutor to that standard.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Stats Section ── */}
                <section className="py-10 md:py-24 border-t border-white/10">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
                        <p className="text-gray-400 max-w-2xl">
                            We take pride in the numbers that define our success and the success of our students.
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-12"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <span className="text-4xl md:text-5xl font-bold text-white tracking-tight block">
                                    {stat.value}
                                </span>
                                <p className="text-gray-500 text-sm md:text-base font-medium uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Team Preview Section ── */}
                <section className="py-16 md:py-24 border-t border-white/10">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-1 h-10 bg-[#194970] rounded-full"></div>
                                <span className="text-sm font-bold tracking-widest uppercase text-gray-400">
                                    Our Team
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase">
                                MEET THE <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.25)' }}>INSTRUCTORS</span>
                            </h2>
                            <p className="text-gray-400 mt-4 max-w-md leading-relaxed">
                                Learn from industry experts with decades of combined experience across top academic institutions worldwide.
                            </p>
                        </div>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-px bg-transparent md:bg-white/10"
                    >
                        {previewTeam.map((member, i) => (
                            <Link
                                key={i}
                                to={`/team/${member.id}`}
                                className="group bg-black p-0 md:p-6 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-300"
                            >
                                <div className="relative w-full h-[260px] overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                    />
                                    <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                                </div>
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white tracking-tight">{member.name}</h3>
                                        <p className={`text-sm font-semibold mt-0.5 ${member.roleColor}`}>{member.role}</p>
                                    </div>
                                    <ArrowUpRight size={18} className="text-gray-500 group-hover:text-white transition-colors mt-1 shrink-0" />
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                            </Link>
                        ))}
                    </div>

                    <div
                        className="mt-10 flex justify-start"
                    >
                        <Link
                            to="/teams"
                            className="group flex items-center justify-between gap-4 px-4 py-3 border border-gray-600 hover:border-white transition-colors bg-transparent"
                        >
                            <span className="text-[14px] md:text-[17px] font-medium text-white">Meet the Full Team</span>
                            <span className="text-white">
                                <FaArrowRight />
                            </span>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
