// ___Redux __________________________________________________________________________________________________________
import { useDispatch } from 'react-redux';

const WeightInput = ({ action }) => {

    const dispatch = useDispatch();

    return ( 
        <div className='weight-input-container'>
            <label htmlFor='weight-input'>Weight, g</label>
            <input 
                type='number' 
                min='0'
                id='weight-input'
                onChange={ (e) => dispatch(action(e.target.value)) }
            />
        </div>
    );
}

export default WeightInput;