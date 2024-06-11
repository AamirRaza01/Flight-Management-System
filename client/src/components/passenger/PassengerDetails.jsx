import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PassengerDetails = () => {
  const navigate = useNavigate();

  const [passenger, setPassenger] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    phoneNumber: '',
    email: '',
    address: ''
  });

  const [emergencyContact, setEmergencyContact] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });

  const handleChange = (field, value) => {
    setPassenger({ ...passenger, [field]: value });
  };

  const handleEmergencyContactChange = (field, value) => {
    setEmergencyContact({ ...emergencyContact, [field]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the user is logged in
    const isAuthenticated = checkAuthenticationStatus();

    if (!isAuthenticated) {
      // Redirect to sign-in page if user is not logged in
      navigate('/signin');
      return;
    }

    try {
      // Send passenger and emergency contact details to backend
      const response = await axios.post('/api/processPayment', {
        passenger,
        emergencyContact
      });

      if (response.data.success) {
        // Navigate to confirmation page upon successful payment
        navigate('/confirmation');
      } else {
        console.error('Payment processing failed');
        // Optionally, show a message to the user about payment failure
      }
    } catch (error) {
      console.error('Error occurred while processing payment:', error);
      // Handle errors
    }
  };

  const checkAuthenticationStatus = () => {
    // Implement your authentication check logic here
    // Return true if the user is authenticated, false otherwise
    // Example: check if there's a token in local storage
    return localStorage.getItem('token') !== null;
  };

  return (
    <div className="mt-[72px] mb-16 p-16 w-full">
        <div className="passenger-title">
        <h1 className='text-[24px] text-indigo-600 font-bold mb-6 '>Passenger information</h1>
        <p className='text-gray-400 text-[18px] mb-10 w-[60%]'>Enter the required information for each traveler and be sure that it exactly
             matches the government-issued ID presented at the airport.</p>
        </div>
        <div className="passenger-container  flex justify-between items-start gap-5 ">
            <div className="passenger-form w-[60%]">
        <form onSubmit={handleSubmit} className="w-full  max-w-4xl p-6 border-[1px] border-[#e1e1ec] rounded-[10px] ">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Passenger Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">First Name*</label>
          <input
            type="text"
            value={passenger.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Middle Name</label>
          <input
            type="text"
            value={passenger.middleName}
            onChange={(e) => handleChange('middleName', e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-gray-700">Last Name*</label>
          <input
            type="text"
            value={passenger.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Date of Birth*</label>
          <input
            type="date"
            value={passenger.dob}
            onChange={(e) => handleChange('dob', e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number*</label>
          <input
            type="text"
            value={passenger.phoneNumber}
            onChange={(e) => handleChange('phoneNumber', e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email*</label>
          <input
            type="email"
            value={passenger.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            value={passenger.address}
            onChange={(e) => handleChange('address', e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-6 text-gray-700">Emergency Contact Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div>
          <label className="block text-gray-700">First Name*</label>
          <input
            type="text"
            value={emergencyContact.firstName}
            onChange={(e) => handleEmergencyContactChange('firstName', e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Last Name*</label>
          <input
            type="text"
            value={emergencyContact.lastName}
            onChange={(e) => handleEmergencyContactChange('lastName', e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number*</label>
          <input
            type="text"
            value={emergencyContact.phoneNumber}
            onChange={(e) => handleEmergencyContactChange('phoneNumber', e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email Address*</label>
          <input
            type="email"
            value={emergencyContact.email}
            onChange={(e) => handleEmergencyContactChange('email', e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
            required
          />
        </div>
      </div>

      <button type="submit" className="w-full px-4 py-2 bg-indigo-600 hover:bg-[#1513A0] text-white rounded mt-6"
      
      >
        Save and Continue
      </button>

    </form>
            </div>
            {/* <FlightDetails/> */}
        </div>
    </div>
    
  );
};

export default PassengerDetails;
