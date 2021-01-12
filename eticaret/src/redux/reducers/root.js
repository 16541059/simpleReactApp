import { combineReducers } from 'redux';
import booksListReducer from './booksListReducer'
import cartReducer from './cartReducer';
import usersReducer from "./usersReducer"

const rootReducer= combineReducers({
   
    booksListReducer,
    cartReducer,
    usersReducer
   
})

export default rootReducer;