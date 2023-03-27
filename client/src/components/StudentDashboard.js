import MyAssignment from "./MyAssignment";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { setCurrentAssignment } from "../store/slices/assignmentSlice";

function StudentDashboard({setIsAuthenticated}) {
    const dispatch = useDispatch();
    const teachers = useSelector((state) => state.teacher.teachers)
    const currentStudent = useSelector((state) => state.student.currentStudent);
    const assignments = useSelector((state) => state.assignment.assignments);
    const myTeacher = teachers.find((teacher) => teacher.id === currentStudent.teacher_id)

    const assignment = assignments.map((assignment)=> (
        <Link 
            to = {`/assignments/study/${assignment.id}`} 
            key = {assignment.id}
            onClick = {() => handleAssignmentClick(assignment)}
        >
            <MyAssignment
                assignment = {assignment}
            />
        </Link>
    ))

    const handleAssignmentClick = (assignment) => {
        dispatch(setCurrentAssignment(assignment))
    }

    const handleLogout = async () => {
        try {
            const response = await fetch('/logout', {
                method: 'DELETE',
            });
    
            if (response.ok) {
                window.location.reload()
                // setIsAuthenticated(false);
            } else {
                console.error('Failed to log out');
            }
        } catch (err) {
          console.error('Error while logging out:', err);
        }
    };

    // console.log("testing", currentAssignment)
    return(
        <>
            <h1>Logged in as {currentStudent.full_name}</h1>
            <button onClick={handleLogout} className="minty-button">Logout</button>
            <div className="assignment-grid-container">
                {assignment}
            </div>
        </>
    )
}

export default StudentDashboard