import React from "react";
import { useState, useContext } from "react";
import { addProductContext } from "../../App";
import { useSelector, useDispatch } from 'react-redux';
import { setImageUrl, setName, setCount, setWidth, setHeight, setWeight, setComments } from './addProductSlice';
import { db, storage } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';


const AddProductForm = () => {

    const [imageName, setImageName] = useState("");
    const { setAddProduct } = useContext(addProductContext);

    const productToAdd = useSelector((state) => state.addProduct);
    const dispatch = useDispatch();

    const productsCollectionRef = collection(db, 'products');
    
    const handleCancelBtnClick = () => {
        setAddProduct(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const image = e.target.querySelector('#add-product-file').files[0];
        await addDoc(productsCollectionRef, productToAdd);
        if (image) {
            const imageCollectionRef = ref(storage, `/images/${image.name}`);
            await uploadBytes(imageCollectionRef, image);
        }
        setAddProduct(false);
    }

    const handleFileInputChange = (e) => {
        const value = e.target.value;
        setImageName(value);
        dispatch(setImageUrl(e.target.files[0].name))
    }

    return ( 
        <form className="add-product-form" onSubmit={ (e) => handleSubmit(e) }>
            <div className='file-upload'>
                <label htmlFor='add-product-file'>Browse the image...</label>
                <input 
                    type='file' 
                    name='image'
                    id='add-product-file'
                    onChange={ (e) => handleFileInputChange(e) }
                />
                <span>{ imageName }</span>
            </div>

            <div className='input-block'>
                <label htmlFor='add-product-name'>Name</label>
                <input 
                    type='text' 
                    name='name' 
                    id='add-product-name' 
                    required
                    onChange={ (e) => dispatch(setName(e.target.value)) } 
                />
            </div>
            
            <div className='input-block'>
                <label htmlFor='add-product-count'>Quantity</label>
                <input 
                    type='number' 
                    min='0' 
                    name='count' 
                    id='add-product-count' 
                    required
                    onChange={ (e) => dispatch(setCount(e.target.value)) } 
                />
            </div>
            
            <div className='input-block'>
                <label htmlFor='add-product-width'>Width, mm</label>
                <input 
                    type='number' 
                    min='0' 
                    name='width' 
                    id='add-product-width' 
                    required
                    onChange={ (e) => dispatch(setWidth(e.target.value)) } 
                />
            </div>
            
            <div className='input-block'>
                <label htmlFor='add-product-height'>Height, mm</label>
                <input 
                    type='number' 
                    min='0' 
                    name='height' 
                    id='add-product-height' 
                    required
                    onChange={ (e) => dispatch(setHeight(e.target.value)) }
                />
            </div>
            
            
            <div className='input-block'>
                <label htmlFor='add-product-weight'>Weight, g</label>
                <input 
                    type='number' 
                    min='0' 
                    name='weight' 
                    id='add-product-weight'
                    required 
                    onChange={ (e) => dispatch(setWeight(e.target.value)) }
                />
            </div>

            <textarea 
                placeholder="Write your comment here..."
                onChange={ (e) => dispatch(setComments(e.target.value)) }
            >
            </textarea>

            <div className='form-btns'>
                <button type='button' onClick={ handleCancelBtnClick }>Cancel</button>
                <button type='submit' >Confirm</button>
            </div>
        </form>
    );
}

export default AddProductForm;