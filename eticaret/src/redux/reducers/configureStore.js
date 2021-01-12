import { createStore, applyMiddleware } from 'redux'
import  rootReducer from './root'
import thunk from 'redux-thunk'

export  default  function configureStore(){
    return createStore(rootReducer,applyMiddleware(thunk))
}