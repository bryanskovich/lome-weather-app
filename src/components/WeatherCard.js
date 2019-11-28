/* eslint-disable react-hooks/exhaustive-deps */


import React ,{useEffect, useContext} from 'react';
import {Col , Container, Row ,Card ,CardText, CardTitle} from "reactstrap"
import { WiHumidity  } from 'weather-icons-react';
import Swiper from 'swiper'
import WeatherContext from '../context/weatherContext/Context'
import Moment from 'react-moment';
import 'moment/locale/fr';
import { css } from '@emotion/core';
// First way to import
import { RingLoader } from 'react-spinners';
import { ForecastItem } from './ForecastItem';
const override = css`
    display: block;
    margin: 0 auto;

`;


export const WeatherCard = () => {

  const weatherContext = useContext(WeatherContext)
  const {loading, getCurrentWeather,currentWeather ,fetchData , forecast} = weatherContext
 
  useEffect(()=> {

    new Swiper('.swiper-container')
    if(currentWeather==null && forecast == null) {
      getCurrentWeather() 
      fetchData()
    }
   
    
  })
  if(currentWeather!==null) {

    console.log(currentWeather)
    
  }
  if (forecast!==null) {
    console.log(forecast)
  }



    return (
        <Container fluid>
            <Row className=" justify-content-center">
                <Col md="6" >
                    <Card style={{background : 'linear-gradient(to bottom, #297af9, #333fb7)', borderRadius: '10px', padding: '10px'}}>
                    {
                      currentWeather !==null && !loading ? (
                        <Row className=" justify-content-center">
                            <Col md="6" >
                            <CardTitle className="display-3">Lomé</CardTitle>
                            <CardTitle className="display-4">
                              <Moment local="fr" format="dddd">{new Date()}</Moment>
                            </CardTitle>
                            <CardText className=" h3">
                              <Moment format="DD/MM/YYYY">{new Date()}</Moment>
                            </CardText>
                            <CardText className="lead ">Vent {currentWeather.wind.speed * 3600 / 1000} km/h</CardText>
                            <WiHumidity size={80} className="float-left" />
                            <CardText className="display-4">{currentWeather.main.humidity} %</CardText>
                            </Col>
                            <Col md="6" >
                            <div className="float-right">
                            <i className="fas fa-arrow-down"></i><span className="text"> {currentWeather.main.temp_min}° </span><i className="fas fa-arrow-up"></i><span className="text"> {currentWeather.main.temp_max}° </span>
                            <i className="fas fa-info-circle info-btn button-info"></i>

                            </div>
                            <img  src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt="weather icon"/>
                                <CardTitle className="display-3"> {currentWeather.main.temp}°C</CardTitle>
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
                                    <div className="swiper-slide">
                                      <Row className=" justify-content-center">
                                        <Col md="12" >
                                            <CardTitle >Mardi</CardTitle>
                                            <CardText >17/10/2019</CardText>
                                            <WiHumidity size={80} className="d-inline" />
                                            <CardText className="d-inline">30 %</CardText>
                                        </Col>
                                      </Row>
                                    </div>
                                    
                                </div>
                                <div className="swiper-pagination swiper-pagination-white "></div>
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
