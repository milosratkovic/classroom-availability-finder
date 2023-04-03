import { useEffect, useState } from "react";
import formattedDay from './/util/formattedDay.js'
import QuickSearch from "./QuickSearch.js";
import SearchByDate from "./SearchByDate";
import SearchByRoom from "./SearchByRoom"
import BlogPost from "./BlogPost"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


const Home= () => {
  const [time, setTime] = useState((new Date()).toLocaleTimeString());
  

  
  let currentDate = new Date();
  let dayMonth = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear().toString();


  month = formattedDay(month);
  dayMonth = formattedDay(dayMonth);

  const [today, setToday] = useState(year + "-" + month + "-" + dayMonth)




  // useEffect(() => {
  //     setTimeout(() => {
  //         setTime((new Date()).toLocaleTimeString())
  //     }, 1000)
  // }, [time])

  // useEffect(() => {
  //   setToday(year + "-" + month + "-" + dayMonth)
  // }, [dayMonth])



  return (
    <Router>
  <main>

      <h1 className = "title">Simon Fraser University Classroom Finder</h1>
      

      
      <Switch> 
      <Route exact path="/"><SearchByDate today = {today} time = {time}/>
      </Route>

   
        <Route exact path="/SearchByRoom"><SearchByRoom/>
        </Route>
    
        <Route exact path="/QuickSearch"><QuickSearch today = {today}  />
        </Route>

        <Route exact path="/BlogPost"><BlogPost/>
        </Route>
      </Switch>
      
      
     
     
    
     
  </main>
  </Router>)
  }

  export default Home;
