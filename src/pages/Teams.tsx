import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/teamData';


const ctaCards = [
    {
        tag: 'HIRING',
        title: 'JOIN THE FACULTY',
        action: 'APPLY NOW',
        bg: 'bg-blue-600',
        textColor: 'text-white',
        tagColor: 'bg-blue-500/40',
    },
    {
        tag: 'MENTORSHIP',
        title: 'BECOME A MENTOR',
        action: 'LEARN MORE',
        bg: 'bg-white/5 border border-white/10',
        textColor: 'text-white',
        tagColor: 'bg-white/10',
    },
    {
        tag: 'PARTNERSHIP',
        title: 'CORPORATE TRAINING',
        action: 'CONTACT US',
        bg: 'bg-[#f5c518]',
        textColor: 'text-black',
        tagColor: 'bg-black/10',
    },
];



export default function Teams() {
    return (
        <div className="bg-black min-h-screen text-white overflow-hidden">
            <div className="px-6 md:px-16 lg:px-24">
                {/* ── Hero Header ── */}
                <section className="pt-36 pb-16">
                    <div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] uppercase mb-6">
                            MEET THE{' '}
                            <span className="block text-transparent"
                                style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.25)' }}>
                                INSTRUCTORS
                            </span>
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mt-8">
                        <p
                            className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed"
                        >
                            Learn from industry experts who have shaped academic outcomes across the globe.
                            Our team brings decades of combined experience from top institutions to your screen.
                        </p>
                    </div>
                </section>

                {/* ── Team Grid ── */}
                <section className="pb-24">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10"
                    >
                        {teamMembers.map((member, i) => (
                            <div
                                key={i}
                            >
                                <Link
                                    to={`/team/${member.id}`}
                                    className="group bg-black p-6 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-300 cursor-pointer h-full"
                                >
                                    {/* Photo */}
                                    <div className="relative w-full h-[280px] overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white tracking-tight">{member.name}</h3>
                                            <p className={`text-sm font-semibold mt-0.5 ${member.roleColor}`}>{member.role}</p>
                                        </div>
                                        <ArrowUpRight
                                            size={18}
                                            className="text-gray-500 group-hover:text-white transition-colors mt-1 shrink-0"
                                        />
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>

                                    <span className="mt-auto inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-white/50 rounded-full w-fit">
                                        {member.tag}
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Bottom CTA Cards ── */}
                <section className="pb-0">
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-0"
                    >
                        {ctaCards.map((card, i) => (
                            <div
                                key={i}
                                className={`relative group ${card.bg} rounded-none p-8 flex flex-col justify-between min-h-[200px] cursor-pointer overflow-hidden`}
                            >
                                <div>
                                    <span className={`inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full mb-6 ${card.tagColor} ${card.textColor}`}>
                                        {card.tag}
                                    </span>
                                    <h4 className={`text-2xl font-black tracking-tight leading-tight ${card.textColor}`}>
                                        {card.title}
                                    </h4>
                                </div>
                                <div className="flex items-center justify-between mt-8">
                                    <span className={`text-xs font-bold tracking-widest uppercase ${card.textColor} opacity-70`}>
                                        {card.action}
                                    </span>
                                    <ArrowUpRight
                                        size={20}
                                        className={`${card.textColor} opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300`}
                                    />
                                </div>

                                {/* Inverted-radius corner clip matching site style */}
                                <div className="absolute bottom-0 right-0 w-12 h-12 bg-black"
                                    style={{
                                        clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                                        opacity: 0.15,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
