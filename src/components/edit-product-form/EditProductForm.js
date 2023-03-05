// ___React___________________________________________________________________________________________________________
import { useEffect, useState } from 'react';
// ___Redux___________________________________________________________________________________________________________
import { useSelector, useDispatch } from 'react-redux';
import { setEditProduct, editImageUrl, editName, editCount, editWidth, editHeight, editWeight, removeComment, addComment } from './editProductFormSlice';
import { setInitialCommentState, setProductIdForComment, setCommentId } from '../add-comment-input/addCommentSlice';
// ___Framer Motion___________________________________________________________________________________________________
import { motion } from "framer-motion";
// ___Components______________________________________________________________________________________________________
import FileInput from '../form/FileInput';
import NameInput from '../form/NameInput';
import CountInput from '../form/CountInput';
import WidthInput from '../form/WidthInput';
import HeightInput from '../form/HeightInput';
import WeightInput from '../form/WeightInput';
import CommentInput from "../add-comment-input/AddComment";
import FormBtns from "../form/FormBtns";
// ___Helpers_________________________________________________________________________________________________________
import {generateCommentID} from '../../helpers/generateCommentID';
import { sendImage } from '../../helpers/sendImage';
import { updateProduct } from '../../helpers/updateProduct';


const EditProductForm = ({ setEdit, productId }) => {

    const [sendData, setSendData] = useState(false);

    const dispatch = useDispatch();

    const product = useSelector(state => state.productList.find(product => product.productId === productId));
    const productToEdit = useSelector(state => state.editProduct);
    const commentToAdd = useSelector(state => state.addComment);

    useEffect(() => {
        dispatch(setEditProduct(product));
        dispatch(setInitialCommentState());

        dispatch(setProductIdForComment(product.productId));
        const commentId = generateCommentID(product.comments);
        dispatch(setCommentId(commentId));
    }, []) // Setting up initial object to be edited

    useEffect(() => {
        if (sendData) {
            updateProduct(product.id, productToEdit);
            setSendData(false);
            setEdit(false);
        }
    }, [sendData]); // Sending data to firebase on submit

    const handleSubmit = (e) => {
        e.preventDefault();
        commentToAdd.description && dispatch(addComment(commentToAdd));
        sendImage(e);
        setSendData(true);
    }

    const handleRemoveCommentClick = (e, id) => {
        dispatch(removeComment(id));
        // if (window.confirm('Do you really want to remove this comment?')) {
        //     setSendData(true);
        // }
        e.target.parentElement.style.display = 'none';
    }

    return ( 
        <motion.form 
            className="edit-product-form" 
            onSubmit={ (e) => handleSubmit(e) }
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
        >
            <span>You can update only the fields you need. All other will remain without changes.</span>
            <FileInput action={ editImageUrl } />
            <NameInput action={ editName } />
            <span className='edit-product-form__info'>{ product.name }</span>
            <CountInput action={ editCount } />
            <span className='edit-product-form__info'>{ product.count }</span>
            <WidthInput action={ editWidth } />
            <span className='edit-product-form__info'>{ product.size.width }</span>
            <HeightInput action={ editHeight } />
            <span className='edit-product-form__info'>{ product.size.height }</span>
            <WeightInput action={ editWeight } />
            <span className='edit-product-form__info'>{ product.weight }</span>
            { product.comments.length > 0 &&
                <ul className='edit-product-form__comments'>Comments:
                    { product.comments
                        .map((comment) => {
                            return (
                                    <li key={ comment.commentId }>
                                    { comment.description }
                                    <button 
                                        type='button' 
                                        onClick={ (e) => handleRemoveCommentClick(e, comment.commentId) }
                                    >
                                        Remove comment
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            }
            <CommentInput />
            <FormBtns setSomeState={ setEdit } />
        </motion.form>
    );
}

export default EditProductForm;