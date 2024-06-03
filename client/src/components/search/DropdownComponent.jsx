import React, { useState } from 'react';

const DropdownComponent = ({ label, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([
    'New York (JFK)',
    'Los Angeles (LAX)',
    'Chicago (ORD)',
    'San Francisco (SFO)',
    'Miami (MIA)'
  ]);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div>
      <label className="block text-gray-700">{label}</label>
      <div className="relative">
        <input 
          type="text" 
          value={value} 
          onChange={(e) => onChange(e.target.value)} 
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder} 
          className="mt-1 p-2 w-full border rounded" 
        />
        {isOpen && (
          <ul className="absolute bg-white border rounded w-full mt-1 max-h-48 overflow-y-auto">
            {options.filter(option => option.toLowerCase().includes(value.toLowerCase())).map((option, index) => (
              <li 
                key={index} 
                onClick={() => handleSelect(option)} 
                className="p-2 hover:bg-gray-200 cursor-pointer"
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
