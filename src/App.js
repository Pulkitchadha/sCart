import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import store from "./store";
import Login from './pages/Login';
import ProductList from './pages/ProductList';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/products" component={ProductList} />
                    <Route path="*"><Redirect to="/login" /></Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
