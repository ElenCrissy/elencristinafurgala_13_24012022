import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import Footer from "./layouts/Footer";
import User from "./pages/User";

const HeaderWithRouter = withRouter(Header);

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <HeaderWithRouter/>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/signin" component={SignIn} />
              <Route path="/user" component={User} />
          </Switch>
          <Footer/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
