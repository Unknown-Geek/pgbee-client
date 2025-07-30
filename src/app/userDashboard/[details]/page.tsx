'use client';

import Image from 'next/image';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '../footer/page';
import { useRouter, useParams } from 'next/navigation';
import { Close as CloseIcon } from '@mui/icons-material';

const hostelDetails = [
    { id: 1, name: "Golden Turtles Homestay", images: ["/house1.png", "/house2.png", "/house3.png", "/house4.png", "/house5.png"], location: "Vattappara, Kerala, India", facilities: { bedrooms: 1, beds: 1, bathrooms: 1 }, host: { name: "John", yearsOfHosting: 11 } },
    { id: 2, name: "Blue Lake Residency", images: ["/house2.png", "/house3.png", "/house4.png", "/house5.png", "/house1.png"], location: "Kumarakom, Kerala, India", facilities: { bedrooms: 2, beds: 3, bathrooms: 2 }, host: { name: "Alice", yearsOfHosting: 5 } },
    { id: 3, name: "Sunset Villa", images: ["/house3.png", "/house4.png", "/house5.png", "/house1.png", "/house2.png"], location: "Alleppey, Kerala, India", facilities: { bedrooms: 3, beds: 4, bathrooms: 2 }, host: { name: "Michael", yearsOfHosting: 7 } },
    { id: 4, name: "Coconut Grove Retreat", images: ["/house4.png", "/house5.png", "/house1.png", "/house2.png", "/house3.png"], location: "Kochi, Kerala, India", facilities: { bedrooms: 2, beds: 2, bathrooms: 1 }, host: { name: "Sara", yearsOfHosting: 4 } }
];

const reviews = [
    { name: "Alice", stars: 5, date: "July 2025", text: "Mathew is kind and helpful, good, helpful staff. Clean peaceful property", image: "/Container.png" },
    { name: "Bob", stars: 4, date: "June 2025", text: "Mathew is kind and helpful, good, helpful staff. Clean peaceful property", image: "/Container.png" },
    { name: "Charlie", stars: 5, date: "May 2025", text: "Mathew is kind and helpful, good, helpful staff. Clean peaceful property", image: "/Container.png" }
];

const amenities = ["Free Wi-Fi", "Air Conditioning", "Kitchen", "Free Parking", "Washing Machine", "TV", "First Aid Kit", "Workspace", "24/7 Security"];

// --- Image Gallery Modal Component ---
const ImageGalleryModal = ({ images, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col p-4">
        <button onClick={onClose} className="self-end text-white mb-4" aria-label="Close gallery">
            <CloseIcon fontSize="large" />
        </button>
        <div className="flex-grow overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {images.map((img, index) => (
                    <div key={index} className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <Image src={img} alt={`Gallery view ${index + 1}`} layout="fill" className="object-cover" />
                    </div>
                ))}
            </div>
        </div>
    </div>
);


export default function Page() {
    const params = useParams();
    const id = Number(params.details);
    const router = useRouter();
    
    const [searchQuery, setSearchQuery] = useState('');
    const [showGallery, setShowGallery] = useState(false); // State for the modal
    const selectedHostel = hostelDetails.find(h => h.id === id);

    if (!selectedHostel) {
        return <div className="p-8 text-xl text-red-600">Hostel not found.</div>;
    }

    const handleSearch = (query?: string) => {
        const searchTerm = query || '';
        setSearchQuery(searchTerm);
        if (searchTerm.trim()) {
            router.push(`/userDashboard?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div className='min-h-screen bg-gray-50'>
            <Navbar onSearch={handleSearch} searchQuery={searchQuery} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* --- HEADER --- */}
                <div className='flex justify-between items-center mb-4'>
                    <div className="flex items-center gap-2">
                         <button onClick={() => router.back()} className="p-1" aria-label="Go back">
                            <Image src="/back.svg" alt="back" width={24} height={24} />
                        </button>
                        <h1 className="text-xl md:text-3xl font-bold">{selectedHostel.name}</h1>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100">
                            <Image src="/share.jpg" alt="share" width={20} height={20} />
                            Share
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100">
                            <Image src="/heart.png" alt="heart" width={20} height={20} />
                            Save
                        </button>
                    </div>
                </div>

                {/* --- IMAGE GALLERY --- */}
                <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[400px] rounded-2xl overflow-hidden">
                    <div className="col-span-2 row-span-2"><Image src={selectedHostel.images[0]} alt="Main view" width={800} height={800} className="w-full h-full object-cover" /></div>
                    <div><Image src={selectedHostel.images[1]} alt="View 2" width={400} height={400} className="w-full h-full object-cover" /></div>
                    <div><Image src={selectedHostel.images[2]} alt="View 3" width={400} height={400} className="w-full h-full object-cover" /></div>
                    <div><Image src={selectedHostel.images[3]} alt="View 4" width={400} height={400} className="w-full h-full object-cover" /></div>
                    <div className="relative"><Image src={selectedHostel.images[4]} alt="View 5" width={400} height={400} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                             <button onClick={() => setShowGallery(true)} className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold">Show all photos</button>
                        </div>
                    </div>
                </div>
                {/* Mobile Gallery */}
                <div className="md:hidden relative cursor-pointer" onClick={() => setShowGallery(true)}>
                    <Image src={selectedHostel.images[0]} alt="Main view" width={600} height={400} className="w-full h-auto rounded-lg" />
                     <div className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold">Show all photos</div>
                </div>


                {/* --- MAIN CONTENT --- */}
                <div className="flex flex-col md:flex-row gap-12 mt-8">
                    {/* Left Column */}
                    <div className="w-full md:w-2/3">
                        <h2 className="text-2xl font-semibold">Entire rental unit in {selectedHostel.location}</h2>
                        <p className="text-gray-600 mt-1">{selectedHostel.facilities.bedrooms} bedroom · {selectedHostel.facilities.beds} bed · {selectedHostel.facilities.bathrooms} bathroom</p>
                        <p className="font-semibold mt-1">{reviews.length} Reviews</p>
                        <hr className="my-6" />
                        <div className="flex items-center gap-4">
                            <Image src="/user-black.png" alt="host" width={48} height={48} className="rounded-full" />
                            <div>
                                <p className="font-bold">Hosted by {selectedHostel.host.name}</p>
                                <p className="text-sm text-gray-500">{selectedHostel.host.yearsOfHosting} years of hosting</p>
                            </div>
                        </div>
                        <hr className="my-6" />
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Amenities Offered</h3>
                            <ul className='grid grid-cols-2 gap-3'>
                                {amenities.map((item) => <li key={item} className='text-gray-700'>{item}</li>)}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column (Booking Card - Desktop) */}
                    <div className="w-full md:w-1/3">
                        <div className="hidden md:block border rounded-2xl shadow-lg p-6 sticky top-8">
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-2xl font-bold">₹5,000</span>
                                <span className="text-lg text-gray-400 line-through">₹5,500</span>
                            </div>
                            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Reviews and Location */}
                <hr className="my-8" />
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <div key={index}>
                                <div className="flex items-center gap-3 mb-2">
                                    <Image src={review.image} alt={review.name} width={40} height={40} className="rounded-full" />
                                    <div>
                                        <p className="font-semibold">{review.name}</p>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                </div>
                                <div className="text-yellow-500">
                                    {Array.from({ length: review.stars }).map((_, i) => <span key={i}>⭐</span>)}
                                </div>
                                <p className="text-gray-800 mt-2">{review.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="my-8" />
                <div className='mt-8 mb-8'>
                    <h2 className='text-2xl font-bold mb-4'>Location</h2>
                    <p className="mb-4">{selectedHostel.location}</p>
                    <div className="w-full h-[400px] rounded-lg overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8248.772017841477!2d76.90565800174458!3d8.548358297072813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bec79541c519%3A0x98324eb5aafb3778!2sCollege%20of%20Engineering%20Trivandrum%20(CET)!5e0!3m2!1sen!2snl!4v1753206474897!5m2!1sen!2snl" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            {/* Mobile Booking Bar */}
            <div className="md:hidden sticky bottom-0 bg-white border-t p-4 flex justify-between items-center">
                <div>
                    <p className="font-bold">₹5,000</p>
                    <p className="text-sm text-gray-500 underline">View details</p>
                </div>
                <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold">Book Now</button>
            </div>
            
            <Footer />

            {/* Render the modal conditionally */}
            {showGallery && <ImageGalleryModal images={selectedHostel.images} onClose={() => setShowGallery(false)} />}
        </div>
    );
};