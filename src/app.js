import Header from './Components/header'
import Footer from './Components/footer'
import React, {Component} from 'react';

class App extends Component{
    render(){
        return(
            <div>
                <Header />
                   Burası app anasayfa
                <Footer />
            </div>
        )
    }
}
export default App;
