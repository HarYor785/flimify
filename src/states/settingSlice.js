import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar: true
}

const settingSlice = createSlice({
    name: "setting",
    initialState,
    reducers: {
        toggleSidebar: (state, action) => {
            state.sidebar = action.payload
        }
    }
})

export const { toggleSidebar } = settingSlice.actions

export default settingSlice.reducer