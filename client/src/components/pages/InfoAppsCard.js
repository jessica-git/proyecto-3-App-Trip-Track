import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import booking from "../../images/booking.png"


const InfoAppsCard = () => {

    return (<Row>
        <Col md={3}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={booking} />
                <Card.Body>
                    <Card.Title>Booking</Card.Title>
                    <Card.Text>
                        Con Booking podremos buscar hoteles desde cualquier rincón del mundo.
                        Además podremos ver todas nuestras reservas en modo offline
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Airbnb</Card.Title>
                    <Card.Text>
                        Podemos encontrar apartamentos por todo el mundo y gestionar nuestras
                        reservas desde la app y mantenerte en contacto con nuestro  anfitrión.
                    </Card.Text>
                </Card.Body>
            </Card>

        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Wikiloc</Card.Title>
                    <Card.Text>
                        Podemos consultar rutas en nuestra zona o crearlas para compartirías con la comunidad.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Flush</Card.Title>
                    <Card.Text>
                        Flush cuenta con una gran base de datos con la localización de 
                        cuartos de baño de muchas ciudades del mundo.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Wifi Map</Card.Title>
                    <Card.Text>
                        Con Wifi Map verás las redes wifi más cercanas a donde te encuentras y 
                        además te dará las claves para poder conectarte.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Wifi Map</Card.Title>
                    <Card.Text>
                        Con Wifi Map verás las redes wifi más cercanas a donde te encuentras y
                        además te dará las claves para poder conectarte.
                    </Card.Text>
                </Card.Body>
            </Card>

        </Col>


    </Row>
    )
}

export default InfoAppsCard

