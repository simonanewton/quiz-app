import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHome, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <header className="p-4 bg-primary d-flex justify-content-between">
            <div className="text-white d-flex align-items-center">
                <h2 className="pr-3">QuizApp</h2>
                <FontAwesomeIcon icon={faBolt} size="2x" />
            </div>

            <ListGroup horizontal>
                <ListGroup.Item action href="" className="text-primary text-nowrap">
                    <span className="pr-2">Home</span>
                    <FontAwesomeIcon icon={faHome} />
                </ListGroup.Item>
                <ListGroup.Item action href="" className="text-primary text-nowrap">
                    <span className="pr-2">Settings</span>
                    <FontAwesomeIcon icon={faCog} />
                </ListGroup.Item>
                <ListGroup.Item action href="" className="text-primary text-nowrap">
                    <span className="pr-2">Sign In</span>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </ListGroup.Item>
            </ListGroup>
        </header>
    );
}

export default Header;
