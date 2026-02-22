import { memo } from "react";
import AboutImg from "../assets/aboutus.jpg";
import { FaArrowRight } from "react-icons/fa6";

const AboutSection = memo(() => {
    return (
        <section className="py-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">
                About Us
            </h2>
            {/* Main Content Grid */}
            <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16">
                {/* Left — Image */}
                <div className="w-full lg:w-[45%] relative">
                    <div
                        className="relative w-full h-[420px] md:h-[500px] overflow-hidden"
                    // style={{ clipPath: 'polygon(0 0, calc(100% - 70px) 0, 100% 70px, 100% 100%, 0 100%)' }}
                    >
                        <img
                            src={AboutImg}
                            alt="Students learning together"
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                        />
                        {/* Overlay gradient */}
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" /> */}
                    </div>
                </div>

                {/* Right — Header + Text Content */}
                <div className="w-full lg:w-[55%] flex flex-col justify-between">
                    {/* Section Header */}
                    <div className="mb-8">
                        {/* <h2 className="text-5xl font-bolder text-white tracking-tight mb-10">
                            Who We Are
                        </h2> */}
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-white tracking-tight leading-[1.05]">
                            Building Futures Through Education
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-6">
                        <p className="text-gray-400 text-base md:text-lg leading-[1.7] max-w-xl">
                            We are a team of dedicated educators passionate about unlocking every student's
                            potential. With expertise spanning Nigerian, British, and American curricula,
                            we deliver tailored learning experiences that foster deep understanding.
                        </p>
                        <p className="text-gray-400 text-base md:text-lg leading-[1.7] max-w-xl">
                            Our approach combines rigorous academic standards with modern teaching methods,
                            empowering students to not just pass exams, but to truly master their subjects
                            and build confidence for life.
                        </p>

                        {/* Highlight pills */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            {["Nigerian Curriculum", "British Curriculum", "American Curriculum"].map((item) => (
                                <span
                                    key={item}
                                    className="inline-block px-5 py-2 rounded-full text-xs font-bold tracking-wide bg-white/10 text-white/80 border border-white/10"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Stats Grid
                    <div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-white/10"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                                    {stat.value}
                                </span>
                                <p className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div> */}

                    {/* CTA Button */}
                    <div className="mt-10">
                        <button className="group flex items-center justify-between gap-4 px-4 py-3 pl-6 rounded-full border border-gray-600 hover:border-white transition-colors bg-transparent min-w-[240px]">
                            <span className="text-[14px] md:text-[17px] font-medium text-white">
                                Learn More About Us
                            </span>
                            <span className="bg-white rounded-full p-3 text-black">
                                <FaArrowRight />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default AboutSection;
