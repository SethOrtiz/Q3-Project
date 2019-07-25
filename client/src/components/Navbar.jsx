// src/components/Navbar.js

import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            <div className="navbar-lux navbar-light bg">
                    <span>
                         <Link className='px-3 navbar-brand' to="/">AppName</Link>&nbsp;
                        <Link className='px-3 link'  to="/profile">Profile</Link>
                        <Link className='px-3 link'  to="/profile">About</Link>
                     </span>
                {!isAuthenticated && (
                    <button className='btn btn-light btn-lg lux'
                        onClick={() =>
                            loginWithRedirect({})
                        }
                    >
                        Log in
                    </button>
                )}
                {isAuthenticated && <button className='btn btn-secondary' onClick={() => logout()}>Log out</button>}
            </div>
        </div>
    );
};

export default Navbar;