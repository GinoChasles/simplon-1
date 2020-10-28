import React from 'react'
import { Card } from 'react-bootstrap';

export default function CityList() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Où nous trouver?</Card.Title>
                <Card.Text>Vous pourrez trouver nos agences dans plus de 13 grandes villes de France et de
Belgique</Card.Text>
                <div id="city-grid">
                    <Card.Text id="city-list">
                        <div className="city-name">MONTAUBAN</div>
                        <div className="city-name">LIMOGES</div>
                        <div className="city-name">NANTES</div>
                        <div className="city-name">TOURS</div>
                        <div className="city-name">QUIMPER</div>
                        <div className="city-name">LE HAVRE</div>
                        <div className="city-name">REIMS</div>
                        <div className="city-name">LILLE</div>
                        <div className="city-name">LIÈGE</div>
                        <div className="city-name">MÂCON</div>
                        <div className="city-name">CAEN</div>
                        <div className="city-name">DIJON</div>
                        <div><em>et bientôt</em></div>
                        <div><em>...</em></div>
                        <div className="city-name">STRASBOURG!</div>
                    </Card.Text>
                    <div id="map-container">
                        <div id="map" style={{ backgroundImage: "url(/img/map.png)" }}></div>
                    </div>
                </div>
            </Card.Body>

        </Card >
    )
}
