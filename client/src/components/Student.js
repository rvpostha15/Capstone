import "../css/MintyTheme.css";
import { useDispatch } from 'react-redux';
import { setCurrentStudent } from '../store/slices/studentSlice';

function Student({ student }) {
    const dispatch = useDispatch();

    const { first_name, last_name, full_name } = student
    console.log(student)



    const handleClick = (e) => {
        dispatch(setCurrentStudent(student));
    };

    return(
        <div onClick={handleClick}>
            {/* <h1>{full_name}</h1> not working */}
            <h1>{first_name} {last_name}</h1>
        </div>
    )
}

export default Student