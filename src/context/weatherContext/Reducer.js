import {
    FETCH_DATA,
    DATA_ERROR,
    GET_CURRENT_WEATHER
} from '../Types'
export default (state,action) => {
  switch (action.type) {
    case FETCH_DATA:
        return {
            ...state,
            forecast :  action.payload.list,
            loading:false
        }
      case GET_CURRENT_WEATHER:
        return {
            ...state,
            currentWeather : action.payload,
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
