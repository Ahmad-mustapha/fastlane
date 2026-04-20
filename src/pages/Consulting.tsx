import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { teamMembers } from '../data/teamData';

const pillars = [
    {
        label: "CURRICULUM",
        title: "CURRICULUM DESIGN & ALIGNMENT",
        description: "We work with school leadership to audit, map, and restructure curricula across Nigerian, British, and American educational frameworks.",
    },
    {
        label: "STAFF TRAINING",
        title: "EDUCATOR DEVELOPMENT",
        description: "Structured professional development programmes for teachers — from subject mastery workshops to classroom management and modern pedagogy.",
    },
    {
        label: "STRATEGY",
        title: "ACADEMIC STRATEGY",
        description: "Data-informed planning sessions that help schools set clear academic targets, track student outcomes, and close performance gaps systematically.",
    },
    {
        label: "ASSESSMENT",
        title: "EXAMINATION READINESS",
        description: "Institution-wide preparation frameworks for WAEC, NECO, IGCSE, and SAT — ensuring schools move students toward consistent, measurable results.",
    },
];

const outcomes = [
    { stat: "40+", label: "Schools Supported" },
    { stat: "3", label: "Curricula Covered" },
    { stat: "92%", label: "Target Achievement Rate" },
    { stat: "500+", label: "Educators Trained" },
];

export default function Consulting() {
    const navigate = useNavigate();

    return (
        <div className="px-6 md:px-16 lg:px-24 overflow-hidden content-max-width">

            {/* ── Hero ── */}
            <section className="relative pt-32 md:pt-40 pb-16 flex flex-col gap-8 w-full">
                <p className="text-[10px] text-[#194970] font-bold tracking-[0.2em] uppercase">
                    A Fastlane Initiative
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1] tracking-tight uppercase max-w-4xl text-black dark:text-white">
                    INSTITUTIONAL<br />
                    <span className="text-[#194970]">CONSULTING</span>
                </h1>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-[1.6] max-w-xl">
                    We partner with schools and educational institutions to build stronger academic systems — from curriculum design to staff training and examination strategy.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                    <button
                        onClick={() => navigate('/#contact')}
                        className="group w-full sm:w-auto flex items-center justify-between gap-4 px-4 py-3 pl-6 rounded-full border border-gray-400 dark:border-gray-600 hover:border-black dark:hover:border-white transition-colors bg-transparent text-left min-w-[280px]"
                    >
                        <span className="text-[14px] font-medium md:text-[17px] text-black dark:text-white">
                            Request a Strategy Session
                        </span>
                        <span className="bg-white rounded-full p-3 text-black">
                            <FaArrowRight />
                        </span>
                    </button>
                </div>
            </section>

            {/* ── Outcomes Strip ── */}
            <section className="py-16 border-t border-b border-black/10 dark:border-white/10 content-max-width">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
                    {outcomes.map((item) => (
                        <div key={item.label} className="flex flex-col gap-1">
                            <p className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
                                {item.stat}
                            </p>
                            <p className="text-gray-400 text-sm">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── What We Do (Pillars) ── */}
            <section className="py-24 content-max-width">
                <div className="flex items-start justify-between mb-12 gap-6 flex-col md:flex-row md:items-end">
                    <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
                        What We <span className="text-[#194970]">Offer</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-sm leading-[1.7]">
                        Every engagement is scoped to the institution's specific gaps. No generic programmes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="bg-white dark:bg-[#111111] p-8 md:p-12 flex flex-col gap-4 group hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors"
                        >
                            <p className="text-[10px] text-[#194970] font-bold tracking-[0.2em] uppercase">
                                {pillar.label}
                            </p>
                            <h3 className="text-lg md:text-xl font-bold text-black dark:text-white tracking-tight leading-snug">
                                {pillar.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-[1.7]">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Consultants ── */}
            <section className="py-24 border-t border-black/10 dark:border-white/10 content-max-width">
                <div className="flex items-start justify-between mb-12 gap-6 flex-col md:flex-row md:items-end">
                    <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
                        Our <span className="text-[#194970]">Consultants</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-sm leading-[1.7]">
                        Experienced educators driving institutional change across leading curricula.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10">
                    {teamMembers.slice(0, 2).map((consultant) => (
                        <div
                            key={consultant.id}
                            className="bg-white dark:bg-[#111111] p-8 md:p-12 flex flex-col gap-6 group hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors"
                        >
                            {/* Photo */}
                            <div className="w-full h-52 overflow-hidden">
                                <img
                                    src={consultant.image}
                                    alt={consultant.name}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Ambassador Badge */}
                            {consultant.ambassador && (
                                <span className="self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase border border-[#194970]/40 text-[#194970] bg-[#194970]/5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#194970] inline-block" />
                                    {consultant.ambassador} Ambassador
                                </span>
                            )}

                            {/* Name */}
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight">
                                    {consultant.name}
                                </h3>
                                <p className="text-[10px] text-[#194970] font-bold tracking-[0.2em] uppercase">
                                    {consultant.tag}
                                </p>
                            </div>

                            {/* Subjects */}
                            <div className="flex flex-wrap gap-2">
                                {consultant.subjects.map((subject) => (
                                    <span
                                        key={subject}
                                        className="inline-block px-3 py-1 text-[11px] font-medium tracking-wide bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60 rounded-sm"
                                    >
                                        {subject}
                                    </span>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="flex gap-8 pt-2 border-t border-black/10 dark:border-white/10">
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-2xl font-bold text-black dark:text-white tracking-tight">{consultant.yearsExperience}+</p>
                                    <p className="text-[11px] text-gray-400 uppercase tracking-wider">Yrs Experience</p>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-2xl font-bold text-black dark:text-white tracking-tight">{consultant.studentsHelped}+</p>
                                    <p className="text-[11px] text-gray-400 uppercase tracking-wider">Students</p>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-2xl font-bold text-black dark:text-white tracking-tight">{consultant.passRate}</p>
                                    <p className="text-[11px] text-gray-400 uppercase tracking-wider">Pass Rate</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Who We Work With ── */}
            <section className="py-24 content-max-width">
                <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] items-stretch gap-12 lg:gap-16 w-full">
                    {/* Left — Image placeholder area */}
                    <div className="w-full relative min-h-[300px] md:min-h-[420px] lg:min-h-full bg-black/5 dark:bg-white/5 overflow-hidden">
                        <div className="absolute inset-0 flex items-end p-8">
                            <div className="flex flex-wrap gap-3">
                                {["Primary Schools", "Secondary Schools", "International Schools", "Private Academies"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-block px-4 py-2 rounded-full text-xs tracking-wide bg-white/10 text-white/80 border border-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div className="w-full flex flex-col justify-between py-2">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-6">
                                Who We <span className="text-[#194970]">Work With</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-[1.7]">
                                We partner with schools at all levels — from independent primary academies to established international institutions — that are serious about raising academic standards in a structured, measurable way.
                            </p>
                            <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-[1.7]">
                                Our consulting engagements are typically long-form partnerships, not one-off workshops. We embed within the school's academic calendar to ensure lasting impact on both staff and students.
                            </p>
                        </div>

                        <div className="mt-10">
                            <button
                                onClick={() => navigate('/#contact')}
                                className="group flex items-center justify-between gap-4 px-4 py-3 pl-6 rounded-full border border-gray-600 hover:border-black dark:hover:border-white transition-colors bg-transparent min-w-[260px]"
                            >
                                <span className="text-[14px] md:text-[17px] font-medium text-black dark:text-white">
                                    Partner With Us
                                </span>
                                <span className="bg-white rounded-full p-3 text-black">
                                    <FaArrowRight />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className="py-24 border-t border-black/10 dark:border-white/10 content-max-width">
                <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-16">
                    How It <span className="text-[#194970]">Works</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            step: "01",
                            title: "Discovery Call",
                            desc: "A focused session with your school's leadership team to understand your academic landscape, current challenges, and goals."
                        },
                        {
                            step: "02",
                            title: "Institutional Audit",
                            desc: "We assess your curriculum structure, teaching quality, and student data to identify exactly where the gaps are."
                        },
                        {
                            step: "03",
                            title: "Execution Plan",
                            desc: "A bespoke programme — workshops, curriculum adjustments, or ongoing advisory — delivered on your school's timeline."
                        },
                    ].map((item) => (
                        <div key={item.step} className="flex flex-col gap-4">
                            <p className="text-5xl font-bold text-black/10 dark:text-white/10 tracking-tight">
                                {item.step}
                            </p>
                            <h3 className="text-lg font-bold text-black dark:text-white">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-[1.7]">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="py-24 flex flex-col items-center text-center gap-8 content-max-width">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white max-w-3xl">
                    Ready to raise the standard at your school?
                </h2>
                <p className="text-gray-400 text-sm md:text-lg max-w-xl leading-[1.6]">
                    Book a discovery call with our consulting team and we'll map out exactly what your institution needs.
                </p>
                <button
                    onClick={() => navigate('/#contact')}
                    className="group flex items-center justify-between gap-4 px-4 py-3 pl-6 rounded-full border border-gray-400 dark:border-gray-600 hover:border-black dark:hover:border-white transition-colors bg-transparent min-w-[260px]"
                >
                    <span className="text-[14px] md:text-[17px] font-medium text-black dark:text-white">
                        Book a Discovery Call
                    </span>
                    <span className="bg-white rounded-full p-3 text-black">
                        <FaArrowRight />
                    </span>
                </button>
            </section>

        </div>
    );
}
