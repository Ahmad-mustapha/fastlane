
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What curriculums do you cover?",
        answer: "We specialize in Nigerian, British, and American curriculums, ensuring comprehensive support for students preparing for various national and international examinations."
    },
    {
        question: "How are classes conducted?",
        answer: "Our classes are conducted online via our interactive learning platform, featuring live video sessions, collaborative whiteboards, and real-time feedback."
    },
    {
        question: "How do you track student progress?",
        answer: "We use performance analytics and regular assessments to track progress. Parents receive detailed monthly reports highlighting strengths and areas for improvement."
    },
    {
        question: "Do you offer personalized tutoring?",
        answer: "Yes, we offer both one-on-one personalized tutoring tailored to individual learning styles and small group sessions for collaborative learning."
    },
    {
        question: "How do I get started?",
        answer: "Getting started is easy! Simply book a free consultation session through our website, and we'll assess your needs and recommend the best learning plan."
    }
];

const FaqItem = ({ item, index, isOpen, onClick }: { item: typeof faqs[0], index: number, isOpen: boolean, onClick: () => void }) => {
    return (
        <div
            className={`border-b border-white/10 transition-colors duration-300 ${isOpen ? 'bg-white/5' : 'hover:bg-white/5'}`}
        >
            {/* Question row — button only contains the trigger */}
            <button
                className="w-full py-8 pl-4 pr-4 md:px-8 flex items-start gap-6 md:gap-12 text-left focus:outline-none"
                onClick={onClick}
            >
                <span className="text-sm md:text-base font-mono text-gray-500 pt-1">
                    {String(index + 1).padStart(2, '0')}
                </span>

                <div className="flex-1 pt-1">
                    <h3 className="text-md md:text-xl font-medium text-white">
                        {item.question}
                    </h3>
                </div>

                <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-sm transition-all duration-300 ${isOpen
                    ? 'bg-[#194970] shadow-lg'
                    : 'bg-[#1A1A1A] text-white hover:bg-[#252525]'
                    }`}>
                    {isOpen ? <Minus size={16} className="text-white" /> : <Plus size={16} />}
                </div>
            </button>

            {/* Answer row — full width, NOT inside the button */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        {/* Indent to align with question text: pl-4 (button padding) + ~24px (number span) + gap-6 */}
                        <p className="text-gray-400 leading-relaxed font-light text-[14px] md:text-base pb-8 pl-4 pr-4 md:px-8 md:pl-[calc(2rem+2ch+3rem)]">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-[#050505] pt-12 pb-12 px-6 md:px-16 lg:px-24 -mx-6 md:-mx-16 lg:-mx-24 relative overflow-hidden font-sans mt-20">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            {/* Gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 via-transparent to-black/80 pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">
                        Frequently Asked <br /> Questions
                    </h2>

                    <div className="border-t border-white/10">
                        {faqs.map((faq, index) => (
                            <FaqItem
                                key={index}
                                item={faq}
                                index={index}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
