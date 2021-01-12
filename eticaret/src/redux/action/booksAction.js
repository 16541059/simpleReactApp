import * as actionTypes from "./actionTypes";

export function getBooksSuccess(books){
    
    return {type:actionTypes.GET_BOOKS_SUCCESS,payload:books}
}

export function getBooks(){

    return function(dispatch){
       
        let url="http://localhost:3001/books";
         fetch(url).then(response => response.json())
         .then(result=>dispatch(getBooksSuccess(result)))
         
    }
}