"use client";

import LandingPage from "@/Components/LandingPage";
import Sidebar from "@/Components/Sidebar";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { FilterList } from "@mui/icons-material";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import BottomNav from "@/Components/BottomNav";

// Custom hook to detect if the screen is mobile.
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
        
        // This function runs on the client side after the component mounts
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Set the initial value
        window.addEventListener("resize", handleResize);
        
        // Cleanup the event listener when the component unmounts
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Return false during SSR to prevent hydration mismatch
    if (!mounted) {
        return false;
    }

    return isMobile;
};


export default function DashBoard() {
    const isMobile = useIsMobile();
    // This state will control the visibility of the filter sidebar on mobile
    const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

    // Show the filter sidebar on mobile, hide the main content
    const showMobileFilter = () => setIsFilterSidebarOpen(true);
    // Hide the filter sidebar on mobile, show the main content
    const hideMobileFilter = () => setIsFilterSidebarOpen(false);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            
            {/* --- DESKTOP NAVIGATION --- */}
            {/* This Navbar is only visible on desktop screens */}
            <div className="hidden md:block">
                <Navbar />
            </div>

            {/* --- MOBILE SEARCH BAR --- */}
            {/* This search bar is only visible on mobile when the filter sidebar is closed */}
            {!isFilterSidebarOpen && (
                 <div className="flex md:hidden flex-col items-center p-4 border-b">
                    <Image src="/PgBee.png" alt="PgBee Logo" width={100} height={40} />
                    <div className="flex items-center w-full mt-4 gap-2">
                        <div className="relative flex-grow">
                            <input
                                className="w-full h-12 px-4 pr-12 text-gray-800 border border-gray-300 rounded-lg"
                                value="Bangalore, India"
                                placeholder="Type a location..."
                                readOnly
                            />
                            <button
                                onClick={showMobileFilter}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-100 rounded-full"
                                aria-label="Show filters"
                            >
                                <FilterList />
                            </button>
                        </div>
                        <button className="bg-black text-white px-6 h-12 rounded-lg font-semibold">
                            Search
                        </button>
                    </div>
                </div>
            )}
            
            {/* --- MAIN CONTENT AREA --- */}
            <div className="flex flex-grow">
                {/* Sidebar: Always visible on desktop, conditionally on mobile */}
                <div className={`${isMobile && !isFilterSidebarOpen ? 'hidden' : 'block'}`}>
                     <Sidebar toggle={isFilterSidebarOpen} setToggle={setIsFilterSidebarOpen} />
                </div>
                
                {/* Landing Page: Always visible on desktop, hidden on mobile when filter is open */}
                 <div className={`${isMobile && isFilterSidebarOpen ? 'hidden' : 'block w-full'}`}>
                    <LandingPage />
                </div>
            </div>
            
            <Footer />
            
            {/* --- MOBILE BOTTOM NAVIGATION --- */}
            {/* This BottomNav is only visible on mobile screens */}
            <div className="block md:hidden">
                <BottomNav />
            </div>
        </div>
    );
}