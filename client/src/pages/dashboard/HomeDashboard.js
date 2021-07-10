import React from 'react';


// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});


const features = [];
const HomeDashboard = () => {
    const [title, settitle] = React.useState('');
    const [description, setdescription] = React.useState('');
    const [servicetime, setservicetime] = React.useState('');
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = (title, description, f1, f2, f3, service) => {
        settitle(title);
        setdescription(description);
        features.push(f1);
        features.push(f2);
        features.push(f3);
        setservicetime(service);
        setOpen(true);
    };
    const handleClose = () => {
        features.length = 0;
        setOpen(false);
    };

    

    return (
        <>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <section className="container mt-4 mb-4">
                    <div className="mt-2">
                        <h2 class="mb-2 font-weight-bold">{title}</h2>
                        <small class="d-block text-muted mt-1">{servicetime}</small>

                        <p class="mb-2 text-secondary">{description}</p>

                        <ul class="list-unstyled mb-2">
                            {
                                features.map((f) => (
                                <li class="py-1">{f}</li>
                                ))
                            }
                        </ul>

                        <div className="row">
                            <div className="col-md">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">First Name</label>
                                    <input type="text" value="Shivanshu" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                            </div>
                            <div className="col-md">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Last Name</label>
                                    <input type="text" value="Gupta" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                            </div>


                            <div className="col-12">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" value="shivanshu@gmail.com" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                            </div>

                            <div className="col-12">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            
                        </div>


                        <a onClick={handleClose} className="btn btn-primary btn-rounded">Contact Now</a>
                        <a onClick={handleClose} className="btn btn-outline-dark btn-rounded ml-2">Cancel </a>
                    
                    </div>
                </section>
            </Dialog>


            <Header />
                <section className="section-hero">
                    <div className="container">
                    <div className="row">
                        <div className="col">
                        <h2 className="font-weight-bold mb-1">All services & development we provide</h2>
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
                                <li class="py-1">Upto 200 USD</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a onClick={() => handleClickOpen("Website", "Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis", "Upto 200 USD", "Ad-free usic listening", "Listen to music ad-free", "24x7 Service")} class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
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
                                <li class="py-1">Upto 200 USD</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a onClick={() => handleClickOpen("Mobile App", "Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis", "Upto 200 USD", "Ad-free usic listening", "Listen to music ad-free", "24x7 Service")} class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
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
                                <li class="py-1">Upto 300 USD</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a onClick={() => handleClickOpen("SaaS App", "Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis", "Upto 300 USD", "Ad-free usic listening", "Listen to music ad-free", "24x7 Service")} class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
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
                                <li class="py-1">Upto 800 USD</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a onClick={() => handleClickOpen(">Web+Mobile", "Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis", "Upto 800 USD", "Ad-free usic listening", "Listen to music ad-free", "24x7 Service")} class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
                                <small class="d-block text-muted text-center mt-1">24x7 Service</small>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div class="card bordered border-default">
                            <div class="card-body">
                                <h2 class="mb-4 font-weight-bold">Hosting</h2>
                                <p class="mb-4 text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis</p>
                                <ul class="list-unstyled mb-4">
                                <li class="py-1">250 USD/y</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a onClick={() => handleClickOpen("Hosting", "Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis", "Upto 250 USD", "Ad-free usic listening", "Listen to music ad-free", "24x7 Service")} class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
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
                                <li class="py-1">NA</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a onClick={() => handleClickOpen("Marketing", "Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis", "NA", "Ad-free usic listening", "Listen to music ad-free", "24x7 Service")} class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
                                <small class="d-block text-muted text-center mt-1">24x7 Service</small>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div class="card bordered border-default">
                            <div class="card-body">
                                <h2 class="mb-4 font-weight-bold">Designing</h2>
                                <p class="mb-4 text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis</p>
                                <ul class="list-unstyled mb-4">
                                <li class="py-1">Upto 100 USD</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a onClick={() => handleClickOpen("Designing", "Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis", "Upto 100 USD", "Ad-free usic listening", "Listen to music ad-free", "24x7 Service")} class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
                                <small class="d-block text-muted text-center mt-1">24x7 Service</small>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div class="card bordered border-default">
                            <div class="card-body">
                                <h2 class="mb-4 font-weight-bold">AMC</h2>
                                <p class="mb-4 text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis</p>
                                <ul class="list-unstyled mb-4">
                                <li class="py-1">Upto 100 USD</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a onClick={() => handleClickOpen("AMC", "Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis", "Upto 100 USD", "Ad-free usic listening", "Listen to music ad-free", "24x7 Service")} class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
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
                                <li class="py-1">Upto 50 USD</li>
                                <li class="py-1">Ad-free usic listening</li>
                                <li class="py-1">Listen to music ad-free</li>
                                </ul>
                                <div>
                                <a onClick={() => handleClickOpen("Logo", "Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Aperiam, dolorem maiores quis", "Upto 50 USD", "Ad-free usic listening", "Listen to music ad-free", "24x7 Service")} class="btn btn-primary btn-rounded btn-block btn-with-icon">Select Now <i class="icon-arrow-up-right"></i></a>
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
