"use client";

import LandingPage from "@/Components/LandingPage";
import Sidebar from "@/Components/Sidebar";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { FilterList } from "@mui/icons-material";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import BottomNav from "@/Components/BottomNav"; // 1. Import BottomNav

// Custom hook to detect mobile screen size
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    // This effect runs only on the client after hydration
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Set initial value
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
};


export default function DashBoard() {
    const [location, setLocation] = useState<string>('');
    const isMobile = useIsMobile(); // Use the hook
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleSearch = () => {
        if (!location.trim()) {
            alert('Please enter a location.');
            return;
        }
        console.log('Searching for:', location);
        alert(`Searching for: ${location}`);
    };

    return (
        <div className="flex flex-col bg-white min-h-screen">
            {/* Desktop Navbar */}
            <div className="hidden sm:block">
                <Navbar />
            </div>

            {/* Mobile Navbar */}
            {!toggle &&
                <nav className="flex md:hidden flex-col items-center justify-center p-[20px]">
                    <Image src="/PgBee.png" alt="PgBee Logo" width={100} height={100} />
                    <div className="flex flex-row mt-[20px] gap-2">
                        <div className="relative flex items-center flex-grow">
                            <input
                                className="p-[15px] pr-10 rounded-lg border h-[38px] w-full border-gray-400 text-gray-800"
                                placeholder="Bangalore, India"
                                value="Bangalore, India"
                                readOnly
                            />
                            <button
                                onClick={() => handleToggle()}
                                className="absolute right-2 bg-gray-100 text-gray-700 p-2 rounded-full cursor-pointer flex items-center justify-center"
                                aria-label="Filter options"
                            >
                                <FilterList fontSize="small" />
                            </button>
                        </div>
                        <button className=" bg-black text-white px-5 py-1.5 rounded-lg cursor-pointer">
                            Search
                        </button>
                    </div>
                </nav>
            }
            
            <div className="flex flex-row flex-grow lg:pt-16">
                {(toggle || !isMobile) && <Sidebar toggle={toggle} setToggle={setToggle} />}
                {(!toggle || !isMobile) && <LandingPage />}
            </div>
            
            <Footer />
            
            {/* 2. Conditionally render BottomNav on mobile */}
            {isMobile && <BottomNav />}
        </div>
    )
}