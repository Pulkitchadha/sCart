import React from 'react';
import { connect } from "react-redux";
import { login } from "store/auth/actions";

import api from 'services/api';
import { showMessage } from 'services/utility';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    onUpdateFormValue = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    login = async (e) => {
        try {
            e.preventDefault();
            const { username, password } = this.state;

            if (!username) throw new Error('Username can not be empty');
            if (!password) throw new Error('Password can not be empty');

            const result = await api.get('users', { username, password });

            this.props.login({ user: result?.length ? result[0] : null });
            this.props.history.push('/products');
        } catch (err) {
            showMessage('error', err.message);
        }
    }

    render() {
        return (
            <div className="App">
                <h1>sCart</h1>
                <input
                    className="input"
                    name="username"
                    type="text"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.onUpdateFormValue}
                /><br />
                <input
                    className="input"
                    name="password"
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.onUpdateFormValue}
                /><br /><br />
                <button className="login-btn" onClick={this.login}>Login</button>
            </div>
        )
    }
}

const mapDispatch = { login };

export default connect(null, mapDispatch)(Login);