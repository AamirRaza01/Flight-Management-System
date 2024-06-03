import React from 'react'

const places = [
    {
      img: '/places/maldives.png',
      tagline: 'Stay among the atolls in',
      location: 'Maldives',
      description : "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.",
      price: '$150/night',
    },
    {
      img: '/places/morocco.png',
      tagline: 'Experience the Ourika Valley in',
      location: 'Morocco',
      description : "Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.",
      price: '$150/night',
    },
    {
      img: '/places/mongolia.png',
      tagline: 'Live traditionally in',
      location: 'Mongolia',
      description : "Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.",
      price: '$150/night',
    },
    {
        img: '/places/maldives.png',
        tagline: 'Stay among the atolls in',
        location: 'Maldives',
        description : "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.",
        price: '$150/night',
      },
      {
        img: '/places/morocco.png',
        tagline: 'Experience the Ourika Valley in',
        location: 'Morocco',
        description : "Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.",
        price: '$150/night',
      },
    // Add more places here
  ];

const PlacesToStay = () => {
  return (
    <section className="px-16 py-10">
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-600 mb-6">
      Explore unique <span  className="text-[#22C3A6]">places to stay </span>
      </h2>
      <span className='text-gray-400 '>All<i className="fa-solid fa-arrow-right ml-[5px]"></i></span>
      </div>
      <div className="overflow-x-auto whitespace-nowrap no-scrollbar ">
        <div className="inline-flex space-x-6 py-2 px-1">
          {places.map((place, index) => (
            <div key={index} className="bg-white shadow-custom rounded-lg overflow-hidden w-80 inline-block">
              <img src={place.img} alt={place.location} className="w-full object-cover"/>
              <div className="p-5">
                <div className="text-md font-medium text-gray-600 flex gap-[5px]">
                   <h4 >{place.tagline}</h4>
                   <span className='text-[#22C3A6]'>{place.location}</span>
                </div>
                <p className="text-gray-400 text-[14px] text-wrap text-tighter">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default PlacesToStay