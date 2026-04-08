import { ArrowUpRight } from 'lucide-react';
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

const missionPoints = [
    {
        number: "01",
        title: "Expert-Led Tutoring",
        text: "Every session is delivered by vetted specialists who understand the exact demands of Nigerian, British, and American curricula."
    },
    {
        number: "02",
        title: "Personalised Learning",
        text: "We tailor each session to individual gaps, goals, and pace — so every hour translates directly into measurable improvement."
    },
];

const visionPoints = [
    {
        number: "01",
        title: "Cross-Curriculum Reach",
        text: "We cover Nigerian (WAEC/NECO), British (IGCSE/A-Level), and American (SAT/AP) curricula, giving every student the tools to compete globally."
    },
    {
        number: "02",
        title: "Results-Driven Teaching",
        text: "With a 98% pass rate and hundreds of top-grade alumni, our track record speaks for itself — and we hold every tutor to that standard."
    },
];

export default function About() {
    return (
        <div className="bg-[#f5f5f5] dark:bg-black min-h-screen text-black dark:text-white overflow-hidden">
            <div className="px-6 md:px-16 lg:px-24 content-max-width">

                {/* ── Page Header (Hero) ── */}
                <section className="pt-32 pb-16 content-max-width">
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

                {/* ── Mission & Vision ── */}
                <section className="py-16 md:py-24 border-t border-white/10 content-max-width">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                        {/* Mission Column */}
                        <div className="lg:pr-12 xl:pr-16 lg:border-r border-white/10 pb-16 lg:pb-0">
                            <p className="text-sm font-mono text-gray-500 mb-4">// Mission</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white tracking-tight mb-6">
                                What drives us
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
                                We believe every student deserves access to world-class instruction.
                                Our mission is to close the gap between classroom teaching and examination
                                excellence, producing a <span className="text-black dark:text-white font-medium">new generation of confident, high-achieving scholars</span>.
                            </p>

                            <div className="border-t border-white/10">
                                {missionPoints.map((point) => (
                                    <div key={point.number} className="flex gap-5 md:gap-8 py-6 border-b border-white/10">
                                        <span className="text-sm font-mono text-gray-600 pt-0.5 shrink-0">{point.number}</span>
                                        <div>
                                            <h3 className="text-base font-semibold text-black dark:text-white mb-1.5">{point.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{point.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vision Column */}
                        <div className="lg:pl-12 xl:pl-16 pt-16 lg:pt-0">
                            <p className="text-sm font-mono text-gray-500 mb-4">// Vision</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white tracking-tight mb-6">
                                Where we're headed
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
                                To become <span className="text-black dark:text-white font-medium">West Africa's most trusted academic tutoring platform</span>,
                                where every student, regardless of curriculum or location, can access the expert
                                guidance they need to achieve top results and unlock their future.
                            </p>

                            <div className="border-t border-white/10">
                                {visionPoints.map((point) => (
                                    <div key={point.number} className="flex gap-5 md:gap-8 py-6 border-b border-white/10">
                                        <span className="text-sm font-mono text-gray-600 pt-0.5 shrink-0">{point.number}</span>
                                        <div>
                                            <h3 className="text-base font-semibold text-black dark:text-white mb-1.5">{point.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{point.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* ── Stats Section ── */}
                <section className="py-10 md:py-24 border-t border-white/10 content-max-width">
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
                                <span className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight block">
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
                <section className="py-16 md:py-24 border-t border-white/10 content-max-width">
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
                                className="group bg-white dark:bg-black p-0 md:p-6 flex flex-col gap-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
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
                                        <h3 className="text-xl font-bold text-black dark:text-white tracking-tight">{member.name}</h3>
                                        <p className={`text-sm font-semibold mt-0.5 ${member.roleColor}`}>{member.role}</p>
                                    </div>
                                    <ArrowUpRight size={18} className="text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors mt-1 shrink-0" />
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
                            <span className="text-[14px] md:text-[17px] font-medium text-black dark:text-white">Meet the Full Team</span>
                            <span className="text-black dark:text-white">
                                <FaArrowRight />
                            </span>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
