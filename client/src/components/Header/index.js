import React from "react";
import { Navbar, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHome, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

function Header() {
    return (
        <Navbar bg="primary" variant="light" expand="lg" className="p-4">
            <Navbar.Brand href="/" className="text-white d-flex align-items-center">
                <h2 className="pr-3">QuizApp</h2>
                <FontAwesomeIcon icon={faBolt} size="2x" />
            </Navbar.Brand>

            <ListGroup horizontal className="ml-auto">
                <ListGroup.Item action href="/" className="text-primary text-nowrap">
                    <span className="pr-2">Home</span>
                    <FontAwesomeIcon icon={faHome} />
                </ListGroup.Item>
                <ListGroup.Item action href="/settings" className="text-primary text-nowrap">
                    <span className="pr-2">Settings</span>
                    <FontAwesomeIcon icon={faCog} />
                </ListGroup.Item>
                <ListGroup.Item action href="/signin" className="text-primary text-nowrap">
                    <span className="pr-2">Sign In</span>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </ListGroup.Item>
            </ListGroup>
        </Navbar>
    );
}

export default Header;
