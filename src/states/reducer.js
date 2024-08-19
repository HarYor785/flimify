import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import settingSlice from "./settingSlice";

const reducer = combineReducers({
    user: userSlice,
    setting: settingSlice
})

export default reducer