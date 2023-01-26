import { useEffect, useState } from "react";
import getAvailability from './/util/getAvailability'
import indexToDay from './/util/indexToDay.js'
import getDayOfWeek from './/util/getDayOfWeek.js'
import formattedDay from './/util/formattedDay.js'

import SearchResults from "./SearchResults";
//import SearchResultsByLocation from "./SearchResultsByLocation";



const SearchByDate = (today) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [submitCount, setSubmitCount] = useState(0);
  const [availableClassrooms, setAvailableClassrooms] = useState([]);

  
  const endDate = "2023-04-11"; // Last day the scraped data applies to 

  
  let currentDate = new Date();
  let dayMonth = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear().toString();


  month = formattedDay(month);
  dayMonth = formattedDay(dayMonth);

  const [dateSelected, setDateSelected] = useState(year + "-" + month + "-" + dayMonth) 

  const [dayWeek, setDayWeek] = useState(getDayOfWeek(dateSelected)) 
  const [dayWeekName, setDayWeekName] = useState(indexToDay(dayWeek)) 
  const [resultInfo, setResultInfo] = useState(""); 

function searchResultsMessage(dayOfWeek, dateSelected, start, end){
return ` for ${dayOfWeek} ${dateSelected} from ${start} to ${end}`

}; 



  useEffect(() => {
     console.log("Start")
          console.log(start)

          console.log("End")
          console.log(end)

          console.log("DayWeek")
          console.log(dayWeek)
    if (submitCount !== 0) {
      if (dayWeek !== 0 && dayWeek !== 6) {
          setAvailableClassrooms(getAvailability(start, end, dayWeek))
      }
      else{
        setAvailableClassrooms(["Classrooms may be locked on weekends"])
      }
    }
  }, [submitCount])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitCount(prev => prev + 1)
    setResultInfo(searchResultsMessage(dayWeekName, dateSelected, start, end))
  }


  return <div className="Search-by-date">
      
      <h2 className = "study-text">Search By Date:</h2>
      
      
      <form className = "user-form" onSubmit = {handleSubmit}>
        
        <p>On: </p>
        <input type = "date" value = {dateSelected} min = {today} max = {endDate} required
        onChange = {
          e => {
            let dayofweek = getDayOfWeek(e.target.value)
            
            setDateSelected(e.target.value)
            setDayWeek(dayofweek)
            setDayWeekName(indexToDay(dayofweek))

          }
        }></input>
        
        <p>from</p>

        <input className = "start" type = "time" max = {end === "" ? "": `${end}`} required
        onChange = {
          e => setStart(e.target.value)
          
        }></input>
        
        
        <p>to</p>
        
        <input className = "end" type = "time"  min = {start === "" ? "" : `${start}`} required
        onChange = {
          e => setEnd(e.target.value)
        }></input>
        
        
        <button>Search</button>


        
        
        

      </form>
        <SearchResults resultInfo = {resultInfo} availableClassrooms = {availableClassrooms} />
        

  </div>}

  export default SearchByDate;