import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import settingSlice from "./settingSlice";
import postSlice from "./postSlice";

const reducer = combineReducers({
    user: userSlice,
    setting: settingSlice,
    post: postSlice
})

export default reducer