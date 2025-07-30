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
        // --- FIX: Corrected image paths ---
        images: ["/ideal_1.webp", "/ideal_2.webp", "/ideal_3.webp", "/pg.png", "/pg.png"],
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
        // --- FIX: Corrected image paths ---
        images: ["/mehanaz.webp", "/pg.png", "/pg.png"],
        rooms: 15,
        bathrooms: 12,
        deposit: true,
        gender: "Male",
        type: 'PG',
        curfew: 'mandatory',
        roomTypes: ['Shared Room'],
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
        amenities: ["Free Wifi", "laundary service", "mess provision", "non ac rooms"],
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
        id: 40,
        name: "Swapanakoodu",
        location: "CRP Nagar",
        rating: 4.2,
        reviews: 89,
        price: 5000,
        discountedPrice: 5000,
        amenities: ["Free Wifi", "mess provision", "power back up", "water filter"],
        // --- FIX: Corrected image paths ---
        images: ["/swapnakood_1.webp", "/swapnakood_1(3).webp", "/swapnakood_1(1).webp", "/swapnakood_1(4).webp", "/swapnakood_1(2).webp", "/pg.png", "/pg.png"],
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
        amenities: ["Free Wifi", "mess provision", "power back up", "water filter"],
        // --- FIX: Corrected image paths ---
        images: ["/swapnakood_1.webp", "/swapnakood_1(3).webp", "/swapnakood_1(1).webp", "/swapnakood_1(4).webp", "/swapnakood_1(2).webp", "/pg.png", "/pg.png"],
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
        amenities: ["Free Wifi", "mess provision", "power back up", "water filter"],
        // --- FIX: Corrected image paths ---
        images: ["/swapnakood_1.webp", "/swapnakood_1(3).webp", "/swapnakood_1(1).webp", "/swapnakood_1(4).webp", "/swapnakood_1(2).webp", "/pg.png", "/pg.png"],
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
        amenities: ["Free Wifi", "mess provision", "power back up", "water filter"],
        // --- FIX: Corrected image paths ---
        images: ["/swapnakood_1.webp", "/swapnakood_1(3).webp", "/swapnakood_1(1).webp", "/swapnakood_1(4).webp", "/swapnakood_1(2).webp", "/pg.png", "/pg.png"],
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
        amenities: ["Free Wifi", "mess provision", "power back up", "water filter"],
        // --- FIX: Corrected image paths ---
        images: ["/swapnakood_1.webp", "/swapnakood_1(3).webp", "/swapnakood_1(1).webp", "/swapnakood_1(4).webp", "/swapnakood_1(2).webp", "/pg.png", "/pg.png"],
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
        amenities: ["Free Wifi", "mess provision", "power back up", "water filter"],
        // --- FIX: Corrected image paths ---
        images: ["/swapnakood_1.webp", "/swapnakood_1(3).webp", "/swapnakood_1(1).webp", "/swapnakood_1(4).webp", "/swapnakood_1(2).webp", "/pg.png", "/pg.png"],
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
        // --- FIX: Corrected image paths ---
        images: ["/shim_sha.webp", "/pg.png", "/pg.png"],
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
        id: 6,
        name: "Swapanakoodu2",
        location: "CRP Nagar",
        rating: 4.2,
        reviews: 89,
        price: 4000,
        discountedPrice: 5000,
        amenities: ["Free Wifi", "mess provision", "power back up", "water filter", "TV", "laundry service"],
        // --- FIX: Corrected image paths ---
        images: ["/swapnakood_2.webp", "/swapnakood_2(1).webp", "/swapnakood_2(2).webp", "/swapnakood_2(3).webp", "/swapnakood_2(4).webp", "/swapnakood_2(5).webp", "/pg.png", "/pg.png"],
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
        amenities: ["Free Wifi", "mess provision", "power back up", "water filter", "TV", "laundry service"],
        // --- FIX: Corrected image paths ---
        images: ["/swapnakood_2.webp", "/swapnakood_2(1).webp", "/swapnakood_2(2).webp", "/swapnakood_2(3).webp", "/swapnakood_2(4).webp", "/swapnakood_2(5).webp", "/pg.png", "/pg.png"],
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
        // --- FIX: Corrected image paths ---
        images: ["/meikkonam(1).webp", "/meikkonam(2).webp", "/meikkonam(3).webp", "/meikkonam.webp", "/pg.png", "/pg.png"],
        rooms: 15,
        bathrooms: 15,
        deposit: true,
        gender: "Female",
        type: 'PG',
        curfew: 'none',
        roomTypes: ['Shared Room'],
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
        amenities: ["Free Wifi", "laundry", "mess provision"],
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
        amenities: ["Free Wifi", "laundry", "no mess provision"],
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
];

    const getFilteredAndSortedPgs = () => {
        let filtered = [...pgs];
        // ... (your filtering logic remains the same)
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(pg => (
                pg.name.toLowerCase().includes(query) ||
                pg.location.toLowerCase().includes(query) ||
                pg.amenities.some(amenity => amenity.toLowerCase().includes(query))
            ));
        }
        if (filters) {
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
            filtered = filtered.filter(pg =>
                pg.discountedPrice >= filters.priceRange[0] &&
                pg.discountedPrice <= filters.priceRange[1]
            );
            filtered = filtered.filter(pg => pg.type === filters.placeType);
            if (filters.rooms !== 'Any') {
                const roomCount = parseInt(filters.rooms);
                filtered = filtered.filter(pg => pg.rooms >= roomCount);
            }
            if (filters.bathrooms !== 'Any') {
                const bathroomCount = parseInt(filters.bathrooms);
                filtered = filtered.filter(pg => pg.bathrooms >= bathroomCount);
            }
            if (filters.curfew !== 'any') {
                filtered = filtered.filter(pg => pg.curfew === filters.curfew);
            }
            if (filters.roomType.length > 0) {
                filtered = filtered.filter(pg =>
                    filters.roomType.some(type => pg.roomTypes.includes(type))
                );
            }
            if (filters.bathroomAttached !== 'any') {
                const isAttached = filters.bathroomAttached === 'attached';
                filtered = filtered.filter(pg => pg.bathroomAttached === isAttached);
            }
            if (filters.cautionDeposit !== 'any') {
                const hasDeposit = filters.cautionDeposit === 'yes';
                filtered = filtered.filter(pg => pg.deposit === hasDeposit);
            }
        }
        return filtered;
    };

    const filteredPgs = getFilteredAndSortedPgs();

    // --- FIX: Manage liked state using a Set of IDs for robustness ---
    const [likedPgs, setLikedPgs] = useState<Set<number>>(new Set());

    const toggleLike = (id: number) => {
        setLikedPgs((prevLiked) => {
            const newLiked = new Set(prevLiked);
            if (newLiked.has(id)) {
                newLiked.delete(id);
            } else {
                newLiked.add(id);
            }
            return newLiked;
        });
    };

    const useIsMobile = () => {
        // Guard against window being undefined during server-side rendering
        const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

        useEffect(() => {
            if (typeof window === 'undefined') return;
            
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

    const handleViewDetails = (id: number) => {
      router.push(`/userDashboard/details/${id}`);
    };

    return (
        <div className="w-full lg:basis-4/5">
            <div className="p-[15px] lg:p-[25px] border-b border-transparent sm:border-gray-400 flex flex-col lg:flex-row lg:items-center">
                <div className="flex items-center gap-4">
                    <span className="text-2xl lg:text-xl font-bold lg:font-semibold px-[3px] lg:pl-[20px] py-[5px] lg:py-[30px]">
                        {searchQuery ? `Search results for "${searchQuery}"` : 'Hostels in College Of Engineering,Trivandrum'}
                    </span>
                </div>
                <span>({filteredPgs.length} search results)</span>
            </div>

            {filteredPgs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16">
                    <p className="text-xl text-gray-500 mb-2">No PGs found</p>
                    <p className="text-gray-400">Try adjusting your search criteria</p>
                </div>
            ) : (
                filteredPgs.map((pg) => {
                    const maxDisplay = 4;
                    const remainingCount = pg.images.length - maxDisplay;

                    return (
                        <div key={pg.id} className="m-[15px] lg:m-[30px] flex pb-6 cursor-pointer" onClick={() => handleViewDetails(pg.id)}>
                            <div className="relative w-[220px] lg:w-[400px] h-[170px] lg:h-[260px] rounded-2xl overflow-hidden flex-shrink-0">
                                <Image
                                    src={pg.images[0]}
                                    alt={pg.name}
                                    layout="fill"
                                    className="block w-full h-full object-cover rounded-2xl"
                                />
                                {/* --- FIX: Correct like button logic for mobile --- */}
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent card click
                                        toggleLike(pg.id);
                                    }}
                                    className="absolute top-2 right-2 sm:hidden text-gray-500 bg-white border border-gray-300 rounded-full p-2 w-[30px] h-[30px] flex items-center justify-center"
                                >
                                    {likedPgs.has(pg.id) ? <Favorite className="text-red-500" /> : <FavoriteBorder />}
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 ml-[10px] hidden sm:block">
                                {pg.images.slice(1, maxDisplay).map((img, idx) => (
                                    <Image
                                        key={idx}
                                        src={img}
                                        alt={`img-${idx}`}
                                        width={80}
                                        height={48}
                                        className="rounded-xl w-20 h-12 mt-[4px] object-cover"
                                    />
                                ))}
                                {remainingCount > 0 && (
                                    <div className="relative rounded-xl w-20 h-12 overflow-hidden mt-[4px]">
                                        <Image
                                            src={pg.images[maxDisplay]}
                                            alt="more"
                                            layout="fill"
                                            className="w-full h-full object-cover opacity-70"
                                        />
                                        <div className="absolute inset-0 flex justify-center items-center text-white text-lg font-semibold">
                                            +{remainingCount}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col ml-[15px] lg:ml-[20px] w-full">
                                <span className="text-[17px] lg:text-[22px] font-bold">{pg.name}</span>
                                <span className="text-[14px] lg:text-[20px] text-gray-500 mt-[0px] lg:mt-[5px]">{pg.location}</span>
                                <div className="mt-[5px] flex flex-row gap-4 flex-wrap items-center">
                                    {pg.amenities.slice(0, isMobile ? 2 : 4).map((a, idx) => (
                                        <div key={idx} className="flex flex-row items-center">
                                            <CheckCircleOutline className="text-gray-500 w-4 h-4" />
                                            <span className="text-[8px] lg:text-[12px] ml-[2px] lg:ml-[4px]">{a}</span>
                                        </div>
                                    ))}
                                    {pg.amenities.length > 4 && !isMobile && (
                                        <span className="text-gray-500 text-[12px] cursor-pointer">+{pg.amenities.length - 4} more</span>
                                    )}
                                </div>
                                <div className="mt-[15px] flex items-center">
                                    <div className="bg-yellow-300 rounded-lg font-semibold text-[10px] lg:text-[12px] py-[5px] px-[7px]">
                                        <span>{pg.rating}★</span>
                                    </div>
                                    <span className="font-semibold text-[12px] lg:text-[16px] ml-[10px]">({pg.reviews} Ratings)</span>
                                </div>
                                <div className="mt-auto flex justify-between items-end">
                                    <div>
                                        <span className="font-bold text-[20px]">₹{pg.discountedPrice.toLocaleString()}</span>
                                        {pg.discountedPrice !== pg.price && (
                                            <span className="text-[15px] text-gray-400 ml-[15px] line-through">
                                                ₹{pg.price.toLocaleString()}
                                            </span>
                                        )}
                                    </div>
                                    {/* --- FIX: Correct like button logic for desktop --- */}
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent card click
                                            toggleLike(pg.id);
                                        }}
                                        className="text-gray-500 border border-gray-300 rounded-full p-2 w-[36px] h-[36px] items-center justify-center cursor-pointer hidden sm:flex"
                                    >
                                        {likedPgs.has(pg.id) ? <Favorite className="text-red-500" /> : <FavoriteBorder />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
}