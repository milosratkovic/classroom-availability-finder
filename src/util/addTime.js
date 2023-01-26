function addTime(hoursToAdd){ 
let currentDate = new Date();

let newTime = new Date(currentDate);
newTime.setHours(currentDate.getHours()+hoursToAdd);
return newTime.toLocaleTimeString('en-GB',{ hour: '2-digit', minute: '2-digit' })

}

export default addTime; 