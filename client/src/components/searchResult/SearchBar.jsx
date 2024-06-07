import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <div className="">
        <form onSubmit={handleSubmit} className="">
        <div className="flex justify-between gap-1 mb-4 w-full">
        <DropdownComponent 
          label="Departure" 
          value={departure} 
          onChange={setDeparture} 
          options={filteredDepartureOptions}
          placeholder="From where?" 
        />
        <DropdownComponent 
          label="Arrival" 
          value={arrival} 
          onChange={setArrival} 
          options={filteredArrivalOptions}
          placeholder="Where to?" 
        />
        <DatePickerComponent 
          label="Departure Date" 
          value={departureDate} 
          onChange={setDepartureDate} 
        />
        <NumberInputComponent 
          label="Adults" 
          value={adults} 
          onChange={setAdults} 
        />
        </div>
        <Link to = "/search" type="submit" className=" bg-indigo-600 text-white px-8 hover:bg-[#1513A0]  py-2 rounded">
          Modify Search
        </Link>
        
      </form>
        </div>
    </div>
  )
}

export default SearchBar