// ___React___________________________________________________________________________________________________________
import { useState, useEffect } from 'react';
// ___Redux___________________________________________________________________________________________________________
import { setProducts } from './product-list/productListSlice';
import { useDispatch } from 'react-redux';
// ___Components______________________________________________________________________________________________________
import Aside from './Aside';
import ProductList from './product-list/ProductList';
import AddProductForm from './add-product-form/AddProductForm';
import ProductView from './ProductView';
import EditProductForm from './edit-product-form/EditProductForm';
// ___Helpers_________________________________________________________________________________________________________
import { getProducts } from '../helpers/getProducts';

const Main = () => {

    const [addProduct, setAddProduct] = useState(false);
    const [productId, setProductId] = useState(null);
    const [productViewActive, setProductViewActive] = useState(false);
    const [edit, setEdit] = useState(false);
    const [productRemoved, setProductRemoved] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        getProducts()
            .then(data => dispatch(setProducts(data)));
        setProductRemoved(false);
    }, [addProduct, edit, productRemoved]);

    return ( 
        <main>
            <Aside 
                setAddProduct={ setAddProduct } 
                setProductViewActive={ setProductViewActive }
                setEdit={ setEdit } 
            />
            { !addProduct && !productViewActive &&
                <ProductList 
                    setProductViewActive={ setProductViewActive } 
                    setProductId={ setProductId }
                    setProductRemoved={ setProductRemoved }
                />
            }
            { addProduct && 
                <AddProductForm setAddProduct={ setAddProduct } /> 
            }
            { !addProduct && !edit && productViewActive && 
                <ProductView 
                    setProductViewActive={ setProductViewActive } 
                    setEdit={ setEdit } 
                    productId={ productId }
                /> 
            }
            { !addProduct && edit &&
                <EditProductForm 
                    setEdit={ setEdit } 
                    productId={ productId }
                />
            }
        </main>
    );
}

export default Main;