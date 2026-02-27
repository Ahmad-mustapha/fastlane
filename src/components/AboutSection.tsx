import { memo } from "react";
import AboutImg from "../assets/aboutus.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AboutSection = memo(() => {
    const navigate = useNavigate();
    return (
        <section className="py-24">
            <h2 className="text-[28px] md:text-5xl font-bold text-white mb-6 md:mb-12 tracking-tight">
                About Us
            </h2>
            {/* Main Content Grid */}
            <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16">
                {/* Left, Image */}
                <div className="w-full lg:w-[45%] relative">
                    <div
                        className="relative w-full h-[300px] md:h-[400px] overflow-hidden"
                    // style={{ clipPath: 'polygon(0 0, calc(100% - 70px) 0, 100% 70px, 100% 100%, 0 100%)' }}
                    >
                        <img
                            src={AboutImg}
                            alt="Students learning together"
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Right, Header + Text Content */}
                <div className="w-full lg:w-[55%] flex flex-col justify-between">
                    {/* Section Header */}
                    <div className="mb-8">
                        {/* <h2 className="text-5xl font-bolder text-white tracking-tight mb-10">
                            Who We Are
                        </h2> */}
                        <h2 className="text-[18px] md:text-2xl lg:text-3xl text-white tracking-tight leading-[1.05]">
                            Building Futures Through Education
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-6">
                        <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-[1.7] max-w-xl">
                            We are a team of dedicated educators passionate about unlocking every student's
                            potential. With expertise spanning Nigerian, British, and American curricula,
                            we deliver tailored learning experiences that foster deep understanding.
                        </p>
                        <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-[1.7] max-w-xl">
                            Our approach combines rigorous academic standards with modern teaching methods,
                            empowering students to not just pass exams, but to truly master their subjects
                            and build confidence for life.
                        </p>

                        {/* Highlight pills */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            {["Nigerian Curriculum", "British Curriculum", "American Curriculum"].map((item) => (
                                <span
                                    key={item}
                                    className="inline-block px-4 py-2 rounded-full text-xs tracking-wide bg-white/10 text-white/80 border border-white/10"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-10">
                        <button onClick={() => navigate("/about")} className="group flex items-center justify-between gap-4 px-4 py-3 pl-6 rounded-full border border-gray-600 hover:border-white transition-colors bg-transparent min-w-[240px]">
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
