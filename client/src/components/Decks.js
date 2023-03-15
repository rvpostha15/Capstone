import { Link } from "react-router-dom";
import Deck from "./Deck"
import "../css/MintyTheme.css";

function Decks({ decks }) {
    const deck = decks.map((deck)=> (
        <Link to = {`/decks/${deck.id}`} key = {deck.id}>
            <Deck
                deck = {deck}
            />
        </Link>
    ))

    return(
        <div>{deck}</div>
    )
}

export default Decks