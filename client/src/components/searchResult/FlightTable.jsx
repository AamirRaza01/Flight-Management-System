// FlightTable.js
import React, { useState } from "react";
import FlightCard from "./FlightCard";
import FlightDetails from "./FlightDetails";
import { Link } from "react-router-dom";

// Sample data, replace this with actual data from the backend
const flights = [
  { startTime: '7:00 AM', endTime: '4:15 PM', stops: '1 stop', layover: '2h 45m in HNL', price: 624, airline: 'Hawaiian Airlines', flightCode: 'HA123' },
  { startTime: '7:35 AM', endTime: '12:15 PM', stops: '1 stop', layover: '50m in HKG', price: 663, airline: 'Japan Airlines', flightCode: 'JA456' },
  { startTime: '8:00 AM', endTime: '2:45 PM', stops: 'Non-stop', layover: '', price: 712, airline: 'Delta Airlines', flightCode: 'DL789' },
  { startTime: '9:15 AM', endTime: '6:00 PM', stops: '1 stop', layover: '1h 30m in LAX', price: 530, airline: 'American Airlines', flightCode: 'AA012' },
  { startTime: '10:30 AM', endTime: '8:20 PM', stops: '2 stops', layover: '1h in ORD, 2h in JFK', price: 850, airline: 'United Airlines', flightCode: 'UA345' },
  { startTime: '11:00 AM', endTime: '3:15 PM', stops: 'Non-stop', layover: '', price: 620, airline: 'Southwest Airlines', flightCode: 'SW678' },
  { startTime: '1:00 PM', endTime: '9:30 PM', stops: '1 stop', layover: '3h in SFO', price: 700, airline: 'Alaska Airlines', flightCode: 'AS910' },
  { startTime: '2:15 PM', endTime: '10:00 PM', stops: '1 stop', layover: '2h 15m in ATL', price: 690, airline: 'Spirit Airlines', flightCode: 'SA123' },
  { startTime: '3:00 PM', endTime: '7:45 PM', stops: 'Non-stop', layover: '', price: 580, airline: 'JetBlue', flightCode: 'JB456' },
  { startTime: '4:45 PM', endTime: '12:15 AM', stops: '1 stop', layover: '1h 30m in DFW', price: 665, airline: 'British Airways', flightCode: 'BA789' },
  { startTime: '6:00 PM', endTime: '6:00 AM', stops: '2 stops', layover: '2h in FRA, 3h in DXB', price: 900, airline: 'Lufthansa', flightCode: 'LH012' },
  { startTime: '8:00 PM', endTime: '8:00 AM', stops: '1 stop', layover: '2h in CDG', price: 850, airline: 'Air France', flightCode: 'AF345' },
  { startTime: '9:00 PM', endTime: '5:30 AM', stops: 'Non-stop', layover: '', price: 780, airline: 'Emirates', flightCode: 'EK678' },
  { startTime: '10:30 PM', endTime: '8:15 AM', stops: '1 stop', layover: '1h 45m in SIN', price: 770, airline: 'Singapore Airlines', flightCode: 'SQ910' }
];

const FlightTable = () => {
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <div className="p-16 mb-16  mt-[72px]">
      <div className="inner-flightable">
        <div className="flex justify-between  text-gray-600  mb-4">
          <p className="text-[18px]  text-gray-600 font-semibold">
            Choose a <span className="text-[#605DEC]">departing</span> flight
          </p>
          <Link to="/" className="text-[#605DEC] text-[17px] ">
            <i className="fa-solid fa-arrow-left mr-2"></i>Modify Search
          </Link>
        </div>
        <div className="flex justify-between items-start gap-5 w-full">
          <div className="container  p-3 w-[60%] rounded-[10px] border-[1px] border-[#e1e1ec]">
            <div className="flex flex-col space-y-4">
              {flights.map((flight, index) => (
                <FlightCard
                  key={index}
                  flight={flight}
                  onClick={setSelectedFlight}
                  isSelected={
                    selectedFlight &&
                    selectedFlight.flightCode === flight.flightCode
                  }
                />
              ))}
            </div>
          </div>

          {selectedFlight && (
            <FlightDetails
              flight={selectedFlight} 
              onClose={() => setSelectedFlight(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightTable;
