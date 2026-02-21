import ServiceCard from './ServiceCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from '@/components/ui/carousel'
import { useCallback, useEffect, useState } from 'react'

const servicesData = [
    {
        label: "ONE-ON-ONE",
        title: "PERSONALISED TUTORING",
        description: "A dedicated tutor focused entirely on your child's gaps, pace, and curriculum.",
        bgColor: "bg-blue"
    },
    {
        label: "EXAM PREP",
        title: "WAEC / NECO INTENSIVE",
        description: "Past-paper coaching and marking-scheme technique for the Nigerian curriculum.",
        bgColor: "bg-grey"
    },
    {
        label: "EXAM PREP",
        title: "IGCSE & A-LEVEL COACHING",
        description: "Subject-specialist tutors for Cambridge IGCSE and A-Level examinations.",
        bgColor: "bg-yellow"
    },
    {
        label: "EXAM PREP",
        title: "SAT / ACT PREPARATION",
        description: "Full-length practice tests and score-improvement strategies for US-bound students.",
        bgColor: "bg-blue"
    },
];


const Services = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
    const scrollNext = useCallback(() => api?.scrollNext(), [api])

    useEffect(() => {
        if (!api) return

        const onSelect = () => {
            setCanScrollPrev(api.canScrollPrev())
            setCanScrollNext(api.canScrollNext())
        }

        onSelect()
        api.on('select', onSelect)
        api.on('reInit', onSelect)

        return () => {
            api.off('select', onSelect)
        }
    }, [api])

    return (
        <section className="">
            <div className="flex items-center justify-between mb-8 md:mb-16">
                <div className="">
                    {/* <h3 className="text-wte font-bold uppercase tracking-widest text-sm">
                        OUR OFFERINGS
                    </h3> */}
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Services & Courses
                    </h2>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 text-white h-12 w-12 bg-[#194970] disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 text-white h-12 w-12 bg-[#194970] disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </div>

            <Carousel
                setApi={setApi}
                opts={{ align: 'start', loop: false }}
                className="w-full"
            >
                <CarouselContent className="-ml-6">
                    {servicesData.map((service, index) => (
                        <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                            <ServiceCard
                                label={service.label}
                                title={service.title}
                                description={service.description}
                                bgColor={service.bgColor}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

export default Services
