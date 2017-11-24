import React, {Component} from 'react';
import moment from 'moment';

class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const tarih = moment().format('dddd');
        return(<footer class="footer">Tarih: {tarih}</footer>)
    }
}

export default Footer;