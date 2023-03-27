import { useState } from "react";
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom";
import StudyFlashcard from "./StudyFlashcard";

function Study({fetchCurrentStudent, history}) {
    const currentDeck = useSelector((state) => state.deck.currentDeck)
    const flashcards = useSelector((state) => state.flashcard.flashcards)
    const currentAssignment = useSelector((state) => state.assignment.currentAssignment);


    const initialFormData = {
        complete: currentAssignment.complete,
        deck_id: currentAssignment.deck_id,
        teacher_id: currentAssignment.teacher_id,
        student_id: currentAssignment.student_id,
    }
    const [cardIndex, setCardIndex] = useState(0);
    const [formData, setFormData] = useState(initialFormData)

    const flashcard = flashcards[cardIndex];

    const handleNext = () => {
        if (cardIndex < flashcards.length -1) {
            setCardIndex(cardIndex + 1);
            setFormData({
                complete: true,
                deck_id: currentAssignment.deck_id,
                teacher_id: currentAssignment.teacher_id,
                student_id: currentAssignment.student_id,
            })
        } 
    }

    const handleStudyAgain = () => {
        setCardIndex(0)
        setFormData(initialFormData)
    }

    const handleMarkComplete = () => {
        fetch(`/assignments/study/${currentAssignment.id}`, {
            method: 'PATCH', 
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => {
            console.log(r)
            fetchCurrentStudent();
            history.push('/my-assignments')
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="off-center">
        <h1 className="title">{currentDeck.title}</h1>
            <StudyFlashcard key={flashcard.id} flashcard={flashcard} />
            {cardIndex < flashcards.length - 1 ? (
                <button className="minty-button" onClick={handleNext}>Next</button>
            ) : (
                <div>
                    <button className="minty-button" onClick={handleStudyAgain}>Study Again</button>
                    <button className="minty-button" onClick={handleMarkComplete}>Done</button>
                </div>
            )}
        </div>
    )
}

export default withRouter(Study)