import * as actionTypes from "../action/actionTypes"

export default function cartReducer(state=[],action){
switch (action.type) {
    case actionTypes.ADD_TO_CART:
        var addedItem = state.find(cart => cart.books._id===action.payload.books._id)
        if(addedItem){
            var newState= state.map(cartItem=>{
                if(cartItem.books._id===action.payload.books._id){
                    return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                }
                return cartItem
            })
            return newState
        }else{
            return[...state,{...action.payload}]
        }
    case actionTypes.REMOVE_FROM_CART:
        const trashState =state.filter(cartItem => cartItem.books._id!==action.payload._id)
        return trashState
    case actionTypes.QUANTİTYMİNUS:
        var addedItem1 = state.find(cart => cart.books._id===action.payload.books._id)
        if(addedItem1){
            var newState1= state.map(cartItem=>{
                if(cartItem.books._id===action.payload.books._id){
                    if(addedItem1.quantity >0){
                        return Object.assign({},addedItem1,{ quantity:addedItem1.quantity-1})
                    }
                
                   
                }
                return cartItem
            })
            return newState1
        }else{
            return[...state,{...action.payload}]
        }
    default:
        return state
}

}