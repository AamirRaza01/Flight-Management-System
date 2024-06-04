import React, { useState } from 'react';
import DropdownComponent from './DropdownComponent';
import DatePickerComponent from './DatePickerComponent';
import NumberInputComponent from './NumberInputComponent';

const SearchComponent = () => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [adults, setAdults] = useState(1);

  //DUMMY DATA
  const [options, setOptions] = useState([
    'New York (JFK)',
    'Los Angeles (LAX)',
    'Chicago (ORD)',
    'San Francisco (SFO)',
    'Miami (MIA)',
    'Los Angeles (LAX)',
    'Chicago (ORD)',
    'San Francisco (SFO)'
  ]);


  // We'll fetch form backend api

  // useEffect(() => {
  //   const fetchOptions = async () => {
  //     try {
  //       const response = await fetch('/api/airports');
  //       const data = await response.json();
  //       setOptions(data);
  //     } catch (error) {
  //       console.error('Error fetching airport options:', error);
  //     }
  //   };

  //   fetchOptions();
  // }, []);



  // FLOW --> INITIALLY KUCHH BHI SELECTED NAHI HAI, MAAN LO JAB DEPARTURE PAR CLICK KIYE TO HANDLESELECT CHALEGA, JO ONCHANGE BHEJEGA WITH THAT OPTION, WO OPTION
  //          SETDEPARTURE ME SET HO JAYEGA. NOW JAB HAM ARRIVAL PAR CLICK KAREGE TAB OPTIONS FILTER HOKE AYEGA QKI US TIME TAK DEPARTURE KE PASS EK VALUE HOGA. 

  const filteredDepartureOptions = options.filter(option => option !== arrival);
  const filteredArrivalOptions = options.filter(option => option !== departure);



  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to search results page with query parameters
    // (e.g., /search-results?departure=NYC&arrival=LAX&date=2023-06-01&adults=2)
    window.location.href = `/search-results?departure=${departure}&arrival=${arrival}&date=${departureDate}&adults=${adults}`;
  };

  return (
    <div className="bg-white shadow-custom rounded-md p-6 mx-auto w-full  ">
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">Search Flights</h2>
      <form onSubmit={handleSubmit} className="">
        <div className="flex justify-between gap-1 mb-4 w-full">
        <DropdownComponent 
          label="Departure" 
          value={departure} 
          onChange={setDeparture} 
          options={filteredDepartureOptions}
          placeholder="From where?" 
        />
        <DropdownComponent 
          label="Arrival" 
          value={arrival} 
          onChange={setArrival} 
          options={filteredArrivalOptions}
          placeholder="Where to?" 
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
        </div>
        <button type="submit" className=" bg-indigo-600 text-white px-8 hover:bg-[#1513A0]  py-2 rounded">
          Search
        </button>
        
      </form>
    </div>
  );
};

export default SearchComponent;
