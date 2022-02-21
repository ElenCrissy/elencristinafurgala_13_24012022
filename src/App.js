import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Footer from "./layouts/Footer";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {authenticateUser} from "./store/actions";

const App = () => {
    const dispatch = useDispatch()
    window.onload = () => {
        const user = JSON.parse(localStorage.getItem("userInput"))
        console.log(user)
        return user
    }
    // const user = localStorage.getItem("user")
    // useEffect(() => {
    //     if(user) {
    //         const userInput = {
    //             email : userEmail,
    //             password : userPassword,
    //         }
    //         dispatch(authenticateUser(userInput))
    //     }
    // }, [localStorage])

    return(
        <div>
            <Header/>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile/:id" component={Profile} />
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
}

export default App;
