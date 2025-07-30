'use client';

import { CheckCircleOutline, Favorite, FavoriteBorder } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { FilterState } from "./Sidebar";
import Image from "next/image";

interface LandingPageProps {
    searchQuery?: string;
    filters?: FilterState | null;
}

export default function LandingPage({ searchQuery = '', filters }: LandingPageProps) {
    
    // ====================================================================
    // 🏠 HOSTEL/PG DATA STRUCTURE - REPLACE THIS WITH YOUR ACTUAL DATA
    // ====================================================================
    // TODO: Replace this dummy data with your actual API call or database fetch
    // Enhanced data structure for each hostel object to support filters:

    interface PgData {
        id: number;
        name: string;
        location: string;
        rating: number;
        reviews: number;
        price: number;
        discountedPrice: number;
        amenities: string[];
        images: string[];
        rooms: number;
        bathrooms: number;
        deposit: boolean;
        gender: string;
        type: 'Hostel' | 'PG';
        curfew: 'mandatory' | 'none';
        roomTypes: string[];
        bathroomAttached: boolean;
    }

    const pgs: PgData[] = [
        {
            id: 1,
            name: "JJG",
            location: "Durga lane 1 ,house no 34 Sasthankonam,near KTU ,Sreekaryam P O. Pin 695017",
            rating: 4.6,
            reviews: 100,
            price: 6000,
            discountedPrice: 6000,
            amenities: ["Free Wifi", "mess provision", "non ac rooms", "water filter"],
            images: ["/ideal_1.webp", "/ideal 2.webp", "/ideal_3.webp", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms: 12,
            deposit: true,
            gender: "Male",
            type: 'PG',
            curfew: 'none',
            roomTypes: ['Single Room', 'Shared Room'],
            bathroomAttached: true
        },
        {
            id: 2,
            name: "Mehnaz",
            location: "Mehnaz Hostel. Sreekaryam, Trivandrum ",
            rating: 4.6,
            reviews: 100,
            price: 6500,
            discountedPrice: 6500,
            amenities: ["Free Wifi", "mess provision", "non ac rooms", "water filter"],
            images: ["mehanaz.webp", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms: 12,
            deposit: true,
            gender: "Male",
            type: 'PG',
            curfew: 'mandatory',
            roomTypes: [ 'Shared Room'],
            bathroomAttached: true
        },
        {
            id: 3,
            name: "Gokulam",
            location: "Gokulam Maykkonam pangappara PO",
            rating: 4.2,
            reviews: 89,
            price: 6000,
            discountedPrice: 6000,
            amenities: ["Free Wifi", "laundary service", "mess provision","non ac rooms"],
            images: ["/mithram_1.webp", "/mithram_2.jpg", "/mithram_3.avif", "/pg.png", "/pg.png"],
            rooms: 10,
            bathrooms: 10,
            deposit: true,
            gender: "Female",
            type: 'PG',
            curfew: 'mandatory',
            roomTypes: ['Shared Room'],
            bathroomAttached: true
        },
        {
            id: 4,
            name: "Malieckal",
            location: "Ambady nagar lane 1, near electrical gate  ; sreekarym po",
            rating: 3.6,
            reviews: 20,
            price: 3000,
            discountedPrice: 3000,
            amenities: ["non ac rooms"],
            images: ["/shelter_1.webp", "/shelter_2.webp", "/shelter_3.webp", "/shelter_4.avif", "/pg.png"],
            rooms: 25,
            bathrooms: 22,
            deposit: true,
            gender: "Male",
            type: 'PG',
            curfew: 'none',
            roomTypes: ['Shared Room'],
            bathroomAttached: false
        },
        {
            id: 4,
            name: "Swapanakoodu",
            location: "CRP Nagar",
            rating: 4.2,
            reviews: 89,
            price: 5000,
            discountedPrice: 5000,
            amenities: ["Free Wifi", "mess provision", "power back up","water filter"],
            images: ["swapnakood 1.webp","swapnakood 1(3)webp", "swapnakood 1(1)webp","swapnakood 1(4)webp", "swapnakood 1(2)webp", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms: 15,
            deposit: true,
            gender: "Female",
            type: 'PG',
            curfew: 'mandatory',
            roomTypes: ['Single Room'],
            bathroomAttached: true
        },
        {
            id: 41,
            name: "Swapanakoodu",
            location: "CRP Nagar",
            rating: 4.2,
            reviews: 89,
            price: 5000,
            discountedPrice: 5000,
            amenities: ["Free Wifi", "mess provision", "power back up","water filter"],
            images: ["swapnakood 1.webp","swapnakood 1(3)webp", "swapnakood 1(1)webp","swapnakood 1(4)webp", "swapnakood 1(2)webp", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms: 15,
            deposit: true,
            gender: "Female",
            type: 'PG',
            curfew: 'mandatory',
            roomTypes: ['Single Room'],
            bathroomAttached: false
        },
        {
            id: 43,
            name: "Swapanakoodu",
            location: "CRP Nagar",
            rating: 4.2,
            reviews: 89,
            price: 4000,
            discountedPrice: 4000,
            amenities: ["Free Wifi", "mess provision", "power back up","water filter"],
            images: ["swapnakood 1.webp","swapnakood 1(3)webp", "swapnakood 1(1)webp","swapnakood 1(4)webp", "swapnakood 1(2)webp", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms: 15,
            deposit: true,
            gender: "Female",
            type: 'PG',
            curfew: 'mandatory',
            roomTypes: ['two sharing Room'],
            bathroomAttached: true
        },
        {
            id: 44,
            name: "Swapanakoodu",
            location: "CRP Nagar",
            rating: 4.2,
            reviews: 89,
            price: 4000,
            discountedPrice: 4000,
            amenities: ["Free Wifi", "mess provision", "power back up","water filter"],
            images: ["swapnakood 1.webp","swapnakood 1(3)webp", "swapnakood 1(1)webp","swapnakood 1(4)webp", "swapnakood 1(2)webp", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms: 15,
            deposit: true,
            gender: "Female",
            type: 'PG',
            curfew: 'mandatory',
            roomTypes: ['two sharing Room'],
            bathroomAttached: false
        },
        {
            id: 45,
            name: "Swapanakoodu",
            location: "CRP Nagar",
            rating: 4.2,
            reviews: 89,
            price: 3500,
            discountedPrice: 3500,
            amenities: ["Free Wifi", "mess provision", "power back up","water filter"],
            images: ["swapnakood 1.webp","swapnakood 1(3)webp", "swapnakood 1(1)webp","swapnakood 1(4)webp", "swapnakood 1(2)webp", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms: 15,
            deposit: true,
            gender: "Female",
            type: 'PG',
            curfew: 'mandatory',
            roomTypes: ['three sharing Room'],
            bathroomAttached: true
        },
         {
            id: 46,
            name: "Swapanakoodu",
            location: "CRP Nagar",
            rating: 4.2,
            reviews: 89,
            price: 3500,
            discountedPrice: 3500,
            amenities: ["Free Wifi", "mess provision", "power back up","water filter"],
            images: ["swapnakood 1.webp","swapnakood 1(3)webp", "swapnakood 1(1)webp","swapnakood 1(4)webp", "swapnakood 1(2)webp", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms: 15,
            deposit: true,
            gender: "Female",
            type: 'PG',
            curfew: 'mandatory',
            roomTypes: ['three sharing Room'],
            bathroomAttached: false
        },
        {
            id: 5,
            name: "Shim Sha Hostel",
            location: "Chavadimukk, Sreekaryam, Trivandrum ",
            rating: 4.2,
            reviews: 89,
            price: 6500,
            discountedPrice: 6500,
            amenities: ["Free Wifi", "mess provision"],
            images: ["shim sha.webp", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms: 15,
            deposit: true,
            gender: "Male",
            type: 'PG',
            curfew: 'mandatory',
            roomTypes: [ 'Shared Room'],
            bathroomAttached: true
        },
         {
            id: 6,
            name: "Swapanakoodu2",
            location: "CRP Nagar",
            rating: 4.2,
            reviews: 89,
            price: 4000,
            discountedPrice: 5000,
            amenities: ["Free Wifi", "mess provision", "power back up","water filter","TV","laundry service"],
            images: ["swapnakood 2.webp", "swapnakood 2(1)webp", "swapnakood 2(2)webp","swapnakood 2(3)webp","swapnakood 2(4)webp","swapnakood 2(5)webp", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms: 15,
            deposit: true,
            gender: "Female",
            type: 'PG',
            curfew: 'none',
            roomTypes: ["3 sharing"],
            bathroomAttached: true
        },
        {
            id: 7,
            name: "Swapanakoodu2",
            location: "CRP Nagar",
            rating: 4.2,
            reviews: 89,
            price: 4000,
            discountedPrice: 5000,
            amenities: ["Free Wifi", "mess provision", "power back up","water filter","TV","laundry service"],
            images: ["swapnakood 2.webp", "swapnakood 2(1)webp", "swapnakood 2(2)webp","swapnakood 2(3)webp","swapnakood 2(4)webp","swapnakood 2(5)webp", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms: 15,
            deposit: true,
            gender: "Female",
            type: 'PG',
            curfew: 'none',
            roomTypes: ["3 sharing"],
            bathroomAttached: true
        },
        {
            id: 8,
            name: "Meikkonam",
            location: "Meikkonam  chirakkara puthen veedu ",
            rating: 4.2,
            reviews: 89,
            price: 3000,
            discountedPrice: 3000,
            amenities: ["non ac rooms"],
            images: ["meikkonam(1).webp", "meikkonam(2).webp", "meikkonam(3).webp","meikkonam.webp", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms: 15,
            deposit: true,
            gender: "Female",
            type: 'PG',
            curfew: 'none',
            roomTypes: [ 'Shared Room'],
            bathroomAttached: false
        },
         {
            id: 9,
            name: "Durbar Gents hostel",
            location: "Ambady nagar lane 2,near electrical gate,chavadimukku, Sreekariyam po",
            rating: 4.2,
            reviews: 89,
            price: 7000,
            discountedPrice: 7000,
            amenities: ["Free Wifi", "laundry","mess provision"],
            images: ["/sunflower_1.jpg", "/sunflower_2.webp", "/sunflower_3.jpeg", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms: 15,
            deposit: true,
            gender: "Male",
            type: 'PG',
            curfew: 'mandatory',
            roomTypes: ['Shared Room'],
            bathroomAttached: true
        },
         {
            id: 10,
            name: "Durbar Gents hostel",
            location: "Ambady nagar lane 2,near electrical gate,chavadimukku, Sreekariyam po",
            rating: 4.2,
            reviews: 89,
            price: 4000,
            discountedPrice: 4000,
            amenities: ["Free Wifi", "laundry","no mess provision"],
            images: ["/sunflower_1.jpg", "/sunflower_2.webp", "/sunflower_3.jpeg", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms: 15,
            deposit: true,
            gender: "Male",
            type: 'PG',
            curfew: 'mandatory',
            roomTypes: ['Shared Room'],
            bathroomAttached: true
        },
        // Add more hostels here following the same structure
    ];

    // ====================================================================
    // 🔍 FILTERING AND SORTING FUNCTIONALITY
    // ====================================================================

    // Apply filters and search
    const getFilteredAndSortedPgs = () => {
        let filtered = [...pgs];

        // Apply search query filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(pg => (
                pg.name.toLowerCase().includes(query) ||
                pg.location.toLowerCase().includes(query) ||
                pg.amenities.some(amenity => amenity.toLowerCase().includes(query))
            ));
        }

        // Apply filters if they exist
        if (filters) {
            // Amenities filter
            if (filters.amenities.length > 0) {
                filtered = filtered.filter(pg =>
                    filters.amenities.every(amenity =>
                        pg.amenities.some(pgAmenity => 
                            pgAmenity.toLowerCase().includes(amenity.toLowerCase()) ||
                            amenity.toLowerCase().includes(pgAmenity.toLowerCase())
                        )
                    )
                );
            }

            // Price range filter
            filtered = filtered.filter(pg =>
                pg.discountedPrice >= filters.priceRange[0] &&
                pg.discountedPrice <= filters.priceRange[1]
            );

            // Place type filter
            filtered = filtered.filter(pg => pg.type === filters.placeType);

            // Rooms filter
            if (filters.rooms !== 'Any') {
                const roomCount = parseInt(filters.rooms);
                filtered = filtered.filter(pg => pg.rooms >= roomCount);
            }

            // Bathrooms filter
            if (filters.bathrooms !== 'Any') {
                const bathroomCount = parseInt(filters.bathrooms);
                filtered = filtered.filter(pg => pg.bathrooms >= bathroomCount);
            }

            // Curfew filter
            if (filters.curfew !== 'any') {
                filtered = filtered.filter(pg => pg.curfew === filters.curfew);
            }

            // Room type filter
            if (filters.roomType.length > 0) {
                filtered = filtered.filter(pg =>
                    filters.roomType.some(type => pg.roomTypes.includes(type))
                );
            }

            // Bathroom attached filter
            if (filters.bathroomAttached !== 'any') {
                const isAttached = filters.bathroomAttached === 'attached';
                filtered = filtered.filter(pg => pg.bathroomAttached === isAttached);
            }

            // Caution deposit filter
            if (filters.cautionDeposit !== 'any') {
                const hasDeposit = filters.cautionDeposit === 'yes';
                filtered = filtered.filter(pg => pg.deposit === hasDeposit);
            }

            // TODO: Apply sorting - COMMENTED OUT FOR NOW
            /*
            switch (filters.sortBy) {
                case 'Price: Low to High':
                    filtered.sort((a, b) => a.discountedPrice - b.discountedPrice);
                    break;
                case 'Price: High to Low':
                    filtered.sort((a, b) => b.discountedPrice - a.discountedPrice);
                    break;
                case 'Rating':
                    filtered.sort((a, b) => b.rating - a.rating);
                    break;
                case 'Most Reviewed':
                    filtered.sort((a, b) => b.reviews - a.reviews);
                    break;
                case 'Popularity':
                default:
                    // Keep original order or apply popularity logic
                    filtered.sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
                    break;
            }
            */
        }

        return filtered;
    };

    const filteredPgs = getFilteredAndSortedPgs();

    // ====================================================================
    // 🎨 UI STATE AND HELPERS
    // ====================================================================
    
    const [likedPgs, setLikedPgs] = useState<boolean[]>(filteredPgs.map(() => false));
    const toggleLike = (index: number) => {
        setLikedPgs((prev) => {
            const newLikes = [...prev];
            newLikes[index] = !newLikes[index];
            return newLikes;
        });
    };

    const useIsMobile = () => {
        const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth < 768);
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return isMobile;
    };
    const isMobile = useIsMobile();

    const router = useRouter();

    // Navigate to detail page with the selected PG id
const handleViewDetails = (id: number) => {
  router.push(`/userDashboard/${id}`);
};

    return (
        <div className="w-full lg:basis-4/5">
            {/* searchbar */}
            <div className="p-[15px] lg:p-[25px] border-b border-transparent sm:border-gray-400 flex flex-col lg:flex-row lg:items-center">
                <div className="flex items-center gap-4">
                    <span className="text-2xl lg:text-xl font-bold lg:font-semibold px-[3px] lg:pl-[20px] py-[5px] lg:py-[30px]">
                        {searchQuery ? `Search results for "${searchQuery}"` : 'Hostels in College Of Engineering,Trivandrum'}
                    </span>
                </div>
                <span>({filteredPgs.length} search results)</span>
                {/* TODO: Sort dropdown - COMMENTED OUT FOR NOW */}
                {/*
                <span className="ml-[170px] mr-[15px] font-semibold hidden sm:block ">Sort By:</span>

                <select className="hidden sm:block p-[8px] cursor-pointer rounded-lg border h-[40px] w-[300px] border-gray-400 appearance-none bg-white pr-10">
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                </select>
                */}
            </div>

            {/* landing page */}
            {filteredPgs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16">
                    <p className="text-xl text-gray-500 mb-2">No PGs found</p>
                    <p className="text-gray-400">Try adjusting your search criteria</p>
                </div>
            ) : (
                filteredPgs.map((pg, i) => {
                const maxDisplay = 4;
                const remainingCount = pg.images.length - maxDisplay;

                return (
                    <div key={pg.id} className="m-[15px] lg:m-[30px] flex pb-6 " onClick={() => handleViewDetails(pg.id)}>
                        {/* Main image */}
                        <div className="relative w-[220px] lg:w-[400px] h-[170px] lg:h-[260px] rounded-2xl overflow-hidden flex-shrink-0">
                            <Image
                                src={pg.images[0]}
                                alt={pg.name}
                                className="block w-full h-full object-cover rounded-2xl"
                            />

                            {/* Heart icon: top-right on mobile, hidden on larger screens */}
                            <div
                                onClick={() => toggleLike(pg.id)}
                                className="absolute top-2 right-2 sm:hidden text-gray-500 bg-white border border-gray-300 rounded-full p-2 w-[30px] h-[30px] flex items-center justify-center"
                            >
                                {likedPgs[pg.id] ? <Favorite className="text-red-500" /> : <FavoriteBorder />}
                            </div>
                        </div>

                        {/* Side images */}
                        <div className="flex flex-col gap-3 ml-[10px] hidden sm:block">
                            {pg.images.slice(1, maxDisplay + 1).map((img, idx) => (
                                <Image
                                    key={idx}
                                    src={img}
                                    alt={`img-${idx}`}
                                    className="rounded-xl w-20 h-12 mt-[4px] object-cover"
                                />
                            ))}

                            {remainingCount > 0 && (
                                <div className="relative rounded-xl w-20 h-12 overflow-hidden">
                                    <Image
                                        src={pg.images[maxDisplay]}
                                        alt="more"
                                        className="w-full h-full object-cover mt-[4px] opacity-70"
                                    />
                                    <div className="absolute inset-0 flex justify-center items-center text-white text-lg font-semibold bg-opacity-100">
                                        +{remainingCount}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div className="flex flex-col ml-[15px] lg:ml-[20px] lg:ml-[50px]">
                            <span className="text-[17px] lg:text-[22px] font-bold">{pg.name}</span>
                            <span className="text-[14px] lg:text-[20px] text-gray-500 mt-[0px] lg:mt-[5px]">{pg.location}</span>
                            <div className="mt-[5px] flex flex-row gap-4 flex-wrap items-center">
                                {pg.amenities.slice(0, isMobile ? 2 : 4).map((a, idx) => (
                                    <div key={idx} className="flex flex-row items-center">
                                        <CheckCircleOutline className="text-gray-500 " />
                                        <span className="text-[8px] lg:text-[12px] ml-[2px] lg:ml-[4px]">{a}</span>
                                    </div>
                                ))}
                                {pg.amenities.length > 4 && (
                                    <span className="text-gray-500 text-[12px] cursor-pointer">+{pg.amenities.length - 4} more</span>
                                )}
                            </div>
                            <div className="mt-[15px] flex items-center">
                                <div className="bg-yellow-300 rounded-lg font-semibold text-[10px] lg:text-[12px] py-[5px] px-[7px]">
                                    <span>{pg.rating}★</span>
                                </div>
                                <span className="font-semibold text-[12px] lg:text-[16px] ml-[10px]">({pg.reviews} Ratings)</span>
                            </div>
                            <div className="mt-[10px]">
                                <span className="font-bold text-[20px]">₹{pg.discountedPrice.toLocaleString()}</span>
                                {pg.discountedPrice !== pg.price && (
                                    <span className="text-[15px] text-gray-400 ml-[15px] line-through">
                                        ₹{pg.price.toLocaleString()}
                                    </span>
                                )}
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center justify-center ">
                                <button
                                    onClick={() => handleViewDetails(pg.id)}
                                    className="hidden sm:block bg-white text-black px-5 py-2 rounded-xl mt-4 mr-2 border cursor-pointer"
                                >
                                    View Details
                                </button>
                                <button className="hidden sm:block bg-black text-white px-5 py-2 rounded-xl mt-4  cursor-pointer">
                                    Book Now
                                </button>
                                {/* Desktop heart icon */}
                                <div
                                    className="mt-4 ml-[150px] text-gray-500 border border-gray-300 rounded-full p-2 w-[36px] h-[36px] flex items-center justify-center cursor-pointer hidden sm:flex"
                                    onClick={() => toggleLike(i)}
                                >
                                    {likedPgs[i] ? <Favorite className="text-red-500" /> : <FavoriteBorder />}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }))}
        </div>
    );
}
