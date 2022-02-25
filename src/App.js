import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Footer from "./layouts/Footer";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./store/actions";
import {useHistory} from "react-router";

const App = () => {
    // const dispatch = useDispatch()
    // window.onload = () => {
    //     const jwt = localStorage.getItem("jwt")
    //     if(jwt) {
    //         dispatch(getUser(jwt))
    //     }
    // }

    const jwt = useSelector(state => state.auth.jwt)
    const history = useHistory()
    useEffect(() => {
        if(jwt){
            history.push()
        }
    }, [jwt])


    return(
        <div>
            <Router>
                <Header/>
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
