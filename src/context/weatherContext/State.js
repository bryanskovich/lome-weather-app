import React ,{useReducer} from 'react'
import WeatherContext from './Context'
import axios from 'axios'
import Reducer from './Reducer'
import {
    FETCH_DATA,
    DATA_ERROR,
    GET_CURRENT_WEATHER
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

    //fetch forecast (5 days)
    const getCurrentWeather = async () => {


        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&lang=fr&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            dispatch({type:GET_CURRENT_WEATHER,payload :res.data})
        } catch (e) {
            dispatch({type:DATA_ERROR,payload:e.response})
        }
        
    }


    //fetch forecast (5 days)
    const fetchData = async () => {


        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&lang=fr&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            dispatch({type:FETCH_DATA,payload :res.data})
        } catch (e) {
            dispatch({type:DATA_ERROR,payload:e.response})
        }
        
    }

   
    return (
        <WeatherContext.Provider value={{
            currentWeather : state.currentWeather,
            loading : state.loading,
            error : state.error,
            forecast : state.forecast,
            fetchData : fetchData,
            getCurrentWeather :getCurrentWeather
        
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default  State