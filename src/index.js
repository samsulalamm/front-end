import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'react-widgets/dist/css/react-widgets.css';
import './assets/scss/style.scss';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PrivateRoute from "./auth/components/PrivateRoute";
import Login from "./views/Login";
import {Provider} from "react-redux";
import store from "./redux/store";
import Dashboard from "./views/Dashboard";
import DataPoint from "./views/DataPoint";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        {/*<PrivateRoute exact path="/">*/}
        {/*  <Dashboard/>*/}
        {/*</PrivateRoute>*/}

        <Route exact path="/login">
          <Login/>
        </Route>

        <Route exact path="/">
          <DataPoint/>
        </Route>

        <Route>
          <p>404 | Page not found</p>
          <p><Link to="/">Back to Home</Link></p>
        </Route>
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
