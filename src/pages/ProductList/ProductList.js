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
        const { searchProducts, addProduct, removeProduct, applyFilter, ...restProps } = this.props;
        return (
            <div>
                <div className="container-fluid">
                    <div className="row content">
                        <Header
                            userName={restProps.user?.username}
                            cartItems={restProps.cartProducts?.length}
                            onSearch={searchProducts}
                        />
                        <FilterMenu
                            filters={restProps.filters}
                            applyFilter={applyFilter}
                        />
                        <div className="col-sm-10">
                            <div className="row">
                                {/* {
                                    restProps.loading && (
                                        <div className="col-sm-12 text-center pt-5">
                                            <span className="h3 ">Loading...</span>
                                        </div>
                                    )
                                } */}
                                {
                                    restProps.products?.length ? restProps.products?.map(product => (
                                        <div className="col-sm-4" key={product.id}>
                                            <ProductCard
                                                product={product}
                                                onAdd={addProduct}
                                                onDelete={removeProduct}
                                                isAdded={this.isAddedInCart(product.id)}
                                            />
                                        </div>
                                    )) : (
                                            <div className="col-sm-12 text-center pt-5">
                                                <span className="h3 ">No product found.</span>
                                            </div>
                                        )
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