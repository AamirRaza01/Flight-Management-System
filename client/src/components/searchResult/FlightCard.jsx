// FlightCard.js
import React from 'react';
import { calculateDuration } from './utils';

const FlightCard = ({ flight, onClick, isSelected }) => (
  <div className={`flex flex-col md:flex-row items-start justify-between p-2 rounded-[5px] hover:bg-[#E9E8FC] cursor-pointer ${isSelected ? 'bg-[#F6F6FE] border-[1px] border-[#605DEC]' : 'bg-white'}`}   onClick={() => onClick(flight)}>
    <div className="flex flex-col items-start md:w-1/4 md:mb-0 ">
      <span className="text-[16px] text-gray-900 font-semibold">{calculateDuration(flight.startTime, flight.endTime)}</span>
      <span className="text-sm text-gray-500">{flight.airline}</span>
    </div>
    <div className="flex flex-col items-center md:w-1/4 md:mb-0 ">
      <span className="text-[16px] text-gray-900 font-semibold">{`${flight.startTime} - ${flight.endTime}`}</span>
    </div>
    <div className="flex flex-col items-end md:w-1/4 md:mb-0 ">
      <span className="text-[16px] text-gray-900 font-semibold">{flight.stops}</span>
      <span className="text-sm text-gray-500">{flight.layover}</span>
    </div>
    <div className="flex flex-col items-end md:w-1/4 ">
      <span className="text-[16px] text-gray-900 font-semibold">${flight.price}</span>
    </div>
  </div>
);

export default FlightCard;
