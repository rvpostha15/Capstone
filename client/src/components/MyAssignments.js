import MyAssignment from "./MyAssignment";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { setCurrentAssignment } from "../store/slices/assignmentSlice";

function MyAssignments() {

    const dispatch = useDispatch();
    const teachers = useSelector((state) => state.teacher.teachers)
    const currentStudent = useSelector((state) => state.student.currentStudent);
    const assignments = useSelector((state) => state.assignment.assignments);
    const myTeacher = teachers.find((teacher) => teacher.id === currentStudent.teacher_id)

    const assignment = assignments.map((assignment)=> (
        <Link
            className="custom-nav-link" 
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

    return(
        <>
            <h1 className="title off-center">My Assignments</h1>
            <div className="assignment-grid-container off-center">
                {assignment}
            </div>
        </>
    )
}

export default MyAssignments