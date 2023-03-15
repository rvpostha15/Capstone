import { Link } from "react-router-dom";
import Deck from "./Deck"
import "../css/MintyTheme.css";

function Decks({ decks, setCurrentDeck }) {

    

    const deck = decks.map((deck)=> (
        <Link to = {`/decks/${deck.id}`}>
            <Deck
                key = {deck.id}
                deck = {deck}
                setCurrentDeck = {setCurrentDeck}
            />
        </Link>
    ))
    console.log(deck)

    return(
        <div>
            {deck}
        </div>
    )
}

export default Decks