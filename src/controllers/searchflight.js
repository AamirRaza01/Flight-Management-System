import { asyncHandler } from "../utilities/asyncHandler.js";
import { Flight } from "../models/flights.model.js";
import { ApiResponse } from "../utilities/apiResponse.js";
import { ApiError } from "../utilities/apiError.js";

const Search = asyncHandler(async (req, res) => {
    let { from, to, date } = req.body;
    console.log(req.body);
    let d = new Date(date);
    const startOfDay = new Date(d.setHours(0, 0, 0, 0));
    
    let result = [];
    let current = [];
    
    function NotIn(arr, n) {
        for (let a of arr) {
            if (n === a) {
                return false;
            }
        }
        return true;
    }
    
    async function findFlight(fromCity, toCity, level,startOfDay, fly) {
        current.push(fromCity);
        
        const endOfDay = new Date(fly);
        endOfDay.setDate(endOfDay.getDate() + 1);
       console.log(startOfDay);
       console.log(endOfDay);
       let af = await Flight.find({
            departureCity: fromCity,
            departureDateTime: { $gte: startOfDay, $lt: endOfDay }
        });
        
        for (let a of af) {
            console.log("hello");
            console.log(level);
            console.log(result);
            console.log(current);
            if (a.arrivalCity === toCity) {
                current.push(a.arrivalCity);
                console.log(current);
                result.push([...current]);
                console.log("pushed in result");
                current.pop();
                current.pop();
                return;
            }
    
            if (level < 4 && NotIn(current, a.arrivalCity)) {
                await findFlight(a.arrivalCity, toCity, level + 1, a.departureDateTime,a.departureDateTime);
            }
        }
        current.pop();
    }
    
    console.log(from, to);
    await findFlight(from, to, 0, startOfDay,startOfDay);
    console.log(result);
    if (!result.length) {
        res.send("no flights available");
    } else {
        res.send(result); 
    }
});

export { Search };
