import React from 'react';
import PropTypes from 'prop-types';

function ProductCard(props) {
    const { product, onAdd, onDelete, isAdded } = props;
    return (
        <div className="card">
            <img className="img-responsive" style={{ "width": "220px", "height": "220px" }} src={product?.image} alt="Card image cap" />
            <p className="h5">{product?.title || 'NA'}</p>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-8">
                        <ul className="list-group list-group-flush">
                            {/* <li className="list-group-item">{product?.title || 'NA'}</li> */}
                            <li className="list-group-item">{product?.brand || 'NA'}</li>
                            <li className="list-group-item">$ {product?.price?.final_price || 'NA'}</li>
                            <li className="list-group-item">{product?.discount || 'NA'} %</li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Color</li>
                            {!isAdded ? <li className="list-group-item text-success" onClick={() => onAdd(product)}>Add (+)</li>
                                :
                                <li className="list-group-item text-danger" onClick={() => onDelete(product.id)}>Remove (-)</li>
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
