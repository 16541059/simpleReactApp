import * as actionTypes from "../action/actionTypes"


export default function usersReducer(state={categories:0},action) {
 switch (action.type) {
     case actionTypes.GET_USERS_SUCCES:
         return action.payload
 
     default:
         return state
 }
}