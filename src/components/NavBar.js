import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <div className="theme ">
            <nav className="navbar">
                <NavLink
                    className=""
                    activeClassName=""
                    to="/"
                    exact
                >
                    Home
                </NavLink>
                <NavLink
                    className=""
                    activeClassName=""
                    to="/board"
                >
                    Task Board
                </NavLink>
            </nav>
        </div>
        </>
    )
}

export default NavBar;