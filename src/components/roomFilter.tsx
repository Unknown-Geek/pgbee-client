'use client';
import { useState } from 'react';

const roomTypes = ["Single", "2 Shared", "3 Shared", "3+ Shared"];
type Room = {
  type: string;
  attachedBathroom: boolean;
  price: number;
};

export default function RoomFilter({ rooms }: { rooms: Room[] }) {
  const [attachedFilter, setAttachedFilter] = useState<string>('any');
  const [roomTypeFilter, setRoomTypeFilter] = useState<string>('any');

  const filteredRooms = rooms.filter((room) => {
    const matchAttached =
      attachedFilter === 'any' ||
      room.attachedBathroom === (attachedFilter === 'attached');

    const matchType =
      roomTypeFilter === 'any' || room.type === roomTypeFilter;

    return matchAttached && matchType;
  });

  return (
    <div className="p-4 bg-white  rounded-xl max-w-2xl mx-auto mt-8 flex flex-row gap-4">
      <h2 className="text-xl font-bold mb-4">Filter Rooms</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Attached Bathroom Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Bathroom</label>
          <select
            className="border p-2 rounded-md"
            value={attachedFilter}
            onChange={(e) => setAttachedFilter(e.target.value)}
          >
            <option value="any">Any</option>
            <option value="attached">Attached</option>
            <option value="not-attached">Not Attached</option>
          </select>
        </div>

        {/* Room Type Filter */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Room Type</label>
          <select
            className="border p-2 rounded-md"
            value={roomTypeFilter}
            onChange={(e) => setRoomTypeFilter(e.target.value)}
          >
            <option value="any">Any</option>
            {roomTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filtered Room Results */}
      <div className="space-y-4">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-lg">{room.type}</p>
                <p className="text-sm text-gray-500">
                  {room.attachedBathroom ? 'Attached Bathroom' : 'Common Bathroom'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-green-600">₹{room.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No rooms match the filters.</p>
        )}
      </div>
    </div>
  );
}
