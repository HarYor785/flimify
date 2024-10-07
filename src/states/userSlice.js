import { createSlice } from "@reduxjs/toolkit";

const isClient = typeof window !== "undefined"

const initialState = {
    user: isClient ? JSON.parse(localStorage.getItem('flimify')) ?? {} : null,
    watchlist: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload
            localStorage.setItem('flimify', JSON.stringify(action.payload))
        },
        removeUser: (state) => {
            state.user = {}
            const lastUrl = window.location.href
            localStorage.setItem('lastUrl', lastUrl)
            localStorage.removeItem('flimify')
        },
        addWatchlist: (state, action) => {
            state.watchlist = action.payload
        }
    }
})

export const handleSetUser = (state) =>{
    return (dispatch) => dispatch(userSlice.actions.setUser(state))
}

export const handleRemoveUser = () =>{
    return (dispatch) => dispatch(userSlice.actions.removeUser())
}
export const handleAddWatchlist = (state) =>{
    return (dispatch) => dispatch(userSlice.actions.addWatchlist(state))
}


export default userSlice.reducer