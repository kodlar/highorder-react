import React, {Component} from 'react'
import './LoaderHOC.css';

const isEmpty = (prop) => (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );

const LoaderHOC = (propName) => (WrappedComponent) => {
    return class LoaderHOC extends Component{
            render(){
               console.log('deger:',this.props[propName].length);
               return isEmpty(this.props[propName]) ? <div className="loadergif">Yükleniyor...</div> : <WrappedComponent {...this.props}/>
               
            }
    }
}

export default LoaderHOC;