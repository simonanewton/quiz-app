import React from "react";
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomeCard({ link, name, icon }) {
    return (
        <div className="m-3">
            <Link to={link} style={{ textDecoration: "none" }}>
                <Card bg="primary" text="light" style={{ width: '30rem', height: '16rem' }}>
                    <Card.Body className="mx-auto d-flex align-items-center">
                        <h2 className="pr-3">{name}</h2>
                        <FontAwesomeIcon icon={icon} size="2x" />
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}

export default HomeCard;
