import { useEffect, useState } from "react";
import getAvailability from './/util/getAvailability'
import indexToDay from './/util/indexToDay.js'
import getDayOfWeek from './/util/getDayOfWeek.js'
import formattedDay from './/util/formattedDay.js'
import addTime from './/util/addTime.js'
import SearchResults from "./SearchResults";
//import SearchResultsByLocation from "./SearchResultsByLocation";
// render time here instead of in home 


const QuickSearch = (today) => { //nuke "time"
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [submitCount, setSubmitCount] = useState(0);
  const [availableClassrooms, setAvailableClassrooms] = useState([]);

  
  const endDate = "2022-12-31"; // Last day the scraped data applies to 

  
  let currentDate = new Date();

  let inOneHour = addTime(1);
  

  let inTwoHours = addTime(2);
  let inFourHours = addTime(4);


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
    let dayofweek = getDayOfWeek(today.today)
         
            setDateSelected(today.today)
            setDayWeek(dayofweek)
            setDayWeekName(indexToDay(dayofweek))


          setStart(currentDate.toLocaleString('en-GB',{ hour: '2-digit', minute: '2-digit' }));
          console.log("Start")
          console.log(start)
          console.log(typeof start)

          setEnd(inOneHour);
          console.log("End")
          console.log(end)
          console.log(typeof start)

        
          console.log("DayWeek")
          console.log(dayWeek)
          console.log(typeof dayWeek)
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
      

      <h2 className = "study-text">Quick Search:</h2>
      
      
      <form className = "user-form" onSubmit = {handleSubmit}>
        
  
      
      
      <button id="oneHourSlotBtn"> 1 Hour Slot: <br></br><small> From {currentDate.toLocaleString('en-GB',{ hour: '2-digit', minute: '2-digit' })} to {inOneHour} </small></button>
      {/* <button id="twoHourSlotBtn"> 2 Hour Slot</button>
      <button id="fourHourSlotBtn"> 4 Hour Slot</button> */}
    
      
        

      </form>
  <center><iframe
  src="//ws-na.amazon-adsystem.com/widgets/cm?o=15&p=12&l=ur1&category=primestudent&banner=09T4RTRGDTMCPCMYJVR2&f=ifr&linkID=e1c605fe9f198762a1ff5a6ea07340b6&t=milos05-20&tracking_id=milos05-20"
  width="300"
  height="250"
  scrolling="no"
  border="0"
  marginWidth="0"
  style={{border: 'none'}}
  frameBorder="0"
  sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
/></center>

        <SearchResults resultInfo = {resultInfo} availableClassrooms = {availableClassrooms} />
        

  </div>}

  export default QuickSearch;
