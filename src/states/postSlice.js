import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post: []
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
        addPost: (state, action) => {
            state.post = action.payload
        },
    }
})

export const handleAddPost = (state) =>{
    return (dispatch) => dispatch(postSlice.actions.addPost(state))
}


export default postSlice.reducer