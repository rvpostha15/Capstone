import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever, MdOutlineEdit } from 'react-icons/md';
import { useState } from "react";

function EditFlashcard() {
    const currentFlashcard = useSelector((state) => state.flashcard.currentFlashcard);
    const dispatch = useDispatch();
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
        console.log('success!')
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
export default EditFlashcard;