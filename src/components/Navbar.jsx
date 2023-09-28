import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar">
                    <div className="logo">
                        <img
                            src="src\assets\images\ICBsmall_logo.png"
                            style={{ width: '45px', height: '40px' }}
                            alt="ICB Logo"
                        />
                    </div>
                    <div className="nav-item">
                        <NavLink to="/" exact activeClassName="active" className="link-text">
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/programs" activeClassName="active" className="link-text">
                            Programs
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/events" activeClassName="active" className="link-text">
                            Events
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/contact" activeClassName="active" className="link-text">
                            Contact
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/about" activeClassName="active" className="link-text">
                            About Us
                        </NavLink>
                    </div>
                </div>
        </>
    );
}

export default Navbar;
