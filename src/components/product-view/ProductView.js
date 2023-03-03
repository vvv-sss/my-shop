import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getImageUrl } from "../../helpers/getImageUrl";
import { editImageUrl, editName, editCount, editWidth, editHeight, editWeight } from '../product-view/productViewSlice';
import { collection, updateDoc, doc } from 'firebase/firestore';
import { db, storage } from '../../firebase-config';
import { ref, uploadBytes } from 'firebase/storage';

const ProductView = ({ setProductViewActive }) => {

    const [productImageSrc, setProductImageSrc] = useState(null);
    const [edit, setEdit] = useState(false);
    const [imageName, setImageName] = useState("");
    const container = useRef();

    const product = useSelector(state => state.productView);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!edit) {
            getImageUrl(product.imageUrl, setProductImageSrc);
        }
    }, [product])

    useEffect(() => {
        if (edit) {
            container.current.style.pointerEvents = "auto";
        }
    }, [edit])

    const handleFileInputChange = (e) => {
        const value = e.target.value;
        setImageName(value);
        dispatch(editImageUrl(e.target.files[0].name))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const image = e.target.querySelector('#edit-product-file').files[0];

        const productToBeUpdated = doc(db, 'products', product.id)
        await updateDoc(productToBeUpdated, product)

        if (image) {
            const imageCollectionRef = ref(storage, `/images/${image.name}`);
            await uploadBytes(imageCollectionRef, image);
        }
    }

    return ( 
        <div className="product-view" ref={ container }>
            <div>
                <button onClick={ () => setEdit(true) }>Edit</button>
                <button onClick={ () => setProductViewActive(false) }>Close</button>
            </div>
            <img src={ productImageSrc } alt="Image of product" />
            <form className="edit-product-form" onSubmit={ (e) => handleSubmit(e) }>
                { edit &&
                    <div className='edit-file-upload'>
                        <label htmlFor='edit-product-file'>Browse the image...</label>
                        <input 
                            type='file' 
                            name='image'
                            id='edit-product-file'
                            onChange={ (e) => handleFileInputChange(e) }
                        />
                        <span>{ imageName }</span>
                    </div>
                }
                <input 
                    type='text' 
                    className="edit-form__name" 
                    value={ product.name }
                    onChange={ (e) => dispatch(editName(e.target.value)) }
                />
                <div className="edit-form__input-container">
                    <label>Quantity:</label>
                    <input 
                        type='text' 
                        className="edit-form__number" 
                        value={ product.count } 
                        onChange={ (e) => dispatch(editCount(e.target.value)) } 
                    />
                </div>
                <div className="edit-form__input-container">
                    <label>Width, mm:</label>
                    <input 
                        type='text' 
                        className="edit-form__number" 
                        value={ product.size.width } 
                        onChange={ (e) => dispatch(editWidth(e.target.value)) }
                    />
                </div>
                <div className="edit-form__input-container">
                    <label>Height, mm:</label>
                    <input 
                        type='text' 
                        className="edit-form__number" 
                        value={ product.size.height }
                        onChange={ (e) => dispatch(editHeight(e.target.value)) }
                    />
                </div>
                <div className="edit-form__input-container">
                    <label>Weight, g:</label>
                    <input 
                        type='text' 
                        className="edit-form__number" 
                        value={ product.weight } 
                        onChange={ (e) => dispatch(editWeight(e.target.value)) }
                    />
                </div>
                <ul>    
                    {
                        product.comments.map((comment, index) => {
                            return (
                                <React.Fragment  key={ index }>
                                    <li>{ comment }</li>
                                    { edit && <button>Remove comment</button> }
                                </React.Fragment>
                            )
                        })
                    }
                </ul>
                { edit &&
                    <>
                        <textarea 
                            placeholder="Add one more comment here..."
                        >
                        </textarea>
                        <div className="edit-form__btn-container">
                            <button type='button' >Cancel</button>
                            <button type='submit' >Confirm</button>
                        </div>
                    </>
                }
            </form>
        </div>
    );
}

export default ProductView;