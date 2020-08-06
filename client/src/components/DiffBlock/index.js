import React from "react";
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap";
// import "./index.css";

function HomeCard({ link, name, icon }) {
    return (
        <Link to={link} style={{ textDecoration: "none" }}>
            <Card text="light" style={{ width: '25rem', height: '3rem' }} className="m-3">
                <Card.Body className="mx-auto d-flex align-items-center">
                    <h2 className="pr-3">{name}</h2>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default HomeCard;
