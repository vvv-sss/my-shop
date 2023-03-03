import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "imageUrl": '',
    "name": '',
    "count": null,
    "size": {
        "width": null,
        "height": null
    },
    "weight": null,
    "comments": ['']
};

export const productViewSlice = createSlice({
    name: 'product-list',
    initialState,
    reducers: {
        setProductView: (state, action) => {
            return action.payload;
        },
        editImageUrl: (state, action) => {
            state.imageUrl = action.payload;
        },
        editName: (state, action) => {
            state.name = action.payload;
        },
        editCount: (state, action) => {
            state.count = action.payload;
        },
        editWidth: (state, action) => {
            state.size.width = action.payload;
        },
        editHeight: (state, action) => {
            state.size.height = action.payload;
        },
        editWeight: (state, action) => {
            state.weight = action.payload;
        }
    }
});

export const { setProductView, editImageUrl, editName, editCount, editWidth, editHeight, editWeight } = productViewSlice.actions;

export default productViewSlice.reducer;