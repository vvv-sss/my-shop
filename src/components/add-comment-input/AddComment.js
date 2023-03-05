// ___Redux __________________________________________________________________________________________________________
import { useDispatch, useSelector } from 'react-redux';
import { setDescription, setDate } from './addCommentSlice';
import { setComment } from '../add-product-form/addProductFormSlice';
import { addComment } from '../edit-product-form/editProductFormSlice';
// ___Helpers_________________________________________________________________________________________________________
import { getDate } from '../../helpers/getDate';

const CommentInput = () => {

    const dispatch = useDispatch();

    return ( 
        <textarea 
                className='comment-input'
                placeholder='Write your comment here...'
                rows="5"
                onChange={ (e) => {
                    dispatch(setDescription(e.target.value));
                    dispatch(setDate(getDate()));
                }}
            >
        </textarea>
    );
}

export default CommentInput;