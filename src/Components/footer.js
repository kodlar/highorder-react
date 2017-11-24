import React, {Component} from 'react';
import moment from 'moment';

class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const tarih = moment().format('dddd');
        return(<div>Tarih: {tarih}</div>)
    }
}

export default Footer;