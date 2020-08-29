import React, { Component } from 'react'

class Search extends Component {

    state= {
        text: '',
    }

    onChange = (e) => {
        this.setState({ text: e.target.value });
    }
    render() {
        return (
            <div>
                <form className='form'>
                    <input 
                        type='text'
                        name='text'
                        placeholder='Search Users...'
                        value={this.state.text}
                        onChange={this.onChange}
                    ></input>
                    <input 
                        type='submit'
                        value='Search'
                        className='btn btn-dark btn-block'
                    ></input>
                </form>
            </div>
        )
    }
}

export default Search
