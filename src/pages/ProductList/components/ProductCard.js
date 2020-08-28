import React from 'react';
import PropTypes from 'prop-types';
import { truncateString } from 'services/utility'

function ProductCard({ product, onAdd, onDelete, isAdded }) {
    return (
        <div className="card">
            <img className="img-responsive product-card" src={product?.image} alt="Product" />
            <p className="h5">{truncateString(product?.title, 50)}</p>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-8">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{product?.brand}</li>
                            <li className="list-group-item">$ {product?.price?.final_price}</li>
                            <li className="list-group-item">{product?.discount} %</li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item text-center">{product?.colour?.title}</li>
                            {!isAdded ? (
                                <li className="list-group-item text-success cursor-pointer text-center" onClick={() => onAdd(product)}><button className="btn btn-primary">Add</button></li>
                            ) : (
                                <li className="list-group-item text-danger cursor-pointer text-center" onClick={() => onDelete(product.id)}><button className="btn btn-danger">Remove</button></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object,
    isAdded: PropTypes.bool
}

ProductCard.defaultTypes = {};

export default ProductCard;

