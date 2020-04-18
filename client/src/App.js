import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import {Bottom_component} from './components/shared_components/bottom.component.js'
import { NavBar } from "./components/shared_components/navbar.component"
import Home from "./components/Home";
import Error from "./components/404";
import Product from "./components/Product";
import Employment from "./components/Employment";
import Contact from "./components/Contact";
import { messages } from "./languages/messages";
import './components/Stylesheet/Stylesheet.css';
import { Row, Col, Container } from 'react-bootstrap';

function App() {


    const [locale, setLocale] = useState("en");

    function change_locale(new_locale) {
        setLocale(new_locale);
    }

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
    
            <Router>

                <NavBar change_locale={change_locale} />
 

                <Route path="/" exact render={(props) => <Home {...props} locale={locale} />} />
                <Route path="/Product" component={Product} />
                <Route path="/Employment" component={Employment} />
                <Route path="/Contact" render={(props) => <Contact {...props} locale={locale} />} />

                <div className="bg_color2 pt-4 mt-5">
                <Container className="">
                <Bottom_component />
                </Container>
                </div>
            </Router>
        </IntlProvider>
     
    );
}

export default App;
