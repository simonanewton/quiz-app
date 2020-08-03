import React from "react";
import { Navbar, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

function Header() {
    return (
        <Navbar variant="light" expand="lg" className="p-4">
            <Navbar.Brand href="/" className="text-white d-flex align-items-center">
                <img src={require('./assets/quizzapplogo-white.png')} width="250px" />
            </Navbar.Brand>

            <ListGroup horizontal className="ml-auto">
                <ListGroup.Item action href="/" className="text-nowrap">
                    <span className="pr-2 menuBtn">Home</span>
                    <FontAwesomeIcon icon={faHome} className="icons" />
                </ListGroup.Item>
                <ListGroup.Item action href="/settings" className="text-nowrap">
                    <span className="pr-2 menuBtn">Settings</span>
                    <FontAwesomeIcon icon={faCog} className="icons" />
                </ListGroup.Item>
                <ListGroup.Item action href="/signin" className="text-nowrap">
                    <span className="pr-2 menuBtn">Sign In</span>
                    <FontAwesomeIcon icon={faSignOutAlt} className="icons" />
                </ListGroup.Item>
            </ListGroup>
        </Navbar>
    );
}

export default Header;
