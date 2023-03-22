import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Redux
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
import NewAssignment from "./components/NewAssignment";
import Home from "./components/Home";
import Login from "./components/Login"; // Import the Login component

function App() {
  const dispatch = useDispatch();
  const currentTeacher = useSelector((state) => state.teacher.currentTeacher);
  const decks = useSelector((state) => state.deck.decks);
  const students = useSelector((state) => state.student.students)

  // Add this state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fetch Teacher 3 => NEED TO UPDATE TO FETCH LOGGED IN TEACHER!!
  const fetchLoggedInTeacher = (teacherId) => {
    fetch(`/teachers/${teacherId}`)
      .then((r) => r.json())
      .then((data) => {
        dispatch(setCurrentTeacher(data))
        dispatch(setStudents(data.students))
      });
  };

  const fetchCurrentTeacher = () => {
    fetch('/current_teacher')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Not logged in');
      }
    })
    .then((data) => {
      dispatch(setCurrentTeacher(data));
      dispatch(setStudents(data.students));
      setIsAuthenticated(true);
    })
    .catch((error) => {
      console.error('Error fetching current teacher:', error);
    });
  }
  
  useEffect(()=> {
    fetchCurrentTeacher();
  }, []);

  useEffect(() => {
    fetch('/decks')
      .then((r) => r.json())
      .then((data) => dispatch(setDecks(data)));
  }, [dispatch]);

  // Conditionally render the Login component or the rest of your application
  return isAuthenticated ? (
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
          <Route path="/new-assignment">
            <NewAssignment 
              students={students}
              decks={decks}
              fetchCurrentTeacher={fetchCurrentTeacher}
            />
          </Route>
          <Route path="/">
            <Home
              currentTeacher={currentTeacher}
              setIsAuthenticated={setIsAuthenticated}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  ) : (
    <Login onLoginSuccess={(teacherId) => {
      setIsAuthenticated(true)
      fetchLoggedInTeacher(teacherId)
    }}/>
  );
}

export default App;
