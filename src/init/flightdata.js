const sampleFlights = [
    {
        airline: "Air India",
        flightNumber: "AI101",
        departureCity: "Delhi",
        departureAirport: "DEL",
        arrivalCity: "Mumbai",
        arrivalAirport: "BOM",
        departureDateTime: "2024-05-31T08:00:00Z",
        arrivalDateTime: "2024-05-31T10:00:00Z",
        price: 5000,
        seatsAvailable: 120
    },
    {
        airline: "IndiGo",
        flightNumber: "6E202",
        departureCity: "Mumbai",
        departureAirport: "BOM",
        arrivalCity: "Bangalore",
        arrivalAirport: "BLR",
        departureDateTime: "2024-05-31T09:00:00Z",
        arrivalDateTime: "2024-05-31T11:30:00Z",
        price: 4500,
        seatsAvailable: 150
    },
    {
        airline: "SpiceJet",
        flightNumber: "SG303",
        departureCity: "Bangalore",
        departureAirport: "BLR",
        arrivalCity: "Chennai",
        arrivalAirport: "MAA",
        departureDateTime: "2024-05-31T10:00:00Z",
        arrivalDateTime: "2024-05-31T11:00:00Z",
        price: 3500,
        seatsAvailable: 100
    },
    {
        airline: "Vistara",
        flightNumber: "UK404",
        departureCity: "Chennai",
        departureAirport: "MAA",
        arrivalCity: "Kolkata",
        arrivalAirport: "CCU",
        departureDateTime: "2024-05-31T11:00:00Z",
        arrivalDateTime: "2024-05-31T13:00:00Z",
        price: 4000,
        seatsAvailable: 90
    },
    {
        airline: "GoAir",
        flightNumber: "G80505",
        departureCity: "Kolkata",
        departureAirport: "CCU",
        arrivalCity: "Hyderabad",
        arrivalAirport: "HYD",
        departureDateTime: "2024-05-31T12:00:00Z",
        arrivalDateTime: "2024-05-31T14:30:00Z",
        price: 4200,
        seatsAvailable: 80
    },
    {
        airline: "AirAsia India",
        flightNumber: "I50606",
        departureCity: "Hyderabad",
        departureAirport: "HYD",
        arrivalCity: "Pune",
        arrivalAirport: "PNQ",
        departureDateTime: "2024-05-31T13:00:00Z",
        arrivalDateTime: "2024-05-31T14:30:00Z",
        price: 3800,
        seatsAvailable: 100
    },
    {
        airline: "Air India",
        flightNumber: "AI107",
        departureCity: "Pune",
        departureAirport: "PNQ",
        arrivalCity: "Guwahati",
        arrivalAirport: "GU" ,
        departureDateTime: "2024-05-31T13:00:00Z",
        arrivalDateTime: "2024-05-31T14:30:00Z",
        price: 3800,
        seatsAvailable: 100
    },
    {
        airline: "Air India",
        flightNumber: "AI107",
        departureCity: "Guwahati",
        departureAirport: "GU" ,
        arrivalCity: "Pune",
        arrivalAirport: "PNQ",
        departureDateTime: "2024-05-31T13:00:00Z",
        arrivalDateTime: "2024-05-31T14:30:00Z",
        price: 3800,
        seatsAvailable: 100
    },
    
        {
            airline: "Air India",
            flightNumber: "AI101",
            departureCity: "Mumbai",
            departureAirport: "BOM",
            arrivalCity: "Delhi",
            arrivalAirport: "DEL",
            departureDateTime: "2024-05-31T08:00:00Z",
            arrivalDateTime: "2024-05-31T10:00:00Z",
            price: 5000,
            seatsAvailable: 120
        },
        {
            airline: "IndiGo",
            flightNumber: "6E202",
            departureCity: "Delhi",
            departureAirport: "DEL",
            arrivalCity: "Bengaluru",
            arrivalAirport: "BLR",
            departureDateTime: "2024-05-31T09:00:00Z",
            arrivalDateTime: "2024-05-31T11:30:00Z",
            price: 4500,
            seatsAvailable: 150
        },
        {
            airline: "SpiceJet",
            flightNumber: "SG303",
            departureCity: "Bengaluru",
            departureAirport: "BLR",
            arrivalCity: "Kolkata",
            arrivalAirport: "CCU",
            departureDateTime: "2024-05-31T10:00:00Z",
            arrivalDateTime: "2024-05-31T12:30:00Z",
            price: 5500,
            seatsAvailable: 100
        },
        {
            airline: "GoAir",
            flightNumber: "G8404",
            departureCity: "Kolkata",
            departureAirport: "CCU",
            arrivalCity: "Chennai",
            arrivalAirport: "MAA",
            departureDateTime: "2024-05-31T11:00:00Z",
            arrivalDateTime: "2024-05-31T13:30:00Z",
            price: 4000,
            seatsAvailable: 90
        },
        {
            airline: "Vistara",
            flightNumber: "UK505",
            departureCity: "Chennai",
            departureAirport: "MAA",
            arrivalCity: "Hyderabad",
            arrivalAirport: "HYD",
            departureDateTime: "2024-05-31T12:00:00Z",
            arrivalDateTime: "2024-05-31T13:30:00Z",
            price: 3500,
            seatsAvailable: 80
        },
        {
            airline: "AirAsia India",
            flightNumber: "I506",
            departureCity: "Hyderabad",
            departureAirport: "HYD",
            arrivalCity: "Pune",
            arrivalAirport: "PNQ",
            departureDateTime: "2024-05-31T13:00:00Z",
            arrivalDateTime: "2024-05-31T13:30:00Z",
            price: 3500,
            seatsAvailable: 80
        },
        
            {
                airline: "Air India",
                flightNumber: "AI126",
                departureCity: "Mumbai",
                departureAirport: "BOM",
                arrivalCity: "Delhi",
                arrivalAirport: "DEL",
                departureDateTime: "2024-06-01T08:00:00Z",
                arrivalDateTime: "2024-06-01T10:00:00Z",
                price: 5000,
                seatsAvailable: 120
            },
            {
                airline: "IndiGo",
                flightNumber: "6E209",
                departureCity: "Delhi",
                departureAirport: "DEL",
                arrivalCity: "Bengaluru",
                arrivalAirport: "BLR",
                departureDateTime: "2024-06-01T09:00:00Z",
                arrivalDateTime: "2024-06-01T11:30:00Z",
                price: 4500,
                seatsAvailable: 150
            },
            {
                airline: "SpiceJet",
                flightNumber: "SG310",
                departureCity: "Bengaluru",
                departureAirport: "BLR",
                arrivalCity: "Kolkata",
                arrivalAirport: "CCU",
                departureDateTime: "2024-06-01T10:00:00Z",
                arrivalDateTime: "2024-06-01T12:30:00Z",
                price: 5500,
                seatsAvailable: 50
            },
            {
                airline: "SpiceJe",
                flightNumber: "SG312",
                departureCity: "Bengaluru",
                departureAirport: "BLR-KAR",
                arrivalCity: "Kolkata",
                arrivalAirport: "CCU-WB",
                departureDateTime: "2024-06-01T10:00:00Z",
                arrivalDateTime: "2024-06-01T12:30:00Z",
                price: 5500,
                seatsAvailable: 50
            }
            
]

export const sFlights = sampleFlights;
