/* eslint-disable react-hooks/exhaustive-deps */


import React ,{useEffect, useState} from 'react';
import {Col , Container, Row ,Card ,CardText, CardTitle} from "reactstrap"
import { WiHumidity  } from 'weather-icons-react';
import Swiper from 'swiper'
import Moment from 'react-moment';
import 'moment/locale/fr';
import { css } from '@emotion/core';
import SweetAlert from 'sweetalert2-react';
import axios from 'axios'
// First way to import
import { RingLoader } from 'react-spinners';
import { ForecastItem } from './ForecastItem';
const override = css`
    display: block;
    margin: 0 auto;

`;


export const WeatherCard = () => {
  const [currentWeather,setCurrentWeather] =  useState(null)
  const [loading,setLoading] = useState(true)
  const [forecast,setForecast] = useState(null)
  const [error,setError] = useState(null)
  const [alert,setAlert] = useState(false)
   //Lomé id
   const cityId = "2365267"

   //get current weather 
  const getCurrentWeather = async () => {
    try {

      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&lang=fr&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)

      setCurrentWeather(res.data)

    } catch (e) {
      setError(e.response)
    }
       
  }


   //get forecast (5 days)
   const getForecast = async () => {
    try {

      const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&lang=fr&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)

      setForecast(res.data.list)

    } catch (e) {
      setError(e.response)
    }
       
  }
 
  useEffect(()=> {

    //Init forecast swiper 
    new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    //fetch data
    if(currentWeather==null && forecast == null) {
      getCurrentWeather() 
      getForecast()
      setLoading(false)
    }
  })




    return (
        <Container fluid>
            <Row className=" justify-content-center">
                <Col md="6" >
                    <Card style={{background : 'linear-gradient(to bottom, #297af9, #333fb7)', borderRadius: '10px', padding: '10px'}}>
                    {
                      currentWeather !==null && !loading && !error ? (
                        <Row className=" justify-content-center">

                            <Col md="6" >
                                <CardTitle className="display-3">Lomé</CardTitle>
                                <CardTitle className="display-4">
                                  <Moment local="fr" format="dddd">{new Date()}</Moment>
                                </CardTitle>
                                <CardText className=" h3">
                                  <Moment format="DD/MM/YYYY">{new Date()}</Moment>
                                </CardText>
                                <CardText className="lead ">Vent {(currentWeather.wind.speed * 3.6).toFixed(2)} km/h</CardText>
                                <WiHumidity size={80} className="float-left" />
                                <CardText className="display-4">{currentWeather.main.humidity} %</CardText>
                            </Col>

                            <Col md="6" >
                              <div className="float-right">
                              <i className="fas fa-arrow-down"></i><span className="text"> {currentWeather.main.temp_min}° </span><i className="fas fa-arrow-up"></i><span className="text"> {currentWeather.main.temp_max}° </span>
                              <i className="fas fa-info-circle info-btn button-info" onClick= { ()=> setAlert(true)}></i>
                              <SweetAlert show={alert} title="A propos" text="Service météo de Lomé v 0.1.0" onConfirm={ ()=> setAlert(false)}  />

                              </div>
                              <img  src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt="weather icon"/>
                                <CardTitle className="display-3 button-info"> {currentWeather.main.temp}°C</CardTitle>
                                <CardTitle className="display-4 "> {currentWeather.weather[0].description}</CardTitle>
                            </Col>
                            <Col md="6" >
                            
                            <div className="swiper-container">

                                <div className="swiper-wrapper">
                                {
                                  forecast!==null && !loading ? (forecast.map((data)=>(
                                    <ForecastItem data={data} key={data.dt}/>
                                  ))
                                  ) : (
                                    <RingLoader
                                      css={override}
                                      sizeUnit={"px"}
                                      size={150}
                                      color={'#fff'}
                                      loading={true}
                                    />
                                  )
                                }
                                </div>
                                <div className="swiper-button-next swiper-button-white"></div>
                                <div className="swiper-button-prev swiper-button-white"></div>  
                            </div>
                        </Col>
                      </Row>
                      ) : (

                        <RingLoader
                          css={override}
                          sizeUnit={"px"}
                          size={150}
                          color={'#fff'}
                          loading={true}
                        />
                      )
                    }
                    
              </Card> 
            </Col>
        </Row>
      </Container>   
    )
}
