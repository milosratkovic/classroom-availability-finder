import {useState } from "react";

const SearchResultsByLocation = ({resultInfo,availableClassrooms}) => { 
    const [searchTerm, setSearchTerm] = useState("");
    const [ResultCount, setResultCount] = useState("");
  
    return (

       <div className = "scroll-div">

        <h2 className = "available-text">Available Classrooms:</h2>
        <p>Showing search results for {resultInfo}</p>
        
       
       <label for="Location">Filter by Location: </label>
        <select name="Location" id="Location" onChange={(event) => { 
                setSearchTerm(event.target.value);
                console.log("Event")   
            }}>
        <option value=" " >All</option>
        <option value="burnaby" selected>Burnaby</option>
        <option value="harbour">Harbour Center</option>
        <option value="surrey" >Surrey</option>
         
        </select>

        <div className = "scroll-list">
          {availableClassrooms.filter((val)=>{ 
            if (searchTerm == "" ){
            return val
            }
            else if (val.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
            }
          }).map((classroom, index) => {
            

          return (
            
          <li key = {index.toString()}>  {classroom} </li>)
           
           })}
          </div>
    
       
      <p className = "centered"> {availableClassrooms.length} results</p>

        
       


      </div>

    );

}

export default SearchResultsByLocation;


