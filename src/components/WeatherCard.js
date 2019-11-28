import React ,{useEffect} from 'react';
import {Col , Container, Row ,Card ,CardText, CardTitle} from "reactstrap"
import { WiHumidity ,WiDayCloudy ,WiDaySunny} from 'weather-icons-react';
import Swiper from 'swiper'
export const WeatherCard = () => {
   
 
  useEffect(()=> {

    new Swiper('.swiper-container',{
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
        <Container fluid>
            <Row className=" justify-content-center">
                <Col md="6" >
                    <Card style={{background : 'linear-gradient(to bottom, #297af9, #333fb7)', borderRadius: '10px', padding: '10px'}}>
                        <Row className=" justify-content-center">
                            <Col md="6" >
                            <CardTitle className="display-3">Lomé</CardTitle>
                            <CardTitle className="display-4">Mardi</CardTitle>
                            <CardText className=" h3">17/10/2019</CardText>
                            <CardText className="lead ">Vent 74 km/h</CardText>
                            <WiHumidity size={80} className="float-left" />
                            <CardText className="display-4">30 %</CardText>
                            </Col>
                            <Col md="6" >
                            <div className="float-right">
                            <i className="fas fa-arrow-up"></i><span className="text"> 10 </span><i className="fas fa-arrow-down"></i><span className="text"> 20 </span>
                            <i className="fas fa-info-circle info-btn button-info"></i>

                            </div>
                            <WiDayCloudy size={100}  />
                                <CardTitle className="display-3"> 22°C</CardTitle>
                                <CardTitle className="display-4 ">CLOUDINARY </CardTitle>
                            </Col>
                            <Col md="6" >
                            
                            <div className="swiper-container">

                                <div className="swiper-wrapper">
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
                                    <div className="swiper-slide">Slide 2</div>
                                    <div className="swiper-slide">Slide 3</div>
                                    <div className="swiper-slide">Slide 4</div>
                                    <div className="swiper-slide">Slide 5</div>
                                    <div className="swiper-slide">Slide 6</div>
                                    <div className="swiper-slide">Slide 7</div>
                                    <div className="swiper-slide">Slide 8</div>
                                    <div className="swiper-slide">Slide 9</div>
                                    <div className="swiper-slide">Slide 10</div>
                                </div>

                                <div className="swiper-button-next swiper-button-white"></div>
                                <div className="swiper-button-prev swiper-button-white"></div>
                        
                            </div>
                        </Col>
                    </Row>
                </Card> 
            </Col>
        </Row>
      </Container>   
    )
}
