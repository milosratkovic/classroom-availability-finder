import {useState, useEffect } from "react";
//Rename the function since searchResults.js is a utility function ... or rename the utility 
const SearchResults = ({resultInfo,availableClassrooms}) => { 
    const [searchTerm, setSearchTerm] = useState("");
    let [ResultCount, setResultCount] = useState("");
    

 
    return (

       <div className = "scroll-div">

        <h2 className = "available-text">Available Classrooms:</h2>
        <iframe src="//ws-na.amazon-adsystem.com/widgets/cm?o=15&p=14&l=ur1&category=amazonhomepage&f=ifr&linkID=afd762081d593cc8d1105cd526928bb5&t=milos05-20&tracking_id=milos05-20" width="160" height="600" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
        
        
      


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
          
            
          <li> <a href= "https://roomfinder.sfu.ca/apps/sfuroomfinder_web/" key = {index.toString()}> {ResultCount = index+1} -  {classroom} </a>  </li>
          
       
          )
           
           })}
           
        
           
           
          </div>
    
          
           
      <p className = "centered" > Showing {ResultCount} search results {resultInfo} - {searchTerm}</p>

        
       


      </div>

    );

}

export default SearchResults;


