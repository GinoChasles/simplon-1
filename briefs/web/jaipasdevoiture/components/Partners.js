import React from 'react'
import { Card, CardColumns } from 'react-bootstrap';

export default function Partners({ id, title, text }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Ils nous font confiance</Card.Title>
                <div id="partners-logos">
                    <Card.Img src={"img/logos/06.png"} alt="upply" />
                    <Card.Img src={"img/logos/04.png"} alt="kompass" />
                    <Card.Img src={"img/logos/01.png"} alt="déménageurs bretons" />
                    <Card.Img src={"img/logos/05.png"} alt="système u" />
                    <Card.Img src={"img/logos/03.png"} alt="gpc logistics" />
                    <Card.Img src={"img/logos/02.png"} alt="eluma trans" />

                </div>
            </Card.Body>
        </Card>
    )
}
