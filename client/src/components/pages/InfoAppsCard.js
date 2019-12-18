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

                <Card.Body>
                    <Card.Link href="#">Another Link</Card.Link>
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

                <Card.Body>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>


    </Row>
    )
}

export default InfoAppsCard

