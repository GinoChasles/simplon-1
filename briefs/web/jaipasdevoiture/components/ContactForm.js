import React from 'react'

import { Card, Form, Button } from 'react-bootstrap';

export default function ContactForm() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Nous Contacter</Card.Title>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" placeholder="Votre nom" />
                    </Form.Group>

                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Titre</Form.Label>
                        <Form.Control type="text" placeholder="Le sujet de votre message" />
                    </Form.Group>

                    <Form.Group controlId="formTextarea1">
                        <Form.Label>Votre message</Form.Label>
                        <Form.Control as="textarea" placeholder="Nous répondrons dans les plus brefs délais" rows={3} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Envoyer
                </Button>
                </Form>
            </Card.Body>
        </Card>

    )
}
