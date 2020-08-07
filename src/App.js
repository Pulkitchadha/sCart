import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import ProductList from './pages/ProductList';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login"><Login /></Route>
                <Route path="/products"><ProductList /></Route>
                <Route path="*"><Login /></Route>
            </Switch>
        </Router>
    );
}

export default App;
