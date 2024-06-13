import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white px-16 py-8 text-sm bottom-0 w-full">
      <div className="flex justify-between mb-4">
        <div className="font-bold text-3xl text-indigo-600 ">
            <h5 className=''>Tripma</h5>
        </div>
        <div className="flex flex-col space-y-2">
          <h5 className="font-semibold text-[#6E7491] text-[18px]">About</h5>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">About Tripma</a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">How it works</a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">careers</a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Press</a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Documentation</a>
        </div>
        <div className="flex flex-col space-y-2">
          <h5 className="font-semibold text-[#6E7491] text-[18px]">Partner with us</h5>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Partnership programme</a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Connective partner</a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Affiliate Programme</a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Integrations</a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Community</a>
        </div>
        <div className="flex flex-col space-y-2">
          <h5 className="font-semibold text-[#6E7491] text-[18px]">Support</h5>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Health center</a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Contact us</a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Privacy policy</a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Terms and Conditions</a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Trust and safety</a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Accessibility</a>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-2">
          <h5 className="font-semibold text-[#6E7491] text-[18px]">Get the app</h5>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Tripma for android </a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Tripma for ios</a>
          <a href="#" className="text-[#7C8DB0] hover:text-[#6E7491] text-[16px] font-normal">Mobile site</a>
          </div>
          <div className="flex flex-col space-y-2">
          <h5 className="font-semibold text-[#6E7491] text-[18px]">Admin</h5>
          <Link to = "/admin" className="text-[#6f82a8] hover:text-[#6E7491] text-[16px] font-normal">Admin Login</Link>
          </div>
        </div>
      </div>
    <hr className='b' />
      <div className="social flex justify-between items-center w-full   mt-3">
        <div className=" flex gap-3 text text-[#7C8DB0] text-[16px] ">
            <a href="#" className='hover:text-[#6E7491]'>Twitter</a>
            <a href="#" className='hover:text-[#6E7491]'>Instagram</a>
            <a href="#" className='hover:text-[#6E7491]'>Facebook</a>
        </div>
      <div className="text-center text-[#6E7491] text-[16px]">
        © 2020 Tripma incorporated
      </div>
      </div>
    </footer>
  );
};

export default Footer;
