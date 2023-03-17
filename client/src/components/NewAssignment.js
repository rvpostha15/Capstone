import { useState } from "react";
import Deck from "./Deck";
import Student from "./Student";

function NewAssignment({ decks, students }) {

    const [showForm, setShowForm] = useState(false)
    const [deckAssigned, setDeckAssigned] = useState(false)
    const [studentAssigned, setStudentAssigned] = useState(false)
    
    const toggleForm = () => {
        setShowForm(!showForm)
        setDeckAssigned(false)
        setStudentAssigned(false)
    }

    const toggleDeckAssigned = (deck) => {
        setDeckAssigned(true);
        console.log("deck:", deck);
    };

    const toggleStudentAssigned = (student) => {
        setStudentAssigned(true);
        console.log("student:", student);
    };

    const submitAssignment = () => {
        setShowForm(false);
        setDeckAssigned(false);
        setStudentAssigned(false);
        console.log("submitted!");
    };

    return (
    <>
        <button onClick={toggleForm} className="minty-button">
        Create Assignment
        </button>
        {showForm ? (
        <>
            <div>Select a deck to assign</div>
            {decks.map((deck) => (
            <button className="minty-button" key={deck.id}>
                <Deck deck={deck} onDeckSelect={toggleDeckAssigned} />
            </button>
            ))}
            {deckAssigned && (
            <>
                <div>Select a student to assign</div>
                {students.map((student) => (
                <button className="minty-button" key={student.id}>
                    <Student student={student} onStudentSelect={toggleStudentAssigned}/>
                </button>
                ))}
            </>
            )}
            <button
                onClick={toggleForm}
                className="minty-delete-button"
            >
            Cancel
            </button>
                {studentAssigned && (
                    <button
                        className="minty-button"
                        onClick={submitAssignment}
                    >
                        Confirm Create Assignment
                    </button>
                )}
        </>
        ) : null}
    </>
    );
}

export default NewAssignment;