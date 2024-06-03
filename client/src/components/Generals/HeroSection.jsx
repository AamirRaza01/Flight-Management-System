import React from 'react'
import SearchComponent from '../search/SearchComponent'

function HeroSection() {
  return (
    <main className='w-full h-screen mt-[72px] bg-contain bg-center bg-no-repeat flex justify-center items-center relative'  style={{ backgroundImage: "url('/world.png')",}}>
        <div className="tagline absolute top-[15%]">
            <h1 className='font-custom text-[70px] text-center leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#605DEC] to-blue-700'>It's more than <br /> just a trip</h1>
        </div>
        <div className="w-[80%] h-[100px] border-2 border-red-200">
          <SearchComponent/>
          
        </div>  

    </main>
  )
}

export default HeroSection