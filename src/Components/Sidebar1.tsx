"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Article, Person, Mail, Logout } from '@mui/icons-material';

const navItems = [
  { href: '/#', icon: <Home />, label: 'Home' },
  { href: '/userDashboard', icon: <Article />, label: 'PG Details' },
  { href: '/inbox', icon: <Mail />, label: 'Inbox' },
  { href: '/profile', icon: <Person />, label: 'Profile' },
];

export default function Sidebar1() {
  const pathname = usePathname();

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
              let isActive = false;
              // **FIX:** Added a check for the home page
              if (item.label === 'Home') {
                isActive = pathname === '/' || pathname === '/home';
              } else if (item.label === 'Profile') {
                isActive = pathname.startsWith('/profile') || pathname.startsWith('/userProfile');
              } else {
                isActive = pathname === item.href;
              }

              return (
                <li key={item.label} className="mb-2">
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-md transition-colors duration-300 transform ${
                      isActive ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'
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