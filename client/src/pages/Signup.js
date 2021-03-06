import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import { auth } from "../Firebase/index";
import { Routes } from '../routes';

const Signup = () => {
    const [name, setname] = React.useState('');
    const [email, setemail] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [message, setMessage] = React.useState('');

    
    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            var user = result.user;
            // Profile Picture being set by default
            user.updateProfile({
                photoURL: "https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg",
                displayName: name
            })
            .then(() => {
                user.sendEmailVerification().then(function() {
                    window.location.href = `/#${Routes.Signin.path}`
                }).catch(function(error) {
                    console.log(error);
                });
            })
            .catch(err => console.log(err))
        })
        .catch(function(error) {
            var errorMessage = error.message;
            setMessage(errorMessage);
        });
    }
    
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
                    <span class="eyebrow mb-1 text-muted">Thank You for Choosing us</span>
                    <h1 class="display-1 font-weight-bold">Register</h1>
                </div>
                </div>
                <div class="row justify-content-between">
                <div class="col-lg-7 mb-4 mb-lg-0">
                    <div class="card bordered border-default">
                        <div class="card-body">
                            <div class="form-group">
                                <span class="eyebrow d-block mb-0 text-dark">Full Name</span>
                                <input value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="Rahul Garg" class="form-control" />
                            </div>
                            <div class="form-group">
                                <span class="eyebrow d-block mb-0 text-dark">Email</span>
                                <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="example@mail.com" class="form-control" />
                            </div>
                            <div class="form-group">
                                <span class="eyebrow d-block mb-0 text-dark">Password</span>
                                <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" class="form-control" />
                            </div>
                            <button onClick={register} class="btn btn-block btn-lg btn-with-icon btn-primary mt-2">Sign Up <i class="icon-arrow-right"></i></button>
                            <br />
                            <span>
                                Already have an Account <Link to={Routes.Signin.path}>Sign In</Link>
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

export default Signup
