import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


// Components
import Header from '../components/Header';
import Footer from '../components/Footer';



const PageNotFound = () => {



    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Helmet>
                <style>{'body { background-color: rgb(235, 60, 39) !important; }'}</style>
            </Helmet>
            <section class="cover text-white">
            <div class="container foreground">
                <div class="row align-items-center vh-100">
                <div class="col">
                    <div class="row align-items-center justify-content-center justify-content-lg-between">
                    <div class="col-lg-6 order-lg-2">
                        <img src="assets/images/figure-3.svg" alt="Figure" />
                    </div>
                    <div class="col-md-8 col-lg-5 order-lg-1 text-center text-lg-left">
                        <h1 class="display-2 font-weight-bold">Sorry, page not found.</h1>
                        <Link to="/" class="btn btn-rounded btn-outline-white">
                            Go back to homepage
                        </Link>
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

export default PageNotFound
