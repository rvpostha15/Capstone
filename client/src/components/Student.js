import "../css/MintyTheme.css";
import { useDispatch } from 'react-redux';
import { setCurrentStudent } from '../store/slices/studentSlice';
// import { setAssignments } from "../store/slices/assignmentSlice";

function Student({ student, onStudentSelect }) {
    const dispatch = useDispatch();

    const { first_name, last_name, full_name } = student

    const handleClick = (e) => {
        dispatch(setCurrentStudent(student));
        console.log("student", student)
        onStudentSelect(student)
    };

    return(
        <div onClick={handleClick}>
            {/* <h1>{full_name}</h1> not working */}
            <h1>{first_name} {last_name}</h1>
        </div>
    )
}

export default Student