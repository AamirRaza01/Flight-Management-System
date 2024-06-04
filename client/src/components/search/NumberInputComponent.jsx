import React from 'react';

const NumberInputComponent = ({ label, value, onChange }) => {
  const increment = (e) => {
    e.preventDefault();
    onChange(value + 1)
  };
  const decrement = (e) => {
    e.preventDefault();
    onChange(value > 1 ? value - 1 : 1)
  };

  return (
    <div className='w-[25%]   '>
      <label className="block text-gray-600">{label}</label>
      <div className="">
        {/* <button onClick={decrement} className="px-3 py-1 bg-gray-200 border rounded-l">-</button> */}
        <input 
          type="number" 
          value={value} 
          onChange={(e) => {
            const newValue = Math.max(1, Number(e.target.value));
            onChange(newValue);
          }}
          className=" mt-1 p-2 w-full border rounded custom-number-input text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent" 
          placeholder='adult'
          min="1"
          max = "6"
        />
        {/* <button onClick={increment} className="px-3 py-1 bg-gray-200 border rounded-r">+</button> */}
      </div>
    </div>
  );
};

export default NumberInputComponent;
