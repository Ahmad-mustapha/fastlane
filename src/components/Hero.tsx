import HeroImg from "../assets/heroimg2.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="relative pt-32 md:pt-24 pb-4 mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 w-full">
            <div
                className="space-y-6 w-full lg:w-1/2"
            >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1] tracking-tight uppercase">
                    UNLOCK YOUR
                    ACADEMIC
                    POTENTIAL
                </h1>
                <p className="text-gray-400 text-sm sm:text-md md:text-lg max-w-xl leading-[1.4]">
                    Personalized, results-driven tutoring across Nigerian, British, and American systems.
                    We build confidence through expert instruction and clear learning pathways.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <button onClick={() => navigate("/booking")} className="group w-full sm:w-auto flex items-center justify-between gap-4 px-4 py-3 pl-6 rounded-full border border-gray-400 dark:border-gray-600 hover:border-white transition-colors bg-transparent text-left min-w-[280px]">
                        <span className="text-[14px] font-medium md:text-[17px]">Book Free Session</span>
                        <span className="bg-white rounded-full p-3 text-black">
                            <FaArrowRight />
                        </span>
                    </button>
                    <button className="group w-full sm:w-auto flex items-center justify-center gap-4 px-8 py-3 rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300">
                        <span className="text-[14px] md:text-[17px] font-semibold">
                            View Curriculums
                        </span>
                    </button>
                </div>
            </div>

            <div
                className="relative overflow-hidden w-full lg:w-[450px] h-[380px] md:h-[500px] aspect-[4/3] inverted-radius md:mr-0 transition-all duration-500"
                style={{
                    transform: 'translate3d(0,0,0)',
                    WebkitBackfaceVisibility: 'hidden',
                } as React.CSSProperties}
            >
                <img
                    src={HeroImg}
                    alt="Hero Image"
                    className="w-full h-full object-cover object-top"
                    style={{
                        imageRendering: 'auto',
                        transform: 'translate3d(0,0,0)',
                        WebkitBackfaceVisibility: 'hidden',
                    }}
                />
            </div>
        </section>
    );
};

export default Hero;
