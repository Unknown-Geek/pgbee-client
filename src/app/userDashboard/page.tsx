"use client";

import LandingPage from "@/Components/LandingPage";
import Sidebar from "@/Components/Sidebar";
import { useEffect, useState } from "react";
import Image from 'next/image';
import Image1 from './../../../public/PgBee.png';
import Image2 from './../../../public/user.png';
import Image3 from './../../../public/Globe_icon.svg';
import { FilterList, LocationOn, Search } from "@mui/icons-material";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import BottomNav from "@/Components/BottomNav";

interface SuggestionItem {
    text: string;
    type: 'hostel' | 'location' | 'amenity';
}

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

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { isMobile, isHydrated };
};

export default function DashBoard() {

    const [location, setLocation] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const { isMobile, isHydrated } = useIsMobile();
    const [toggle, setToggle] = useState(false);

    // ====================================================================
    // 🔍 MOBILE SEARCH SUGGESTIONS - REPLACE WITH YOUR ACTUAL DATA
    // ====================================================================
    // TODO: This should match the data in navbar/page.tsx
    // Keep this synchronized with your actual hostel data
    const dummyData: SuggestionItem[] = [
        // HOSTEL NAMES - Extract from your hostel objects
        { text: "Ideal Hostel", type: "hostel" },
        { text: "Vanitha Mithram", type: "hostel" }, 
        { text: "Shelter", type: "hostel" },
        { text: "Sunflower", type: "hostel" },
        
        // LOCATIONS - Extract from hostel.location field
        { text: "Opposite College Gate", type: "location" },
        { text: "50m from College", type: "location" },
        { text: "200m from College", type: "location" }, 
        { text: "300m from College", type: "location" },
        
        // AMENITIES - Extract from hostel.amenities arrays
        { text: "Free Wifi", type: "amenity" },
        { text: "Kitchen", type: "amenity" },
        { text: "Balcony", type: "amenity" },
        { text: "Terrace", type: "amenity" },
        { text: "Gym", type: "amenity" },
        { text: "Washing Machine", type: "amenity" }
        
        // 📝 NOTE: Keep this data synchronized with navbar component
        // Consider moving this to a shared data file or context
    ];

    const handleToggle = () => {
        setToggle(!toggle);
    }

    // Handle input change and generate suggestions for mobile
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLocation(value);
        
        if (value.trim().length > 0) {
            const filtered = dummyData.filter(item => 
                item.text.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filtered.slice(0, 5)); // Show max 5 suggestions
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion: SuggestionItem) => {
        console.log('Suggestion clicked:', suggestion.text);
        setLocation(suggestion.text);
        setShowSuggestions(false);
        handleSearch(suggestion.text);
    };

    const handleSearch = (query?: string) => {
        const searchTerm = query !== undefined ? query : location;
        
        // If it's an explicit empty search (clearing), allow it
        if (query === '') {
            setSearchQuery('');
            setLocation('');
            setShowSuggestions(false);
            return;
        }
        
        // Only show alert if user manually searches with empty input
        if (!searchTerm.trim()) {
            alert('Please enter a location.');
            return;
        }
        
        setSearchQuery(searchTerm);
        setShowSuggestions(false);
        console.log('Searching for:', searchTerm);
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setLocation('');
        setShowSuggestions(false);
    };

    const handleInputBlur = () => {
        // Delay hiding suggestions to allow click on suggestion
        setTimeout(() => setShowSuggestions(false), 200);
    };

    return (
        <div className="flex flex-col bg-white ">
            <div className="hidden sm:block">
            <Navbar onSearch={handleSearch} searchQuery={searchQuery} />
                </div>
                
            {!toggle &&
                <nav className="flex md:hidden flex-col items-center justify-center p-[20px]">
                    <Image src={Image1} alt="PgBee Logo" className="" width={100} height={100} />
                    <div className="flex flex-row mt-[20px] gap-2">
                        {/* Input field */}
                        <div className="relative flex items-center flex-grow"> 
                            <input
                                className="p-[15px] pr-20 rounded-lg border h-[38px] w-full border-gray-400 text-gray-800"
                                placeholder="Type a location..." 
                                value={location}
                                onChange={handleInputChange}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                onBlur={handleInputBlur}
                                onFocus={() => location.trim().length > 0 && setShowSuggestions(true)}
                            />
                            {location && (
                                <button
                                    onClick={() => handleSearch('')}
                                    className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
                                >
                                    ✕
                                </button>
                            )}
                            <button
                                onClick={() => handleToggle()}
                                className="absolute right-2 bg-gray-100 text-gray-700 p-2 rounded-full cursor-pointer flex items-center justify-center" 
                                aria-label="Filter options"
                            >
                                <FilterList fontSize="small" />
                            </button>
                            
                            {/* Search Suggestions Dropdown for Mobile */}
                            {showSuggestions && suggestions.length > 0 && (
                                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-20 max-h-60 overflow-y-auto">
                                    {suggestions.map((suggestion, index) => (
                                        <div
                                            key={index}
                                            onMouseDown={(e) => {
                                                e.preventDefault(); // Prevent blur from firing
                                                handleSuggestionClick(suggestion);
                                            }}
                                            className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 flex items-center gap-3"
                                        >
                                            {suggestion.type === 'hostel' && <Search className="text-blue-500 text-sm" />}
                                            {suggestion.type === 'location' && <LocationOn className="text-green-500 text-sm" />}
                                            {suggestion.type === 'amenity' && <span className="text-orange-500 text-xs">★</span>}
                                            <div className="flex flex-col">
                                                <span className="text-sm text-gray-700">{suggestion.text}</span>
                                                <span className="text-xs text-gray-400 capitalize">{suggestion.type}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button 
                            onClick={() => handleSearch()}
                            className=" bg-black text-white px-5 py-1.5 rounded-lg cursor-pointer"
                        >
                            Search
                        </button>
                    </div>
                </nav>
            }
            {!isHydrated ? null : (
                <div className="flex flex-row lg:pt-16">
                    {(toggle || !isMobile) && <Sidebar toggle={toggle} setToggle={setToggle} />}
                    {(!toggle || !isMobile) && <LandingPage searchQuery={searchQuery} onClearSearch={handleClearSearch} />}
                </div>
            )}
            
            <Footer />
            
            {/* --- MOBILE BOTTOM NAVIGATION --- */}
            {isMobile && <BottomNav />}
        </div>
    );
}