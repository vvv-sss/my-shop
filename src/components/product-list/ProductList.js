import { useEffect, useState, useContext } from "react";
import { addProductContext } from "../../App";
import { getProductList } from "../../helpers/getProductList";
import AddProductForm from "../add-product-form/AddProductForm";
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, sortDataAscendent, sortDataDescendent } from './productListSlice';
import { setProductView } from '../product-view/productViewSlice';
import { collection, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import ProductView from "../product-view/ProductView";

const ProductList = () => {

    const { addProduct, setAddProduct } = useContext(addProductContext);

    const [selectValue, setSelectValue] = useState("Name A-Z");
    const [productViewActive, setProductViewActive] = useState(false);
    
    const productList = useSelector((state) => state.productList);
    const dispatch = useDispatch();

    const productsCollectionRef = collection(db, 'products');

    useEffect(() => {
        getProductList()
            .then(data => {
                dispatch(setProducts(data))
            });
    }, []);

    const handleSelectChange = (e) => {
        const option = e.target.value;
        if (option === "Name A-Z") {
            dispatch(sortDataAscendent({ property: 'name' }));
            setSelectValue(option);
        } else if (option === "Name Z-A") {
            dispatch(sortDataDescendent({ property: 'name' }));
            setSelectValue(option);
        } else if (option === "Qty ascendent") {
            dispatch(sortDataAscendent({ property: 'count' }));
            setSelectValue(option);
        } else if (option === "Qty descendent") {
            dispatch(sortDataDescendent({ property: 'count' }));
            setSelectValue(option);
        }
    }

    const handleDeleteClick = async (id) => {
        window.confirm("Do you really want to remove this product?");
        const productToRemove = doc(db, 'products', id);
        await deleteDoc(productToRemove);
    }

    return ( 
        <section className="product-list">
            { addProduct && <AddProductForm setAddProduct={ setAddProduct } /> }
            { !addProduct && !productViewActive &&
                <>  
                    <select onChange={ (e) => handleSelectChange(e) }>
                        <option>Name A-Z</option>
                        <option>Name Z-A</option>
                        <option>Qty ascendent</option>
                        <option>Qty descendent</option>
                    </select>
                    <ul className="products">
                        {productList.map(product => {
                            return (
                                <li key={ product.id }>
                                    <span>{ product.name }</span>
                                    <span>Qty: { product.count }</span>
                                    <div>
                                        <button onClick={ () => {
                                            dispatch(setProductView(product))
                                            setProductViewActive(true);
                                        }}>
                                            View
                                        </button>
                                        <button onClick={ () => handleDeleteClick(product.id) }>Delete</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </>
            }
            { productViewActive && <ProductView setProductViewActive={ setProductViewActive } /> }
        </section>
    );
}

export default ProductList;