"use client";

import Image from 'next/image';
import Image1 from './../../../public/PgBee.png';
import Image2 from './../../../public/Person.png';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export default function ProfileView() {
    const router=useRouter();
    const pushroute=()=>{
        router.push('/profileEdit');    
    }

    return(
        <div className="flex flex-col mt-[30px] ">
            <div className='flex items-center justify-center'>
                <Image src={Image1} alt="Pgbee" className=" w-[130px]" width={100} height={100} />
            </div>

            <div className='flex items-center justify-start my-[30px] ' >
                <div className='ml-[10px] '><KeyboardArrowLeft/></div>
                <span className='ml-[10px] '>Profile</span>
            </div>
            
            <div className='flex flex-col items-center justify-center'>
                <Image src={Image2} alt="Pgbee" className=" w-[130px]" width={100} height={100} />
                <button onClick={pushroute} className='bg-black text-white px-[20px] py-[5px] rounded-[10px] mt-[20px]'>Edit Profile</button>
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Your Name</span>
                <div className="border border-gray-400 rounded-[7px] px-[6px] py-[10px] mt-[10px] mx-[20px] ">Charlene Reed</div>
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Email</span>
                <div className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ">charlenReed@gmail.com</div>
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Date of Birth</span>
                <div className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ">25 January 1990</div>
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Permanent address</span>
                <div className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ">USA</div>
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>City</span>
                <div className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ">San Jose</div>
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Username</span>
                <div className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ">Charlene Reed</div>
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Password</span>
                <div className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ">*******</div>
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Country</span>
                <div className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ">USA</div>
            </div>

            <div className='flex flex-col mt-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Present address</span>
                <div className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ">San Jose</div>
            </div>

            <div className='flex flex-col my-[30px]'>
                <span className='text-gray-400 text-[14px] px-[20px] '>Postal code</span>
                <div className="border border-gray-400 rounded-[7px] px-[10px] py-[10px] mt-[10px] mx-[20px] ">123456</div>
            </div>
        </div>
    )
}