"use client";

import Image from 'next/image';
import Image1 from './../../../public/PgBee.png';
import Image2 from './../../../public/Profile_logo.png';
import { Description, DoorBack, HelpOutline, KeyboardArrowRight, LockPerson, Person2, Settings } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export default function Profile() {
    const router = useRouter();

    return (
        <div className="flex flex-col mt-[30px] ">
            <div className='flex items-center justify-center'>
                <Image src={Image1} alt="Pgbee" className=" w-[130px]" width={100} height={100} />

            </div>
            <div className="flex flex-col m-[30px] border border-gray-400 rounded-lg items-center justify-center py-[20px] " >
                <Image src={Image2} alt="Profile" className=" w-[100px]" width={100} height={100} />
                <span className="font-semibold text-2xl mt-[4px]" >Sravan Pandala</span>
                <span className="text-gray-500 text-[12px] mt-[4px] ">Owner</span>
            </div>

            <div onClick={()=>router.push("/profileView")} className="flex flex-row mx-[10px] items-center mb-[20px]">
                <div className='text-gray-600'><Person2 /></div>
                <span className="text-[15px] ml-[10px]">Profile</span>
                <div className='ml-[260px] text-gray-500 '><KeyboardArrowRight /></div>
            </div>

            <div onClick={()=>router.push("/settings")} className="flex flex-row mx-[10px] items-center mb-[20px]">
                <div className='text-gray-600'><Settings /></div>
                <span className=" text-[15px] ml-[10px]">Settings and Privacy</span>
                <div className='ml-[154px] text-gray-500 '><KeyboardArrowRight /></div>
            </div>

            <div className="flex flex-row mx-[10px] items-center mb-[20px]">
                <div className='text-gray-600'><HelpOutline /></div>
                <span className="text-[15px] ml-[10px]">Get Support</span>
                <div className='ml-[217px] text-gray-500 '><KeyboardArrowRight /></div>
            </div>

            <div className="flex flex-row mx-[10px] items-center mb-[20px]">
                <div className='text-gray-600'><Description /></div>
                <span className=" text-[15px] ml-[10px]">Terms and Conditions</span>
                <div className='ml-[142px] text-gray-500 '><KeyboardArrowRight /></div>
            </div>

            <div className="flex flex-row mx-[10px] items-center mb-[20px]">
                <div className='text-gray-600'><LockPerson /></div>
                <span className=" text-[15px] ml-[10px]">Privacy Policy</span>
                <div className='ml-[205px] text-gray-500 '><KeyboardArrowRight /></div>
            </div>

            <div className="flex flex-row mx-[10px] items-center mb-[20px]">
                <div className='text-gray-600'><DoorBack /></div>
                <span className=" text-[15px] ml-[10px]">Logout</span>
                <div className='ml-[255px] text-gray-500 '><KeyboardArrowRight /></div>
            </div>
        </div>
    )
}