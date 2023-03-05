import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    'commentId': null, 
    'productId': null,
    'description': '',
    'date': ''
}

export const addCommentSlice = createSlice({
    name: 'add-comment',
    initialState,
    reducers: {
        setInitialCommentState: () => {
            return initialState;
        },
        setCommentId: (state, action) => {
            state.commentId = action.payload;
        },
        setProductIdForComment: (state, action) => {
            state.productId = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        }
    }
});

export const { 
    setInitialCommentState, 
    setCommentId, 
    setProductIdForComment, 
    setDescription, 
    setDate 
    
} = addCommentSlice.actions;

export default addCommentSlice.reducer;