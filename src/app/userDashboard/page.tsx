"use client";

import LandingPage from "@/Components/LandingPage";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";
import Image from 'next/image';
import { FilterList } from "@mui/icons-material";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import BottomNav from "@/Components/BottomNav";

export default function DashBoard() {
    // This state now ONLY controls the filter visibility on mobile
    const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            
            {/* --- DESKTOP NAVIGATION --- */}
            {/* This Navbar is only visible on desktop screens (md and larger) */}
            <div className="hidden md:block">
                <Navbar />
            </div>

            {/* --- MOBILE SEARCH BAR --- */}
            {/* This search bar is only visible on mobile when the filter is closed */}
            <div className={`md:hidden p-4 border-b ${isFilterSidebarOpen ? 'hidden' : 'block'}`}>
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
            
            {/* --- MAIN CONTENT AREA --- */}
            <div className="flex flex-grow">
                {/* SIDEBAR:
                  - Hidden on mobile by default.
                  - Appears on desktop (md:block).
                  - On mobile, it appears as a full-screen filter view when isFilterSidebarOpen is true.
                */}
                <div className={`md:block ${isFilterSidebarOpen ? 'block w-full' : 'hidden'}`}>
                     <Sidebar toggle={isFilterSidebarOpen} setToggle={setIsFilterSidebarOpen} />
                </div>
                
                {/* LANDING PAGE:
                  - Hidden on mobile ONLY when the filter sidebar is open.
                  - Always visible on desktop.
                */}
                 <div className={`w-full ${isFilterSidebarOpen ? 'hidden' : 'block'} md:block`}>
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