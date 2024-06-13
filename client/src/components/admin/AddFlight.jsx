import React, { useState } from 'react';

const AddFlight = () => {
  const [flightDetails, setFlightDetails] = useState({
    departureAirport: '',
    arrivalAirport: '',
    departureDate: '',
    startTime: '',
    endTime: '',
    stops: '',
    layoverAirport: '',
    price: '',
    tax: '',
    airline: '',
    flightCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightDetails({
      ...flightDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(flightDetails);
  };

  return (
    <div className=" p-6 w-1/2 ">
      <h2 className="text-2xl font-bold mb-4">Add Flight</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Airline</label>
          <input
            type="text"
            name="airline"
            value={flightDetails.airline}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            placeholder='eg : Hawaiian Airlines'
          />
        </div>
        <div>
          <label className="block text-gray-700">Flight Code</label>
          <input
            type="text"
            name="flightCode"
            value={flightDetails.flightCode}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            placeholder='eg : HA123'
          />
        </div>
        <div>
          <label className="block text-gray-700">Departure Date (DD/MM/YYYY)</label>
          <input
            type="date"
            name="departureDate"
            value={flightDetails.departureDate}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600"
          />
        </div>
        <div>
          <label className="block text-gray-700">Departure Airport</label>
          <input
            type="text"
            name="departureAirport"
            value={flightDetails.departureAirport}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            placeholder='eg : New York'
          />
        </div>
        <div>
          <label className="block text-gray-700">Arrival Airport</label>
          <input
            type="text"
            name="arrivalAirport"
            value={flightDetails.arrivalAirport}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            placeholder='eg : Chicago'
          />
        </div>
        <div>
          <label className="block text-gray-700">Start Time (AM/PM)</label>
          <input
            type="text"
            name="startTime"
            value={flightDetails.startTime}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            placeholder='eg : 7:00 AM'
          />
        </div>
        <div>
          <label className="block text-gray-700">End Time (AM/PM)</label>
          <input
            type="text"
            name="endTime"
            value={flightDetails.endTime}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            placeholder='eg : 7:00 AM'
          />
        </div>
        <div>
          <label className="block text-gray-700">Number of Stops</label>
          <input
            type="number"
            name="stops"
            value={flightDetails.stops}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            min= "0"
            placeholder='eg: 1'
          />
        </div>
        <div>
          <label className="block text-gray-700">Layover Airport</label>
          <input
            type="text"
            name="layoverAirport"
            value={flightDetails.layoverAirport}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            placeholder='eg : 2h 45m in HNL'
          />
        </div>
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={flightDetails.price}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            placeholder='eg : 620'
          />
        </div>
        <div>
          <label className="block text-gray-700">Tax</label>
          <input
            type="number"
            name="tax"
            value={flightDetails.tax}
            onChange={handleChange}
            className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            placeholder='eg : 50'
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-600"
          >
            Add Flight
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFlight;
