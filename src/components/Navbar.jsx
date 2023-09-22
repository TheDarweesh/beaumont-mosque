import React from "react";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-nav">
                    <div className="logo">
                        <img src="src\assets\images\ICBsmall_logo.png" style={{ width: '45px', height: '40px' }} alt="ICB Logo" />
                    </div>
                    <div className="nav-item">
                        <span className="link-text">Home</span>
                    </div>
                    <div className="nav-item">
                        <span className="link-text">Programs</span>
                    </div>
                    <div className="nav-item">
                        <span className="link-text">Events</span>
                    </div>
                    <div className="nav-item">
                        <span className="link-text">Contact</span>
                    </div>
                    <div className="nav-item">
                        <span className="link-text">About Us</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
