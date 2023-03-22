import { Link } from "react-router-dom";
import Student from "./Student"
import "../css/MintyTheme.css";

function Students({ students }) {
    const student = students && students.map((student)=> (
        <div className="student">
            <Link to = {`/students/${student.id}`} key = {student.id}>
                <Student
                    student = {student}
                />
            </Link>
        </div>
    ))

    console.log(students)

    return(
        <div className="student-box">{student}</div>
    )
}

export default Students