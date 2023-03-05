const FormBtns = ({ setSomeState }) => {

    return ( 
        <div className='form-btns'>
            <button type='button' onClick={ () => setSomeState(false) }>Cancel</button>
            <button type='submit' >Confirm</button>
        </div>
    );
}

export default FormBtns;