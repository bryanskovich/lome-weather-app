import {
    FETCH_DATA,
    DATA_ERROR
} from '../Types'
export default (state,action) => {
  switch (action.type) {
    case FETCH_DATA:
        return {
            ...state,
            currentWeather : [action.payload,...state.contacts],
            forecast :  [action.payload,...state.contacts],
            loading:false
        }

    case DATA_ERROR : 
    return {
        ...state,
        error:action.payload
    }

      default:
        return state
  }
}
