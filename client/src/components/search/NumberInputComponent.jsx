import React from 'react';

const NumberInputComponent = ({ label, value, onChange }) => {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(value > 0 ? value - 1 : 0);

  return (
    <div>
      <label className="block text-gray-700">{label}</label>
      <div className="flex items-center mt-1">
        <button onClick={decrement} className="px-3 py-1 bg-gray-200 border rounded-l">-</button>
        <input 
          type="number" 
          value={value} 
          onChange={(e) => onChange(Number(e.target.value))} 
          className="p-2 w-full border-t border-b" 
          min="0"
        />
        <button onClick={increment} className="px-3 py-1 bg-gray-200 border rounded-r">+</button>
      </div>
    </div>
  );
};

export default NumberInputComponent;
