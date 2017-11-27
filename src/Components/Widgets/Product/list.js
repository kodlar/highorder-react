import React,{Component} from 'react'
import LoaderHOC from '../../HOC/Loader/LoaderHOC'
import './list.css'
@LoaderHOC
class ProductList extends Component{

    render(){
        const filteredProducts = this.props.products;
        return(
            <div className="row marketing">
            <div className="col-lg-6">
            <ul>
            {filteredProducts.map(
              (product) => <li key={product.email}>
                <img src={product.thumbnail} role="presentation" />
                <div className="contactData test">
                  <strong>{product.name}</strong><br/><small>{product.email}</small>
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