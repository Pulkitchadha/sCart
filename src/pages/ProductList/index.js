import { connect } from 'react-redux';

import { getProducts, searchProducts } from 'store/products/actions';
import { getFilters } from 'store/filters/actions';
import { addProduct, removeProduct } from 'store/cart/actions';
import ProductList from './ProductList';

const mapStore = ({ products, filters, user, cart }) => ({
    products: products.products,
    filters: filters.filters,
    user: user,
    cartProducts: cart.products,
    loading: products.loading
})

const mapDispatch = {
    getProducts,
    getFilters,
    searchProducts,
    addProduct,
    removeProduct
}

export default connect(mapStore, mapDispatch)(ProductList);