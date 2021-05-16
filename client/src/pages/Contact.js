import React from 'react';


// Components
import Header from '../components/Header';
import Footer from '../components/Footer';


const Contact = () => {
    

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <section class="section-hero">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <h1 class="font-weight-bold">Interested in working together? Get started!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio ipsa provident ducimus tenetur quos architecto voluptatibus inventore similique, hic sunt nisi officia eaque alias magni minima recusandae nobis quia.</p>
                    <hr class="my-4 fw-25 ml-0" />
                    <ul class="list-group list-group-sm list-group-minimal">
                    <li class="list-group-item d-flex align-items-center">
                        <span class="fw-25 text-muted">Email</span>
                        contact@webuildthemes.com
                    </li>
                    <li class="list-group-item d-flex align-items-center">
                        <span class="fw-25 text-muted">Phone</span>
                        +1 234 56 78 90
                    </li>
                    <li class="list-group-item d-flex align-items-center">
                        <span class="fw-25 text-muted">Instagram</span>
                        @webuildthemes
                    </li>
                    </ul>
                </div>
                <div class="col-lg-5">
                    <div class="equal equal-2-1 equal-lg-1-1">
                    <div class="canvas">
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section class="border-top">
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6">
                    <h2 class="font-weight-bold">Let us hear from you directly!</h2>
                </div>
                </div>
                <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6">
                    <form>
                    <div class="form-row">
                        <div class="col">
                        <div class="form-group">
                            <label for="yourName">Your Name</label>
                            <input type="text" class="form-control" id="yourName" placeholder="Your Name" />
                        </div>
                        </div>
                        <div class="col">
                        <div class="form-group">
                            <label for="yourCompany">Your Company</label>
                            <input type="text" class="form-control" id="yourCompany" placeholder="Your Company" />
                        </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="yourEmail">Your Email</label>
                        <input type="email" class="form-control" id="yourEmail" placeholder="Your Email" />
                    </div>
                    <div class="form-group">
                        <label for="yourMessage">Message</label>
                        <textarea class="form-control" id="yourMessage" rows="3" placeholder="Message"></textarea>
                    </div>
                    <a class="btn btn-primary btn-rounded btn-lg btn-with-icon mt-3" href="">
                        Send Message <i class="icon-arrow-up-right"></i>
                    </a>
                    </form>
                </div>
                </div>
            </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact
