import React, { useState } from 'react';
import DropdownComponent from './DropdownComponent';
import DatePickerComponent from './DatePickerComponent';
import NumberInputComponent from './NumberInputComponent';

const SearchComponent = () => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [adults, setAdults] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to search results page with query parameters
    // (e.g., /search-results?departure=NYC&arrival=LAX&date=2023-06-01&adults=2)
    window.location.href = `/search-results?departure=${departure}&arrival=${arrival}&date=${departureDate}&adults=${adults}`;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-10 mx-auto w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Search Flights</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DropdownComponent 
          label="Departure" 
          value={departure} 
          onChange={setDeparture} 
          placeholder="City or Airport" 
        />
        <DropdownComponent 
          label="Arrival" 
          value={arrival} 
          onChange={setArrival} 
          placeholder="City or Airport" 
        />
        <DatePickerComponent 
          label="Departure Date" 
          value={departureDate} 
          onChange={setDepartureDate} 
        />
        <NumberInputComponent 
          label="Adults" 
          value={adults} 
          onChange={setAdults} 
        />
        <button type="submit" className="col-span-full bg-indigo-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
