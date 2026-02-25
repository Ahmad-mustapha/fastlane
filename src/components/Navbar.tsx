"use client";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import Whitelogo from "../assets/whitelogo.png";
import Whilemobilelogo from '../assets/whitemobilelogo.png'
import { FaArrowRight } from "react-icons/fa6";

const navlinks = [
    {
        id: 1,
        text: "Home",
        link: "/",
    },
    {
        id: 2,
        text: "About",
        link: "/about",
    },
    {
        id: 3,
        text: "Services",
        link: "/services",
    },

    {
        id: 4,
        text: "Contact",
        link: "/#contact",
    },
    {
        id: 5,
        text: "Book",
        link: "/booking",
    },
];


export const Sidebar = ({
    isOpen,
    setOpenNav,
    onContactClick,
}: {
    isOpen: boolean;
    setOpenNav: (open: boolean) => void;
    onContactClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
    // Filter out Book from main links to display it separately
    const mainLinks = navlinks.filter((link) => link.text !== "Book");

    return (
        <div
            className={`fixed inset-0 z-[60] bg-[#000] transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
            <div className="flex flex-col h-full px-6 py-6 md:px-12">
                {/* Header */}
                <div onClick={() => setOpenNav(false)} className="cursor-pointer w-42 mb-16 hidden md:flex">
                    <img src={Whitelogo} alt="Logo" />
                </div>
                <div onClick={() => setOpenNav(false)} className="cursor-pointer block md:hidden w-20 mb-6 -mt-3">
                    <img src={Whilemobilelogo} alt="Logo" />
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-col gap-8 mb-auto">
                    {mainLinks.map((item) => (
                        <li key={item.id} className="text-[#fff]">
                            {item.text === "Contact" ? (
                                <a
                                    onClick={(e) => {
                                        onContactClick(e);
                                        setOpenNav(false);
                                    }}
                                    className="text-[32px] sm:text-[40px] font-medium hover:text-gray-400 transition-colors cursor-pointer"
                                    href="/#contact"
                                >
                                    {item.text}
                                </a>
                            ) : (
                                <Link
                                    to={item.link}
                                    onClick={() => setOpenNav(false)}
                                    className="text-[32px] sm:text-[40px] font-medium hover:text-gray-400 transition-colors"
                                >
                                    {item.text}
                                </Link>
                            )}
                        </li>
                    ))}

                    {/* Sidebar-only: Testimonials smooth-scroll link */}
                    <li className="text-[#fff]">
                        <a
                            href="/#testimonial"
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenNav(false);
                                const el = document.getElementById("testimonial");
                                if (el) {
                                    el.scrollIntoView({ behavior: "smooth" });
                                } else {
                                    window.location.href = "/#testimonial";
                                }
                            }}
                            className="text-[32px] sm:text-[40px] font-medium hover:text-gray-400 transition-colors cursor-pointer"
                        >
                            Testimonials
                        </a>
                    </li>
                </ul>

                {/* Book Session Button for mobile */}
                <div className="mt-auto mb-8">
                    <Link to="/booking" onClick={() => setOpenNav(false)} className="group w-fit flex items-center justify-between gap-6 px-3 py-2 pl-5 rounded-full border border-gray-600 hover:border-white transition-colors bg-transparent text-left">
                        <span className="text-[17px] font-medium text-white">Book Session</span>
                        <span className="bg-white rounded-full p-2.5 text-black group-hover:scale-105 transition-transform duration-300">
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const { pathname } = useLocation();
    const { scrollYProgress } = useScroll();

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const contactElement = document.getElementById("contact");
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: "smooth" });
            setOpenNav(false);
        } else {
            window.location.href = "/#contact";
        }
    };

    const ToggleMenu = () => {
        setOpenNav(!openNav);
    };

    return (
        <div className="">
            <nav
                className={`z-30 h-[6rem] flex items-center justify-between py-6 px-6 md:px-16 lg:px-24 fixed top-0 w-full transition-all duration-300 bg-transparent backdrop-blur-md`}
            >
                <Link to="/" onClick={() => setOpenNav(false)} className="cursor-pointer w-48 md:w-56 hidden sm:block">
                    <img src={Whitelogo} alt="Logo" className="w-full h-auto" />
                </Link>
                <Link to="/" onClick={() => setOpenNav(false)} className="cursor-pointer block md:hidden w-18">
                    <img src={Whilemobilelogo} alt="Logo" />
                </Link>

                {/* Centered Links */}
                <ul className="hidden md:flex items-center gap-10">
                    {navlinks.map((item, index) => (
                        <li className="relative text-[16px]" key={index}>
                            {item.id === 5 ? (
                                <Link to="/booking" className="group flex items-center justify-between gap-4 px-2 py-1.5 pl-5 rounded-full border border-gray-500 hover:border-white transition-colors bg-transparent">
                                    <span className="text-[15px] font-medium text-white">Book Session</span>
                                    <span className="bg-white rounded-full p-2 text-black group-hover:scale-110 transition-transform">
                                        <FaArrowRight size={14} />
                                    </span>
                                </Link>
                            ) : item.text === "Contact" ? (
                                <a
                                    onClick={handleContactClick}
                                    className="eachlink text-[#fff] hover:text-gray-300 transition-colors duration-300 cursor-pointer font-medium"
                                    href="/#contact"
                                >
                                    {item.text}
                                </a>
                            ) : (
                                <Link
                                    to={item.link}
                                    className={`eachlink transition-colors duration-300 font-medium ${pathname === item.link ? "text-white" : "text-gray-300 hover:text-white"}`}
                                >
                                    {item.text}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Progress Bar */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30 origin-left"
                    style={{ scaleX: scrollYProgress }}
                />
            </nav>
            {/* Hamburger Menu */}
            <div
                className="menu z-[70] fixed top-8 right-[2rem] md:hidden flex flex-col gap-2 cursor-pointer transition-all duration-300 p-2"
                onClick={ToggleMenu}
            >
                <p
                    className={`block w-8 h-[2px] bg-[#fff] transition-transform duration-500 ${openNav ? "rotate-45 translate-y-[10px]" : ""}`}
                ></p>
                <p
                    className={`block w-8 h-[2px] bg-[#fff] transition-transform duration-500 ${openNav ? "opacity-0" : "opacity-100"}`}
                ></p>
                <p
                    className={`block w-8 h-[2px] bg-[#fff] transition-transform duration-500 ${openNav ? "-rotate-45 -translate-y-[10px]" : ""}`}
                ></p>
            </div>

            <Sidebar
                isOpen={openNav}
                setOpenNav={setOpenNav}
                onContactClick={handleContactClick}
            />
            <div
                className={`${openNav ? "backdrop-blur-[10px] h-screen w-full fixed top-0 z-40 bg-black/40" : "hidden"}`}
                onClick={() => setOpenNav(false)}
            ></div>
        </div>
    );
};

export default Navbar;
