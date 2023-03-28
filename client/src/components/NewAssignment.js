import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Deck from "./Deck";
import Student from "./Student";
import { addAssignment } from "../store/slices/assignmentSlice";

function NewAssignment({ decks, students, fetchCurrentTeacher }) {
    const currentTeacher = useSelector((state) => state.teacher.currentTeacher);
    const dispatch = useDispatch();

    const [showForm, setShowForm] = useState(false)
    const [deckAssigned, setDeckAssigned] = useState(false)
    const [studentAssigned, setStudentAssigned] = useState(false)
    const [studentId, setStudentId] = useState(null)
    const [deckId, setDeckId] = useState(null)

    let formData = {
        teacher_id: currentTeacher.id,
        student_id: studentId,
        deck_id: deckId,
        complete: false
    }
    
    const toggleForm = () => {
        setShowForm(true)
    }

    const cancelAssignment = () => {
        setShowForm(false)
        setDeckAssigned(false)
        setStudentAssigned(false)
        setDeckId(null)
        setStudentId(null)
    }

    const toggleDeckAssigned = (deck) => {
        setDeckAssigned(true);
        setDeckId(deck.id)
    };

    const toggleStudentAssigned = (student) => {
        setStudentAssigned(true);
        setStudentId(student.id)
    };

    const submitAssignment = () => {
        fetch('/assignments', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then((NewAssignment) => {
            dispatch(addAssignment(NewAssignment));
            setShowForm(false);
            setDeckAssigned(false);
            setStudentAssigned(false);
            fetchCurrentTeacher();
        })
        .catch(error => (console.log(error))); 
    }

    return (
    <>
        <button onClick={toggleForm} className="minty-button">
        Create Assignment
        </button>
        {showForm ? (
        <>
            <h2>Select a deck to assign</h2>
            <div className="grid-container">
            {decks.map((deck) => (
                    <button 
                        className={`minty-button ${deckId === deck.id ? 'selected' : null}`} 
                        key={deck.id}
                        onClick={()=> toggleDeckAssigned(deck)}
                    >
                        <Deck deck={deck}/>
                    </button>
            ))}
            </div>
            {deckAssigned && (
            <>
                <h2>Select a student to assign</h2>
                <div className="grid-container">
                {students.map((student) => (
                <button 
                    className={`minty-button min-height ${studentId === student.id ? 'selected': null}`} 
                    key={student.id}
                    onClick={()=> toggleStudentAssigned(student)}
                >
                    <Student student={student}/>
                </button>
                ))}
                </div>
            </>
            )}
            <button
                onClick={cancelAssignment}
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