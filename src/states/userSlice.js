import { createSlice } from "@reduxjs/toolkit";

const isClient = typeof window !== "undefined"

const initialState = {
    user: isClient ? JSON.parse(localStorage.getItem('flimify_hub')) ?? {} : null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload
            localStorage.setItem('flimify_hub', JSON.stringify(action.payload))
        },
        removeUser: (state) => {
            state.user = {}
            localStorage.removeItem('flimify_hub')
        }
    }
})

export const handleSetUser = (state) =>{
    return (dispatch) => dispatch(userSlice.actions.setUser(state))
}

export const handleRemoveUser = (state) =>{
    return (dispatch) => dispatch(userSlice.actions.removeUser())
}


export default userSlice.reducer