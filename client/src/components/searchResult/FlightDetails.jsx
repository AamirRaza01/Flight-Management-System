// FlightDetails.js
import React from 'react';
import { calculateDuration } from './utils';

const FlightDetails = ({ flight, onClose }) => {
  const taxes = 50; // Assume some tax value
  const totalPrice = flight.price + taxes;

  return (
    <div className=" p-6 w-[38%]  border-[1px] border-[#e1e1ec] rounded-[10px]">
      <h2 className="text-xl font-bold mb-4">Flight Details</h2>
      <p><strong>Airline:</strong> {flight.airline}</p>
      <p><strong>Flight Code:</strong> {flight.flightCode}</p>
      <p><strong>Duration:</strong> {calculateDuration(flight.startTime, flight.endTime)}</p>
      <p><strong>Time:</strong> {`${flight.startTime} - ${flight.endTime}`}</p>
      <p><strong>Layover:</strong> {flight.layover}</p>
      <hr className="my-4" />
      <p><strong>Subtotal:</strong> ${flight.price}</p>
      <p><strong>Taxes:</strong> ${taxes}</p>
      <p><strong>Total:</strong> ${totalPrice}</p>
      <button 
        className="mt-4 mr-2 px-4 py-2 bg-indigo-600 hover:bg-[#1513A0] text-white rounded" 
        onClick={() => window.location.href = '/passenger-details'}
      >
        Add Passenger
      </button>
      <button 
          className="mt-2 px-4 py-2 border-[1px] border-gray-400 hover:bg-gray-300 text-black rounded" 
          onClick={onClose}
        >
          Cancel
        </button>
    </div>
  );
};

export default FlightDetails;
