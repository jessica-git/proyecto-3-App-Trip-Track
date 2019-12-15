import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

import { MDBFileInput } from 'mdbreact'

import TravelService from "../../service/Travel.service"
import FilesService from '../../service/Files.service'

const Day = (
    { _id,
        place,
        day,
        lodgings,
        placeToVisit,
        paidExcursions,
        transport,
        restaurantsMeals,
        tips,
        imageUrl }
) => {
    return (
        <>
            <Form.Group>
                <Form.Label>Lugar</Form.Label>
                <Form.Control type="text" name="title" onChange={this.handleInputChange} value={this.state.travel.place} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Días</Form.Label>
                <Form.Control type="text" name="description" onChange={this.handleInputChange} value={this.state.travel.days} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Alojamiento</Form.Label>
                <Form.Control type="text" name="title" onChange={this.handleInputChange} value={this.state.travel.people} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Lugares para visitar</Form.Label>
                <Form.Control type="text" name="description" onChange={this.handleInputChange} value={this.state.travel.totalPrice} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Excursiones pagadas</Form.Label>
                <Form.Control type="text" name="title" onChange={this.handleInputChange} value={this.state.travel.place} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Transporte</Form.Label>
                <Form.Control type="text" name="description" onChange={this.handleInputChange} value={this.state.travel.days} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Comidas y restaurantes</Form.Label>
                <Form.Control type="text" name="title" onChange={this.handleInputChange} value={this.state.travel.people} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Consejos</Form.Label>
                <Form.Control type="text" name="description" onChange={this.handleInputChange} value={this.state.travel.totalPrice} />
            </Form.Group>

            < Form.Label > Sube tus mejores fotos</Form.Label >
            <MDBFileInput multiple btnColor="info" />
            {/* < Form.Control name="imageUrl" type="file" onChange={this.handleFileUpload} /> */}
        </>
    )

}


{/* <Form.Group>
    <Form.Label>Imagen URL (archivo)</Form.Label>
    <Form.Control name="imageUrl" type="file" onChange={this.handleFileUpload} />
</Form.Group>

import FilesService from '../../service/Files.service' */}