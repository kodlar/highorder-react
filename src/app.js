import Header from './Components/header';
import Footer from './Components/footer';
import React, {Component} from 'react';
import ProductList from './Components/productlist';
import {sleeper} from './Components/utility'
class App extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = { products:[]}
    }
    

    componentDidMount(){
        fetch('https://api.randomuser.me/?nat=us,gb&results=5')
        .then(response => response.json())
       
        .then(parsedResponse => parsedResponse.results.map(user => (
            {
                name: `${user.name.first} ${user.name.last}`,
                email : user.email,
                thumbnail: user.picture.thumbnail
            }
        )))
        .then(sleeper(3000))
        .then(products => this.setState({products : products}))
    }
   

    render(){
        return(
            <div className="Container">
            
                <Header />
                
                  {/* App Layout Page -- Buraya routing yönetimi ekleyebiliriz. */}
                
                    <ProductList products={this.state.products} />
                
                
                <Footer />
         
            </div>
        )
    }
}
export default App;
