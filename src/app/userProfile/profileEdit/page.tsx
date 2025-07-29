"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Edit, KeyboardArrowLeft } from '@mui/icons-material';
import { useState, useRef, RefObject, ChangeEvent } from 'react';
import Sidebar1 from '../../../Components/Sidebar1';
import BottomNav from '../../../Components/BottomNav';

const Image1 = '/PgBee.png';
const DefaultImage2 = '/Person.png';

type ProfileEditProps = {
  imagePreview: string | null;
  onIconClick: () => void;
  fileInputRef: RefObject<HTMLInputElement | null>;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
};

function MobileProfileEdit({
  imagePreview,
  onIconClick,
  fileInputRef,
  onImageChange,
  onSave,
}: ProfileEditProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col mt-[30px]">
      <div className="flex items-center justify-center">
        <Image src={Image1} alt="Pgbee" className="w-[130px]" width={100} height={100} />
      </div>
      <div className="flex items-center justify-start my-[30px]">
        <div className="ml-[10px]">
          <KeyboardArrowLeft />
        </div>
        <span className="ml-[6px]">Profile</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-[130px] h-[130px]">
          <input
            type="file"
            ref={fileInputRef}
            onChange={onImageChange}
            className="hidden"
            accept="image/*"
          />
          <Image
            src={imagePreview || DefaultImage2}
            alt="Profile"
            className="rounded-full object-cover w-full h-full"
            width={130}
            height={130}
          />
          <button
            onClick={onIconClick}
            className="absolute bottom-3 right-3 bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors"
          >
            <Edit fontSize="small" />
          </button>
        </div>
        <button
          onClick={onSave}
          className="bg-black text-white px-[25px] py-[7px] rounded-[10px] mt-[20px]"
        >
          Save
        </button>
      </div>
      {/* ...form fields as before... */}
      <div className="flex flex-col mt-[30px]">
        <span className="text-gray-400 text-[14px] px-[15px]">Your Name</span>
        <input type="text" className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px]" placeholder="Enter your name" />
      </div>
      <div className="flex flex-col mt-[30px]">
        <span className="text-gray-400 text-[14px] px-[15px]">Email</span>
        <input type="email" className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px]" placeholder="Enter your email" />
      </div>
      <div className="flex flex-col mt-[30px]">
        <span className="text-gray-400 text-[14px] px-[20px]">Date of Birth</span>
        <input type="text" className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px]" placeholder="Enter your DOB" />
      </div>
      <div className="flex flex-col mt-[30px]">
        <span className="text-gray-400 text-[14px] px-[20px]">Permanent address</span>
        <input type="text" className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px]" placeholder="Enter your address" />
      </div>
      <div className="flex flex-col mt-[30px]">
        <span className="text-gray-400 text-[14px] px-[20px]">City</span>
        <input type="text" className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px]" placeholder="Enter your city" />
      </div>
      <div className="flex flex-col mt-[30px]">
        <span className="text-gray-400 text-[14px] px-[20px]">Username</span>
        <input type="text" className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px]" placeholder="Enter your username" />
      </div>
      <div className="flex flex-col mt-[30px]">
        <span className="text-gray-400 text-[14px] px-[20px]">Password</span>
        <input type="password" className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px]" placeholder="Enter your password" />
      </div>
      <div className="flex flex-col mt-[30px]">
        <span className="text-gray-400 text-[14px] px-[20px]">Country</span>
        <input type="text" className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px]" placeholder="Enter your country" />
      </div>
      <div className="flex flex-col mt-[30px]">
        <span className="text-gray-400 text-[14px] px-[20px]">Present address</span>
        <input type="text" className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px]" placeholder="Enter your present address" />
      </div>
      <div className="flex flex-col my-[30px]">
        <span className="text-gray-400 text-[14px] px-[20px]">Postal code</span>
        <input type="text" className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px]" placeholder="Enter your postal code" />
      </div>
    </div>
  );
}

function DesktopProfileEdit({
  imagePreview,
  onIconClick,
  fileInputRef,
  onImageChange,
  onSave,
}: ProfileEditProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Edit Profile</h1>
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
        <h2 className="text-xl font-bold text-yellow-500 mb-6">Personal Info</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <div className="relative w-[100px] h-[100px]">
              <input
                type="file"
                ref={fileInputRef}
                onChange={onImageChange}
                className="hidden"
                accept="image/*"
              />
              <Image
                src={imagePreview || DefaultImage2}
                alt="Profile"
                className="rounded-full object-cover w-full h-full"
                width={100}
                height={100}
              />
              <button
                onClick={onIconClick}
                className="absolute bottom-0 right-0 bg-black text-white rounded-full p-1.5 hover:bg-gray-800 transition-colors"
              >
                <Edit style={{ fontSize: '1rem' }} />
              </button>
            </div>
          </div>
          <form className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Your Name</label>
              <input type="text" defaultValue="Charlene Reed" className="w-full font-semibold text-gray-800 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">User Name</label>
              <input type="text" defaultValue="Charlene Reed" className="w-full font-semibold text-gray-800 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Email</label>
              <input type="email" defaultValue="charlenereed@gmail.com" className="w-full font-semibold text-gray-800 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Password</label>
              <input type="password" placeholder="Enter new password" className="w-full font-semibold text-gray-800 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Date of Birth</label>
              <input type="text" defaultValue="25 January 1990" className="w-full font-semibold text-gray-800 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Country</label>
              <input type="text" defaultValue="USA" className="w-full font-semibold text-gray-800 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-500 mb-1">Permanent Address</label>
              <input type="text" defaultValue="San Jose, California, USA" className="w-full font-semibold text-gray-800 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-500 mb-1">Present Address</label>
              <input type="text" defaultValue="San Jose, California, USA" className="w-full font-semibold text-gray-800 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">City</label>
              <input type="text" defaultValue="San Jose" className="w-full font-semibold text-gray-800 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Postal Code</label>
              <input type="text" defaultValue="45962" className="w-full font-semibold text-gray-800 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>
          </form>
        </div>
        <div className="flex justify-end mt-8">
          <button
            onClick={onSave}
            className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProfileEditPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleSave = () => {
    // Add your save logic here
    router.push('/userProfile/profileView');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar1 />
      <div className="flex flex-col flex-1 w-full">
        <main className="flex-1 md:p-8 overflow-y-auto pb-24 md:pb-0">
          <div className="block md:hidden">
            <MobileProfileEdit
              imagePreview={imagePreview}
              onIconClick={handleIconClick}
              fileInputRef={fileInputRef}
              onImageChange={handleImageChange}
              onSave={handleSave}
            />
          </div>
          <div className="hidden md:block">
            <DesktopProfileEdit
              imagePreview={imagePreview}
              onIconClick={handleIconClick}
              fileInputRef={fileInputRef}
              onImageChange={handleImageChange}
              onSave={handleSave}
            />
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
    );
}