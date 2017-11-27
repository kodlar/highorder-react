import React, {Component} from 'react'
import './LoaderHOC.css';

const LoaderHOC = (propName) => (WrappedComponent) => {
    return class LoaderHOC extends Component{
            render(){
               console.log('deger:',this.props[propName].length);
               return (this.props[propName].length === 0 ? <div className="loadergif">Yükleniyor...</div> : <WrappedComponent {...this.props}/>)
            }
    }
}

export default LoaderHOC;