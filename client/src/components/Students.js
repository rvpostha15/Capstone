import Student from "./Student"
import "../css/MintyTheme.css";

function Students({ students }) {

    const student = students.map((student)=> (
        <div>
            <Student
                key = {student.id}
                student = {student}
            />
        </div>
    ))

    return(
        <div>
            {student}
        </div>
    )
}

export default Students