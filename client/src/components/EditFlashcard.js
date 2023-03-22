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
    const [editErrors, setEditErrors] = useState([])

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
        .then(r => {
            if (r.ok) {
                props.history.push(`/decks/${currentDeck.id}`)
              return r.json();
            } else {
              return r.json().then((error) => {
                throw error;
              })
            }  
          })
        .catch(error => {
            console.error(error);
            setEditErrors(error.errors)
        });
    }

    const handleCancel = () => {
        props.history.push(`/decks/${currentDeck.id}`)
    }
    
    return(
        <form className="flashcard" onSubmit={handleEditFlashcard}>
            <div className="front">
                <h2>Front: </h2>
                <input
                    className='input-field'
                    type='text'
                    name='front'
                    value={formData.front}
                    onChange={handleChange}
                />
            </div>
            <div className="back">
                <h2>Back: </h2>
                <input
                    className='input-field'
                    type='text'
                    name='back'
                    value={formData.back}
                    onChange={handleChange}
                />
            <button className="minty-delete-button" onClick={handleCancel}>Cancel</button>
            <input className='minty-button' type='submit' value="Confirm Edit"/>
            {editErrors.length > 0 && (
                <ul>
                    {editErrors.map((error, index) => (
                        <li className='errors' key={index}>{error}</li>
                    ))}
                </ul>
            )}
            </div>
        </form>
    )
}
export default withRouter(EditFlashcard);