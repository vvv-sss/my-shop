import { configureStore } from '@reduxjs/toolkit';
import productListReducer from '../components/product-list/productListSlice';
import addProductReducer from '../components/add-product-form/addProductFormSlice';
import addCommentReducer from '../components/add-comment-input/addCommentSlice';
import editProductReducer from '../components/edit-product-form/editProductFormSlice';

export const store = configureStore({
    reducer: {
        productList: productListReducer,
        addProduct: addProductReducer,
        addComment: addCommentReducer,
        editProduct: editProductReducer,
    },
});