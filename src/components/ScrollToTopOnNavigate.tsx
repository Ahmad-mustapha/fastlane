import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnNavigate = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Use both approaches for maximum compatibility
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [pathname]);

    return null;
};

export default ScrollToTopOnNavigate;
