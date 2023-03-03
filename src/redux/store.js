import { configureStore } from '@reduxjs/toolkit';
import productListReducer from '../components/product-list/productListSlice';
import addProductReducer from '../components/add-product-form/addProductSlice';
import productViewReducer from '../components/product-view/productViewSlice';

export const store = configureStore({
    reducer: {
        productList: productListReducer,
        addProduct: addProductReducer,
        productView: productViewReducer
    },
})