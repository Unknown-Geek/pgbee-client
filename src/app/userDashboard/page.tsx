"use client";

import LandingPage from "@/Components/LandingPage";
import Sidebar from "@/Components/Sidebar";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { FilterList } from "@mui/icons-material";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import BottomNav from "@/Components/BottomNav";
import { useMediaQuery } from 'react-responsive'; // 1. Import the hook

export default function DashBoard() {
    const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
    
    // 2. Use the hook to detect screen size
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    
    // This state prevents hydration errors by delaying render until the client has mounted
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Render nothing on the server to avoid mismatch
    if (!isClient) {
        return null;
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            
            {/* --- NAVIGATION --- */}
            {/* 3. Conditionally render based on the hook's return value */}
            {isMobile ? (
                // --- MOBILE SEARCH BAR ---
                !isFilterSidebarOpen && (
                    <div className="p-4 border-b">
                        <div className="flex flex-col items-center">
                            <Image src="/PgBee.png" alt="PgBee Logo" width={100} height={40} />
                            <div className="flex items-center w-full mt-4 gap-2">
                                <div className="relative flex-grow">
                                    <input
                                        className="w-full h-12 px-4 pr-12 text-gray-800 border border-gray-300 rounded-lg"
                                        value="Bangalore, India"
                                        readOnly
                                        placeholder="Type a location..."
                                    />
                                    <button
                                        onClick={() => setIsFilterSidebarOpen(true)}
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
                    </div>
                )
            ) : (
                // --- DESKTOP NAVIGATION ---
                <Navbar />
            )}
            
            {/* --- MAIN CONTENT AREA --- */}
            <div className="flex flex-grow">
                {/* SIDEBAR */}
                {(!isMobile || isFilterSidebarOpen) && (
                    <div className={isMobile ? 'w-full' : ''}>
                        <Sidebar toggle={isFilterSidebarOpen} setToggle={setIsFilterSidebarOpen} />
                    </div>
                )}
                
                {/* LANDING PAGE */}
                {(!isMobile || !isFilterSidebarOpen) && (
                    <div className="w-full">
                        <LandingPage />
                    </div>
                )}
            </div>
            
            <Footer />
            
            {/* --- MOBILE BOTTOM NAVIGATION --- */}
            {isMobile && <BottomNav />}
        </div>
    );
}