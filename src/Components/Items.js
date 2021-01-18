import React, { Component } from 'react';
import ItemEntity from './ItemEntity';
import PropTypes from 'prop-types';


class Items extends Component{
    render() {
        return this.props.items.map((item)=>(
            <ItemEntity key= {item.id} item={item} addToCart={this.props.addToCart}
            removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>))
    }
}

//PropType
Items.propTypes ={
    items: PropTypes.array.isRequired
}

export default Items;