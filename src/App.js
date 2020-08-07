import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import ProductList from './pages/ProductList';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/products" component={ProductList} />
                <Route path="*"><Redirect to="/login" /></Route>
            </Switch>
        </Router>
    );
}

export default App;
