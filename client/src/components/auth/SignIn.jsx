// SignIn.js
import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/world.png')"}}>
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 w-[30%]">
      <h1 className="text-2xl font-semibold mb-4">Sign in to Tripma</h1>
      <p className="text-gray-600 mb-6">Sign in using your email address below.</p>
      <form>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4 text-[16px] focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4 text-[16px] focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
          min="6"

        />
        <button
          type="submit"
          className="bg-[#605DEC] text-white py-2 px-4 rounded hover:bg-[#1513A0]"
        >
          Sign in
        </button>
      </form>
      <p className='mt-5 text-gray-500 text-center text-[15px]'>Dont have an account?
        <Link to="/signup" className='text-[#605DEC] hover:text-[#1513A0] font-semibold'> Create Account</Link>
      </p>
    </div>
    </div>
    
  );
};

export default SignIn;