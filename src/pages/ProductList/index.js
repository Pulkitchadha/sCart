import { connect } from 'react-redux';

import { getProducts, searchProducts, applyFilter } from 'store/products/actions';
import { getFilters } from 'store/filters/actions';
import { addProduct, removeProduct } from 'store/cart/actions';
import ProductList from './ProductList';

const mapStore = ({ products, filters, user, cart }) => ({
    products: products.products,
    filters: filters.filters,
    user: user,
    cartProducts: cart.products,
    loading: products.loading || filters.loading
})

const mapDispatch = {
    getProducts,
    getFilters,
    searchProducts,
    addProduct,
    removeProduct,
    applyFilter
}

export default connect(mapStore, mapDispatch)(ProductList);