'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import Modal from './modal'
import Wishlist from '../wishlists/page'; // Adjust the import path as necessary
import Login from '../../login/page'; // Adjust the import path as necessary
import Signup from '../../signup/page'; // Adjust the import path as necessary
import Navbar from '../navbar/page';
import Footer from '../footer/page';

const Page: React.FC = () => {
  const [location, setLocation] = useState<string>('');

  const handleSearch = () => {
    if (!location.trim()) {
      alert('Please enter a location.');
      return;
    }
    console.log('Searching for:', location);
    alert(`Searching for: ${location}`);
  };

  const amenities: string[] = [
  "Free Wi-Fi",
  "Air Conditioning",
  "Kitchen",
  "Free Parking",
  "Washing Machine",
  "TV",
  "First Aid Kit",
  "Workspace",
  "24/7 Security"
];

const reviews = [
  {
    name: "Alice",
    stars: 5,
    date: "July 2025",
    text: "Mathew is kind and helpful, good, helpful staff. Clean peaceful property",
    image: "/Container.png",
  },
  {
    name: "Bob",
    stars: 4,
    date: "June 2025",
    text: "Mathew is kind and helpful, good, helpful staff. Clean peaceful property",
    image:"/Container.png"
  },
  {
    name: "Charlie",
    stars: 5,
    date: "May 2025",
    text: "Mathew is kind and helpful, good, helpful staff. Clean peaceful property",
    image: "/Container.png"
  },

];


  const [showModal, setShowModal] = useState(false);


  return (
    <div className='min-h-screen overflow-y-auto'>
      <div className="hidden lg:block w-full">
  <Navbar />
</div>


      <div className='flex flex-row ml-8 justify-between items-center p-4'> 
        <Image src="/back.svg" alt="back" width={24} height={24} />
        
      <p className="hidden lg:block text-4xl font-bold absolute left-[10%]">
        Golden Turtles Homestay
      </p>
        <div className=" rounded-md p-4 flex gap-4 mr-8 ">
        
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md">
            <Image src="./Globe_icon.svg" alt="share" width={24} height={24} />
            Share
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md">
            <Image src="/heart.png" alt="heart" width={24} height={24} />
            Save
            </button>

        </div>
      </div>
      <hr className="w-full border-t-2 border-black" />
<div>

  
  {/* Laptop view: flex row layout, visible only on md+ */}
  <div className="hidden md:flex flex-row items-center justify-center mt-8">
    <Image src="/house1.png" alt="house1" width={600} height={600} />
    <div className="flex flex-col ml-4">
      <Image src="/house2.png" alt="house2" width={300} height={300} />
      <Image src="/house3.png" alt="house3" width={300} height={300} />
    </div>
    <div className="flex flex-col ml-4">
      <Image src="/house4.png" alt="house4" width={300} height={300} />
      <Image src="/house5.png" alt="house5" width={300} height={300} />
    </div>
  </div>

  {/* Mobile view: house1 full width, others in grid, visible only below md */}
  <div className="md:hidden">
    <div>
      <Image
        src="/house1.png"
        alt="house1"
        width={600}
        height={600}
        className="w-full h-auto rounded"
      />
    </div>

    <div className="mt-4 grid grid-cols-4 gap-2 px-2">
      {[2, 3, 4, 5].map((num) => (
        <Image
          key={num}
          src={`/house${num}.png`}
          alt={`house${num}`}
          width={300}
          height={300}
          className="w-full h-auto rounded"
        />
      ))}
    </div>
  </div>
</div>

    <div className="block md:hidden bg-white rounded-lg shadow-sm border border-gray-200 p-4 mx-4 my-2">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">
          Golden Turtles Homestay
        </h2>
        <p className="text-sm text-gray-500">
          Vattappara, India
        </p>
      </div>
      
      {/* Price Section */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-900">
            ₹5,000
          </span>
          <span className="text-lg text-gray-400 line-through">
            ₹5,500
          </span>
        </div>
      </div>
      
      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors">
          View Details
        </button>
        <button className="flex-1 px-4 py-2 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
          Book Now
        </button>
      </div>
    </div>


<div className="hidden lg:flex flex-row justify-between mt-8 px-12 mb-6">
  <div className="flex flex-col ml-28 gap-2">
    <p className="text-2xl font-bold mt-4">
      Entire rental unit in vattapara, India
    </p>
    <p className="text-lg font-poppins">
      1 bedroom. 1 bed. 1 bathroom
    </p>
    <p className="text-lg">
      10 Reviews
    </p>
  </div>
  <div className="mr-28">
    <button className="bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition">
      Reserve Now
    </button>
  </div>
</div>

          <hr className="w-full border-t-2 border-b-gray-300" /> 
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 ml-6 md:ml-32 mt-4 mb-4">
  <Image
    src="/user-black.png"
    alt="user"
    width={40}
    height={40}
    className="rounded-full"
  />
  <div className="text-center md:text-left">
    <p className="text-lg font-bold">Hosted by John Doe</p>
    <p className="text-sm text-gray-400">11 years of hosting</p>
  </div>
</div>
 
          <hr className="w-full border-t-2 border-black" /><div className='flex flex-col mb-8'>
  <p className='text-2xl font-bold ml-6 sm:ml-10 md:ml-16 mt-8'> 
    Amenities Offered
  </p>

  <div className='mt-8 px-4 sm:px-8 md:px-12'>
    <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 list-disc list-inside'>
      {amenities.map((item, index) => (
        <li key={index} className='text-lg'>{item}</li>
      ))}
    </ul>
  </div>
</div>

    <hr className="w-full border-t-2 border-black" />

<div className="mt-12 px-4 sm:px-8 md:px-12">
  <h2 className="text-2xl font-bold mb-4">Reviews</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
    {reviews.map((review, index) => (
      <div
        key={index}
        className={`pb-6 md:pb-0 md:pr-6 ${
          (index + 1) % 3 === 0 ? '' : 'md:border-r md:border-gray-300'
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          {/* User Info */}
          <div className="flex items-center gap-3">
            <Image
              src={review.image}
              alt={review.name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <p className="font-semibold text-lg">{review.name}</p>
          </div>
        </div>

        {/* Stars + Date */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start sm:items-center">
          <div className="text-yellow-500">
            {Array.from({ length: review.stars }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>

        {/* Review Text */}
        <p className="text-gray-800 mt-4">{review.text}</p>
      </div>
    ))}
  </div>
</div>

  <hr className="w-full border-t-2 border-black" />
  <div className='flex flex-col ml-16 mt-8 mb-8 mr-16'>
    <p className='text-2xl font-bold'>Location</p>
    <p>Vattapara,Kerala,India</p>
    <div className="w-full h-[400px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8248.772017841477!2d76.90565800174458!3d8.548358297072813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bec79541c519%3A0x98324eb5aafb3778!2sCollege%20of%20Engineering%20Trivandrum%20(CET)!5e0!3m2!1sen!2snl!4v1753206474897!5m2!1sen!2snl"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

  </div>
      <Footer />
  </div>
    
  );
};

export default Page;
