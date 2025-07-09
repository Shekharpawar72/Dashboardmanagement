

// 'use client';

// import { useState } from 'react';
// import { FaCog } from 'react-icons/fa';

// const Header = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
//       {/* Desktop Menu */}
//       <div className="hidden md:flex space-x-6 text-sm text-gray-700">
//         <div className="cursor-pointer hover:text-black">Request Services</div>
//         <div className="cursor-pointer hover:text-black">Services</div>
//         <div className="cursor-pointer hover:text-black">Tickets</div>
//         <div className="cursor-pointer hover:text-black">Calendar</div>
//       </div>

//       {/* Right Section */}
//       <div className="relative ml-auto">
//         <div
//           className="flex items-center space-x-4 cursor-pointer"
//           onClick={() => setDropdownOpen((prev) => !prev)}
//         >
//           <FaCog className="text-gray-600 text-lg" />
//           <img
//             src="/profile.jpg"
//             alt="Profile"
//             className="w-8 h-8 rounded-full object-cover"
//           />
//         </div>

//         {/* Dropdown Menu - positioned to the right */}
//         {dropdownOpen && (
//           <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-10 text-sm text-gray-700">
//             {/* Mobile nav items - only show on mobile */}
//             <div className="md:hidden flex flex-col">
//               <button className="px-4 py-2 text-left hover:bg-gray-100">Request Services</button>
//               <button className="px-4 py-2 text-left hover:bg-gray-100">Services</button>
//               <button className="px-4 py-2 text-left hover:bg-gray-100">Tickets</button>
//               <button className="px-4 py-2 text-left hover:bg-gray-100">Calendar</button>
//               <hr className="my-1" />
//             </div>
//             {/* Settings and Logout for all devices */}
//             <button className="px-4 py-2 w-full text-left hover:bg-gray-100">Settings</button>
//             <button className="px-4 py-2 w-full text-left hover:bg-gray-100">Logout</button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;

'use client';

import { useState } from 'react';
import { FaCog, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-sm font-serif text-gray-700">
        <div className="relative">
          <div 
            className="cursor-pointer hover:text-black flex items-center gap-1"
            onClick={() => setServicesDropdownOpen((prev) => !prev)}
          >
            Request Services
            <FaChevronDown className="text-xs" />
          </div>
          {servicesDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-white border rounded-md shadow-md z-20 text-sm text-gray-700">
              <button className="px-4 py-2 w-full text-left hover:bg-gray-100">Medical Consultation</button>
              <button className="px-4 py-2 w-full text-left hover:bg-gray-100">Laboratory Tests</button>
              <button className="px-4 py-2 w-full text-left hover:bg-gray-100">X-Ray Services</button>
              <button className="px-4 py-2 w-full text-left hover:bg-gray-100">Emergency Care</button>
              <button className="px-4 py-2 w-full text-left hover:bg-gray-100">Surgery Request</button>
              <button className="px-4 py-2 w-full text-left hover:bg-gray-100">Pharmacy Services</button>
            </div>
          )}
        </div>
        <div className="cursor-pointer hover:text-black">Services</div>
        <div className="cursor-pointer hover:text-black">Tickets</div>
        <div className="cursor-pointer hover:text-black">Calendar</div>
      </div>

      {/* Right Section */}
      <div className="relative ml-auto">
        <div
          className="flex items-center space-x-4 cursor-pointer"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <FaCog className="text-gray-600 text-lg" />
          <img
            src="/proflie-photo.avif"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>

        {/* Dropdown Menu - positioned to the right */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-10 text-sm text-gray-700">
            {/* Mobile nav items - only show on mobile */}
            <div className="md:hidden flex flex-col">
              <div className="relative">
                <button 
                  className="px-4 py-2 text-left hover:bg-gray-100 w-full flex items-center justify-between"
                  onClick={() => setServicesDropdownOpen((prev) => !prev)}
                >
                  Request Services
                  <FaChevronDown className="text-xs" />
                </button>
                {servicesDropdownOpen && (
                  <div className="bg-gray-50 border-t">
                    <button className="px-6 py-2 w-full text-left hover:bg-gray-100 text-xs">Medical Consultation</button>
                    <button className="px-6 py-2 w-full text-left hover:bg-gray-100 text-xs">Laboratory Tests</button>
                    <button className="px-6 py-2 w-full text-left hover:bg-gray-100 text-xs">X-Ray Services</button>
                    <button className="px-6 py-2 w-full text-left hover:bg-gray-100 text-xs">Emergency Care</button>
                    <button className="px-6 py-2 w-full text-left hover:bg-gray-100 text-xs">Surgery Request</button>
                    <button className="px-6 py-2 w-full text-left hover:bg-gray-100 text-xs">Pharmacy Services</button>
                  </div>
                )}
              </div>
              <button className="px-4 py-2 text-left hover:bg-gray-100">Services</button>
              <button className="px-4 py-2 text-left hover:bg-gray-100">Tickets</button>
              <button className="px-4 py-2 text-left hover:bg-gray-100">Calendar</button>
              <hr className="my-1" />
            </div>
            {/* Settings and Logout for all devices */}
            <button className="px-4 py-2 w-full text-left hover:bg-gray-100">Settings</button>
            <button className="px-4 py-2 w-full text-left hover:bg-gray-100">Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;