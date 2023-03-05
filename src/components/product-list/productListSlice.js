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

            if (property === 'count') {
                state.sort((a, b) => {
                    const x = Number.parseInt(a[property]);
                    const y = Number.parseInt(b[property]);
                    return x - y;
                })
            }

            if (property === 'name') {
                state.sort((a, b) => {
                    const x = a[property].toUpperCase();
                    const y = b[property].toUpperCase();
                    return (x < y) ? -1 : (x > y) ? 1 : 0;
                });
            }
        },
        sortDataDescendent: (state, action) => {

            const { property } = action.payload;

            if (property === "count") {
                state.sort((a, b) => {
                    const x = Number.parseInt(a[property]);
                    const y = Number.parseInt(b[property]);
                    return y - x;
                })
            }

            if (property === 'name') {
                state.sort((a, b) => {
                    const x = a[property].toUpperCase();
                    const y = b[property].toUpperCase();
                    return (x < y) ? 1 : (x > y) ? -1 : 0;
                });
            }
        }
    }
});

export const { setProducts, sortDataAscendent, sortDataDescendent } = productListSlice.actions;

export default productListSlice.reducer;