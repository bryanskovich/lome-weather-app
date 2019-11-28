import React ,{useEffect, Fragment} from 'react';
import {Col , Container, Row ,Card ,CardText, CardTitle, Badge} from "reactstrap"
import { WiHumidity ,WiDayCloudy } from 'weather-icons-react';
import Swiper from 'swiper'
export const InfoCard = () => {
    const cityId = "2365267"
 
  useEffect(()=> {
    let swiper = new Swiper('.swiper-container',{
      direction: 'horizontal',
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
  
    /* 
    getData()
    
  })
  const getData = async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&lang=fr&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      const a= await res.json()
      console.log(a)
    } catch (e) {
    console.log(e)

    }*/
  })
    return (
        <Fragment>
        <div  className="transition"></div>
        <section className="infos animate-in" >
            
            <h1>About</h1>
            <p>PWA Weather Application made with React/Scss/ES6</p>
            <p>This is a personal project built in my spare time for learning purposes.</p>
            <h2>APIs</h2>
            <ul>
            <li><a className="link" href="https://www.ipify.org" target="_blank" rel="noopener noreferrer">Ipify (ip address)</a></li>
            <li><a className="link" href="https://ipstack.com" target="_blank" rel="noopener noreferrer">IpStack (ip based geolocation)</a></li>
            <li><a className="link" href="https://darksky.net" target="_blank" rel="noopener noreferrer">DarkSky (weather forecasting)</a></li>
            <li><a className="link" href="https://opencagedata.com/" target="_blank" rel="noopener noreferrer">OpenCage (reverse geolocation)</a></li>
            </ul>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/iondrimba/react-weather-app" className="github" title="Github">
           
            </a>
        </section>
        </Fragment>
    )
}
