"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { KeyboardArrowLeft } from '@mui/icons-material';
import Sidebar1 from '../../../Components/Sidebar1';
import BottomNav from '../../../Components/BottomNav';

const Image1 = '/PgBee.png';
const Image2 = '/Person.png';

// --- Data object for all profile information ---
const profileData = {
    'Your Name': 'Charlene Reed',
    'Email': 'charlenReed@gmail.com',
    'Date of Birth': '25 January 1990',
    'Permanent address': 'USA',
    'City': 'San Jose',
    'Username': 'Charlene Reed',
    'Password': '••••••••••',
    'Country': 'USA',
    'Present address': 'San Jose',
    'Postal code': '123456'
};

// --- Mobile Layout Component ---
function MobileProfileView() {
    const router = useRouter();
    const pushroute = () => {
        router.push('/userProfile/profileEdit');
    };

    return (
        <div className="flex flex-col mt-[30px] ">
            <div className='flex items-center justify-center'>
                <Image src={Image1} alt="Pgbee" className=" w-[130px]" width={100} height={100} />
            </div>
            <div className='flex items-center justify-start my-[30px]'>
                <div onClick={() => router.push("/profile")} className='ml-[10px] cursor-pointer'><KeyboardArrowLeft /></div>
                <span className='ml-[10px]'>Profile</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <Image src={Image2} alt="Profile" className=" w-[130px]" width={100} height={100} />
                <button onClick={pushroute} className='bg-black text-white px-[20px] py-[5px] rounded-[10px] mt-[20px]'>Edit Profile</button>
            </div>
            {/* Map over the profileData object to render fields */}
            <div className="mt-4">
                {Object.entries(profileData).map(([label, value]) => (
                    <div key={label} className='flex flex-col mt-[20px]'>
                        <span className='text-gray-400 text-[14px] px-[20px]'>{label}</span>
                        <div className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px]">{value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// --- Desktop Grid Layout Component ---
function DesktopProfileView() {
    const router = useRouter();
    // Convert the data object for the desktop view's specific key format
    const desktopProfileData = {
        name: profileData['Your Name'],
        userName: profileData['Username'],
        email: profileData['Email'],
        password: profileData['Password'],
        dob: profileData['Date of Birth'],
        country: profileData['Country'],
        permanentAddress: profileData['Permanent address'],
        presentAddress: profileData['Present address'],
        city: profileData['City'],
        postalCode: profileData['Postal code'],
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">My Profile</h1>
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
                <h2 className="text-xl font-bold text-yellow-500 mb-6">Personal Info</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                        <Image src={Image2} alt="Profile" className="rounded-full" width={100} height={100} />
                    </div>
                    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {Object.entries(desktopProfileData).map(([key, value]) => (
                            <div key={key}>
                                <p className="text-sm text-gray-500 mb-1">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</p>
                                <p className="font-semibold text-gray-800 border border-gray-200 rounded-md p-3 bg-gray-50">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end mt-8">
                    <button onClick={() => router.push('/userProfile/profileEdit')} className='bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800'>Edit Profile</button>
                </div>
            </div>
        </div>
    );
}

// --- Main Page Component ---
export default function ProfileViewPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar1 />
            <div className="flex-1 flex flex-col w-full overflow-hidden">
                <main className="flex-1 overflow-y-auto md:p-8 pb-24 md:pb-0">
                    <div className="block md:hidden">
                        <MobileProfileView />
                    </div>
                    <div className="hidden md:block">
                        <DesktopProfileView />
                    </div>
                </main>
            </div>
            <BottomNav />
        </div>
    );
}