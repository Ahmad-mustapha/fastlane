import { Quote, Star, User } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";

const testimonials = [
    {
        id: 1,
        name: "Mr. Saleh",
        role: "STUDENT",
        course: "MATHEMATICS",
        rating: 5,
        image: null,
        quote: "He was my best maths teacher throughout my life and he made us get A's in my WAEC.",
        footerText: "Top of Class",
        dotColor: "bg-blue-400"
    },
    {
        id: 2,
        name: "Nabila Ahmed Rufai",
        role: "STUDENT",
        course: "MATHEMATICS",
        rating: 5,
        image: null,
        quote: "Mr. Abdul Halim is an excellent tutor who consistently prioritizes his students understanding and comfort over all else. He has a unique way of simplifying topics that would normally seem difficult, making them easier to understand. More importantly, he helped me build confidence in my own abilities and recognize my strengths, encouraging me to believe that I am capable of achieving more.",
        footerText: "Passed WAEC",
        dotColor: "bg-[#194970]"
    },
    {
        id: 3,
        name: "Mr Ismail Ridwan",
        role: "STUDENT",
        course: "MATH & IGCSE",
        rating: 5,
        image: "/src/assets/Ismail.png",
        quote: "It is an honor to be a student of AbdulHalim. His teaching style is truly unique—he connects with students on a personal level and brings out the best in them. He has a remarkable ability to simplify complex mathematical concepts, making them easy to understand. Thanks to his approach, I was able to pass my IGCSE exams with distinction and build a strong foundation in mathematics.",
        footerText: "Top of Class",
        dotColor: "bg-yellow-500"
    },
    {
        id: 4,
        name: "Farida Ahmed Rufai",
        role: "STUDENT",
        course: "WAEC",
        rating: 5,
        image: "/src/assets/Farida.jpeg",
        quote: "Mr. Abdul Halim was a truly wonderful teacher, and I deeply appreciated my time learning under him. He had a unique way of making every lesson clear and engaging, which transformed my entire attitude toward school. He created a comfortable environment where I felt confident to ask questions and contribute. Most importantly, he helped build my confidence and laid a strong foundation for my success in all my endeavors.",
        footerText: "Passed WAEC",
        dotColor: "bg-purple-400"
    },
    {
        id: 5,
        name: "Abubakar Abdulazeez",
        role: "STUDENT",
        course: "MATHEMATICS & IGCSE",
        rating: 5,
        image: null,
        quote: "Mr Abdulhalim was more than a teacher, he was a mentor who guided me whenever I lost focus. With his support, I grew in confidence and graduated as the best mathematician. He truly helped me believe in what I'm capable of.",
        footerText: "Best Student in Mathematics",
        dotColor: "bg-green-500"
    },
    {
        id: 6,
        name: "Ms. Adebamiro",
        role: "STUDENT",
        course: "LITERATURE IN ENGLISH",
        rating: 5,
        image: null,
        quote: "When I first came to CPLA, I was the only arts student. I remember the first time she told me to write an analysis of a book I had read. I only wrote a page. By the time I was in year 11, I was writing 7 pages of analysis and didn't even want to stop- that was how much she made me enjoy and learn literature in English. To me she was more than a teacher. She was a friend, and one of my biggest supporters.",
        footerText: "Passed IGCSE, WAEC, NECO & JAMB",
        dotColor: "bg-pink-500"
    },
    {
        id: 7,
        name: "Miss Mujibah",
        role: "STUDENT",
        course: "MATHEMATICS",
        rating: 5,
        image: null,
        quote: "I used to hate math. Honestly, I almost failed my first Real Analysis midterm. But I didn't quit. I broke everything down and slowly, it started clicking. That struggle became my greatest strength as a mentor. When I started mentoring, my first student was exactly where I had been. Ten weeks later, he passed. That moment meant more to me than any grade I ever earned.",
        footerText: "From Struggling to Mentoring",
        dotColor: "bg-indigo-500"
    },
    {
        id: 8,
        name: "Yusuff Muizah",
        role: "STUDENT",
        course: "MATHEMATICS",
        rating: 5,
        image: null,
        quote: "He made math easy to understand and fun. His patience and encouragement boosted my confidence and improved my grades. Grateful for his support and dedication.",
        footerText: "Top of Class",
        dotColor: "bg-teal-500"
    },
    {
        id: 9,
        name: "Miss Neemat",
        role: "STUDENT",
        course: "MATHEMATICS",
        rating: 5,
        image: "/src/assets/Neemat.jpg",
        quote: "An exceptional teacher who made learning enjoyable and accessible. Their dedication and support helped me achieve my academic goals.",
        footerText: "Top of Class",
        dotColor: "bg-rose-500"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonial" className="py-20 text-black dark:text-white content-max-width">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Student Success <span className="text-[#194970]">Stories</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            Hear directly from students and parents about the results they achieved with Fastlane tutors.
                        </p>
                    </div>
                    <div className="flex gap-4 shrink-0">
                        <CarouselPrevious className="static translate-y-0 bg-white dark:bg-zinc-900 border-black/10 dark:border-zinc-700 text-black dark:text-white h-12 w-12 hover:bg-black/5 dark:hover:bg-white/5" />
                        <CarouselNext className="static translate-y-0 bg-[#194970] border-[#194970] text-white h-12 w-12 hover:bg-[#194970]" />
                    </div>
                </div>

                <CarouselContent className="-ml-6">
                    {testimonials.map((testimonial) => (
                        <CarouselItem key={testimonial.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                            <div className="bg-white dark:bg-[#111111] rounded-3xl p-8 border border-black/10 dark:border-zinc-800 h-full flex flex-col relative group hover:border-black/20 dark:hover:border-zinc-700 transition-colors shadow-sm dark:shadow-none">
                                <Quote className="absolute top-8 right-8 text-black/5 dark:text-zinc-700 w-10 h-10" />

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black/5 dark:border-zinc-700 shadow-sm bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
                                        {testimonial.image ? (
                                            testimonial.image.endsWith('.mov') || testimonial.image.endsWith('.mp4') ? (
                                                <video
                                                    src={testimonial.image}
                                                    className="w-full h-full object-cover"
                                                    muted
                                                    loop
                                                    autoPlay
                                                    playsInline
                                                />
                                            ) : (
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            )
                                        ) : (
                                            <User className="w-6 h-6 text-gray-400 dark:text-zinc-600" />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg leading-tight text-black dark:text-white">{testimonial.name}</h3>
                                        <p className="text-[10px] text-gray-500 dark:text-zinc-500 font-semibold tracking-wider uppercase">
                                            {testimonial.role} <span className="text-[#194970]">•</span> {testimonial.course}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300 dark:text-zinc-600'}`}
                                        />
                                    ))}
                                </div>

                                <blockquote className="text-gray-700 dark:text-zinc-300 text-sm leading-relaxed mb-8 flex-grow">
                                    "{testimonial.quote}"
                                </blockquote>

                                <div className="pt-6 border-t border-black/10 dark:border-zinc-800 flex items-center gap-2 mt-auto">
                                    <span className={`w-2 h-2 rounded-full ${testimonial.dotColor}`}></span>
                                    <span className="text-xs text-gray-500 dark:text-zinc-400 font-medium">{testimonial.footerText}</span>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* ── Video Testimonials Section ── */}
            {/* <div className="mt-32 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#194970]/5 to-transparent dark:from-[#194970]/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div className="max-w-xl">
                            <h3 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
                                Featured <span className="text-[#194970]">Video Stories</span>
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 dark:bg-white/10 rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-xl">
                        <VideoStory
                            url="https://res.cloudinary.com/de30l793l/video/upload/q_auto/f_auto/v1776668337/VID-20260407-WA0006_qqmb3z.mp4"
                            title="STUDENT JOURNEY"
                            sub="Watch their transformation"
                            activeVideoUrl={activeVideoUrl}
                            setActiveVideoUrl={setActiveVideoUrl}
                        />
                        <VideoStory
                            url="https://res.cloudinary.com/de30l793l/video/upload/q_auto/f_auto/v1776669198/VID-20260406-WA0011_d9ysn1.mp4"
                            title="ACADEMIC EXCELLENCE"
                            sub="Hear from the best"
                            activeVideoUrl={activeVideoUrl}
                            setActiveVideoUrl={setActiveVideoUrl}
                        />
                    </div>
                </div>
            </div> */}
        </section>
    );
}



