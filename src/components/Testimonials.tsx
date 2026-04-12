
import { Quote, Star } from 'lucide-react';
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
        name: "Miss Hassana",
        role: "STUDENT",
        course: "IGCSE",
        rating: 5,
        image: "/Hassana.jpeg",
        quote: "Mr Abdulhalim dissected Mathematics and made me view the subject from a clearer view. The subject I was so frightened of became something I looked forward to because it was guaranteed that I’ll understand what was taught.",
        footerText: "Passed IGCSE Mathematics",
        dotColor: "bg-blue-400"
    },
    {
        id: 2,
        name: "Mr Abdulmalik Abdulrazaq",
        role: "STUDENT",
        course: "IGCSE & MATHS",
        rating: 5,
        image: "/Abdulrazaq.jpg",
        quote: "Mr Abdulhalim helped me translate my goals into something tangible. Gaining the best result in my school, this made me confident in my ability to conquer anything I set my mind to.",
        footerText: "2A* 3A 1B (Best Result)",
        dotColor: "bg-[#194970]"
    },
    {
        id: 3,
        name: "Yahya Murtadho",
        role: "STUDENT",
        course: "MATHEMATICS",
        rating: 5,
        image: "/yahya.png",
        quote: "Through focused sessions and clear explanations, I was able to achieve results among the best in my class. The tutoring style is extremely effective for complex topics.",
        footerText: "Result: Among the Best",
        dotColor: "bg-yellow-500"
    },
    {
        id: 4,
        name: "Abdallah Muhammad Kabir",
        role: "STUDENT",
        course: "MATHEMATICS",
        rating: 4,
        image: "/Kabir.png",
        quote: "He has a unique way of simplifying complex mathematical concepts and making them easy to understand. He is dedicated, patient, and changed the way I see mathematics.",
        footerText: "Improved Problem Solving",
        dotColor: "bg-purple-400"
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
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black/5 dark:border-zinc-700 shadow-sm bg-gray-100 dark:bg-zinc-800">
                                        {testimonial.image.endsWith('.mov') || testimonial.image.endsWith('.mp4') ? (
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

            {/* ── Video Testimonials Section (Commented Out for Now) ── */}
            {/* 
            <div className="mt-32 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#194970]/5 to-transparent dark:from-[#194970]/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div className="max-w-xl">
                            <p className="text-[10px] text-[#194970] font-bold tracking-[0.2em] uppercase mb-4">
                                Experience the Impact
                            </p>
                            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
                                Featured <span className="text-[#194970]">Video Stories</span>
                            </h3>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 dark:bg-white/10 rounded-3xl overflow-hidden border border-black/10 dark:border-white/10">
                        <div className="bg-white dark:bg-[#111111] p-1 relative flex flex-col group/vid cursor-pointer">
                            <div className="aspect-video relative rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/vid:bg-black/30 transition-all z-10">
                                    <div className="w-14 h-14 rounded-full bg-[#194970] flex items-center justify-center text-white shadow-xl group-hover/vid:scale-110 transition-transform">
                                        <Play size={20} fill="currentColor" />
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <p className="text-white font-bold tracking-wide">STUDENT JOURNEY</p>
                                    <p className="text-white/60 text-xs mt-1">Watch their transformation</p>
                                </div>
                                <div className="absolute inset-0 bg-[#0a0a0a] -z-10" />
                            </div>
                        </div>

                        <div className="bg-white dark:bg-[#111111] p-1 relative flex flex-col group/vid cursor-pointer">
                            <div className="aspect-video relative rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/vid:bg-black/30 transition-all z-10">
                                    <div className="w-14 h-14 rounded-full bg-[#194970] flex items-center justify-center text-white shadow-xl group-hover/vid:scale-110 transition-transform">
                                        <Play size={20} fill="currentColor" />
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <p className="text-white font-bold tracking-wide">ACADEMIC EXCELLENCE</p>
                                    <p className="text-white/60 text-xs mt-1">Hear from the best</p>
                                </div>
                                <div className="absolute inset-0 bg-[#0a0a0a] -z-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            */}
        </section>
    );
}
