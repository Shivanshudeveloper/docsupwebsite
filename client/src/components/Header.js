import React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '../routes';
import { auth } from "../Firebase/index";

const Header = ({ user }) => {

    const logout = () => {
        auth.signOut().then(() => {
            window.location.href = `/#${Routes.Home.path}`;
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <>
        <header className="header header-sticky header-light">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
            <Link to={Routes.Home.path} className="navbar-brand mr-8">
                <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621138519/docsup/docsup1_dtctps-removebg-preview_rpfg1l.png" alt="Docsup Logo" />
            </Link>

            <button className="navbar-toggler burger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown dropdown-hover">
                    <Link to={Routes.Home.path} className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
                        Home
                    </Link>
                </li>
                <li className="nav-item dropdown dropdown-hover">
                    <Link to={Routes.About.path} className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
                        About
                    </Link>
                </li>
                <li className="nav-item dropdown dropdown-hover">
                    <Link to={Routes.Contact.path} className="nav-link" role="button" aria-haspopup="true" aria-expanded="false">
                        Contact
                    </Link>
                </li>
                
                </ul>
                {
                    user ? (
                        <a onClick={logout} className="action text-black ml-auto">
                            {user.displayName} (Logout)
                        </a>
                    ) : (
                        <Link to={Routes.Signup.path} className="action underline text-black ml-auto">
                            Get Started <i className="icon-arrow-up-right"></i>
                        </Link>
                    )
                }
                
            </div>
            </nav>
        </div>
        </header>
        </>
    )
}

export default Header
