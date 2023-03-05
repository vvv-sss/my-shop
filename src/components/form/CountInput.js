// ___Redux __________________________________________________________________________________________________________
import { useDispatch } from 'react-redux';

const CountInput = ({ action }) => {

    const dispatch = useDispatch();

    return ( 
        <div className='count-input-container'>
            <label htmlFor='count-input'>Quantity</label>
            <input 
                type='number' 
                min='0'
                id='count-input'
                onChange={ (e) => dispatch(action(e.target.value)) }
            />
        </div>
    );
}

export default CountInput;