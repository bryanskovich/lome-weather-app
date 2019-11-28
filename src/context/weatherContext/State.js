import React ,{useReducer} from 'react'
import WeatherContext from './Context'
import axios from 'axios'
import Reducer from './Reducer'
import {
    FETCH_DATA,
    DATA_ERROR
} from '../Types'


const State =  props => {
    const initialState = {
        currentWeather : null,
        forecast : null,
        loading : true,
        error : null
    }

    const [state,dispatch] = useReducer(Reducer,initialState)

    //Lomé id
    const cityId = "2365267"


    //fetch forecast (7 days)
    const fetchData = async () => {


        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?id=${cityId}&cnt=7&lang=fr&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            dispatch({type:FETCH_DATA,payload :res.data})
        } catch (e) {
            dispatch({type:DATA_ERROR,payload:e.response.message})
        }
        
    }

   
    return (
        <WeatherContext.Provider value={{
            currentWeather : state.currentWeather,
            loading : state.loading,
            error : state.error,
            forecast : state.forecast,
            fetchData : fetchData
        
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default  State