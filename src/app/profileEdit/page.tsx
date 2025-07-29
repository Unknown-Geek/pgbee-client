"use client";

import Image from 'next/image';
import Image1 from './../../../public/PgBee.png';
import Image2 from './../../../public/Person.png';
import { Edit, KeyboardArrowLeft } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export default function ProfileEdit() {
    const router = useRouter();

    return(
        <div className="flex flex-col mt-[30px] ">
            <div className='relative flex items-center justify-center'>
                <Image src={Image1} alt="Pgbee" className=" w-[130px]" width={100} height={100} />
                <div className='absolute top-60 left-60 text-white rounded-[50%] p-[4px] bg-black '><Edit/></div>
            </div>

            <div className='flex items-center justify-start my-[30px] ' >
                <div onClick={()=>router.push("/profileView")} className='ml-[10px]'><KeyboardArrowLeft/></div>
                <span className='ml-[6px] '>Profile</span>
            </div>
            
            <div className='flex flex-col items-center justify-center'>
                <Image src={Image2} alt="Pgbee" className=" w-[130px]" width={100} height={100} />
                <button className='bg-black text-white px-[25px] py-[7px] rounded-[10px] mt-[20px]'>Save</button>
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[15px] '>Your Name</span>
                <input type="text" className='border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ' placeholder='Enter your name' />
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[15px] '>Email</span>
                <input type="email" className='border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ' placeholder='Enter your email' />
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Date of Birth</span>
                <input type="text" className='border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ' placeholder='Enter your DOB' />
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Permanent address</span>
                <input type="text" className='border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ' placeholder='Enter your address' />
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>City</span>
                <input type="text" className='border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ' placeholder='Enter your city' />
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Username</span>
                <input type="text" className='border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ' placeholder='Enter your username' />
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Password</span>
                <input type="password" className='border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ' placeholder='Enter your password' />
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Country</span>
                <input type="text" className='border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ' placeholder='Enter your country' />
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Present address</span>
                <input type="text" className='border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ' placeholder='Enter your present address' />
            </div>

            <div className='flex flex-col my-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Postal code</span>
                <input type="text" className='border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ' placeholder='Enter your postal code' />
            </div>
        </div>
    )
}