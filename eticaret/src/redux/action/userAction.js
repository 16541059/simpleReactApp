import * as actionTypes from "./actionTypes";

export function getUsersSuccess(users){
    
    return {type:actionTypes.GET_USERS_SUCCES,payload:users}
}

export function getUsers(){

    return function(dispatch){
       
        let url="http://localhost:3001/users";
         fetch(url).then(response => response.json())
         .then(result=>dispatch(getUsersSuccess(result)))
         
    }
}