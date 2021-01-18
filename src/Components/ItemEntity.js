import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemEntity extends Component {
    render() {
        const { id, name , description , price } = this.props.item;
        if (this.props.cart.includes(this.props.item)){
            return (
                <div style ={itemStyle}>
                    <h2>
                        {name}
                    </h2>
                    <p>
                        {description}
                    </p>
                    <h4>
                        {'$ '}{price}
                    </h4>
                    <button 
                    className ="btn-primary"
                    type='submit' 
                    onClick={this.props.addToCart.bind(this, this.props.item)}>
                    Add To Cart</button>
                    <button 
                    className ="btn-primary" 
                    type='submit'  
                    onClick={this.props.removeFromCart.bind(this,this.props.item)}>
                    Remove From Cart</button>
                </div>
            )
        } else {
            return (
                <div style ={itemStyle}>
                    <h2>
                        {name}
                    </h2>
                    <p>
                        {description}
                    </p>
                    <h4>
                        {'$ '}{price}
                    </h4>
                    <button 
                    className ="btn-primary"
                    type='submit' 
                    onClick={this.props.addToCart.bind(this, this.props.item)}>
                    Add To Cart</button>
                </div>
            )
        }
    }
}

const itemStyle = {
    backgroundColor: '#f4f4f4',
    padding:'10px',
    margin:'10px',
}
//PropTypes
ItemEntity.propTypes = {
    item: PropTypes.object.isRequired
}

export default ItemEntity
