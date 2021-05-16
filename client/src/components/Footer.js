import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer class="border-top">
            <div class="container">
                <div class="row justify-content-between gutter-2 gutter-lg-6">
                <div class="col-lg-4">
                    <Link to={`/`} className="navbar-brand">
                        <img style={{ maxHeight: '5rem' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1621138519/docsup/docsup1_dtctps-removebg-preview_rpfg1l.png" alt="Docsup Logo" />
                    </Link>
                    <p class="mt-2 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="col-lg-7">
                    <div class="row gutter-4">
                    <div class="col-md-4">
                        <span class="eyebrow text-muted mb-2 d-flex">Menu</span>
                        <ul class="nav nav-minimal nav-minimal-sm flex-md-column">
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Careers</a>
                        </li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <span class="eyebrow text-muted mb-2 d-flex">Follow us</span>
                        <ul class="nav nav-minimal nav-minimal-sm flex-md-column">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Instagram</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Facebook</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Twitter</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Linkedin</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Youtube</a>
                        </li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <span class="eyebrow text-muted mb-2 d-flex">Docs</span>
                        <ul class="nav nav-minimal nav-minimal-sm flex-md-column">
                        <li class="nav-item">
                            <a class="nav-link" href="signup.html">Get started</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Components</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Changelog</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div class="row align-items-center justify-content-between gutter-1 gutter-lg-6">
                <div class="col-md-6 col-lg-4 order-md-2 text-md-right">
                    <span class="small text-muted">5th Avenue, New York USA 10255</span>
                </div>
                <div class="col-md-6 col-lg-3 order-md-1">
                    <p class="small text-muted">Copyrights © 2021</p>
                </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
