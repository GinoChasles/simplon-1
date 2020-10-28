import React from 'react'
import { Card, CardColumns } from 'react-bootstrap';

import Review from './Review';

export default function Footer({ id }) {
    return (
        <Card id="footer">
            <div className="fa fa-phone"> +33606060606</div>
            <div className="fa fa-home"> Rue des bonnes affaires - 75000 Paris</div>
            <div className="fa fa-at" > contact@jaipasdevoiture.com</div>
        </Card >
    )
}
