const loginState = {
    name: '',
    level: ''
}

const GET_NAME = 'GET_NAME'
const GET_LEVEL = 'GET_LEVEL'

export const logInReducer = (state = loginState, action) => {
  switch(action.type){

      case GET_NAME: 
        return {...state, name: action.payload}

      case GET_LEVEL: 
        return {...state, level: action.payload}

      default: 
        return state
      
  }
}