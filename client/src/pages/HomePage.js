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


// @Extras
import PageNotFound from "./PageNotFound";

const HomePage = () => {
    return (
        <Switch>
            <Route exact path={Routes.Dashboard.path} component={HomeDashboard} />
            <Route exact path={Routes.PageNotFound.path} component={PageNotFound} />
            <Route exact path={Routes.Home.path} component={Home} />
            <Route exact path={Routes.About.path} component={About} />
            <Route exact path={Routes.Contact.path} component={Contact} />

            <Redirect to={Routes.PageNotFound.path} />
        </Switch>
    )
}

export default HomePage
