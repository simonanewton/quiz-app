import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

function Header() {
    return (
        <Navbar variant="light" expand="lg" className="p-4">
            <Navbar.Brand as={Link} to="/" className="text-white d-flex align-items-center">
                <img src={require('./assets/logo.png')} width="250px" alt="logo" />
            </Navbar.Brand>

            <ListGroup horizontal className="ml-auto">
                {/* <ListGroup.Item action as={Link} to="/" className="text-nowrap">
                    <span className="pr-2 menuBtn">Home</span>
                    <FontAwesomeIcon icon={faHome} className="icons" />
                </ListGroup.Item>
                <ListGroup.Item action as={Link} to="/settings" className="text-nowrap">
                    <span className="pr-2 menuBtn">Settings</span>
                    <FontAwesomeIcon icon={faCog} className="icons" />
                </ListGroup.Item> */}
                <ListGroup.Item action as={Link} to="/signin" className="text-nowrap">
                    <span className="pr-2 menuBtn">Sign In</span>
                    <FontAwesomeIcon icon={faSignOutAlt} className="icons" />
                </ListGroup.Item>
            </ListGroup>
        </Navbar>
    );
}
export default Header;
