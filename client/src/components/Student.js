import Assignment from "./Assignment"
import "../css/MintyTheme.css";

function Student({ student }) {

    const { first_name, last_name, assignments } = student

    const assignment = assignments.map((assignment)=> (
        <div>
            <Assignment
                key={assignment.id}
                assignment={assignment}
            />
        </div>
    ))

    return(
        <div>
        <h1>{first_name}</h1>
        <h1>{last_name}</h1>
        <div>{assignment}</div>
        </div>
    )
}

export default Student