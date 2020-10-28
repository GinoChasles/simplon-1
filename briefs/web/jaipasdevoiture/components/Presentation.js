import React from 'react'
import { Card } from 'react-bootstrap';

export default function Presentation({ id, title, text }) {
    return (
        <Card >
            <Card.Body>
                <Card.Title>Qui sommes-nous?</Card.Title>
                <Card.Text id="presentation-text">
                    <div>
                        Créé en 1863, Jaipasdevoiture est une entreprise familiale de location de véhicule.
                    </div>
                    <div>
                        Avant tout orienté vers la satisfaction du client, notre société s’est toujours efforcé de proposer un service personnalisé et de qualité.
                    </div>

                    <div>
                        Nous nous somme toujours adapté à chaque changement des habitudes de consommation de nos clients.
                    </div>
                    <div>
                        Jaipasdevoiture c’est plus de 2800 véhicules, de la voiture de tourisme au camion semi-remorque en passant par le vélo électrique.
                    </div>
                    <div>
                        Tout ce qu’il faut quelque soit votre besoin ou vos envies.
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
