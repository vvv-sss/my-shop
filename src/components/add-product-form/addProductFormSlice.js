import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    'productId': null,
    'name': '',
    'count': null,
    'size': {
        'width': null,
        'height': null
    },
    'weight': null,
    'comments': []
}

export const addProductSlice = createSlice({
    name: 'add-product',
    initialState,
    reducers: {
        setInitialState: () => {
            return initialState;
        },
        setProductId: (state, action) => {
            state.productId = action.payload;
        },
        setImageUrl: (state, action) => {
            state.imageUrl = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setCount: (state, action) => {
            state.count = action.payload;
        },
        setWidth: (state, action) => {
            state.size.width = action.payload;
        },
        setHeight: (state, action) => {
            state.size.height = action.payload;
        },
        setWeight: (state, action) => {
            state.weight = action.payload;
        },
        setComment: (state, action) => {
            state.comments = [action.payload];
        }
    }
});

export const {
    setInitialState,
    setProductId,
    setImageUrl, 
    setName, 
    setCount, 
    setWidth, 
    setHeight, 
    setWeight,
    setComment

} = addProductSlice.actions;

export default addProductSlice.reducer;