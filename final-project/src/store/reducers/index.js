import {combineReducers} from '@reduxjs/toolkit'
import themeReducer from './themeReducer/themeReducer'
import userReducer from './userReducer/userReducer'
import appointmentReducer from './appointmentReducer/appointmentReducer'

export const rootReducer = combineReducers({
    theme: themeReducer,
    user: userReducer,
    appointment: appointmentReducer
})