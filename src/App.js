import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Profile from "./pages/User";
import Footer from "./layouts/Footer";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {authenticateUser} from "./store/actions";

const App = () => {
    const dispatch = useDispatch()
    let userEmail
    let userPassword
    window.onload = () => {
        const userEmail = JSON.parse(localStorage.getItem("userEmail"))
        const userPassword = localStorage.getItem("userPassword")
        return userEmail
    }
    // const userEmail = JSON.parse(localStorage.getItem("userEmail"))
    // const userPassword = localStorage.getItem("userPassword")
    console.log(userEmail, userPassword)
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    const userId = localStorage.getItem("id")
    useEffect(() => {
        if(userEmail && userPassword) {
            const userInput = {
                email : userEmail,
                password : userPassword,
            }
            dispatch(authenticateUser(userInput))
        }
    }, [localStorage])

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
