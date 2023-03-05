// ___Redux __________________________________________________________________________________________________________
import { useDispatch } from 'react-redux';

const HeightInput = ({ action }) => {

    const dispatch = useDispatch();

    return ( 
        <div className='height-input-container'>
            <label htmlFor='height-input'>Height, mm</label>
            <input 
                type='number' 
                min='0'
                id='height-input'
                onChange={ (e) => dispatch(action(e.target.value)) }
            />
        </div>
    );
}

export default HeightInput;