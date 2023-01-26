function formattedDay(num){ // ex) 8:00 ---> 08:00
if (num < 10){
return "0" + num.toString();
}
else {
return num.toString()
}
}

export default formattedDay; 