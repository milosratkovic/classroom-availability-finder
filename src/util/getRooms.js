function getRooms(start_time, end_time, dayNum){

  var json = require('../data/data_SFU.json'); 


const daysOfWeek = ["0", "1", "2", "3", "4"]


let day = daysOfWeek[dayNum - 1] 

function isOccupied(timeObject){
 
  
    function timeBetween(initial, final, startTime, endTime){ 
       
        if (initial < startTime && startTime < final){ 
            return true;
        }
        if (initial < endTime && endTime < final){ 
            return true;
        }
        if (startTime < initial && initial < endTime){ 
            return true;
        }
        if (startTime < final && final < endTime){ 
            return true;
        }
        if (startTime === initial && endTime === final){ 
            return true;
        }

        return false;
    }
    let timeList = timeObject[day];

    for (let i in timeList){
        let time = timeList[i]
        let initial = time.slice(0,5) 
        let final = time.slice(6, 12) 

        if (timeBetween(initial, final, start_time, end_time)){ 

            return true; 
        }
    }
    return false 
}

let availableClassrooms = [];

for (const [classroom, value] of Object.entries(json)){
    
    if (isOccupied(value) === false) {
        availableClassrooms.push(classroom)
    }
}

return availableClassrooms
}

export default getRooms;