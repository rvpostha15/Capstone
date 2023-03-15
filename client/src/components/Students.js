import { Link } from "react-router-dom";
import Student from "./Student"
import "../css/MintyTheme.css";

function Students({ students }) {
    const student = students && students.map((student)=> (
        <Link to = {`/students/${student.id}`} key = {student.id}>
            <Student
                student = {student}
            />
        </Link>
    ))

    console.log(students)

    return(
        <div>{student}</div>
    )
}

export default Students