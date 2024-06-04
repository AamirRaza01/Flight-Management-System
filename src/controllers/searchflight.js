import { asyncHandler } from "../utilities/asyncHandler.js";
import { Flight } from "../models/flights.model.js";
import { ApiResponse } from "../utilities/apiResponse.js";
import { ApiError } from "../utilities/apiError.js";

const Search = asyncHandler(async (req, res) => {
    let { from, to, date } = req.body;
   
    let d = new Date(date);
    const startOfDay = new Date(d.setHours(0, 0, 0, 0));
    
    let result = [];
    let current = [];
    let flightsTaken = [];
    
    function NotIn(arr, n) {
        for (let a of arr) {
            if (n === a) {
                return false;
            }
        }
        return true;
    }
    
    async function findFlight(fromCity, toCity, level,startOfDay, fly,currentc) {
        currentc.push(fromCity);
        console.log(currentc);
        const endOfDay = new Date(fly);
        endOfDay.setDate(endOfDay.getDate() + 1);
       
        let af = await Flight.find({
            departureCity: fromCity,
            departureDateTime: { $gte: startOfDay, $lt: endOfDay }
        });
       
        for (let a of af) {
           
            
            if (a.arrivalCity === toCity) {
                console.log(a.departureCity);
                currentc.push(a.arrivalCity);
                flightsTaken.push(a);
                result.push([...flightsTaken]);
                
                flightsTaken.pop();
                
                currentc.pop();
                
            }
 
            else if (level < 4 && NotIn(currentc, a.arrivalCity)) {
                flightsTaken.push(a);
                await findFlight(a.arrivalCity, toCity, level + 1, a.departureDateTime,a.departureDateTime,currentc);
            }
  
        }
        flightsTaken.pop();
        currentc.pop();
    }
    
    
    await findFlight(from, to, 0, startOfDay,startOfDay,current);
    console.log(result);
    if (!result.length) {
        res.send("no flights available");
    } else {
        res.send(result); 
    }
});

export { Search };
