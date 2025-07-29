"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Edit, KeyboardArrowLeft } from '@mui/icons-material';
import { useState, useRef, ChangeEvent, RefObject } from 'react';
import Sidebar1 from '../../../Components/Sidebar1';
import BottomNav from '../../../Components/BottomNav';

// Constants
const Image1 = '/PgBee.png';
const DefaultImage2 = '/Person.png';

// --- Data object for all profile form fields ---
const profileFields = [
    { name: 'name', label: 'Your Name', placeholder: 'Enter your name' },
    { name: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email' },
    { name: 'dob', label: 'Date of Birth', placeholder: 'Enter your DOB' },
    { name: 'permanentAddress', label: 'Permanent address', placeholder: 'Enter your address' },
    { name: 'city', label: 'City', placeholder: 'Enter your city' },
    { name: 'username', label: 'Username', placeholder: 'Enter your username' },
    { name: 'password', label: 'Password', placeholder: 'Enter new password', type: 'password' },
    { name: 'country', label: 'Country', placeholder: 'Enter your country' },
    { name: 'presentAddress', label: 'Present address', placeholder: 'Enter your present address' },
    { name: 'postalCode', label: 'Postal code', placeholder: 'Enter your postal code' },
];

// Type definitions
type FormData = {
    [key: string]: string;
};

type ProfileEditProps = {
    imagePreview: string | null;
    onIconClick: () => void;
    fileInputRef: RefObject<HTMLInputElement | null>;
    onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSave: () => void;
    formData: FormData;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

// --- Mobile View Component ---
function MobileProfileEdit({
    imagePreview, onIconClick, fileInputRef, onImageChange,
    onSave, formData, handleInputChange
}: ProfileEditProps) {
    return (
        <div className="flex flex-col mt-[30px]">
            <div className="flex items-center justify-center">
                <Image src={Image1} alt="Pgbee" className="w-[130px]" width={100} height={100} />
            </div>
            <div className="flex items-center justify-start my-[30px]">
                <div className="ml-[10px]"><KeyboardArrowLeft /></div>
                <span className="ml-[6px]">Profile</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="relative w-[130px] h-[130px]">
                    <input type="file" ref={fileInputRef} placeholder="image" onChange={onImageChange} className="hidden" accept="image/*" />
                    <Image src={imagePreview || DefaultImage2} alt="Profile" className="rounded-full object-cover w-full h-full" width={130} height={130} />
                    <button onClick={onIconClick} className="absolute bottom-3 right-3 bg-black text-white rounded-full p-2 hover:bg-gray-800" aria-label="Edit profile picture">
                        <Edit fontSize="small" />
                    </button>
                </div>
                <button onClick={onSave} className="bg-black text-white px-[25px] py-[7px] rounded-[10px] mt-[20px]">
                    Save
                </button>
            </div>
            <div className="mt-4">
                {profileFields.map(field => (
                    <div key={field.name} className="flex flex-col mt-[20px]">
                        <span className="text-gray-400 text-[14px] px-[20px]">{field.label}</span>
                        <input
                            type={field.type || 'text'}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px]"
                            placeholder={field.placeholder}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

// --- Desktop View Component ---
function DesktopProfileEdit({
    imagePreview, onIconClick, fileInputRef, onImageChange,
    onSave, formData, handleInputChange
}: ProfileEditProps) {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Edit Profile</h1>
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
                <h2 className="text-xl font-bold text-yellow-500 mb-6">Personal Info</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                        <div className="relative w-[100px] h-[100px]">
                            <input type="file" ref={fileInputRef} placeholder="image "onChange={onImageChange} className="hidden" accept="image/*" />
                            <Image src={imagePreview || DefaultImage2} alt="Profile" className="rounded-full object-cover w-full h-full" width={100} height={100} />
                            <button onClick={onIconClick} className="absolute bottom-0 right-0 bg-black text-white rounded-full p-1.5 hover:bg-gray-800" aria-label="Edit profile picture">
                                <Edit style={{ fontSize: '1rem' }} />
                            </button>
                        </div>
                    </div>
                    <form className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {profileFields.map(field => (
                             <div key={field.name} className={ (field.name === 'permanentAddress' || field.name === 'presentAddress') ? 'md:col-span-2' : ''}>
                                <label className="block text-sm text-gray-500 mb-1">{field.label}</label>
                                <input
                                    type={field.type || 'text'}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleInputChange}
                                    placeholder={field.placeholder}
                                    className="w-full font-semibold text-gray-800 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 outline-none"
                                />
                            </div>
                        ))}
                    </form>
                </div>
                <div className="flex justify-end mt-8">
                    <button onClick={onSave} className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

// --- Main Page Component ---
export default function ProfileEditPage() {
    const router = useRouter();
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [formData, setFormData] = useState<FormData>({
        name: 'Charlene Reed', email: 'charlenereed@gmail.com', dob: '25 January 1990',
        permanentAddress: 'San Jose, California, USA', city: 'San Jose', username: 'Charlene Reed',
        password: '', country: 'USA', presentAddress: 'San Jose, California, USA', postalCode: '45962'
    });

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleIconClick = () => {
        fileInputRef.current?.click();
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log('Saving Form Data:', formData);
        router.push('/userProfile/profileView');
    };

    const props = {
        imagePreview, onIconClick: handleIconClick, fileInputRef,
        onImageChange: handleImageChange, onSave: handleSave,
        formData, handleInputChange,
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar1 />
            <div className="flex-1 flex flex-col w-full overflow-hidden">
                <main className="flex-1 overflow-y-auto md:p-8 pb-24 md:pb-0">
                    <div className="block md:hidden">
                        <MobileProfileEdit {...props} />
                    </div>
                    <div className="hidden md:block">
                        <DesktopProfileEdit {...props} />
                    </div>
                </main>
            </div>
            <BottomNav />
        </div>
    );
}