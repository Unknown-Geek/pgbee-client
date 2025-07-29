// components/Navbar.tsx
'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LocationOn, Search, Clear } from "@mui/icons-material";
import Modal from '../[details]/modal'
import Wishlist from '../wishlists/page';

interface NavbarProps {
  onSearch: (query?: string) => void;
  searchQuery: string;
}

interface SuggestionItem {
  text: string;
  type: 'hostel' | 'location' | 'amenity';
}

const Navbar = ({ onSearch, searchQuery }: NavbarProps) => {
  const [location, setLocation] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  // ====================================================================
  // 🔍 SEARCH SUGGESTIONS DATA - REPLACE WITH YOUR ACTUAL DATA
  // ====================================================================
  // TODO: Replace this with data derived from your actual hostels/PGs
  // This should be dynamically generated from your hostel database
  // Structure: { text: "search term", type: "category" }
  const dummyData: SuggestionItem[] = [
    // HOSTEL NAMES - Extract these from your actual hostel objects
    { text: "Ideal Hostel", type: "hostel" },
    { text: "Vanitha Mithram", type: "hostel" }, 
    { text: "Shelter", type: "hostel" },
    { text: "Sunflower", type: "hostel" },
    
    // LOCATIONS - Extract these from hostel.location field
    { text: "Opposite College Gate", type: "location" },
    { text: "50m from College", type: "location" },
    { text: "200m from College", type: "location" }, 
    { text: "300m from College", type: "location" },
    
    // AMENITIES - Extract unique amenities from all hostels
    { text: "Free Wifi", type: "amenity" },
    { text: "Kitchen", type: "amenity" },
    { text: "Balcony", type: "amenity" },
    { text: "Terrace", type: "amenity" },
    { text: "Gym", type: "amenity" },
    { text: "Washing Machine", type: "amenity" }
    
    // 📝 TO DYNAMICALLY GENERATE THIS DATA:
    // 1. Extract all hostel names: hostels.map(h => ({ text: h.name, type: "hostel" }))
    // 2. Extract all locations: hostels.map(h => ({ text: h.location, type: "location" }))
    // 3. Extract all amenities: hostels.flatMap(h => h.amenities).map(a => ({ text: a, type: "amenity" }))
    // 4. Remove duplicates and combine all arrays
  ];

  // Sync local state with search query prop
  useEffect(() => {
    if (!searchQuery) {
      setLocation('');
    }
  }, [searchQuery]);

  // Handle input change and generate suggestions
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocation(value);
    
    if (value.trim().length > 0) {
      const filtered = dummyData.filter(item => 
        item.text.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Show max 5 suggestions
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: SuggestionItem) => {
    setLocation(suggestion.text);
    setShowSuggestions(false);
    onSearch(suggestion.text);
  };

  const handleSearch = () => {
    onSearch(location);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow click on suggestion
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const login = () => {
    router.push(`/login`);
  };

  return (
    <nav className="flex flex-row gap-32 items-center pl-12 p-4 shadow-md bg-white">
        <Image src="/PgBee.png" alt="PgBee Logo" width={100} height={100} />

        <div className="flex flex-row absolute left-1/4 w-full max-w-md  space-x-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={location}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              onBlur={handleInputBlur}
              onFocus={() => location.trim().length > 0 && setShowSuggestions(true)}
              placeholder="Type a location..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            {location && (
              <button
                onClick={() => {
                  setLocation('');
                  onSearch('');
                  setShowSuggestions(false);
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
              >
                ✕
              </button>
            )}
            
            {/* Search Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-20 max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onMouseDown={(e) => {
                      e.preventDefault(); // Prevent blur from firing
                      handleSuggestionClick(suggestion);
                    }}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 flex items-center gap-3"
                  >
                    {suggestion.type === 'hostel' && <Search className="text-blue-500 text-sm" />}
                    {suggestion.type === 'location' && <LocationOn className="text-green-500 text-sm" />}
                    {suggestion.type === 'amenity' && <span className="text-orange-500 text-xs">★</span>}
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-700">{suggestion.text}</span>
                      <span className="text-xs text-gray-400 capitalize">{suggestion.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleSearch}
            className="w-50 bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md transition hover:cursor-pointer"
          >
            Search
          </button>
        </div>  
        <div className='absolute right-1/4 mr-16  flex items-center gap-16'>
            <div className="flex items-center gap-4">
            <Image
                src='/Globe_icon.svg'
                alt="Globe"
                width={20}
                height={20}
            />
            <p className="text-lg">EN</p>
            </div>
            <Image src="/Currency.svg" alt="currency" width={40} height={30} />

        </div>

        <div className='flex flex-row ml-auto'>
          <button onClick={() => setShowModal(true)} className="flex items-center gap-2 mr-12  px-4 py-2 border border-gray-300 rounded-md hover:cursor-pointer">
            <Image src='/heart.png' alt="heart" width={24} height={24} />
            Wishlist
            </button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Wishlist />
      </Modal>
        <Image src="/user.png" alt="user" width={40} height={30} />
        <button onClick={login}
          className="flex items-center gap-2  text-black px-4 py-2 rounded-md  transition hover:cursor-pointer"
        >
          <span>Login / Signup</span>
        </button>
        </div>
      </nav>
  );
};

export default Navbar;