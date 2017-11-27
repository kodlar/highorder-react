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

            //Geçen süreyi hesaplamak için yaptığımız hareketler test amaçlı
            componentDidMount(){
                this.startTime = Date.now();
            }
            componentWillUpdate(){
                this.endTime = Date.now();
            }


            render(){
                //burada bir property yaratıp bu propertiyi bir sonraki functiona spread operatörü ile geçiriyoruz.
                const myProps = {
                    loadtime : ((this.endTime - this.startTime) / 1000).toFixed(2)
                };

               console.log('deger:',this.props[propName].length);
               return isEmpty(this.props[propName]) ? <div className="loadergif">Yükleniyor...</div> 
               : <WrappedComponent {...this.props} {...myProps}/>
               
            }
    }
}

export default LoaderHOC;