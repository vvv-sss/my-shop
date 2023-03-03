import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const productListSlice = createSlice({
    name: 'product-list',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            return action.payload;
        },
        sortDataAscendent: (state, action) => {
            const { property } = action.payload;
            state.sort((a, b) => {
                if (a[property] < b[property]) {
                return -1;
                }
                if (a[property] > b[property]) {
                return 1;
                }
                return 0;
            });
        },
        sortDataDescendent: (state, action) => {
            const { property } = action.payload;
            state.sort((a, b) => {
                if (a[property] < b[property]) {
                return 1;
                }
                if (a[property] > b[property]) {
                return -1;
                }
                return 0;
            });
        },
        sortWithID: (state, action) => {
            return state.find(product => product.id === action.payload);
        }
    }
});

export const { setProducts, sortDataAscendent, sortDataDescendent, sortWithID } = productListSlice.actions;

export default productListSlice.reducer;