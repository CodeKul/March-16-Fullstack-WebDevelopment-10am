import React from 'react'
import {combineReducers, useSelector} from "redux"
import {authReducer} from "./authReducer"
import {bankingReducer} from "./bankingReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    bank: bankingReducer,
})

