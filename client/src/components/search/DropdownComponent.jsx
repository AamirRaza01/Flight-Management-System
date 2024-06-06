import React, { useState, useEffect, useRef  } from 'react';

const DropdownComponent = ({ label, value, onChange, placeholder, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Fetch the airport options from the API when the component mounts
  // useEffect(() => {
  //   const fetchOptions = async () => {
  //     try {
  //       const response = await fetch('/api/airports');   // backend api
  //       const data = await response.json();
  //       setOptions(data);
  //     } catch (error) {
  //       console.error('Error fetching airport options:', error);
  //     }
  //   };

  //   fetchOptions();
  // }, []);

  
  // For closing the dropdown when we click outside
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className=' w-[25%]'>
      <label className="block text-gray-600">{label}</label>
      <div className="relative" ref={dropdownRef}>
        <input 
          type="text" 
          value={value} 
          onChange={(e) => onChange(e.target.value)} 
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder} 
          className="mt-1 p-2 w-full rounded border text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent" 
        ></input>
        {isOpen && (
          <ul className="absolute bg-white shadow-lg rounded w-full mt-2 max-h-48  overflow-y-auto custom-scrollbar p-2">
            {options.map((option, index) => (
              <li 
                key={index} 
                onClick={() => handleSelect(option)} 
                className="p-2 text-[14px] hover:bg-[#E9E8FC] hover:text-[#605DEC] cursor-pointer rounded"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownComponent;
