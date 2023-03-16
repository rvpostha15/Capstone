import { useState } from "react";
import Deck from "./Deck";
import Student from "./Student";

function NewAssignment({ decks, students }) {

    const [showForm, setShowForm] = useState(false)
    const [deckAssigned, setDeckAssigned] = useState(false)
    const [studentAssigned, setStudentAssigned] = useState(false)
    
    

    const deck = decks.map((deck) => (

        <button className="minty-button">
            <Deck
                key = {deck.id}
                deck = {deck}
            />
        </button>
    ))

    const student = students.map((student) =>(
        <button className="minty-button">
            <Student
                key={student.id}
                student={student}
            />
        </button>
    ))
    
    const toggleForm = () => {
        setShowForm(!showForm)
        setDeckAssigned(false)
        setStudentAssigned(false)
    }

    const toggleDeckAssigned = () => {
        setDeckAssigned(true)
    }

    const toggleStudentAssigned = () => {
        setStudentAssigned(true)
    }

    const submitAssignment = () => {
        setShowForm(false)
        setDeckAssigned(false)
        setStudentAssigned(false)
        alert("submitted!")
    }
    return(
        <>
            <button onClick={toggleForm} className="minty-button">Create Assignment</button>
            {showForm ? (
                <>
                    <div>Select a deck to assign</div>
                    <div onClick={toggleDeckAssigned}>{deck}</div>
                    {deckAssigned ? (
                        <div onClick={toggleStudentAssigned}>{student}</div>
                    ) : (
                        null
                    )}
                    <button onClick={toggleForm}className="minty-delete-button">Cancel</button>
                    {studentAssigned ? (
                        <button className="minty-button" onClick={submitAssignment}>Confirm Create Assignment</button>
                    ) : (
                        null
                    )}
                </>
            ) : ( 
                null
            )}
        </>
    )
}

export default NewAssignment;