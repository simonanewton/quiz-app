import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomeCard({ name, icon }) {
    return (
        <Card bg="primary" text="light" style={{ width: '30rem', height: '18rem' }} className="m-3">
            <Card.Body className="mx-auto d-flex align-items-center">
                <h2 className="pr-3">{name}</h2>
                <FontAwesomeIcon icon={icon} size="2x" />
            </Card.Body>
        </Card>
    );
}

export default HomeCard;
