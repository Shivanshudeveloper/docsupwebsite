import React from 'react';
import { Link } from 'react-router-dom';



// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Routes } from '../routes';

const Signin = () => {


    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <section class="section-hero">
            <div class="container">
                <div class="row">
                <div class="col">
                    <span class="eyebrow mb-1 text-muted">Welcome Back</span>
                    <h1 class="display-1 font-weight-bold">Login</h1>
                </div>
                </div>
                <div class="row justify-content-between">
                <div class="col-lg-7 mb-4 mb-lg-0">
                    <div class="card bordered border-default">
                        <div class="card-body">
                            <div class="form-group">
                                <span class="eyebrow d-block mb-0 text-dark">Email</span>
                                <input type="email" placeholder="example@mail.com" class="form-control" />
                            </div>
                            <div class="form-group">
                                <span class="eyebrow d-block mb-0 text-dark">Password</span>
                                <input type="password" class="form-control" />
                            </div>
                            <button class="btn btn-block btn-lg btn-with-icon btn-primary mt-2">Login <i class="icon-arrow-right"></i></button>
                            <br />
                            <span>
                                Don't have an account <Link to={Routes.Signup.path}>Sign In </Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card bordered border-default">
                    <div class="card-body">
                        <ul class="list-group list-group-minimal">
                        <li class="list-group-item d-flex align-items-center">
                            <i class="icon-basic_pin1 fs-40 text-primary mr-3"></i>
                            <div>
                            <span class="eyebrow d-block mb-0 text-muted">Location</span>
                            Birmingham, UK
                            </div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <i class="icon-arrows_up_double-33 fs-40 text-primary mr-3"></i>
                            <div>
                            <span class="eyebrow d-block mb-0 text-muted">Experience</span>
                            10+ years
                            </div>
                        </li>
                        <li class="list-group-item d-flex align-items-center">
                            <i class="icon-basic_clockwise fs-40 text-primary mr-3"></i>
                            <div>
                            <span class="eyebrow d-block mb-0 text-muted">Expiration Date</span>
                            December, 2021
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <Footer />
        </>
    )
}

export default Signin
