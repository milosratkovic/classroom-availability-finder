import {useState, useEffect } from "react";
//Rename the function since searchResults.js is a utility function ... or rename the utility 
const SearchResults = ({resultInfo,availableClassrooms}) => { 
    const [searchTerm, setSearchTerm] = useState("");
    let [ResultCount, setResultCount] = useState("");
    

 
    return (

       <div className = "scroll-div">

        <h2 className = "available-text">Available Classrooms:</h2>
        
        
      


        <input 
            type ="Text"
            placeholder= "Search..."
            onChange={(event) => { 
                setSearchTerm(event.target.value);
                setResultCount(ResultCount)
                
            }}
            />
            
            <select name="Location" id="Location" defaultValue={""} onChange={(event) => { 
                setSearchTerm(event.target.value);
                setResultCount(ResultCount)
  
            }}>
        <option value="" >All</option>
        <option value="Burnaby">Burnaby</option>
        <option value="Harbour">Harbour Center</option>
        <option value="Surrey" >Surrey</option>
         
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
            
          <li> <a href= {classroom} key = {index.toString()}> {ResultCount = index+1} -  {classroom}</a>   </li>
          
          
          )
           
           })}
           
        
           
           
          </div>
    
          
           
      <p className = "centered" > Showing {ResultCount} search results {resultInfo} - {searchTerm}</p>

        
       


      </div>

    );

}

export default SearchResults;


