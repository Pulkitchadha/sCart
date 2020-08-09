import React, { Component } from 'react';

import Header from './components/Header';
import FilterMenu from './components/FilterMenu';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

export default class ProductList extends Component {
    componentDidMount() {
        if (!this.props.products?.length) {
            this.props.getProducts();
        }
        if (!this.props.filters?.length) {
            this.props.getFilters();
        }
    }

    isAddedInCart = (id) => {
        return !!this.props.cartProducts.find(p => p.id === id);
    }

    render() {
        const { products, user, filters, cartProducts, searchProducts, addProduct, removeProduct } = this.props;
        return (
            <div>
                <div className="container-fluid">
                    <div className="row content">
                        <Header 
                            userName={user?.username} 
                            cartItems={cartProducts?.length} 
                            onSearch={searchProducts} 
                        />
                        <FilterMenu 
                            filters={filters}
                        />
                        <div className="col-sm-9">
                            <div className="row">
                                {
                                    products.map(product => (
                                        <div className="col-sm-5" key={product.id}>
                                            <ProductCard
                                                product={product}
                                                onAdd={addProduct}
                                                onDelete={removeProduct}
                                                isAdded={this.isAddedInCart(product.id)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}