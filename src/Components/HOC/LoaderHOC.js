import React, {Component} from 'react'
import './LoaderHOC.css';

const isEmpty = (prop) => (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );
  

const LoaderHOC = (WrappedComponent) => {
    return class LoaderHoc extends Component{
            render(){
               return (this.props.products.lenght === 0 ? <div className="loader"></div> : <WrappedComponent {...this.props}/>)
            }
    }
}

export default LoaderHOC;