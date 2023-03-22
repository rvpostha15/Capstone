import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentDeck, updateCurrentDeck } from '../store/slices/deckSlice'
import { addFlashcard } from '../store/slices/flashcardSlice';

function NewFlashcard({toggleFlashcardForm}) {
    const currentDeck = useSelector((state) => state.deck.currentDeck);
    const dispatch = useDispatch();
    const initialFormData = {
        front: '',
        back: '',
        deck_id: currentDeck.id,
    }
    const [formData, setFormData] = useState(initialFormData);
    const [newFlashcardErrors, setNewFlashcardErrors] = useState([])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleCreateFlashcard = (e) => {
        e.preventDefault();
        
        fetch(`/decks/${currentDeck.id}/flashcards`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => {
            if (r.ok) {
                toggleFlashcardForm(false);
              return r.json();
            } else {
              return r.json().then((error) => {
                throw error;
              })
            }  
          })
        .then((newFlashcard) => {
            dispatch(addFlashcard(newFlashcard));
            setFormData(initialFormData);

        })
        .catch((error) => {
            console.log(error);
            setNewFlashcardErrors(error.errors);
        });
    }
    
    return(
        <div>
            <form onSubmit={handleCreateFlashcard}>
                <div>
                    <h2>Front: </h2>
                    <input
                        className='input-field' 
                        type='text'
                        name='front' 
                        placeholder='front' 
                        value={formData.front} 
                        onChange={handleChange}
                    />
                    <h2>Back: </h2>
                    <input
                        className='input-field' 
                        type='text'
                        name='back' 
                        placeholder='back' 
                        value={formData.back} 
                        onChange={handleChange}
                    />
                    <input className='minty-button' type='submit' value="Create"/>
                    {newFlashcardErrors.length > 0 && (
                        <ul>
                            {newFlashcardErrors.map((error, index) => (
                                <li className='errors' key={index}>{error}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </form>
        </div>
    )
}

export default NewFlashcard