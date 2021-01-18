import React, { Component } from 'react'

export class Search extends Component {
    state = {
        name: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.name);
        this.setState({name:''})
    }

    onChange =(e) => this.setState({[e.target.name]:e.target.value});

    render() {
        return (
            <form style={{display:'flex'}} onSubmit={this.onSubmit}>
                <input 
                type='text' 
                name='name' 
                placeholder='Search item here'
                style={{flex:'5', padding: '5px'}}
                value={this.state.name}
                onChange={this.onChange}
                />

                <button 
                type='submit' 
                className='btnSearch' 
                variant='secondary' 
                style={{flex: '1'}}>
                Search
                </button>
            </form>
        )
    }
}

export default Search
