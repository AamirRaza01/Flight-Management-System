import React from 'react';

const users = [
  {
    id: 1,
    name: 'Yifei Chen',
    img : "https://imgs.search.brave.com/JZFk4tAEU77lvcepLgB7ZPA5CM2ntWKaztFgSmoh7po/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODk1NTE2/NzA5MDItMTliNDQx/YTZhZmRlP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVRkOGZISmhibVJ2/YlNVeU1IQmxiM0Jz/Wlh4bGJud3dmSHd3/Zkh4OE1BPT0.jpeg",
    location: 'Seoul, South Korea',
    date: 'April 2019',
    review:
      'What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me',
  },
  {
    id: 2,
    name: 'Kaori Yamaguchi',
    img : "https://imgs.search.brave.com/vGlogDFfdUFH8ze8Vj_cI1xk9faqkJaKxPeUk3AbYM8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MTcyNTY2NzM2NDQt/MzZhZDExMjQ2ZDIx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRKOGZI/Qmxjbk52Ym1GOFpX/NThNSHg4TUh4OGZE/QT0.jpeg",
    location: 'Honolulu, Hawaii',
    date: 'February 2017',
    review:
      "My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommened to us by a long time friend, and I’m so glad we tried it out! The process was easy and ",
  },
  {
    id: 3,
    name: 'Anthony Lewis',
    img : "https://imgs.search.brave.com/MTHAvWlXyiH5vCm-JvJzwSVa5_xmyZlJ6h_pq3tyFdc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MDA2NDg3Njc3OTEt/MDBkY2M5OTRhNDNl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tkh4OGNH/VnljMjl1WVh4bGJu/d3dmSHd3Zkh4OE1B/PT0.jpeg",
    location: 'Berlin, Germany',
    date: 'April 2019',
    review:
      'When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I’d give it a try. It was my first time using Tripma, but I’d definitely recommend it to a friend and use it for ',
  },
];

const Testimonial = () => {
  return (
    <div className="bg-white mb-16 px-16 py-10">
      <h3 className="text-[24px] text-gray-600 text-center font-bold mb-[24px]">What <span className='text-[#605DEC]'>Tripma</span> users are saying</h3>
      <div className="testimonial-container flex gap-[56px]">
      {users.map((user) => (
        <div key={user.id} className="flex gap-[10px] justify-between items-start p-4 ">
          <div className=" w-[150px] h-[40px] rounded-[50%]">
            <img
              src={user.img} // Placeholder image URL (replace with actual profile images)
              alt={user.name}
              className="w-full h-full object-cover rounded-[50%] "
            />
          </div>
          <div className="flex-grow">
            <p className="text-gray-600 mb-1 font-semibold">{user.name}</p>
            <p className="text-gray-600 text-sm mb-2">
              {user.location} | {user.date}
            </p>
            <p className="text-gray-900 ">{user.review} <i className="fa-solid fa-arrow-right ml-[5px] text-[#605DEC]"></i></p>
          </div>
        </div>
       
      ))}
       </div>
    </div>
  );
};

export default Testimonial;
