import React from 'react';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <section className="cover">
            <div className="container foreground">
                <div className="row align-items-center justify-content-center justify-content-lg-between vh-100">
                <div className="col-md-8 col-lg-6 order-lg-2 mb-5 mb-lg-0">
                    <img src="assets/images/figure-12.svg" alt="Illustration" />
                </div>
                <div className="col-md-10 col-lg-6 pr-lg-6 text-center text-lg-left">
                    <h1 className="font-weight-bold">A better workflow for your software</h1>
                    <p className="lead text-secondary">
                    Docsup On Hand Services provides you a fully managed package for the development of your Applications. We make sure that you will get the best high performance software which are hosted and configured on cloud servers or on-premise servers. Our developer will get connected with you throughout your application and will be available for you 24x7. 
                    </p>
                    <a className="btn btn-black btn-rounded btn-with-icon mt-2" href="signup.html">
                    <i className="icon-arrow-up-right"></i> Get Started
                    </a>
                    <div className="d-flex align-items-center mt-10">
                    <span className="display-3 font-weight-bold text-primary pr-3 mr-3 border-right">100%</span><p className="text-secondary text-left">Surety & Trust with us, we'll handle the technical asset while you can work on your business.</p>
                    </div>
                </div>
                </div>
            </div>
            <figure className="canvas">
                <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle data-aos="fade-up" data-aos-delay="200" cx="120%" cy="-40%" r="50%" stroke="#dddddd" stroke-opacity="1" data-center-top="@r: 50%;" data-top-bottom="@r: 70%;"></circle>
                <circle data-aos="fade-up" data-aos-delay="400" cx="85%" cy="125%" r="75%" stroke="#dddddd" stroke-opacity="1" data-center-top="@r: 75%;" data-top-bottom="@r: 95%;"></circle>
                <circle data-aos="fade-up" data-aos-delay="600" cx="-25%" cy="125%" r="50%" stroke="#dddddd" stroke-opacity="1" data-center-top="@cx: -25%;" data-top-bottom="@cx: 45%;"></circle>
                </svg>
            </figure>
            </section>


            <section className="bg-black text-white">
            <div className="container">
                <div className="row">
                <div className="col-lg-10">
                    <h2 className="display-3 font-weight-bold"><span>24x7</span> On Call & Meet <span className="d-lg-block">Service Support</span></h2>
                </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-12">

                    <div className="d-flex flex-wrap gutter-1 gutter-lg-2 categories">
                    <div><a href="docs/s-applications.html" className="btn btn-lg btn-rounded btn-outline-white">Applications</a></div>
                    <div><a href="docs/s-blog.html" className="btn btn-lg btn-rounded btn-outline-white">Blog</a></div>
                    <div><a href="docs/s-call-to-action.html" className="btn btn-lg btn-rounded btn-outline-white">SaaS Applications</a></div>
                    <div><a href="docs/s-carousel.html" className="btn btn-lg btn-rounded btn-outline-white">Ecommerce</a></div>
                    <div className="d-none d-md-block"><a href="docs/s-code.html" className="btn btn-lg btn-rounded btn-outline-white">CRM</a></div>
                    <div><a href="docs/s-contents.html" className="btn btn-lg btn-rounded btn-outline-white">ERP</a></div>
                    <div><a href="docs/s-faq.html" className="btn btn-lg btn-rounded btn-outline-white">Media</a></div>
                    <div><a href="docs/s-features.html" className="btn btn-lg btn-rounded btn-outline-white">UI/UX</a></div>
                    <div><a href="docs/s-footers.html" className="btn btn-lg btn-rounded btn-outline-white">Video Editing</a></div>
                    <div><a href="docs/s-gallery.html" className="btn btn-lg btn-rounded btn-outline-white">Finance</a></div>
                    <div><a href="docs/s-headers.html" className="btn btn-lg btn-rounded btn-outline-white">Health & Care</a></div>
                    <div><a href="docs/s-hero.html" className="btn btn-lg btn-rounded btn-outline-white">Edtech</a></div>
                    <div className="d-none d-md-block"><a href="docs/s-instagram.html" className="btn btn-lg btn-rounded btn-outline-white">Social Media</a></div>
                    <div className="d-none d-md-block"><a href="docs/s-lists.html" className="btn btn-lg btn-rounded btn-outline-white">Lists</a></div>
                    <div><a href="docs/s-pricing-tables.html" className="btn btn-lg btn-rounded btn-outline-white">Transactions</a></div>
                    <div><a href="docs/s-subscribe.html" className="btn btn-lg btn-rounded btn-outline-white">Mobile Apps</a></div>
                    <div className="d-none d-md-block"><a href="docs/s-tabs.html" className="btn btn-lg btn-rounded btn-outline-white">PWA</a></div>
                    <div><a href="docs/s-team.html" className="btn btn-lg btn-rounded btn-outline-white">Servers</a></div>
                    <div className="d-none d-md-block"><a href="docs/s-testimonials.html" className="btn btn-lg btn-rounded btn-outline-white">Cloud</a></div>
                    <div><a href="#/signup" className="btn btn-lg btn-rounded btn-primary btn-with-icon">Explore All <i className="icon-arrow-right"></i></a></div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section>
                <div className="container">
                    <div className="row justify-content-center gutter-6">
                    <div className="col-md-6">
                        <i className="icon-software_layers2 fs-56 text-primary"></i>
                        <h4 className="mt-2 font-weight-bold">Organized nested <br /> symbols & overrides</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="" className="underline">Learn More</a>
                    </div>
                    <div className="col-md-6">
                        <i className="icon-software_pathfinder_subtract fs-56 text-primary"></i>
                        <h4 className="mt-2 font-weight-bold">Fine-tuned <br /> typography</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="" className="underline">Learn More</a>
                    </div>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white">
            <div className="container">
                <div className="row align-items-end gutter-4 gutter-lg-0">
                <div className="col-xl-3 d-none d-xl-block">
                    <div className="card">
                    <ul className="list-group list-group-flush list-group-lg">
                        <li className="list-group-item pl-0">Unlimited Viewers</li>
                        <li className="list-group-item pl-0">Editors</li>
                        <li className="list-group-item pl-0">Multiplayer</li>
                        <li className="list-group-item pl-0">Developer handoff</li>
                        <li className="list-group-item pl-0">Support</li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="card bg-primary">
                    <div className="card-body">
                        <h3 className="lead mb-2">Small</h3>
                        <span className="h2 font-weight-bold">$49</span>
                        <p className="mt-2 mb-4 text-secondary">Our basic version for teams that are just getting started</p>
                        <a href="" className="btn btn-sm btn-white btn-rounded btn-with-icon">Buy Now <i className="icon-arrow-up-right"></i></a>
                    </div>
                    <ul className="list-group list-group-flush list-group-lg">
                        <li className="list-group-item d-flex align-items-center"><i className="icon-check mr-2 fs-24 d-none d-xl-inline-block"></i> <span className="d-xl-none">Unlimited Viewers</span></li>
                        <li className="list-group-item d-flex align-items-center"><i className="icon-check mr-2 fs-24 d-none d-xl-inline-block"></i> <span className="d-xl-none">Editors</span></li>
                        <li className="list-group-item d-flex align-items-center"><i className="icon-check mr-2 fs-24 d-none d-xl-inline-block"></i> <span className="d-xl-none">Multiplayer</span></li>
                        <li className="list-group-item d-flex align-items-center"><i className="icon-check mr-2 fs-24 d-none d-xl-inline-block"></i> <span className="d-xl-none">Developer handoff</span></li>
                        <li className="list-group-item d-flex align-items-center"><i className="icon-check mr-2 fs-24 d-none d-xl-inline-block"></i> <span className="d-xl-none">Support</span></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="card bg-pricing">
                    <div className="card-body">
                        <h3 className="lead mb-2">Medium</h3>
                        <span className="h2 font-weight-bold">$149</span>
                        <p className="mt-2 mb-4 text-secondary">Our basic version for teams that are just getting started</p>
                        <a href="" className="btn btn-sm btn-outline-white btn-rounded btn-with-icon">Buy Now <i className="icon-arrow-up-right"></i></a>
                    </div>
                    <ul className="list-group list-group-flush list-group-lg">
                        <li className="list-group-item d-flex align-items-center"><i className="icon-check mr-2 fs-24 d-none d-xl-inline-block"></i> <span className="d-xl-none">Unlimited Viewers</span></li>
                        <li className="list-group-item d-flex align-items-center"><i className="icon-check mr-2 fs-24 d-none d-xl-inline-block"></i> <span className="d-xl-none">Editors</span></li>
                        <li className="list-group-item d-flex align-items-center"><i className="icon-check mr-2 fs-24 d-none d-xl-inline-block"></i> <span className="d-xl-none">Multiplayer</span></li>
                        <li className="list-group-item d-flex align-items-center"><i className="icon-x text-muted mr-2 fs-24 d-none d-xl-inline-block"></i> <s className="d-xl-none text-muted">Developer handoff</s></li>
                        <li className="list-group-item d-flex align-items-center"><i className="icon-x text-muted mr-2 fs-24 d-none d-xl-inline-block"></i> <s className="d-xl-none text-muted">Support</s></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="card bg-pricing">
                    <div className="card-body">
                        <h3 className="lead mb-2">Large</h3>
                        <span className="h2 font-weight-bold">$449</span>
                        <p className="mt-2 mb-4 text-secondary">Our basic version for teams that are just getting started</p>
                        <a href="" className="btn btn-sm btn-outline-white btn-rounded btn-with-icon">Buy Now <i className="icon-arrow-up-right"></i></a>
                    </div>
                    <ul className="list-group list-group-flush list-group-lg">
                        <li className="list-group-item d-flex align-items-center"><i className="icon-check mr-2 fs-24 d-none d-xl-inline-block"></i> <span className="d-xl-none">Unlimited Viewers</span></li>
                        <li className="list-group-item d-flex align-items-center"><i className="icon-check mr-2 fs-24 d-none d-xl-inline-block"></i> <span className="d-xl-none">Editors</span></li>
                        <li className="list-group-item d-flex align-items-center"><i className="icon-check mr-2 fs-24 d-none d-xl-inline-block"></i> <span className="d-xl-none">Multiplayer</span></li>
                        <li className="list-group-item d-flex align-items-center"><i className="icon-check mr-2 fs-24 d-none d-xl-inline-block"></i> <span className="d-xl-none">Developer handoff</span></li>
                        <li className="list-group-item d-flex align-items-center"><i className="icon-x text-muted mr-2 fs-24 d-none d-xl-inline-block"></i> <s className="d-xl-none text-muted">Support</s></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section>
                <div class="container">
                    <div class="row align-items-center justify-content-center justify-content-lg-between">
                    <div class="col-lg-4 text-center text-lg-left mb-6 mb-lg-0">
                        <h2 class="font-weight-bold">Why you should choose us ?</h2>
                    </div>
                    <div class="col-lg-8">
                        <div class="row gutter-4">
                        <div class="col-md-6">
                            <div class="card bg-primary text-white">
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">24/7 Access</h5>
                                <p>Create reusable buttons. Build resizable cards. Make edits once and sync across your designs.</p>
                                <a href="" class="underline action text-white">Learn More</a>
                            </div>
                            <div class="equal equal-4-3">
                                <figure class="canvas">
                                <img src="assets/images/figure-7.svg" alt="" />
                                </figure>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card bordered border-default">
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">Friendly Community</h5>
                                <p>Create reusable buttons. Build resizable cards. Make edits once and sync across your designs.</p>
                                <a href="" class="underline action">Learn More</a>
                            </div>
                            <div class="equal equal-4-3">
                                <figure class="canvas">
                                <img src="assets/images/figure-6.svg" alt="" />
                                </figure>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


            <section class="bg-light">
            <div class="container">
                <div class="row align-items-center justify-content-center justify-content-lg-between">
                <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                    <img src="assets/images/figure-14.svg" alt="Illustration" />
                </div>
                <div class="col-lg-6 text-center text-lg-left">
                    <h2 class="font-weight-bold">Let us take care of your Applications & Servers for you.</h2>
                    <ul class="list-group list-group-lg">
                    <li class="list-group-item">
                        <p class="text-muted lead"><span class="text-black">Professional service</span> package to make the fully required software as per yours..</p>
                    </li>
                    <li class="list-group-item">
                        <p class="text-muted lead"><span class="text-black">Professional developers</span> will work on your application and will be their for you 24x7.</p>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </section>


            <section>
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h2 class="font-weight-bold"><span class="d-lg-block">Our Servers.</span> For any kind of application.</h2>
                </div>
                </div>
                <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="row separated">
                    <div class="col-lg-7 p-5">
                        <div class="d-flex align-items-end">
                        <h5 class="h1 mb-0 mr-2 lh-1 text-primary font-weight-bold">99.99%</h5>
                        <p class="text-secondary">Professional Service</p>
                        </div>
                    </div>
                    <div class="col-lg-5 p-5">
                        <div class="d-flex align-items-end">
                        <h5 class="h1 mb-0 mr-2 lh-1 text-primary font-weight-bold">99.90%</h5>
                        <p class="text-secondary">Backup</p>
                        </div>
                    </div>
                    <div class="col-lg-5 p-5">
                        <div class="d-flex align-items-end">
                        <h5 class="h1 mb-0 mr-2 lh-1 text-primary font-weight-bold">99.99%</h5>
                        <p class="text-secondary">Avalibility</p>
                        </div>
                    </div>
                    <div class="col-lg-7 p-5">
                        <div class="d-flex align-items-end">
                        <h5 class="h1 mb-0 mr-2 lh-1 text-primary font-weight-bold">0%</h5>
                        <p class="text-secondary">Downtime</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section>
            <div class="container">
                <div class="row justify-content-between align-items-center">
                <div class="col-lg-6">
                    <h2 class="font-weight-bold">Let's make something big. Together.</h2>
                    <div class="form-row">
                    <div class="form-group col-lg-6">
                        <label for="yourName">Your Name</label>
                        <input type="text" class="form-control" id="yourName" placeholder="Your Name" />
                    </div>
                    <div class="form-group col-lg-6">
                        <label for="yourCompany">Your Company</label>
                        <input type="text" class="form-control" id="yourCompany" placeholder="Your Company" />
                    </div>
                    </div>
                    <div class="form-row">
                    <div class="form-group col-lg-12">
                        <label for="yourMessage">Message</label>
                        <textarea class="form-control" id="yourMessage" rows="3" placeholder="Message"></textarea>
                    </div>
                    </div>
                    <div class="form-row">
                    <div class="col-lg-8">
                        <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label small text-muted" for="customCheck1">I accept the <a href="">Terms & Conditions</a> and acknowledge that my information will be used in accordance with Privacy Policy.</label>
                        </div>
                    </div>
                    </div>
                    <div class="form-row mt-5">
                    <div class="col-12">
                        <a href="" class="btn btn-primary btn-lg btn-rounded btn-with-icon btn">Start Today <i class="icon-arrow-right"></i></a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <img src="assets/images/figure-9.svg" alt="Illustration" />
                </div>
                </div>
            </div>
            </section>
            <Footer />
        </>
    )
}

export default Home
