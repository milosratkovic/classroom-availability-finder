import { useState } from "react";

const getNextAvailableTime = (classroom, availableClassrooms, dayWeek) => {
  const times = availableClassrooms[classroom][dayWeek] || [];
  if (times.length === 0) {
    return "Available until tomorrow";
  }
  const currentTime = new Date().toTimeString().split(' ')[0];
  for (let time of times) {
    const [startTime, endTime] = time.split('-');
    if (currentTime < startTime) {
      return `Available until ${startTime}`;
    }
  }
  return "Available until tomorrow";
};

const SearchResults = ({ resultInfo, availableClassrooms }) => {
  const [searchTerm, setSearchTerm] = useState("");
  let [ResultCount, setResultCount] = useState("");

  return (
    <div className="scroll-div">
      <h2 className="available-text">Available Classrooms:</h2>
      <input
        type="Text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
          setResultCount(ResultCount);
        }}
      />
      <select name="Location" id="Location" defaultValue={""} onChange={(event) => {
        setSearchTerm(event.target.value);
        setResultCount(ResultCount);
      }}>
        <option value="">All</option>
        <option value="Burnaby">Burnaby</option>
        <option value="Harbour">Harbour Center</option>
        <option value="Surrey">Surrey</option>
      </select>
      <div className="scroll-list">
        {availableClassrooms.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((classroom, index) => {
          const availabilityMessage = getNextAvailableTime(classroom, availableClassrooms, new Date().getDay());
          return (
            <li key={index}>
              <a href="https://roomfinder.sfu.ca/apps/sfuroomfinder_web/" key={index.toString()}>
                {ResultCount = index + 1} - {classroom} - {availabilityMessage}
              </a>
            </li>
          );
        })}
      </div>
      <p className="centered"> Showing {ResultCount} search results {resultInfo} - {searchTerm}</p>
    </div>
  );
}

export default SearchResults;
