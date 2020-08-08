import { getProducts } from 'store/products/actions';
import { getFilters } from 'store/filters/actions';
import { connect } from 'react-redux';

import ProductList from './ProductList';

const mapStore = ({ products }) => ({
    products: products.products,
    loading: products.loading
})

const mapDispatch = {
    getProducts,
    getFilters,
    // applyFilters
}

export default connect(mapStore, mapDispatch)(ProductList);