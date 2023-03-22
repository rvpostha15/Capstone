import { useState } from "react";
import { Link } from "react-router-dom";
import Deck from "./Deck"
import "../css/MintyTheme.css";
import NewDeck from "./NewDeck";

function Decks({ decks }) {

    const [newDeck, setNewDeck] = useState(false)

    const deck = decks.map((deck)=> (
            <Link className="deck" to = {`/decks/${deck.id}`} key = {deck.id}>
                <Deck
                    deck = {deck}
                />
            </Link>
    ))

    const toggleCreateNewDeck = () => {
        setNewDeck(!newDeck)
    }

    return(
        <>
            <div className="grid-container">
                {deck}
            </div>
            <button 
                onClick={toggleCreateNewDeck}
                className="minty-button"
            >Create New Deck</button>
            {newDeck ? (
                <NewDeck/>
            ) : (
                null
            )}
            
        </>
    )
}

export default Decks