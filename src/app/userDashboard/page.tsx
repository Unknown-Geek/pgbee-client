// src/app/userDashboard/page.tsx
"use client";

import LandingPage from "@/Components/LandingPage";
import Sidebar from "@/Components/Sidebar";
import { useEffect, useState } from "react";
import { Range } from "react-range";
import Image from 'next/image';
import Image1 from './../../../public/PgBee.png';
import Image2 from './../../../public/user.png';
import Image3 from './../../../public/Globe_icon.svg';
import { FilterList } from "@mui/icons-material";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // set initial value
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { isMobile, isHydrated };
};


export default function DashBoard() {
    const [location, setLocation] = useState<string>('');
    const { isMobile, isHydrated } = useIsMobile();
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
        <div className="flex flex-col bg-white ">
            {!toggle &&
                <nav className="flex md:hidden flex-col items-center justify-center p-[20px]">
                    <Image src={Image1} alt="PgBee Logo" className="" width={100} height={100} />
                    <div className="flex flex-row mt-[20px] gap-2">
                        {/* Input field */}
                        <div className="relative flex items-center flex-grow"> {/* Added relative and flex-grow for layout */}
                            <input
                                className="p-[15px] pr-10 rounded-lg border h-[38px] w-full border-gray-400 text-gray-800" // Added pr-10 for icon space, text-gray-800 for explicit color
                                placeholder="Bangalore, India" // Changed placeholder to match image
                                value="Bangalore, India" // If you want pre-filled text as in image, use value prop
                                readOnly // Make it read-only if it's just for display/triggering filters
                            />
                            <button
                                onClick={() => handleToggle()}
                                className="absolute right-2 bg-gray-100 text-gray-700 p-2 rounded-full cursor-pointer flex items-center justify-center" // Adjusted styling to match image
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
            {!isHydrated ? null : (
                <div className="flex flex-row lg:pt-16">
                    {(toggle || !isMobile) && <Sidebar toggle={toggle} setToggle={setToggle} />}
                    {(!toggle || !isMobile) && <LandingPage />}
                </div>
            )}
            

        </div>
    )
}
