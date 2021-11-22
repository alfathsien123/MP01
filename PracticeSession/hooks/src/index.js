import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// main component
import Main from './main'

// setup redux
// reducer -> mini state
const INITIAL_STATE = {
    id : null,
    UID : null,
    username : '',
    role : null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOGIN' :
            return {
                ...state,
                id : action.payload.id,
                UID : action.payload.UID,
                username : action.payload.username,
                role: action.payload.role
            }
        default :
            return state
    }
}

// combine all reducer
const allReducer = combineReducers({
    user : userReducer
})

// craete global storage
const STORE = createStore(allReducer)

// render main component
ReactDOM.render(
    <Provider store={STORE}>
        <BrowserRouter>
            <Main/>
        </BrowserRouter> 
    </Provider>
    ,document.getElementById('root')
)