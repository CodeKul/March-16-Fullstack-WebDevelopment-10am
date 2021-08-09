import React from 'react'
import { Card } from 'react-bootstrap'

import image from "../images/image.png"

export default function CardsEx() {
    return (
        <div>
            <Card style={{width: '400px', height: '400px'}}>

                <Card.Img variant="top" src={image}/>

                <Card.Title>Card one</Card.Title>
                <Card.Text>lorem ipsum dolor sit amet, consectetur adip</Card.Text>


            </Card>
        </div>
    )
}
