
import { Quote, Star } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
    {
        id: 1,
        name: "Mrs. Adebayo",
        role: "PARENT",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        quote: "My son's confidence in Math has skyrocketed. The tutors patiently explained concepts he struggled with in class. Highly recommended!",
        footerText: "IGCSE Success",
        dotColor: "bg-green-500"
    },
    {
        id: 2,
        name: "Chinedu Okeke",
        role: "STUDENT",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        quote: "The SAT prep classes were a game changer. I improved my score by 200 points and got into my dream university in the US.",
        footerText: "Admitted to College",
        dotColor: "bg-blue-500"
    },
    {
        id: 3,
        name: "Priya Patel",
        role: "STUDENT",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        quote: "Switching to the British Curriculum was tough, but Fastlane made it seamless. The tutors really understand the syllabus inside out.",
        footerText: "Top of Class",
        dotColor: "bg-yellow-500"
    },
    {
        id: 4,
        name: "Mr. Johnson",
        role: "PARENT",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        quote: "We've seen remarkable improvement in just two terms. The personalized attention is exactly what was missing at school.",
        footerText: "Grade Improvement",
        dotColor: "bg-purple-500"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonial" className="py-20 text-white -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24">
            <div className="">
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
                            <p className="text-gray-400 text-lg">
                                Hear directly from students and parents about the results they achieved with Fastlane tutors.
                            </p>
                        </div>
                        <div className="flex gap-4 shrink-0">
                            <CarouselPrevious className="static translate-y-0 bg-zinc-900 border-zinc-700 text-white h-12 w-12" />
                            <CarouselNext className="static translate-y-0 bg-[#194970] border-[#194970] text-white h-12 w-12 hover:bg-[#194970]" />
                        </div>
                    </div>

                    <CarouselContent className="-ml-6">
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                                <div className="bg-[#111111] rounded-3xl p-8 border border-zinc-800 h-full flex flex-col relative group hover:border-zinc-700 transition-colors">
                                    <Quote className="absolute top-8 right-8 text-zinc-700 w-10 h-10 opacity-50" />

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-700">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg leading-tight">{testimonial.name}</h3>
                                            <p className="text-xs text-zinc-500 font-semibold tracking-wider">{testimonial.role}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        ))}
                                    </div>

                                    <blockquote className="text-zinc-300 text-sm leading-relaxed mb-8 flex-grow">
                                        "{testimonial.quote}"
                                    </blockquote>

                                    <div className="pt-6 border-t border-zinc-800 flex items-center gap-2 mt-auto">
                                        <span className={`w-2 h-2 rounded-full ${testimonial.dotColor}`}></span>
                                        <span className="text-xs text-zinc-400 font-medium">{testimonial.footerText}</span>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
