import React from "react";

function Header() {
    return (
        <header className="p-4 bg-primary d-flex justify-content-between">
            <div className="text-white d-flex align-items-center">
                <h2>QuizApp</h2>
                <i className="fas fa-bolt fa-2x pl-3"></i>
            </div>

            <ul className="list-group list-group-horizontal">
                <a href="" className="list-group-item text-primary d-flex align-items-center" role="button">
                    <h5 className="m-0">Home</h5>
                    <i className="fas fa-home fa-lg pl-2"></i>
                </a>
                <a href="" className="list-group-item text-primary d-flex align-items-center" role="button">
                    <h5 className="m-0">Settings</h5>
                    <i className="fas fa-cog fa-lg pl-2"></i>
                </a>
                <a href="" className="list-group-item text-primary d-flex align-items-center" role="button">
                    <h5 className="m-0">Sign In</h5>
                    <i className="fas fa-sign-out-alt fa-lg pl-2"></i>
                </a>
            </ul>
        </header>
    );
}

export default Header;
