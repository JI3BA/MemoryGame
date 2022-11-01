const authState = {
    auth: false
}

const ADD_AUTH = 'ADD_AUTH'

export const authReducer = (state = authState, action) => {
  switch(action.type){

      case ADD_AUTH: 
        return {...state, auth: action.payload}

      default: 
        return state
      
  }
}

export const addAuthAction = (payload) => ({type: ADD_AUTH, payload})