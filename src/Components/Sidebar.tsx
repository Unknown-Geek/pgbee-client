"use client";

import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Range } from "react-range";

type SidebarProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
};

export default function Sidebar({toggle, setToggle }: SidebarProps) {
    const amenities = ["Free Wi-Fi", "Kitchen", "Balcony", "Mess available", "Gym"];
    const rooms = ["Any", "1", "2", "3", "4"];
    const MIN = 1000;
    const MAX = 18000;
    const STEP = 1000;
    const [values, setValues] = useState([MIN, MAX]);
    const [selectedRooms, setSelectedRooms] = useState(-1);
    const [selectedBathrooms, setSelectedBathrooms] = useState(-1);
    
    return (
        <div className="flex-1">
            <div className="flex flex-col py-[20px] px-[25px] lg:px-[40px] border-r border-gray-400 ">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row">
                        <span className="text-3xl font-bold ">Filters</span>
                        <div onClick={()=>setToggle(false)} className="ml-[230px] text-gray-500 flex md:hidden"><Close/></div>
                    </div>
                    <div className="block md:hidden flex flex-col">
                        <span className="text-xl font-semibold ">Sort By</span>
                        <select className="p-[8px] cursor-pointer rounded-lg border h-[40px] mt-[15px] w-[300px] border-gray-400 appearance-none bg-white pr-10">
                            <option>Popularity</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Rating</option>
                        </select>
                        <hr className="mt-[30px] h-px text-gray-400 " />
                    </div>
                    <span className="text-xl font-semibold ">Amenities</span>
                    <input className="p-[15px] rounded-lg border h-[36px] w-[300px] border-gray-400 " placeholder="Search..." />
                    <div className="flex flex-row gap-2 flex-wrap mt-[20px] w-[350px] ">
                        {amenities.map((amenity, index) => (
                            <div key={index} className="flex flex-row bg-gray-200 items-center justify-center rounded-lg gap-2 w-[100px] h-auto max-h-[40px] p-[6px] ">
                                <span className="text-[12px] ">{amenity} </span>
                            </div>
                        ))}
                    </div>
                    <div className="cursor-pointer font-medium mt-[10px] text-[15px]">
                        <span>+View more</span>
                    </div>
                    <hr className="mt-[30px] h-px text-gray-400 " />
                </div>

                {/* price */}
                <div className="flex flex-col gap-3 mt-[30px]">
                    <span className="font-bold text-[22px] mb-[10px] ">Price</span>
                    {/* Slider */}
                    <Range
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        values={values}
                        onChange={(values) => setValues(values)}
                        renderTrack={({ props, children }) => (
                            <div
                                {...props}
                                className="h-1 w-full bg-gray-200 rounded relative"
                                style={{ ...props.style }}
                            >
                                <div
                                    className="absolute h-1 bg-black rounded"
                                    style={{
                                        left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
                                        width: `${((values[1] - values[0]) / (MAX - MIN)) * 100}%`,
                                    }}
                                />
                                {children}
                            </div>
                        )}
                        renderThumb={({ props }) => (
                            <div
                                {...props}
                                className="h-5 w-5 bg-white border-2 border-black rounded-full shadow"
                            />
                        )}
                    />

                    <div className="flex justify-between mt-2 text-sm font-semibold">
                        <span className="bg-gray-100 px-2 py-1 rounded">₹{values[0]}</span>
                        <span className="bg-gray-100 px-2 py-1 rounded">₹{values[1]}</span>
                    </div>

                    <hr className="mt-[30px] h-px text-gray-400 " />

                    {/* Type of place */}
                    <span className="mt-[15px] lg:mt-[25px] font-bold text-[22px] ">Type of Place</span>
                    <div className="flex border border-black rounded-xl overflow-hidden w-[300px] lg:w-[250px] mt-[10px] lg:mt-[20px] ">
                        <div className="bg-black text-white px-6 py-3 text-center flex-1">
                            <div className="font-bold">Hostel</div>
                            <div className="text-sm">₹3000 Avg</div>
                        </div>
                        <div className="bg-white text-black px-6 py-3 text-center border-l border-black flex-1">
                            <div className="font-bold">PG</div>
                            <div className="text-sm">₹8000 Avg</div>
                        </div>
                    </div>

                    <hr className="mt-[30px] h-px text-gray-400 " />

                    {/* Rooms and Bathrooms */}
                    <div className="flex flex-col">
                        <span className="mt-[25px] font-bold text-[20px] ">Rooms</span>
                        <div className="flex flex-row gap-2 flex-wrap mt-[20px] ">
                            {rooms.map((room, index) => (
                                <div onClick={() => setSelectedRooms(index)} key={index} className={`${selectedRooms === index ? "bg-black text-white" : ""} flex flex-row items-center border justify-center cursor-pointer rounded-xl gap-2 w-[50px] p-[6px] `}>
                                    <span className={`text-[15px] font-semibold `}>{room} </span>
                                </div>
                            ))}
                        </div>

                        <span className="mt-[20px] font-bold text-[20px] ">BathRooms</span>
                        <div className="flex flex-row gap-2 flex-wrap mt-[20px] ">
                            {rooms.map((room, index) => (
                                <div onClick={() => setSelectedBathrooms(index)} key={index} className={`${selectedBathrooms === index ? "bg-black text-white" : ""} flex flex-row items-center border justify-center cursor-pointer rounded-xl gap-2 w-[50px] p-[6px] `}>
                                    <span className={`text-[15px] font-semibold `}>{room} </span>
                                </div>
                            ))}
                        </div>
                        <hr className="mt-[30px] h-px text-gray-400 " />
                    </div>

                    {/* Curfew */}
                    <div className="flex flex-col">
                        <span className="mt-[25px] font-bold text-[25px] ">Curfew</span>
                        <label className="flex items-center gap-2 mt-4 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                            />
                            <span className="text-[16px] font-semibold ">Mandatory curfew</span>
                        </label>
                        <label className="flex items-center gap-2 mt-4 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                            />
                            <span className="text-[16px] font-semibold">No curfew</span>
                        </label>
                        <hr className="mt-[30px] h-px text-gray-400 " />
                    </div>

                    {/* Room type */}
                    <div className="flex flex-col">
                        <span className="mt-[25px] font-bold text-[25px] ">Room type</span>
                        <label className="flex items-center gap-2 mt-4 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                            />
                            <span className="text-[16px] font-semibold">Single Room</span>
                        </label>
                        <label className="flex items-center gap-2 mt-4 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                            />
                            <span className="text-[16px] font-semibold">Shared Room</span>
                        </label>
                        <hr className="mt-[30px] h-px text-gray-400 " />
                    </div>

                    {/* Bathroom attached */}
                    <div className="flex flex-col">
                        <span className="mt-[25px] font-bold text-[25px] ">Bathroom attached</span>
                        <label className="flex items-center gap-2 mt-4 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                            />
                            <span className="text-[16px] font-semibold">Attached</span>
                        </label>
                        <label className="flex items-center gap-2 mt-4 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                            />
                            <span className="text-[16px] font-semibold">Not Attached</span>
                        </label>
                        <hr className="mt-[30px] h-px text-gray-400 " />
                    </div>


                    {/* Caution deposit */}
                    <div className="flex flex-col">
                        <span className="mt-[25px] font-bold text-[25px] ">Caution deposit</span>
                        <label className="flex items-center gap-2 mt-4 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                            />
                            <span className="text-[16px] font-semibold">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 mt-4 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                            />
                            <span className="text-[16px] font-semibold">No</span>
                        </label>
                    </div>

                </div>
            </div>

        </div>
    ) 

}