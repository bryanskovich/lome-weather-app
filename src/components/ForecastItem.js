import React from 'react'
import {Row,Col,CardText, CardTitle} from "reactstrap"
import { WiHumidity  } from 'weather-icons-react';
import Moment from 'react-moment';
import 'moment/locale/fr';

export const ForecastItem = ({data}) => {
    
    return (
        <div className="swiper-slide">
            <Row className=" justify-content-center">
                <Col md="12" >
                    <CardTitle >
                    <Moment local="fr" format="dddd">{data.dt_txt}</Moment>
                    </CardTitle>
                    <CardText >
                    <Moment local="fr" format="DD/MM/YYYY HH:mm">{data.dt_txt}</Moment>
                    </CardText>
                    <img  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon"/> {data.main.temp} °C
                    <WiHumidity size={80} className="d-inline" />
                    <CardText className="d-inline">{data.main.humidity} %</CardText>
                </Col>
            </Row>
        </div>
    )
}
