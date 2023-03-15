
import "../css/MintyTheme.css";


function Deck({ deck, setCurrentDeck }) {

    const handleClick = (e) => {
        setCurrentDeck({...deck, [e.target.name]: e.target.value})
    }

    return(
        
            <h1 onClick = {handleClick}>
                {deck.title}
            </h1>
        
    )
}
export default Deck