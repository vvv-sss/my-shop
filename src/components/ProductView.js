// ___React___________________________________________________________________________________________________________
import React from "react";
import { useState, useEffect } from "react";
// ___Redux___________________________________________________________________________________________________________
import { useSelector, useDispatch } from 'react-redux';
// ___Framer Motion___________________________________________________________________________________________________
import { motion } from "framer-motion";
// ___Helpers_________________________________________________________________________________________________________
import { getImageUrl } from "../helpers/getImageUrl";

const ProductView = ({ setProductViewActive, setEdit, productId }) => {

    const [productImageSrc, setProductImageSrc] = useState(null);

    const product = useSelector(state => state.productList.find(product => product.productId === productId));
    const dispatch = useDispatch();

    useEffect(() => {
        product.imageUrl && getImageUrl(product.imageUrl, setProductImageSrc);
    }, [])

    return ( 
        <motion.section 
            className="product-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="product-view-container">
                <div className="product-view__btns">
                    <button onClick={ () => setEdit(true) }>Edit</button>
                    <button onClick={ () => setProductViewActive(false) }>Close</button>
                </div>
                <img src={ productImageSrc } alt="Image of product" />
                <div className="product-view__info">
                    <span>{ product.name }</span>
                    <span>Quantity: { product.count }</span>
                    <span>Width, mm: { product.size.width }</span>
                    <span>Height, mm: { product.size.height }</span>
                    <span>Weight, g: { product.weight }</span>
                </div>
                { product.comments.length > 0 &&
                    <div className="product-view__comments">
                        <span>Comments:</span>
                        { product.comments
                            .map((comment) => <li key={ comment.commentId }>{ comment.description }</li>)
                        }
                    </div>
                }
            </div>
        </motion.section>
    );
}

export default ProductView;