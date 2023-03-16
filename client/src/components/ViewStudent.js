import React from 'react';
import Assignment from './Assignment';
import '../css/ViewDeck.css';
import { useSelector } from 'react-redux';

function ViewStudent() {
  const currentStudent = useSelector((state) => state.student.currentStudent);
  console.log(currentStudent)

  if (!currentStudent) {
    return <div>No student selected.</div>;
  }
  
  const { first_name, last_name, assignments } = currentStudent;

  const assignmentList = assignments && assignments.map((assignment) => (
    <Assignment key={assignment.id} assignment={assignment} />
  ));

  return (
    <div className="view-deck-container">
      <div className="title">{first_name} {last_name}</div>
      {assignments && assignments.length === 0 ? (
        <div>No assignments</div>
      ) : (
        assignmentList
      )}
    </div>
  );
}

export default ViewStudent;
