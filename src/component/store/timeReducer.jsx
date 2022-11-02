const timeState = {
    minute: '',
    second: '',
    msecond: '',
    time: []
}

const GET_MIN = 'GET_MIN'
const GET_SEC = 'GET_SEC'
const GET_MSEC = 'GET_MSEC'
const GET_TIME = 'GET_TIME'

export const timeReducer = (state = timeState, action) => {
  switch(action.type){

      case GET_MIN: 
        return {...state, minute: action.payload}

      case GET_SEC: 
        return {...state, second: action.payload}

      case GET_MSEC: 
        return {...state, msecond: action.payload}

      case GET_TIME:
        return {...state, time: [...state.time, action.payload]}

      default: 
        return state
      
  }
}

export const getMinuteAction = (payload) => ({type: GET_MIN, payload})
export const getSecondAction = (payload) => ({type: GET_SEC, payload})
export const getMsecondAction = (payload) => ({type: GET_MSEC, payload})
export const getTimeAction = (payload) => ({type: GET_TIME, payload})