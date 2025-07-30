'use client';

import { useState, useMemo } from 'react';

// Define the shape of a single room object
interface Room {
    type: string;
    attachedBathroom: boolean;
    price: number;
}

// Define the props for the RoomFilter component
interface RoomFilterProps {
    rooms: Room[];
}

export default function RoomFilter({ rooms }: RoomFilterProps) {
    // State to manage the user's filter selections
    const [bathroomType, setBathroomType] = useState('Any'); // 'Any', 'Attached', 'Common'
    const [roomType, setRoomType] = useState('Any'); // 'Any', 'Single', '2 Shared', etc.

    // Get unique room types from the data for the dropdown
    const uniqueRoomTypes = useMemo(() => {
        return ['Any', ...Array.from(new Set(rooms.map(room => room.type)))];
    }, [rooms]);

    // Filter the rooms based on the selected criteria
    const filteredRooms = useMemo(() => {
        return rooms.filter(room => {
            const bathroomMatch = 
                bathroomType === 'Any' ||
                (bathroomType === 'Attached' && room.attachedBathroom) ||
                (bathroomType === 'Common' && !room.attachedBathroom);

            const roomTypeMatch = 
                roomType === 'Any' || room.type === roomType;

            return bathroomMatch && roomTypeMatch;
        });
    }, [rooms, bathroomType, roomType]);

    return (
        <section>
            <h2 className="text-2xl font-bold mb-6">Filter Rooms</h2>

            {/* Main container with responsive grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Column: Filter Controls */}
                <div className="lg:col-span-1 space-y-6">
                    <div>
                        <label htmlFor="bathroom-filter" className="block text-sm font-medium text-gray-700">
                            Bathroom
                        </label>
                        <select
                            id="bathroom-filter"
                            value={bathroomType}
                            onChange={(e) => setBathroomType(e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-md border"
                        >
                            <option>Any</option>
                            <option>Attached</option>
                            <option>Common</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="room-type-filter" className="block text-sm font-medium text-gray-700">
                            Room Type
                        </label>
                        <select
                            id="room-type-filter"
                            value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}
                             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-md border"
                        >
                            {uniqueRoomTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Right Column: Filtered Room Cards */}
                <div className="lg:col-span-2 space-y-4">
                    {filteredRooms.length > 0 ? (
                        filteredRooms.map((room, index) => (
                            <div key={index} className="flex justify-between items-center p-4 border rounded-lg shadow-sm">
                                <div>
                                    <h3 className="font-bold text-lg">{room.type}</h3>
                                    <p className="text-sm text-gray-600">
                                        {room.attachedBathroom ? 'Attached Bathroom' : 'Common Bathroom'}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-lg text-green-600">₹{room.price.toLocaleString()}</p>
                                    <p className="text-xs text-gray-500">per month</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center justify-center p-4 border rounded-lg bg-gray-50">
                            <p className="text-gray-500">No rooms match the selected filters.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}