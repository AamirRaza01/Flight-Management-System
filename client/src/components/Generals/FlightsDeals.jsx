// src/components/FlightDeals.jsx
import React from 'react';

const deals = [
  {
    img: '/city images/shanghai.png',
    title: 'The Bund, Shanghai',
    location: 'China’s most international city',
    price: '$598',
  },
  {
    img: '/city images/sydney.png',
    title: 'Sydney Opera House, Sydney',
    location: 'Take a stroll along the famous harbor',
    price: '$981',
  },
  {
    img: '/city images/kyoto.png',
    title: 'Kōdai-ji Temple, Kyoto',
    location: 'Step back in time in the Gion district',
    price: '$633',
  },
  {
    img: '/city images/shanghai.png',
    title: 'The Bund, Shanghai',
    location: 'China’s most international city',
    price: '$598',
  },
  {
    img: '/city images/sydney.png',
    title: 'Sydney Opera House, Sydney',
    location: 'Take a stroll along the famous harbor',
    price: '$981',
  }
  // Add more deals here
];

const FlightDeals = () => {
  return (
    <section className="px-16 py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-600 mb-6">
          Find your next adventure with these <span  className="text-indigo-600">flight deals</span>
        </h2>
        <span className='text-gray-400 '>All<i className="fa-solid fa-arrow-right ml-[5px]"></i></span>
        </div>
        <div className="overflow-x-auto whitespace-nowrap no-scrollbar ">
          <div className="inline-flex space-x-6 py-2 px-1">
            {deals.map((deal, index) => (
              <div key={index} className="bg-white shadow-custom rounded-lg overflow-hidden w-80 inline-block">
                <img src={deal.img} alt={deal.title} className="w-full object-cover"/>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-600">{deal.title}</h3>
                  <p className="text-gray-400 text-[14px]">{deal.location}</p>
                  <p className="text-indigo-600 font-bold">{deal.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightDeals;
