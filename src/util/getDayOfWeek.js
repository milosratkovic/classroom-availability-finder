function getDayOfWeek(date){ 
const dayOfWeek = new Date(
Number(date.slice(0,4)), Number(date.slice(5,7)) - 1, Number(date.slice(8, 10)) 
).getDay()
return dayOfWeek
}

export default getDayOfWeek;