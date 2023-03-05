// ___Redux __________________________________________________________________________________________________________
import { useDispatch } from 'react-redux';

const NameInput = ({ action }) => {

    const dispatch = useDispatch();

    return ( 
        <div className='name-input-container'>
            <label htmlFor='name-input'>Name</label>
            <input 
                type='text' 
                id='name-input'
                onChange={ (e) => dispatch(action(e.target.value)) } 
            />
        </div>
    );
}

export default NameInput;