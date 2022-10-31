const timeState = {
    minute: '',
    second: '',
    msecond: ''
}

const GET_MIN = 'GET_MIN'
const GET_SEC = 'GET_SEC'
const GET_MSEC = 'GET_MSEC'

export const timeReducer = (state = timeState, action) => {
  switch(action.type){

      case GET_MIN: 
        return {...state, minute: action.payload}

      case GET_SEC: 
        return {...state, second: action.payload}

      case GET_MSEC: 
        return {...state, msecond: action.payload}

      default: 
        return state
      
  }
}