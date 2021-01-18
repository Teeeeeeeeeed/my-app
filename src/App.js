import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Items from './Components/Items';
import Header from './Components/layout/Header';
import Search from './Components/Search';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import About from './Components/pages/About';
import axios from 'axios';
import Sell from './Components/pages/Sell';

class App extends Component{
  state = {
    items: [],
    cart: []
  }

  componentDidMount() {
    const url ='http://marketplaceapi.wip/index.php/api/get'
    axios.get(url).then(res=>this.setState({items: res.data}))
  }

  removeFromCart = (id) =>{
    var cart = this.state.cart
    this.setState({cart: cart.filter(word => word !== id)}) ;
    }

  addToCart = (id) => {
    this.setState({cart: this.state.cart.concat(id)})
  }

  sellItem = (object) => {
    const url='http://marketplaceapi.wip/index.php/api/form'
    axios.post(url,object )
  }

  search = (name) => {
    const url = 'http://marketplaceapi.wip/index.php/api/get'
    if (name ==''){
      axios.get(url).then(res=>this.setState({items:res.data}))
    } else {
    axios.get(url+'/'+name).then(res=>this.setState({items:[res.data]}))
    }
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header/>
            <Route exact path='/' render={props=>(
              <React.Fragment>
              <Search search={this.search}/>
              <Items items={this.state.items} addToCart={this.addToCart} removeFromCart={this.removeFromCart}
              cart={this.state.cart}/>
              </React.Fragment>
            )}/>
            <Route exact path='/sell' render={props=>(
              <React.Fragment>
                <Sell sellItem={this.sellItem}/>
              </React.Fragment>
              )}/>
            <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;