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
import Moovit from "../../images/moovit.png"

import '../../styelsheets/Pages.css'



const InfoAppsCard = () => {

    return (
        <>

            <div className="imgHeader">
                <h2>LAS MEJORES APPS PARA VIAJAR</h2>
            </div>
            <div className="backgroundPage top">
                <Container>
                    <Row md={4} className="infoApps">
                        <Card className="oneCardTravels">
                            <Card.Img variant="top" src={Booking} />
                            <Card.Body>
                                <Card.Title><strong>Booking</strong></Card.Title>
                                <Card.Text>
                                    Con Booking podremos buscar hoteles desde cualquier rincón del mundo.
                                    Además podremos ver todas nuestras reservas en modo offline
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="oneCardTravels">
                            <Card.Img variant="top" src={Airbnb} className="centerCardAppsAirbnb" />
                            <Card.Body>
                                <Card.Title><strong>Airbnb</strong></Card.Title>
                                <Card.Text>
                                    Podemos encontrar apartamentos por todo el mundo y gestionar nuestras
                                    reservas desde la app y mantenerte en contacto con nuestro  anfitrión.
                                 </Card.Text>
                            </Card.Body>
                        </Card>


                        <Card className="oneCardTravels">
                            <Card.Img variant="top" src={Wikiloc} />
                            <Card.Body>
                                <Card.Title><strong>Wikiloc</strong></Card.Title>
                                <Card.Text>
                                    Podemos consultar rutas en nuestra zona o crearlas para compartirías con la comunidad.
                                 </Card.Text>
                            </Card.Body>
                        </Card>


                        <Card className="oneCardTravels">
                            <Card.Img variant="top" src={Flush} />
                            <Card.Body>
                                <Card.Title><strong>Flush</strong></Card.Title>
                                <Card.Text>
                                    Flush cuenta con una gran base de datos con la localización de
                                    cuartos de baño de muchas ciudades del mundo.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="oneCardTravels">
                            <Card.Img variant="top" src={WifiMap} />
                            <Card.Body>
                                <Card.Title><strong>Wifi Map</strong></Card.Title>
                                <Card.Text>
                                    Con Wifi Map verás las redes wifi más cercanas a donde te encuentras y
                                    además te dará las claves para poder conectarte.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="oneCardTravels">
                            <Card.Img variant="top" src={Omio} />
                            <Card.Body>
                                <Card.Title><strong>Omio</strong></Card.Title>
                                <Card.Text>
                                    Con Omio podrás encontrar el mejor precio para ir de una ciudad a otra,
                                    tanto en autobús como en tren o avión.
                                 </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="oneCardTravels">
                            <Card.Img variant="top" src={TuneIn} className="centerCardAppsTuneIn" />
                            <Card.Body>
                                <Card.Title><strong>TuneIn</strong></Card.Title>
                                <Card.Text>
                                    Con esta aplicación tendremos en nuestro teléfono más de 100.000 emisoras de radio.
                                    De este modo podremos escuchar lo que queramos en cualquier momento y desde cualquier país.
                                 </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="oneCardTravels">
                            <Card.Img variant="top" src={Weather} />
                            <Card.Body>
                                <Card.Title><strong>WeatherPro</strong></Card.Title>
                                <Card.Text>
                                    Con la aplicación de Weather Pro tendremos en nuestro móvil siempre disponible la
                                    predicción meteorológica con previsión de 7 días en todos los lugares del mundo.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="oneCardTravels">
                            <Card.Img variant="top" src={Moovit} />
                            <Card.Body>
                                <Card.Title><strong>Moovit</strong></Card.Title>
                                <Card.Text>
                                    Aplicación se gran utilidad para aprender a movernos por las diferentes ciudades 
                                    del mundo, nos indica y asiste a la hora de coger el transporte público.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default InfoAppsCard

