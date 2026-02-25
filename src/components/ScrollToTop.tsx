import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa6';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-3 md:right-8 z-50 bg-[#194070] text-white px-6 py-3 rounded-l-full flex items-center gap-2"
                    aria-label="Back to top"
                >
                    <span className="text-[10px] md:text-sm font-medium tracking-wide">BACK TO TOP</span>
                    <FaArrowUp className="w-3 h-3 md:w-4 md:h-4" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
