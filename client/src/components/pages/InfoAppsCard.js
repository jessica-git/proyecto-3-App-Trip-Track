import React from 'react'
import { Row, Card, Container } from 'react-bootstrap'
import Booking from "../../images/booking.png"
import Airbnb from "../../images/airbnb.jpg"
import Wikiloc from "../../images/wikiloc.png"
import Flush from "../../images/flush.jpg"
import WifiMap from "../../images/wifi-map.png"
import Omio from "../../images/omio.png"
import TuneIn from "../../images/TuneIn.png"
import Weather from "../../images/weather-pro.jpeg"



const InfoAppsCard = () => {

    return (
        <Container >

            <Row md={4}>

                <Card style={{ width: '18rem', margin: 20 }}>
                    <Card.Img variant="top" src={Booking} />
                    <Card.Body>
                        <Card.Title>Booking</Card.Title>
                        <Card.Text>
                            Con Booking podremos buscar hoteles desde cualquier rincón del mundo.
                            Además podremos ver todas nuestras reservas en modo offline
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: 20 }}>
                    <Card.Img variant="top" src={Airbnb} />
                    <Card.Body>
                        <Card.Title>Airbnb</Card.Title>
                        <Card.Text>
                            Podemos encontrar apartamentos por todo el mundo y gestionar nuestras
                            reservas desde la app y mantenerte en contacto con nuestro  anfitrión.
                    </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem', margin: 20 }}>
                    <Card.Img variant="top" src={Wikiloc} />
                    <Card.Body>
                        <Card.Title>Wikiloc</Card.Title>
                        <Card.Text>
                            Podemos consultar rutas en nuestra zona o crearlas para compartirías con la comunidad.
                    </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem', margin: 20 }}>
                    <Card.Img variant="top" src={Flush} />
                    <Card.Body>
                        <Card.Title>Flush</Card.Title>
                        <Card.Text>
                            Flush cuenta con una gran base de datos con la localización de
                            cuartos de baño de muchas ciudades del mundo.
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: 20 }}>
                    <Card.Img variant="top" src={WifiMap} />
                    <Card.Body>
                        <Card.Title>Wifi Map</Card.Title>
                        <Card.Text>
                            Con Wifi Map verás las redes wifi más cercanas a donde te encuentras y
                            además te dará las claves para poder conectarte.
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: 20 }}>
                    <Card.Img variant="top" src={Omio} />
                    <Card.Body>
                        <Card.Title>Omio</Card.Title>
                        <Card.Text>
                            Con Omio podrás encontrar el mejor precio para ir de una ciudad a otra,
                            tanto en autobús como en tren o avión.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin: 20 }}>
                    <Card.Img variant="top" src={TuneIn} />
                    <Card.Body>
                        <Card.Title>TuneIn</Card.Title>
                        <Card.Text>
                            Con esta aplicación tendremos en nuestro teléfono más de 100.000 emisoras de radio.
                            De este modo podremos escuchar lo que queramos en cualquier momento y desde cualquier país.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin: 20 }}>
                    <Card.Img variant="top" src={Weather} />
                    <Card.Body>
                        <Card.Title>WeatherPro</Card.Title>
                        <Card.Text>
                            Con la aplicación de Weather Pro tendremos en nuestro móvil siempre disponible la
                            predicción meteorológica con previsión de 7 días en todos los lugares del mundo.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default InfoAppsCard

