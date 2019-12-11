import React from 'react'
import { Container } from 'react-bootstrap'

const Index = () => {

    return (
        <Container>
            <section className="header">
                <div>
                    <h1>TripTrack</h1>
                    <p>Lhzsdjhsgfjhgsjhdfvshvdhjdgfjgdfjgdhfgshdg</p>
                </div>
                <reactPlayer url="#" />
            </section>
            <section className="indexBox">
                <h2>Inspirate con los viajes de otros usuarios</h2>
                <img src="#" alt=""></img>
                <h2>crea tu propio viaje y comparte</h2>
                <img src="#" alt=""></img>
                <h2>viaja con la planificacion de otros y puntúa</h2>
                <img src="#" alt=""></img>
            </section>
            <section>
                <p>Aqui va el serach</p>
            </section>
        </Container>
    )
}

export default Index