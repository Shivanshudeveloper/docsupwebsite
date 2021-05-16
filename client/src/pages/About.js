import React from 'react';


// Components
import Header from '../components/Header';
import Footer from '../components/Footer';


const About = () => {


    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <section class="section-hero pb-10">
            <div class="container">
                <div class="row">
                <div class="col">
                    <h1 class="display-2 font-weight-bold">Docsup Onhand Services</h1>
                </div>
                </div>
            </div>
            </section>

            <section class="section-sm border-top">
            <div class="container">
                <div class="row justify-content-between">
                <div class="col-md-4 mb-4 mb-md-0">
                    <h2 class="h4">About</h2>
                </div>
                <div class="col-md-8">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi labore architecto quia ullam, modi minima dolor totam ipsam officiis optio nesciunt atque, aspernatur maiores iure enim minus sequi vero. Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Iusto a provident, molestiae officia, quibusdam similique totam autem dignissimos delectus, in laboriosam! Fuga suscipit delectus vel aliquam perferendis soluta ab sed.</p>
                </div>
                </div>
            </div>
            </section>

            <section class="section-sm border-top">
            <div class="container">
                <div class="row justify-content-between">
                <div class="col-md-4 mb-4 mb-md-0">
                    <h2 class="h4">Privacy</h2>
                </div>
                <div class="col-md-8">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi labore architecto quia ullam, modi minima dolor totam ipsam officiis optio nesciunt atque, aspernatur maiores iure enim minus sequi vero. Lorem ipsum dolor sit amet consectetur adipisicing, elit. Quisquam, adipisci. Reiciendis, ut nemo! Nemo, tenetur nam repellat itaque dignissimos velit laboriosam, reprehenderit rem officiis, repellendus iusto temporibus dolor amet animi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi labore architecto quia ullam, modi minima dolor totam ipsam officiis optio nesciunt atque, aspernatur maiores iure enim minus sequi vero.</p>
                </div>
                </div>
            </div>
            </section>

            <section class="section-sm border-top">
            <div class="container">
                <div class="row justify-content-between">
                <div class="col-md-4 mb-4 mb-md-0">
                    <h2 class="h4">Legal</h2>
                </div>
                <div class="col-md-8">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi labore architecto quia ullam, modi minima dolor totam ipsam officiis optio nesciunt atque, aspernatur maiores iure enim minus sequi vero.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi labore architecto quia ullam, modi minima dolor totam ipsam officiis optio nesciunt atque, aspernatur maiores iure enim minus sequi vero.</p>
                </div>
                </div>
            </div>
            </section>
            <Footer />
        </>
    )
}

export default About
