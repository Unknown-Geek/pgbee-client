'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTh, FaClipboardList, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const menuItems = [
  { name: 'Dashboard', icon: <FaTh />, path: '/ownerDashboard' },
  { name: 'PG Details', icon: <FaClipboardList />, path: '/ownerPGDetails' },
  { name: 'Profile', icon: <FaUser />, path: '/ownerProfile' },
  { name: 'Settings', icon: <FaCog />, path: '/ownerSettings' },
];


export default function Sidebar() {
  const [active, setActive] = useState('Profile');

  const router = useRouter();

  const handleClick = () => {
    router.push('/ownerSettings');
  };

  return (
    <div className="h-screen w-64 bg-white flex flex-col justify-between border-r ">
      {/* Top Logo */}
      <div className="px-6 pt-6 ml-8">
        <Image src="/PgBee.png" alt="PgBee" width={100} height={40} />
        <hr className="my-6 border-gray-200 mr-8" />
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-3 px-6 absolute top-1/5 ml-6">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all
              ${active === item.name ? 'bg-black text-white' : 'text-black hover:bg-gray-200'}`}
            onClick={() => {
            setActive(item.name);
            if (item.path) {
                router.push(item.path);
                }
            }}


          >
            {item.icon}
            <span className="text-m ">{item.name}</span>
          </button>
        ))}
      </div>

      {/* Logout Button */}
      <div className="px-6 pb-6">
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-black rounded-lg py-2 hover:bg-gray-100">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
}
