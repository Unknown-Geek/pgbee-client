// components/Navbar.tsx
'use client';
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from '../[details]/modal'
import Wishlist from '../wishlists/page';

const Navbar = () => {
  const [location, setLocation] = useState('');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    console.log('Search for:', location);
  };

        const login = () => {
        router.push(`/login`);};

  return (
    <nav className="flex flex-row gap-32 items-center pl-12 p-4 shadow-md bg-white">
        <Image src="/PgBee.png" alt="PgBee Logo" width={100} height={100} />

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
            className="w-50 bg-black hover:bg-gray-800 text-white py-2 rounded-md transition hover:cursor-pointer"
          >
            Search
          </button>
        </div>  
        <div className='absolute right-1/4 mr-16  flex items-center gap-16'>
            <div className="flex items-center gap-4">
            <Image
                src='/Globe_icon.svg'
                alt="Globe"
                width={20}
                height={20}
            />
            <p className="text-lg">EN</p>
            </div>
            <Image src="/Currency.svg" alt="currency" width={40} height={30} />

        </div>

        <div className='flex flex-row ml-auto'>
          <button onClick={() => setShowModal(true)} className="flex items-center gap-2 mr-12  px-4 py-2 border border-gray-300 rounded-md hover:cursor-pointer">
            <Image src='/heart.png' alt="heart" width={24} height={24} />
            Wishlist
            </button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Wishlist />
      </Modal>
        <Image src="/user.png" alt="user" width={40} height={30} />
        <button onClick={login}
          className="flex items-center gap-2  text-black px-4 py-2 rounded-md  transition hover:cursor-pointer"
        >
          <span>Login / Signup</span>
        </button>
        </div>
      </nav>
  );
};

export default Navbar;
