import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import {Bottom_component} from './components/shared_components/bottom.component.js'
import { NavBar } from "./components/shared_components/navbar.component"
import Home from "./components/Home";
import Error from "./components/404";
import Product from "./components/Product";
import Product_detail from "./components/Product_detail";
import Employment from "./components/Employment";
import Contact from "./components/Contact";
import { messages } from "./languages/messages";
import './components/Stylesheet/Stylesheet.css';
import { Row, Col, Container } from 'react-bootstrap';

function App(props) {


    const [locale, setLocale] = useState("en");



    function change_locale(new_locale) {

        setLocale(new_locale);
        
    }

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
    
            <Router>

                <NavBar change_locale={change_locale} />
 
                <Switch>
                <Route path="/" exact render={(props) => <Home {...props} locale={locale} />} />
                <Route path="/Product" exact render={(props) => <Product {...props} locale={locale}  />} />
                <Route path="/Employment" exact component={Employment} />
                <Route path="/Contact" exact render={(props) => <Contact {...props} locale={locale} />} />
                <Route path="/Product_detail" exact render={(props) => <Product_detail {...props} locale={locale} />} />
                <Route component={Error} />
                </Switch>
                <div className="bg_color2 pt-4 mt-5">
                <Container>
                <Bottom_component />
                </Container>
                </div>
            </Router>
        </IntlProvider>
     
    );
}

export default App;
