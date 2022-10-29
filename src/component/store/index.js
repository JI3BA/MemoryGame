import { createStore , combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logInReducer } from './logInReducer'
import { authReducer }  from './authReducer'
 

const rootReducer = combineReducers({
    logIn: logInReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, composeWithDevTools())