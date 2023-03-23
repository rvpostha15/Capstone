import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import MyAssignment from "./MyAssignment";


function StudentDashboard() {

    const teachers = useSelector((state) => state.teacher.teachers)
    const currentStudent = useSelector((state) => state.student.currentStudent);
    const assignments = useSelector((state) => state.assignment.assignments);
    const myTeacher = teachers.find((teacher) => teacher.id === currentStudent.teacher_id)

    const assignment = assignments.map((assignment)=> (
        <Link to = {`/assignments/${assignment.id}`} key = {assignment.id}>
            <MyAssignment
                assignment = {assignment}
            />
        </Link>
    ))
    
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