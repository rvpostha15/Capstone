import MyAssignment from "./MyAssignment";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { setCurrentAssignment } from "../store/slices/assignmentSlice";

function StudentDashboard() {
    const dispatch = useDispatch();
    const teachers = useSelector((state) => state.teacher.teachers)
    const currentStudent = useSelector((state) => state.student.currentStudent);
    const assignments = useSelector((state) => state.assignment.assignments);
    const myTeacher = teachers.find((teacher) => teacher.id === currentStudent.teacher_id)

    const handleAssignmentClick = (assignment) => {
        dispatch(setCurrentAssignment(assignment))
    }
    
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


    // console.log("testing", currentAssignment)
    return(
        <>
            <h1>Logged in as {currentStudent.full_name}</h1>
            {/* <h2>Taught by {myTeacher.first_name} {myTeacher.last_name}</h2> */}
            <div className="assignment-grid-container">
                {assignment}
            </div>
        </>
    )
}

export default StudentDashboard