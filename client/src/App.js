import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setDecks } from './store/slices/deckSlice';
import { setCurrentTeacher } from './store/slices/teacherSlice';
import { setStudents } from "./store/slices/studentSlice";
import { setCurrentStudent } from "./store/slices/studentSlice";
import { setAssignments } from "./store/slices/assignmentSlice";
import { setTeachers } from "./store/slices/teacherSlice";


// Teacher Components 
import Students from "./components/Students.js";
import Header from "./components/Header.js";
import Decks from "./components/Decks";
import ViewDeck from "./components/ViewDeck";
import ViewStudent from "./components/ViewStudent";
import EditFlashcard from "./components/EditFlashcard";
import NewAssignment from "./components/NewAssignment";
import Home from "./components/Home";
import Login from "./components/Login";

// Student Components 
import StudentDashboard from "./components/StudentDashboard";
import "./css/MintyTheme.css";

function App(props) {
  const dispatch = useDispatch();
  const currentTeacher = useSelector((state) => state.teacher.currentTeacher);
  const decks = useSelector((state) => state.deck.decks);
  const students = useSelector((state) => state.student.students)
  const currentStudent = useSelector((state) => state.student.currentStudent)
  const assignments = useSelector((state) => state.assignment.assignments)

  // State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('')

  // Fetch Teacher 3 => NEED TO UPDATE TO FETCH LOGGED IN TEACHER!!
  const fetchLoggedInTeacher = (teacherId) => {
    fetch(`/teachers/${teacherId}`)
      .then((r) => r.json())
      .then((data) => {
        dispatch(setCurrentTeacher(data))
        dispatch(setStudents(data.students))
        setUserType('teacher')
      });
  };

  fetch('/teachers')
    .then((r) => r.json())
    .then((data) => {
      dispatch(setTeachers(data))
    })

  const fetchLoggedInStudent = (studentId) => {
    fetch(`/students/${studentId}`)
      .then((r) => r.json())
      .then((data)=> {
        dispatch(setCurrentStudent(data))
        dispatch(setAssignments(data.assignments))
        setUserType('student')
      })
  }

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

  // const fetchCurrentUser = () => {

  // }
  
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
      <>
        {userType === 'teacher' ? (
          <>
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
                    currentStudent={currentStudent}
                    setIsAuthenticated={setIsAuthenticated}
                  />
                </Route>
              </Switch>
            </div>
          </>
        ) : (
          <Switch>
            <Route path="/student-dashboard">
              <StudentDashboard 
                currentStudent={currentStudent}
                assignments={assignments}
              />
            </Route>
          </Switch>
        )}
      </>
    </BrowserRouter>
  ) : (
    <Login 
      onTeacherLoginSuccess={(teacherId) => {
        setIsAuthenticated(true)
        fetchLoggedInTeacher(teacherId)
      }}
      onStudentLoginSuccess={(studentId) => {
        setIsAuthenticated(true)
        fetchLoggedInStudent(studentId)
        props.history.push('/student-dashboard')
      }}
    />
  );
  
}  

export default withRouter(App);
