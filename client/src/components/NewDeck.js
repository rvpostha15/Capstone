import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addDeck } from '../store/slices/deckSlice'

function NewDeck() {
    const currentTeacher = useSelector((state) => state.teacher.currentTeacher);
    const dispatch = useDispatch();
    const initialFormData = {
        title: '',
        teacher_id: currentTeacher.id,
        flashcards: [],
    }
    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCreateNewDeck = (e) => {
        e.preventDefault()
        
        fetch('/decks', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then((newDeck) => {
            dispatch(addDeck(newDeck))
            setFormData(initialFormData)
        })
        .catch(error => (console.log(error)))

        
    }
    
    return(
        <div>
            <form onSubmit={handleCreateNewDeck}>
                <div>
                    <h2>Title: </h2>
                    <input 
                        type='text'
                        name='title' 
                        placeholder='title' 
                        value={formData.title} 
                        onChange={handleChange}
                    />
                    <input className='minty-button' type='submit' value="Create"/>
                </div>
            </form>
        </div>
    )
}

export default NewDeck