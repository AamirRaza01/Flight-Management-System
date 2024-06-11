import React from 'react';

const Confirmation = () => {
  return (
    <div className="mt-[72px] p-16 mb-10">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded ">
      <div className="font-bold mb-2">Your flight has been booked successfully! </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Flight Summary</h2>
        <div className="flex justify-between items-center mb-2">
          <div>
            <span className="font-semibold">Flight Number:</span> TP123
          </div>
          <div>
            <span className="font-semibold">Date:</span> June 25, 2024
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div>
            <span className="font-semibold">Departure:</span> New York (JFK)
          </div>
          <div>
            <span className="font-semibold">Time:</span> 10:00 AM
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div>
            <span className="font-semibold">Destination:</span> Tokyo (NRT)
          </div>
          <div>
            <span className="font-semibold">Duration:</span> 12h 30m
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-semibold">Passengers:</span> 1 Adult, 0 Child, 0 Infant
          </div>
          <div>
            <span className="font-semibold">Class:</span> Economy
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Confirmation;
