// ___React___________________________________________________________________________________________________________
import React, { useState, useEffect } from "react";
// ___Redux___________________________________________________________________________________________________________
import { useSelector, useDispatch } from 'react-redux';
import { setInitialState, setProductId, setImageUrl, setName, setCount, setWidth, setHeight, setWeight, setComment } from './addProductFormSlice';
import { setCommentId, setProductIdForComment } from '../add-comment-input/addCommentSlice';
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
import { generateProductID } from '../../helpers/generateProductID';
import { sendProduct } from '../../helpers/sendProduct';
import { sendImage } from '../../helpers/sendImage';

const AddProductForm = ({ setAddProduct }) => {

    const [sendData, setSendData] = useState(false);
    const [warningMsg, setWarningMsg] = useState(false);

    const dispatch = useDispatch();
    
    const products = useSelector(state => state.productList);
    const productToAdd = useSelector(state => state.addProduct);
    const commentToAdd = useSelector(state => state.addComment);

    useEffect(() => {
        dispatch(setInitialState()) // Setting initial state of product to be added

        const productID = generateProductID(products);
        dispatch(setProductId(productID));
        dispatch(setProductIdForComment(productID));
        dispatch(setCommentId(1));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (commentToAdd.description) { dispatch(setComment(commentToAdd)) }
        if (productToAdd.name &&
            productToAdd.count &&
            productToAdd.size.width &&
            productToAdd.size.height &&
            productToAdd.weight) {
            setSendData(true);
        } else {
            setWarningMsg("Please note, you can skip only Browse the image and Comments fields, all other must be filled up")
        }
        sendImage(e);
    }

    useEffect(() => {
        if (sendData) {
            sendProduct(productToAdd);
            setSendData(false);
            setAddProduct(false);
            setWarningMsg(false);
        }
    }, [sendData]);

    return ( 
        <motion.form 
            className="add-product-form" 
            onSubmit={ (e) => handleSubmit(e) }
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
        >
            <FileInput action={ setImageUrl } />
            <NameInput action={ setName } />
            <CountInput action={ setCount } />
            <WidthInput action={ setWidth } />
            <HeightInput action={ setHeight } />
            <WeightInput action={ setWeight } />
            <CommentInput />
            <FormBtns setSomeState={ setAddProduct } />
            { warningMsg && <span>{ warningMsg }</span>}
        </motion.form>
    );
}

export default AddProductForm;