import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

class Header extends React.PureComponent {
    state = {
        text: '',
    }

    onUpdateFormValue = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        this.debounceSearch();
    }

    debounceSearch = debounce(() => {
        console.log('debounce called')
        this.props.onSearch(this.state.text?.trim());
    }, 500);

    clearInput = () => {
        this.setState({ text: ' ' });
        this.props.onSearch('');
    }

    render() {
        const { userName, cartItems } = this.props;
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
                        <a className="navbar-brand cursor-pointer">Logo</a>
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
                        {/* <button className="login-btn" onClick={() => onSearch(text)}>Search</button> */}
                        {/* {text && <button className="login-btn" onClick={this.clearInput}>Clear</button>} */}
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a className="cursor-pointer"><span className="glyphicon glyphicon-user"></span>{" "} Welcome, {userName} </a>
                                <a className="cursor-pointer"><span className="glyphicon glyphicon-shopping-cart"></span>{" "} {cartItems} {cartItems > 1 ? "items" : "item"} </a>
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

