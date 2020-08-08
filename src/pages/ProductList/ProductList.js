import React, { Component } from 'react';

export default class ProductList extends Component {
    componentDidMount() {
        // if (!this.props.products?.length) {
        // }
        this.props.getProducts();
        this.props.getFilters();
    }

    render() {
        return (
            <div className="App">
                <h1>Product List Page</h1>
            </div>
        )
    }
}