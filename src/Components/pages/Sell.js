import React, { Component } from 'react'

export class Sell extends Component {
    state={
        name:'',
        price:'',
        description:''
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.sellItem(this.state);
        this.setState({name:'',price:'',description:''})
    }

    onChange =(e) => this.setState({[e.target.name]:e.target.value});

    render() {
        return (
            <form style={{display:'flex', flexDirection:'column'}} onSubmit={this.onSubmit}>
                <input 
                type='text' 
                name='name'
                placeholder='Name of item here'
                style={{flex:'5', padding: '5px'}}
                value={this.state.name}
                onChange={this.onChange}
                />
                <input 
                type='integer' 
                name='price'
                placeholder='price here'
                style={{flex:'5', padding: '5px'}}
                value={this.state.price}
                onChange={this.onChange}
                />
                <input 
                type='text' 
                name='description'
                placeholder='Description of item here'
                style={{flex:'5', padding: '5px'}}
                value={this.state.description}
                onChange={this.onChange}
                />
                <button 
                type='submit' 
                className='btnSearch' 
                variant='secondary' 
                style={{flex: '1'}}>
                Sell Item
                </button>
            </form>
        )
    }
}
export default Sell