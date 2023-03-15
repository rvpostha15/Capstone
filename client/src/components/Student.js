import "../css/MintyTheme.css";
import { useDispatch } from 'react-redux';
import { setCurrentStudent } from '../store/slices/studentSlice';

function Student({ student }) {
    const dispatch = useDispatch();

    const { first_name, last_name } = student



    const handleClick = (e) => {
        dispatch(setCurrentStudent(student));
    };

    return(
        <div onClick={handleClick}>
        <h1>{first_name}</h1>
        <h1>{last_name}</h1>
        {/* <div>{assignment}</div> */}
        </div>
    )
}

export default Student