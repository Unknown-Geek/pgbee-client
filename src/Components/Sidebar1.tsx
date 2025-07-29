"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Article, Person, Settings, Logout } from '@mui/icons-material';

// 1. Updated the href for 'Profile' to point to the correct page.
const navItems = [
  { href: '/userDashboard', icon: <Home />, label: 'Home' },
  { href: '/pg-details', icon: <Article />, label: 'PG Details' },
  { href: '/userProfile/profileView', icon: <Person />, label: 'Profile' },
  { href: '/userSettings', icon: <Settings />, label: 'Settings' }//redirct to settings page
];

export default function Sidebar1() {
  const pathname = usePathname(); // This gets the current URL, e.g., "/userProfile/profileView"

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen px-4 py-8 bg-white border-r">
      <div className="px-2 mb-10">
        <span className="text-3xl font-bold text-yellow-500">Pg</span>
        <span className="text-3xl font-bold text-gray-800">Bee</span>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <ul>
            {navItems.map((item) => {
              // 2. This logic now checks if the current URL starts with the item's href.
              // This makes 'Profile' active for both '/profileView' and '/profileEdit'.
              const isActive = item.label === 'Profile'
                ? pathname.startsWith('/userProfile')
                : pathname === item.href;

              return (
                <li key={item.label} className="mb-2">
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-md transition-colors duration-300 transform ${
                      isActive
                        ? 'bg-black text-white' // Active link style
                        : 'text-gray-700 hover:bg-gray-100' // Inactive link style
                    }`}
                  >
                    {item.icon}
                    <span className="mx-4 font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <Link
            href="/signup"
            className="flex items-center px-4 py-3 text-gray-700 transition-colors duration-300 transform rounded-md hover:bg-gray-100"
          >
            <Logout />
            <span className="mx-4 font-medium">Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}