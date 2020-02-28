import './App.css';
import List from './List' ;
import WrappedLoginForm from './Login';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './SignIn';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="AppNav">
          <ul>
            <li className="Appli">
              <Link to="/">Home</Link>
            </li>
            <li className="Appli">
              <Link to="/lists">List</Link>
            </li>
            <li className="Appli">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/lists" exact component={List} />
          <Route path="/login" exact component={SignIn} />
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
