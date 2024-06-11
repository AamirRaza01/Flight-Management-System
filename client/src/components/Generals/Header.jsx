import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Additional logout logic here (e.g., API call, state cleanup)
  };


  return (
    <div className="fixed top-0 left-0 z-50 w-full ">
    <header className="flex justify-between items-center px-16 py-4 bg-white ">
      <div className="text-2xl font-bold text-[#605DEC]">Tripma</div>
      <nav className="space-x-6">
        {
          isLoggedIn ? (
            <div className="flex gap-3">
            <Link to="/" className="text-gray-600 hover:text-[#1513A0] ">Flights</Link>
            <a href="#" className="text-gray-600 hover:text-[#1513A0]">Hotels</a>
            <a href="#" className="text-gray-600 hover:text-[#1513A0]">Packages</a>
            <Link to="/my-bookings" className="text-gray-600 hover:text-[#1513A0] ">My Bookings</Link>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link to="/" className="text-gray-600 hover:text-[#1513A0] ">Flights</Link>
            <a href="#" className="text-gray-600 hover:text-[#1513A0]">Hotels</a>
            <a href="#" className="text-gray-600 hover:text-[#1513A0]">Packages</a>
            </div>
          )
        }
      </nav>
      <nav className="space-x-6  flex justify-between items-center">
      {isLoggedIn ? (
            <button onClick={handleLogout} className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded">Logout</button>
          ) : (
            <>
              <Link to = "/signin" onClick={() => setShowSignInModal(true)} className="text-gray-600 hover:text-[#1513A0]">Sign in</Link>
              <Link to = "/signup" onClick={() => setShowSignUpModal(true)} className="text-white bg-indigo-600 hover:bg-[#1513A0]  px-4 py-2 rounded">Sign up</Link>
            </>
          )}
      </nav>
    </header>
    </div>
  );
};

export default Header;
