// src/components/Navbar.js

import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            <div className="navbar navbar-light bg-light ">
                    <span>
                         <Link className='px-3' to="/">Home</Link>&nbsp;
                        <Link to="/profile">Profile</Link>
                     </span>

                {!isAuthenticated && (
                    <button className='btn btn-secondary'
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