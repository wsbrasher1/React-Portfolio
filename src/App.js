import React from 'react';
import './App.css';
import Portfolio from "./components/Portfolio";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
    <Router>
        <div className="App">
            <Switch>
                  <Route
                        path={`${process.env.PUBLIC_URL}/`}
                        exact
                        component={Portfolio}
                  />
                  <Route
                        path="*"
                        component={NoMatch}
                  />
            </Switch>
            <Footer className="Footer" />
        </div>
    </Router>
);

export default App;
