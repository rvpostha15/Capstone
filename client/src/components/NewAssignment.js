import { useState } from "react";
import { useSelector } from "react-redux";
import Deck from "./Deck";
import Student from "./Student";

function NewAssignment({ decks, students }) {
    const currentTeacher = useSelector((state) => state.teacher.currentTeacher);

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
    console.log("formData:", formData)
    console.log("teacherId:", currentTeacher.id)
    console.log("studentId:", studentId)
    console.log("deckId:", deckId)
    
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
        console.log("deck:", deck);
        setDeckId(deck.id)
    };

    const toggleStudentAssigned = (student) => {
        setStudentAssigned(true);
        console.log("student:", student);
        setStudentId(student.id)
    };

    const submitAssignment = (e) => {
        

        fetch('/assignments', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then((data) => {
            console.log(data);
            setShowForm(false);
            setDeckAssigned(false);
            setStudentAssigned(false);
            window.location.reload();
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