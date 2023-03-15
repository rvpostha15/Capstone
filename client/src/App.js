// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components & CSS
import "./css/MintyTheme.css";
import Students from "./components/Students.js";
import Header from "./components/Header.js";
import Decks from "./components/Decks";
import ViewDeck from "./components/ViewDeck";


function App() {
  const [currentTeacher, setCurrentTeacher] = useState('');
  const [decks, setDecks] = useState([]);
  const [currentDeck, setCurrentDeck] = useState('')

  // Fetch Teacher 3 => NEED TO UPDATE TO FETCH LOGGED IN TEACHER!!
  useEffect(() => {
    fetch("/teachers/3")
      .then((r) => r.json())
      .then((data) => setCurrentTeacher(data));
  }, []);

  useEffect(() => {
    fetch("/decks")
      .then((r) => r.json())
      .then((data) => setDecks(data));
  }, []);
  console.log(decks)

  return (
    <BrowserRouter>
      <Header/>
      <div className="content">
        <Switch>
          <Route path="/students">
            <Students
              students = {currentTeacher.students}
            />
          </Route>
          <Route path="/decks/:id">
            <ViewDeck
              currentDeck = {currentDeck}
            />
          </Route>
          <Route path="/decks">
            <Decks
              decks = {decks}
              setCurrentDeck = {setCurrentDeck}
            />
          </Route>
          <Route path="/">
            <h1>Page Count: {currentTeacher.last_name}</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;