"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Article, Mail, Person, HomeOutlined, ArticleOutlined, MailOutlined, PersonOutline } from '@mui/icons-material';

// Define the structure for each navigation item
const navItems = [
  { href: '/userDashboard', icon: <HomeOutlined />, activeIcon: <Home />, label: 'Home' },
  { href: '/pg-details', icon: <ArticleOutlined />, activeIcon: <Article />, label: 'PG Details' },
  { href: '/inbox', icon: <MailOutlined />, activeIcon: <Mail />, label: 'Inbox' },
  { href: '/profile', icon: <PersonOutline />, activeIcon: <Person />, label: 'Profile' },
];

export default function BottomNav() {
  const pathname = usePathname(); // Get the current URL path

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full px-4 pb-2 md:hidden">
      <div className="bg-black text-gray-400 rounded-xl shadow-lg">
        <div className="flex justify-around">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link href={item.href} key={item.label} className={`flex flex-col items-center justify-center w-full py-3 ${isActive ? 'text-white' : ''}`}>
                {isActive ? item.activeIcon : item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}