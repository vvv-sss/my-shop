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
    "comments": []
};

export const editProductFormSlice = createSlice({
    name: 'edit-product',
    initialState,
    reducers: {
        setEditProduct: (state, action) => {
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
        },
        removeComment: (state, action) => {
            const id = action.payload;
            state.comments = state.comments.filter(comment => comment.commentId !== id);
        },
        addComment: (state, action) => {
            state.comments = [...state.comments, action.payload]
        }
    }
});

export const { 
    setEditProduct, 
    editImageUrl, 
    editName, 
    editCount, 
    editWidth, 
    editHeight, 
    editWeight,
    removeComment,
    addComment

} = editProductFormSlice.actions;

export default editProductFormSlice.reducer;