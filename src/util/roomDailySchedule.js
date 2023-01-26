function roomDailySchedule(rooms, dayNum){
 console.log(rooms)

  var json = require('../data/data_SFU.json'); 
  let time_list = []


const daysOfWeek = ["0", "1", "2", "3", "4"]


let day = daysOfWeek[dayNum - 1] 

function getTimelist(timeObject){
 
  
    let timeList = timeObject[day];

 
    return timeList 
}


for (var j = 0; j < rooms.length; j++){
    for (const [classroom, value] of Object.entries(json)){
        if ( classroom === rooms[j]) {
            time_list.push(getTimelist(value))
            console.log(time_list)
    }
}

}

return time_list
}

export default roomDailySchedule;