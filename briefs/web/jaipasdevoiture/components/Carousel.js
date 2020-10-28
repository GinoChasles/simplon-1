import React, { useState } from 'react';

import { Carousel, Card } from 'react-bootstrap';

function Carrousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} id="carousel">
            <Carousel.Item>
                <img className="d-block w-100" src="/img/cars/car-1.jpg" alt="Looping car" />

                <Carousel.Caption>
                    <h1>VOITURES . 12€/J</h1>
                    <p>300€ de caution. Assurance supplémentaire optionnel</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src="/img/cars/bike-1.jpg" alt="Looping car" />

                <Carousel.Caption>
                    <h1>VELOS . 8€/J</h1>
                    <p>Pas de caution. Location de casque gratuite</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src="/img/cars/camionnette-1.jpg" alt="Looping car" />

                <Carousel.Caption>
                    <h1>CAMIONETTES 30€/J</h1>
                    <p>500€ de caution. Assurance supplémentaire optionnel</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src="/img/cars/semi-remorque-1.jpg" alt="Looping car" />

                <Carousel.Caption>
                    <h1>SEMI-REMORQUES</h1>
                    <p>Contactez-nous pour nous faire part de vos besoins</p>
                    <div className="carousel-bg"></div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    );
}

export default Carrousel;