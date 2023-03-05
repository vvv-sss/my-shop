// ___Redux __________________________________________________________________________________________________________
import { useDispatch } from 'react-redux';

const WidthInput = ({ action }) => {

    const dispatch = useDispatch();

    return ( 
        <div className='width-input-container'>
            <label htmlFor='width-input'>Width, mm</label>
            <input 
                type='number' 
                min='0'
                id='width-input'
                onChange={ (e) => dispatch(action(e.target.value)) }
            />
        </div>
    );
}

export default WidthInput;