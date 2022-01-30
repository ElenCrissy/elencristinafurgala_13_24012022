import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Footer from "./layouts/Footer";
import React from "react";

const App = () => {
    return(
        <div>
            <Header/>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/user" component={User} />
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
}

export default App;
