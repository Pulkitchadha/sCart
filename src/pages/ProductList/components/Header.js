import React from 'react';
import PropTypes from 'prop-types';
// import { debounce } from 'lodash';

class Header extends React.Component {
    state = {
        text: '',
    }

    onUpdateFormValue = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        // debounce(() => this.props.onSearch(this.state.text), 500);
    }

    render() {
        const { userName, cartItems, onSearch } = this.props;
        const { text } = this.state;
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Logo</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <input
                            className="input-search text-center"
                            name="text"
                            type="text"
                            placeholder="Search Products"
                            value={text}
                            onChange={this.onUpdateFormValue}
                        />
                        <button className="login-btn" onClick={()=> onSearch(text)}>Search</button>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#"><span className="glyphicon glyphicon-user"></span>{" "} Welcome, {userName} </a>
                                <a href="#"><span className="glyphicon glyphicon-shopping-cart"></span>{" "} {cartItems} {cartItems > 1 ? "items" : "item"} </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}

Header.propTypes = {
    user: PropTypes.string,
    cartItems: PropTypes.number,
    onSearch: PropTypes.func,
}

Header.defaultTypes = {
    user: '',
    cartItems: 0
}

export default Header;

