import React, { Component } from 'react'
import LoaderHOC from '../../HOC/Loader/LoaderHOC'
import './list.css'

@LoaderHOC('products')
class ProductList extends Component {

  render() {
    const filteredProducts = this.props.products;
    return (
      <div className="row marketing">
        <div className="col-lg-6">
            {/* Üst Componentten gelen property*/}
            Component Load Speed {this.props.loadtime} second
            <ul>
            {filteredProducts.map(
              (product) => <li key={product.email}>
                <img src={product.thumbnail} role="presentation" />
                <div className="contactData test">
                  <strong>{product.name}</strong><br /><small>{product.email}</small>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
export default ProductList;
//diğer bir yazım şekli carrier fonksiyon örneği
//export default LoaderHOC('products')(ProductList);