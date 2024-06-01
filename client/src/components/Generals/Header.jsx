import React, { useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Additional logout logic here (e.g., API call, state cleanup)
  };


  return (
    <header className="flex justify-between items-center px-16 py-5 bg-white shadow">
      <div className="text-2xl font-bold text-[#605DEC]">Tripma</div>
      <nav className="space-x-6">
        <a href="#" className="text-gray-600 hover:text-indigo-600">Flights</a>
        <a href="#" className="text-gray-600 hover:text-[#605DEC]">Hotels</a>
        <a href="#" className="text-gray-600 hover:text-[#605DEC]">Packages</a>
      </nav>
      <nav className="space-x-6  flex justify-between items-center">
      {isLoggedIn ? (
            <button onClick={handleLogout} className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded">Logout</button>
          ) : (
            <>
              <button onClick={() => setShowSignInModal(true)} className="text-gray-600 hover:text-indigo-600">Sign in</button>
              <button onClick={() => setShowSignUpModal(true)} className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded">Sign up</button>
            </>
          )}
      </nav>
    </header>
  );
};

export default Header;
