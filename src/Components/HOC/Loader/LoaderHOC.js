import React, {Component} from 'react'
import './LoaderHOC.css';

const LoaderHOC = (WrappedComponent) => {
    return class LoaderHOC extends Component{
            render(){
               console.log('deger:',this.props.products.length);
               return (this.props.products.length === 0 ? <div className="loadergif">Yükleniyor...</div> : <WrappedComponent {...this.props}/>)
            }
    }
}

export default LoaderHOC;