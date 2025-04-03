import {combineReducers} from "@reduxjs/toolkit"
import themeReducer from "./themeReducer/themeReducer"

export const rootReducer = combineReducers({
    theme: themeReducer
})