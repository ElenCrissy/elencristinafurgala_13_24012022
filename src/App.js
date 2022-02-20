import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Profile from "./pages/User";
import Footer from "./layouts/Footer";
import React from "react";

const App = () => {
    const userId = localStorage.getItem('userId')

    return(
        <div>
            <Header/>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={Login} />
                    {
                        userId ?
                            <Route path={`/profile/${userId}`} component={Profile} /> :
                            <Route path="/profile/:id" component={Profile} />
                    }
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
}

export default App;
