import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
// @Dashboard
import HomeDashboard from "./dashboard/HomeDashboard";


// @Home
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Signin from "./Signin";
import Signup from "./Signup";


// @Extras
import PageNotFound from "./PageNotFound";

const HomePage = () => {
    return (
        <Switch>
            
            <Route exact path={Routes.Home.path} component={Home} />
            <Route exact path={Routes.About.path} component={About} />
            <Route exact path={Routes.Contact.path} component={Contact} />
            <Route exact path={Routes.Signin.path} component={Signin} />
            <Route exact path={Routes.Signup.path} component={Signup} />

            {/* Dashboard */}
            <Route exact path={Routes.Dashboard.path} component={HomeDashboard} />


            <Route exact path={Routes.PageNotFound.path} component={PageNotFound} />

            <Redirect to={Routes.PageNotFound.path} />
        </Switch>
    )
}

export default HomePage
