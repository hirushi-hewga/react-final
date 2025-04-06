import {combineReducers} from "@reduxjs/toolkit"
import themeReducer from "./themeReducer/themeReducer"
import carReducer from "./carReducer/carReducer"

export const rootReducer = combineReducers({
    theme: themeReducer,
    car: carReducer
})