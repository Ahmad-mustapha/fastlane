import '../App.css';
import ServiceCard from '../components/ServiceCard';

const allServicesData = [
    {
        label: "ONE-ON-ONE",
        title: "PERSONALISED TUTORING",
        description: "Tailored sessions with a dedicated tutor who focuses entirely on your child's specific gaps, pace, and learning style.",
        bgColor: "bg-blue"
    },
    {
        label: "EXAM PREP",
        title: "WAEC / NECO INTENSIVE",
        description: "Targeted revision programmes covering all major subjects in the Nigerian curriculum with past-paper practice and marking-scheme technique.",
        bgColor: "bg-grey"
    },
    {
        label: "EXAM PREP",
        title: "IGCSE PREP PROGRAMME",
        description: "Comprehensive preparation for Cambridge IGCSE examinations, with subject-specialist tutors and structured past-paper coaching.",
        bgColor: "bg-yellow"
    },
    {
        label: "EXAM PREP",
        title: "A-LEVEL TUTORING",
        description: "Rigorous subject-specific coaching for AS and A-Level examinations, tailored to CIE, Edexcel, and AQA syllabuses.",
        bgColor: "bg-blue"
    },
    {
        label: "EXAM PREP",
        title: "SAT / ACT PREPARATION",
        description: "Structured SAT and ACT coaching with full-length practice tests, timed drilling, and score-improvement strategies for US-bound students.",
        bgColor: "bg-grey"
    },
    {
        label: "GROUP SESSION",
        title: "SMALL-GROUP CLASSES",
        description: "Collaborative learning in groups of 3–6 students with a shared tutor, combining the energy of peer learning with personalised attention.",
        bgColor: "bg-yellow"
    },
    {
        label: "CONSULTATION",
        title: "FREE INTRO SESSION",
        description: "A complimentary 30-minute consultation to assess your child's current level, set goals, and match them with the right instructor.",
        bgColor: "bg-blue"
    },
    {
        label: "SUBJECT BOOST",
        title: "MATHEMATICS MASTERCLASS",
        description: "Specialist maths tutoring for students who need to build confidence and close crucial gaps — from basic numeracy to Further Maths.",
        bgColor: "bg-grey"
    },
    {
        label: "SUBJECT BOOST",
        title: "SCIENCES PROGRAMME",
        description: "Expert-led Biology, Chemistry, and Physics tutoring covering practical exam technique, theory comprehension, and past-paper mastery.",
        bgColor: "bg-yellow"
    },
    {
        label: "SUBJECT BOOST",
        title: "ENGLISH & LANGUAGES",
        description: "English Language, English Literature, and French tutoring covering comprehension, essay writing, oral skills, and examination technique.",
        bgColor: "bg-blue"
    },
    {
        label: "MENTORSHIP",
        title: "UNIVERSITY APPLICATION COACHING",
        description: "End-to-end guidance on personal statements, application strategy, and interview preparation for UK, US, and Nigerian university admissions.",
        bgColor: "bg-grey"
    },
    {
        label: "ALUMNI",
        title: "ALUMNI SUPPORT NETWORK",
        description: "Exclusive access to our community of Fastlane graduates for peer study, exam tips, and ongoing academic mentorship.",
        bgColor: "bg-yellow"
    },
];


export default function Services() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <div className="px-6 md:px-16 lg:px-24 pt-20 pb-16 md:pt-28 md:pb-24 text-center relative">
                {/* Decorative background blobs */}
                <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10">
                    <span className="inline-block px-5 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase bg-[#194970]/10 text-[#194970] dark:bg-white/10 dark:text-white/80 mb-6">
                        What We Offer
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                        Services & Courses
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        From beginner-friendly tutorials to advanced pro courses, we provide the tools, mentorship, and community you need to accelerate your career.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="px-6 md:px-16 lg:px-24 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allServicesData.map((service, index) => (
                        <div
                            key={index}
                            className="opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            <ServiceCard
                                label={service.label}
                                title={service.title}
                                description={service.description}
                                bgColor={service.bgColor}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
