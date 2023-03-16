import { useSelector } from "react-redux";
import { useState } from "react";
import { withRouter } from "react-router-dom";

function EditFlashcard(props) {
    const currentDeck = useSelector((state) => state.deck.currentDeck);
    const currentFlashcard = useSelector((state) => state.flashcard.currentFlashcard);
    const initialFormData = {
        front: currentFlashcard.front,
        back: currentFlashcard.back,
        deck_id: currentFlashcard.deck_id,
    }
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleEditFlashcard = (e) => {
        e.preventDefault();
        fetch(`/decks/${currentDeck.id}/flashcards/${currentFlashcard.id}`, {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(() => {
            props.history.push(`/decks/${currentDeck.id}`)
        })
        .catch(error => {
            console.error('Error updating flashcard:', error);
        });
    }
    
    return(
        <form className="flashcard" onSubmit={handleEditFlashcard}>
            <div className="front">
                <h2>Front: </h2>
                <input
                    type='text'
                    name='front'
                    value={formData.front}
                    onChange={handleChange}
                />
            </div>
            <div className="back">
                <h2>Back: </h2>
                <input
                    type='text'
                    name='back'
                    value={formData.back}
                    onChange={handleChange}
                />
            <input className='minty-button' type='submit' value="Confirm Edit"/>
            </div>
        </form>
    )
}
export default withRouter(EditFlashcard);