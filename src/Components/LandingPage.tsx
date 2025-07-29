import { CheckCircleOutline, Favorite, FavoriteBorder } from "@mui/icons-material";
import { useEffect, useState } from "react";

import { useRouter } from 'next/navigation';



export default function LandingPage() {
    const pgs = [
        {
            id:1,
            name: "Ideal Hostel",
            location: "Opposite College Gate",
            rating: 4.6,
            reviews: 100,
            price: 4000,
            discountedPrice: 3400,
            amenities: ["Free Wifi", "Balcony", "Kitchen", "Terrace"],
            images: ["/ideal_1.webp", "/ideal 2.webp", "/ideal_3.webp", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms:12,
            deposit: true
        },
        {
            id:2,
            name: "Vanitha Mithram",
            location: "50m from College",
            rating: 4.2,
            reviews: 89,
            price: 5000,
            discountedPrice: 4500,
            amenities: ["Free Wifi", "Kitchen", "Balcony"],
            images: ["/mithram_1.webp", "/mithram_2.jpg", "/mithram_3.avif", "/pg.png", "/pg.png"],
            rooms: 10,
            bathrooms:10,
            deposit: true
        },
        {
            id:3,
            name: "Shelter",
            location: "200m from College",
            rating: 3.6,
            reviews: 20,
            price: 5000,
            discountedPrice: 4800,
            amenities: ["Free Wifi", "Balcony", "Kitchen", "Washing Machine"],
            images: ["/shelter_1.webp", "/shelter_2.webp", "/shelter_3.webp", "/shelter_4.avif", "/pg.png"],
            rooms: 25,
            bathrooms:22,
            deposit: true
        },
        {
            id:4,
            name: "Sunflower",
            location: "300m from College",
            rating: 4.2,
            reviews: 89,
            price: 6000,
            discountedPrice: 5500,
            amenities: ["Free Wifi", "Gym", "Balcony"],
            images: ["/sunflower_1.jpg", "/sunflower_2.webp", "/sunflower_3.jpeg", "/pg.png", "/pg.png"],
            rooms: 15,
            bathrooms:15,
            deposit: true
        },
    ];

    const [likedPgs, setLikedPgs] = useState<boolean[]>(pgs.map(() => false));
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
                <span className="text-2xl lg:text-xl font-bold lg:font-semibold px-[3px] lg:pl-[20px] py-[5px] lg:py-[30px]">
                    Hotels in Bangalore
                </span>
                <span>(422 search results)</span>
                <span className="ml-[170px] mr-[15px] font-semibold hidden sm:block ">Sort By:</span>

                <select className="hidden sm:block p-[8px] cursor-pointer rounded-lg border h-[40px] w-[300px] border-gray-400 appearance-none bg-white pr-10">
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                </select>
            </div>

            {/* landing page */}
            {pgs.map((pg, i) => {
                const maxDisplay = 4;
                const remainingCount = pg.images.length - maxDisplay;

                return (
                    <div key={pg.id} className="m-[15px] lg:m-[30px] flex pb-6 ">
                        {/* Main image */}
                        <div className="relative w-[220px] lg:w-[400px] h-[170px] lg:h-[260px] rounded-2xl overflow-hidden flex-shrink-0">
                            <img
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
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`img-${idx}`}
                                    className="rounded-xl w-20 h-12 mt-[4px] object-cover"
                                />
                            ))}

                            {remainingCount > 0 && (
                                <div className="relative rounded-xl w-20 h-12 overflow-hidden">
                                    <img
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
            })}
        </div>
    );
}
