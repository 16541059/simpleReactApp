import * as actionTypes from "../action/actionTypes"


export default function booksListReducer(state={categories:0},action) {
 switch (action.type) {
     case actionTypes.GET_BOOKS_SUCCESS:
         return action.payload
 
     default:
         return state
 }
}
