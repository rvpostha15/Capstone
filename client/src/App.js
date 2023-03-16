// client/src/components/App.js
import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setDecks } from './store/slices/deckSlice';
import { setCurrentTeacher } from './store/slices/teacherSlice';
import { setStudents } from "./store/slices/studentSlice";

// Components & CSS
import "./css/MintyTheme.css";
import Students from "./components/Students.js";
import Header from "./components/Header.js";
import Decks from "./components/Decks";
import ViewDeck from "./components/ViewDeck";
import ViewStudent from "./components/ViewStudent";
import EditFlashcard from "./components/EditFlashcard";


function App() {
  const dispatch = useDispatch();
  const currentTeacher = useSelector((state) => state.teacher.currentTeacher);
  const decks = useSelector((state) => state.deck.decks);
  // const currentDeck = useSelector((state) => state.deck.currentDeck);
  const students = useSelector((state) => state.student.students)
  
  // Fetch Teacher 3 => NEED TO UPDATE TO FETCH LOGGED IN TEACHER!!
  useEffect(() => {
    fetch('/teachers/3')
      .then((r) => r.json())
      .then((data) => {
        dispatch(setCurrentTeacher(data))
        dispatch(setStudents(data.students))
      });
  }, [dispatch]);

  useEffect(() => {
    fetch('/decks')
      .then((r) => r.json())
      .then((data) => dispatch(setDecks(data)));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/students/:id">
            <ViewStudent />
          </Route>
          <Route path="/students">
            <Students students={students} />
          </Route>
          <Route path="/decks/:id/flashcards/:id/edit">
            <EditFlashcard />
          </Route>
          <Route path="/decks/:id">
            <ViewDeck />
          </Route>
          <Route path="/decks">
            <Decks decks={decks} />
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