import React, { useState } from "react";


function FinalGradeCalculator() {
  const [assignments, setAssignments] = useState([]);
  const [grade, setGrade] = useState(0);
  const [targetGrade, setTargetGrade] = useState(0);
  const [requiredGrade, setRequiredGrade] = useState(0);

  const handleAddAssignment = () => {
    setAssignments([...assignments, { grade: 0, weight: 0 }]);
  };

  const handleRemoveAssignment = (index) => {
    const newAssignments = [...assignments];
    newAssignments.splice(index, 1);
    setAssignments(newAssignments);
  };

  const handleGradeChange = (index, value) => {
    const newAssignments = [...assignments];
    newAssignments[index].grade = parseFloat(value);
    setAssignments(newAssignments);
  };

  const handleWeightChange = (index, value) => {
    const newAssignments = [...assignments];
    newAssignments[index].weight = parseFloat(value);
    setAssignments(newAssignments);
  };

  const 
  = () => {
    const totalWeight = assignments.reduce((acc, curr) => acc + curr.weight, 0);
    const weightedGrades = assignments.reduce((acc, curr) => acc + curr.grade * (curr.weight / totalWeight), 0);
    setGrade(weightedGrades);
  };

  const handleTargetGradeChange = (e) => {
    setTargetGrade(parseFloat(e.target.value));
  };

  const calculateRequiredGrade = () => {
    const totalWeight = assignments.reduce((acc, curr) => acc + curr.weight, 0);
    const remainingWeight = 100 - totalWeight;
    const remainingWeightGrade = (targetGrade - (grade * (totalWeight / 100))) / (remainingWeight / 100);
    setRequiredGrade(remainingWeightGrade);
  };

  return (
    <div>
      <h1>Final Grade Calculator</h1>
      <p>Enter your assignment grades and weights below to calculate your final grade. Use the "Add Assignment" button to add more assignments. Once you have entered all of your assignments, click the "Calculate Grade" button to see your current final grade. To find out what grade you need on the remaining weight of the course to achieve a certain final grade, enter your target grade below and click the "Calculate Required Grade" button.</p>
      <button onClick={handleAddAssignment}>Add Assignment</button>
      <br />
      <br />
      {assignments.map((assignment, index) => (
        <div key={index}>
          <label htmlFor={`grade-${index}`}><small>Assignment Grade:</small></label>
          <input type="number" id={`grade-${index}`} value={assignment.grade} onChange={(e) => handleGradeChange(index, e.target.value)} />
          %&nbsp;
          <br></br> 
         <label htmlFor={`weight-${index}`}><small>Assignment Weight:</small></label>
          <input type="number" id={`weight-${index}`} value={assignment.weight} onChange={(e) => handleWeightChange(index, e.target.value)} />
          %&nbsp;
          <button onClick={() => handleRemoveAssignment(index)}>Remove</button>
          <br />
        </div>
      ))}
      <br />
      <button onClick={calculateGrade}>Calculate Grade</button>
      <h2>Final Grade: {grade.toFixed(2)} %</h2>
      <br />
      <label htmlFor="target-grade">Target Grade:</label>
      <input type="number" id="target-grade" value={targetGrade} onChange={handleTargetGradeChange} />
      <button onClick={calculateRequiredGrade}>Calculate Required Grade</button>
      <h2>Required Grade: {requiredGrade.toFixed(2)} %</h2>
    </div>
  );
}

export default FinalGradeCalculator;
