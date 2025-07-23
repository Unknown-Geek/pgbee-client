'use client';

import Image from 'next/image';
import { useState } from 'react';
import Image1 from '../../../../public/PgBee.png';
import Image2 from '../../../../public/user.png';
import Image3 from '../../../../public/Globe_icon.svg';
import Image4 from '../../../../public/share.jpg';
import Image5 from '../../../../public/heart.png';
import House1 from '../../../../public/house1.png';
import House2 from '../../../../public/house2.png';
import House3 from '../../../../public/house3.png';
import House4 from '../../../../public/house4.png';
import House5 from '../../../../public/house5.png';
import UserBlack from '../../../../public/user-black.png';
import User1 from '../../../../public/Container.png';

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
    image: User1,
  },
  {
    name: "Bob",
    stars: 4,
    date: "June 2025",
    text: "Mathew is kind and helpful, good, helpful staff. Clean peaceful property",
    image:User1
  },
  {
    name: "Charlie",
    stars: 5,
    date: "May 2025",
    text: "Mathew is kind and helpful, good, helpful staff. Clean peaceful property",
    image: User1,
  },

];


  return (
    <div className='min-h-screen overflow-y-auto'>
      <nav className="flex flex-row gap-32 items-center pl-12 p-4 shadow-md bg-white">
        <Image src={Image1} alt="PgBee Logo" width={100} height={100} />

        <div className="flex flex-row absolute left-1/4 w-full max-w-md  space-x-4">
          

          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Type a location..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            onClick={handleSearch}
            className="w-50 bg-black hover:bg-gray-800 text-white py-2 rounded-md transition"
          >
            Search
          </button>
        </div>
        <div className='absolute right-1/4  flex items-center gap-2'>
            <Image
                src={Image3}
                alt="Globe"
                width={30}
                height={30}
            />
        </div>
        <div className='flex flex-row ml-auto'>
        <Image src={Image2} alt="user" width={40} height={30} />
        <button
          className="flex items-center gap-2  text-black px-4 py-2 rounded-md  transition"
        >
          <span>Login / Signup</span>
        </button>
        </div>
      </nav>

      <div className='flex flex-row ml-8 justify-between items-center p-4'> 
        <p className='text-4xl font-bold'> Golden Turtles Homestay</p>
        <div className=" rounded-md p-4 flex gap-4 mr-8 ">
        
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md">
            <Image src={Image4} alt="share" width={24} height={24} />
            Share
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md">
            <Image src={Image5} alt="heart" width={24} height={24} />
            Save
            </button>

        </div>
      </div>
      <hr className="w-full border-t-2 border-black" />
      <div className='flex flex-row items-center justify-center mt-8'>
            <Image src={House1} alt="house1" width={600} height={600} />
            <div className='flex flex-col ml-4'>
                <Image src={House2} alt="house2" width={300} height={300} />
                <Image src={House3} alt="house3" width={300} height={300} />
            </div>
            <div className='flex flex-col ml-4'>
                <Image src={House4} alt="house4" width={300} height={300} />
                <Image src={House5} alt="house5" width={300} height={300} />
            </div>
      </div>
        <div className='flex flex-row justify-between mt-8 px-12 mb-6'>
            <div className='flex flex-col ml-28 gap-2'>

        <p className='text-2xl font-bold mt-4'>
            Entire rental unit in vattapara, India
        </p>
        <p className='text-lg font-poppins'>
            1 bedroom. 1 bed. 1 bathroom
        </p>
        <p className='text-lg '>
            10 Reviews
        </p>
      </div>
      <div className='mr-28' >
        <button className='bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition'>
            Reserve Now
        </button>
      </div>
    </div>
          <hr className="w-full border-t-2 border-b-gray-300" /> 
    <div className='flex flex-row gap-8 ml-32 mt-4 mb-4' >
        <Image src={UserBlack} alt="user" width={40} height={10} />
        <div>
        <p className='text-lg ml-2 font-bold'>
            Hosted by John Doe
        </p>
        <p className='text-sm ml-2 text-gray-400'>
            11 years of hosting
        </p>
        </div>

    </div>  
          <hr className="w-full border-t-2 border-black" />
    <div className='flex flex-col mb-8 '>
        <p className='text-2xl font-bold ml-16 mt-8'> 
            Amenities Offered
        </p>
        <div className='mt-8 px-12 ml-6'>
            <ul className='grid grid-cols-6 gap-2 list-disc list-inside'>
            {amenities.map((item, index) => (
            <li key={index} className='text-lg'>{item}</li>
            ))}
            </ul>
        </div>
    </div>
    <hr className="w-full border-t-2 border-black" />

<div className="mt-12 px-12">
  <h2 className="text-2xl font-bold mb-4">Reviews</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
    {reviews.map((review, index) => (
      <div
        key={index}
        className={`pr-6 border-r md:border-gray-300 ${
        // Remove border on last column in each row
        (index + 1) % 3 === 0 ? 'md:border-none' : ''
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

        {/* Stars */}
        
        <div className='flex flex-row gap-6'>
        <div className="">
          {Array.from({ length: review.stars }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-1">{review.date}</p>
        </div>


        {/* Review Text */}
        <p className="text-gray-800 mt-6">{review.text}</p>
        

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
    </div>
    
  );
};

export default Page;
