import { createStore , combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logInReducer } from './logInReducer'
import { authReducer }  from './authReducer'
import { timeReducer } from './timeReducer'
import { usersReducer } from './usersReducer'
 

const rootReducer = combineReducers({
    logIn: logInReducer,
    auth: authReducer,
    time: timeReducer,
    users: usersReducer
})

export const store = createStore(rootReducer, composeWithDevTools())