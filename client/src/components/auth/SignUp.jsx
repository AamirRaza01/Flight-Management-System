// SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="w-full relative" >
      <div className="signup-banner w-full h-[230px]  bg-cover bg-center bg-no-repeat" style={{backgroundImage : "url('/Map2.png')"}}></div> 
      <div className="bg-white rounded-lg shadow-md p-6 mb-10 absolute top-[160px] left-[50%] translate-x-[-50%] w-[30%]">
      <h1 className="text-2xl text-gary-600 font-semibold mb-4">Sign up for Tripma</h1>
      <p className="text-gray-600 mb-6">
        Sign up using some easy steps below to get started.
      </p>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded mb-4 text-[16px] focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent "
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mb-4 text-[16px] focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent placeholder:text-[16px]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4 text-[16px] focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4 text-[16px] focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full p-2 border rounded mb-4 text-[16px] focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
        />
        <div className="mb-4">
          <input type="checkbox" id="termsAndConditions" className="mr-2" />
          <label htmlFor="termsAndConditions" className="text-gray-600">
            I agree to the terms and conditions
          </label>
        </div>
        
        <button
          type="submit"
          className="bg-[#605DEC] text-white py-2 px-4 rounded hover:bg-[#1513A0]"
        >
          Create account
        </button>
      </form>
      <p className='mt-5 text-gray-500 text-center text-[15px]'>Already have an account?
        <Link to="/signin" className='text-[#605DEC] hover:text-[#1513A0] font-semibold'> Login</Link>
      `</p>
      </div>
    </div>
  );
};

export default SignUp;
