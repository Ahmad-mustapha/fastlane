import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    ArrowUpRight,
    GraduationCap,
    BadgeCheck,
    Users,
    Star,
    Briefcase,
    ChevronLeft,
    Mail,
} from 'lucide-react';
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaArrowRight } from 'react-icons/fa6';
import { teamMembers } from '../data/teamData';

/* ─── helpers ────────────────────────────────────────── */
const SocialIcon = ({ platform }: { platform: string }) => {
    const cls = 'w-4 h-4';
    if (platform === 'linkedin') return <FaLinkedinIn className={cls} />;
    if (platform === 'twitter') return <FaXTwitter className={cls} />;
    if (platform === 'instagram') return <FaInstagram className={cls} />;
    return <Mail className={cls} />;
};

export default function TeamProfile() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const member = teamMembers.find((m) => m.id === id);

    /* ── 404 state ── */
    if (!member) {
        return (
            <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center gap-6 px-6">
                <p className="text-gray-500 text-sm tracking-widest uppercase">404 — Profile Not Found</p>
                <h1 className="text-4xl font-black uppercase tracking-tight">Instructor Profile not found</h1>
                <Link
                    to="/teams"
                    className="group flex items-center gap-3 px-5 py-2.5 border border-gray-600 hover:border-white transition-colors text-sm font-medium"
                >
                    Back to Team
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        );
    }

    /* ── back / next navigation ── */
    const currentIdx = teamMembers.findIndex((m) => m.id === id);
    const prevMember = teamMembers[currentIdx - 1] ?? null;
    const nextMember = teamMembers[currentIdx + 1] ?? null;

    return (
        <div className="bg-black min-h-screen text-white overflow-hidden">

            {/* ── Back Bar ── */}
            <div className="pt-28 pb-0 px-6 md:px-16 lg:px-24">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium group"
                >
                    <ChevronLeft
                        size={16}
                        className="group-hover:-translate-x-1 transition-transform"
                    />
                    Back
                </button>
            </div>

            {/* ════════════════════════════════════════════════ */}
            {/*  HERO BLOCK                                      */}
            {/* ════════════════════════════════════════════════ */}
            <section className="px-6 md:px-16 lg:px-24 pt-10 pb-0">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                    {/* ── Photo ── */}
                    <div
                        className="w-full lg:w-[38%] shrink-0"
                    >
                        <div className="relative w-full h-[420px] md:h-[540px] overflow-hidden">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover object-top"
                                loading="eager"
                                decoding="async"
                            />
                            {/* accent dot */}
                            <div
                                className="absolute top-4 right-4 w-3 h-3 rounded-full"
                                style={{ backgroundColor: member.accentColor }}
                            />
                            {/* curriculum tag */}
                            <div className="absolute bottom-4 left-4">
                                <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-black/60 backdrop-blur-sm border border-white/10 text-white/60 rounded-full">
                                    {member.tag}
                                </span>
                            </div>
                        </div>

                        {/* ── Social Links ── */}
                        <div className="mt-5 flex flex-wrap gap-3">
                            {member.socials.map((social) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target={social.platform !== 'email' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2.5 border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/25 transition-all duration-300 text-gray-400 hover:text-white text-xs font-medium tracking-wide"
                                >
                                    <SocialIcon platform={social.platform} />
                                    <span>{social.handle}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Intro Content ── */}
                    <div className="flex-1 pt-2">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-[10px] font-bold tracking-widest uppercase mb-6"
                            style={{ color: member.accentColor }}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: member.accentColor }}
                            />
                            {member.role}
                        </div>

                        {/* Name */}
                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.92] uppercase mb-6"
                        >
                            {member.name.split(' ')[0]}{' '}
                            <span
                                className="block text-transparent"
                                style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.22)' }}
                            >
                                {member.name.split(' ').slice(1).join(' ')}
                            </span>
                        </h1>

                        {/* Quote */}
                        <blockquote
                            className="border-l-2 pl-5 mb-8"
                            style={{ borderColor: member.accentColor }}
                        >
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed italic font-light">
                                "{member.quote}"
                            </p>
                        </blockquote>

                        {/* Stats Row */}
                        <div
                            className="grid grid-cols-3 gap-px bg-white/10 mb-10"
                        >
                            {[
                                { icon: Briefcase, value: `${member.yearsExperience}+`, label: 'Yrs Experience' },
                                { icon: Users, value: `${member.studentsHelped}+`, label: 'Students' },
                                { icon: Star, value: member.passRate, label: 'Pass Rate' },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-black px-5 py-5 flex flex-col gap-1">
                                    <stat.icon size={16} className="text-gray-600 mb-1" />
                                    <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                                        {stat.value}
                                    </span>
                                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Subjects */}
                        <div>
                            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-3">
                                Subjects Taught
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {member.subjects.map((s) => (
                                    <span
                                        key={s}
                                        className="px-3 py-1.5 text-xs font-semibold tracking-wide border border-white/10 bg-white/[0.03] text-white/70"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════ */}
            {/*  ABOUT / BIO                                     */}
            {/* ════════════════════════════════════════════════ */}
            <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-white/10 mt-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Label */}
                    <div className="lg:w-1/4">
                        <div className="flex items-center gap-4 sticky top-24">
                            <div
                                className="w-1 h-10 rounded-full"
                                style={{ backgroundColor: member.accentColor }}
                            />
                            <h2 className="text-base font-bold tracking-widest uppercase text-white">
                                About
                            </h2>
                        </div>
                    </div>

                    {/* Bio paragraphs */}
                    <div
                        className="lg:w-3/4 space-y-5"
                    >
                        {member.fullBio.trim().split('\n\n').map((para, i) => (
                            <p
                                key={i}
                                className={
                                    i === 0
                                        ? 'text-xl md:text-2xl leading-relaxed font-light text-gray-300'
                                        : 'text-base leading-relaxed text-gray-400'
                                }
                            >
                                {para.trim()}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════ */}
            {/*  SPECIALISMS                                     */}
            {/* ════════════════════════════════════════════════ */}
            <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/4">
                        <div className="flex items-center gap-4 sticky top-24">
                            <div className="w-1 h-10 bg-white/20 rounded-full" />
                            <h2 className="text-base font-bold tracking-widest uppercase text-white">
                                Specialisms
                            </h2>
                        </div>
                    </div>

                    <div
                        className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10"
                    >
                        {member.specialisms.map((spec, i) => (
                            <div
                                key={i}
                                className="bg-black px-6 py-5 flex items-center justify-between group hover:bg-white/[0.03] transition-colors duration-300"
                            >
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                    {spec}
                                </span>
                                <ArrowUpRight
                                    size={14}
                                    className="text-gray-700 group-hover:text-gray-400 shrink-0 transition-colors"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════ */}
            {/*  EDUCATION                                       */}
            {/* ════════════════════════════════════════════════ */}
            <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/4">
                        <div className="flex items-center gap-4 sticky top-24">
                            <div
                                className="w-1 h-10 rounded-full"
                                style={{ backgroundColor: member.accentColor }}
                            />
                            <h2 className="text-base font-bold tracking-widest uppercase text-white">
                                Education
                            </h2>
                        </div>
                    </div>

                    <div className="lg:w-3/4 space-y-0 divide-y divide-white/10">
                        {member.education.map((edu, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-5 py-7"
                            >
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                                    style={{ backgroundColor: `${member.accentColor}18` }}
                                >
                                    <GraduationCap
                                        size={18}
                                        style={{ color: member.accentColor }}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base font-bold text-white leading-tight">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-1">{edu.institution}</p>
                                </div>
                                <span className="text-xs text-gray-600 font-bold tracking-wider shrink-0 pt-1">
                                    {edu.year}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════ */}
            {/*  CERTIFICATIONS                                  */}
            {/* ════════════════════════════════════════════════ */}
            <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-white/10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/4">
                        <div className="flex items-center gap-4 sticky top-24">
                            <div className="w-1 h-10 bg-white/20 rounded-full" />
                            <h2 className="text-base font-bold tracking-widest uppercase text-white">
                                Certifications
                            </h2>
                        </div>
                    </div>

                    <div className="lg:w-3/4 space-y-0 divide-y divide-white/10">
                        {member.certifications.map((cert, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-5 py-7"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                                    <BadgeCheck size={18} className="text-gray-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base font-bold text-white leading-tight">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                                </div>
                                <span className="text-xs text-gray-600 font-bold tracking-wider shrink-0 pt-1">
                                    {cert.year}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════ */}
            {/*  BOOK CTA                                        */}
            {/* ════════════════════════════════════════════════ */}
            <section className="px-6 md:px-16 lg:px-24 pb-20">
                <div
                    className="w-full p-10 md:p-14 relative overflow-hidden border border-white/10"
                    style={{
                        background: `linear-gradient(135deg, ${member.accentColor}14 0%, transparent 60%)`,
                    }}
                >
                    <div className="max-w-2xl relative z-10">
                        <span
                            className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full mb-5 bg-white/5 border border-white/10"
                            style={{ color: member.accentColor }}
                        >
                            Book a Session
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight uppercase mb-4">
                            LEARN WITH {member.name.split(' ')[0].toUpperCase()}
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-8 max-w-lg">
                            Ready to accelerate your academic journey? Book a one-on-one session
                            or free consultation with {member.name} today.
                        </p>
                        <Link
                            to="/booking"
                            className="group inline-flex items-center justify-between gap-5 px-4 py-2.5 pl-6 rounded-full border border-gray-600 hover:border-white transition-all duration-300 bg-transparent"
                        >
                            <span className="text-[15px] md:text-[17px] font-medium text-white">
                                Book a Session
                            </span>
                            <span className="bg-white rounded-full p-2.5 text-black group-hover:scale-105 transition-transform duration-300">
                                <FaArrowRight size={13} />
                            </span>
                        </Link>
                    </div>

                    {/* Decorative glow */}
                    <div
                        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-20"
                        style={{ backgroundColor: member.accentColor }}
                    />
                </div>
            </section>

            {/* ════════════════════════════════════════════════ */}
            {/*  PREV / NEXT NAV                                 */}
            {/* ════════════════════════════════════════════════ */}
            <section className="border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                {/* Prev */}
                <div className="bg-black">
                    {prevMember ? (
                        <Link
                            to={`/team/${prevMember.id}`}
                            className="group flex items-center gap-6 px-8 py-10 hover:bg-white/[0.03] transition-colors duration-300 h-full"
                        >
                            <ChevronLeft
                                size={20}
                                className="text-gray-600 group-hover:text-white group-hover:-translate-x-1 transition-all shrink-0"
                            />
                            <div>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-1">
                                    Previous
                                </p>
                                <p className="text-base font-bold text-white">{prevMember.name}</p>
                                <p className={`text-xs mt-0.5 ${prevMember.roleColor}`}>
                                    {prevMember.role}
                                </p>
                            </div>
                        </Link>
                    ) : (
                        <Link
                            to="/teams"
                            className="group flex items-center gap-6 px-8 py-10 hover:bg-white/[0.03] transition-colors duration-300 h-full"
                        >
                            <ChevronLeft
                                size={20}
                                className="text-gray-600 group-hover:text-white group-hover:-translate-x-1 transition-all shrink-0"
                            />
                            <div>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-1">
                                    Back to
                                </p>
                                <p className="text-base font-bold text-white">All Instructors</p>
                            </div>
                        </Link>
                    )}
                </div>

                {/* Next */}
                <div className="bg-black">
                    {nextMember ? (
                        <Link
                            to={`/team/${nextMember.id}`}
                            className="group flex items-center justify-end gap-6 px-8 py-10 hover:bg-white/[0.03] transition-colors duration-300 h-full text-right"
                        >
                            <div>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-1">
                                    Next
                                </p>
                                <p className="text-base font-bold text-white">{nextMember.name}</p>
                                <p className={`text-xs mt-0.5 ${nextMember.roleColor}`}>
                                    {nextMember.role}
                                </p>
                            </div>
                            <ArrowUpRight
                                size={20}
                                className="text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0"
                            />
                        </Link>
                    ) : (
                        <Link
                            to="/teams"
                            className="group flex items-center justify-end gap-6 px-8 py-10 hover:bg-white/[0.03] transition-colors duration-300 h-full text-right"
                        >
                            <div>
                                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-1">
                                    View all
                                </p>
                                <p className="text-base font-bold text-white">All Instructors</p>
                            </div>
                            <ArrowUpRight
                                size={20}
                                className="text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0"
                            />
                        </Link>
                    )}
                </div>
            </section>
        </div>
    );
}
