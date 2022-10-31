const usersState = {
    users: []
}

const ADD_USER = 'ADD_USER'

export const usersReducer = (state = usersState, action) => {
  switch(action.type){

      case ADD_USER: 
        return {...state, users: [...state.users, action.payload]}

      default: 
        return state
      
  }
}