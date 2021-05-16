import React from 'react';


// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const HomeDashboard = () => {
    
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Header />
                <section className="section-hero">
                    <div className="container">
                    <div className="row">
                        <div className="col">
                        <h2 className="font-weight-bold mb-1">ALl services & development we provide</h2>
                        <a href="" className="action underline text-secondary">Please select your service <i className="icon-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4">
                            <div class="card bordered border-default">
                            <div class="card-body">
                                <h2 class="mb-4 font-weight-bold">Website</h2>
                                <p class="mb-4 text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis</p>
                                <ul class="list-unstyled mb-4">
                                <li class="py-1">6 Premium accounts</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a href="" class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
                                <small class="d-block text-muted text-center mt-1">24x7 Service</small>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div class="card bordered border-default">
                            <div class="card-body">
                                <h2 class="mb-4 font-weight-bold">Mobile App</h2>
                                <p class="mb-4 text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis</p>
                                <ul class="list-unstyled mb-4">
                                <li class="py-1">6 Premium accounts</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a href="" class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
                                <small class="d-block text-muted text-center mt-1">24x7 Service</small>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div class="card bordered border-default">
                            <div class="card-body">
                                <h2 class="mb-4 font-weight-bold">SaaS App</h2>
                                <p class="mb-4 text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis</p>
                                <ul class="list-unstyled mb-4">
                                <li class="py-1">6 Premium accounts</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a href="" class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
                                <small class="d-block text-muted text-center mt-1">24x7 Service</small>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div class="card bordered border-default">
                            <div class="card-body">
                                <h2 class="mb-4 font-weight-bold">Web+Mobile</h2>
                                <p class="mb-4 text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis</p>
                                <ul class="list-unstyled mb-4">
                                <li class="py-1">6 Premium accounts</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a href="" class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
                                <small class="d-block text-muted text-center mt-1">24x7 Service</small>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div class="card bordered border-default">
                            <div class="card-body">
                                <h2 class="mb-4 font-weight-bold">Marketing</h2>
                                <p class="mb-4 text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis</p>
                                <ul class="list-unstyled mb-4">
                                <li class="py-1">6 Premium accounts</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a href="" class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
                                <small class="d-block text-muted text-center mt-1">24x7 Service</small>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div class="card bordered border-default">
                            <div class="card-body">
                                <h2 class="mb-4 font-weight-bold">Logo</h2>
                                <p class="mb-4 text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis</p>
                                <ul class="list-unstyled mb-4">
                                <li class="py-1">6 Premium accounts</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a href="" class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
                                <small class="d-block text-muted text-center mt-1">24x7 Service</small>
                                </div>
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

export default HomeDashboard
